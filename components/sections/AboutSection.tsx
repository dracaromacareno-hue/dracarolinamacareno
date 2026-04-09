import Link from 'next/link';
import AnimatedSection from '../AnimatedSection';

interface AboutMessages {
  titulo: string;
  subtitulo: string;
  bio1: string;
  bio2: string;
  bio3: string;
  credenciales: string;
  verMas: string;
}

interface AboutSectionProps {
  messages: AboutMessages;
  locale: string;
}

const credentials = [
  { label: 'Odontóloga', detail: 'Universidad El Bosque, 2002' },
  { label: 'Esp. Rehabilitación Oral', detail: 'Universidad CES, 2009' },
  { label: 'Implantes Dentales', detail: 'FACOP' },
  { label: 'Estética Dental', detail: 'New York University' },
];

export default function AboutSection({ messages, locale }: AboutSectionProps) {
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  return (
    <section className="py-24 bg-[#070B14] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,_rgba(201,164,97,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <AnimatedSection direction="right" className="relative order-2 lg:order-1">
            {/* Photo: dr-carolina-macareno-portrait.jpg */}
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A461]/20 rounded" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A461]/10 rounded" />
              {/* Main placeholder */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#0D1321] via-[#111827] to-[#1A5276]/20 rounded overflow-hidden flex items-end">
                {/* Silhouette decoration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#C9A461]/5 border border-[#C9A461]/10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#C9A461]/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
                {/* Name card at bottom */}
                <div className="relative z-10 w-full p-6 bg-gradient-to-t from-[#070B14] via-[#070B14]/80 to-transparent">
                  <p
                    className="text-[#C9A461] font-bold text-lg"
                    style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    Dra. Carolina Macareno
                  </p>
                  <p className="text-[#9CA3AF] text-sm">Rehabilitadora Oral</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection direction="left" className="order-1 lg:order-2">
            <div className="mb-2">
              <span className="text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase">
                {messages.subtitulo}
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {messages.titulo}
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mb-8" />

            <div className="space-y-4 mb-10">
              <p className="text-[#D1D5DB] leading-relaxed">{messages.bio1}</p>
              <p className="text-[#D1D5DB] leading-relaxed">{messages.bio2}</p>
            </div>

            {/* Credentials */}
            <div className="mb-8">
              <h3 className="text-[#F5F5F0] font-semibold text-sm tracking-widest uppercase mb-4">
                {messages.credenciales}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-start gap-3 bg-[#0D1321] border border-[#1F2937] rounded p-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A461] mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#F5F5F0] text-sm font-medium">{cred.label}</p>
                      <p className="text-[#9CA3AF] text-xs">{cred.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={localePath('/sobre-mi')}
              className="inline-flex items-center gap-2 text-[#C9A461] hover:text-[#E5B866] font-medium transition-colors group"
            >
              {messages.verMas}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
