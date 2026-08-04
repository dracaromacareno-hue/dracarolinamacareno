/**
 * Procesa el caso de All-on-4 bimaxilar y las fotos de las prótesis híbridas.
 *
 * SON DOS COSAS DISTINTAS Y SE USAN EN SITIOS DISTINTOS
 *
 * 1. El caso: la radiografía de antes y después junto a la foto final. Van
 *    montadas en una sola pieza 16:9 porque la tarjeta de casos documentados
 *    tiene esa proporción, y porque las dos juntas cuentan la historia completa:
 *    la radiografía prueba lo que se hizo por dentro y la foto muestra el
 *    resultado. Por separado, ninguna de las dos convence sola.
 *
 * 2. Las prótesis sobre la mesa: van en la página de prótesis fija. Ahí no
 *    sirven de prueba de resultado, sirven para explicar qué es una prótesis
 *    híbrida atornillada, que es justo lo que nadie entiende cuando se lo
 *    proponen.
 *
 * SOBRE "MEJORAR EL FONDO"
 * Las fotos se tomaron sobre la mesa del laboratorio, que sale gris y con
 * sombras. `limpiarFondo()` sube las luces hasta que esa mesa queda blanca y
 * neutraliza la dominante de color. NO toca la prótesis: el tope de ganancia
 * está calculado sobre el fondo, y los dientes quedan como estaban. Blanquear
 * los dientes de la prótesis en una foto de producto sería vender un color que
 * el paciente no va a recibir.
 */
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ORIGEN = '/Users/carolinamacareno/Desktop/CASOS_NUEVOS_WEB';
const DESTINO = 'public/images';
const TMP = '/tmp/all-on-4-proc';

mkdirSync(TMP, { recursive: true });

function aJpg(archivo) {
  const salida = join(TMP, archivo.replace(/[^a-z0-9]/gi, '_') + '.jpg');
  execFileSync('sips', ['-s', 'format', 'jpeg', join(ORIGEN, archivo), '--out', salida], { stdio: 'ignore' });
  return salida;
}

/** Recorta por fracciones de la imagen ya rotada por EXIF. */
async function recortar(buf, { x0, y0, x1, y1 }) {
  const m = await sharp(buf).metadata();
  return sharp(buf).extract({
    left: Math.round(m.width * x0),
    top: Math.round(m.height * y0),
    width: Math.round(m.width * (x1 - x0)),
    height: Math.round(m.height * (y1 - y0)),
  }).toBuffer();
}

/**
 * Deja blanca la mesa del laboratorio sin tocar el objeto.
 *
 * Mide el percentil 97 de luminancia, que en estas fotos es siempre el fondo, y
 * aplica la ganancia justa para llevarlo a 250. La prótesis queda por debajo de
 * ese umbral, así que no se altera su color. El tope de 1.6 evita que una foto
 * muy oscura se convierta en otra cosa.
 */
async function limpiarFondo(buf) {
  const { data, info } = await sharp(buf).resize({ width: 240 }).removeAlpha()
    .raw().toBuffer({ resolveWithObject: true });

  const lum = [];
  let r = 0, g = 0, b = 0, n = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    const R = data[i], G = data[i + 1], B = data[i + 2];
    lum.push(0.299 * R + 0.587 * G + 0.114 * B);
    const max = Math.max(R, G, B), min = Math.min(R, G, B);
    if (max > 150 && (max - min) / max < 0.22) { r += R; g += G; b += B; n++; }
  }
  lum.sort((a, z) => a - z);
  const fondo = lum[Math.floor(lum.length * 0.97)];
  const ganancia = Math.min(1.6, Math.max(1, 250 / Math.max(fondo, 1)));

  let img = sharp(buf).linear(ganancia, 0);
  if (n > 40) {
    r /= n; g /= n; b /= n;
    const gris = (r + g + b) / 3;
    const t = (v) => Math.min(1.15, Math.max(0.92, gris / v));
    img = sharp(await img.toBuffer()).recomb([[t(r), 0, 0], [0, t(g), 0], [0, 0, t(b)]]);
  }
  return img.toBuffer();
}

