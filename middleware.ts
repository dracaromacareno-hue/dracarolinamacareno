import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const ALLOWED_ORIGINS = [
  'https://dracarolinamacareno.com',
  'https://www.dracarolinamacareno.com',
];

if (process.env.NODE_ENV === 'development') {
  ALLOWED_ORIGINS.push('http://localhost:3000');
}

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const origin = request.headers.get('origin');

  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 204 });
    if (origin && ALLOWED_ORIGINS.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      response.headers.set('Access-Control-Max-Age', '86400');
    }
    return response;
  }

  // Run next-intl middleware for all other requests
  const response = intlMiddleware(request);

  /**
   * Cache del HTML en el CDN. Ver el comentario largo de `htmlCacheHeader` en
   * next.config.ts para el porqué: sin esto Vercel no guarda ni una página y
   * cada rastreo de Googlebot despierta la función serverless.
   *
   * Va aquí Y en next.config: el de next.config cubre las rutas que no pasan
   * por el middleware (robots.txt, sitemap.xml) y este cubre las que sí.
   *
   * Ojo: por sí solo NO basta. Mientras next-intl escribía la cookie
   * NEXT_LOCALE en cada respuesta, esta cabecera se ponía y Vercel la ignoraba,
   * porque una respuesta con Set-Cookie no se puede cachear. Eso se arregla con
   * `localeCookie: false` en i18n/routing.ts; si alguien revierte aquello, esto
   * vuelve a quedar sin efecto y el sitio deja de cachearse en silencio.
   */
  response.headers.set(
    'Cache-Control',
    'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
  );

  /**
   * `Vercel-CDN-Cache-Control` es la que de verdad manda en el CDN de Vercel.
   *
   * `Cache-Control` a secas no basta: la respuesta de la función de Next trae la
   * suya (`private, no-cache, no-store`, que Next pone a las rutas reescritas
   * por middleware) y pisa la que fijamos arriba. Comprobado en dos despliegues.
   *
   * Vercel lee estas tres en orden de prioridad:
   *   Vercel-CDN-Cache-Control  →  solo el CDN de Vercel
   *   CDN-Cache-Control         →  cualquier CDN intermedio
   *   Cache-Control             →  el navegador del visitante
   * Las dos primeras las consume y las quita antes de responder, así que el
   * visitante solo ve la tercera y su navegador no cachea nada: si la dueña
   * corrige un precio, nadie ve el viejo.
   *
   * `x-cache-policy` no hace nada, es un testigo: si aparece en la respuesta,
   * las cabeceras del middleware están llegando; si no aparece, el problema es
   * otro y no vale la pena tocar los valores de arriba.
   */
  response.headers.set('Vercel-CDN-Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  response.headers.set('CDN-Cache-Control', 'public, s-maxage=86400');
  response.headers.set('x-cache-policy', 'html');

  // Set CORS headers on the response
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return response;
}

/**
 * Las landings de pauta y sus páginas de gracias se sirven con Route Handlers
 * (app/<ruta>/route.ts) que hacen proxy del embudo de GoHighLevel. NO viven bajo
 * [locale], así que el middleware de i18n tiene que dejarlas pasar: si las
 * procesa, intenta reescribirlas a /es/... y devuelve 404.
 *
 * Julio 2026: al agregar /implantes y /gracias-implantes se olvidó esta lista y
 * las dos rutas daban 404 en producción aunque el build compilaba bien.
 * Al crear una landing nueva de pauta, agrégala aquí también.
 */
export const config = {
matcher: [
  '/((?!_next|_vercel|api|diseno-de-sonrisa|gracias-diseno-de-sonrisa|implantes|gracias-implantes|.*\\..*).*)',
  '/'
]
};
