import { injectLandingTracking } from '@/lib/landing-tracking';

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
    landingId: 'diseno-de-sonrisa',
    thankYouPath: '/gracias-diseno-de-sonrisa',
  });

  return new Response(html, {
    status: response.status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Robots-Tag': 'index, follow',
    },
  });
}
