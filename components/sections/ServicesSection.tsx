import AnimatedSection, { AnimatedStagger } from '../AnimatedSection';
import Link from 'next/link';

interface ServiceMessages {
  titulo: string;
  subtitulo: string;
  implantes: { nombre: string; descripcion: string };
  protesis: { nombre: string; descripcion: string };
  diseno: { nombre: string; descripcion: string };
  rehabilitacion: { nombre: string; descripcion: string };
  estetica: { nombre: string; descripcion: string };
  diagnostico: { nombre: string; descripcion: string };
  solicitarInfo: string;
}

const serviceIcons = [
  // Implant
  <svg key="implant" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v11m6-5v9M5 21h14M3 9h18M7 9V5a2 2 0 012-2h6a2 2 0 012 2v4" />
  </svg>,
  // Fixed prosthetics
  <svg key="prosthetics" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>,
  // Smile design
  <svg key="smile" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Full rehab
  <svg key="rehab" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Aesthetics
  <svg key="aesthetics" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
  // Diagnostic
  <svg key="diagnostic" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
];

export default function ServicesSection({ messages, locale }: { messages: ServiceMessages; locale: string }) {
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  const services = [
    { key: 'implantes', data: messages.implantes, icon: serviceIcons[0], slug: 'implantes-dentales' },
    { key: 'protesis', data: messages.protesis, icon: serviceIcons[1], slug: 'protesis-fija' },
    { key: 'diseno', data: messages.diseno, icon: serviceIcons[2], slug: 'diseno-de-sonrisa' },
    { key: 'rehabilitacion', data: messages.rehabilitacion, icon: serviceIcons[3], slug: 'rehabilitacion-oral-completa' },
    { key: 'estetica', data: messages.estetica, icon: serviceIcons[4], slug: 'estetica-dental' },
    { key: 'diagnostico', data: messages.diagnostico, icon: serviceIcons[5], slug: 'consulta-diagnostico' },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#0D1321] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase mb-3 block">
            {messages.subtitulo}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F0] leading-tight"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {messages.titulo}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mt-6" />
        </AnimatedSection>

        {/* Services grid */}
        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, data, icon, slug }) => (
            <div
              key={key}
              className="group relative bg-[#111827] border border-[#1F2937] rounded-lg p-7 hover:border-[#C9A461]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A461]/5 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded bg-[#C9A461]/10 border border-[#C9A461]/20 flex items-center justify-center text-[#C9A461] mb-5 group-hover:bg-[#C9A461]/20 transition-colors">
                {icon}
              </div>
              {/* Content */}
              <h3
                className="text-[#F5F5F0] font-semibold text-lg mb-3 group-hover:text-[#C9A461] transition-colors"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {data.nombre}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5 flex-1">
                {data.descripcion}
              </p>
              {/* Two actions */}
              <div className="flex items-center gap-4">
                <Link
                  href={localePath(`/servicios/${slug}`)}
                  className="inline-flex items-center gap-1.5 text-[#C9A461] text-sm font-medium hover:text-[#E5B866] transition-colors group/link"
                >
                  Ver más
                  <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href={`https://wa.me/573163975232?text=Hola, me interesa información sobre ${data.nombre}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#9CA3AF] text-xs hover:text-[#F5F5F0] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {messages.solicitarInfo}
                </a>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-full h-full border-t border-r border-[#C9A461]/40 rounded-tr-lg" />
              </div>
            </div>
          ))}
        </AnimatedStagger>

        {/* Link to full services page */}
        <div className="text-center mt-12">
          <Link
            href={localePath('/servicios')}
            className="inline-flex items-center gap-2 border border-[#C9A461]/40 text-[#C9A461] hover:bg-[#C9A461]/10 px-8 py-3 rounded text-sm font-medium tracking-wider uppercase transition-all duration-200"
          >
            Ver todos los servicios
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
