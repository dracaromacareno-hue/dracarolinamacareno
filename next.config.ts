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
 * Cache del HTML en el CDN (agosto 2026). Es un arreglo de RASTREO, no de estilo.
 *
 * El problema medido: TODA página HTML se servía con
 * `cache-control: private, no-cache, no-store, max-age=0, must-revalidate` y
 * `x-vercel-cache: MISS` en cada petición, incluida la segunda seguida. O sea,
 * el CDN de Vercel no guardaba nada y cada visita (y cada rastreo de Googlebot)
 * despertaba la función serverless. Y eso pese a que el build ya prerrenderiza
 * las 137 páginas como estáticas: el trabajo estaba hecho y se tiraba a la basura.
 *
 * La causa es el middleware de i18n. Reproducido en local con `next start`:
 * `/servicios/implantes-dentales` (pasa por middleware) → `no-store`;
 * `/sitemap.xml` (el matcher lo excluye por tener punto) → `public` + HIT.
 * Cuando el middleware reescribe una ruta, Next marca la respuesta como no
 * cacheable porque no puede saber que la reescritura es determinista. Aquí sí
 * lo es: no hay sesiones, no hay contenido por usuario, `localeDetection` está
 * en false y el idioma se decide por la URL, no por cabeceras.
 *
 * Por qué importa para SEO: Google ajusta la tasa de rastreo al tiempo de
 * respuesta del servidor. Un sitio que responde desde el origen en cada
 * petición se rastrea más despacio que uno que responde desde el CDN, y con 129
 * URLs en el sitemap eso es la diferencia entre indexar en días o en semanas.
 *
 * `s-maxage=86400` cachea en el CDN un día; `stale-while-revalidate` sirve la
 * copia vieja mientras se refresca, así nadie espera. `max-age=0` deja el
 * navegador del visitante fuera, que es lo que queremos: si la dueña corrige un
 * precio, no quiere que un paciente vea el viejo por tener caché local.
 *
 * No hay riesgo de servir contenido viejo tras un deploy: en Vercel la caché
 * del CDN va atada al deployment, un despliegue nuevo la invalida entera.
 *
 * Se excluyen /api y las landings de pauta (`/implantes`, `/diseno-de-sonrisa` y
 * sus gracias): son Route Handlers que hacen proxy de GoHighLevel en vivo y
 * ponen su propio `no-store` a propósito.
 */
const htmlCacheHeader = [
  {
    key: 'Cache-Control',
    value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
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
  // Consolidación 2-ago-2026: el post de Panamá se fusionó en la landing para no
  // canibalizar la keyword "turismo dental Panamá". Ver lib/blog-posts.ts.
  { from: '/blog/turismo-dental-desde-panama', to: '/turismo-dental-panama' },

  // Originales del primer batch (ya en producción)
  { from: '/estetica-oral', to: '/servicios/estetica-dental' },
  { from: '/ortodoncias', to: '/servicios/ortodoncia' },
  { from: '/protesis-hibrida', to: '/servicios/protesis-fija' },
  { from: '/todo-lo-que-debes-saber-de-implantes', to: '/servicios/implantes-dentales' }, // era -> /blog/implantes-dentales-medellin (ahora redirigido); directo evita doble salto

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
  { from: '/tipos-de-implantes-dentales-cuando-no-hay-hueso', to: '/servicios/implantes-cigomaticos' }, // "cuando no hay hueso" = caso cigomático (sin injerto); antes iba a implantes-dentales
  { from: '/descubre-la-importancia-de-los-materiales-usados-en-tratamientos-odontologicos-y-como-pueden-originar-alergias-e-hipersensibilidad', to: '/blog' },

  // Junio 2026, páginas retiradas por falta de contenido real (E-E-A-T):
  // /prensa listaba menciones de medios inventadas; /conferencias era solo un
  // redirect a /casos-clinicos. Se eliminan y se redirigen a destino real.
  { from: '/prensa', to: '/sobre-mi' },
  { from: '/conferencias', to: '/casos-clinicos' },

  // Julio 2026: slugs legales en español que usan las landings de pauta.
  // El pie de página de los embudos de GHL enlaza a /politica-privacidad y
  // /terminos con ruta RELATIVA. Mientras los embudos vivían en .co eso
  // resolvía a las páginas de GHL, pero al servirlos desde .com quedaron en 404.
  //
  // Importa más de lo que parece: son landings que recogen nombre, teléfono y
  // correo de pacientes. Google Ads exige política de privacidad accesible en
  // ese tipo de página (un 404 ahí es causal de desaprobación del anuncio), y
  // la Ley 1581 de Habeas Data exige que esté disponible en el momento de la
  // recolección. /terminos además estaba roto en los dos dominios.
  //
  // Se redirige a las páginas legales que el sitio YA mantiene, en vez de
  // duplicar las de GHL: una sola fuente de verdad para el texto legal.
  { from: '/politica-privacidad', to: '/privacy-policy' },
  { from: '/terminos', to: '/terms' },

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

  // Fase 1 canibalización (jul 2026): 3 artículos de blog duplicados con 0
  // impresiones (Google ya eligió la landing/página comercial como ganadora).
  // Ver mapa_canibalizacion.md. El flatMap añade /en{from} -> /en{to};
  // verificado que los 3 destinos /en existen (200), no crean 404.
  { from: '/blog/all-on-4-medellin', to: '/all-on-4-medellin' },
  { from: '/blog/implantes-dentales-medellin', to: '/servicios/implantes-dentales' },
  { from: '/blog/turismo-dental-medellin', to: '/dental-tourism-colombia' },
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    /*
      Next 16 va a EXIGIR declarar aquí cada calidad que se use en un
      `<Image quality={...}>`. Hoy solo avisa por consola; en la próxima versión
      mayor rompe el build.
      Se usa `quality={90}` en tres sitios: la foto del hero y la portada del
      libro (dos veces). El 75 es el valor por defecto de Next y hay que dejarlo
      declarado, o las imágenes que no piden calidad explícita dejan de servirse.
    */
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // Cachea el HTML en el CDN. Ver htmlCacheHeader.
        source: '/((?!api/|implantes|gracias-implantes|diseno-de-sonrisa|gracias-diseno-de-sonrisa).*)',
        headers: htmlCacheHeader,
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
        source: '/gracias-diseno-de-sonrisa',
        destination: 'https://sites.leadconnectorhq.com/preview/jt6T58ZsZdpn0fvKDh9n',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
