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
        en: enUrl,
        'x-default': esUrl,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static routes, Spanish only as crawl targets.
  // Junio 2026: dejamos de empujar las URLs /en/* como entradas independientes
  // del sitemap. La audiencia es ~90% hispana y el espejo inglés se llevaba
  // ~37 de las 63 URLs en "Descubierta sin indexar" de GSC, diluyendo el crawl
  // budget. El inglés SIGUE existiendo y SIGUE declarado vía hreflang
  // (buildEntry incluye alternates.languages.en), solo dejamos de ofrecerlo
  // como objetivo de indexación independiente. 100% reversible.
  for (const { path, priority, changeFrequency } of STATIC_ROUTES) {
    entries.push(buildEntry(path, priority, changeFrequency));
  }

  // Blog posts (dynamic from lib/blog-posts.ts).
  // Prefer post.lastModified (real edit date) over publishDate so Google sees
  // accurate freshness in the sitemap, same signal we emit in Article schema.
  for (const post of blogPosts) {
    const lastmodSource = post.lastModified || post.publishDate;
    const lastmod = lastmodSource ? new Date(lastmodSource) : undefined;
    // Spanish only as crawl target; EN sigue declarado vía hreflang en buildEntry.
    entries.push(buildEntry(`/blog/${post.slug}`, 0.85, 'monthly', lastmod));
  }

  return entries;
}
