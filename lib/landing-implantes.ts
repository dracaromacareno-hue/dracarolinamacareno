/**
 * Reorganización de la landing de pauta de implantes (12-nov-2026).
 *
 * Pedido por la Dra. después del estudio post mortem de la landing (bóveda:
 * «Landing de implantes, estudio post mortem»):
 *
 * 1. ORDEN. En celular la prueba estaba al fondo: los casos arrancaban en la pantalla 8 de
 *    13 y solo el 21 % de las visitas llega al final. Ahora va: portada, casos reales,
 *    reseñas, autoridad, situaciones (dolor), solución, qué evaluamos, proceso, preguntas.
 * 2. PORTADA. Era un video negro arriba y el título y el botón quedaban abajo, fuera de la
 *    primera pantalla. Ahora va primero el título con el botón y debajo el video.
 * 3. RESEÑAS. Las tres de antes eran de Doctoralia y de otros tratamientos. Ahora son
 *    reseñas REALES de Google de pacientes de implantes y rehabilitación, leídas el
 *    12-nov-2026 en el perfil de la Dra. (5,0 con 39 opiniones). Reglas iguales a las de
 *    components/sections/TestimonialsSection.tsx: texto textual, recortes con […] por frases
 *    completas, erratas del original se conservan. La de Ray Serpa está escrita en inglés;
 *    se usa la traducción que muestra el propio Google y se marca como tal.
 * 4. PRIMER DÍA. «Desde el primer día sales con dientes provisionales fijos» se decía para
 *    todos. La Dra. precisó el 12-nov que es cierto en All-on-4 o All-on-6 en pacientes sin
 *    dientes: se colocan los implantes y se fijan dientes provisionales sobre ellos.
 *
 * El HTML de GHL llega dos veces: el que se ve y una copia dentro de __NUXT_DATA__ (JSON).
 * Todo se aplica a las dos; si solo cambiara el visible, Nuxt lo devolvería al original
 * al hidratar. Si GHL cambia la estructura y un marcador no aparece, esa parte no se
 * toca y la página queda como viene de GHL.
 */

const RESENAS = [
  {
    nombre: 'Minerva Dutari',
    detalle: 'Panamá · 10 implantes, injerto de hueso y prótesis híbrida · Google',
    texto:
      'Debido a problemas de encías y pérdida de hueso, fue necesario extraer todas mis piezas dentales, tanto arriba como abajo. Viajé desde Panamá especialmente para realizarme este tratamiento aquí […] Me colocaron 10 implantes en total (superiores e inferiores), junto con injerto de hueso, además de una prótesis temporal mientras cicatrizaba la zona. Aun así, la experiencia fue mucho mejor de lo que imaginaba: no sentí dolor durante el procedimiento ni después […] Destaco la meticulosidad de la Dra. Macareno que garantiza su trabajo y transmite total confianza.',
  },
  {
    nombre: 'Ray Serpa',
    detalle: 'Estados Unidos · 4 implantes y corrección de sonrisa · Google (escrita en inglés, traducción de Google)',
    // «Macarena» es de la traducción que muestra Google. No se corrige: es lo que ve quien verifica.
    texto:
      'Me hice una extracción, me pusieron cuatro implantes, me blanquearon la boca y me hicieron una corrección de sonrisa con la Dra. Carolina Macarena en Colombia, y la experiencia fue increíble. Fue completamente indoloro, la clínica es preciosa y la ubicación es muy conveniente. Ella me trajo a todos los especialistas allí mismo, sin tener que ir a diferentes lugares. Lo que realmente me impresionó fue el cariño y la dedicación que le pone a su trabajo y a sus pacientes.',
  },
  {
    nombre: 'Ximena Baena',
    detalle: 'España · rehabilitación completa · Google',
    // «empece», «paso», «con lo quería» y «quedaramos» son del original (regla de texto textual).
    texto:
      'Vivo en España hace muchos años y hace unos 10 años empece a notar el deterioro progresivo de mis dientes debido a problemas de bruxismo, muchos años de corticoides, erosión, etc hasta que mi dentadura ya no daba para más. […] Ya paso todo, fue complejo (como debía ser) pero en todo momento sentí que la doctora estaba conectada con mis miedos, con lo quería y con lo que no.',
  },
];

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const GRID_RESENAS =
  '<div class="test-grid">' +
  RESENAS.map(
    (r) => `
        <div class="test-card">
          <div class="test-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="test-quote">“${esc(r.texto)}”</p>
          <div>
            <div class="test-name">${esc(r.nombre)}</div>
            <div class="test-detail">${esc(r.detalle)}</div>
          </div>
        </div>`,
  ).join('') +
  '\n      </div>';

const CONFIANZA =
  '<div style="margin-top:14px;font-size:0.8rem;letter-spacing:0.5px;color:rgba(255,255,255,0.85);">' +
  '<span style="color:#d4b483;">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 5,0 en Google &middot; 39 opiniones &middot; 17 a&ntilde;os de experiencia' +
  '</div>';

