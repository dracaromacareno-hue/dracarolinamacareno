import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { medicalServiceSchema, faqSchema, breadcrumbSchema, medicalWebPageSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const BASE = 'https://dracarolinamacareno.com';
  const isEs = locale === 'es';
  const slug = 'periodoncia';

  return {
    title: isEs
      ? 'Periodoncia Medellín | Enfermedad de las Encías | Dra. Carolina Macareno'
      : 'Periodontics Medellín | Gum Disease Treatment | Dr. Carolina Macareno',
    description: isEs
      ? 'Tratamiento de enfermedad periodontal y encías en El Poblado, Medellín. Especialista integrado. Diagnóstico digital. Base esencial antes de implantes y rehabilitación oral.'
      : 'Periodontal disease and gum treatment in El Poblado, Medellín. Integrated specialist. Digital diagnosis. Essential foundation before implants and oral rehabilitation.',
    keywords: isEs
      ? ['periodoncia medellin', 'enfermedad periodontal medellin', 'tratamiento encias medellin', 'periodoncista medellin', 'encias medellin', 'periodoncia el poblado']
      : ['periodontics medellin', 'gum disease treatment medellin', 'periodontist medellin colombia', 'gum treatment el poblado'],
    openGraph: {
      title: isEs ? 'Periodoncia Medellín | Dra. Carolina Macareno' : 'Periodontics Medellín | Dr. Carolina Macareno',
      description: isEs ? 'Tratamiento de encías y enfermedad periodontal en El Poblado, Medellín.' : 'Gum and periodontal disease treatment in El Poblado, Medellín.',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      url: isEs ? `${BASE}/servicios/${slug}` : `${BASE}/en/servicios/${slug}`,
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: isEs ? `${BASE}/servicios/${slug}` : `${BASE}/en/servicios/${slug}`,
      languages: { es: `${BASE}/servicios/${slug}`, en: `${BASE}/en/servicios/${slug}` },
    },
  };
}

const faqs = [
  {
    question: '¿Cómo sé si tengo enfermedad periodontal?',
    answer: 'Los síntomas más comunes incluyen encías que sangran al cepillarse, encías inflamadas o enrojecidas, mal aliento persistente, dientes que se mueven o se sienten flojos, y encías que se han retraído dejando visible más diente. Ante cualquiera de estos signos, consulta a un especialista.',
  },
  {
    question: '¿La enfermedad de las encías tiene cura?',
    answer: 'La gingivitis (estadio temprano) es completamente reversible con tratamiento. La periodontitis (estadio avanzado) no tiene cura total, pero sí puede controlarse para detener su progresión y mantener los dientes por muchos años con controles periódicos.',
  },
  {
    question: '¿Puedo hacerme implantes si tengo enfermedad periodontal?',
    answer: 'No directamente. La enfermedad periodontal activa es una contraindicación para la colocación de implantes. Primero debe controlarse la periodontitis, y una vez que las encías estén sanas y estables, se puede proceder con el plan de implantes. Nuestro equipo coordina ambos tratamientos.',
  },
  {
    question: '¿La periodoncia duele?',
    answer: 'El raspado y alisado radicular (curetaje) se realiza con anestesia local, por lo que no se siente dolor durante el procedimiento. Es normal sentir sensibilidad los días posteriores. Los procedimientos más avanzados como cirugías periodontales también se realizan bajo anestesia.',
  },
];

