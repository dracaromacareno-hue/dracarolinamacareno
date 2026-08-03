/**
 * Monta la portada plana sobre un render 3D del libro, con lomo, canto de
 * páginas y sombra. Reemplaza a la imagen anterior, que era un render viejo
 * con la portada antigua.
 *
 * Se hace con SVG porque librsvg (el motor que usa sharp) sí aplica
 * transformaciones de matriz, así que se puede inclinar la tapa para sugerir
 * volumen sin depender de un mockup externo.
 */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const PORTADA = '/tmp/portada-sin-foto.webp';
const SALIDA = 'public/images/libro-el-poder-de-tu-sonrisa-2ed.webp';

const src = sharp(readFileSync(PORTADA));
const meta = await src.metadata();

// Tapa a un ancho de trabajo cómodo, conservando proporción.
const W = 900;
const H = Math.round((meta.height / meta.width) * W);
const tapa = await src.resize({ width: W }).png().toBuffer();
const tapa64 = `data:image/png;base64,${tapa.toString('base64')}`;

const LOMO = Math.round(W * 0.085);   // grosor del libro
const INCL = Math.round(H * 0.035);   // cuánto "cae" el borde derecho
const MARGEN = 80;
const CW = LOMO + W + MARGEN * 2;
const CH = H + INCL + MARGEN * 2;

const x0 = MARGEN + LOMO;             // borde izquierdo de la tapa
const y0 = MARGEN;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="${CW}" height="${CH}" viewBox="0 0 ${CW} ${CH}">
  <defs>
    <linearGradient id="lomo" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#6B5620"/>
      <stop offset="55%"  stop-color="#8A6B2E"/>
      <stop offset="100%" stop-color="#5A4718"/>
    </linearGradient>
    <linearGradient id="brillo" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#000" stop-opacity="0.30"/>
      <stop offset="9%"   stop-color="#000" stop-opacity="0.05"/>
      <stop offset="88%"  stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.10"/>
    </linearGradient>
    <filter id="sombra" x="-30%" y="-30%" width="170%" height="170%">
      <feDropShadow dx="16" dy="26" stdDeviation="26" flood-color="#1F2937" flood-opacity="0.34"/>
    </filter>
  </defs>

  <!-- Lomo: paralelogramo que acompaña la inclinación de la tapa. -->
  <path d="M ${MARGEN} ${y0 + INCL}
           L ${x0} ${y0}
           L ${x0} ${y0 + H}
           L ${MARGEN} ${y0 + H + INCL} Z"
        fill="url(#lomo)" filter="url(#sombra)"/>

  <!-- Tapa. La matriz inclina el borde derecho hacia abajo (efecto de volumen). -->
  <g transform="translate(${x0} ${y0}) matrix(1 ${INCL / W} 0 1 0 0)">
    <image xlink:href="${tapa64}" width="${W}" height="${H}" preserveAspectRatio="none"/>
    <rect width="${W}" height="${H}" fill="url(#brillo)"/>
    <rect width="${W}" height="${H}" fill="none" stroke="#00000022" stroke-width="1.5"/>
  </g>
</svg>`;

await sharp(Buffer.from(svg), { density: 144 })
  .resize({ width: 1200 })
  .webp({ quality: 90 })
  .toFile(SALIDA);

const out = await sharp(SALIDA).metadata();
console.log(`${SALIDA} · ${out.width}x${out.height}`);
