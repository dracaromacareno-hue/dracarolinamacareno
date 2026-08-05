/**
 * Source tracking for WhatsApp prefilled messages.
 *
 * Carolina's WhatsApp number (+57 316 397 5232) is wired to her
 * GoHighLevel CRM, every message that arrives at that number becomes
 * a lead in GHL. The problem is GHL only sees the FIRST message text
 * the lead sent, with no native attribution data, so she cannot tell
 * Google Ads leads from Instagram leads from organic leads.
 *
 * Solution: every wa.me link the site renders appends a `[fuente: X]`
 * tag at the end of the prefilled message. When the patient sends that
 * message unchanged (the default behavior in WhatsApp), GHL captures
 * the tag and Carolina knows the channel.
 *
 * Detection priority (highest to lowest specificity):
 *  1. `gclid` URL param → Google Ads
 *  2. `utm_source=meta_ads` / `facebook` → Meta Ads
 *  3. `utm_source=instagram` / `ig` → Instagram (bio link or story)
 *  4. `utm_source=tiktok` → TikTok
 *  5. `utm_source=*` (anything else) → labeled with the source name
 *  6. `document.referrer` = AI assistant (ChatGPT, Gemini, Copilot,
 *      Perplexity, Claude, DeepSeek, Grok) → checked BEFORE search engines
 *      because Gemini/Copilot live on google./microsoft domains
 *  7. `document.referrer` contains 'google.' → Organic Google
 *  8. `document.referrer` contains 'bing.' → Organic Bing
 *  9. `document.referrer` contains 'instagram.com' → Instagram organic
 * 10. `document.referrer` contains 'facebook.com' → Facebook organic
 * 11. fallback → Directo (typed URL or unknown)
 *
 * Source value is sticky for the session (saved to sessionStorage on
 * first detection) so a user that opens 3 pages still attributes to
 * the original channel.
 */

const SESSION_KEY = 'dcm_source_v1';

export type SourceDetection = {
  /** Machine-readable source code, used in GA4 + ad labels */
  code: string;
  /** Human-readable label for the WhatsApp message tag (Spanish) */
  labelEs: string;
  /** Human-readable label for the WhatsApp message tag (English) */
  labelEn: string;
};

const DIRECT: SourceDetection = {
  code: 'direct',
  labelEs: 'directo',
  labelEn: 'direct',
};

function fromParams(params: URLSearchParams): SourceDetection | null {
  if (params.get('gclid')) {
    return { code: 'google_ads', labelEs: 'Google Ads', labelEn: 'Google Ads' };
  }
  if (params.get('fbclid')) {
    return { code: 'meta_ads', labelEs: 'Meta Ads', labelEn: 'Meta Ads' };
  }
  const utm = params.get('utm_source')?.toLowerCase();
  if (utm) {
    switch (utm) {
      case 'meta_ads':
      case 'facebook_ads':
      case 'fb_ads':
      case 'facebook':
        return { code: 'meta_ads', labelEs: 'Meta Ads', labelEn: 'Meta Ads' };
      case 'instagram':
      case 'ig':
      case 'ig_bio':
        return { code: 'instagram', labelEs: 'Instagram', labelEn: 'Instagram' };
      case 'tiktok':
      case 'tiktok_ads':
        return { code: 'tiktok', labelEs: 'TikTok', labelEn: 'TikTok' };
      case 'youtube':
        return { code: 'youtube', labelEs: 'YouTube', labelEn: 'YouTube' };
      case 'linkedin':
        return { code: 'linkedin', labelEs: 'LinkedIn', labelEn: 'LinkedIn' };
      case 'doctoralia':
        return { code: 'doctoralia', labelEs: 'Doctoralia', labelEn: 'Doctoralia' };
      case 'newsletter':
      case 'email':
        return { code: 'email', labelEs: 'email', labelEn: 'email' };
      case 'gbp':
      case 'gmb':
      case 'google_business':
        return { code: 'gbp', labelEs: 'Google Business', labelEn: 'Google Business' };
      default:
        return { code: `utm_${utm}`, labelEs: utm, labelEn: utm };
    }
  }
  return null;
}

