'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { readConsent, onConsentChange } from '@/lib/consent';

const GA_ID = 'G-8NTC47VWNV';
const PROD_HOSTS = new Set(['dracarolinamacareno.com', 'www.dracarolinamacareno.com']);

/**
 * Google Analytics 4 loader, consent-gated AND production-gated.
 *
 * GA4 only loads when:
 *   1. `consent.analytics === true` (user accepted analytics cookies), AND
 *   2. the page is being served from a production hostname.
 *
 * Production gating matters because Vercel issues a unique preview URL for
 * every branch deploy (e.g. `dracarolinamacareno-git-X-projects.vercel.app`).
 * Without this guard, every time we review a deploy in the browser the
 * tag fires and counts our own QA traffic as real visitor data, which
 * was inflating "(not set)" sources and triggering the GA "Pages not
 * tagged" diagnostic (May 2026 GSC audit).
 *
 * Localhost is also excluded for the same reason during dev.
 */
export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!PROD_HOSTS.has(window.location.hostname)) return;

    const initial = readConsent();
    if (initial?.analytics) setAllowed(true);
    const unsub = onConsentChange((state) => {
      setAllowed(Boolean(state.analytics));
    });
    return unsub;
  }, []);

  if (!allowed) return null;

  return (
    <>
      {/* GA4 loader */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* GA4 config + global event listeners */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });

          /* ── Global click tracking ── */
          document.addEventListener('click', function(e) {
            var el = e.target.closest('a');
            if (!el) return;
            var href = el.getAttribute('href') || '';
            var text = (el.innerText || '').trim().slice(0, 80);
            var path = window.location.pathname;

            // WhatsApp
            if (href.includes('wa.me')) {
              gtag('event', 'whatsapp_click', {
                event_category: 'engagement',
                event_label: text || path,
                page_path: path
              });
            }

            // Amazon
            if (href.includes('amazon.com') || href.includes('amazon.co')) {
              gtag('event', 'amazon_click', {
                event_category: 'book',
                event_label: 'El Poder de Tu Sonrisa',
                page_path: path
              });
            }

            // Stripe checkout (compra directa del PDF)
            if (href.includes('buy.stripe.com') || href.includes('checkout.stripe.com')) {
              gtag('event', 'begin_checkout', {
                event_category: 'ecommerce',
                event_label: 'El Poder de Tu Sonrisa PDF',
                currency: 'USD',
                value: 9.99,
                page_path: path
              });
            }

            // "Agenda tu cita" nav/hero buttons
            if (text.toLowerCase().includes('agenda') || text.toLowerCase().includes('cita') || text.toLowerCase().includes('appointment')) {
              gtag('event', 'cta_click', {
                event_category: 'engagement',
                event_label: text,
                page_path: path
              });
            }
          });
        `}
      </Script>
    </>
  );
}
