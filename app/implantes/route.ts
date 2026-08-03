import { injectLandingTracking } from '@/lib/landing-tracking';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Landing de pauta de implantes, servida bajo .com.
 *
 * Por qué existe (27-jul-2026):
 * La campaña "Implantologia Colombia" apuntaba a dracarolinamacareno.co/implantes.
 * Ese dominio solo aloja landings de pauta y probablemente no se renueva el año
 * entrante, así que había que traer la landing al .com sin romper la campaña, que
 * es la única que produce (10 conversiones a $28,91 en 30 días).
 *
 * Espeja el patrón de app/diseno-de-sonrisa/route.ts con dos diferencias
 * deliberadas, explicadas abajo: noindex y title.
 *
 * ID del embudo en GHL: gZk42QWduMh8rZkpSaw8
 */

const GHL_PAGE = 'https://sites.leadconnectorhq.com/preview/gZk42QWduMh8rZkpSaw8';

export async function GET() {
  const response = await fetch(GHL_PAGE, { cache: 'no-store' });

  let html = await response.text();

  // La página de GHL no trae <title>. Google Ads evalúa la experiencia de la
  // página de destino y un documento sin título es una señal negativa; además
  // el navegador muestra la URL cruda en la pestaña. Se inyecta uno solo si
  // falta, para no pisar el que la doctora ponga después desde GHL.
  if (!/<title>/i.test(html)) {
    html = html.replace(
      /<head([^>]*)>/i,
      '<head$1><title>Implantes Dentales en Medellín | Dra. Carolina Macareno</title>',
    );
  }

  // Medición y atribución, igual que en /diseno-de-sonrisa.
  // Ojo: esta landing NO tiene ningún enlace de WhatsApp (verificado el
  // 3-ago-2026, no hay un solo wa.me en el HTML). El script deja los enlaces
  // listos para cuando se agregue el botón; mientras tanto solo mide el
  // formulario.
  html = injectLandingTracking(html, {
    landingId: 'implantes',
    thankYouPath: '/gracias-implantes',
  });

  return new Response(html, {
    status: response.status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      // A DIFERENCIA de /diseno-de-sonrisa, esta landing NO se indexa.
      // Es exclusivamente destino de pauta y competiría con
      // /servicios/implantes-dentales, que ya rankea en posición 6,2 con 211
      // impresiones. Dos páginas propias peleando la misma consulta reparten la
      // señal: es la canibalización que la auditoría de julio ya detectó entre
      // /coronas-zirconio-carillas y /blog/coronas-zirconia-porcelana.
      // Los anuncios no necesitan que la página esté indexada.
      // Si algún día se quiere indexar, cambiar a 'index, follow' y quitar el
      // noindex que GHL inyecta, como hace la ruta de diseño.
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
