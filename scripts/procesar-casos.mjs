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
    antes: { archivo: 'Antes diseño cerámico 1.HEIC', cx: 0.50, cy: 0.47, w: 0.62 },
    despues: { archivo: 'Después diseño cerámico 1 .heic', cx: 0.50, cy: 0.45, w: 0.72 },
  },
  {
    id: 'ceramico-arco-superior',
    antes: { archivo: 'Antes Diseńo cerámico 2.HEIC', cx: 0.50, cy: 0.48, w: 0.86 },
    despues: { archivo: 'Después Diseńo cerámico 2..heic', cx: 0.50, cy: 0.46, w: 0.86 },
  },
  {
    id: 'alineadores-resina',
    // El "antes" es un retrato vertical de 950x1424, así que hay que bajar el
    // centro hasta la boca: en un retrato la sonrisa cae alrededor del 66% de
    // la altura, no en el medio.
    antes: { archivo: 'Antes Santiago Alineadores y micro diseño .JPG', cx: 0.50, cy: 0.665, w: 0.56 },
    despues: { archivo: 'despues diseño alineadores + micro diseño resina 1..HEIC', cx: 0.50, cy: 0.52, w: 1.0 },
  },
];

mkdirSync(TMP, { recursive: true });

/** HEIC no lo lee sharp; `sips` de macOS lo convierte sin perder resolución. */
function aJpg(archivo, salida) {
  const ruta = join(ORIGEN, archivo);
  if (!existsSync(ruta)) throw new Error(`no existe: ${archivo}`);
  if (/\.hei[cf]$/i.test(archivo)) {
    execFileSync('sips', ['-s', 'format', 'jpeg', ruta, '--out', salida], { stdio: 'ignore' });
    return salida;
  }
  return ruta;
}

async function procesar(foto, destino) {
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

  await sharp(buf)
    .extract({ left, top, width: w, height: h })
    .resize({ width: ANCHO })
    .sharpen({ sigma: 0.5 })
    .webp({ quality: 84 })
    .toFile(destino);

  return { origen: `${m.width}x${m.height}`, recorte: `${w}x${h}` };
}

for (const caso of CASOS) {
  for (const lado of ['antes', 'despues']) {
    const destino = join(DESTINO, `caso-${caso.id}-${lado}.webp`);
    const r = await procesar(caso[lado], destino);
    console.log(`${caso.id.padEnd(24)} ${lado.padEnd(8)} ${r.origen.padEnd(11)} -> ${ANCHO}px`);
  }
}
