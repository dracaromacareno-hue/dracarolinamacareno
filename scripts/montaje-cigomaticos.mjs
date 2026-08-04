/**
 * Rehace el montaje de implantes cigomáticos.
 *
 * QUÉ ESTABA MAL
 * El montaje anterior decía "BEFORE & AFTER" pero solo tenía dos piezas: la
 * radiografía posoperatoria y la sonrisa final. No había ningún "antes". El
 * rótulo prometía una comparación que la imagen no entregaba, y eso en una
 * página de resultados clínicos es lo peor que puede pasar: el visitante que sí
 * mira con atención se da cuenta.
 *
 * QUÉ TIENE AHORA
 * Las tres piezas del mismo caso, que es el del paciente de Washington D.C.:
 * la radiografía con los cuatro cigomáticos arriba y los cuatro convencionales
 * abajo, y las dos fotos de sonrisa, antes y después.
 *
 * La radiografía va arriba y ocupa todo el ancho porque es la que convence a
 * quien ya le dijeron que no tiene hueso suficiente: es la prueba de que los
 * implantes se anclaron en el pómulo. Las sonrisas van abajo, emparejadas, que
 * es lo que el paciente entiende sin que nadie se lo explique.
 */
import sharp from 'sharp';

const LADO = 1080;
const HUECO = 14;
const MARCO = '#FFFFFF';

// La radiografía se recorta del montaje viejo: es la misma placa del caso y no
// hay un archivo suelto de mayor calidad.
const rx = await sharp('public/images/implantes-cigomaticos.png')
  .extract({ left: 0, top: 0, width: 1080, height: 486 })
  .resize({ width: LADO })
  .toBuffer();
const mRx = await sharp(rx).metadata();

const MITAD = Math.floor((LADO - HUECO) / 2);
const ALTO_FOTO = Math.round(MITAD * 3 / 4);

const panel = async (archivo, texto) => {
  const foto = await sharp(archivo)
    .resize({ width: MITAD, height: ALTO_FOTO, fit: 'cover', position: 'centre' })
    .toBuffer();
  // El rótulo va incrustado en la imagen y no como texto de la página porque
  // esta pieza también se comparte suelta en redes, donde el HTML no viaja.
  const etiqueta = Buffer.from(
    `<svg width="${MITAD}" height="${ALTO_FOTO}" xmlns="http://www.w3.org/2000/svg">
       <rect x="14" y="14" rx="4" width="${texto.length * 11 + 22}" height="30" fill="#FFFFFF" opacity="0.88"/>
       <text x="${14 + 11} " y="34" font-family="Helvetica, Arial, sans-serif" font-size="15"
             font-weight="bold" letter-spacing="2" fill="#211E18">${texto}</text>
     </svg>`
  );
  return sharp(foto).composite([{ input: etiqueta, left: 0, top: 0 }]).toBuffer();
};

const antes = await panel('public/images/caso-cigomas-bimaxilar-antes.webp', 'ANTES');
const despues = await panel('public/images/caso-cigomas-bimaxilar-despues.webp', 'DESPUÉS');

const bloque = mRx.height + HUECO + ALTO_FOTO;
const margen = Math.round((LADO - bloque) / 2);

await sharp({ create: { width: LADO, height: LADO, channels: 3, background: MARCO } })
  .composite([
    { input: rx, left: 0, top: margen },
    { input: antes, left: 0, top: margen + mRx.height + HUECO },
    { input: despues, left: MITAD + HUECO, top: margen + mRx.height + HUECO },
  ])
  .webp({ quality: 88 })
  // Nombre nuevo a propósito: Next cachea las imágenes optimizadas por ruta, y
  // reescribir el archivo anterior dejaría la versión vieja servida durante días.
  .toFile('public/images/caso-cigomaticos-completo.webp');

console.log(`caso-cigomaticos-completo.webp ${LADO}x${LADO} (rx + antes + después)`);