export default async function PeriodonciaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : '/en' + path;
  const waLink = 'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20Periodoncia';

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Servicios' : 'Services', url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: isEs ? 'Periodoncia' : 'Periodontics', url: isEs ? `${BASE}/servicios/periodoncia` : `${BASE}/en/servicios/periodoncia` },
  ];

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/periodoncia` : `${BASE}/en/servicios/periodoncia`,
          name: isEs ? 'Periodoncia Medellín' : 'Periodontics Medellín',
          description: isEs ? 'Tratamiento de enfermedad periodontal y encías en El Poblado, Medellín.' : 'Periodontal disease and gum treatment in El Poblado, Medellín.',
          procedureName: isEs ? 'Tratamiento Periodontal y de Encías' : 'Periodontal and Gum Treatment',
        }),
        medicalServiceSchema({ name: isEs ? 'Periodoncia Medellín' : 'Periodontics Medellín', description: isEs ? 'Tratamiento de enfermedad periodontal y encías en El Poblado, Medellín.' : 'Periodontal disease and gum treatment in El Poblado, Medellín.', url: `${BASE}/servicios/periodoncia` }),
        faqSchema(faqs),
        breadcrumbSchema(breadcrumbs),
      ]} />

      {/* HERO */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="down" delay={0}>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#9CA3AF' }}>
              <Link href={localePath('/')} className="hover:text-[#C9A461] transition-colors">{isEs ? 'Inicio' : 'Home'}</Link>
              <span>/</span>
              <Link href={localePath('/servicios')} className="hover:text-[#C9A461] transition-colors">{isEs ? 'Servicios' : 'Services'}</Link>
              <span>/</span>
              <span style={{ color: '#C9A461' }}>{isEs ? 'Periodoncia' : 'Periodontics'}</span>
            </nav>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Atención Integral · Equipo de Especialistas' : 'Comprehensive Care · Specialist Team'}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Periodoncia' : 'Periodontics'}
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'Diagnóstico y tratamiento de la enfermedad de las encías y los tejidos de soporte dental. La salud periodontal es la base de cualquier rehabilitación oral exitosa y condición indispensable para la colocación de implantes.'
                : 'Diagnosis and treatment of gum disease and dental supporting tissues. Periodontal health is the foundation of any successful oral rehabilitation and an indispensable condition for implant placement.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Qué es la periodoncia?' : 'What is periodontics?'}
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'La periodoncia es la especialidad dental que se ocupa de las encías, el hueso alveolar y los tejidos que sostienen los dientes. La enfermedad periodontal — desde la gingivitis hasta la periodontitis avanzada — es la principal causa de pérdida dental en adultos.'
                : 'Periodontics is the dental specialty that deals with the gums, alveolar bone and tissues that support the teeth. Periodontal disease — from gingivitis to advanced periodontitis — is the leading cause of tooth loss in adults.'}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'En nuestro consultorio, el especialista en periodoncia trabaja de manera integrada con la Dra. Macareno, garantizando que antes de cualquier implante o rehabilitación oral completa, los tejidos de soporte estén en óptimas condiciones.'
                : 'In our practice, the periodontist works in an integrated way with Dr. Macareno, ensuring that before any implant or complete oral rehabilitation, the supporting tissues are in optimal condition.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* QUIÉN NECESITA */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Quién necesita periodoncia?' : 'Who needs periodontics?'}
            </h2>
            <ul className="space-y-4">
              {(isEs ? [
                'Encías que sangran al cepillar los dientes o usar hilo dental.',
                'Encías inflamadas, enrojecidas o con retracción visible.',
                'Mal aliento persistente que no mejora con higiene.',
                'Dientes que se sienten flojos o han cambiado de posición.',
                'Diagnóstico previo de periodontitis que requiere mantenimiento.',
                'Pacientes que requieren implantes dentales (la salud periodontal es prerequisito).',
              ] : [
                'Gums that bleed when brushing teeth or using dental floss.',
                'Inflamed, red or visibly receded gums.',
                'Persistent bad breath that does not improve with hygiene.',
                'Teeth that feel loose or have shifted position.',
                'Previous periodontitis diagnosis requiring maintenance.',
                'Patients requiring dental implants (periodontal health is a prerequisite).',
              ]).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>✓</span>
                  <span style={{ color: '#D1D5DB' }}>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="py-10 px-4" style={{ backgroundColor: '#111827', borderTop: '1px solid #1F2937', borderBottom: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: isEs ? 'Tratamiento inicial' : 'Initial treatment', value: isEs ? 'Raspado y alisado radicular' : 'Scaling and root planing', icon: '🦷' },
              { label: isEs ? 'Mantenimiento' : 'Maintenance', value: isEs ? 'Cada 3 – 6 meses' : 'Every 3 – 6 months', icon: '📅' },
              { label: isEs ? 'Requisito para' : 'Required for', value: isEs ? 'Implantes y rehabilitación' : 'Implants and rehabilitation', icon: '✅' },
            ].map((pill, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border" style={{ backgroundColor: '#0D1321', borderColor: '#1F2937' }}>
                <span className="text-2xl">{pill.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: '#9CA3AF' }}>{pill.label}</p>
                  <p className="font-semibold text-sm" style={{ color: '#C9A461' }}>{pill.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                  <h3 className="font-semibold text-base mb-3 flex items-start gap-2" style={{ color: '#E5B866' }}>
                    <span className="shrink-0 mt-0.5" style={{ color: '#C9A461' }}>▸</span>
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'La salud empieza en las encías' : 'Health starts with your gums'}
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              {isEs ? 'Agenda tu evaluación periodontal y asegura la base de tu sonrisa.' : 'Book your periodontal evaluation and secure the foundation of your smile.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.938l6.29-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.012-1.374l-.36-.213-3.733.978.995-3.629-.234-.373A9.778 9.778 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/></svg>
                {isEs ? 'Escribir por WhatsApp' : 'Write on WhatsApp'}
              </a>
              <Link href={localePath('/contacto')} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105" style={{ borderColor: '#C9A461', color: '#C9A461' }}>
                {isEs ? 'Ver página de contacto' : 'Contact page'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
