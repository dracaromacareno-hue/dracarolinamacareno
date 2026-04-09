import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { breadcrumbSchema, personSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';

  return {
    title: isEs
      ? 'Conferencias y Cursos | Dra. Carolina Macareno'
      : 'Speaking & Courses | Dr. Carolina Macareno',
    description: isEs
      ? 'La Dra. Carolina Macareno es conferencista activa en odontología. Cursos sobre rehabilitación oral, implantes y diseño de sonrisa para profesionales dentales.'
      : 'Dr. Carolina Macareno is an active speaker in dentistry. Courses on oral rehabilitation, implants and smile design for dental professionals.',
    alternates: {
      canonical: isEs ? `${BASE}/conferencias` : `${BASE}/en/conferencias`,
      languages: { es: `${BASE}/conferencias`, en: `${BASE}/en/conferencias` },
    },
  };
}

const pastEvents = [
  { year: '2024', event: 'Congreso Nacional de Odontología, Bogotá', topic: 'Prótesis fija atornillada: protocolo de excelencia' },
  { year: '2024', event: 'Universidad CES, Medellín', topic: 'Diseño digital de sonrisa: de la planificación al resultado' },
  { year: '2023', event: 'FACOP Congress, Medellín', topic: 'All-on-4: selección de casos y manejo de complicaciones' },
  { year: '2023', event: 'Odontología Virtual Colombia', topic: 'Rehabilitación oral completa: visión integral del paciente' },
  { year: '2022', event: 'Congreso ACFO, Cartagena', topic: 'Bruxismo y su impacto en la rehabilitación implantosoportada' },
  { year: '2022', event: 'Simposio de Estética Dental, Medellín', topic: 'Materiales cerámicos en 2022: cuándo y cómo elegir' },
];

export default async function ConferenciasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('conferencias_page');
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Conferencias' : 'Speaking', url: isEs ? `${BASE}/conferencias` : `${BASE}/en/conferencias` },
  ];

  return (
    <>
      <SchemaOrg schema={[personSchema(), breadcrumbSchema(breadcrumbs)]} />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
              {isEs ? 'Para profesionales' : 'For professionals'}
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t('titulo')}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mb-6" />
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">{t('descripcion')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-[#0D1321]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Temas de conferencia' : 'Speaking topics'}
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A461] mx-auto mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🔩', title: isEs ? 'Prótesis fija atornillada sobre implantes' : 'Screw-retained prosthetics on implants' },
              { icon: '😁', title: isEs ? 'Diseño digital de sonrisa (DSD)' : 'Digital Smile Design (DSD)' },
              { icon: '🦷', title: isEs ? 'Rehabilitación oral completa: planificación y ejecución' : 'Full mouth rehabilitation: planning and execution' },
              { icon: '🧬', title: isEs ? 'All-on-4 y All-on-6: protocolos avanzados' : 'All-on-4 and All-on-6: advanced protocols' },
              { icon: '💎', title: isEs ? 'Materiales cerámicos modernos: indicaciones' : 'Modern ceramic materials: indications' },
              { icon: '🧠', title: isEs ? 'El impacto psicológico de la rehabilitación oral' : 'The psychological impact of oral rehabilitation' },
            ].map((topic, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-5 flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{topic.icon}</span>
                  <p className="text-[#D1D5DB] text-sm font-medium leading-snug">{topic.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-16 bg-[#070B14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t('pasadas')}
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A461] mx-auto mt-4" />
          </AnimatedSection>
          <div className="space-y-4">
            {pastEvents.map((event, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 bg-[#0D1321] border border-[#1F2937] rounded p-4">
                  <span className="text-[#C9A461] font-bold text-sm w-10 flex-shrink-0">{event.year}</span>
                  <div>
                    <p className="text-[#F5F5F0] font-medium text-sm">{event.event}</p>
                    <p className="text-[#9CA3AF] text-xs mt-1">{event.topic}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D1321] border-t border-[#1F2937]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#F5F5F0] mb-4"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {t('contactar')}
          </h2>
          <p className="text-[#9CA3AF] mb-8 text-sm">
            {isEs
              ? '¿Organizas un congreso, simposio o jornada de formación? Contáctame para conocer disponibilidad y honorarios.'
              : 'Are you organizing a congress, symposium or training session? Contact me to check availability and fees.'}
          </p>
          <Link
            href={localePath('/contacto')}
            className="inline-block bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-10 py-4 rounded tracking-wider uppercase text-sm transition-all duration-200 hover:scale-105"
          >
            {isEs ? 'Contactar' : 'Contact'}
          </Link>
        </div>
      </section>
    </>
  );
}
