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

const testimonials = [
  {
    name: 'Javier',
    city: 'Medellín',
    treatment: 'Limpieza Dental',
    text: 'Excelente servicio de la doctora Carolina y de su asistente, el consultorio impecable, muy buena iluminación y vista, total dedicación durante el tiempo de la consulta, da recomendaciones y cuidados.',
    rating: 5,
    initials: 'J',
    source: 'Doctoralia',
    verified: true,
  },
  {
    name: 'Santiago Pérez',
    city: 'Medellín',
    treatment: 'Coronas en Zirconio',
    text: 'La idoneidad profesional es lo que más destacó de la atención recibida, esta no solo se nota sino que también se siente en la forma de abordar al paciente.',
    rating: 5,
    initials: 'SP',
    source: 'Doctoralia',
    verified: true,
  },
  {
    name: 'Lucas Narvaez',
    city: 'Medellín',
    treatment: 'Diseño de Sonrisa',
    text: 'Servicio muy profesional, escucha tus necesidades y te aconseja acertadamente.',
    rating: 5,
    initials: 'LN',
    source: 'Doctoralia',
    verified: true,
  },
  {
    name: 'Beatriz Elena Gaviria',
    city: 'Medellín',
    treatment: 'Visita Odontología',
    text: 'Todo excelente, la doctora es maravillosa, amable, cariñosa y excelente calidad humana.',
    rating: 5,
    initials: 'BG',
    source: 'Doctoralia',
    verified: true,
  },
  {
    name: 'Álvaro López',
    city: 'Medellín',
    treatment: 'Visita Odontología',
    text: 'Una profesional excelente y además de un muy buen servicio unas instalaciones impecables.',
    rating: 5,
    initials: 'AL',
    source: 'Doctoralia',
    verified: true,
  },
  {
    name: 'Johanna',
    city: 'Medellín',
    treatment: 'Diseño de Sonrisa',
    text: 'Profesional y gentil, lugar bonito y fácil para llegar.',
    rating: 5,
    initials: 'J',
    source: 'Doctoralia',
    verified: true,
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

            Las tarjetas de abajo SIGUEN marcadas como Doctoralia porque esos
            testimonios son de Doctoralia: es texto, no enlace, así que no le
            pasa autoridad a nadie.
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
                  <p className="text-[#77726A] text-xs">{testimonials[active].city} · {testimonials[active].treatment}</p>
                </div>
                {testimonials[active].verified && (
                  <div className="ml-2 flex items-center gap-1 bg-[#00A99D]/10 border border-[#00A99D]/20 rounded px-2 py-1">
                    <svg className="w-3 h-3 text-[#00786F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#00786F] text-xs font-medium">Doctoralia</span>
                  </div>
                )}
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
                active === i ? 'bg-[#C9A461] text-[#070B14]' : 'bg-[#1F2937] text-[#77726A]'
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
