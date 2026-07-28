export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Página de gracias del embudo de implantes, servida bajo .com.
 *
 * Es la pieza que dispara la conversión de Google Ads (tipo "carga de página").
 * Tiene que vivir en el MISMO dominio que la landing, porque la cookie _gcl_aw
 * que guarda el gclid es de un solo dominio: si el paciente aterriza en .com y
 * convierte en .co, el tag dispara pero sin atribución y la campaña marca cero.
 * Ese fue exactamente el bug del embudo de diseño (ver memoria del 27-jul-2026).
 *
 * ID de la página en GHL: 20LT40myHKf4mX2NDrCX  ("Confirmación recibida")
 */

const GHL_PAGE = 'https://sites.leadconnectorhq.com/preview/20LT40myHKf4mX2NDrCX';

export async function GET() {
  const response = await fetch(GHL_PAGE, { cache: 'no-store' });

  const html = await response.text();

  return new Response(html, {
    status: response.status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      // Una página de gracias nunca se indexa: no aporta nada en buscadores y
      // si entra al índice puede recibir visitas directas que inflarían las
      // conversiones con gente que nunca llenó el formulario.
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
