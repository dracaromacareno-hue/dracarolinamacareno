import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

/**
 * Legacy redirects (301): URLs antiguas de la era WordPress que siguen
 * apareciendo en Google Search Console como 404. Cada redirect 301 transfiere
 * autoridad SEO de la URL vieja a su equivalente moderno.
 *
 * IMPORTANTE: NO redirigir rutas técnicas de WordPress (/wp-admin/*,
 * /wp-content/*), esas se dejan 404 a propósito. Google las olvida en ~3
 * meses; redirigirlas a contenido real puede parecer spam.
 *
 * Auditoría GSC May 2026: 21 URLs en "No se ha encontrado (404)".
 * 16 redirigidas aquí, 5 WordPress legacy descartadas.
 */
const legacyRedirects = [
  // Originales del primer batch (ya en producción)
  { from: '/estetica-oral', to: '/servicios/estetica-dental' },
  { from: '/ortodoncias', to: '/servicios/ortodoncia' },
  { from: '/protesis-hibrida', to: '/servicios/protesis-fija' },
  { from: '/todo-lo-que-debes-saber-de-implantes', to: '/blog/implantes-dentales-medellin' },

  // Batch GSC May 2026, páginas de servicios viejas (12 URLs)
  { from: '/blanqueamiento', to: '/servicios/estetica-dental' },
  { from: '/ortodoncia', to: '/servicios/ortodoncia' },
  { from: '/cirugia-maxilofacial', to: '/servicios/cirugia-maxilofacial' },
  { from: '/protesis-totales', to: '/servicios/rehabilitacion-oral-completa' },
  { from: '/protesis-removibles-totales-o-parciales', to: '/servicios/rehabilitacion-oral-completa' },
  { from: '/protesis-fija-metal-porcelana-o-en-zirconio', to: '/servicios/protesis-fija' },
  { from: '/protesis-fija-metal-porcelana-o-en-zirconio-sobre-implante', to: '/servicios/implantes-dentales' },
  { from: '/coronas-ceramicas-en-zirconio-y-disilicato', to: '/coronas-zirconio-carillas' },
  { from: '/gingivoplastia-o-gingivectomia', to: '/servicios/periodoncia' },
  { from: '/restauraciones-en-resina', to: '/servicios/estetica-dental' },
  { from: '/sobre-dentadura-implanto-soportada', to: '/servicios/implantes-dentales' },
  { from: '/casos-de-exito', to: '/casos-clinicos' },

  // Batch GSC May 2026, contacto (2 URLs)
  { from: '/agenda-tu-cita', to: '/contacto' },
  { from: '/contactanos', to: '/contacto' },

  // Batch GSC May 2026, blog viejo (2 URLs)
  { from: '/tipos-de-implantes-dentales-cuando-no-hay-hueso', to: '/servicios/implantes-dentales' },
  { from: '/descubre-la-importancia-de-los-materiales-usados-en-tratamientos-odontologicos-y-como-pueden-originar-alergias-e-hipersensibilidad', to: '/blog' },

  // Junio 2026, páginas retiradas por falta de contenido real (E-E-A-T):
  // /prensa listaba menciones de medios inventadas; /conferencias era solo un
  // redirect a /casos-clinicos. Se eliminan y se redirigen a destino real.
  { from: '/prensa', to: '/sobre-mi' },
  { from: '/conferencias', to: '/casos-clinicos' },

  // Batch GSC May 2026, "Rastreada sin indexar" (4 URLs viejas que Google rastreó pero no indexó)
  { from: '/dr-carolina-macareno', to: '/dra-carolina-macareno' },           // typo: faltaba la "a" de doctorA
  { from: '/inicio', to: '/' },                                                // WP legacy: home page vieja
  { from: '/protesis-totalesprotesis-totales', to: '/servicios/rehabilitacion-oral-completa' }, // slug bug duplicado
  { from: '/carillas-ceramicas', to: '/coronas-zirconio-carillas' },          // match con landing actual

  // Julio 2026: el caso clínico subperióstico se consolidó en un artículo
  // único con keyword limpia (educación + caso completo). Ver [[memoria]].
  { from: '/blog/caso-clinico-implante-subperiostico', to: '/blog/implantes-subperiosticos-medellin' },

  // Batch GSC jul-2026: URL money-page de la era WP que Google sigue rastreando en 404
  { from: '/implantes-dentales', to: '/servicios/implantes-dentales' },       // 404 real, era la única sin 301
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // WordPress indexaba las URLs CON barra final (p.ej. /estetica-oral/).
    // Sin esto, /estetica-oral/ hacía 2 saltos: trailing-slash strip → legacy
    // redirect. Generamos AMBAS variantes (con y sin "/") apuntando directo al
    // destino final → 1 solo salto, que es como Google consolida autoridad.
    // Para el destino "/" en inglés evitamos "/en/" (no-canónico) → "/en".
    const enDest = (to: string) => (to === '/' ? '/en' : `/en${to}`);

    return [
      // Canonical host: force www → apex (308 permanent) so Bing/Google
      // consolidate authority on https://dracarolinamacareno.com.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.dracarolinamacareno.com' }],
        destination: 'https://dracarolinamacareno.com/:path*',
        permanent: true,
      },
      ...legacyRedirects.flatMap(({ from, to }) => [
        // ES, sin y con barra final, ambas directo al destino final
        { source: from, destination: to, permanent: true },
        { source: `${from}/`, destination: to, permanent: true },
        // EN, idem, colapsando "/en/" → "/en" cuando el destino es la home
        { source: `/en${from}`, destination: enDest(to), permanent: true },
        { source: `/en${from}/`, destination: enDest(to), permanent: true },
      ]),
    ];
  },
async rewrites() {
    return [
      {
        source: '/diseno-de-sonrisa',
        destination: 'https://sites.leadconnectorhq.com/preview/oS37NiFZQpFc66t5Ts4L',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