const TEXTOS: Array<[string, string]> = [
  [
    'Se coloca una pr&oacute;tesis fija provisional. Recuperas funci&oacute;n y est&eacute;tica desde el primer d&iacute;a.',
    'En All-on-4 o All-on-6, en pacientes que ya no tienen dientes, se colocan los implantes y ese mismo d&iacute;a se fijan sobre ellos dientes provisionales. En los dem&aacute;s casos, el provisional se define en la planeaci&oacute;n.',
  ],
  [
    'Depende del caso. Desde el primer d&iacute;a sales con dientes provisionales fijos.',
    'Depende del caso. En All-on-4 o All-on-6, en pacientes que ya no tienen dientes, sales el mismo d&iacute;a de la cirug&iacute;a con dientes provisionales fijos sobre los implantes.',
  ],
];

/** Separador que GHL pone antes de cada sección numerada: tres comentarios seguidos. */
function inicioSeccion(html: string, n: number): number {
  const m = new RegExp(`\\s*<!-- =+ -->\\s*<!-- ${n}\\. [^>]*?-->\\s*<!-- =+ -->`).exec(html);
  return m ? m.index : -1;
}

/** Orden nuevo de las secciones numeradas de GHL (1 = portada … 9 = testimonios). */
const ORDEN = [1, 7, 9, 2, 3, 4, 5, 6, 8];

function reordenar(html: string): string {
  const inicios = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => inicioSeccion(html, n));
  if (inicios.some((i) => i < 0)) return html;
  for (let k = 1; k < inicios.length; k++) if (inicios[k] <= inicios[k - 1]) return html;
  const cierre9 = html.indexOf('</section>', inicios[8]);
  if (cierre9 < 0) return html;
  const fin9 = cierre9 + '</section>'.length;
  const partes: Record<number, string> = {};
  for (let n = 1; n <= 9; n++) {
    partes[n] = html.slice(inicios[n - 1], n < 9 ? inicios[n] : fin9);
  }
  return html.slice(0, inicios[0]) + ORDEN.map((n) => partes[n]).join('') + html.slice(fin9);
}

/** En la portada, el título y el botón van antes del video; y una línea de confianza bajo el botón. */
function portada(html: string): string {
  const v = html.indexOf('<div class="hero-video">');
  const c = html.indexOf('<div class="hero-content">', v);
  if (v < 0 || c < 0) return html;
  const fin = html.indexOf('</section>', c);
  if (fin < 0) return html;
  const video = html.slice(v, c);
  let contenido = html.slice(c, fin);
  // contenido termina en «</div>\n  » (cierre de hero-content y sangría). Se separa el cierre.
  const ultimoDiv = contenido.lastIndexOf('</div>');
  if (ultimoDiv < 0) return html;
  contenido = contenido.slice(0, ultimoDiv) + CONFIANZA + '\n    ' + contenido.slice(ultimoDiv);
  return html.slice(0, v) + contenido.trimEnd() + '\n    ' + video.trimEnd() + '\n  ' + html.slice(fin);
}

function resenas(html: string): string {
  const s = inicioSeccion(html, 9);
  if (s < 0) return html;
  const g = html.indexOf('<div class="test-grid">', s);
  const finSec = html.indexOf('</section>', s);
  if (g < 0 || finSec < 0 || g > finSec) return html;
  // Dentro de la sección, después de la grilla quedan el cierre del contenedor y </section>.
  const cierreContenedor = html.lastIndexOf('</div>', finSec);
  const cierreGrilla = html.lastIndexOf('</div>', cierreContenedor - 1);
  if (cierreGrilla < g) return html;
  return (
    html
      .slice(0, g)
      .replace('>Historias reales<', '>Rese&ntilde;as reales en Google<') +
    GRID_RESENAS +
    html.slice(cierreGrilla + '</div>'.length)
  );
}

/** Aplica todo a un bloque de HTML de GHL (el visible o la copia de __NUXT_DATA__). */
function transformar(bloque: string): string {
  let h = bloque;
  for (const [de, a] of TEXTOS) h = h.replaceAll(de, a);
  h = resenas(h);
  h = portada(h);
  h = reordenar(h);
  return h;
}

export function reorganizarLandingImplantes(html: string): string {
  const re = /(<script[^>]*id="__NUXT_DATA__"[^>]*>)([\s\S]*?)(<\/script>)/;
  const m = re.exec(html);
  if (!m) return transformar(html);

  const antes = html.slice(0, m.index);
  const despues = html.slice(m.index + m[0].length);

  let datos = m[2];
  try {
    const arr = JSON.parse(datos) as unknown[];
    const nuevo = arr.map((x) =>
      typeof x === 'string' && x.includes('<!-- 9. TESTIMONIOS') ? transformar(x) : x,
    );
    datos = JSON.stringify(nuevo).replace(/</g, '\\u003C');
  } catch {
    // Si GHL cambia el formato de los datos, se deja la copia como viene.
  }

  return transformar(antes) + m[1] + datos + m[3] + despues;
}
