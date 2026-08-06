import type { MetadataRoute } from 'next';

/**
 * Manifest de la aplicación web.
 *
 * PARA QUÉ SIRVE AQUÍ
 * No es para convertir el sitio en una app. Sirve para que, cuando un paciente
 * guarde la página en la pantalla de inicio de su celular (cosa que sí pasa con
 * quien viene del exterior y va a volver varias veces antes de decidir), le
 * quede el monograma de la marca y no un recorte de la página.
 *
 * `theme_color` es el azul pizarra del logo: en Android tiñe la barra del
 * navegador, así que la pestaña deja de verse como una página cualquiera.
 *
 * Los íconos de `app/icon.png` y `app/apple-icon.png` los declara Next solo, sin
 * que haya que nombrarlos. Los de 192 y 512 sí van aquí porque son los tamaños
 * que pide el estándar del manifest para el ícono de la pantalla de inicio.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dra. Carolina Macareno · Implantes y Rehabilitación Oral',
    short_name: 'Dra. Carolina',
    description:
      'Rehabilitación oral estética e implantología en El Poblado, Medellín. 17 años de experiencia clínica.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FCFBF9',
    theme_color: '#354754',
    lang: 'es-CO',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
