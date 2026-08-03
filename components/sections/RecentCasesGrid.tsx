'use client';

import Image from 'next/image';
import Link from 'next/link';
import { track } from '@/lib/analytics';

/**
 * RecentCasesGrid, replica el flow visual de los highlights de IG en la home.
 *
 * Razón (GA4 audit May 2026):
 * - 17 sesiones/30d de Organic Social (IG/FB), 0 conversiones, 0s tiempo medio
 * - Causa: mismatch entre lo que prometen los reels/posts (antes/después visuales)
 *   y lo que la web ofrece arriba del fold (texto + filosofía)
 * - Carolina tiene 7 highlights en IG: APRENDE · IMPLANTES · INSPIRACION ·
 *   TESTIMONIOS · ESPECIALISTAS · MI VIDA · DISEÑOS
 *
 * Solución: replicar EXACTAMENTE ese flow en home, grid de 6 categorías
 * cuadradas, estilo highlights, click → página interna correspondiente.
 * Cuando un usuario llega desde IG, encuentra el mismo lenguaje visual y
 * profundiza en vez de rebotar.
 *
 * Tracking: cada click dispara cta_click(home_case_<id>) para que GA4
 * muestre cuál de las 6 categorías mejor convierte tráfico social.
 */

type CaseTile = {
  id: string;
  image: string;
  alt: { es: string; en: string };
  label: { es: string; en: string };
  description: { es: string; en: string };
  href: string;
};

const TILES: CaseTile[] = [
  {
    id: 'casos',
    image: '/images/final-diseno-ceramica-2.webp',
    alt: {
      es: 'Caso clínico de diseño de sonrisa cerámico, Dra. Carolina Macareno Medellín',
      en: 'Clinical case of ceramic smile design, Dr. Carolina Macareno Medellín',
    },
    label: { es: 'Inspiración', en: 'Inspiration' },
    description: {
      es: 'Antes y después reales de cada transformación',
      en: 'Real before-and-after of every transformation',
    },
    href: '/casos-clinicos',
  },
  {
    id: 'implantes',
    image: '/images/implantes-cigomaticos.png',
    alt: {
      es: 'Implantes dentales en Medellín, implantes cigomáticos y subperiósticos',
      en: 'Dental implants in Medellín, zygomatic and subperiosteal implants',
    },
    label: { es: 'Implantes', en: 'Implants' },
    description: {
      es: 'Straumann, Neodent, DioImplant. Cigomáticos y subperiósticos',
      en: 'Straumann, Neodent, DioImplant. Zygomatic and subperiosteal',
    },
    href: '/servicios/implantes-dentales',
  },
  {
    id: 'diseno',
    image: '/images/final-diseno-ceramica-4.webp',
    alt: {
      es: 'Diseño de sonrisa cerámico con carillas en Medellín',
      en: 'Ceramic smile design with veneers in Medellín',
    },
    label: { es: 'Diseños', en: 'Designs' },
    description: {
      es: 'Diseño digital · Carillas cerámicas · Resultado natural',
      en: 'Digital design · Ceramic veneers · Natural result',
    },
    href: '/servicios/diseno-de-sonrisa',
  },
  {
    id: 'all-on-4',
    image: '/images/rx-all-on-4-caso.webp',
    alt: {
      es: 'Radiografía panorámica de un caso All-on-4 en Medellín, cuatro implantes con prótesis fija',
      en: 'Panoramic X-ray of an All-on-4 case in Medellín, four implants with fixed prosthesis',
    },
    label: { es: 'All-on-4', en: 'All-on-4' },
    description: {
      es: 'Dientes fijos en un día. USD 12K–16K, ahorra 60-70% vs USA',
      en: 'Fixed teeth in one day. USD 12K–16K, save 60-70% vs USA',
    },
    href: '/all-on-4-medellin',
  },
  {
    id: 'turismo',
    image: '/images/dra-carolina-portrait.webp',
    alt: {
      es: 'Atención bilingüe para pacientes internacionales en Medellín',
      en: 'Bilingual care for international patients in Medellín',
    },
    label: { es: 'Turismo Dental', en: 'Dental Tourism' },
    description: {
      es: 'Pacientes de USA, Panamá, Puerto Rico, España y Chile',
      en: 'Patients from USA, Panama, Puerto Rico, Spain and Chile',
    },
    href: '/dental-tourism-colombia',
  },
  {
    id: 'libro',
    image: '/images/libro-el-poder-de-tu-sonrisa.webp',
    alt: {
      es: 'El poder de tu sonrisa, libro de la Dra. Carolina Macareno',
      en: 'The power of your smile, book by Dr. Carolina Macareno',
    },
    label: { es: 'El Libro', en: 'The Book' },
    description: {
      es: 'Mi libro sobre el impacto psicológico de una sonrisa sana',
      en: 'My book on the psychological impact of a healthy smile',
    },
    href: '/libros',
  },
];

