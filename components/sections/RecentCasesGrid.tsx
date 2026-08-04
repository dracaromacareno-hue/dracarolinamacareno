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
  /**
   * Fotos clínicas del mismo caso. La tarjeta las muestra partida por la mitad.
   * Cuando `despues` no existe, la pieza es una sola imagen (una radiografía o
   * un montaje que ya trae el antes y el después dentro) y ocupa la tarjeta
   * entera.
   */
  antes: string;
  despues?: string;
  alt: { es: string; en: string };
  label: { es: string; en: string };
  description: { es: string; en: string };
  href: string;
};

/**
 * Galería de antes y después de la home (agosto 2026).
 *
 * Antes esta franja mezclaba dos cosas distintas: casos clínicos ("Inspiración",
 * "Diseños") y enlaces a páginas de servicio ("Implantes", "All-on-4", "Turismo
 * Dental"), más el libro. Ninguna de las dos se leía bien, y dos de las fotos
 * estaban borrosas.
 *
 * Ahora es solo casos, con fotos propias procesadas a 1400 px. Los enlaces a
 * servicios no se pierden: siguen en el menú, en la sección de servicios de esta
 * misma home y en el pie, así que ninguna página queda huérfana. El libro tiene
 * su propia sección justo debajo.
 *
 * La cara del paciente NUNCA se muestra. Ver CLAUDE.md.
 */