function fromReferrer(referrer: string): SourceDetection | null {
  if (!referrer) return null;
  const ref = referrer.toLowerCase();

  // AI assistants FIRST. Gemini (gemini.google.com) and Copilot
  // (copilot.microsoft.com) live under google./microsoft domains, so if the
  // search-engine checks below ran first they would be mislabeled as
  // "Google orgánico" / generic host. All AI codes share the `ai_*`-style
  // family below so GA4/GHL can group them with one regex:
  //   chatgpt|gemini|copilot|perplexity|claude|deepseek|grok
  // NOTE: Google AI Overviews / AI Mode cannot be separated here, they come
  // as referrer google.com and fall into google_organic. That is a known blind
  // spot, only the "¿cómo nos encontró?" question catches those.
  if (ref.includes('chatgpt.com') || ref.includes('chat.openai.com') || ref.includes('openai.com')) {
    return { code: 'chatgpt', labelEs: 'ChatGPT', labelEn: 'ChatGPT' };
  }
  if (ref.includes('gemini.google.com') || ref.includes('bard.google.com')) {
    return { code: 'gemini', labelEs: 'Gemini', labelEn: 'Gemini' };
  }
  if (ref.includes('copilot.microsoft.com') || ref.includes('copilot.cloud.microsoft')) {
    return { code: 'copilot', labelEs: 'Copilot', labelEn: 'Copilot' };
  }
  if (ref.includes('perplexity.ai')) {
    return { code: 'perplexity', labelEs: 'Perplexity AI', labelEn: 'Perplexity AI' };
  }
  if (ref.includes('claude.ai') || ref.includes('anthropic.com')) {
    return { code: 'claude_ai', labelEs: 'Claude AI', labelEn: 'Claude AI' };
  }
  if (ref.includes('deepseek.com')) {
    return { code: 'deepseek', labelEs: 'DeepSeek', labelEn: 'DeepSeek' };
  }
  if (ref.includes('grok.com') || ref.includes('x.ai')) {
    return { code: 'grok', labelEs: 'Grok', labelEn: 'Grok' };
  }

  // Search engines
  if (ref.includes('google.')) {
    return { code: 'google_organic', labelEs: 'Google (orgánico)', labelEn: 'Google (organic)' };
  }
  if (ref.includes('bing.com')) {
    return { code: 'bing_organic', labelEs: 'Bing (orgánico)', labelEn: 'Bing (organic)' };
  }
  if (ref.includes('duckduckgo.com')) {
    return { code: 'ddg_organic', labelEs: 'DuckDuckGo', labelEn: 'DuckDuckGo' };
  }

  // Social / referral
  if (ref.includes('instagram.com')) {
    return { code: 'instagram_organic', labelEs: 'Instagram', labelEn: 'Instagram' };
  }
  if (ref.includes('facebook.com') || ref.includes('fb.com')) {
    return { code: 'facebook_organic', labelEs: 'Facebook', labelEn: 'Facebook' };
  }
  if (ref.includes('tiktok.com')) {
    return { code: 'tiktok_organic', labelEs: 'TikTok', labelEn: 'TikTok' };
  }
  if (ref.includes('linkedin.com')) {
    return { code: 'linkedin_organic', labelEs: 'LinkedIn', labelEn: 'LinkedIn' };
  }
  if (ref.includes('youtube.com')) {
    return { code: 'youtube_organic', labelEs: 'YouTube', labelEn: 'YouTube' };
  }
  if (ref.includes('doctoralia.')) {
    return { code: 'doctoralia', labelEs: 'Doctoralia', labelEn: 'Doctoralia' };
  }
  // Some other referring site we don't recognize, record the hostname
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, '');
    return { code: `ref_${host}`, labelEs: host, labelEn: host };
  } catch {
    return null;
  }
}

/**
 * Detect the visit source, prefer sessionStorage value if already set
 * (first-touch attribution: the channel that *brought* the user wins).
 */
export function detectSource(): SourceDetection {
  if (typeof window === 'undefined') return DIRECT;

  // 1. Return sticky session value if available
  try {
    const cached = sessionStorage.getItem(SESSION_KEY);
    if (cached) {
      const parsed = JSON.parse(cached) as SourceDetection;
      if (parsed && parsed.code) return parsed;
    }
  } catch {
    // sessionStorage may be blocked in some browsers, fall through
  }

  // 2. Detect from URL params
  const params = new URLSearchParams(window.location.search);
  const fromUrl = fromParams(params);
  if (fromUrl) {
    persist(fromUrl);
    return fromUrl;
  }

  // 3. Detect from referrer
  const ref = document.referrer || '';
  const fromRef = fromReferrer(ref);
  if (fromRef) {
    persist(fromRef);
    return fromRef;
  }

  // 4. Default, direct
  persist(DIRECT);
  return DIRECT;
}

