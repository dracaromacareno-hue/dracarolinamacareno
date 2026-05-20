'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { readConsent, onConsentChange } from '@/lib/consent';

const GA_ID = 'G-8NTC47VWNV';

/**
 * Google Analytics 4 loader — consent-gated.
 *
 * GA4 only loads when `consent.analytics === true`. Until then no
 * dataLayer or gtag call fires, so the user appears as a "necessary
 * cookies only" visitor.
 *
 * Subscribes to lib/consent.ts events so the script loads dynamically
 * the moment the user accepts (no page reload needed).
 */
export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
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
