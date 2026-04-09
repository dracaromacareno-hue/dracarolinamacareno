'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';

interface TestimonialsMessages {
  titulo: string;
  subtitulo: string;
}

const testimonials = [
  {
    name: 'María Fernanda Ospina',
    city: 'Medellín',
    treatment: 'Implantes + Diseño de Sonrisa',
    text: 'Después de perder tres dientes en un accidente, pensé que nunca volvería a sonreír con confianza. La Dra. Carolina no solo restauró mis dientes —restauró mi vida. El resultado es absolutamente natural, nadie se da cuenta que son implantes.',
    rating: 5,
    initials: 'MF',
  },
  {
    name: 'Carlos Andrés Mejía',
    city: 'Envigado',
    treatment: 'Rehabilitación Oral Completa',
    text: 'Llevaba años evitando sonreír en fotos y rechazando comidas por vergüenza de mis dientes. La rehabilitación completa que hizo la Dra. Macareno transformó completamente mi calidad de vida. Es una profesional extraordinaria.',
    rating: 5,
    initials: 'CA',
  },
  {
    name: 'Lucía Montoya',
    city: 'Bogotá',
    treatment: 'Carillas Cerámicas',
    text: 'Vine desde Bogotá específicamente para que la Dra. Carolina me hiciera mis carillas. La diferencia en calidad con lo que me ofrecían allá era abismal. Valió absolutamente la pena el viaje. Mis dientes son perfectos.',
    rating: 5,
    initials: 'LM',
  },
  {
    name: 'Roberto Sánchez',
    city: 'Medellín',
    treatment: 'Prótesis Fija Atornillada',
    text: 'Como empresario, necesitaba una solución definitiva y de alta calidad. La prótesis fija atornillada superó todas mis expectativas. La Dra. Macareno explicó cada paso del proceso con paciencia y profesionalismo excepcional.',
    rating: 5,
    initials: 'RS',
  },
  {
    name: 'Patricia Herrera',
    city: 'Rionegro',
    treatment: 'All-on-4',
    text: 'A mis 58 años tomé la decisión de hacer el All-on-4 y fue lo mejor que pude hacer. La Dra. Carolina y su equipo me acompañaron en todo el proceso. Hoy como lo que quiero y sonrío sin inhibiciones. ¡Gracias de corazón!',
    rating: 5,
    initials: 'PH',
  },
  {
    name: 'Sebastián Torres',
    city: 'Pereira',
    treatment: 'Diseño de Sonrisa',
    text: 'Vine por recomendación de un amigo y fue la mejor decisión. El diseño digital previo me permitió ver el resultado antes de empezar. La Dra. Macareno es una artista de la odontología. Mi sonrisa cambió completamente.',
    rating: 5,
    initials: 'ST',
  },
];

export default function TestimonialsSection({ messages }: { messages: TestimonialsMessages }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#070B14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,164,97,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase mb-3 block">
            {messages.subtitulo}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#F5F5F0]"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {messages.titulo}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mt-6" />
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
              className="bg-[#0D1321] border border-[#1F2937] rounded-lg p-8 sm:p-10 text-center relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-8 text-6xl text-[#C9A461]/20 font-serif leading-none">&#8220;</div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#C9A461]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#D1D5DB] text-lg leading-relaxed mb-8 relative z-10 italic">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A461] to-[#A07830] flex items-center justify-center text-[#070B14] font-bold text-sm">
                  {testimonials[active].initials}
                </div>
                <div className="text-left">
                  <p className="text-[#F5F5F0] font-semibold text-sm">{testimonials[active].name}</p>
                  <p className="text-[#9CA3AF] text-xs">{testimonials[active].city} · {testimonials[active].treatment}</p>
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
                  ? 'border-[#C9A461] bg-[#C9A461]/10 text-[#C9A461]'
                  : 'border-[#1F2937] bg-[#0D1321] text-[#9CA3AF] hover:border-[#C9A461]/40'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                active === i ? 'bg-[#C9A461] text-[#070B14]' : 'bg-[#1F2937] text-[#9CA3AF]'
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