function persist(detection: SourceDetection) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(detection));
  } catch {
    // ignore
  }
}

/**
 * Short identifier of the page the lead clicked from, e.g. a visitor on
 * /blog/duele-implante-dental-mitos yields `duele-implante-dental-mitos`.
 *
 * The channel alone (Google orgánico, ChatGPT, Instagram) cannot answer
 * "which article brings patients", every organic lead looks identical.
 * Appending the page slug makes that auditable by filtering the first
 * message text in GHL.
 *
 * Only the last path segment is used to keep the tag discreet: the locale
 * prefix and the section (/blog/, /servicios/) are dropped, slugs are
 * unique across the site anyway.
 */
function pageSlug(): string {
  if (typeof window === 'undefined') return '';
  const segments = window.location.pathname
    .split('/')
    .filter((s) => s && s !== 'en');
  return segments.length ? segments[segments.length - 1] : 'home';
}

/**
 * Compact channel code that rides at the START of the message, glued to the
 * globe marker: `🌐gads`, `🌐org`, `🌐ig`.
 *
 * Deliberately short and opaque. It is not meant to be read by the patient,
 * only to survive them. See `sourceMarker()` for why it exists.
 */
const SHORT_CODES: Record<string, string> = {
  google_ads: 'gads',
  meta_ads: 'meta',
  instagram: 'ig',
  instagram_organic: 'ig',
  facebook_organic: 'fb',
  tiktok: 'tt',
  tiktok_organic: 'tt',
  youtube: 'yt',
  youtube_organic: 'yt',
  linkedin: 'li',
  linkedin_organic: 'li',
  doctoralia: 'doc',
  email: 'mail',
  gbp: 'gbp',
  google_organic: 'org',
  bing_organic: 'bing',
  ddg_organic: 'ddg',
  chatgpt: 'gpt',
  gemini: 'gem',
  copilot: 'cop',
  perplexity: 'plx',
  claude_ai: 'cld',
  deepseek: 'ds',
  grok: 'grok',
  direct: 'dir',
};

function shortCode(code: string): string {
  const known = SHORT_CODES[code];
  if (known) return known;
  // utm_<algo> y ref_<host> son dinámicos: se recorta el prefijo y se deja un
  // trozo legible. Sigue siendo mejor que perder el canal por completo.
  return code.replace(/^(utm_|ref_)/, '').replace(/[^a-z0-9]/gi, '').slice(0, 5).toLowerCase() || 'otro';
}

/** Marcador que ya trae el código de canal pegado: `🌐gads`. */
function sourceMarker(code: string): string {
  return `🌐${shortCode(code)}`;
}

/**
 * Append a `[fuente: X | p: slug]` tag to a WhatsApp prefilled message, and
 * plant a compact `🌐<canal>` marker near the START of the same message.
 *
 * Carolina sees the tag at the end of the lead's first message in GHL and can
 * immediately attribute the lead to the right channel and to the exact page
 * that produced it.
 *
 * POR QUÉ EL MARCADOR DEL PRINCIPIO (jul 2026)
 * -------------------------------------------
 * El tag completo vive al FINAL del mensaje, y esa es la parte que el paciente
 * borra. Caso real: un paciente de turismo dental (+1 817) abrió WhatsApp desde
 * el sitio, dejó el saludo intacto y reescribió el resto con su propia consulta.
 * Llegó al CRM con el 🌐 puesto y SIN fuente: sabíamos que venía de la web pero
 * no de qué canal ni de qué página.
 *
 * La gente edita de un punto hacia adelante. El principio del mensaje sobrevive,
 * el final no. Por eso el canal viaja duplicado: completo al final (con página,
 * cuando el mensaje llega intacto) y comprimido al principio (solo canal, pero
 * resistente a que lo reescriban).
 *
 * No reemplaza al tag del final, lo respalda. Si el mensaje llega entero se
 * tiene todo; si lo editan, queda al menos el canal.
 */