const TILES: CaseTile[] = [
  {
    id: 'protesis-fija-zirconio',
    antes: '/images/caso-protesis-fija-zirconio-antes.webp',
    despues: '/images/caso-protesis-fija-zirconio-despues.webp',
    alt: {
      es: 'Antes y después de una prótesis fija en coronas de zirconio en Medellín, caso rehecho tras un tratamiento previo',
      en: 'Before and after of a fixed zirconia crown prosthesis in Medellín, a case redone after previous treatment',
    },
    label: { es: 'Prótesis fija en zirconio', en: 'Fixed zirconia prosthesis' },
    /*
      Va de primero en el carrusel: es el único caso que responde a la objeción
      que frena a cualquiera que evalúa tratarse fuera de su país, "¿y si me lo
      hacen mal?". Aquí quien lo vivió viajó a Medellín a que se lo rehicieran.

      La descripción cuenta lo que pasó sin calificar el trabajo de otra clínica
      ni nombrarla: no aporta nada al lector y sí expone a la Dra.
    */
    description: {
      es: 'Rehecho tras un tratamiento previo · Panamá · 2 visitas de 5 días',
      en: 'Redone after previous treatment · Panama · 2 visits of 5 days',
    },
    href: '/coronas-zirconio-carillas',
  },
  {
    id: 'cigomas-bimaxilar',
    antes: '/images/caso-cigomas-bimaxilar-antes.webp',
    despues: '/images/caso-cigomas-bimaxilar-despues.webp',
    alt: {
      es: 'Antes y después de una rehabilitación con cuatro implantes cigomáticos y prótesis fija bimaxilar en zirconio en Medellín',
      en: 'Before and after of a rehabilitation with four zygomatic implants and a fixed full-mouth zirconia prosthesis in Medellín',
    },
    label: { es: 'Cigomáticos + prótesis bimaxilar', en: 'Zygomatic + full-mouth prosthesis' },
    /*
      Primer caso de implantes cigomáticos con foto de sonrisa y no solo
      radiografía. La tarjeta de abajo, `cigomaticos`, es el montaje antiguo y
      sigue siendo útil porque muestra la radiografía, que es lo que convence a
      quien ya le dijeron que no tiene hueso suficiente.
    */
    description: {
      es: '4 cigomáticos + 4 convencionales · Washington D.C. · 2 visitas',
      en: '4 zygomatic + 4 conventional · Washington D.C. · 2 visits',
    },
    href: '/servicios/implantes-cigomaticos',
  },
  {
    id: 'all-on-6-4',
    antes: '/images/caso-all-on-6-4-antes.webp',
    despues: '/images/caso-all-on-6-4-despues.webp',
    alt: {
      es: 'Antes y después de una rehabilitación completa con All-on-6 superior y All-on-4 inferior en Medellín',
      en: 'Before and after of a full-arch rehabilitation with All-on-6 upper and All-on-4 lower in Medellín',
    },
    label: { es: 'All-on-6 + All-on-4', en: 'All-on-6 + All-on-4' },
    description: {
      es: '10 implantes en una sola cirugía · Paciente de Panamá',
      en: '10 implants in a single surgery · Patient from Panama',
    },
    href: '/all-on-4-medellin',
  },
  {
    id: 'recambio-carillas',
    antes: '/images/caso-recambio-carillas-antes.webp',
    despues: '/images/caso-recambio-carillas-despues.webp',
    alt: {
      es: 'Antes y después del recambio de carillas de más de veinte años por cerámica nueva',
      en: 'Before and after replacing twenty-year-old veneers with new ceramic',
    },
    label: { es: 'Recambio de carillas', en: 'Veneer replacement' },
    /*
      Es la paciente de Orlando: la misma que dejó la reseña en inglés que
      aparece en la sección de testimonios ("We came from Orlando, Florida and
      now I will come annually"). Junto con Minerva, son los dos casos que
      pueden mostrarse con testimonio verificable en Google, y las dos viajaron
      desde el exterior. Nombrar la ciudad no identifica a nadie y sí demuestra
      que el turismo dental es real.
    */
    description: {
      es: 'Carillas de más de 20 años · Paciente de Orlando, Florida',
      en: 'Veneers over 20 years old · Patient from Orlando, Florida',
    },
    href: '/coronas-zirconio-carillas',
  },
  {
    id: 'ceramico-arco-superior',
    antes: '/images/caso-ceramico-arco-superior-antes.webp',
    despues: '/images/caso-ceramico-arco-superior-despues.webp',
    alt: {
      es: 'Antes y después de un diseño cerámico de arco superior en Medellín',
      en: 'Before and after of an upper-arch ceramic smile design in Medellín',
    },
    label: { es: 'Diseño cerámico', en: 'Ceramic smile design' },
    description: {
      es: 'Arco superior en cerámica · 4-5 días',
      en: 'Upper arch in ceramic · 4-5 days',
    },
    href: '/servicios/diseno-de-sonrisa',
  },
  {
    id: 'alineadores-resina',
    antes: '/images/caso-alineadores-resina-antes.webp',
    despues: '/images/caso-alineadores-resina-despues.webp',
    alt: {
      es: 'Antes y después de un tratamiento con alineadores y microdiseño en resina directa, sin tallar los dientes',
      en: 'Before and after of aligners plus direct-resin microdesign, with no tooth reduction',
    },
    label: { es: 'Alineadores + resina', en: 'Aligners + resin' },
    description: {
      es: 'Alinear primero, esculpir después · 4-5 meses, sin tallado',
      en: 'Align first, sculpt after · 4-5 months, no tooth reduction',
    },
    href: '/servicios/estetica-dental',
  },
  {
    id: 'carillas-ceramicas-3',
    antes: '/images/caso-carillas-ceramicas-3-antes.webp',
    despues: '/images/caso-carillas-ceramicas-3-despues.webp',
    alt: {
      es: 'Antes y después de un tratamiento con carillas cerámicas en Medellín',
      en: 'Before and after of ceramic veneers in Medellín',
    },
    label: { es: 'Carillas cerámicas', en: 'Ceramic veneers' },
    /*
      Descripción deliberadamente corta: de este caso todavía no hay duración ni
      motivo de consulta confirmados por la Dra. Se pone solo lo que consta, y
      se completa cuando ella los pase. No se deduce nada de la foto.
    */
    description: {
      es: 'Carillas en cerámica · Forma y color rediseñados',
      en: 'Ceramic veneers · Reshaped form and colour',
    },
    href: '/coronas-zirconio-carillas',
  },
  {
    id: 'cigomaticos',
    // Pieza única: el montaje ya trae el antes y el después dentro.
    antes: '/images/implantes-cigomaticos.png',
    alt: {
      es: 'Caso de implantes cigomáticos y prótesis fija en Medellín, antes y después',
      en: 'Zygomatic implants and fixed prosthesis case in Medellín, before and after',
    },
    label: { es: 'Implantes cigomáticos', en: 'Zygomatic implants' },
    description: {
      es: 'Cuando no hay hueso · Sin años de injertos previos',
      en: 'When there is no bone · Without years of prior grafts',
    },
    href: '/servicios/implantes-cigomaticos',
  },
  {
    id: 'rx-all-on-4',
    // Radiografía panorámica: no tiene par, es una sola pieza.
    antes: '/images/rx-all-on-4-caso.webp',
    alt: {
      es: 'Radiografía panorámica de un caso All-on-4 en Medellín, cuatro implantes con prótesis fija',
      en: 'Panoramic X-ray of an All-on-4 case in Medellín, four implants with fixed prosthesis',
    },
    label: { es: 'All-on-4 en radiografía', en: 'All-on-4 on X-ray' },
    description: {
      es: 'Cuatro implantes sosteniendo la arcada completa',
      en: 'Four implants supporting the full arch',
    },
    href: '/all-on-4-medellin',
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
        {/*
          Encabezado (agosto 2026).

          Antes decía "Conoce mi trabajo", que habla de la Dra. y no del
          paciente. En este punto de la página el visitante no evalúa su trabajo
          en abstracto: busca verse a sí mismo en una de esas fotos.

          "Sonríe otra vez" es la línea que ya está en su logo, así que conecta
          la marca con la prueba que la sostiene. Y el "otra vez" describe el
          estado real de quien busca implantes o carillas: alguien que antes
          sonreía y dejó de hacerlo.

          El "antes y después" sube al rótulo pequeño, que es donde debe estar:
          esa es la frase que la gente escribe en Google, no "conoce mi trabajo".

          Se descartó "resultados exitosos": en publicidad de salud, calificar un
          resultado como exitoso es terreno delicado, y las fotos ya lo
          demuestran sin necesidad de adjetivarlo.
        */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#8A6B2E' }}
          >
            {isEs ? 'Casos clínicos' : 'Clinical cases'}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {isEs ? 'Sonríe otra vez' : 'Smile again'}
          </h2>
          {/*
            Subtítulo. El H2 es la promesa de marca y por sí solo no dice qué
            se está mirando, así que esta línea lo aterriza: nombra que son
            casos clínicos reales y que se muestran antes y después.

            Dice "reales", no "exitosas". En publicidad de salud, calificar un
            resultado como exitoso es terreno delicado y no aporta nada: las
            fotos ya lo demuestran. "Reales" sí aporta, porque es justo lo que
            el visitante duda cuando ve un antes y después en internet.
          */}
          <p
            className="text-lg sm:text-xl mb-4"
            style={{ color: '#8A6B2E', fontFamily: 'var(--font-playfair-display, serif)', fontStyle: 'italic' }}
          >
            {isEs
              ? 'Transformaciones de sonrisa reales, antes y después'
              : 'Real smile transformations, before and after'}
          </p>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: '#77726A' }}
          >
            {isEs
              ? 'Fotografías de mis propios pacientes, sin retoque y sin bancos de imágenes. Toca cualquier caso para ver el tratamiento.'
              : 'Photographs of my own patients, unretouched and with no stock images. Tap any case to see the treatment.'}
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
                {/*
                  El antes arriba y el después abajo, partiendo el cuadrado en
                  dos mitades apaisadas. Se parte en horizontal y no en vertical
                  a propósito: las fotos clínicas son apaisadas, y dos mitades
                  verticales obligarían a recortar la sonrisa por los lados,
                  que es justo lo que hay que ver.
                */}
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#E8E3DA] group-hover:border-[#C9A461] transition-colors duration-300">
                  <div className={tile.despues ? 'grid grid-rows-2 h-full' : 'h-full'}>
                    {(tile.despues
                      ? ([['antes', tile.antes], ['despues', tile.despues]] as const)
                      : ([['unica', tile.antes]] as const)
                    ).map(([lado, src]) => (
                      /*
                        `h-full` es obligatorio en el caso de pieza única: sin
                        rejilla que le dé altura, el contenedor colapsa a cero y
                        la imagen (que va con `fill`) desaparece. En el par lo
                        da grid-rows-2, pero aquí hay que ponerlo a mano.
                      */
                      <div key={lado} className="relative overflow-hidden h-full">
                        <Image
                          src={src}
                          alt={i >= TILES.length ? '' : `${isEs ? tile.alt.es : tile.alt.en} (${lado === 'antes' ? (isEs ? 'antes' : 'before') : (isEs ? 'después' : 'after')})`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 190px, (max-width: 1024px) 230px, 260px"
                        />
                        {lado !== 'unica' && (
                          <span className="absolute bottom-1.5 left-1.5 text-[9px] font-semibold tracking-[0.14em] uppercase text-white bg-[#1F2937]/75 rounded px-1.5 py-0.5">
                            {lado === 'antes' ? (isEs ? 'Antes' : 'Before') : (isEs ? 'Después' : 'After')}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#C9A461] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-[#1F2937]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
