import { externalizeInlineImages } from '@/lib/landing-images';
import { injectLandingTracking } from '@/lib/landing-tracking';

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

/**
 * Caché (21-oct-2026). Antes cada visita descargaba el embudo de GHL en vivo
 * (`force-dynamic` + `no-store`): 1,3 a 2,4 s solo hasta el primer byte, y 5 a 8 s en
 * bajar completa en celular. El HTML es el mismo para todo visitante, porque el gclid y
 * la fuente los lee el script en el navegador, así que ahora la ruta es estática con
 * renovación cada 10 minutos (ISR): Vercel la sirve desde su caché, también cuando la
 * URL trae ?gclid=..., y un cambio hecho en GHL se ve en 10 minutos como mucho.
 *
 * Si GHL responde con error, se lanza la excepción a propósito: en una renovación Next
 * sigue sirviendo la última versión buena en vez de guardar la página de error.
 */
export const revalidate = 600;

export async function GET() {
  const response = await fetch(GHL_PAGE, { next: { revalidate } });
  if (!response.ok) {
    throw new Error(`GHL respondió ${response.status} para la landing de implantes`);
  }

  let html = await response.text();

  // 1,82 MB → ~220 KB: las 9 fotos en base64 (repetidas en __NUXT_DATA__) pasan a WebP
  // servidos aparte, con tamaño por pantalla y carga diferida. Ver lib/landing-images.ts.
  html = externalizeInlineImages(html).html;

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
    // 17-oct-2026: el mensaje del botón pregunta qué necesita y dónde vive. Filtra solo:
    // quien busca otro tratamiento lo dice en el primer mensaje, y quien escribe pone su caso.
    // Es texto de la propia persona hacia la clínica; a Google no viaja nada de esto
    // (el evento whatsapp_click lleva solo el nombre del botón, sin el tratamiento).
    waText: 'Hola, quiero agendar mi evaluación para implantes dentales. Necesito ayuda con: (cuéntanos tu caso). Vivo en: (ciudad).',
  });

  return new Response(html, {
    status: response.status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
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
