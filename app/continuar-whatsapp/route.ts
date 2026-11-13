import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * Página puente entre el botón de WhatsApp de una landing de pauta y WhatsApp.
 *
 * POR QUÉ EXISTE (13-nov-2026)
 * La cuenta de Meta del consultorio está clasificada como salud y Meta descarta
 * los eventos Lead y Contact: en 7 días llegaron 0 de cada uno aunque el sitio
 * los dispara. Lo único que Meta sigue contando es la carga de una URL, con una
 * conversión personalizada. Y 13 de los 19 leads de Meta (26-oct a 12-nov)
 * escribieron por WhatsApp sin pasar por ninguna URL contable: Meta optimizaba
 * con el tercio que llenaba el formulario.
 *
 * Esta página carga el píxel, registra la visita y abre WhatsApp con el mismo
 * mensaje (marca de fuente y gclid incluidos). La conversión «Contacto CP4»
 * cuenta las URL que contienen `continuar-whatsapp`.
 *
 * REGLAS QUE NO SE TOCAN
 * - Solo redirige a wa.me o api.whatsapp.com. Cualquier otro destino cae al
 *   número del consultorio: no puede usarse para mandar gente a otro sitio.
 * - El píxel respeta el mismo consentimiento que el resto del sitio
 *   (components/MetaPixel.tsx): solo carga si la persona aceptó cookies de
 *   marketing. Sin consentimiento, se va directo a WhatsApp sin medir.
 * - A Meta no se le manda nada del mensaje ni del tratamiento: solo la visita y
 *   un evento con nombre neutro.
 * - Nunca bloquea al paciente: si el píxel no carga, a los 1,5 s se abre
 *   WhatsApp igual, y hay un botón visible por si el navegador no redirige.
 */

const PIXEL_ID = '36066925139564924';
const WA_DEFECTO = 'https://wa.me/573163975232';
const CONSENTIMIENTO = 'dcm_consent_v1';

function destino(raw: string | null): string {
  if (!raw) return WA_DEFECTO;
  try {
    const u = new URL(raw);
    if (u.protocol === 'https:' && (u.hostname === 'wa.me' || u.hostname === 'api.whatsapp.com')) {
      return u.toString();
    }
  } catch {
    // URL rota: al número del consultorio
  }
  return WA_DEFECTO;
}

function enAtributo(v: string): string {
  return v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function GET(req: NextRequest) {
  const dest = destino(req.nextUrl.searchParams.get('u'));
  const destJs = JSON.stringify(dest).replace(/</g, '\\u003c');

  const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Abriendo WhatsApp</title>
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#070B14;color:#F5F1E8;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:24px}
  a{display:inline-block;margin-top:20px;padding:14px 26px;border-radius:12px;background:#C9A461;color:#070B14;font-weight:600;text-decoration:none}
</style>
</head>
<body>
<div>
  <p>Abriendo WhatsApp con la Dra. Carolina Macareno…</p>
  <a href="${enAtributo(dest)}">Abrir WhatsApp</a>
</div>
<script>
(function () {
  var DEST = ${destJs};
  var ido = false;
  function ir() { if (ido) return; ido = true; location.replace(DEST); }

  var permitido = false;
  try {
    var c = JSON.parse(localStorage.getItem('${CONSENTIMIENTO}') || 'null');
    permitido = !!(c && c.marketing);
  } catch (e) {}

  // Igual que MetaPixel.tsx: fuera del dominio de producción (localhost, vistas
  // previas de Vercel) no se dispara, para no meter visitas de prueba en Meta.
  if (['dracarolinamacareno.com', 'www.dracarolinamacareno.com'].indexOf(location.hostname) < 0) {
    permitido = false;
  }

  if (!permitido) { ir(); return; }

  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.onload=function(){ setTimeout(ir, 500); };
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${PIXEL_ID}');
  fbq('track', 'PageView');
  fbq('trackCustom', 'ContactoCP');

  setTimeout(ir, 1500);
})();
</script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
