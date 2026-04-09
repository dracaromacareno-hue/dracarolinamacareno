'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatsMsgs {
  titulo: string;
  anios: string;
  pacientes: string;
  clinicas: string;
  satisfaccion: string;
}

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const startVal = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - startVal) + startVal));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };

    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  delay,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <div className="relative inline-block mb-3">
        <div className="absolute inset-0 bg-[#C9A461]/10 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span
          className="relative text-5xl sm:text-6xl font-bold text-[#C9A461] leading-none"
          style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          {count.toLocaleString()}{suffix}
        </span>
      </div>
      <p className="text-[#9CA3AF] text-sm sm:text-base font-medium tracking-wide">{label}</p>
    </motion.div>
  );
}

export default function StatsSection({ messages }: { messages: StatsMsgs }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 17, suffix: '+', label: messages.anios },
    { value: 3500, suffix: '+', label: messages.pacientes },
    { value: 3, suffix: '', label: messages.clinicas },
    { value: 98, suffix: '%', label: messages.satisfaccion },
  ];

  return (
    <section className="py-20 bg-[#0D1321] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,164,97,0.04)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A461]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A461]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase mb-10"
        >
          {messages.titulo}
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.1}
              started={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
