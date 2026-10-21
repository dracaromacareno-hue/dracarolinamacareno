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
  //    El reproductor se monta ENCIMA de la portada, invisible, y solo se muestra cuando
  //    YouTube avisa que ya está reproduciendo (se le pregunta cada 250 ms, porque su
  //    reproductor tarda en estar listo) o a los 2,5 s de cargar, como respaldo.
  //    Así no queda un momento en negro entre la portada y el video (visto el 21-oct en
  //    la primera prueba: 1 a 2 s de marco negro).
  const script = `<script>(function(){var on=false;function go(){if(on)return;on=true;var fs=document.querySelectorAll('iframe[data-lazy-src]');for(var i=0;i<fs.length;i++){mount(fs[i]);}}function mount(f){var url=f.getAttribute('data-lazy-src');f.removeAttribute('data-lazy-src');url+=(url.indexOf('?')<0?'?':'&')+'enablejsapi=1&origin='+encodeURIComponent(location.origin);var n=document.createElement('iframe');n.setAttribute('allow',f.getAttribute('allow')||'autoplay; encrypted-media');n.setAttribute('allowfullscreen','');n.title=f.title;n.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;border:0;opacity:0;transition:opacity .4s';var shown=false;function show(){if(shown)return;shown=true;n.style.opacity='1';setTimeout(function(){f.style.visibility='hidden';},450);}window.addEventListener('message',function(e){if(e.source!==n.contentWindow)return;var d;try{d=typeof e.data==='string'?JSON.parse(e.data):e.data;}catch(x){return;}var i=d&&d.info;if(i&&(i.playerState===1||i.currentTime>0))show();});n.addEventListener('load',function(){setTimeout(show,2500);});n.src=url;f.parentNode.appendChild(n);var k=0;var iv=setInterval(function(){if(shown||k++>60){clearInterval(iv);return;}try{n.contentWindow.postMessage(JSON.stringify({event:'listening',id:1,channel:'widget'}),'*');}catch(x){}},250);}if(document.readyState==='complete'){setTimeout(go,0);}else{window.addEventListener('load',function(){setTimeout(go,0);});}setTimeout(go,3000);})();</script>`;
  html = html.replace(/<\/body>/i, `${script}</body>`);

  return { html, deferred: true };
}
