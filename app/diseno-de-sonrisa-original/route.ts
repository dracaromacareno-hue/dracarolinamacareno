import { injectLandingTracking } from '@/lib/landing-tracking';

/*
  Versión ORIGINAL de la landing de diseño de sonrisa (el embudo de GHL), guardada
  el 24-oct-2026 por decisión de la dueña para comparar conversiones contra la
  landing nueva en Next.js, que desde ese día ocupa /diseno-de-sonrisa.

  - Mismo embudo de GHL y misma página de gracias (/gracias-diseno-de-sonrisa), así
    que Google Ads y Meta cuentan la conversión igual en las dos.
  - landingId distinto («diseno-de-sonrisa-original») y la marca de WhatsApp sale con
    `p: diseno-de-sonrisa-original`, para separar en GHL los leads de cada versión.
  - noindex: es una copia para pauta; no debe competir en Google con la nueva.
  - Cuando se decida la ganadora, se borra la que pierda.
*/

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const response = await fetch(
    'https://sites.leadconnectorhq.com/preview/oS37NiFZQpFc66t5Ts4L',
    { cache: 'no-store' }
  );

  let html = await response.text();

  // Elimina cualquier <meta name="robots" content="...noindex..."> estático
  html = html.replace(
    /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex)[^>]*>/gi,
    ''
  );

  // Elimina los scripts "_preview" de GoHighLevel: inyectan
  // <meta name="robots" content="noindex"> vía JavaScript en tiempo de
  // renderizado. Invisibles en el HTML crudo (por eso curl no lo detecta),
  // pero el renderizador de Google (Prueba en tiempo real de Search
  // Console) sí los ejecuta y encuentra el noindex. El contenido visual
  // de la página es autocontenido y no depende de estos scripts.
  html = html.replace(
    /<script[^>]*\bsrc=["']https:\/\/stcdn\.leadconnectorhq\.com\/_preview\/[^"']*["'][^>]*>\s*<\/script>/gi,
    ''
  );

  // Medición y atribución. El HTML viene de GHL, así que WhatsAppLink y
  // appendSourceTag no existen aquí: se inyectan en JS plano. Ver
  // lib/landing-tracking.ts para el porqué de cada pieza.
  html = injectLandingTracking(html, {
    landingId: 'diseno-de-sonrisa-original',
    thankYouPath: '/gracias-diseno-de-sonrisa',
  });

  return new Response(html, {
    status: response.status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
