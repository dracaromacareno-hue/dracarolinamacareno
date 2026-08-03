import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { breadcrumbSchema, personSchema } from '@/components/SchemaOrg';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import { casosDestacados } from '@/lib/casos-galeria';

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
      ? 'Casos Clínicos Exitosos | Dra. Carolina Macareno'
      : 'Successful Clinical Cases | Dr. Carolina Macareno',
    description: isEs
      ? 'Casos clínicos reales de implantes, rehabilitación oral y diseño de sonrisa en Medellín. Resultados verificables con fotos y datos clínicos.'
      : 'Real documented clinical cases of dental implants, oral rehabilitation and smile design in Medellín. Verifiable results with photos and clinical data.',
    alternates: {
      canonical: isEs ? `${BASE}/casos-clinicos` : `${BASE}/en/casos-clinicos`,
      languages: { es: `${BASE}/casos-clinicos`, en: `${BASE}/en/casos-clinicos` },
    },
    openGraph: {
      title: isEs
        ? 'Casos Clínicos Reales | Dra. Carolina Macareno'
        : 'Real Clinical Cases | Dr. Carolina Macareno',
      description: isEs
        ? 'Casos clínicos reales documentados de implantes, rehabilitación oral y diseño de sonrisa en Medellín. Resultados verificables con fotos clínicas.'
        : 'Real documented clinical cases of implants, oral rehabilitation and smile design in Medellín. Verifiable results with clinical photos.',
      url: isEs ? `${BASE}/casos-clinicos` : `${BASE}/en/casos-clinicos`,
      siteName: 'Dra. Carolina Macareno',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/images/caso-clinico-subperiostico-postqx.webp`, width: 1200, height: 630, alt: 'Casos clínicos Dra. Carolina Macareno' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'Casos Clínicos Reales, Dra. Carolina Macareno' : 'Real Clinical Cases, Dr. Carolina Macareno',
      description: isEs
        ? 'Implantes, rehabilitación oral y diseño de sonrisa con fotos clínicas verificables.'
        : 'Implants, oral rehabilitation and smile design with verifiable clinical photos.',
      images: [`${BASE}/images/caso-clinico-subperiostico-postqx.webp`],
    },
  };
}

const casos = [
  {
    slug: 'implantes-subperiosticos-medellin',
    tags: ['CASO CLÍNICO REAL', 'IMPLANTOLOGÍA AVANZADA'],
    titulo: 'Implante Subperióstico',
    subtitulo: 'Dientes fijos sin injerto óseo',
    descripcion: 'Paciente con atrofia ósea severa. Sin injerto, sin espera, con posibilidad de rehabilitación inmediata en la misma sesión.',
    stats: [{ label: 'Sin injerto óseo', value: '0' }, { label: 'Sesiones', value: '1' }, { label: 'Éxito', value: '97%+' }],
    imagen: '/images/caso-clinico-subperiostico-postqx.webp',
    disponible: true,
  },
  {
    slug: 'caso-clinico-implante-convencional',
    tags: ['CASO CLÍNICO REAL', 'IMPLANTE CONVENCIONAL'],
    titulo: 'Implante de Titanio',
    subtitulo: 'Dientes el mismo día',
    descripcion: 'Implante convencional con provisionalización inmediata. Planificación digital CBCT, colocación y corona provisional en una sola visita.',
    stats: [{ label: 'Provisionalización', value: '1 día' }, { label: 'Éxito', value: '98%+' }, { label: 'Duración', value: '20+ años' }],
    imagen: null,
    disponible: true,
  },
];

export default async function CasosClinicosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => (locale === 'es' ? path : `/en${path}`);

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Casos Clínicos' : 'Clinical Cases', url: isEs ? `${BASE}/casos-clinicos` : `${BASE}/en/casos-clinicos` },
  ];

  return (
    <>
      <SchemaOrg schema={[personSchema(), breadcrumbSchema(breadcrumbs)]} />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#FCFBF9] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-[#8A6B2E] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
              {isEs ? 'Resultados reales' : 'Real results'}
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#211E18] mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Casos Clínicos Exitosos' : 'Successful Clinical Cases'}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mb-6" />
            <p className="text-[#77726A] text-lg max-w-2xl mx-auto">
              {isEs
                ? 'Casos documentados con fotos reales, datos clínicos y seguimiento. Cada caso es una transformación real en la vida de un paciente.'
                : 'Cases documented with real photos, clinical data and follow-up. Each case is a real transformation in a patient\'s life.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-white border-y border-[#E8E3DA]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: '3.500+', label: isEs ? 'Pacientes tratados' : 'Patients treated' },
              { value: '17+', label: isEs ? 'Años de experiencia' : 'Years of experience' },
              { value: '98%', label: isEs ? 'Índice de satisfacción' : 'Satisfaction rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[#8A6B2E] text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
                  {stat.value}
                </p>
                <p className="text-[#77726A] text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vitrina antes / después (casos reales) */}
      <BeforeAfterGallery
        locale={locale}
        cases={casosDestacados}
        eyebrow={{ es: 'Antes y después', en: 'Before and after' }}
        title={{ es: 'Transformaciones reales', en: 'Real transformations' }}
        subtitle={{
          es: 'Casos de pacientes atendidos en el consultorio. Diseño de sonrisa, carillas cerámicas y rehabilitación oral, documentados con fotografía clínica.',
          en: 'Cases of patients treated at the clinic. Smile design, ceramic veneers and oral rehabilitation, documented with clinical photography.',
        }}
        bg="#0D1321"
      />

      {/* Detailed clinical case studies */}
      <section className="py-20 bg-[#FCFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-[#8A6B2E] text-xs font-medium tracking-[0.3em] uppercase mb-3 block">
                {isEs ? 'Casos documentados' : 'Documented cases'}
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#211E18]"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {isEs ? 'Casos clínicos en profundidad' : 'In-depth clinical cases'}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {casos.map((caso, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`bg-white border rounded-xl overflow-hidden flex flex-col h-full ${caso.disponible ? 'border-[#E8E3DA] hover:border-[#C9A461]/40 transition-colors' : 'border-[#E8E3DA] opacity-70'}`}>
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-white">
                    {caso.imagen ? (
                      <Image
                        src={caso.imagen}
                        alt={caso.titulo}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-[#374151] text-sm">
                          {caso.disponible
                            ? (isEs ? 'Fotos del caso, próximamente' : 'Case photos, coming soon')
                            : (isEs ? 'Caso en preparación' : 'Case in preparation')}
                        </p>
                      </div>
                    )}
                    {/* Tags overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {caso.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-bold px-2 py-0.5 rounded tracking-wider ${
                            tag === 'PRÓXIMAMENTE'
                              ? 'bg-[#F3EEE5] text-[#5A5449]'
                              : 'bg-[#C9A461] text-[#070B14]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h2
                      className="text-xl font-bold text-[#211E18] mb-1"
                      style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                    >
                      {caso.titulo}
                    </h2>
                    <p className="text-[#8A6B2E] text-sm font-medium mb-3">{caso.subtitulo}</p>
                    <p className="text-[#77726A] text-sm leading-relaxed mb-4 flex-1">{caso.descripcion}</p>

                    {/* Stats */}
                    {caso.stats.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mb-5">
                        {caso.stats.map((stat) => (
                          <div key={stat.label} className="bg-white rounded p-2 text-center">
                            <p className="text-[#8A6B2E] font-bold text-sm">{stat.value}</p>
                            <p className="text-[#77726A] text-xs mt-0.5">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    {caso.slug && caso.disponible ? (
                      <Link
                        href={localePath(`/blog/${caso.slug}`)}
                        className="block text-center bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-6 py-3 rounded tracking-wider uppercase text-xs transition-all duration-200 hover:scale-105"
                      >
                        {isEs ? 'Ver caso completo →' : 'View full case →'}
                      </Link>
                    ) : (
                      <div className="block text-center border border-[#E8E3DA] text-[#77726A] px-6 py-3 rounded tracking-wider uppercase text-xs">
                        {isEs ? 'Próximamente' : 'Coming soon'}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-[#E8E3DA]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#211E18] mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? '¿Podrías ser el próximo caso de éxito?' : 'Could you be the next success story?'}
            </h2>
            <p className="text-[#77726A] mb-8">
              {isEs
                ? 'Agenda una consulta de diagnóstico y evaluamos tu caso con tomografía y planificación digital.'
                : 'Book a diagnostic consultation and we evaluate your case with CT scan and digital planning.'}
            </p>
            <WhatsAppLink
              message="Hola Dra. Carolina, vi los casos clínicos en su página y me gustaría agendar una consulta de diagnóstico."
              locale={isEs ? 'es' : 'en'}
              trackingLabel="casos_clinicos_cta"
              className="inline-block bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-10 py-4 rounded tracking-wider uppercase text-sm transition-all duration-200 hover:scale-105"
            >
              {isEs ? 'Quiero evaluar mi caso' : 'I want to evaluate my case'}
            </WhatsAppLink>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
