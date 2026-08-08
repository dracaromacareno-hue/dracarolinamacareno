'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { readConsent, onConsentChange, applyImplicitConsent } from '@/lib/consent';

const GA_ID = 'G-8NTC47VWNV';
/**
 * Google Ads. Julio 2026: hasta ahora este tag SOLO existía dentro de las páginas
 * de GoHighLevel, que se sirven bajo el dominio .co. Ninguna página nativa del .com
 * lo cargaba, así que una conversión de tipo "carga de página" sobre una URL propia
 * del .com era imposible: no había tag que la disparara.
 *
 * Ese es el motivo por el que la campaña de Diseño de Sonrisa marcaba cero. La
 * landing vive en .com (proxy del embudo GHL) pero el embudo redirige la página de
 * gracias a .co, y la cookie _gcl_aw es de un solo dominio: se escribe en .com al
 * llegar del anuncio y no se puede leer en .co al convertir. El clic y la conversión
 * quedaban en dominios distintos y Google no podía unirlos.
 */
const ADS_ID = 'AW-17492725815';
const PROD_HOSTS = new Set(['dracarolinamacareno.com', 'www.dracarolinamacareno.com']);

/**
 * Google Analytics 4 + Google Ads loader, consent-gated AND production-gated.
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

    // Punto de partida para el visitante no europeo: medir. Ver el comentario
    // largo de applyImplicitConsent() en lib/consent.ts. Va aquí y no en el
    // banner para que no dependa de que el aviso esté montado.
    applyImplicitConsent();

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

      {/* GA4 + Google Ads config + global event listeners */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });

          /* Google Ads. Un solo gtag.js sirve para los dos productos, por eso
             basta agregar el config y no hay que cargar otro script.
             Habilita las conversiones por carga de URL en páginas propias del .com,
             p. ej. las páginas de gracias de los embudos. */
          gtag('config', '${ADS_ID}');

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
