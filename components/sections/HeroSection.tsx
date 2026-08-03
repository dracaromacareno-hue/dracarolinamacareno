'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { track } from '@/lib/analytics';
import { useEffect, useState } from 'react';
import { detectSource, appendSourceTag } from '@/lib/source-tracking';

interface HeroMessages {
  nombre: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  credenciales: string;
  ctaPrincipal: string;
  ctaSecundario: string;
  ubicacion: string;
}

interface HeroSectionProps {
  messages: HeroMessages;
  locale: string;
}

const WA_NUMBER = '573163975232';

export default function HeroSection({ messages, locale }: HeroSectionProps) {
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;
  const isEs = locale === 'es';
  const baseMsg = isEs
    ? 'Hola Dra. Carolina 🌐 Llegué desde su sitio web y me gustaría agendar una cita.'
    : 'Hi Dr. Carolina 🌐 I came from your website and I would like to book an appointment.';

  // Tag the WhatsApp prefill with source attribution (Google Ads, IG, etc.)
  // for GHL CRM. Computed client-side after hydrate to avoid SSR mismatch.
  const [waHref, setWaHref] = useState(
    () => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(baseMsg)}`,
  );
  useEffect(() => {
    const tagged = appendSourceTag(baseMsg, isEs ? 'es' : 'en', detectSource());
    setWaHref(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(tagged)}`);
  }, [baseMsg, isEs]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070B14]">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070B14]">
        {/* Doctor photo on the right side */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <Image
            src="/images/dra-carolina-hero.webp"
            alt="Dra. Carolina Macareno"
            fill
            className="object-cover object-top"
            style={{ transform: 'scaleX(-1)' }}
            priority
            sizes="50vw"
          />
          {/* Gradient overlay, fade to dark on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/60 to-transparent" />
          {/* Gradient overlay, fade to dark at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]/30" />
        </div>
        {/* Radial gradient spotlight */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_left,_rgba(201,164,97,0.08)_0%,_transparent_70%)]" />
        {/* Gold accent lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A461]/30 to-transparent" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,164,97,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,164,97,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Corner accents */}
        <div className="absolute top-20 left-10 w-24 h-24 border-l border-t border-[#C9A461]/20" />
        <div className="absolute top-20 right-10 w-24 h-24 border-r border-t border-[#C9A461]/20" />
        <div className="absolute bottom-20 left-10 w-24 h-24 border-l border-b border-[#C9A461]/20" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-r border-b border-[#C9A461]/20" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#C9A461]/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full lg:w-1/2 text-center lg:text-left">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-[#C9A461]/30 rounded-full px-4 py-1.5 mb-8 bg-[#C9A461]/5"
        >
          <svg className="w-3.5 h-3.5 text-[#C9A461]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[#C9A461] text-xs font-medium tracking-wider uppercase">
            {messages.ubicacion}
          </span>
        </motion.div>

        {/*
          H1 = nombre + especialidad, en un solo encabezado (agosto 2026).

          Antes el <h1> envolvía SOLO el nombre, y la línea de especialidad iba
          suelta en un <span> sin valor semántico. O sea que la señal más fuerte
          de la home entera decía "Dra. Carolina Macareno" y nada más: se
          gastaba en una búsqueda que ya se gana (su propio nombre) en vez de en
          "rehabilitación oral" e "implantología", que son las que traen
          pacientes nuevos.

          Ahora el h1 contiene las dos líneas, así que Google lee el conjunto.
          No se cambió ni una palabra del texto visible ni el diseño: las líneas
          siguen viéndose igual, con los mismos tamaños y la misma animación
          escalonada. Solo cambia qué etiqueta las envuelve.

          Por qué todo son <span> y no <div>: dentro de un <h1> solo es válido
          contenido de frase. Un <div> ahí es HTML inválido y algunos rastreadores
          cortan el encabezado en ese punto, que es justo lo que queremos evitar.
          El separador decorativo va con aria-hidden para que un lector de
          pantalla no lea adornos como si fueran parte del titular.
        */}
        <motion.h1
          className="mb-2"
          style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="block text-4xl sm:text-5xl md:text-7xl font-bold text-[#F5F5F0] leading-tight mb-3"
          >
            {messages.nombre}
          </motion.span>

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-5"
            aria-hidden="true"
          >
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A461]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A461]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A461]" />
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="block text-xl sm:text-2xl md:text-3xl font-light text-[#C9A461] tracking-wide"
          >
            {messages.titulo}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#9CA3AF] text-sm sm:text-base mb-8 tracking-wider uppercase"
        >
          {messages.subtitulo}
        </motion.p>

        {/* Transformation statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#F5F5F0] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-5 font-light"
          style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          {messages.descripcion}
        </motion.p>

        {/* Credentials line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10"
        >
          {messages.credenciales}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2"
        >
          {/* Primary CTA: opens WhatsApp directly (1-click conversion) */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track.cta('hero_primary_whatsapp')}
            className="group relative inline-flex items-center justify-center gap-2 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-8 py-4 rounded text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#C9A461]/20 hover:shadow-[#C9A461]/40 hover:scale-105"
          >
            <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
            </svg>
            {messages.ctaPrincipal}
          </a>
          <Link
            href={localePath('/#servicios')}
            onClick={() => track.cta('hero_secondary_services')}
            className="border border-[#C9A461]/40 hover:border-[#C9A461] text-[#F5F5F0] hover:text-[#C9A461] font-medium px-8 py-4 rounded text-sm sm:text-base tracking-wider uppercase transition-all duration-300"
          >
            {messages.ctaSecundario}
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-5 h-8 border border-[#C9A461]/40 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-[#C9A461] rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
