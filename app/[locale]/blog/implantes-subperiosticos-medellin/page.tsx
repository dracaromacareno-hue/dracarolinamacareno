import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { articleSchema, breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';

const faqs = [
  {
    q: '¿Cuál es la diferencia entre un implante subperióstico y uno cigomático?',
    a: 'Son dos soluciones distintas para cuando no hay hueso. El implante cigomático se ancla en el hueso del pómulo y solo sirve para el maxilar superior. El implante subperióstico se fabrica a medida y se apoya sobre el hueso, y puede usarse tanto en el maxilar superior como en la mandíbula. Cuál es el indicado depende de tu anatomía y se define con un diagnóstico 3D.',
  },
  {
    q: '¿Puedo tener implantes si me dijeron que no tengo hueso?',
    a: 'Sí. El implante subperióstico está diseñado precisamente para pacientes con reabsorción ósea severa a quienes les dijeron que "no tienen hueso" para implantes convencionales. Al apoyarse sobre el hueso en lugar de insertarse dentro de él, evita el injerto óseo y los meses de espera que este exige.',
  },
  {
    q: '¿El implante subperióstico necesita injerto de hueso?',
    a: 'No. Esa es su principal ventaja. En lugar de reconstruir el hueso perdido con un injerto (un proceso que puede tomar de 6 a 12 meses), el dispositivo se fabrica a la medida de tu anatomía y se fija sobre el hueso disponible, acortando el tratamiento de forma considerable.',
  },
  {
    q: '¿En cuánto tiempo tengo mis dientes con un implante subperióstico?',
    a: 'En muchos casos se coloca una prótesis provisional en la misma sesión quirúrgica o en las primeras 48 horas, por lo que el paciente sale con dientes fijos. El resultado estético definitivo se obtiene alrededor de los 3 a 4 meses, una vez estabilizado el implante.',
  },
  {
    q: '¿Es seguro el implante subperióstico y cuánto dura?',
    a: 'Es un procedimiento avanzado que exige planeación 3D precisa y experiencia quirúrgica. Realizado por un especialista, con fabricación personalizada y bajo sedación consciente supervisada por anestesiólogo, tiene tasas de integración documentadas superiores al 95%. Con buenos hábitos de higiene y controles, es una solución de largo plazo.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const slug = 'implantes-subperiosticos-medellin';

  return {
    title: isEs
      ? 'Implantes Subperiósticos en Medellín: Qué Son y Caso Real'
      : 'Subperiosteal Implants in Medellín: What They Are + Real Case',
    description: isEs
      ? 'Implantes subperiósticos a medida: la solución en Medellín cuando no hay hueso y el injerto no es viable. Qué son, vs cigomáticos, y un caso clínico real.'
      : 'Custom subperiosteal implants in Medellín: the solution when there is no bone and a graft is not viable. What they are, how they differ from zygomatic implants, and a real case step by step.',
    keywords: isEs
      ? ['implantes subperiósticos Medellín', 'implante subperióstico', 'implante sin injerto óseo', 'implante a medida sin hueso', 'reabsorción ósea implante', 'implante subperióstico vs cigomático', 'sedación consciente implante', 'implantología avanzada Medellín', 'Dra. Carolina Macareno']
      : ['subperiosteal implants Medellin', 'subperiosteal implant', 'implant without bone graft', 'custom implant no bone', 'subperiosteal vs zygomatic implant'],
    openGraph: {
      title: isEs ? 'Caso Clínico Real: Implante Subperióstico | Dra. Carolina Macareno' : 'Real Clinical Case: Subperiosteal Implant',
      description: isEs ? 'Cirugía documentada paso a paso: implante subperióstico sin injerto en Medellín.' : 'Step-by-step documented surgery: subperiosteal implant without bone graft in Medellín.',
      type: 'article',
      locale: isEs ? 'es_CO' : 'en_US',
      url: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`,
      images: [{ url: `${BASE}/images/caso-clinico-subperiostico-intraoral.webp`, width: 1800, height: 1350 }],
    },
    alternates: {
      canonical: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`,
      languages: { es: `${BASE}/blog/${slug}`, en: `${BASE}/en/blog/${slug}` },
    },
  };
}

const steps = [
  {
    number: '01',
    title: 'Consulta y Diagnóstico',
    label: 'EVALUACIÓN INICIAL',
    content: 'Paciente de 67 años con edentulismo parcial mandibular y reabsorción ósea severa. Radiografías panorámicas y tomografía cone beam confirmaron que el hueso residual era insuficiente para implantes convencionales y que un injerto óseo no era viable por la edad y condición sistémica del paciente.',
    highlight: 'Diagnóstico: candidato ideal para implante subperióstico',
  },
  {
    number: '02',
    title: 'Planeación Digital 3D',
    label: 'DISEÑO A MEDIDA',
    content: 'A partir del CBCT (tomografía computarizada cone beam), se diseñó digitalmente el implante subperióstico. El dispositivo de titanio se fabrica completamente personalizado para adaptarse a la anatomía única de la mandíbula del paciente. Ningún implante subperióstico es igual a otro.',
    highlight: 'Fabricación personalizada en 7-10 días hábiles',
    image: '/images/planeacion-implante-subperiostico-3d.webp',
    imageAlt: 'Planeación digital 3D del implante subperióstico sobre mandíbula',
  },
  {
    number: '03',
    title: 'Preparación: Sedación Consciente',
    label: 'ANESTESIA Y CONFORT',
    content: 'El procedimiento se realizó con sedación consciente supervisada por anestesiólogo. El paciente permanece relajado, sin dolor, y cooperador durante toda la cirugía. Esta modalidad es ideal para procedimientos complejos: elimina la ansiedad, mejora la experiencia del paciente y permite mayor precisión al equipo quirúrgico.',
    highlight: 'Anestesiólogo presente durante toda la cirugía',
  },
  {
    number: '04',
    title: 'Colocación del Implante',
    label: 'CIRUGÍA',
    content: 'Bajo campo quirúrgico estéril y sedación consciente, se realiza la incisión y se expone el hueso mandibular. El implante subperióstico, ya fabricado a medida, se posiciona directamente sobre el hueso y se fija con tornillos de titanio. Los postes de emergencia quedan listos para recibir la prótesis.',
    highlight: 'Tiempo quirúrgico: 90-120 minutos',
    image: '/images/caso-clinico-subperiostico-intraoral.webp',
    imageAlt: 'Vista intraoral durante colocación del implante subperióstico',
  },
  {
    number: '05',
    title: 'Resultado Postquirúrgico',
    label: 'PROVISIONALIZACIÓN',
    content: 'Al cierre de la herida quirúrgica, los postes del implante emergen a través de la encía, listos para recibir la prótesis provisional en la misma sesión o en las primeras 48 horas. El paciente sale del consultorio con sus dientes. El resultado estético definitivo se obtiene a los 3-4 meses.',
    highlight: 'Dientes provisionales el mismo día',
    image: '/images/caso-clinico-subperiostico-postqx.webp',
    imageAlt: 'Vista postquirúrgica, postes del implante subperióstico emergentes',
  },
];

export default async function CasoClinicoSubperiostico({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localePath = (path: string) => locale === 'es' ? path : '/en' + path;
  const BASE = 'https://dracarolinamacareno.com';
  const slug = 'implantes-subperiosticos-medellin';

  const breadcrumbs = [
    { name: 'Inicio', url: locale === 'es' ? BASE : `${BASE}/en` },
    { name: 'Blog', url: locale === 'es' ? `${BASE}/blog` : `${BASE}/en/blog` },
    { name: 'Implantes Subperiósticos en Medellín', url: `${BASE}/blog/${slug}` },
  ];

  return (
    <main style={{ backgroundColor: '#FCFBF9' }} className="min-h-screen">
      <SchemaOrg schema={[
        breadcrumbSchema(breadcrumbs),
        articleSchema({
          title: 'Implantes Subperiósticos en Medellín: Qué Son y Caso Real',
          description: 'Documentación completa de cirugía de implante subperióstico en paciente con reabsorción ósea severa. Paso a paso con sedación consciente.',
          url: `${BASE}/blog/${slug}`,
          publishDate: '2025-04-10',
          image: `${BASE}/images/caso-clinico-subperiostico-intraoral.webp`,
        }),
        faqSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
      ]} />

      {/* Hero */}
      <section className="pt-32 pb-0" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#77726A' }}>
            <Link href={localePath('/')} className="hover:text-[#8A6B2E] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href={localePath('/blog')} className="hover:text-[#8A6B2E] transition-colors">Blog</Link>
            <span>/</span>
            <span style={{ color: '#C9A461' }}>Caso Clínico</span>
          </nav>

          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border" style={{ color: '#C9A461', borderColor: '#C9A461', background: 'rgba(201,164,97,0.08)' }}>
                CASO CLÍNICO REAL
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border" style={{ color: '#77726A', borderColor: '#E8E3DA' }}>
                IMPLANTOLOGÍA AVANZADA
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border" style={{ color: '#77726A', borderColor: '#E8E3DA' }}>
                SEDACIÓN CONSCIENTE
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Implantes Subperiósticos en Medellín:<br />
              <span style={{ color: '#C9A461' }}>dientes fijos sin injerto óseo</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#77726A' }}>
              Cuando el hueso no es suficiente para implantes convencionales, existe una alternativa precisa y definitiva. Aquí te explico qué es un implante subperióstico, en qué se diferencia de un cigomático y cuándo se indica, y te muestro un caso real documentado paso a paso en nuestra clínica en El Poblado, Medellín.
            </p>

            <div className="flex items-center gap-4 pb-8 border-b" style={{ borderColor: '#E8E3DA' }}>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 flex-shrink-0" style={{ borderColor: '#C9A461' }}>
                <Image
                  src="/images/dra-carolina-perfil.webp"
                  alt="Dra. Carolina Macareno"
                  width={40}
                  height={40}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#211E18' }}>Dra. Carolina Macareno</p>
                <p className="text-xs" style={{ color: '#77726A' }}>Rehabilitadora Oral · Implantóloga · 17+ años de experiencia</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs" style={{ color: '#77726A' }}>Medellín, Colombia</p>
                <p className="text-xs" style={{ color: '#77726A' }}>2025</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Hero image */}
        <div className="max-w-5xl mx-auto px-4 mt-8">
          <AnimatedSection>
            <div className="relative aspect-[16/7] rounded-xl overflow-hidden">
              <Image
                src="/images/caso-clinico-subperiostico-intraoral.webp"
                alt="Cirugía de implante subperióstico, vista intraoral"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.6) 0%, transparent 60%)' }} />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-medium tracking-wider uppercase" style={{ color: '#C9A461' }}>
                  Fotografía intraoperatoria, Clínica Dra. Carolina Macareno
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Educational body */}
      <section className="py-14 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              ¿Qué es un implante subperióstico?
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: '#77726A' }}>
              Un implante subperióstico es un dispositivo de titanio fabricado a la medida de tu hueso que, en lugar de insertarse dentro del hueso como un implante convencional, se apoya sobre la superficie del hueso, por debajo del periostio (la membrana que lo recubre). Se diseña de forma personalizada a partir de una tomografía 3D, por lo que ningún implante subperióstico es igual a otro. Es la opción indicada cuando la reabsorción ósea es tan severa que ya no queda dónde anclar un implante tradicional y un injerto no es viable o el paciente no quiere pasar por meses de espera.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Subperióstico y cigomático no son lo mismo
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: '#77726A' }}>
              Es una confusión frecuente, pero son dos soluciones distintas para "no tengo hueso". El implante cigomático se ancla en el hueso del pómulo y es exclusivo del maxilar superior. El implante subperióstico se apoya sobre el hueso, se fabrica a medida y sirve tanto para el maxilar superior como para la mandíbula (maxilar inferior), donde el cigomático no aplica. Cuál es el indicado para ti depende de tu anatomía, y eso solo se define con una valoración y diagnóstico 3D.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl border p-5" style={{ borderColor: '#E8E3DA', backgroundColor: '#FFFFFF' }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#C9A461' }}>Subperióstico</p>
                <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>Se apoya sobre el hueso, a medida. Sirve para maxilar superior e inferior. Ideal cuando no hay hueso y el injerto no es una opción.</p>
              </div>
              <div className="rounded-xl border p-5" style={{ borderColor: '#E8E3DA', backgroundColor: '#FFFFFF' }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#C9A461' }}>Cigomático</p>
                <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>Se ancla en el hueso del pómulo. Solo maxilar superior. Puedes ver la <Link href={localePath('/servicios/implantes-cigomaticos')} className="underline" style={{ color: '#C9A461' }}>página de implantes cigomáticos</Link>.</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              ¿Quién es candidato?
            </h2>
            <ul className="space-y-3 mb-2">
              {[
                'Te dijeron que "no tienes hueso suficiente" para implantes convencionales.',
                'Tienes reabsorción ósea severa en el maxilar o en la mandíbula.',
                'Un injerto óseo no es viable por tu edad, condición sistémica o porque no quieres esperar meses.',
                'Llevas años con una prótesis removible que se mueve y quieres dientes fijos.',
                'Tuviste injertos o implantes previos que no funcionaron.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base leading-relaxed" style={{ color: '#77726A' }}>
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="#C9A461" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-12 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="rounded-xl border border-[#C9A461]/30 overflow-hidden" style={{ background: 'rgba(201,164,97,0.04)' }}>
              <div className="aspect-video flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,164,97,0.15)', border: '2px solid rgba(201,164,97,0.4)' }}>
                  <svg className="w-7 h-7 ml-1" fill="#C9A461" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-semibold mb-1" style={{ color: '#211E18' }}>Video de la cirugía completa, próximamente</p>
                  <p className="text-sm" style={{ color: '#77726A' }}>
                    Desde la sedación consciente con anestesiólogo hasta la provisionalización.<br />
                    El proceso completo documentado en video.
                  </p>
                </div>
                <WhatsAppLink
                  message="Hola, me interesa saber más sobre el implante subperióstico"
                  locale={locale as 'es' | 'en'}
                  trackingLabel="subperiostico_inline"
                  className="text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded transition-colors bg-[#C9A461] text-[#070B14]"
                >
                  Consultar por WhatsApp mientras tanto
                </WhatsAppLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Step by step */}
      <section className="py-4 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              El procedimiento paso a paso
            </h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: '#C9A461' }} />
          </AnimatedSection>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={0.1}>
                <div className={`grid grid-cols-1 ${step.image ? 'lg:grid-cols-2' : ''} gap-8 items-center`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: 'rgba(201,164,97,0.2)', fontFamily: 'var(--font-playfair-display, serif)', lineHeight: 1 }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <span className="text-xs font-semibold tracking-widest uppercase block" style={{ color: '#C9A461' }}>
                          {step.label}
                        </span>
                        <h3 className="text-xl font-bold" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#77726A' }}>
                      {step.content}
                    </p>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg" style={{ backgroundColor: 'rgba(201,164,97,0.08)', border: '1px solid rgba(201,164,97,0.2)' }}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="#C9A461" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium" style={{ color: '#C9A461' }}>{step.highlight}</span>
                    </div>
                  </div>

                  {step.image && (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border" style={{ borderColor: '#E8E3DA' }}>
                      <Image
                        src={step.image}
                        alt={step.imageAlt!}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-16 w-px h-8 mx-auto" style={{ backgroundColor: 'rgba(201,164,97,0.2)' }} />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key facts bar */}
      <section className="py-10 px-4 mt-8" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #1F2937', borderBottom: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '90–120', unit: 'min', label: 'Tiempo quirúrgico' },
            { value: '0', unit: 'injertos', label: 'Sin injerto óseo' },
            { value: '1', unit: 'sesión', label: 'Provisionalización' },
            { value: '97%+', unit: 'éxito', label: 'Tasa de integración' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>
                {stat.value}
                <span className="text-sm font-normal ml-1" style={{ color: '#77726A' }}>{stat.unit}</span>
              </p>
              <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: '#77726A' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Preguntas frecuentes
            </h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: '#C9A461' }} />
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={0.05}>
                <div className="rounded-xl border p-6" style={{ borderColor: '#E8E3DA', backgroundColor: '#FFFFFF' }}>
                  <h3 className="text-base md:text-lg font-semibold mb-2 flex items-start gap-2" style={{ color: '#211E18' }}>
                    <span className="shrink-0 mt-0.5" style={{ color: '#C9A461' }}>▸</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5A5449' }}>{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              ¿Crees que podrías ser candidato?
            </h2>
            <p className="mb-8" style={{ color: '#77726A' }}>
              Si te han dicho que "no tienes hueso suficiente" para implantes, agenda una consulta. El implante subperióstico puede ser tu solución.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message="Hola, vi el caso clínico del implante subperióstico y me interesa una consulta"
                locale={locale as 'es' | 'en'}
                trackingLabel="subperiostico_cta"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded text-sm tracking-wider uppercase transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar consulta de diagnóstico
              </WhatsAppLink>
              <Link
                href={localePath('/servicios/implantes-dentales')}
                className="inline-flex items-center justify-center gap-2 border font-medium px-8 py-4 rounded text-sm tracking-wider uppercase transition-all"
                style={{ borderColor: 'rgba(201,164,97,0.4)', color: '#211E18' }}
              >
                Ver todos los tipos de implantes
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
