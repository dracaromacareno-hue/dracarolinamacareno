/**
 * Prepara la secuencia completa del caso de Minerva para la página de All-on-4.
 *
 * POR QUÉ VA COMO SECUENCIA Y NO COMO UN ANTES Y DESPUÉS
 * Un antes y después demuestra el resultado, pero no responde la pregunta que
 * de verdad frena a alguien que va a operarse en otro país: qué pasa en el
 * medio. Cuatro fotos en orden sí lo responden, y ese es el argumento entero
 * de esta página.
 *
 * LA FOTO DE LA CIRUGÍA
 * Muestra al anestesiólogo, el monitor y el oxígeno. Es la única prueba visual
 * en todo el sitio de que la sedación se hace con un anestesiólogo presente, y
 * es justo lo que pregunta quien viaja para una cirugía larga. Se verificó que
 * el rostro de la paciente no aparece: va cubierta por el campo quirúrgico.
 */
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ORIGEN = '/Users/carolinamacareno/Desktop/CASOS_NUEVOS_WEB';
const TMP = '/tmp/minerva-proc';
mkdirSync(TMP, { recursive: true });

const PASOS = [
  {
    salida: 'minerva-1-antes.webp',
    archivo: 'Antes caso all on 4 y6 Minerva 1.heic',
    // Intraoral con separador: ya viene encuadrada, solo se limpian los bordes.
    caja: { x0: 0.02, y0: 0.02, x1: 0.98, y1: 0.98 },
  },
  {
    salida: 'minerva-2-cirugia.webp',
    archivo: 'Sedacion consiente en consultorio con anestesiólogo caso Minerva .HEIC',
    // Plano abierto: se conserva ancho para que se vean el anestesiólogo, el
    // monitor y el oxígeno. Recortar más dejaría solo a la paciente, que es
    // justo lo que no aporta.
    caja: { x0: 0.04, y0: 0.06, x1: 0.98, y1: 0.86 },
  },
  {
    salida: 'minerva-3-provisional.webp',
    archivo: 'Provisional mismo día de la cirugía de implantes Minerva .HEIC',
    caja: { x0: 0.02, y0: 0.16, x1: 0.98, y1: 0.66 },
  },
  {
    salida: 'minerva-4-definitiva.webp',
    archivo: 'despues protesis fija sobre implantes 1.HEIC',
    caja: { x0: 0.03, y0: 0.06, x1: 0.97, y1: 0.80 },
  },
];

for (const paso of PASOS) {
  const jpg = join(TMP, paso.salida.replace('.webp', '.jpg'));
  execFileSync('sips', ['-s', 'format', 'jpeg', join(ORIGEN, paso.archivo), '--out', jpg], { stdio: 'ignore' });
  const buf = await sharp(jpg).rotate().toBuffer();
  const m = await sharp(buf).metadata();
  const w = Math.round(m.width * (paso.caja.x1 - paso.caja.x0));
  const h = Math.round(m.height * (paso.caja.y1 - paso.caja.y0));
  await sharp(buf)
    .extract({ left: Math.round(m.width * paso.caja.x0), top: Math.round(m.height * paso.caja.y0), width: w, height: h })
    .resize({ width: 1200 })
    .sharpen({ sigma: 0.5 })
    .webp({ quality: 86 })
    .toFile(join('public/images', paso.salida));
  console.log(`${paso.salida.padEnd(28)} ${m.width}x${m.height} -> ${w}x${h} -> 1200px`);
}
