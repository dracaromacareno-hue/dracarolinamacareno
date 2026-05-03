import Script from 'next/script';

// Pixel ID confirmado en Meta Business Manager → Orígenes de datos.
// Pixel "Pixel Caro Macareno" — Meta Pixel + Conversions API (CAPI activo).
const PIXEL_ID = '36066925139564924';

export default function MetaPixel() {
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

          /* ── Auto-tracking de clicks alineado con GoogleAnalytics ── */
          document.addEventListener('click', function(e) {
            var el = e.target.closest('a');
            if (!el) return;
            var href = el.getAttribute('href') || '';
            var text = (el.innerText || '').trim().slice(0, 80).toLowerCase();

            // WhatsApp clicks → estándar Meta "Contact"
            if (href.includes('wa.me')) {
              fbq('track', 'Contact', { content_name: text || 'whatsapp' });
            }

            // CTAs de agendamiento → estándar Meta "Schedule"
            if (text.includes('agenda') || text.includes('cita') || text.includes('appointment')) {
              fbq('track', 'Schedule', { content_name: text });
            }
          });
        `}
      </Script>

      {/* Fallback noscript pixel para usuarios sin JS */}
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
