/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Fire a GA4 custom event.
 * Safe to call server-side (no-ops if window is undefined).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', eventName, {
    ...params,
    page_path: window.location.pathname,
  });
}

// ─── Convenience helpers ──────────────────────────────────────────────────────

export const track = {
  whatsapp: (label: string) =>
    trackEvent('whatsapp_click', { event_category: 'engagement', event_label: label }),

  formSubmit: (treatment: string) =>
    trackEvent('contact_form_submit', { event_category: 'lead', event_label: treatment || 'general' }),

  amazon: () =>
    trackEvent('amazon_click', { event_category: 'book', event_label: 'El Poder de Tu Sonrisa' }),

  cta: (label: string) =>
    trackEvent('cta_click', { event_category: 'engagement', event_label: label }),
};
