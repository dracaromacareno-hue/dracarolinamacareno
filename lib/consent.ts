/**
 * Consent state, shared between CookieConsent banner, GoogleAnalytics
 * and MetaPixel components.
 *
 * GDPR (EU) requires opt-in BEFORE tracking. CCPA (California) requires
 * a clear opt-out option. Other jurisdictions vary, but the strictest
 * baseline is GDPR's opt-in, we apply that to EU/UK visitors detected
 * by accept-language + Vercel geo headers, and a less restrictive
 * implicit consent for the rest.
 *
 * The state lives in localStorage so it persists across sessions.
 * Components read it via a custom event 'consent-updated' that fires
 * whenever the banner submits.
 */

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

export type ConsentState = {
  necessary: boolean; // always true, can't be disabled
  analytics: boolean; // GA4
  marketing: boolean; // Meta Pixel
  /** ISO timestamp when the user made the choice */
  decidedAt: string;
  /** GDPR mode applied at the time of the decision */
  gdprMode: boolean;
};

const STORAGE_KEY = 'dcm_consent_v1';
const CONSENT_EVENT = 'dcm-consent-updated';

const DEFAULT_NO_DECISION: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  decidedAt: '',
  gdprMode: false,
};

const DEFAULT_ACCEPT_ALL = (gdprMode: boolean): ConsentState => ({
  necessary: true,
  analytics: true,
  marketing: true,
  decidedAt: new Date().toISOString(),
  gdprMode,
});

const DEFAULT_REJECT_ALL = (gdprMode: boolean): ConsentState => ({
  necessary: true,
  analytics: false,
  marketing: false,
  decidedAt: new Date().toISOString(),
  gdprMode,
});

export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

export function hasDecided(): boolean {
  const c = readConsent();
  return Boolean(c && c.decidedAt);
}

export function writeConsent(state: ConsentState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}

export function acceptAll(gdprMode: boolean) {
  writeConsent(DEFAULT_ACCEPT_ALL(gdprMode));
}

export function rejectAll(gdprMode: boolean) {
  writeConsent(DEFAULT_REJECT_ALL(gdprMode));
}

export function setCustom(opts: { analytics: boolean; marketing: boolean }, gdprMode: boolean) {
  writeConsent({
    necessary: true,
    analytics: opts.analytics,
    marketing: opts.marketing,
    decidedAt: new Date().toISOString(),
    gdprMode,
  });
}

export function onConsentChange(cb: (state: ConsentState) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = (e: Event) => {
    const detail = (e as CustomEvent<ConsentState>).detail;
    cb(detail);
  };
  window.addEventListener(CONSENT_EVENT, handler as EventListener);
  return () => window.removeEventListener(CONSENT_EVENT, handler as EventListener);
}

/**
 * Detect whether GDPR-strict mode should apply.
 * Server-side this is done via accept-language + geo headers; client-side
 * we fall back to navigator.language as a best-effort signal until the
 * server-rendered hint arrives.
 *
 * EU + UK + Switzerland + Norway + Iceland use GDPR or equivalent.
 */
const GDPR_LANG_PREFIXES = [
  // EU + EEA + UK + CH
  'de', 'fr', 'it', 'nl', 'pt-pt', 'es-es', 'sv', 'da', 'fi', 'no', 'nb', 'pl',
  'el', 'cs', 'sk', 'hu', 'ro', 'bg', 'hr', 'sl', 'lt', 'lv', 'et', 'ga', 'mt',
  'is', 'lb',
  // Inglés SOLO en sus variantes europeas. `en` a secas no puede ir aquí: se
  // llevaría por delante a EE.UU. y Canadá, que son el grueso de los pacientes.
  // Reino Unido tiene su propio GDPR e Irlanda es UE.
  'en-gb', 'en-ie',
];

/**
 * Variantes regionales que NO son europeas aunque su idioma sí lo sea.
 *
 * `fr` está en la lista de arriba por Francia, Bélgica, Suiza y Luxemburgo, pero
 * la comprobación es por prefijo, así que `fr-CA` (Quebec) caía dentro y un
 * paciente canadiense quedaba tratado como europeo. Canadá es uno de los
 * mercados de turismo dental de la clínica, así que no es un caso de laboratorio.
 *
 * Se comprueba ANTES que la lista de arriba: lo específico gana a lo general.
 */
const NON_GDPR_OVERRIDES = ['fr-ca', 'nl-aw', 'nl-cw', 'nl-sx', 'pt-br'];

export function isGdprModeFromLanguage(lang: string | undefined): boolean {
  if (!lang) return false;
  const lower = lang.toLowerCase();
  if (NON_GDPR_OVERRIDES.some((p) => lower === p || lower.startsWith(p + ','))) return false;
  return GDPR_LANG_PREFIXES.some((p) => lower === p || lower.startsWith(p + '-') || lower.startsWith(p + ','));
}

/**
 * Consentimiento implícito para el visitante NO europeo (7-ago-2026).
 *
 * EL PROBLEMA QUE RESUELVE
 * ------------------------
 * `GoogleAnalytics.tsx` solo carga el tag si `consent.analytics === true`, y
 * hasta hoy no se guardaba nada hasta que el visitante tocaba un botón del
 * aviso. Quien lo ignoraba y seguía leyendo NO se medía.
 *
 * La intención original del archivo ya era otra ("implicit consent for the
 * rest"), y el banner incluso deja las casillas marcadas para el visitante no
 * europeo. Pero marcarlas no guardaba nada: solo el clic guardaba. O sea que la
 * intención estaba escrita y sin implementar.
 *
 * Lo que costaba: las sesiones de GA4 del SITIO eran un piso, no el total,
 * mientras que las landings de pauta (HTML de GHL) cargan el tag siempre. Eso
 * hacía que el tráfico de pauta y el orgánico no fueran comparables entre sí, y
 * que una subida o bajada en la tasa de aceptación se leyera como un cambio de
 * tráfico que nunca ocurrió.
 *
 * LO QUE SÍ Y LO QUE NO
 * ---------------------
 * - `analytics: true`  → GA4 mide desde la primera página. Colombia y EE.UU.,
 *   que son la mayoría de los pacientes, funcionan con estándar de exclusión
 *   voluntaria, así que encaja.
 * - `marketing: false` → el píxel de Meta SIGUE pidiendo permiso. Ahí se le
 *   manda información a un tercero con fines publicitarios y la exposición es
 *   distinta. No se toca.
 * - Europa no entra aquí: `isGdprModeFromLanguage` la deja fuera y sigue
 *   necesitando el clic. Además GA4 registra rutas como `/servicios/implantes-
 *   dentales`, que en la UE puede considerarse dato de salud, categoría
 *   especial. Por eso ahí no se relaja nada.
 *
 * `decidedAt` va VACÍO a propósito: así `hasDecided()` sigue devolviendo falso,
 * el aviso se sigue mostrando y quien quiera rechazar puede hacerlo. Esto no
 * silencia el banner, solo cambia el punto de partida.
 */
export function applyImplicitConsent(): boolean {
  if (typeof window === 'undefined') return false;
  if (readConsent()) return false;                    // ya hay estado, no tocar
  const lang = typeof navigator !== 'undefined' ? navigator.language : undefined;
  if (isGdprModeFromLanguage(lang)) return false;     // Europa: solo opt-in
  writeConsent({
    necessary: true,
    analytics: true,
    marketing: false,
    decidedAt: '',
    gdprMode: false,
  });
  return true;
}

export { DEFAULT_NO_DECISION, STORAGE_KEY, CONSENT_EVENT };