export function appendSourceTag(
  baseMessage: string,
  locale: 'es' | 'en' = 'es',
  detection?: SourceDetection,
): string {
  const d = detection ?? detectSource();
  const label = locale === 'es' ? d.labelEs : d.labelEn;
  const prefix = locale === 'es' ? 'fuente' : 'source';
  const slug = pageSlug();
  const page = slug ? ` | p: ${slug}` : '';

  /*
    El gclid solo se pega cuando el visitante viene de un anuncio, así que el
    99 % de los mensajes no cambia en nada.

    Va al FINAL, dentro del bloque técnico que ya existe, y no al principio con
    el 🌐: son ochenta caracteres y arruinarían el saludo, que es justo la parte
    del mensaje que sí queremos que el paciente lea y conserve.

    El costo de ponerlo al final es conocido: es la parte que algunos pacientes
    borran al reescribir el mensaje. Se recupera la mayoría de los casos, no
    todos. Para el canal (🌐 al principio) eso importaba; para el gclid es
    aceptable, porque solo alimenta el aprendizaje de Google, no la atribución.
  */
  const gclid = getGclid();
  const clic = gclid ? ` | g: ${gclid}` : '';

  const marker = sourceMarker(d.code);
  let message = baseMessage;

  if (/🌐[a-z0-9]/i.test(message)) {
    // Ya tiene marcador con código: no duplicar (appendSourceTag es idempotente).
  } else if (message.includes('🌐')) {
    // Caso normal: los mensajes del sitio ya traen "Hola Dra. Carolina 🌐".
    // Se le pega el código al globo que ya existe, sin mover nada de sitio.
    message = message.replace('🌐', marker);
  } else {
    // Mensajes sin globo (los CTA de los artículos del blog). Se inserta el
    // marcador justo después del saludo para que no abra con un emoji suelto.
    const greeting = message.match(/^(hola|hi|hello)[,!]?\s+/i);
    message = greeting
      ? `${greeting[0]}${marker} ${message.slice(greeting[0].length)}`
      : `${marker} ${message}`;
  }

  return `${message} [${prefix}: ${label}${page}${clic}]`;
}

/**
 * Convenience helper: build a wa.me URL with the source tag already
 * baked into the prefilled text.
 */
export function buildWaUrl(opts: {
  phone: string; // e.g. '573163975232' (no + sign)
  message: string; // base message in the right locale
  locale?: 'es' | 'en';
}): string {
  const locale = opts.locale ?? 'es';
  const tagged = appendSourceTag(opts.message, locale);
  return `https://wa.me/${opts.phone}?text=${encodeURIComponent(tagged)}`;
}

/**
 * Traduce el código de fuente al valor EXACTO que espera el desplegable
 * "Fuente del Lead" de GoHighLevel (`contact.fuente_del_lead`).
 *
 * POR QUÉ EXISTE ESTA FUNCIÓN
 * Ese campo del CRM no es texto libre: es una lista cerrada de 17 opciones. Si
 * llega cualquier otro valor, GHL lo descarta en silencio. La web venía mandando
 * el código interno (`google_organic`) y la etiqueta humana ("Google (orgánico)"),
 * y el desplegable espera "Google Orgánico". Ninguno de los dos coincidía, así
 * que el campo quedaba vacío aunque el dato llegara.
 *
 * Se comprobó el 3-ago-2026 contra el CRM: 0 de 100 contactos tenían el campo
 * lleno, mientras que las etiquetas `source:*` sí se estaban guardando bien.
 *
 * SI SE AGREGA UNA OPCIÓN NUEVA EN GHL hay que copiarla aquí LITERAL, con sus
 * tildes y su puntuación. Una diferencia de un carácter y el valor se pierde
 * otra vez sin ningún aviso.
 */
