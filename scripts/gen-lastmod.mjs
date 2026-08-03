#!/usr/bin/env node
/**
 * Genera lib/route-lastmod.json: la fecha real de última modificación de cada
 * página, sacada del historial de git.
 *
 * POR QUÉ EXISTE (agosto 2026)
 * El sitemap enviaba 67 de sus 129 URLs SIN etiqueta <lastmod>, y los artículos
 * declaraban su fecha de PUBLICACIÓN en vez de la de edición. Google usa
 * <lastmod> para decidir a qué vuelve y en qué orden: una URL sin fecha, o con
 * una fecha vieja, se queda al final de la cola. Se estaban editando páginas
 * (traducciones, FAQ schema, enlaces comerciales) sin que el sitemap lo dijera,
 * y luego había que pedir la indexación a mano en Search Console, gastando la
 * cuota diaria de 12 URLs en algo que la etiqueta hace sola.
 *
 * POR QUÉ DESDE GIT Y NO A MANO
 * Una fecha escrita a mano se olvida, y una fecha olvidada es peor que ninguna:
 * Google aprende que el <lastmod> del dominio no es fiable y lo empieza a
 * ignorar en todo el sitio. El historial de git no se olvida, ya registra cada
 * cambio y no se puede falsear sin querer.
 *
 * POR QUÉ SE COMMITEA EL JSON EN VEZ DE CALCULARLO EN EL BUILD
 * Vercel clona el repo en modo shallow (historial recortado), así que un
 * `git log` durante el build daría fechas incompletas o vacías. El JSON se
 * genera aquí, con el repo completo, y se sube al repo.
 *
 * CÓMO SE USA
 *   npm run lastmod    → antes de commitear cualquier cambio de contenido
 * Si se olvida, el sitemap simplemente usa las fechas del JSON anterior: se
 * queda desactualizado, no se rompe.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_DIR = join(ROOT, 'app', '[locale]');
const BLOG_POSTS = 'lib/blog-posts.ts';
const OUT = join(ROOT, 'lib', 'route-lastmod.json');

/**
 * `--literal-pathspecs` es obligatorio: sin él, git interpreta los corchetes de
 * `app/[locale]/...` como una clase de caracteres de glob (uno de l,o,c,a,e) y
 * no encuentra ningún archivo, devolviendo fecha vacía en silencio.
 */
function git(args) {
  return execFileSync('git', ['--literal-pathspecs', ...args], {
    cwd: ROOT,
    encoding: 'utf-8',
    maxBuffer: 64 * 1024 * 1024,
  }).trim();
}

function lastCommitDate(path) {
  const out = git(['log', '-1', '--format=%cI', '--', path]);
  return out || null;
}

function newest(...dates) {
  const valid = dates.filter(Boolean).sort();
  return valid.length ? valid[valid.length - 1] : null;
}

/** Todos los page.tsx bajo app/[locale], con su ruta pública. */
function walkPages(dir, routeSoFar = '') {
  const found = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      // Los segmentos dinámicos ([slug]) no son una ruta real: sus URLs salen
      // de blog-posts.ts y se fechan aparte, por bloque.
      if (name.startsWith('[')) continue;
      found.push(...walkPages(full, `${routeSoFar}/${name}`));
    } else if (name === 'page.tsx') {
      found.push({ route: routeSoFar === '' ? '/' : routeSoFar, file: relative(ROOT, full) });
    }
  }
  return found;
}

/**
 * Una página compone secciones: el texto que ve el paciente suele vivir en
 * `components/sections/*`, no en el page.tsx. Si solo miráramos el page.tsx, un
 * cambio real de contenido (por ejemplo reescribir los testimonios de la home)
 * no movería el <lastmod> y Google no volvería a mirar.
 *
 * Se resuelve un nivel de imports locales (@/components, @/lib). Un grafo
 * completo sería más exacto y mucho más frágil; un nivel cubre el caso real,
 * que es page.tsx → sección.
 */
