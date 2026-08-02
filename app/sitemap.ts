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
 * Historia de esta decisión, para que no se revierta sin contexto.
 *
 * Junio 2026: se dejaron de enviar las URLs /en/* como entradas independientes.
 * La audiencia era ~90 % hispana y el espejo inglés se llevaba 37 de las 63 URLs
 * en "Descubierta: sin indexar", diluyendo el presupuesto de rastreo. Funcionó:
 * bajó de 63 a 20.
 *
 * Julio 2026: se revirtió PARCIALMENTE, para 9 páginas de turismo dental, porque
 * los datos lo contradecían: EE.UU. genera 3.166 impresiones orgánicas (más que
 * Colombia, 2.139); /en/blog/turismo-dental-en-colombia-seguro es la página #2
 * de todo el sitio por impresiones (2.212) pese a NO estar en el sitemap; Puerto
 * Rico convierte al 2,70 % de CTR; y el turismo dental produce $3,2M COP por
 * hora de silla contra $410k de un tratamiento pequeño.
 *
 * AGOSTO 2026: se revierte por completo. Ya están llegando pacientes que solo
 * hablan inglés, así que el mercado internacional dejó de ser una apuesta y pasó
 * a ser una fuente confirmada. Ahora TODA página con versión en inglés real se
 * envía en los dos idiomas.
 *
 * La única exclusión es la de contenido delgado: 14 artículos tienen el inglés
 * en stub (<700 caracteres frente a 2.500-5.000 del español). Enviar esas URLs
 * a Google es peor que no enviarlas, porque una página casi vacía se marca como
 * de baja calidad y arrastra al resto del dominio. Se filtran por longitud, así
 * que en cuanto un artículo se traduce entra al sitemap solo, sin tocar nada.
 */
const EN_MIN_CONTENT_CHARS = 1500;

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

  // Espejo EN completo de las rutas estáticas. Todas son bilingües de verdad
  // (el contenido se ramifica con isEs dentro de cada page.tsx).
  for (const { path, priority, changeFrequency } of STATIC_ROUTES) {
    entries.push(buildEnEntry(path, priority, changeFrequency));
  }

  // Blog posts (dynamic from lib/blog-posts.ts).
  // Prefer post.lastModified (real edit date) over publishDate so Google sees
  // accurate freshness in the sitemap, same signal we emit in Article schema.
for (const post of blogPosts.filter((p) => !p.redirected)) {
    const lastmodSource = post.lastModified || post.publishDate;
    const lastmod = lastmodSource ? new Date(lastmodSource) : undefined;
    entries.push(buildEntry(`/blog/${post.slug}`, 0.85, 'monthly', lastmod));
    // La versión EN solo entra si tiene contenido real. Ver EN_MIN_CONTENT_CHARS.
    if (post.contentEn.length >= EN_MIN_CONTENT_CHARS) {
      entries.push(buildEnEntry(`/blog/${post.slug}`, 0.85, 'monthly', lastmod));
    }
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
