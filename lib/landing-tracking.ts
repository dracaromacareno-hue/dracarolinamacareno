/**
 * Medición y atribución para las landings de pauta proxeadas desde GHL.
 *
 * POR QUÉ EXISTE ESTE ARCHIVO (3-ago-2026)
 * ----------------------------------------
 * `/diseno-de-sonrisa` e `/implantes` no son páginas de Next.js: son HTML de un
 * embudo de GoHighLevel que este repo descarga y sirve bajo el dominio propio.
 * Eso significa que NADA de lo que el sitio hace en React aplica ahí:
 * `WhatsAppLink`, `appendSourceTag` y el resto del sistema de atribución no
 * existen dentro de ese HTML.
 *
 * Consecuencia medida el 3-ago-2026 leyendo el HTML servido:
 *
 *  1. El botón de WhatsApp de la landing apunta a `wa.me/...?text=Hola, quiero
 *     agendar mi valoración...` SIN la marca `[fuente: … | p: …]`. Es el fallo
 *     silencioso que advierte el CLAUDE.md: el enlace funciona, el lead llega,
 *     y nadie nota que entró sin fuente. De 361 contactos del CRM, 167 no tienen
 *     ningún dato de origen.
 *
 *  2. El formulario vive en un iframe
 *     (`api.leadconnectorhq.com/widget/form/...`). Al enviarlo, el redirect a la
 *     página de gracias ocurre DENTRO del recuadro: la ventana principal nunca
 *     navega. La conversión de Google Ads está definida "por carga de página", así
 *     que nunca dispara. El píxel de Meta sí registra, porque corre dentro del
 *     iframe. Por eso en la misma landing Meta contó 33 eventos y Google 0.
 *
 * Este módulo genera un `<script>` que el route handler inyecta antes de
 * `</body>` y resuelve las dos cosas sin depender de que nadie edite el embudo
 * en GHL.
 *
 * RESTRICCIÓN DE SALUD: LA CONVERSIÓN SE MIDE POR URL, NO POR EVENTO
 * ------------------------------------------------------------------
 * La cuenta está en una categoría restringida de Google Ads (salud), así que la
 * medición tiene que apoyarse en **carga de página de gracias**, no en
 * conversiones por evento. Por eso este script NO dispara ningún
 * `gtag('event', 'conversion', ...)` de Google Ads.
 *
 * Lo que hace en su lugar es lo único que faltaba para que la medición por URL
 * funcione: **sacar la navegación del iframe y llevarla a la ventana principal**.
 * Cuando la ventana carga `/gracias-…`, la conversión por URL que ya está
 * configurada dispara sola, con la cookie `_gcl_aw` intacta porque la landing y
 * la página de gracias viven en el mismo dominio.
 *
 * Los eventos de GA4 y de Meta sí se mandan: sirven para analítica y para que
 * Meta optimice, y no son la conversión que reporta Google Ads.
 */

export type LandingTrackingOptions = {
  /**
   * Ruta de la página de gracias a la que debe navegar la VENTANA, no el iframe.
   *
   * Se omite en las propias páginas de gracias, que también reciben este script
   * pero no tienen formulario: allí solo hacen falta la atribución y el clic a
   * WhatsApp.
   */
  thankYouPath?: string;
  /** Nombre corto de la landing, viaja en los eventos de GA4. */
  landingId: string;
};

/**
 * Script autocontenido, en JS plano, sin dependencias y sin romper nada si
 * `gtag` o `fbq` no existen todavía.
 */