function localImports(file) {
  const src = readFileSync(join(ROOT, file), 'utf-8');
  const paths = [];
  for (const m of src.matchAll(/from\s+['"]@\/([^'"]+)['"]/g)) {
    const base = m[1];
    for (const ext of ['.tsx', '.ts']) {
      try {
        const candidate = `${base}${ext}`;
        statSync(join(ROOT, candidate));
        paths.push(candidate);
        break;
      } catch {
        /* no existe con esa extensión, se prueba la siguiente */
      }
    }
  }
  return paths;
}

/**
 * Fecha de último cambio de CADA artículo dentro de lib/blog-posts.ts.
 *
 * Los 35 artículos viven en un solo archivo, así que la fecha del archivo no
 * sirve: tocar un artículo marcaría los 35 como modificados y Google dejaría de
 * confiar en la señal. Se recorre el historial del archivo, se extrae el bloque
 * de cada slug en cada revisión y se compara su hash con el de la revisión
 * anterior. La fecha buena es la del commit donde el bloque cambió de verdad.
 */
function blogPostDates() {
  const log = git(['log', '--reverse', '--format=%H %cI', '--', BLOG_POSTS])
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [sha, date] = line.split(' ');
      return { sha, date };
    });

  const lastChange = new Map();
  const prevHash = new Map();

  for (const { sha, date } of log) {
    let content;
    try {
      content = git(['show', `${sha}:${BLOG_POSTS}`]);
    } catch {
      continue; // el archivo no existía todavía en ese commit
    }
    // Bloque = desde `slug: 'x'` hasta el siguiente `slug: '` del archivo.
    const marks = [...content.matchAll(/slug:\s*'([^']+)'/g)];
    for (let i = 0; i < marks.length; i++) {
      const slug = marks[i][1];
      const start = marks[i].index;
      const end = i + 1 < marks.length ? marks[i + 1].index : content.length;
      const hash = createHash('sha1').update(content.slice(start, end)).digest('hex');
      if (prevHash.get(slug) !== hash) {
        prevHash.set(slug, hash);
        lastChange.set(slug, date);
      }
    }
  }
  return lastChange;
}

// --- Ejecución ---------------------------------------------------------------

const status = git(['status', '--porcelain']);
if (status) {
  console.warn(
    'AVISO: hay cambios sin commitear. Sus fechas todavía no están en git, así\n' +
      'que esas páginas quedarán con la fecha del commit anterior. Commitea\n' +
      'primero y vuelve a correr `npm run lastmod`.\n',
  );
}

const routes = {};

for (const { route, file } of walkPages(PAGES_DIR)) {
  const dates = [lastCommitDate(file), ...localImports(file).map(lastCommitDate)];
  const date = newest(...dates);
  if (date) routes[route] = date;
}

for (const [slug, date] of blogPostDates()) {
  routes[`/blog/${slug}`] = newest(routes[`/blog/${slug}`], date);
}

/**
 * Rutas servidas por Route Handler en vez de por page.tsx: no viven bajo
 * [locale], así que el recorrido de arriba no las ve. Solo van las que están en
 * el sitemap; las landings de pauta que no se indexan no hacen falta aquí.
 */
const ROUTE_HANDLERS = { '/diseno-de-sonrisa': 'app/diseno-de-sonrisa/route.ts' };
for (const [route, file] of Object.entries(ROUTE_HANDLERS)) {
  const date = lastCommitDate(file);
  if (date) routes[route] = date;
}

const sorted = Object.fromEntries(Object.entries(routes).sort(([a], [b]) => a.localeCompare(b)));

writeFileSync(
  OUT,
  `${JSON.stringify(
    {
      _comentario:
        'GENERADO POR scripts/gen-lastmod.mjs. No editar a mano: corre `npm run lastmod`.',
      rutas: sorted,
    },
    null,
    2,
  )}\n`,
);

console.log(`${Object.keys(sorted).length} rutas fechadas → ${relative(ROOT, OUT)}`);