// ---------------------------------------------------------------- el caso

const rx = await sharp(aJpg('Antes y después Rx all on 4 .heic')).rotate().toBuffer();
const sonrisa = await sharp(aJpg('Después prótesis híbrida final caso all on 4 .heic')).rotate().toBuffer();

// Las dos panorámicas están apiladas dentro de la misma foto de pantalla. Se
// separan para poder montarlas parejas: la de arriba es el antes.
const rxAntes = await recortar(rx, { x0: 0.01, y0: 0.015, x1: 0.99, y1: 0.455 });
const rxDespues = await recortar(rx, { x0: 0.01, y0: 0.495, x1: 0.99, y1: 0.985 });

const ANCHO = 1600, ALTO = 900, MITAD = 800;
const rxA = await sharp(rxAntes).resize({ width: MITAD - 48 }).toBuffer();
const rxD = await sharp(rxDespues).resize({ width: MITAD - 48 }).toBuffer();
const mA = await sharp(rxA).metadata();
const mD = await sharp(rxD).metadata();
const hueco = 16;
const bloque = mA.height + hueco + mD.height;

const foto = await sharp(sonrisa)
  .resize({ width: MITAD, height: ALTO, fit: 'cover', position: 'centre' })
  .toBuffer();

await sharp({ create: { width: ANCHO, height: ALTO, channels: 3, background: '#FFFFFF' } })
  .composite([
    { input: rxA, left: 24, top: Math.round((ALTO - bloque) / 2) },
    { input: rxD, left: 24, top: Math.round((ALTO - bloque) / 2) + mA.height + hueco },
    { input: foto, left: MITAD, top: 0 },
  ])
  .webp({ quality: 86 })
  .toFile(join(DESTINO, 'caso-all-on-4-bimaxilar.webp'));
console.log('caso-all-on-4-bimaxilar.webp        1600x900 (rx antes/después + resultado)');

// La foto final también suelta, para la vitrina de antes y después.
await sharp(sonrisa).resize({ width: 1400 }).sharpen({ sigma: 0.5 })
  .webp({ quality: 86 }).toFile(join(DESTINO, 'caso-all-on-4-bimaxilar-sonrisa.webp'));
console.log('caso-all-on-4-bimaxilar-sonrisa.webp 1400px');

// ------------------------------------------------------- las prótesis

const PROTESIS = [
  // Las dos arcadas montadas, la que mejor explica de qué se está hablando.
  { archivo: 'IMG_3016.HEIC', salida: 'protesis-hibrida-arcadas.webp', caja: { x0: 0.02, y0: 0.16, x1: 0.99, y1: 0.63 } },
  // La cara interna: se ven los cuatro alojamientos de los tornillos. Es la
  // foto que explica por qué es "atornillada" y por qué se puede retirar.
  { archivo: 'IMG_3017.HEIC', salida: 'protesis-hibrida-atornillada.webp', caja: { x0: 0.02, y0: 0.24, x1: 0.99, y1: 0.71 } },
  // Frontal en la mano: da la escala real, que en las otras dos se pierde.
  { archivo: 'IMG_3012.HEIC', salida: 'protesis-hibrida-detalle.webp', caja: { x0: 0.06, y0: 0.42, x1: 1.0, y1: 0.84 } },
];

for (const p of PROTESIS) {
  const base = await sharp(aJpg(p.archivo)).rotate().toBuffer();
  const rec = await recortar(base, p.caja);
  const limpio = await limpiarFondo(rec);
  await sharp(limpio).resize({ width: 1200 }).sharpen({ sigma: 0.6 })
    .webp({ quality: 86 }).toFile(join(DESTINO, p.salida));
  const m = await sharp(limpio).metadata();
  console.log(`${p.salida.padEnd(36)} ${m.width}x${m.height} -> 1200px`);
}
