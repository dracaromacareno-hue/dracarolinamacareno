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
