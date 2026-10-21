import { createHash } from 'node:crypto';

/**
 * Saca las fotos en base64 del HTML de las landings de GHL y las sirve como archivos.
 *
 * POR QUÉ EXISTE (21-oct-2026)
 * ----------------------------
 * `/implantes` pesaba 1.821.264 bytes y tardaba 5 a 8 s en bajar en celular. El embudo
 * de GHL guarda sus 9 fotos como `data:image/jpeg;base64,...` DOS veces: una en el HTML
 * y otra dentro del bloque `__NUXT_DATA__` con el que Nuxt rehidrata la página (ahí las
 * barras van escapadas como `\u002F` y las comillas como `\"`). Fotos: 1,53 MB de 1,8.
 *
 * Las fotos ya extraídas viven en `public/images/landing-implantes/` como WebP de 360 y
 * 640 px, con el nombre derivado del contenido (sha1 del base64, 12 caracteres). Aquí se
 * reemplaza cada foto CONOCIDA por su archivo, en los dos sitios y con el mismo texto,
 * para que lo que pinta el servidor y lo que rehidrata Nuxt coincidan.
 *
 * Si la Dra. cambia una foto en GHL, su sha1 no está en la lista: esa foto se deja en
 * base64 (la página sigue funcionando, solo pesa más) y `salud_web.py` avisa los lunes
 * si la página vuelve a pasar de 1 MB. Para regenerar: extraer la foto nueva a WebP con
 * el mismo nombre `<sha1[:12]>-<ancho>.webp` y añadirla a FOTOS.
 *
 * No toca texto, precios, enlaces ni el script de rastreo.
 */

type Foto = { widths: number[]; sizes: string };

const DIR = '/images/landing-implantes';

/** Casos clínicos: dos columnas, cada foto ocupa media pantalla hasta un ancho de 750 px. */
const CASO = '(max-width: 760px) 50vw, 375px';

const FOTOS: Record<string, Foto> = {
  // Retrato de la Dra., círculo de 130 px.
  '1441eeb4f2b4': { widths: [260], sizes: '130px' },
  '6090d55ee290': { widths: [360, 640], sizes: CASO },
  '54727a92ba90': { widths: [360, 640], sizes: CASO },
  '6da851f31377': { widths: [360, 640], sizes: CASO },
  '2e140306a2ab': { widths: [360, 640], sizes: CASO },
  '11b291492193': { widths: [360, 640], sizes: CASO },
  b4acd97b4364: { widths: [360, 640], sizes: CASO },
  a4f0e76d7be6: { widths: [360, 640], sizes: CASO },
  '1f47df9f0225': { widths: [360, 640], sizes: CASO },
};

function attrs(key: string, foto: Foto): string {
  const url = (w: number) => `${DIR}/${key}-${w}.webp`;
  const largest = foto.widths[foto.widths.length - 1];
  const srcset = foto.widths.map((w) => `${url(w)} ${w}w`).join(', ');
  return `src="${url(largest)}" srcset="${srcset}" sizes="${foto.sizes}" loading="lazy" decoding="async"`;
}

export function externalizeInlineImages(html: string): { html: string; replaced: number; unknown: number } {
  let replaced = 0;
  let unknown = 0;
  const payloads = new Set<string>();
  for (const m of html.matchAll(/src="data:image\/[a-z+]+;base64,([A-Za-z0-9+/=]+)"/g)) {
    payloads.add(m[0]);
  }

  for (const original of payloads) {
    const b64 = original.slice(original.indexOf(',') + 1, -1);
    const key = createHash('sha1').update(b64).digest('hex').slice(0, 12);
    const foto = FOTOS[key];
    if (!foto) {
      unknown++;
      continue;
    }
    const nuevo = attrs(key, foto);

    // 1. En el HTML que pinta el servidor.
    html = html.split(original).join(nuevo);

    // 2. En __NUXT_DATA__: mismo texto, con las barras y comillas como las escribe Nuxt.
    const escNuxt = (s: string) => s.replace(/\//g, '\\u002F').replace(/"/g, '\\"');
    const originalNuxt = escNuxt(original);
    html = html.split(originalNuxt).join(nuevo.replace(/"/g, '\\"'));

    replaced++;
  }

  return { html, replaced, unknown };
}
