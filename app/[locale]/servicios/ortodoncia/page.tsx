import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { medicalServiceSchema, faqSchema, breadcrumbSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const BASE = 'https://dracarolinamacareno.com';
  const isEs = locale === 'es';
  const slug = 'ortodoncia';

  return {
    title: isEs
      ? 'Ortodoncia Medellín | Brackets e Invisalign | Dra. Carolina Macareno'
      : 'Orthodontics Medellín | Braces & Invisalign | Dr. Carolina Macareno',
    description: isEs
      ? 'Ortodoncia con brackets metálicos, cerámicos e Invisalign en El Poblado, Medellín. Especialista integrado en nuestro equipo. Diagnóstico con escáner intraoral digital.'
      : 'Orthodontics with metal brackets, ceramic and Invisalign in El Poblado, Medellín. Integrated specialist in our team. Diagnosis with digital intraoral scanner.',
    keywords: isEs
      ? ['ortodoncia medellin', 'brackets medellin', 'invisalign medellin', 'ortodoncia el poblado', 'ortodoncia colombia', 'ortodoncia adultos medellin', 'ortodoncia invisible medellin']
      : ['orthodontics medellin', 'braces medellin', 'invisalign medellin', 'orthodontist el poblado colombia', 'dental tourism orthodontics colombia'],
    openGraph: {
      title: isEs ? 'Ortodoncia Medellín | Dra. Carolina Macareno' : 'Orthodontics Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Brackets e Invisalign en El Poblado, Medellín. Especialista integrado en nuestro consultorio.'
        : 'Braces and Invisalign in El Poblado, Medellín. Integrated specialist in our practice.',
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
    question: '¿A qué edad es ideal iniciar ortodoncia?',
    answer: 'La ortodoncia puede realizarse a cualquier edad. En niños se recomienda una evaluación desde los 7 años para detectar problemas tempranos. En adultos no hay límite de edad, siempre que la salud periodontal sea adecuada.',
  },
  {
    question: '¿Cuánto dura el tratamiento de ortodoncia?',
    answer: 'El tiempo varía entre 12 y 36 meses dependiendo de la complejidad del caso. Los casos leves con Invisalign pueden resolverse en 6-12 meses. El especialista definirá el tiempo exacto tras el diagnóstico.',
  },
  {
    question: '¿Invisalign duele menos que los brackets?',
    answer: 'Invisalign genera menos molestias en general ya que no tiene partes metálicas que irriten los tejidos. Sin embargo, ambos sistemas generan presión en los primeros días de cada cambio de alineador o ajuste.',
  },
  {
    question: '¿Puedo hacerme ortodoncia si necesito implantes?',
    answer: 'Sí, y muchas veces es necesario hacerlo en ese orden. La ortodoncia puede crear el espacio ideal para la colocación posterior del implante. Nuestro equipo integrado coordina ambos tratamientos de forma simultánea.',
  },
];

export default async function OrtodonciaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : '/en' + path;
  const waLink = 'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20Ortodoncia';

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Servicios' : 'Services', url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: isEs ? 'Ortodoncia' : 'Orthodontics', url: isEs ? `${BASE}/servicios/ortodoncia` : `${BASE}/en/servicios/ortodoncia` },
  ];

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalServiceSchema({ name: isEs ? 'Ortodoncia Medellín' : 'Orthodontics Medellín', description: isEs ? 'Tratamiento de ortodoncia con brackets e Invisalign en El Poblado, Medellín.' : 'Orthodontic treatment with braces and Invisalign in El Poblado, Medellín.', url: `${BASE}/servicios/ortodoncia` }),
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
              <span style={{ color: '#C9A461' }}>{isEs ? 'Ortodoncia' : 'Orthodontics'}</span>
            </nav>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Atención Integral · Equipo de Especialistas' : 'Comprehensive Care · Specialist Team'}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Ortodoncia' : 'Orthodontics'}
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'Alineación dental con brackets metálicos, cerámicos o alineadores invisibles (Invisalign). Tratamiento coordinado con nuestro equipo de rehabilitación para resultados integrales y duraderos.'
                : 'Dental alignment with metal brackets, ceramic or invisible aligners (Invisalign). Treatment coordinated with our rehabilitation team for comprehensive and lasting results.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Qué es la ortodoncia?' : 'What is orthodontics?'}
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'La ortodoncia es la especialidad dental que corrige la posición de los dientes y la relación entre los maxilares. Mediante brackets, alambres o alineadores transparentes, se aplica una fuerza progresiva para mover los dientes hacia su posición ideal.'
                : 'Orthodontics is the dental specialty that corrects tooth position and the relationship between the jaws. Through brackets, wires or clear aligners, progressive force is applied to move teeth to their ideal position.'}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'En nuestro consultorio, el tratamiento de ortodoncia está completamente integrado con los planes de rehabilitación oral, implantes y estética dental, garantizando una planificación coordinada entre especialistas.'
                : 'In our practice, orthodontic treatment is fully integrated with oral rehabilitation, implant and dental aesthetic plans, ensuring coordinated planning between specialists.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* OPCIONES */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Modalidades de tratamiento' : 'Treatment options'}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: isEs ? 'Brackets Metálicos' : 'Metal Braces',
                desc: isEs ? 'La opción más eficiente para casos complejos. Alta durabilidad y control preciso del movimiento dental.' : 'The most efficient option for complex cases. High durability and precise control of tooth movement.',
                badge: isEs ? 'Mayor control' : 'Maximum control',
              },
              {
                title: isEs ? 'Brackets Cerámicos' : 'Ceramic Braces',
                desc: isEs ? 'Misma eficacia que los metálicos con aspecto más discreto. Ideales para adultos que buscan una opción estética.' : 'Same efficacy as metal with a more discreet appearance. Ideal for adults seeking an aesthetic option.',
                badge: isEs ? 'Estético' : 'Aesthetic',
              },
              {
                title: 'Invisalign',
                desc: isEs ? 'Alineadores removibles transparentes. Mayor comodidad, sin restricciones alimentarias y prácticamente invisibles.' : 'Removable clear aligners. Greater comfort, no food restrictions and virtually invisible.',
                badge: isEs ? 'Invisible' : 'Invisible',
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                  <span className="text-xs font-semibold px-2 py-1 rounded tracking-wide uppercase mb-4 inline-block" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>
                    {card.badge}
                  </span>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#9CA3AF' }}>{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* QUIÉN NECESITA */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Quién necesita ortodoncia?' : 'Who needs orthodontics?'}
            </h2>
            <ul className="space-y-4">
              {(isEs ? [
                'Dientes apiñados, torcidos o con espacios entre ellos.',
                'Mordida cruzada, abierta o profunda.',
                'Mandíbula desplazada que genera desgaste dental o dolor articular.',
                'Preparación para implantes dentales (creación de espacio).',
                'Recidiva de ortodoncia previa que requiere corrección.',
                'Pacientes adultos que nunca realizaron tratamiento de ortodoncia.',
              ] : [
                'Crowded, crooked or spaced teeth.',
                'Crossbite, open bite or deep bite.',
                'Displaced jaw causing tooth wear or joint pain.',
                'Preparation for dental implants (space creation).',
                'Relapse of previous orthodontics requiring correction.',
                'Adults who never had orthodontic treatment.',
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
              { label: isEs ? 'Duración del tratamiento' : 'Treatment duration', value: isEs ? '12 – 36 meses' : '12 – 36 months', icon: '⏱' },
              { label: isEs ? 'Modalidades disponibles' : 'Available options', value: isEs ? 'Metálicos, cerámicos, Invisalign' : 'Metal, ceramic, Invisalign', icon: '🦷' },
              { label: isEs ? 'Primera consulta' : 'First consultation', value: isEs ? 'Diagnóstico digital incluido' : 'Digital diagnosis included', icon: '📋' },
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
              {isEs ? '¿Listo para alinear tu sonrisa?' : 'Ready to align your smile?'}
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              {isEs ? 'Agenda tu consulta de diagnóstico con nuestro especialista en ortodoncia.' : 'Book your diagnostic consultation with our orthodontics specialist.'}
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
