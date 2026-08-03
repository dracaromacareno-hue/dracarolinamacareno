'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';

interface TestimonialsMessages {
  titulo: string;
  subtitulo: string;
}

type Locale = 'es' | 'en';

const StarIcon = () => (
  <svg className="w-4 h-4 text-[#8A6B2E]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

/**
 * Reseñas REALES de Google, transcritas del perfil de la Dra. el 3-ago-2026.
 *
 * Antes estas seis tarjetas eran de Doctoralia mientras la insignia de arriba
 * decía "26 opiniones verificadas en Google". Un visitante que hiciera clic no
 * encontraba esas frases en Google, y una prueba social que no se puede
 * verificar resta más de lo que suma. Ahora la insignia, el enlace y las
 * citas apuntan todas a la misma fuente.
 *
 * REGLAS PARA EDITAR ESTO:
 * 1. El texto va TEXTUAL, tal como está en Google, incluidas las erratas del
 *    paciente ("concenso"). Si se corrige, deja de coincidir con lo que la
 *    persona ve al verificar.
 * 2. `meta` lleva la procedencia del paciente: la que dice la propia reseña
 *    (Xiomara y Minerva la nombran) o la que confirmó la dueña, que conoce a
 *    sus pacientes (Anelisse de Panamá, el resto de Medellín, 3-ago-2026).
 *    Nunca se deduce del nombre ni del idioma.
 * 3. Las reseñas largas se recortan con […] y siempre por frases completas,
 *    nunca cambiando palabras.
 */
const testimonials = [
  {
    name: 'Xiomara Veloz',
    meta: 'Orlando, Florida',
    // Va en inglés porque así la escribió ella. Traducirla sería falsear una cita.
    text: "Dr. Carolina Macareno is an amazing dentist. She's absolutely caring, gentle, and understanding. Her office is immaculate and her staff is top notch. We came from Orlando, Florida and now I will come annually. We highly recommend her over & over again.",
    initials: 'XV',
  },
  {
    name: 'Minerva Dutari',
    meta: 'Panamá · 10 implantes y prótesis híbrida',
    // Recorte de una reseña muy larga. Frases completas y en su orden original.
    text: 'Debido a problemas de encías y pérdida de hueso, fue necesario extraer todas mis piezas dentales, tanto arriba como abajo. Viajé desde Panamá especialmente para realizarme este tratamiento aquí […] Me colocaron 10 implantes en total (superiores e inferiores), junto con injerto de hueso […] la experiencia fue mucho mejor de lo que imaginaba: no sentí dolor durante el procedimiento ni después […] Destaco la meticulosidad de la Dra. Macareno que garantiza su trabajo y transmite total confianza.',
    initials: 'MD',
  },
  {
    name: 'Anelisse Dutari',
    meta: 'Panamá',
    text: 'La doctora Macareno es excelente, su calidad humana, su paciencia y dedicación al paciente cumple todas las expectativas. Recibí orientación antes y después del procedimiento, atendió mis consultas de manera exhaustiva y me atendió puntualmente y de manera efectiva. Totalmente recomendada.',
    initials: 'AD',
  },
  {
    name: 'Álvaro Giraldo',
    meta: 'Medellín',
    // "concenso" es del original. No se corrige, ver regla 1.
    text: 'La Dra Macareno evalúa, comparte y llega a un concenso con el cliente en lo relacionado con la intervención odontologica y el presupuesto. Muy profesional en todo sentido, excelente la intervención y atención.',
    initials: 'AG',
  },
  {
    name: 'Bibiana Buitrago Peláez',
    meta: 'Medellín',
    text: 'Muy buena experiencia, excelente calidad humana y profesionalismo, empática y brinda las mejores opciones para trabajar. Gracias!',
    initials: 'BB',
  },
  {
    name: 'Paola Andrea Jaramillo',
    meta: 'Medellín',
    text: 'Excelente atención, la doctora Carolina es un amor y su trabajo es genial.',
    initials: 'PJ',
  },
];

export default function TestimonialsSection({
  messages,
  locale = 'es',
}: {
  messages: TestimonialsMessages;
  locale?: Locale;
}) {
  const [active, setActive] = useState(0);
  const isEs = locale === 'es';

  return (
    <section className="py-24 bg-[#FCFBF9] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(201,164,97,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-[#8A6B2E] text-xs font-medium tracking-[0.3em] uppercase mb-3 block">
            {messages.subtitulo}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#211E18]"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {messages.titulo}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mt-6 mb-6" />
          {/*
            Insignia agregada: apunta a Google, NO a Doctoralia (agosto 2026).
            Doctoralia es un directorio que compite por las mismas búsquedas
            ("odontólogo Medellín") y este enlace le pasaba autoridad desde la
            home, la página más fuerte del sitio. Google Business Profile, en
            cambio, es un activo propio: las reseñas de ahí alimentan el mapa
            local, que es de donde llegan los pacientes de Medellín.

            La cifra es la real de Google verificada el 3-ago-2026 (5,0 con 26
            reseñas, las 26 de 5 estrellas). Si cambia el número en Google hay
            que actualizarlo aquí; no lo inventes ni lo redondees.

            Las seis citas de abajo también son de Google, transcritas del
            perfil. Antes eran de Doctoralia y contradecían esta insignia: quien
            hiciera clic no las encontraba en Google.
          */}
          <a
            href="https://maps.app.goo.gl/bNw5rUJT1DVBpbRj9"
            target="_blank"
            rel="noopener noreferrer"
            title={isEs ? 'Ver las reseñas en Google' : 'See the reviews on Google'}
            className="inline-flex items-center gap-3 bg-white border border-[#E8E3DA] hover:border-[#C9A461]/40 rounded-lg px-5 py-3 transition-colors"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="text-[#211E18] font-semibold text-sm">5.0</span>
            <span className="text-[#77726A] text-sm">·</span>
            <span className="text-[#77726A] text-sm">
              {isEs ? '26 opiniones verificadas en' : '26 verified reviews on'}
            </span>
            <span className="text-[#4285F4] font-semibold text-sm">Google</span>
          </a>
        </AnimatedSection>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#E8E3DA] rounded-lg p-8 sm:p-10 text-center relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-8 text-6xl text-[#8A6B2E]/20 font-serif leading-none">&#8220;</div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>

              <p className="text-[#5A5449] text-lg leading-relaxed mb-8 relative z-10 italic">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A461] to-[#A07830] flex items-center justify-center text-[#070B14] font-bold text-sm">
                  {testimonials[active].initials}
                </div>
                <div className="text-left">
                  <p className="text-[#211E18] font-semibold text-sm">{testimonials[active].name}</p>
                  {/* `meta` solo aparece si la reseña dice de dónde es o qué se hizo. */}
                  {testimonials[active].meta && (
                    <p className="text-[#77726A] text-xs">{testimonials[active].meta}</p>
                  )}
                </div>
                <div className="ml-2 flex items-center gap-1.5 bg-white border border-[#E8E3DA] rounded px-2 py-1">
                  {/* Logo de Google en sus cuatro colores oficiales. */}
                  <svg className="w-3 h-3" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.6-5.2 3.6-8.8z"/>
                    <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.4v3.1A12 12 0 0 0 12 24z"/>
                    <path fill="#FBBC05" d="M5.3 14.3a7.1 7.1 0 0 1 0-4.6V6.6H1.4a12 12 0 0 0 0 10.8l3.9-3.1z"/>
                    <path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.5-3.5A12 12 0 0 0 1.4 6.6l3.9 3.1A7.2 7.2 0 0 1 12 4.8z"/>
                  </svg>
                  <span className="text-[#5A5449] text-xs font-medium">
                    {isEs ? 'Reseña en Google' : 'Google review'}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots + mini cards */}
        <div className="flex flex-wrap justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded border transition-all duration-200 text-sm ${
                active === i
                  ? 'border-[#C9A461] bg-[#C9A461]/10 text-[#8A6B2E]'
                  : 'border-[#E8E3DA] bg-white text-[#77726A] hover:border-[#C9A461]/40'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                active === i ? 'bg-[#C9A461] text-[#1F2937]' : 'bg-[#F3EEE5] text-[#5A5449]'
              }`}>
                {t.initials}
              </div>
              <span className="hidden sm:block">{t.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
