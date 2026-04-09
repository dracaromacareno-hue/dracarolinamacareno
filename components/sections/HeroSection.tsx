'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroMessages {
  nombre: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  ctaPrincipal: string;
  ctaSecundario: string;
  ubicacion: string;
}

interface HeroSectionProps {
  messages: HeroMessages;
  locale: string;
}

export default function HeroSection({ messages, locale }: HeroSectionProps) {
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070B14]">
        {/* Radial gradient spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,164,97,0.08)_0%,_transparent_70%)]" />
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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
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

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-3"
          style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          <span className="block text-4xl sm:text-5xl md:text-7xl font-bold text-[#F5F5F0] leading-tight">
            {messages.nombre}
          </span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-5"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A461]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A461]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A461]" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-2"
        >
          <span
            className="text-xl sm:text-2xl md:text-3xl font-light text-[#C9A461] tracking-wide"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {messages.titulo}
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#9CA3AF] text-base sm:text-lg mb-8 tracking-wide"
        >
          {messages.subtitulo}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#D1D5DB] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {messages.descripcion}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={localePath('/contacto')}
            className="group relative bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-8 py-4 rounded text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#C9A461]/20 hover:shadow-[#C9A461]/40 hover:scale-105"
          >
            {messages.ctaPrincipal}
          </Link>
          <Link
            href={localePath('/#servicios')}
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