interface Props {
  locale: string;
}

export default function RecentCasesGrid({ locale }: Props) {
  const isEs = locale === 'es';
  const localePath = (path: string) => (isEs ? path : `/en${path}`);

  return (
    <section
      id="casos-recientes"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#FCFBF9' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#8A6B2E' }}
          >
            {isEs ? 'Explora los temas' : 'Browse by topic'}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {isEs ? 'Conoce mi trabajo' : 'See my work'}
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: '#77726A' }}
          >
            {isEs
              ? 'Lo mismo que ves en mi Instagram, ordenado por tema. Toca cualquier categoría para profundizar.'
              : 'Same content you see on my Instagram, organized by topic. Tap any category to dive deeper.'}
          </p>
        </div>

        {/*
          Carrusel horizontal en movimiento continuo (agosto 2026).

          Antes era una grilla fija de 6 fotos con un degradado oscuro encima
          para que el rótulo blanco se leyera. Al pasar la página a fondo claro
          ese degradado dejaba las fotos apagadas, justo lo contrario de lo que
          se quiere: son resultados clínicos y tienen que verse nítidos.

          Ahora la foto va limpia, sin nada encima, y el rótulo baja debajo,
          sobre el fondo claro. Se lee mejor y la imagen se ve tal cual.

          Las tarjetas se recorren solas en horizontal. La lista se pinta DOS
          veces y la animación desplaza exactamente el 50%: al terminar, la
          segunda copia está en la posición donde arrancó la primera, así que el
          salto es invisible y el bucle no tiene costura.

          Se detiene al pasar el cursor (para poder leer y hacer clic) y se
          desactiva por completo si el sistema pide menos animación, donde
          queda como un carrusel normal que se arrastra con el dedo.
        */}
        <div className="casos-marquee">
          <div className="casos-track">
            {[...TILES, ...TILES].map((tile, i) => (
              <Link
                key={`${tile.id}-${i}`}
                href={localePath(tile.href)}
                onClick={() => track.cta(`home_case_${tile.id}`)}
                className="group block shrink-0 w-[190px] sm:w-[230px] lg:w-[260px]"
                aria-label={isEs ? tile.label.es : tile.label.en}
                aria-hidden={i >= TILES.length}
                tabIndex={i >= TILES.length ? -1 : undefined}
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#E8E3DA] group-hover:border-[#C9A461] transition-colors duration-300">
                  <Image
                    src={tile.image}
                    alt={i >= TILES.length ? '' : isEs ? tile.alt.es : tile.alt.en}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 190px, (max-width: 1024px) 230px, 260px"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#C9A461] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-[#070B14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <p
                  className="mt-3 text-[#211E18] font-bold text-sm sm:text-base tracking-wide group-hover:text-[#8A6B2E] transition-colors"
                  style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                >
                  {isEs ? tile.label.es : tile.label.en}
                </p>
                <p className="text-[#77726A] text-xs mt-1 leading-snug">
                  {isEs ? tile.description.es : tile.description.en}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Soft CTA below grid */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href={localePath('/casos-clinicos')}
            onClick={() => track.cta('home_case_view_all')}
            className="inline-flex items-center gap-2 text-[#8A6B2E] hover:text-[#8A6B2E] text-sm font-medium tracking-wider uppercase border-b border-[#C9A461]/40 hover:border-[#C9A461] pb-1 transition-colors"
          >
            {isEs ? 'Ver todos los casos clínicos' : 'See all clinical cases'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
