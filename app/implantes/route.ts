import { externalizeInlineImages } from '@/lib/landing-images';
import { injectLandingTracking } from '@/lib/landing-tracking';
import { reorganizarLandingImplantes } from '@/lib/landing-implantes';

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

  // 12-nov-2026: la landing no decía en ningún lado que la valoración tiene costo, y de la
  // pauta llegaban personas pidiendo atención gratis o por SOAT (auditoría de Google Ads del
  // 12-nov). Se agrega el valor, con «desde», debajo del primer botón y en la respuesta de
  // «¿Cuál es la inversión?», igual que ya lo dice /diseno-de-sonrisa. Cada texto aparece dos
  // veces (HTML y __NUXT_DATA__), por eso replaceAll: si solo cambia el HTML, Nuxt lo
  // devuelve al original al hidratar. Se usan entidades (&#36;, &oacute;) porque el segundo
  // sitio es una cadena JSON. Si GHL cambia el texto, el reemplazo no ocurre y la página
  // queda como en GHL, sin romperse.
  //
  // 12-nov-2026, tarde (estudio post mortem de la landing, aprobado por la Dra.):
  // - El botón principal y el fijo de abajo llevaban a un formulario de 10 campos que dejó
  //   6 registros en un mes, mientras WhatsApp dejó 164. Ahora abren WhatsApp; el script de
  //   medición les pone el mensaje prefijado con la marca y dispara whatsapp_click. El botón
  //   del medio («Quiero que evalúen mi caso») sigue yendo al formulario.
  // - La etiqueta de arriba del título dice «Implantes dentales en Medellín» (el título no
  //   nombraba ni el tratamiento ni la ciudad).
  // - «Respondemos en menos de 24 horas» sonaba lento: Salomé responde en un minuto.
  // - Se nombra el Oriente antioqueño y el exterior, de donde también viene el avatar.
  // - «3,500» con coma es formato en inglés.
  // En __NUXT_DATA__ las comillas van escapadas (\"), por eso las expresiones aceptan \\?".
  const WA = 'https://wa.me/573163975232';
  const cambios: Array<[string | RegExp, string]> = [
    [
      'Respondemos en menos de 24 horas',
      'Te respondemos por WhatsApp de inmediato &middot; Valoraci&oacute;n desde &#36;150.000 COP',
    ],
    [
      'Cada caso es diferente. En la evaluaci&oacute;n te presentamos',
      'Cada caso es diferente. La valoraci&oacute;n con la Dra. Carolina tiene un valor desde &#36;150.000 COP, presencial o virtual por videollamada. En ella te presentamos',
    ],
    [
      'recuperar la funci&oacute;n al comer y sonre&iacute;r con seguridad.',
      'recuperar la funci&oacute;n al comer y sonre&iacute;r con seguridad. Atendemos pacientes de Medell&iacute;n, el Oriente antioque&ntilde;o y del exterior.',
    ],
    ['3,500 pacientes', '3.500 pacientes'],
    [/(hero-badge\\?">)Medell&iacute;n, Colombia/g, '$1Implantes dentales en Medell&iacute;n'],
    // 12-nov-2026: los dos enlaces a la política de privacidad daban 404 (el del aviso de
    // cookies y el del formulario, que es el que respalda la autorización de la Ley 1581).
    // La política vigente es /privacy-policy del sitio.
    ['politica-privacidad.html', 'https://dracarolinamacareno.com/privacy-policy'],
    // 12-nov-2026: «Aceptar» y «Rechazar» solo escondían el aviso; la medición corría igual.
    // Un «Rechazar» que no rechaza promete algo que no se cumple. La Dra. eligió el aviso
    // informativo (opción A): se informa y basta un «Entendido». La norma colombiana admite
    // la autorización por conducta inequívoca (Decreto 1377 de 2013, art. 7).
    [
      'Usamos cookies para mejorar tu experiencia.',
      'Usamos cookies para medir las visitas y mejorar tu experiencia. Si sigues navegando, aceptas nuestra',
    ],
    [/(onclick=\\?"acceptCookies\(\)\\?">)Aceptar/g, '$1Entendido'],
    [
      /\s*(<|\\u003C)button class=\\?"cookie-btn cookie-reject\\?" onclick=\\?"rejectCookies\(\)\\?">Rechazar(<|\\u003C)(\/|\\u002F)button>/g,
      '',
    ],
    [
      /https:(\\u002F|\/)(\\u002F|\/)implantes\.dracarolinamacareno\.com(\\u002F|\/)politica-privacidad/g,
      'https://dracarolinamacareno.com/privacy-policy',
    ],
    [
      /href=(\\?)"#formulario(\\?)" class=(\\?)"cta-btn(\\?)">Solicita tu evaluaci&oacute;n/g,
      `href=$1"${WA}$2" target=$1"_blank$2" rel=$1"noopener$2" class=$3"cta-btn$4">Solicita tu evaluaci&oacute;n por WhatsApp`,
    ],
    [
      /href=(\\?)"#formulario(\\?)" class=(\\?)"cta-btn(\\?)">Aplica para tu evaluación/g,
      `href=$1"${WA}$2" target=$1"_blank$2" rel=$1"noopener$2" class=$3"cta-btn$4">Escríbenos por WhatsApp`,
    ],
  ];
  for (const [de, a] of cambios) {
    const antes = html;
    html = typeof de === 'string' ? html.replaceAll(de, a) : html.replace(de, a);
    if (html === antes) console.warn(`[implantes] GHL cambió el texto, no se aplicó: ${de}`);
  }

  // Orden de secciones, portada, reseñas reales de Google y la frase del primer día
  // (12-nov-2026). Ver lib/landing-implantes.ts.
  html = reorganizarLandingImplantes(html);

  // 12-nov-2026: en celular el aviso de cookies (fijo abajo) tapaba el botón verde de
  // WhatsApp y la barra fija «Escríbenos por WhatsApp». Pedido de la Dra.: el aviso queda
  // abajo y los botones suben justo encima mientras el aviso está visible; cuando la
  // persona responde, vuelven a su lugar. Va fuera del bloque de GHL (al final del body)
  // para no tocar lo que Nuxt hidrata.
  const AVISO_COOKIES = `<style>
  .sticky-cta{bottom:var(--aviso-cookies,0px)!important}
  .wa-float{bottom:calc(86px + var(--aviso-cookies,0px))!important}
  @media (max-width:900px){.wa-float{bottom:calc(82px + var(--aviso-cookies,0px))!important}}
</style>
<script>(function(){
  function medir(){
    var b=document.getElementById('cookieBanner');
    var h=(b&&!b.classList.contains('hidden')&&getComputedStyle(b).display!=='none')?b.offsetHeight:0;
    document.documentElement.style.setProperty('--aviso-cookies',h+'px');
    return b;
  }
  // Nuxt puede rehacer el aviso al hidratar, así que no basta con observar un nodo: se mide
  // seguido los primeros 15 s y después de cada toque en el aviso.
  medir();
  var n=0, t=setInterval(function(){ medir(); if(++n>=30) clearInterval(t); },500);
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest&&e.target.closest('#cookieBanner')) setTimeout(medir,30);
  });
  window.addEventListener('resize',medir);
  window.addEventListener('load',medir);
})();</script>`;
  html = html.includes('</body>') ? html.replace('</body>', `${AVISO_COOKIES}</body>`) : html + AVISO_COOKIES;

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
