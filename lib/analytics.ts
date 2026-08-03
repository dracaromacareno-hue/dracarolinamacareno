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
  // `whatsapp_click` (GA4) y `Contact` (Meta) los dispara UNA sola vez el listener
  // global de clics de GoogleAnalytics.tsx y MetaPixel.tsx, que captura CUALQUIER
  // enlace wa.me del sitio (nav, hero, botón flotante, links crudos). No los
  // dispares también aquí: se contarían dos veces e inflarían la conversión de
  // Google Ads que se importa desde `whatsapp_click`. Helper conservado como no-op
  // por compatibilidad con los llamados existentes en WhatsAppLink/FloatingWhatsApp.
  whatsapp: (_label: string) => {
    /* single source of truth: listener global (ver comentario) */
  },

  /*
   * A META NO SE LE MANDA QUÉ TRATAMIENTO CONSULTÓ LA PERSONA (agosto 2026).
   *
   * Antes estos eventos incluían `content_name` con el tratamiento exacto:
   * "Implantes Cigomáticos", "Rehabilitación Oral Completa", "home_case_implantes".
   * Ningún dato de identidad, pero sí un indicio del tratamiento que le interesa
   * a una persona concreta, y eso en un sitio de salud es justo lo que Meta
   * restringe. Meta ya clasificó estos dominios como "Proveedor de salud y
   * bienestar" y "Estado de salud y bienestar"; seguir mandándoselo baja la
   * calidad de la cuenta publicitaria y en el peor caso lleva a un bloqueo.
   *
   * La solución no es dejar de medir: Meta sigue recibiendo el EVENTO (Lead,
   * Schedule, Contact), que es lo que necesita para optimizar campañas y
   * atribuir conversiones. Lo único que se le quita es el detalle de QUÉ.
   *
   * El detalle completo se conserva en Google Analytics, que no está sujeto a
   * esta restricción y es donde de verdad se analiza qué tratamiento convierte.
   * O sea que no se pierde ni un dato de negocio.
   *
   * REGLA: nunca pasar a `trackMeta` nada que nombre un tratamiento, una
   * condición, un síntoma ni una parte del cuerpo.
   */
  formSubmit: (treatment: string) => {
    trackEvent('contact_form_submit', { event_category: 'lead', event_label: treatment || 'general' });
    trackMeta('Lead');
  },

  amazon: () => {
    trackEvent('amazon_click', { event_category: 'book', event_label: 'El Poder de Tu Sonrisa' });
    // El libro no es un tratamiento, así que aquí sí puede ir el detalle.
    trackMeta('ViewContent', { content_name: 'libro_amazon', content_category: 'book' });
  },

  cta: (label: string) => {
    trackEvent('cta_click', { event_category: 'engagement', event_label: label });
    trackMeta('Schedule');
  },
};
