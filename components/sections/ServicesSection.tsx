import AnimatedSection, { AnimatedStagger } from '../AnimatedSection';

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
    { key: 'implantes', data: messages.implantes, icon: serviceIcons[0] },
    { key: 'protesis', data: messages.protesis, icon: serviceIcons[1] },
    { key: 'diseno', data: messages.diseno, icon: serviceIcons[2] },
    { key: 'rehabilitacion', data: messages.rehabilitacion, icon: serviceIcons[3] },
    { key: 'estetica', data: messages.estetica, icon: serviceIcons[4] },
    { key: 'diagnostico', data: messages.diagnostico, icon: serviceIcons[5] },
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
          {services.map(({ key, data, icon }) => (
            <div
              key={key}
              className="group relative bg-[#111827] border border-[#1F2937] rounded-lg p-7 hover:border-[#C9A461]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A461]/5 cursor-pointer"
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
              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">
                {data.descripcion}
              </p>
              <a
                href={`https://wa.me/573000000000?text=Hola, me interesa información sobre ${data.nombre}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C9A461] text-sm font-medium hover:text-[#E5B866] transition-colors group/link"
              >
                {messages.solicitarInfo}
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-full h-full border-t border-r border-[#C9A461]/40 rounded-tr-lg" />
              </div>
            </div>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
