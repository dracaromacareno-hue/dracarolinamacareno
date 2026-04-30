import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { personSchema, breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';
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
    openGraph: {
      title: isEs
        ? 'Sobre Mí — Dra. Carolina Macareno | Rehabilitadora Oral Medellín'
        : 'About Me — Dr. Carolina Macareno | Oral Rehabilitation Medellín',
      description: isEs
        ? 'Conoce a la Dra. Carolina Macareno, especialista en rehabilitación oral con 17+ años de experiencia y 3,500+ pacientes en Medellín, Colombia.'
        : 'Meet Dr. Carolina Macareno, oral rehabilitation specialist with 17+ years of experience and 3,500+ patients in Medellín, Colombia.',
      url: isEs ? `${BASE}/sobre-mi` : `${BASE}/en/sobre-mi`,
      siteName: 'Dra. Carolina Macareno',
      type: 'profile',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/images/dra-carolina-perfil.webp`, width: 1200, height: 1600, alt: 'Dra. Carolina Macareno' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'Sobre Mí — Dra. Carolina Macareno' : 'About Me — Dr. Carolina Macareno',
      description: isEs
        ? 'Especialista en rehabilitación oral con 17+ años de experiencia en Medellín.'
        : 'Oral rehabilitation specialist with 17+ years of experience in Medellín.',
      images: [`${BASE}/images/dra-carolina-perfil.webp`],
    },
  };
}

const timeline = [
  { year: '2002', event: 'Grado como Odontóloga — Universidad El Bosque, Bogotá' },
  { year: '2006', event: 'Diplomado en Odontología Estética' },
  { year: '2009', event: 'Posgrado en Rehabilitación Oral — Universidad CES, Medellín' },
  { year: '2014', event: 'Advances in Cosmetic Dentistry and Oral Rehabilitation — New York University, EEUU' },
  { year: '2015', event: 'Curso: Manejo del paciente edéntulo con atrofia severa mediante prótesis híbridas sobre implantes Nobel Biocare' },
  { year: '2015', event: 'Curso: Diseño de Sonrisa Digital y Fotografía Clínica' },
  { year: '2016', event: 'Curso: Manejo de Scanner Digital Intraoral 3Shape — Impresión digital y Rehabilitación Oral Digital' },
  { year: '2017', event: 'Curso Avanzado en Implantología — NEODENT / FACOP, Brasil' },
  { year: '2022', event: 'Curso Hands-on: Rehabilitación Digital en paciente edéntulo con implantes DioImplant' },
  { year: '2022', event: 'Curso Hands-on: Carillas en Resina Compuesta — Dr. Felipe Becerra' },
  { year: '2025', event: 'Publicación del libro "El poder de tu sonrisa" — Guía de transformación oral para pacientes y profesionales' },
];

const experiencia = [
  { year: '2002', period: '2002', event: 'Residente de Odontología — Hospital Naval de Cartagena' },
  { year: '2007', period: '2007 – 2009', event: 'Rehabilitadora Oral — Clínica Dentisalud' },
  { year: '2009', period: '2009 – 2015', event: 'Rehabilitadora Oral — Clínica Promta' },
  { year: '2011', period: '2011 – 2016', event: 'Fundadora y Rehabilitadora Oral — Top Dental Group' },
  { year: '2013', period: '2013 – 2017', event: 'Rehabilitadora Oral — Clínica Las Américas' },
  { year: '2016', period: '2016 – 2021', event: 'Fundadora y Rehabilitadora Oral — Clínica Sorytech' },
  { year: '2022', period: '2022 – Presente', event: 'Fundadora · Rehabilitadora Oral, Estética e Implantóloga — Clínica Privada Dra. Carolina Macareno' },
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

  const sobreMiFaqs = isEs ? [
    {
      question: '¿Cuál es la especialidad de la Dra. Carolina Macareno?',
      answer: 'La Dra. Carolina Macareno es Especialista en Rehabilitación Oral por la Universidad CES de Medellín, con formación complementaria en estética dental por New York University y en implantología por FACOP (Brasil). Trata casos integrales de implantes dentales, prótesis fija atornillada, All-on-4, All-on-6, implantes cigomáticos y diseño digital de sonrisa.',
    },
    {
      question: '¿Cuántos años de experiencia tiene la Dra. Macareno?',
      answer: 'Más de 17 años de práctica clínica continua desde 2002. Ha tratado más de 3,500 pacientes en Colombia y atiende regularmente pacientes internacionales de Estados Unidos, Panamá, Puerto Rico y Costa Rica. Es fundadora de su clínica privada en El Poblado, Medellín, desde 2022.',
    },
    {
      question: '¿Dónde se formó académicamente?',
      answer: 'Odontóloga graduada de la Universidad El Bosque (Bogotá, 2002), Especialista en Rehabilitación Oral de la Universidad CES (Medellín, 2009), formación avanzada en estética dental en New York University (2014), implantología en FACOP/NEODENT (Brasil, 2017) y rehabilitación digital con DioImplant (2022).',
    },
    {
      question: '¿Atiende pacientes internacionales?',
      answer: 'Sí. La Dra. Macareno atiende pacientes que viajan a Medellín desde Estados Unidos, Panamá, Puerto Rico, Costa Rica y otros países. Ofrece evaluaciones virtuales previas por WhatsApp o videollamada, planes de tratamiento adaptados al tiempo de estadía y coordinación con alojamiento en El Poblado.',
    },
    {
      question: '¿Cómo puedo agendar una consulta con la Dra. Carolina Macareno?',
      answer: 'Puedes agendar a través de WhatsApp al +57 316 397 5232, completar el formulario de contacto en dracarolinamacareno.com/contacto o llamar directamente al consultorio. La consulta de diagnóstico Sonrisa 360° incluye radiografía panorámica, escaneo digital 3D, limpieza profesional y plan de tratamiento personalizado.',
    },
  ] : [
    {
      question: 'What is Dr. Carolina Macareno\'s specialty?',
      answer: 'Dr. Carolina Macareno is a Specialist in Oral Rehabilitation from Universidad CES in Medellín, with complementary training in aesthetic dentistry at New York University and implantology at FACOP (Brazil). She treats comprehensive cases of dental implants, screw-retained fixed prosthetics, All-on-4, All-on-6, zygomatic implants and digital smile design.',
    },
    {
      question: 'How many years of experience does Dr. Macareno have?',
      answer: 'More than 17 years of continuous clinical practice since 2002. She has treated more than 3,500 patients in Colombia and regularly treats international patients from the United States, Panama, Puerto Rico and Costa Rica. She is the founder of her private clinic in El Poblado, Medellín, since 2022.',
    },
    {
      question: 'Where did she train academically?',
      answer: 'Dentist graduated from Universidad El Bosque (Bogotá, 2002), Specialist in Oral Rehabilitation from Universidad CES (Medellín, 2009), advanced training in aesthetic dentistry at New York University (2014), implantology at FACOP/NEODENT (Brazil, 2017) and digital rehabilitation with DioImplant (2022).',
    },
    {
      question: 'Does she treat international patients?',
      answer: 'Yes. Dr. Macareno treats patients traveling to Medellín from the United States, Panama, Puerto Rico, Costa Rica and other countries. She offers prior virtual evaluations via WhatsApp or video call, treatment plans adapted to the length of stay and coordination with accommodation in El Poblado.',
    },
    {
      question: 'How can I book an appointment with Dr. Carolina Macareno?',
      answer: 'You can book via WhatsApp at +57 316 397 5232, fill out the contact form at dracarolinamacareno.com/contacto or call the office directly. The Smile 360° diagnostic consultation includes panoramic X-ray, 3D digital scan, professional cleaning and a personalized treatment plan.',
    },
  ];

  return (
    <>
      <SchemaOrg schema={[personSchema(), breadcrumbSchema(breadcrumbs), faqSchema(sobreMiFaqs)]} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
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
            {/* Photo */}
            <AnimatedSection direction="right">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden">
                <Image
                  src="/images/dra-carolina-perfil.webp"
                  alt="Dra. Carolina Macareno - Especialista en Rehabilitación Oral, Medellín"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#070B14]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#C9A461] font-bold text-xl" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
                    Dra. Carolina Macareno
                  </p>
                  <p className="text-[#F5F5F0] text-sm">Rehabilitadora Oral · 17+ años</p>
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
                  ? 'Después de graduarme de la Universidad El Bosque en 2002, me instalé en Medellín — una ciudad que me enamoró desde el primer momento. Aquí construí mi práctica, desarrollé mi trayectoria en instituciones de prestigio y formé un equipo de especialistas comprometidos con la excelencia.'
                  : 'After graduating from Universidad El Bosque in 2002, I settled in Medellín — a city I fell in love with from the very first moment. Here I built my practice, developed my career at prestigious institutions, and formed a team of specialists committed to excellence.'}
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

      {/* Experiencia Clínica */}
      <section className="py-20 bg-[#070B14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
              {isEs ? 'Trayectoria Laboral' : 'Clinical Career'}
            </span>
            <h2
              className="text-3xl font-bold text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Experiencia Clínica' : 'Clinical Experience'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mt-6" />
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1F2937]" />
            <div className="space-y-6">
              {experiencia.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#111827] border border-[#C9A461]/30 flex items-center justify-center z-10 relative">
                        <span className="text-[#C9A461] font-bold text-xs">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#111827] border border-[#1F2937] rounded p-4 mt-3">
                      <span className="inline-block text-[#C9A461] text-xs font-medium tracking-wider uppercase mb-2 bg-[#C9A461]/10 px-2 py-0.5 rounded">
                        {item.period}
                      </span>
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
      <section className="py-16 bg-[#0D1321] border-t border-[#1F2937]">
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
