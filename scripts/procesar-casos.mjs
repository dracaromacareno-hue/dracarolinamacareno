/**
 * Procesa las fotos de casos clínicos: recorta a la sonrisa, empareja el
 * encuadre del antes con el del después, y exporta al formato del sitio.
 *
 * POR QUÉ EXISTE
 * Las fotos llegan del celular en HEIC de 4032x3024, cada una con un encuadre
 * distinto. Si se publican tal cual, en un par el "antes" muestra media cara y
 * el "después" un primer plano, y entonces el ojo no compara el resultado sino
 * el zoom. Este script fuerza el mismo recorte relativo a los dos lados del par.
 *
 * CÓMO SE AJUSTA
 * `cx`/`cy` son el centro de la sonrisa en fracciones de la foto ya rotada, y
 * `w` cuánto ancho abarcar. Si un caso queda mal encuadrado, se toca solo su
 * entrada aquí y se vuelve a correr. No hay que tocar el resto.
 *
 * REGLA: la cara del paciente NUNCA se muestra. Ver CLAUDE.md.
 */
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ORIGEN = '/Users/carolinamacareno/Desktop/CASOS_NUEVOS_WEB';
const DESTINO = 'public/images';
const TMP = '/tmp/casos-proc';
const ANCHO = 1400;
const ASPECTO = 4 / 3;

const CASOS = [
  {
    id: 'all-on-6-4',
    antes: { archivo: 'antes Protesis fija sobre implantes 1.HEIC', cx: 0.50, cy: 0.42, w: 0.74 },
    despues: { archivo: 'despues protesis fija sobre implantes 1.HEIC', cx: 0.52, cy: 0.40, w: 0.90 },
  },
  {
    id: 'recambio-carillas',
    // El original es un primer plano de los centrales. Se abre al maximo para
    // que se vea la sonrisa completa y compare con el despues.
    antes: { archivo: 'Antes diseño cerámico 1.HEIC', cx: 0.50, cy: 0.50, w: 1.0 },
    despues: { archivo: 'Después diseño cerámico 1 .heic', cx: 0.50, cy: 0.47, w: 0.92 },
  },
  {
    id: 'ceramico-arco-superior',
    /*
      `luz` sube exposición y contraste. Esta pareja se tomó con muy poca luz:
      las dos fotos venían con ~24 % de dominante cálida, así que al corregir el
      balance por igual quedaron pareciéndose entre sí y el cambio real del
      tratamiento no se apreciaba.
      Se aplica al par completo, nunca a un solo lado. Ver balanceDeBlancos().
    */
    luz: { brillo: 1.12, contraste: 1.06 },
    antes: { archivo: 'Antes Diseńo cerámico 2.HEIC', cx: 0.50, cy: 0.48, w: 0.86 },
    despues: { archivo: 'Después Diseńo cerámico 2..heic', cx: 0.50, cy: 0.46, w: 0.86 },
  },
  {
    id: 'alineadores-resina',
    // El "antes" es un retrato vertical de 950x1424, así que hay que bajar el
    // centro hasta la boca: en un retrato la sonrisa cae alrededor del 66% de
    // la altura, no en el medio.
    antes: { archivo: 'Antes Santiago Alineadores y micro diseño .JPG', cx: 0.50, cy: 0.665, w: 0.56 },
    despues: { archivo: 'Después Santiago Alineadores original .HEIC', cx: 0.50, cy: 0.665, w: 0.56 },
  },
  {
    id: 'carillas-ceramicas-3',
    // El "antes" llega en DNG, el RAW de la cámara. Se convierte aquí para
    // aprovechar el rango tonal completo en vez de partir de un JPG ya exportado.
    antes: { archivo: 'Antes Diseńo de carillas cerámicas 3.DNG', cx: 0.50, cy: 0.50, w: 0.96 },
    despues: { archivo: 'Después Diseńo de carillas cerámicas 3.jpg', cx: 0.50, cy: 0.60, w: 0.96 },
  },
  {
    id: 'protesis-fija-zirconio',
    /*
      El "antes" viene mas apretado que el "despues" (la boca ocupa el 75 % del
      encuadre contra el 65 %), asi que al "despues" se le cierra el recorte
      hasta emparejarlos. Si no, el ojo compara el zoom en vez del resultado.
    */
    antes: { archivo: 'Antes caso prótesis fija 1.heic', cx: 0.50, cy: 0.50, w: 0.98 },
    despues: { archivo: 'Después caso prótesis fija coronas zirconio 1.heic', cx: 0.47, cy: 0.47, w: 0.88 },
  },
];

