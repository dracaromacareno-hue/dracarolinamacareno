/**
 * Consent state — shared between CookieConsent banner, GoogleAnalytics
 * and MetaPixel components.
 *
 * GDPR (EU) requires opt-in BEFORE tracking. CCPA (California) requires
 * a clear opt-out option. Other jurisdictions vary, but the strictest
 * baseline is GDPR's opt-in — we apply that to EU/UK visitors detected
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
];

export function isGdprModeFromLanguage(lang: string | undefined): boolean {
  if (!lang) return false;
  const lower = lang.toLowerCase();
  return GDPR_LANG_PREFIXES.some((p) => lower === p || lower.startsWith(p + '-') || lower.startsWith(p + ','));
}

export { DEFAULT_NO_DECISION, STORAGE_KEY, CONSENT_EVENT };
