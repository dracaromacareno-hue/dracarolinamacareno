import Link from 'next/link';
import AnimatedSection from '../AnimatedSection';

interface BookMessages {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  descripcion2: string;
  disponible: string;
  verLibro: string;
  paraQuien: string;
  pacientes: string;
  profesionales: string;
  curiosos: string;
}

export default function BooksSection({ messages, locale }: { messages: BookMessages; locale: string }) {
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  const audiences = [
    { icon: '🦷', label: messages.pacientes },
    { icon: '👨‍⚕️', label: messages.profesionales },
    { icon: '📚', label: messages.curiosos },
  ];

  return (
    <section className="py-24 bg-[#0D1321] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_left,_rgba(201,164,97,0.05)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A461]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book visual */}
          <AnimatedSection direction="right">
            <div className="relative flex justify-center">
              {/* Book mockup */}
              {/* Photo: libro-el-poder-de-tu-sonrisa-cover.jpg */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                {/* Shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/50 blur-xl" />
                {/* Book spine */}
                <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-[#A07830] to-[#C9A461] rounded-l-sm" />
                {/* Book cover */}
                <div className="absolute left-4 top-0 right-0 h-full bg-gradient-to-br from-[#111827] via-[#1A5276] to-[#070B14] rounded-r-sm border border-[#C9A461]/20 flex flex-col items-center justify-between p-8 overflow-hidden">
                  {/* Decoration */}
                  <div className="absolute top-0 left-0 right-0 bottom-0">
                    <div className="absolute inset-4 border border-[#C9A461]/15 rounded" />
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-px bg-[#C9A461]/30" />
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-16 h-px bg-[#C9A461]/20" />
                  </div>
                  {/* Top */}
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-0.5 bg-[#C9A461]/60 mx-auto mb-3" />
                    <p className="text-[#C9A461]/80 text-xs tracking-[0.2em] uppercase">Dra. Carolina</p>
                    <p className="text-[#C9A461]/60 text-xs tracking-widest">Macareno</p>
                  </div>
                  {/* Title */}
                  <div className="relative z-10 text-center">
                    <h3
                      className="text-[#F5F5F0] font-bold text-xl leading-tight mb-2"
                      style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                    >
                      El poder
                    </h3>
                    <p className="text-[#C9A461] text-xs tracking-widest uppercase">de tu sonrisa</p>
                  </div>
                  {/* Bottom decoration */}
                  <div className="relative z-10 w-8 h-8 rounded-full border border-[#C9A461]/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#C9A461]/30" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="left">
            <span className="inline-flex items-center gap-2 border border-[#C9A461]/30 rounded-full px-4 py-1.5 mb-6 bg-[#C9A461]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A461]" />
              <span className="text-[#C9A461] text-xs font-medium tracking-wider uppercase">{messages.disponible}</span>
            </span>

            <h2
              className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-2 leading-tight"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {messages.titulo}
            </h2>
            <p className="text-[#C9A461] text-lg mb-6 italic" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
              {messages.subtitulo}
            </p>

            <div className="w-12 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mb-6" />

            <p className="text-[#D1D5DB] leading-relaxed mb-4">{messages.descripcion}</p>
            <p className="text-[#D1D5DB] leading-relaxed mb-8">{messages.descripcion2}</p>

            {/* Audience */}
            <div className="mb-8">
              <p className="text-[#F5F5F0] font-semibold text-sm tracking-wider uppercase mb-4">{messages.paraQuien}</p>
              <div className="space-y-2">
                {audiences.map((a) => (
                  <div key={a.label} className="flex items-center gap-3">
                    <span className="text-lg">{a.icon}</span>
                    <span className="text-[#D1D5DB] text-sm">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={localePath('/libros/el-poder-de-tu-sonrisa')}
              className="inline-flex items-center gap-2 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-6 py-3 rounded transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#C9A461]/20"
            >
              {messages.verLibro}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