mkdirSync(TMP, { recursive: true });

/**
 * HEIC y DNG no los lee sharp; `sips` de macOS los convierte sin perder
 * resolución. El DNG es el RAW de la cámara del iPhone, así que además llega
 * con más rango tonal que un JPG: conviene convertirlo aquí y no exportarlo
 * antes desde Fotos.
 */
function aJpg(archivo, salida) {
  const ruta = join(ORIGEN, archivo);
  if (!existsSync(ruta)) throw new Error(`no existe: ${archivo}`);
  if (/\.(hei[cf]|dng|tiff?)$/i.test(archivo)) {
    execFileSync('sips', ['-s', 'format', 'jpeg', ruta, '--out', salida], { stdio: 'ignore' });
    return salida;
  }
  return ruta;
}

/**
 * Neutraliza la dominante de color de la luz del consultorio.
 *
 * ESTO NO ES BLANQUEAR DIENTES. Es corregir el balance de blancos: las fotos
 * salen con 13-26 % de dominante cálida porque la luz del consultorio es
 * amarilla. Se comprobó midiendo las zonas claras de cada foto; una tomada con
 * otra luz mide 4,9 %, que sirve de control y confirma que el amarillo viene de
 * la iluminación y no del color real del diente.
 *
 * LÍMITE ÉTICO, no tocar: la corrección se aplica igual al antes y al después.
 * Corregir solo el después fabricaría una mejora que no ocurrió, y eso en
 * publicidad odontológica es engañoso. El tope de ganancia (1.18) evita que la
 * "corrección" se convierta en un blanqueamiento encubierto.
 */
async function balanceDeBlancos(buf) {
  const { data, info } = await sharp(buf).resize({ width: 200 }).removeAlpha()
    .raw().toBuffer({ resolveWithObject: true });
  let r = 0, g = 0, b = 0, n = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    const R = data[i], G = data[i + 1], B = data[i + 2];
    const max = Math.max(R, G, B), min = Math.min(R, G, B);
    if (max > 170 && (max === 0 ? 0 : (max - min) / max) < 0.30) { r += R; g += G; b += B; n++; }
  }
  if (n < 50) return buf; // sin zona clara fiable: mejor no tocar nada
  r /= n; g /= n; b /= n;
  const gris = (r + g + b) / 3;
  const tope = (v) => Math.min(1.18, Math.max(0.9, gris / v));
  return sharp(buf)
    .recomb([[tope(r), 0, 0], [0, tope(g), 0], [0, 0, tope(b)]])
    .toBuffer();
}

async function procesar(foto, destino, luz) {
  const jpg = aJpg(foto.archivo, join(TMP, `${Math.random().toString(36).slice(2)}.jpg`));
  // rotate() sin argumentos aplica la orientación EXIF; el HEIC del iPhone la
  // guarda ahí y sin esto las fotos salen acostadas.
  const buf = await sharp(jpg).rotate().toBuffer();
  const m = await sharp(buf).metadata();

  let w = Math.round(m.width * foto.w);
  let h = Math.round(w / ASPECTO);
  if (h > m.height) { h = m.height; w = Math.round(h * ASPECTO); }
  const left = Math.max(0, Math.min(m.width - w, Math.round(m.width * foto.cx - w / 2)));
  const top = Math.max(0, Math.min(m.height - h, Math.round(m.height * foto.cy - h / 2)));

  const recortado = await sharp(buf)
    .extract({ left, top, width: w, height: h })
    .resize({ width: ANCHO })
    .toBuffer();

  let img = sharp(await balanceDeBlancos(recortado));
  // `luz` solo mejora la exposición de la toma; nunca cambia el color del diente.
  if (luz) img = img.modulate({ brightness: luz.brillo }).linear(luz.contraste, -(128 * (luz.contraste - 1)));

  await img
    .sharpen({ sigma: 0.5 })
    .webp({ quality: 84 })
    .toFile(destino);

  return { origen: `${m.width}x${m.height}`, recorte: `${w}x${h}` };
}

for (const caso of CASOS) {
  for (const lado of ['antes', 'despues']) {
    const destino = join(DESTINO, `caso-${caso.id}-${lado}.webp`);
    const r = await procesar(caso[lado], destino, caso.luz);
    console.log(`${caso.id.padEnd(24)} ${lado.padEnd(8)} ${r.origen.padEnd(11)} -> ${ANCHO}px`);
  }
}