function buildScript(opts: LandingTrackingOptions): string {
  const { thankYouPath, landingId } = opts;

  return `
(function () {
  'use strict';

  // ---------------------------------------------------------------------
  // 1. Detección de fuente. Espejo reducido de lib/source-tracking.ts.
  //    Si allá se agrega un canal, hay que agregarlo aquí también: son dos
  //    entornos distintos (React vs HTML proxeado) y no comparten módulo.
  // ---------------------------------------------------------------------
  var SESSION_KEY = 'dcm_source_v1';

  var SHORT = {
    google_ads: 'gads', meta_ads: 'meta', instagram: 'ig', instagram_organic: 'ig',
    facebook_organic: 'fb', tiktok: 'tt', tiktok_organic: 'tt', youtube: 'yt',
    youtube_organic: 'yt', linkedin: 'li', linkedin_organic: 'li', doctoralia: 'doc',
    email: 'mail', gbp: 'gbp', google_organic: 'org', bing_organic: 'bing',
    ddg_organic: 'ddg', chatgpt: 'gpt', gemini: 'gem', copilot: 'cop',
    perplexity: 'plx', claude_ai: 'cld', deepseek: 'ds', grok: 'grok', direct: 'dir'
  };

  function fromParams(p) {
    if (p.get('gclid')) return { code: 'google_ads', label: 'Google Ads' };
    if (p.get('fbclid')) return { code: 'meta_ads', label: 'Meta Ads' };
    var u = (p.get('utm_source') || '').toLowerCase();
    if (!u) return null;
    if (['meta_ads','facebook_ads','fb_ads','facebook','fb','an','msg'].indexOf(u) >= 0)
      return { code: 'meta_ads', label: 'Meta Ads' };
    if (['instagram','ig','ig_bio'].indexOf(u) >= 0) return { code: 'instagram', label: 'Instagram' };
    if (['tiktok','tiktok_ads'].indexOf(u) >= 0) return { code: 'tiktok', label: 'TikTok' };
    if (['gbp','gmb','google_business'].indexOf(u) >= 0) return { code: 'gbp', label: 'Google Business' };
    if (u === 'google') {
      var m = (p.get('utm_medium') || '').toLowerCase();
      return /cpc|paid/.test(m)
        ? { code: 'google_ads', label: 'Google Ads' }
        : { code: 'google_organic', label: 'Google (orgánico)' };
    }
    return { code: 'utm_' + u, label: u };
  }

  function fromReferrer(r) {
    if (!r) return null;
    r = r.toLowerCase();
    // Las IA van PRIMERO: Gemini y Copilot viven en dominios google./microsoft
    // y si se evaluaran los buscadores antes quedarían mal etiquetadas.
    if (/chatgpt\\.com|chat\\.openai\\.com|openai\\.com/.test(r)) return { code: 'chatgpt', label: 'ChatGPT' };
    if (/gemini\\.google\\.com|bard\\.google\\.com/.test(r)) return { code: 'gemini', label: 'Gemini' };
    if (/copilot\\.microsoft\\.com|copilot\\.cloud\\.microsoft/.test(r)) return { code: 'copilot', label: 'Copilot' };
    if (/perplexity\\.ai/.test(r)) return { code: 'perplexity', label: 'Perplexity AI' };
    if (/claude\\.ai|anthropic\\.com/.test(r)) return { code: 'claude_ai', label: 'Claude AI' };
    if (/deepseek\\.com/.test(r)) return { code: 'deepseek', label: 'DeepSeek' };
    if (/grok\\.com|x\\.ai/.test(r)) return { code: 'grok', label: 'Grok' };
    if (/google\\./.test(r)) return { code: 'google_organic', label: 'Google (orgánico)' };
    if (/bing\\.com/.test(r)) return { code: 'bing_organic', label: 'Bing (orgánico)' };
    if (/instagram\\.com/.test(r)) return { code: 'instagram_organic', label: 'Instagram' };
    if (/facebook\\.com|fb\\.com/.test(r)) return { code: 'facebook_organic', label: 'Facebook' };
    if (/tiktok\\.com/.test(r)) return { code: 'tiktok_organic', label: 'TikTok' };
    try {
      var h = new URL(r).hostname.replace(/^www\\./, '');
      return { code: 'ref_' + h, label: h };
    } catch (e) { return null; }
  }

  // OJO: se comparte SESSION_KEY con lib/source-tracking.ts, que guarda las
  // etiquetas como { labelEs, labelEn } y no como { label }. Si el visitante
  // pasó antes por una página del sitio en React, lo cacheado viene con ese
  // formato. Sin normalizar, el tag salía literalmente "[fuente: undefined]".
  function normalizar(d) {
    if (!d || !d.code) return null;
    var label = d.label || d.labelEs || d.labelEn || d.code;
    return { code: d.code, label: label, labelEs: d.labelEs || label, labelEn: d.labelEn || label };
  }

  function detect() {
    try {
      var cached = sessionStorage.getItem(SESSION_KEY);
      if (cached) {
        var previo = normalizar(JSON.parse(cached));
        if (previo) return previo;
      }
    } catch (e) {}
    var d = normalizar(
      fromParams(new URLSearchParams(location.search))
      || fromReferrer(document.referrer || '')
    ) || { code: 'direct', label: 'directo', labelEs: 'directo', labelEn: 'direct' };
    // Se guarda con las tres claves para que el sitio en React lo lea igual.
    try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(d)); } catch (e) {}
    return d;
  }

  var SRC = detect();

  function shortCode(c) {
    return SHORT[c] || (c.replace(/^(utm_|ref_)/, '').replace(/[^a-z0-9]/gi, '').slice(0, 5).toLowerCase() || 'otro');
  }

  function slug() {
    var segs = location.pathname.split('/').filter(function (s) { return s && s !== 'en'; });
    return segs.length ? segs[segs.length - 1] : 'home';
  }

  // Misma forma que appendSourceTag(): marcador comprimido cerca del inicio
  // (sobrevive a que el paciente reescriba el mensaje) y tag completo al final.
  function tag(msg) {
    if (/\\[fuente:/i.test(msg)) return msg;          // idempotente
    var marker = '🌐' + shortCode(SRC.code);
    if (/🌐[a-z0-9]/i.test(msg)) {
      // ya trae marcador con código, no duplicar
    } else if (msg.indexOf('🌐') >= 0) {
      msg = msg.replace('🌐', marker);
    } else {
      var g = msg.match(/^(hola|hi|hello)[,!]?\\s+/i);
      msg = g ? g[0] + marker + ' ' + msg.slice(g[0].length) : marker + ' ' + msg;
    }
    return msg + ' [fuente: ' + SRC.label + ' | p: ' + slug() + ']';
  }

  // ---------------------------------------------------------------------
  // 2. Reescribir los enlaces de WhatsApp para que lleven la marca.
  //    Se hace al cargar y también al hacer clic, porque el constructor de
  //    GHL monta parte del DOM después (botones flotantes, popups).
  // ---------------------------------------------------------------------
  function fixWa(a) {
    try {
      var u = new URL(a.href);
      if (!/(^|\\.)wa\\.me$|api\\.whatsapp\\.com/.test(u.hostname)) return;
      var base = u.searchParams.get('text') || 'Hola Dra. Carolina 🌐';
      var tagged = tag(base);
      if (tagged === base) return;
      u.searchParams.set('text', tagged);
      a.href = u.toString();
    } catch (e) {}
  }

  function fixAll() {
    var links = document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
    for (var i = 0; i < links.length; i++) fixWa(links[i]);
  }

  // El clic a WhatsApp de esta landing no lo veía NADIE (medido el 7-ago-2026).
  // En el sitio en React lo capturan dos listeners globales: el de
  // GoogleAnalytics.tsx dispara whatsapp_click y el de MetaPixel.tsx dispara
  // Contact. Aquí no corre React, así que ninguno de los dos existe.
  //
  // El efecto era grande y estaba escondido: la acción whatsapp_click
  // importada en Google Ads marcaba 0,00 pese a que el sitio sí la dispara,
  // porque los anuncios mandan el tráfico a ESTA página y no al sitio.
  //
  // Y es justo el camino que más usan los pacientes de pauta: enganchan con el
  // VSL y se van derecho al botón de WhatsApp sin llenar el formulario. De los
  // leads del anuncio de diseño, solo uno llenó el formulario; el resto entró
  // por aquí. Sin este evento, esa parte del embudo era invisible y Google
  // optimizaba creyendo que la landing no convertía.
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
    if (!a) return;
    fixWa(a);

    // No se deduplica a propósito, para que el número sea comparable con el del
    // sitio, que tampoco deduplica. La conversión de Google Ads que se alimenta
    // de este evento está configurada con recuento "Una", así que el paciente
    // que duda y toca el botón tres veces cuenta como una sola conversión.
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: (a.innerText || '').trim().slice(0, 80) || ${JSON.stringify(landingId)},
        page_path: location.pathname,
        landing: ${JSON.stringify(landingId)},
        fuente: SRC.code
      });
    }

    // A Meta solo el evento, sin nombrar el tratamiento. Ver la regla de
    // CLAUDE.md: la cuenta ya está clasificada como proveedor de salud y
    // mandarle el detalle de qué consultó una persona concreta es lo que
    // Meta restringe.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Contact');
    }
  }, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixAll);
  } else {
    fixAll();
  }
  // GHL inyecta el botón flotante tarde: se revisa un rato y luego se para.
  var pasadas = 0;
  var reloj = setInterval(function () {
    fixAll();
    if (++pasadas > 20) clearInterval(reloj);   // ~10 s y se apaga
  }, 500);

  // ---------------------------------------------------------------------
  // 3. Envío del formulario. El formulario vive en un iframe de GHL, así que
  //    la página padre solo se entera por postMessage. El nombre del mensaje
  //    no está documentado y ha cambiado entre versiones del embed, por eso
  //    el filtro es por expresión regular y no por igualdad exacta.
  //    Para verificar en vivo: abrir la consola y mirar los avisos [landing].
  // ---------------------------------------------------------------------
  var yaDisparo = false;
  var THANKYOU = ${JSON.stringify(thankYouPath || '')};

  // Las páginas de gracias reciben este mismo script, pero no llevan formulario:
  // sin destino de gracias no hay ningún mensaje que escuchar.
  if (THANKYOU) window.addEventListener('message', function (e) {
    if (!/leadconnectorhq\\.com|msgsndr\\.com/.test(e.origin || '')) return;

    var d = e.data;
    var tipo = '';
    if (typeof d === 'string') tipo = d;
    else if (d && typeof d === 'object') tipo = String(d.type || d.event || d.action || '');

    console.debug('[landing] mensaje del iframe:', tipo, d);

    if (!/submit|submitted|form_?complete|success/i.test(tipo)) return;
    if (yaDisparo) return;
    yaDisparo = true;

    console.info('[landing] envío de formulario detectado, disparando eventos');

    // GA4. Es el evento que conviene importar como conversión en Google Ads:
    // así no hace falta mantener una etiqueta de conversión aparte.
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        landing: ${JSON.stringify(landingId)},
        fuente: SRC.code,
        page_slug: slug()
      });
    }

    // NO se dispara conversión por evento de Google Ads: la cuenta está en
    // categoría restringida (salud) y la medición va por carga de URL.
    // La conversión la cuenta la propia página de gracias al cargarse.

    // Igual que arriba: el evento sí, el tratamiento no. Antes iba
    // content_name con el nombre de la landing, que es exactamente lo que la
    // regla de CLAUDE.md prohíbe mandarle a Meta. Meta no pierde nada: con el
    // evento le basta para optimizar y atribuir. El detalle de QUÉ landing
    // convirtió se conserva en GA4, en el parámetro landing de generate_lead.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }

    // ESTA ES LA PIEZA CLAVE. Que navegue la VENTANA, no el recuadro.
    // Sin esto el redirect se queda dentro del iframe, la ventana nunca carga
    // /gracias-…, y la conversión por URL de Google Ads no dispara nunca.
    // Se conserva la query original (gclid, utm_*) para que la página de
    // gracias reciba el mismo contexto y GA4 no corte la sesión.
    setTimeout(function () {
      var destino = THANKYOU;
      var qs = location.search || '';
      if (qs && destino.indexOf('?') < 0) destino += qs;
      try { window.top.location.href = destino; }
      catch (err) { location.href = destino; }
    }, 600);
  });
})();
`.trim();
}

/**
 * Inyecta el script antes de `</body>`. Si no encuentra la etiqueta (una página
 * mal formada de GHL), lo añade al final: es preferible a perder la medición
 * en silencio.
 */
export function injectLandingTracking(html: string, opts: LandingTrackingOptions): string {
  const script = `<script data-dcm="landing-tracking">${buildScript(opts)}</script>`;
  return html.includes('</body>')
    ? html.replace('</body>', `${script}</body>`)
    : html + script;
}
