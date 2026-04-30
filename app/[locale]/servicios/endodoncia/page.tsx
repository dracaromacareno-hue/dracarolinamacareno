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
  const slug = 'endodoncia';

  return {
    title: isEs
      ? 'Endodoncia Medellín | Tratamiento de Conductos | Dra. Carolina Macareno'
      : 'Endodontics Medellín | Root Canal Treatment | Dr. Carolina Macareno',
    description: isEs
      ? 'Endodoncia y tratamiento de conductos en El Poblado, Medellín. Especialista integrado. Salva tu diente natural evitando la extracción. Diagnóstico digital.'
      : 'Endodontics and root canal treatment in El Poblado, Medellín. Integrated specialist. Save your natural tooth avoiding extraction. Digital diagnosis.',
    keywords: isEs
      ? ['endodoncia medellin', 'tratamiento de conductos medellin', 'endodoncia el poblado', 'endodoncista medellin', 'salvar diente medellin', 'endodoncia colombia']
      : ['endodontics medellin', 'root canal medellin', 'root canal treatment colombia', 'endodontist medellin el poblado'],
    openGraph: {
      title: isEs ? 'Endodoncia Medellín | Dra. Carolina Macareno' : 'Endodontics Medellín | Dr. Carolina Macareno',
      description: isEs ? 'Tratamiento de conductos en El Poblado, Medellín. Salva tu diente natural.' : 'Root canal treatment in El Poblado, Medellín. Save your natural tooth.',
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
    question: '¿Duele el tratamiento de conductos?',
    answer: 'Con la anestesia local adecuada, el tratamiento de conductos no debe doler durante el procedimiento. Es posible sentir algo de sensibilidad los días posteriores, que se maneja fácilmente con analgésicos. La tecnología moderna y el instrumental rotatorio hacen que el proceso sea mucho más cómodo que hace años.',
  },
  {
    question: '¿Cuántas citas necesito para una endodoncia?',
    answer: 'En la mayoría de los casos, la endodoncia se puede realizar en 1 a 2 citas. Los casos con infección activa o conductos muy curvos pueden requerir una cita adicional. Con tecnología de localización electrónica del ápice y limas rotatorias, el proceso es rápido y preciso.',
  },
  {
    question: '¿Es mejor extraer el diente que hacer endodoncia?',
    answer: 'Siempre que sea posible, conservar el diente natural es la mejor opción. Un diente natural con endodoncia exitosa puede durar toda la vida. La extracción implica luego la necesidad de un implante o prótesis para recuperar la función, lo cual tiene mayor costo y tiempo de tratamiento.',
  },
  {
    question: '¿Qué pasa si no me hago la endodoncia?',
    answer: 'Sin tratamiento, la infección del nervio dental se propaga al hueso y los tejidos circundantes, pudiendo generar abscesos, pérdida del diente y afectación de dientes vecinos. En casos graves, la infección puede volverse sistémica.',
  },
];

export default async function EndodonciaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : '/en' + path;
  const waLink = 'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20Endodoncia';

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Servicios' : 'Services', url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: isEs ? 'Endodoncia' : 'Endodontics', url: isEs ? `${BASE}/servicios/endodoncia` : `${BASE}/en/servicios/endodoncia` },
  ];

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/endodoncia` : `${BASE}/en/servicios/endodoncia`,
          name: isEs ? 'Endodoncia Medellín' : 'Endodontics Medellín',
          description: isEs ? 'Tratamiento de conductos para salvar dientes naturales en El Poblado, Medellín.' : 'Root canal treatment to save natural teeth in El Poblado, Medellín.',
          procedureName: isEs ? 'Endodoncia (Tratamiento de Conductos)' : 'Endodontics (Root Canal)',
        }),
        medicalServiceSchema({ name: isEs ? 'Endodoncia Medellín' : 'Endodontics Medellín', description: isEs ? 'Tratamiento de conductos para salvar dientes naturales en El Poblado, Medellín.' : 'Root canal treatment to save natural teeth in El Poblado, Medellín.', url: `${BASE}/servicios/endodoncia` }),
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
              <span style={{ color: '#C9A461' }}>{isEs ? 'Endodoncia' : 'Endodontics'}</span>
            </nav>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Atención Integral · Equipo de Especialistas' : 'Comprehensive Care · Specialist Team'}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Endodoncia' : 'Endodontics'}
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'Tratamiento de conductos para salvar dientes con infección o daño pulpar profundo. Nuestro especialista en endodoncia trabaja en equipo con la Dra. Macareno para una solución integral que preserva tu diente natural.'
                : 'Root canal treatment to save teeth with infection or deep pulp damage. Our endodontics specialist works in team with Dr. Macareno for a comprehensive solution that preserves your natural tooth.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Qué es la endodoncia?' : 'What is endodontics?'}
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'La endodoncia es la especialidad que trata el interior del diente — la pulpa y los conductos radiculares. Cuando la pulpa dental se infecta o inflama por caries profunda, trauma o grietas, el tratamiento de conductos elimina el tejido afectado, desinfecta el interior y sella el diente para preservarlo.'
                : 'Endodontics is the specialty that treats the inside of the tooth — the pulp and root canals. When the dental pulp becomes infected or inflamed due to deep decay, trauma or cracks, root canal treatment removes the affected tissue, disinfects the interior and seals the tooth to preserve it.'}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'Un diente tratado endodónticamente puede funcionar perfectamente durante décadas si se restaura adecuadamente con una corona de cerámica o zirconio. En nuestro consultorio, la endodoncia y la restauración final se coordinan en el mismo equipo.'
                : 'An endodontically treated tooth can function perfectly for decades if properly restored with a ceramic or zirconia crown. In our practice, endodontics and the final restoration are coordinated within the same team.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* QUIÉN NECESITA */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Quién necesita endodoncia?' : 'Who needs endodontics?'}
            </h2>
            <ul className="space-y-4">
              {(isEs ? [
                'Dolor dental intenso, espontáneo o al morder que no cede con analgésicos.',
                'Diente con caries muy profunda que ha llegado al nervio.',
                'Infección o absceso dental con inflamación visible.',
                'Diente oscurecido tras un golpe o trauma.',
                'Sensibilidad extrema al calor que persiste después de retirar el estímulo.',
                'Fractura dental profunda que compromete la pulpa.',
              ] : [
                'Intense dental pain, spontaneous or when biting that does not subside with painkillers.',
                'Tooth with very deep decay that has reached the nerve.',
                'Dental infection or abscess with visible swelling.',
                'Darkened tooth after a blow or trauma.',
                'Extreme sensitivity to heat that persists after removing the stimulus.',
                'Deep dental fracture that compromises the pulp.',
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
              { label: isEs ? 'Número de citas' : 'Number of visits', value: isEs ? '1 – 2 citas' : '1 – 2 visits', icon: '📅' },
              { label: isEs ? 'Duración por cita' : 'Duration per visit', value: isEs ? '60 – 90 minutos' : '60 – 90 minutes', icon: '⏱' },
              { label: isEs ? 'Resultado' : 'Result', value: isEs ? 'Diente conservado sin extracción' : 'Tooth preserved without extraction', icon: '🦷' },
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
              {isEs ? '¿Tienes dolor dental? Actúa hoy.' : 'Dental pain? Act today.'}
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              {isEs ? 'La endodoncia a tiempo salva tu diente y evita complicaciones mayores.' : 'Timely endodontics saves your tooth and avoids major complications.'}
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
