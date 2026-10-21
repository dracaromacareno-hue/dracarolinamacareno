/**
 * El video de arriba de la landing de implantes arranca solo, pero un instante después.
 *
 * POR QUÉ (21-oct-2026)
 * ---------------------
 * Después de sacar las fotos en base64, PageSpeed en celular le daba a `/implantes`
 * 38 de 100 con 3,2 MB en total. Lo más pesado era el reproductor de YouTube: 837 KB de
 * código que el celular baja y ejecuta al mismo tiempo que intenta pintar el texto y el
 * formulario. La Dra. decidió que el video SIGA ARRANCANDO SOLO al abrir la landing
 * (no se cambia por un botón de play), así que se hace esto:
 *
 *  1. El mismo `<iframe>` del video se queda en su sitio, con el mismo tamaño, pero
 *     mostrando solo una portada liviana (`srcdoc`). Como el marco es el mismo, nada salta.
 *  2. Cuando la página termina de cargar (o a los 3 s como mucho), un script le pone la
 *     dirección real del video, con `autoplay=1&mute=1` igual que antes, y arranca solo.
 *
 * El cambio se hace en el HTML y en `__NUXT_DATA__` con el mismo texto, igual que las
 * fotos en lib/landing-images.ts, para que la rehidratación de Nuxt no lo deshaga.
 * Si GHL cambia el video o el iframe, no se reconoce y se deja como venía.
 */

const PORTADA = '/images/landing-implantes/video-portada-800.webp';

const IFRAME_RE =
  /<iframe src="(https:\/\/www\.youtube-nocookie\.com\/embed\/[A-Za-z0-9_-]+\?[^"]*autoplay=1[^"]*)"/;

function srcdoc(): string {
  // Comillas simples adentro: el atributo va entre comillas dobles.
  return (
    "<style>html,body{margin:0;height:100%;background:#111}" +
    'img{width:100%;height:100%;object-fit:cover;display:block}</style>' +
    `<img src='${PORTADA}' alt=''>`
  );
}

export function deferHeroVideo(html: string): { html: string; deferred: boolean } {
  const m = html.match(IFRAME_RE);
  if (!m) return { html, deferred: false };

  const original = m[0];
  const url = m[1];
  const nuevo = `<iframe data-lazy-src="${url}" srcdoc="${srcdoc()}" title="Video: implantes dentales con la Dra. Carolina Macareno"`;

  // 1. HTML que pinta el servidor.
  html = html.split(original).join(nuevo);

  // 2. __NUXT_DATA__: Nuxt escribe < como \u003C, / como \u002F y " como \".
  const escNuxt = (s: string) =>
    s.replace(/\//g, '\\u002F').replace(/</g, '\\u003C').replace(/"/g, '\\"');
  html = html.split(escNuxt(original)).join(escNuxt(nuevo));

  // 3. Script que enciende el video cuando la página ya cargó. Busca el iframe en el
  //    momento de encenderlo, no antes, por si Nuxt volvió a pintar el bloque.
  const script = `<script>(function(){var on=false;function go(){if(on)return;on=true;var fs=document.querySelectorAll('iframe[data-lazy-src]');for(var i=0;i<fs.length;i++){var f=fs[i];if(!f.hasAttribute('srcdoc'))continue;f.removeAttribute('srcdoc');f.src=f.getAttribute('data-lazy-src');}}if(document.readyState==='complete'){setTimeout(go,0);}else{window.addEventListener('load',function(){setTimeout(go,0);});}setTimeout(go,3000);})();</script>`;
  html = html.replace(/<\/body>/i, `${script}</body>`);

  return { html, deferred: true };
}
