import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { personSchema, breadcrumbSchema } from '@/components/SchemaOrg';
import Link from 'next/link';

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
      ? 'Sobre Mí | Dra. Carolina Macareno'
      : 'About Me | Dr. Carolina Macareno',
    description: isEs
      ? 'Conoce a la Dra. Carolina Macareno, especialista en rehabilitación oral e implantes dentales con más de 17 años de experiencia en Medellín, Colombia.'
      : 'Meet Dr. Carolina Macareno, oral rehabilitation and dental implant specialist with over 17 years of experience in Medellín, Colombia.',
    alternates: {
      canonical: isEs ? `${BASE}/sobre-mi` : `${BASE}/en/sobre-mi`,
      languages: { es: `${BASE}/sobre-mi`, en: `${BASE}/en/sobre-mi` },
    },
  };
}

const timeline = [
  { year: '2002', event: 'Grado como Odontóloga, Universidad El Bosque, Bogotá' },
  { year: '2003', event: 'Inicio de práctica clínica en Medellín' },
  { year: '2007', event: 'Fundación de primera clínica dental en Medellín' },
  { year: '2009', event: 'Especialización en Rehabilitación Oral, Universidad CES' },
  { year: '2011', event: 'Entrenamiento en Implantología, FACOP' },
  { year: '2014', event: 'Estudios avanzados en Estética Dental, New York University' },
  { year: '2016', event: 'Fundación de segunda clínica en El Poblado' },
  { year: '2019', event: 'Apertura de tercera clínica dental en Medellín' },
  { year: '2022', event: 'Publicación del libro "El poder de tu sonrisa"' },
  { year: '2024', event: '3,500+ pacientes transformados. Inicio de cursos para dentistas' },
];

export default async function SobreMiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('about_page');
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Sobre Mí' : 'About Me', url: isEs ? `${BASE}/sobre-mi` : `${BASE}/en/sobre-mi` },
  ];

  return (
    <>
      <SchemaOrg schema={[personSchema(), breadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
              {isEs ? 'Mi historia' : 'My story'}
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-6"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t('titulo')}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mb-6" />
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">{t('metaDesc')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-20 bg-[#0D1321]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <AnimatedSection direction="right">
              {/* Photo: dra-carolina-macareno-about.jpg */}
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-[#111827] via-[#0D1321] to-[#1A5276]/20 rounded-lg border border-[#1F2937] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg className="w-64 h-64 text-[#C9A461]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#070B14]">
                  <p className="text-[#C9A461] font-bold text-xl" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
                    Dra. Carolina Macareno
                  </p>
                  <p className="text-[#9CA3AF] text-sm">Rehabilitadora Oral · 17+ años</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="left">
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#F5F5F0] mb-6"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {t('mision')}
              </h2>
              <div className="bg-[#111827] border-l-4 border-[#C9A461] p-6 rounded-r mb-8">
                <p className="text-[#D1D5DB] italic text-lg leading-relaxed">
                  &ldquo;{t('misionTexto')}&rdquo;
                </p>
              </div>

              <p className="text-[#D1D5DB] leading-relaxed mb-4">
                {isEs
                  ? 'Nací en Colombia y desde muy joven supe que quería dedicarme a la salud y al cuidado de las personas. La odontología me permitió combinar mi amor por la ciencia, la precisión y el arte. Cada boca es un universo diferente, cada paciente tiene una historia única, y eso es lo que hace mi trabajo apasionante.'
                  : 'I was born in Colombia and from a very young age I knew I wanted to dedicate myself to health and caring for people. Dentistry allowed me to combine my love of science, precision and art. Every mouth is a different universe, every patient has a unique story, and that is what makes my work passionate.'}
              </p>
              <p className="text-[#D1D5DB] leading-relaxed mb-4">
                {isEs
                  ? 'Después de graduarme de la Universidad El Bosque en 2002, me instalé en Medellín — una ciudad que me enamoró desde el primer momento. Aquí construí mi práctica, fundé tres clínicas y formé un equipo de profesionales comprometidos con la excelencia.'
                  : 'After graduating from Universidad El Bosque in 2002, I settled in Medellín — a city I fell in love with from the very first moment. Here I built my practice, founded three clinics and formed a team of professionals committed to excellence.'}
              </p>
              <p className="text-[#D1D5DB] leading-relaxed">
                {isEs
                  ? 'La especialización en Rehabilitación Oral en la Universidad CES fue el momento que definió el norte de mi carrera. Entendí que mi rol no era solo "arreglar dientes" sino restaurar vidas, devolver sonrisas y con ellas, la autoestima y calidad de vida de mis pacientes.'
                  : 'Specializing in Oral Rehabilitation at Universidad CES was the moment that defined the direction of my career. I understood that my role was not just to "fix teeth" but to restore lives, return smiles and with them, the self-esteem and quality of life of my patients.'}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#070B14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-6"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t('filosofia')}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mb-10" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔬',
                title: isEs ? 'Evidencia Científica' : 'Scientific Evidence',
                text: isEs
                  ? 'Cada técnica y material que uso está respaldado por la mejor evidencia clínica disponible.'
                  : 'Every technique and material I use is backed by the best available clinical evidence.',
              },
              {
                icon: '🤝',
                title: isEs ? 'Trato Humanizado' : 'Humanized Care',
                text: isEs
                  ? 'Escucho activamente a mis pacientes, entiendo sus miedos y adapto el tratamiento a sus necesidades reales.'
                  : 'I actively listen to my patients, understand their fears and adapt treatment to their real needs.',
              },
              {
                icon: '🏆',
                title: isEs ? 'Excelencia Técnica' : 'Technical Excellence',
                text: isEs
                  ? 'La perfección técnica no es un objetivo, es el estándar mínimo que me exijo en cada procedimiento.'
                  : 'Technical perfection is not a goal, it is the minimum standard I demand of myself in every procedure.',
              },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="bg-[#0D1321] border border-[#1F2937] rounded-lg p-7 text-center">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3
                    className="text-[#F5F5F0] font-bold text-lg mb-3"
                    style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0D1321]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t('trayectoria')}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mt-6" />
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1F2937]" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#111827] border border-[#C9A461]/30 flex items-center justify-center z-10 relative">
                        <span className="text-[#C9A461] font-bold text-xs">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#111827] border border-[#1F2937] rounded p-4 mt-3">
                      <p className="text-[#D1D5DB] text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#070B14] border-t border-[#1F2937]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#F5F5F0] mb-4"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {isEs ? '¿Listo para conocernos?' : 'Ready to meet?'}
          </h2>
          <p className="text-[#9CA3AF] mb-8">
            {isEs
              ? 'Agenda una consulta de diagnóstico y demos el primer paso juntos hacia tu nueva sonrisa.'
              : 'Book a diagnostic consultation and let\'s take the first step together toward your new smile.'}
          </p>
          <Link
            href={localePath('/contacto')}
            className="inline-block bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-10 py-4 rounded tracking-wider uppercase text-sm transition-all duration-200 hover:scale-105"
          >
            {isEs ? 'Agenda tu Cita' : 'Book Appointment'}
          </Link>
        </div>
      </section>
    </>
  );
}
