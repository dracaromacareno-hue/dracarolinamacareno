import { injectLandingTracking } from '@/lib/landing-tracking';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Página de gracias del embudo de Diseño de Sonrisa, servida bajo .com.
 *
 * ANTES ERA UN REWRITE EN next.config.ts (7-ago-2026)
 * ---------------------------------------------------
 * Funcionaba para mostrar la página, pero un rewrite entrega el HTML de GHL tal
 * cual: no hay dónde inyectar nada. Medido sobre el HTML servido, el resultado
 * era que sus 2 botones de WhatsApp salían sin la marca de fuente y sin disparar
 * whatsapp_click.
 *
 * Eso deja ciego el punto de mayor intención del embudo: el paciente acaba de
 * dejar sus datos y escribe de una. Ese mensaje llegaba al CRM sin origen, o sea
 * que el lead más caliente era el único que no se podía atribuir a la campaña
 * que lo trajo.
 *
 * Convertirlo en Route Handler, igual que /gracias-implantes, permite inyectar
 * el script de atribución. La página se sigue sirviendo desde el mismo dominio,
 * que es lo que mantiene viva la cookie _gcl_aw y hace que la conversión por
 * carga de URL de Google Ads dispare con atribución.
 *
 * ID de la página en GHL: jt6T58ZsZdpn0fvKDh9n
 */

const GHL_PAGE = 'https://sites.leadconnectorhq.com/preview/jt6T58ZsZdpn0fvKDh9n';

export async function GET() {
  const response = await fetch(GHL_PAGE, { cache: 'no-store' });

  let html = await response.text();

  // Sin thankYouPath: aquí no hay formulario, solo atribución y clic a WhatsApp.
  html = injectLandingTracking(html, { landingId: 'gracias-diseno-de-sonrisa' });

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
