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
  const slug = 'cirugia-maxilofacial';

  return {
    title: isEs
      ? 'Cirugía Maxilofacial Medellín | Extracción y Cirugía Oral | Dra. Carolina Macareno'
      : 'Maxillofacial Surgery Medellín | Oral Surgery | Dr. Carolina Macareno',
    description: isEs
      ? 'Cirugía maxilofacial en El Poblado, Medellín. Extracción de terceros molares, cirugía ortognática y procedimientos orales complejos. Especialista integrado en nuestro equipo.'
      : 'Maxillofacial surgery in El Poblado, Medellín. Third molar extraction, orthognathic surgery and complex oral procedures. Integrated specialist in our team.',
    keywords: isEs
      ? ['cirugia maxilofacial medellin', 'extraccion muelas del juicio medellin', 'cirugia oral medellin', 'cirujano maxilofacial medellin', 'cirugia ortognatica medellin', 'extraccion diente medellin']
      : ['maxillofacial surgery medellin', 'wisdom tooth extraction medellin', 'oral surgery medellin colombia', 'maxillofacial surgeon medellin'],
    openGraph: {
      title: isEs ? 'Cirugía Maxilofacial Medellín | Dra. Carolina Macareno' : 'Maxillofacial Surgery Medellín | Dr. Carolina Macareno',
      description: isEs ? 'Cirugía oral y maxilofacial en El Poblado, Medellín. Especialista integrado.' : 'Oral and maxillofacial surgery in El Poblado, Medellín. Integrated specialist.',
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
    question: '¿Es necesario extraer las muelas del juicio?',
    answer: 'No siempre. Las muelas del juicio deben extraerse cuando no tienen espacio suficiente para erupcionar correctamente (impactadas), cuando generan dolor, infecciones recurrentes, daño en el diente vecino o quistes. Si están bien posicionadas y no generan problemas, pueden conservarse.',
  },
  {
    question: '¿Qué es la cirugía ortognática?',
    answer: 'Es una cirugía que reposiciona los huesos del maxilar superior y/o la mandíbula para corregir discrepancias esqueléticas que no pueden resolverse solo con ortodoncia. Mejora la función masticatoria, el perfil facial y puede aliviar problemas de apnea del sueño.',
  },
  {
    question: '¿Cuánto tiempo dura la recuperación de una cirugía oral?',
    answer: 'Depende del procedimiento. Una extracción simple requiere 2-3 días de recuperación. Una extracción quirúrgica de muela del juicio impactada, 5-7 días. La cirugía ortognática puede requerir 2-4 semanas de recuperación inicial y meses de seguimiento.',
  },
  {
    question: '¿La cirugía maxilofacial se hace con anestesia general?',
    answer: 'Depende del procedimiento. Las extracciones simples y procedimientos menores se realizan con anestesia local. Los procedimientos más complejos como cirugía ortognática o múltiples extracciones se realizan con sedación consciente o anestesia general con anestesiólogo.',
  },
];

export default async function CirugiaMaxilofacialPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : '/en' + path;
  const waLink = 'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20Cirugía%20Maxilofacial';

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Servicios' : 'Services', url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: isEs ? 'Cirugía Maxilofacial' : 'Maxillofacial Surgery', url: isEs ? `${BASE}/servicios/cirugia-maxilofacial` : `${BASE}/en/servicios/cirugia-maxilofacial` },
  ];

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/cirugia-maxilofacial` : `${BASE}/en/servicios/cirugia-maxilofacial`,
          name: isEs ? 'Cirugía Maxilofacial Medellín' : 'Maxillofacial Surgery Medellín',
          description: isEs ? 'Cirugía oral y maxilofacial en El Poblado, Medellín.' : 'Oral and maxillofacial surgery in El Poblado, Medellín.',
          procedureName: isEs ? 'Cirugía Oral y Maxilofacial' : 'Oral and Maxillofacial Surgery',
        }),
        medicalServiceSchema({ name: isEs ? 'Cirugía Maxilofacial Medellín' : 'Maxillofacial Surgery Medellín', description: isEs ? 'Cirugía oral y maxilofacial en El Poblado, Medellín.' : 'Oral and maxillofacial surgery in El Poblado, Medellín.', url: `${BASE}/servicios/cirugia-maxilofacial` }),
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
              <span style={{ color: '#C9A461' }}>{isEs ? 'Cirugía Maxilofacial' : 'Maxillofacial Surgery'}</span>
            </nav>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Atención Integral · Equipo de Especialistas' : 'Comprehensive Care · Specialist Team'}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Cirugía Maxilofacial' : 'Maxillofacial Surgery'}
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'Procedimientos quirúrgicos orales y maxilofaciales realizados por especialista integrado en nuestro equipo. Desde extracciones de terceros molares hasta cirugía ortognática, coordinados con el plan de rehabilitación de la Dra. Macareno.'
                : 'Oral and maxillofacial surgical procedures performed by a specialist integrated in our team. From third molar extractions to orthognathic surgery, coordinated with Dr. Macareno\'s rehabilitation plan.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCEDIMIENTOS */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Procedimientos disponibles' : 'Available procedures'}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: isEs ? 'Extracción de Terceros Molares' : 'Third Molar Extraction',
                desc: isEs ? 'Extracción de muelas del juicio impactadas o semierupcionadas. Procedimiento ambulatorio con anestesia local o sedación según complejidad.' : 'Extraction of impacted or semi-erupted wisdom teeth. Outpatient procedure with local anesthesia or sedation based on complexity.',
                badge: isEs ? 'Más común' : 'Most common',
              },
              {
                title: isEs ? 'Cirugía Ortognática' : 'Orthognathic Surgery',
                desc: isEs ? 'Corrección de discrepancias esqueléticas de los maxilares. Mejora la función masticatoria, estética facial y puede resolver problemas de apnea del sueño.' : 'Correction of skeletal jaw discrepancies. Improves masticatory function, facial aesthetics and can resolve sleep apnea problems.',
                badge: isEs ? 'Transformadora' : 'Transformative',
              },
              {
                title: isEs ? 'Exodoncias Complejas' : 'Complex Extractions',
                desc: isEs ? 'Extracciones de dientes retenidos, anquilosados o con anatomía radicular compleja que requieren abordaje quirúrgico.' : 'Extractions of retained, ankylosed or complex root anatomy teeth requiring surgical approach.',
                badge: isEs ? 'Especializada' : 'Specialized',
              },
              {
                title: isEs ? 'Procedimientos Previos a Implantes' : 'Pre-implant Procedures',
                desc: isEs ? 'Injertos óseos, elevación de seno maxilar y otros procedimientos para preparar el terreno ideal antes de la colocación de implantes.' : 'Bone grafts, sinus lift and other procedures to prepare the ideal terrain before implant placement.',
                badge: isEs ? 'Preparatoria' : 'Preparatory',
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
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Quién necesita cirugía oral o maxilofacial?' : 'Who needs oral or maxillofacial surgery?'}
            </h2>
            <ul className="space-y-4">
              {(isEs ? [
                'Muelas del juicio impactadas que generan dolor o infección.',
                'Discrepancia entre el tamaño de los maxilares (mandíbula muy prominente o retruída).',
                'Necesidad de injerto óseo previo a la colocación de implantes.',
                'Fractura dental o lesiones traumáticas que requieren intervención quirúrgica.',
                'Quistes o tumores odontogénicos benignos.',
                'Preparación para tratamiento de ortodoncia combinado con cirugía.',
              ] : [
                'Impacted wisdom teeth causing pain or infection.',
                'Jaw size discrepancy (very prominent or retruded mandible).',
                'Need for bone graft prior to implant placement.',
                'Dental fracture or traumatic injuries requiring surgical intervention.',
                'Benign odontogenic cysts or tumors.',
                'Preparation for combined orthodontic and surgical treatment.',
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

      {/* FAQs */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
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
      <section className="py-20 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Necesitas una evaluación quirúrgica?' : 'Need a surgical evaluation?'}
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              {isEs ? 'Nuestro especialista en cirugía maxilofacial te evalúa y define el plan más apropiado.' : 'Our maxillofacial surgery specialist evaluates you and defines the most appropriate plan.'}
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
