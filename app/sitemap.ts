import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

const BASE = 'https://dracarolinamacareno.com';
const LOCALES = ['es', 'en'] as const;
type Locale = (typeof LOCALES)[number];

/**
 * Routes that exist on the site under [locale] and should be indexed.
 * Each entry: { path: route under locale prefix, priority, changefreq }.
 * Excluded by design: legacy redirects, /api routes, /_next, anything with a query param.
 *
 * Why this is dynamic (May 2026):
 * The previous static public/sitemap.xml omitted 14 commercial pages
 * (services/*, all-on-4-medellin, dental-tourism-colombia, casos clínicos, etc.).
 * GA4 showed Organic Search at only 19 sessions/30d, confirming Google
 * wasn't discovering most of the site. This file fixes that by enumerating
 * every real route + auto-generating hreflang for ES/EN.
 */
const STATIC_ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/sobre-mi', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/dra-carolina-macareno', priority: 0.95, changeFrequency: 'monthly' },

  // Services (hub + sub-pages)
  { path: '/servicios', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/servicios/implantes-dentales', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/servicios/implantes-cigomaticos', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/servicios/rehabilitacion-oral-completa', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/servicios/diseno-de-sonrisa', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/servicios/protesis-fija', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/servicios/estetica-dental', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/servicios/consulta-diagnostico', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/servicios/endodoncia', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/periodoncia', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/ortodoncia', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/cirugia-maxilofacial', priority: 0.8, changeFrequency: 'monthly' },

  // Commercial landings
  { path: '/all-on-4-medellin', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/dental-tourism-colombia', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/dental-implants-for-us-patients', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/turismo-dental-puerto-rico', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/turismo-dental-panama', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/smile-makeover-colombia', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/coronas-zirconio-carillas', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/landing/dientes-fijos', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/landing/sonrisa-360', priority: 0.85, changeFrequency: 'monthly' },

  // Trust / authority
  { path: '/casos-clinicos', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog/caso-clinico-implante-convencional', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/blog/implantes-subperiosticos-medellin', priority: 0.75, changeFrequency: 'monthly' },

  // Content
  { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },

  // Books
  { path: '/libros', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/libros/el-poder-de-tu-sonrisa', priority: 0.8, changeFrequency: 'monthly' },

  // Contact
  { path: '/contacto', priority: 0.85, changeFrequency: 'monthly' },

  // Legal (required by Google Ads + Meta Ads policies, low SEO priority)
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

/**
 * Páginas EN que SÍ son objetivo de indexación independiente.
 *
 * Julio 2026: revertimos PARCIALMENTE la decisión de junio (ver el comentario
 * dentro de sitemap()). La premisa de junio era que el mercado extranjero no
 * justificaba gastar indexación. Los datos de julio la contradicen:
 *
 *   - EE.UU. genera 3.166 impresiones orgánicas, MÁS que Colombia (2.139).
 *   - /en/blog/turismo-dental-en-colombia-seguro es la página #2 de todo el
 *     sitio por impresiones (2.212) pese a NO estar en el sitemap.
 *   - Puerto Rico convierte al 2,70 % de CTR, el mejor de todos los mercados.
 *   - Turismo dental produce $3,2M COP por hora de silla contra $410k de un
 *     tratamiento pequeño. Es el segmento de mayor margen del consultorio.
 *
 * Se devuelven SOLO las páginas que atacan ese mercado (9 de 62), no el espejo
 * completo, precisamente para no repetir la dilución que motivó junio. Si
 * "Descubierta: sin indexar" vuelve a subir por encima de ~35, esta lista es lo
 * primero que se recorta.
 *
 * Las landings en inglés que viven bajo el locale ES (/dental-tourism-colombia,
 * /dental-implants-for-us-patients, /smile-makeover-colombia,
 * /turismo-dental-puerto-rico) ya están en STATIC_ROUTES y no se repiten aquí.
 */
const EN_CRAWL_TARGETS: string[] = [
  '/',
  '/dra-carolina-macareno',
  '/servicios/implantes-dentales',
  '/servicios/implantes-cigomaticos',
  '/servicios/rehabilitacion-oral-completa',
  '/all-on-4-medellin',
  '/blog/turismo-dental-en-colombia-seguro',
  '/blog/costo-implantes-dentales-colombia',
  '/contacto',
];

function alternatesFor(path: string) {
  const esUrl = path === '/' ? BASE : `${BASE}${path}`;
  const enUrl = path === '/' ? `${BASE}/en` : `${BASE}/en${path}`;
  return {
    esUrl,
    enUrl,
    languages: {
      es: esUrl,
      'es-419': esUrl,
      en: enUrl,
      'x-default': esUrl,
    },
  };
}

function buildEnEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], lastmod?: Date): MetadataRoute.Sitemap[number] {
  const { enUrl, languages } = alternatesFor(path);
  return {
    url: enUrl,
    lastModified: lastmod,
    changeFrequency,
    priority,
    alternates: { languages },
  };
}

function buildEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], lastmod?: Date): MetadataRoute.Sitemap[number] {
  const esUrl = path === '/' ? BASE : `${BASE}${path}`;
  const enUrl = path === '/' ? `${BASE}/en` : `${BASE}/en${path}`;
  return {
    url: esUrl,
    lastModified: lastmod,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        es: esUrl,
        'es-419': esUrl,
        en: enUrl,
        'x-default': esUrl,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static routes en español: siempre son objetivo de indexación.
  //
  // Junio 2026: dejamos de empujar las URLs /en/* como entradas independientes
  // del sitemap. La audiencia es ~90% hispana y el espejo inglés se llevaba
  // ~37 de las 63 URLs en "Descubierta sin indexar" de GSC, diluyendo el crawl
  // budget. El inglés SIGUE existiendo y SIGUE declarado vía hreflang
  // (buildEntry incluye alternates.languages.en), solo dejamos de ofrecerlo
  // como objetivo de indexación independiente. 100% reversible.
  //
  // Julio 2026: la decisión de junio CUMPLIÓ su objetivo ("Descubierta sin
  // indexar" bajó de 63 a 20) y se mantiene para el espejo completo. Pero se
  // revierte para 9 páginas puntuales, ver EN_CRAWL_TARGETS arriba: los datos
  // de julio muestran que el mercado de turismo dental es el de mayor margen
  // por hora de silla, y sus páginas en inglés estaban rankeando sin soporte
  // de sitemap.
  for (const { path, priority, changeFrequency } of STATIC_ROUTES) {
    entries.push(buildEntry(path, priority, changeFrequency));
  }

  // Páginas EN seleccionadas como objetivo de indexación independiente.
  // Heredan priority/changeFrequency de su equivalente ES cuando existe.
  const staticByPath = new Map(STATIC_ROUTES.map((r) => [r.path, r]));
  for (const path of EN_CRAWL_TARGETS) {
    const es = staticByPath.get(path);
    if (es) {
      entries.push(buildEnEntry(path, es.priority, es.changeFrequency));
      continue;
    }
    // Rutas de blog: no viven en STATIC_ROUTES, se resuelven contra blog-posts.
    const slug = path.startsWith('/blog/') ? path.slice('/blog/'.length) : null;
    const post = slug ? blogPosts.find((p) => p.slug === slug && !p.redirected) : undefined;
    const lastmodSource = post?.lastModified || post?.publishDate;
    entries.push(
      buildEnEntry(path, 0.85, 'monthly', lastmodSource ? new Date(lastmodSource) : undefined),
    );
  }

  // Blog posts (dynamic from lib/blog-posts.ts).
  // Prefer post.lastModified (real edit date) over publishDate so Google sees
  // accurate freshness in the sitemap, same signal we emit in Article schema.
for (const post of blogPosts.filter((p) => !p.redirected)) {
    const lastmodSource = post.lastModified || post.publishDate;
    const lastmod = lastmodSource ? new Date(lastmodSource) : undefined;
    // Spanish only as crawl target; EN sigue declarado vía hreflang en buildEntry.
    entries.push(buildEntry(`/blog/${post.slug}`, 0.85, 'monthly', lastmod));
  }

  // Landing de campaña "Diseño de Sonrisa" — servida vía Route Handler
  // (app/diseno-de-sonrisa/route.ts), no vive bajo [locale]. Sin versión EN.
  entries.push({
    url: `${BASE}/diseno-de-sonrisa`,
    changeFrequency: 'monthly',
    priority: 0.9,
  });

  return entries;
}
