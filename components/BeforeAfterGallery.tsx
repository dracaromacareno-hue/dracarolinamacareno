'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { CasoAntesDespues } from '@/lib/casos-galeria';

/**
 * BeforeAfterGallery, vitrina de casos clínicos reales antes/después.
 *
 * Motivo (feedback paciente jul-2026): los pacientes que llegan a la web no veían
 * casos terminados de diseño de sonrisa aunque las fotos ya existían en el servidor.
 *
 * Presentación lado a lado (Antes / Después), estándar clínico honesto: los "antes"
 * son intraorales con separador y los "después" son la sonrisa, distinto encuadre,
 * por eso NO se usa un slider de revelado (deformaría la comparación).
 *
 * Estilo alineado a la marca: fondo oscuro #070B14 / #0D1321, dorado #C9A461,
 * serif Playfair para títulos. Sin em dash (regla de marca).
 */

interface Props {
  locale: string;
  cases: CasoAntesDespues[];
  eyebrow?: { es: string; en: string };
  title?: { es: string; en: string };
  subtitle?: { es: string; en: string };
  /** Color de fondo de la sección (default #070B14) */
  bg?: string;
  /** Mostrar la nota "resultados individuales pueden variar" (default true) */
  showDisclaimer?: boolean;
}

export default function BeforeAfterGallery({
  locale,
  cases,
  eyebrow,
  title,
  subtitle,
  bg = '#070B14',
  showDisclaimer = true,
}: Props) {
  const isEs = locale === 'es';
  if (!cases.length) return null;

  const t = {
    eyebrow: eyebrow ? (isEs ? eyebrow.es : eyebrow.en) : isEs ? 'Resultados reales' : 'Real results',
    title: title ? (isEs ? title.es : title.en) : isEs ? 'Casos antes y después' : 'Before and after cases',
    subtitle: subtitle
      ? isEs
        ? subtitle.es
        : subtitle.en
      : isEs
        ? 'Casos reales de pacientes documentados en el consultorio. Desliza para ver cada transformación.'
        : 'Real, documented patient cases from the clinic. Scroll to see each transformation.',
    antes: isEs ? 'Antes' : 'Before',
    despues: isEs ? 'Después' : 'After',
    disclaimer: isEs
      ? 'Fotografías clínicas reales publicadas con consentimiento del paciente. Cada caso es único y los resultados individuales pueden variar según el diagnóstico y la respuesta biológica de cada persona.'
      : 'Real clinical photos published with patient consent. Each case is unique and individual results may vary depending on diagnosis and each person\'s biological response.',
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: bg }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C9A461' }}>
            {t.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mb-6" />
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#77726A' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cases.map((caso, i) => (
            <motion.article
              key={caso.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="rounded-2xl overflow-hidden border border-[#E8E3DA] bg-white"
            >
              {/* Par de fotos */}
              <div className="relative grid grid-cols-2">
                {/* Antes */}
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={caso.before}
                    alt={`${t.antes}: ${isEs ? caso.alt.es : caso.alt.en}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] sm:text-xs font-bold px-2 py-1 rounded tracking-widest uppercase bg-[#FCFBF9]/80 text-[#9CA3AF] backdrop-blur-sm">
                    {t.antes}
                  </span>
                </div>

                {/* Después */}
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={caso.after}
                    alt={`${t.despues}: ${isEs ? caso.alt.es : caso.alt.en}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute top-2.5 right-2.5 text-[10px] sm:text-xs font-bold px-2 py-1 rounded tracking-widest uppercase bg-[#C9A461] text-[#070B14]">
                    {t.despues}
                  </span>
                </div>

                {/* Flecha central Antes -> Después */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FCFBF9] border-2 border-[#C9A461] flex items-center justify-center shadow-lg pointer-events-none">
                  <svg className="w-4 h-4 text-[#8A6B2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Texto del caso */}
              <div className="p-5 sm:p-6">
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C9A461' }}>
                  {isEs ? caso.tag.es : caso.tag.en}
                </span>
                <p className="text-sm sm:text-base leading-relaxed mt-2" style={{ color: '#5A5449' }}>
                  {isEs ? caso.caption.es : caso.caption.en}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Disclaimer honesto */}
        {showDisclaimer && (
          <p className="text-xs text-center mt-8 sm:mt-10 max-w-3xl mx-auto leading-relaxed" style={{ color: '#77726A' }}>
            {t.disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
