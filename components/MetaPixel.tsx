'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { readConsent, onConsentChange } from '@/lib/consent';

// Pixel ID confirmado en Meta Business Manager → Orígenes de datos.
// Pixel "Pixel Caro Macareno", Meta Pixel + Conversions API (CAPI activo).
const PIXEL_ID = '36066925139564924';
const PROD_HOSTS = new Set(['dracarolinamacareno.com', 'www.dracarolinamacareno.com']);

/**
 * Meta Pixel, consent-gated (marketing) AND production-gated.
 *
 * Only loads when:
 *   1. `consent.marketing === true` (user accepted marketing cookies), AND
 *   2. the page is being served from a production hostname.
 *
 * Production gating matches GoogleAnalytics.tsx, we don't want Vercel
 * preview URLs or localhost firing the pixel and inflating Meta's
 * audience pool with our own QA traffic.
 */
export default function MetaPixel() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!PROD_HOSTS.has(window.location.hostname)) return;

    const initial = readConsent();
    if (initial?.marketing) setAllowed(true);
    const unsub = onConsentChange((state) => {
      setAllowed(Boolean(state.marketing));
    });
    return unsub;
  }, []);

  if (!allowed) return null;

  return (
    <>
      {/* Meta Pixel base loader (browser-side) */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');

          /*
             Auto-tracking de clicks. SIN texto del enlace (agosto 2026).

             Antes se mandaba a Meta el texto del enlace como content_name. En
             una página de tratamiento ese texto es el nombre del procedimiento
             ("quiero información sobre implantes cigomáticos"), o sea un indicio
             del tratamiento que le interesa a una persona. Para un dominio que
             Meta ya clasificó como proveedor de salud, eso es dato restringido:
             baja la calidad de la cuenta y puede terminar en bloqueo.

             Ahora solo se manda el EVENTO, que es lo que Meta necesita para
             optimizar. El detalle sigue completo en Google Analytics.
          */
          document.addEventListener('click', function(e) {
            var el = e.target.closest('a');
            if (!el) return;
            var href = el.getAttribute('href') || '';
            var text = (el.innerText || '').trim().slice(0, 80).toLowerCase();

            if (href.includes('wa.me')) {
              fbq('track', 'Contact');
            }

            if (text.includes('agenda') || text.includes('cita') || text.includes('appointment')) {
              fbq('track', 'Schedule');
            }
          });
        `}
      </Script>

      {/* Fallback noscript pixel para usuarios sin JS, solo si dieron consent */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
