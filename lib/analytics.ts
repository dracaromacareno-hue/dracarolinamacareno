/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
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

/**
 * Fire a Meta Pixel standard or custom event.
 * Safe to call server-side (no-ops if window is undefined).
 *
 * Meta standard events: PageView, ViewContent, Search, AddToCart, AddToWishlist,
 * InitiateCheckout, AddPaymentInfo, Purchase, Lead, CompleteRegistration,
 * Contact, CustomizeProduct, Donate, FindLocation, Schedule, StartTrial,
 * SubmitApplication, Subscribe.
 */
export function trackMeta(
  eventName: string,
  params?: Record<string, string | number | boolean>,
  isCustom = false,
) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq(isCustom ? 'trackCustom' : 'track', eventName, params || {});
}

// ─── Convenience helpers (dispara GA + Meta Pixel a la vez) ────────────────────

export const track = {
  whatsapp: (label: string) => {
    trackEvent('whatsapp_click', { event_category: 'engagement', event_label: label });
    trackMeta('Contact', { content_name: label || 'whatsapp' });
  },

  formSubmit: (treatment: string) => {
    trackEvent('contact_form_submit', { event_category: 'lead', event_label: treatment || 'general' });
    trackMeta('Lead', { content_name: treatment || 'general' });
  },

  amazon: () => {
    trackEvent('amazon_click', { event_category: 'book', event_label: 'El Poder de Tu Sonrisa' });
    trackMeta('ViewContent', { content_name: 'libro_amazon', content_category: 'book' });
  },

  cta: (label: string) => {
    trackEvent('cta_click', { event_category: 'engagement', event_label: label });
    trackMeta('Schedule', { content_name: label });
  },
};