const GHL_FUENTE: Record<string, string> = {
  google_ads: 'Google Ads',
  meta_ads: 'Meta Ads',
  gbp: 'Ficha de Google / Maps',
  google_organic: 'Google Orgánico',
  instagram: 'Instagram Orgánico',
  instagram_organic: 'Instagram Orgánico',
  facebook_organic: 'Facebook Orgánico',
  doctoralia: 'Doctoralia',
  // Las siete IA caen en la misma opción a propósito: para decidir presupuesto
  // importa que vino de una IA, no cuál. El detalle exacto queda en la etiqueta
  // `source:grok`, que sí distingue.
  chatgpt: 'Búsqueda con IA (ChatGPT, Grok, Gemini)',
  gemini: 'Búsqueda con IA (ChatGPT, Grok, Gemini)',
  copilot: 'Búsqueda con IA (ChatGPT, Grok, Gemini)',
  perplexity: 'Búsqueda con IA (ChatGPT, Grok, Gemini)',
  claude_ai: 'Búsqueda con IA (ChatGPT, Grok, Gemini)',
  deepseek: 'Búsqueda con IA (ChatGPT, Grok, Gemini)',
  grok: 'Búsqueda con IA (ChatGPT, Grok, Gemini)',
  tiktok: 'Otra red social (TikTok, LinkedIn, X)',
  tiktok_organic: 'Otra red social (TikTok, LinkedIn, X)',
  linkedin: 'Otra red social (TikTok, LinkedIn, X)',
  linkedin_organic: 'Otra red social (TikTok, LinkedIn, X)',
  youtube: 'Otra red social (TikTok, LinkedIn, X)',
  youtube_organic: 'Otra red social (TikTok, LinkedIn, X)',
  // Llegó sin referente: escribió la dirección, la tenía guardada, o el
  // navegador lo perdió. No sabemos qué canal lo trajo, pero sí sabemos que
  // llenó el formulario del sitio. Antes caía en "Otro" y el CRM lo terminaba
  // marcando como "WhatsApp directo — origen desconocido", que es doblemente
  // falso: ni fue WhatsApp, ni el origen es desconocido.
  direct: 'Formulario web (directo)',
};

export function ghlFuenteDelLead(code: string | undefined | null): string {
  if (!code) return 'Otro';
  const exacto = GHL_FUENTE[code];
  if (exacto) return exacto;
  // Bing y DuckDuckGo no son Google: meterlos en "Google Orgánico" inflaría a
  // Google con tráfico que no le corresponde, que es justo el error que este
  // campo existe para evitar.
  return 'Otro';
}

/* ────────────────────────────────────────────────────────────────────────────
 * GCLID: el identificador del clic en un anuncio de Google
 * ──────────────────────────────────────────────────────────────────────────── */

const GCLID_KEY = 'dcm_gclid';

/**
 * Guarda el `gclid` la primera vez que aparece y lo conserva durante toda la
 * sesión.
 *
 * POR QUÉ HAY QUE CAPTURARLO EN EL MOMENTO
 * Google le pega este código a la URL solo en el clic del anuncio. Si el
 * visitante navega a otra página, el parámetro desaparece de la barra y **no se
 * puede reconstruir después**. Si la campaña se enciende sin esto puesto, esos
 * clics quedan perdidos para siempre.
 *
 * PARA QUÉ SIRVE
 * Es la única forma de decirle a Google "este clic terminó en un paciente que
 * asistió a la cita". Con eso deja de optimizar por clics baratos y empieza a
 * optimizar por pacientes reales. Ver la importación de conversiones sin
 * conexión ("Cita asistida") en la cuenta de Ads.
 *
 * Se guarda en localStorage y no en sessionStorage a propósito: entre el clic
 * en el anuncio y el mensaje de WhatsApp pueden pasar días.
 */
export function captureGclid(): string {
  if (typeof window === 'undefined') return '';
  try {
    const enUrl = new URLSearchParams(window.location.search).get('gclid');
    if (enUrl) {
      localStorage.setItem(GCLID_KEY, enUrl);
      return enUrl;
    }
    return localStorage.getItem(GCLID_KEY) || '';
  } catch {
    // localStorage bloqueado: se pierde la atribución de ese visitante, no la
    // sesión. Nunca se lanza, para no romper el CTA.
    return '';
  }
}

/** Igual que `captureGclid` pero sin escribir: para leerlo al construir un CTA. */
export function getGclid(): string {
  if (typeof window === 'undefined') return '';
  try {
    return new URLSearchParams(window.location.search).get('gclid')
      || localStorage.getItem(GCLID_KEY)
      || '';
  } catch {
    return '';
  }
}
