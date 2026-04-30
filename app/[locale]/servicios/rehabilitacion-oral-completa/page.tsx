import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { medicalServiceSchema, breadcrumbSchema, localBusinessSchema, faqSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const BASE = 'https://dracarolinamacareno.com';
  const isEs = locale === 'es';
  const slug = 'rehabilitacion-oral-completa';

  return {
    title: isEs
      ? 'Rehabilitación Oral Completa Medellín | All-on-4 y All-on-6 | Dra. Carolina'
      : 'Full Mouth Rehabilitation Medellín | All-on-4 & All-on-6 | Dr. Carolina',
    description: isEs
      ? 'Rehabilitación oral completa con All-on-4 y All-on-6 en Medellín. Dientes fijos en 1 día. Sin injerto óseo con implantes cigomáticos. El Poblado.'
      : 'Full mouth rehabilitation with All-on-4 and All-on-6 in Medellín. Fixed teeth in 1 day. No bone graft with zygomatic implants. El Poblado.',
    keywords: isEs
      ? [
          'rehabilitación oral completa Medellín',
          'All-on-4 Medellín',
          'All-on-6 Medellín',
          'dientes en un día Medellín',
          'implantes cigomáticos sin injerto',
          'reconstrucción oral total',
          'boca completa implantes',
          'carga inmediata implantes',
          'prótesis híbrida Medellín',
          'Dra. Carolina Macareno',
          'El Poblado rehabilitación oral',
        ]
      : [
          'full mouth rehabilitation Medellin',
          'All-on-4 Medellin',
          'All-on-6 Colombia',
          'teeth in a day Medellin',
          'zygomatic implants no graft',
          'immediate load implants',
        ],
    openGraph: {
      title: isEs
        ? 'Rehabilitación Oral Completa Medellín | Dra. Carolina Macareno'
        : 'Full Mouth Rehabilitation Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'All-on-4, All-on-6 e implantes cigomáticos en El Poblado, Medellín. Dientes fijos en 1 día, sin injerto óseo.'
        : 'All-on-4, All-on-6 and zygomatic implants in El Poblado, Medellín. Fixed teeth in 1 day, no bone graft.',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      url: isEs ? `${BASE}/servicios/${slug}` : `${BASE}/en/servicios/${slug}`,
    },
    alternates: {
      canonical: isEs
        ? `${BASE}/servicios/${slug}`
        : `${BASE}/en/servicios/${slug}`,
      languages: {
        es: `${BASE}/servicios/${slug}`,
        en: `${BASE}/en/servicios/${slug}`,
      },
    },
  };
}

const faqs = [
  {
    q: '¿Se puede tener dientes el mismo día de la cirugía?',
    a: 'Sí. Con la técnica All-on-4 o All-on-6 es posible colocar una prótesis provisional inmediata el mismo día de la cirugía de implantes (carga inmediata). Esta prótesis es funcional y estética, aunque la definitiva en zirconio se coloca luego del período de osteointegración.',
  },
  {
    q: '¿Cuánto tiempo estoy sin poder comer normal?',
    a: 'Durante los primeros 3 meses se recomienda dieta blanda para proteger los implantes durante la osteointegración. Después de ese período, con la prótesis definitiva, puede masticar normalmente sin restricciones, incluyendo alimentos duros.',
  },
  {
    q: '¿Hay límite de edad para la rehabilitación oral completa?',
    a: 'No existe un límite de edad. Lo que se evalúa es el estado general de salud. Pacientes mayores de 70-80 años son candidatos frecuentes y exitosos. Lo importante es que la salud sistémica esté controlada.',
  },
  {
    q: '¿Qué pasa si perdí todo el hueso del maxilar?',
    a: 'Para casos de atrofia ósea severa existen los implantes cigomáticos, que se anclan en el hueso del pómulo y no requieren injerto óseo previo. Esto permite rehabilitar incluso los casos más complejos con excelentes resultados.',
  },
];

export default async function RehabilitacionOralCompletaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) =>
    locale === 'es' ? path : '/en' + path;
  const waLink =
    'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20Rehabilitación%20Oral%20Completa';

  const breadcrumbs = [
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Servicios' : 'Services', url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: isEs ? 'Rehabilitación Oral Completa' : 'Full Oral Rehabilitation', url: isEs ? `${BASE}/servicios/rehabilitacion-oral-completa` : `${BASE}/en/servicios/rehabilitacion-oral-completa` },
  ];

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        localBusinessSchema(),
        medicalServiceSchema({
          name: 'Rehabilitación Oral Completa Medellín',
          description: 'All-on-4, All-on-6 y dientes fijos en 1 día en Medellín. Implantes cigomáticos sin injerto óseo. El Poblado.',
          url: 'https://dracarolinamacareno.com/servicios/rehabilitacion-oral-completa',
        }),
        faqSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema(breadcrumbs),
      ]} />
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="down" delay={0}>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#9CA3AF' }}>
              <Link href={localePath('/')} className="hover:text-[#C9A461] transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href={localePath('/servicios')} className="hover:text-[#C9A461] transition-colors">
                Servicios
              </Link>
              <span>/</span>
              <span style={{ color: '#C9A461' }}>Rehabilitación Oral Completa</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              All-on-4 · All-on-6 · Implantes Cigomáticos
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Rehabilitación Oral Completa
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              Reconstrucción integral de toda la dentición para pacientes con múltiples
              dientes perdidos o muy dañados. Un plan unificado, digitalizado y definitivo
              que devuelve la función, la estética y la calidad de vida.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUÉ ES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              ¿Qué es la rehabilitación oral completa?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              Es la reconstrucción integral de toda la dentición cuando múltiples dientes
              están perdidos, severamente dañados o muy desgastados. Combina implantes
              dentales, prótesis fija, coronas y procedimientos estéticos en un único
              plan de tratamiento coherente y planificado digitalmente.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#D1D5DB' }}>
              A diferencia de tratar cada diente por separado, la rehabilitación completa
              aborda toda la boca como un sistema funcional — corrigiendo la mordida,
              la estética, la masticación y la salud de los tejidos al mismo tiempo.
              El resultado es transformador: los pacientes recuperan no solo sus dientes,
              sino su confianza y calidad de vida.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUIÉN NECESITA ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              ¿Quién necesita este tratamiento?
            </h2>
            <ul className="space-y-4">
              {[
                'Perdió la mayoría o todos sus dientes por cualquier causa.',
                'Tiene dientes muy desgastados por bruxismo severo o acidez crónica.',
                'Ha tenido fracasos repetidos con tratamientos anteriores en múltiples dientes.',
                'Lleva años usando prótesis removible total y quiere una solución fija definitiva.',
                'Tiene múltiples dientes que necesitan coronas, implantes o extracciones simultáneas.',
                'Busca un cambio radical, integral y definitivo que dure el resto de su vida.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                  >
                    ✓
                  </span>
                  <span style={{ color: '#D1D5DB' }}>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>
              Modalidades disponibles
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Modalidades de rehabilitación oral completa
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>Desde All-on-4 con carga inmediata hasta implantes cigomáticos para los casos más complejos.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M4 9 Q12 3 20 9" strokeLinecap="round" />
                    <path d="M4 9 Q4 16 8 19 Q12 21 16 19 Q20 16 20 9" strokeLinecap="round" />
                    <path d="M5 11 L4 18" strokeLinecap="round" />
                    <path d="M19 11 L20 18" strokeLinecap="round" />
                    <circle cx="5" cy="11" r="1.3" fill="currentColor" />
                    <circle cx="19" cy="11" r="1.3" fill="currentColor" />
                    <path d="M8 9 L7 19" strokeLinecap="round" />
                    <path d="M16 9 L17 19" strokeLinecap="round" />
                    <circle cx="8" cy="9" r="1.3" fill="currentColor" />
                    <circle cx="16" cy="9" r="1.3" fill="currentColor" />
                  </svg>
                ),
                badge: 'CARGA INMEDIATA',
                title: 'All-on-4',
                desc: 'Arcada completa sobre 4 implantes: 2 anteriores verticales y 2 posteriores angulados. Permite carga inmediata — el paciente sale con dientes provisionales el mismo día de la cirugía.',
                highlight: '✓ Dientes el mismo día',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M3 9 Q12 3 21 9" strokeLinecap="round" />
                    <path d="M3 9 Q3 16 7 19 Q12 21 17 19 Q21 16 21 9" strokeLinecap="round" />
                    <path d="M4 11 L3 18" strokeLinecap="round" />
                    <path d="M20 11 L21 18" strokeLinecap="round" />
                    <circle cx="4" cy="11" r="1.2" fill="currentColor" />
                    <circle cx="20" cy="11" r="1.2" fill="currentColor" />
                    <path d="M7 9 L6 19" strokeLinecap="round" />
                    <path d="M17 9 L18 19" strokeLinecap="round" />
                    <circle cx="7" cy="9" r="1.2" fill="currentColor" />
                    <circle cx="17" cy="9" r="1.2" fill="currentColor" />
                    <path d="M12 8 L12 19" strokeLinecap="round" />
                    <circle cx="12" cy="8" r="1.2" fill="currentColor" />
                  </svg>
                ),
                badge: 'MAYOR ESTABILIDAD',
                title: 'All-on-6',
                desc: '6 implantes para mayor distribución de fuerzas y mejor soporte de la prótesis definitiva. Recomendado cuando hay mayor disponibilidad ósea y se busca la máxima estabilidad a largo plazo.',
                highlight: '✓ Máxima estabilidad y soporte',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M3 8 Q12 2 21 8" strokeLinecap="round" />
                    <path d="M3 8 Q3 15 7 18 Q12 20 17 18 Q21 15 21 8" strokeLinecap="round" />
                    <rect x="2" y="18" width="20" height="4" rx="1.5" />
                    <path d="M6 8 L6 18 M10 7 L10 18 M14 7 L14 18 M18 8 L18 18" strokeLinecap="round" />
                  </svg>
                ),
                badge: 'SOLUCIÓN DEFINITIVA',
                title: 'Prótesis Híbrida',
                desc: 'Arcada completa en resina de alta resistencia con refuerzo metálico o en zirconio, sobre 4-6 implantes. Es la rehabilitación definitiva que reemplaza todos los dientes de una arcada.',
                highlight: '✓ Arcada completa permanente',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M5 4 Q5 2 8 2 Q11 2 12 5 Q13 8 12 11 Q11 14 9 15" strokeLinecap="round" />
                    <path d="M12 5 Q15 3 18 4 Q21 5 21 8 Q21 11 19 13 Q17 15 15 15" strokeLinecap="round" />
                    <path d="M9 15 Q9 20 11 22 Q13 22 14 20 Q15 18 15 15" strokeLinecap="round" />
                    <path d="M15 15 L20 19" strokeLinecap="round" strokeWidth={2} />
                    <circle cx="21" cy="20" r="1.5" fill="currentColor" />
                  </svg>
                ),
                badge: 'SIN INJERTO ÓSEO',
                title: 'Implantes Cigomáticos',
                desc: 'Para casos de atrofia ósea severa en el maxilar superior donde los implantes convencionales no son posibles. El implante se ancla en el hueso del pómulo, eliminando la necesidad de injertos.',
                highlight: '✓ Alternativa a injertos óseos',
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div style={{ color: '#C9A461' }}>{card.icon}</div>
                    <span className="text-xs font-semibold px-2 py-1 rounded tracking-wide uppercase" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>{card.badge}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#9CA3AF' }}>{card.desc}</p>
                  <div className="text-xs font-medium px-3 py-1.5 rounded border inline-block" style={{ borderColor: '#C9A461', color: '#C9A461', backgroundColor: '#C9A46110' }}>
                    {card.highlight}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO TRUST ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="/images/dra-carolina-hero.webp" alt="Rehabilitación oral completa All-on-4 - Dra. Carolina Macareno Medellín" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#F5F5F0' }}>Rehabilitación Total · All-on-4 · All-on-6 · Cigomáticos</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>¿Por qué elegirnos?</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>El caso más complejo requiere la mayor experiencia</h2>
              <div className="space-y-4">
                {[
                  { icon: '🔬', title: 'Planificación 3D completa', desc: 'Tomografía CBCT, escáner digital y planificación quirúrgica virtual antes de cualquier procedimiento.' },
                  { icon: '🏆', title: 'Formación avanzada', desc: 'Curso avanzado en implantología NEODENT/FACOP Brasil. Experiencia en los casos de mayor complejidad.' },
                  { icon: '⏱', title: 'Carga inmediata disponible', desc: 'Con All-on-4 y All-on-6 el paciente puede salir con dientes provisionales el mismo día de la cirugía.' },
                  { icon: '🌍', title: 'Pacientes internacionales', desc: 'Atendemos pacientes de Panamá, Chile, Estados Unidos y Puerto Rico que viajan a Medellín por la calidad y los costos.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: '#F5F5F0' }}>{item.title}</p>
                      <p className="text-sm" style={{ color: '#9CA3AF' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-10"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              El proceso paso a paso
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Diagnóstico 3D y planificación digital completa',
                desc: 'Tomografía CBCT, scanner intraoral, fotografías y análisis facial completo. Se diseña el resultado final antes de comenzar.',
              },
              {
                step: '02',
                title: 'Extracciones y preparación del lecho quirúrgico',
                desc: 'Si hay dientes que no son recuperables, se extraen y se prepara el hueso para recibir los implantes de forma óptima.',
              },
              {
                step: '03',
                title: 'Cirugía de implantes',
                desc: 'Colocación quirúrgica de los implantes bajo anestesia local o sedación consciente. Duración: 2-4 horas dependiendo del caso.',
              },
              {
                step: '04',
                title: 'Prótesis provisional inmediata',
                desc: 'En casos de carga inmediata (All-on-4/6), se coloca una prótesis provisional funcional el mismo día. El paciente sale del consultorio con dientes.',
              },
              {
                step: '05',
                title: 'Período de osteointegración',
                desc: '3 a 6 meses de integración del titanio con el hueso. Durante este período se realizan controles periódicos.',
              },
              {
                step: '06',
                title: 'Rehabilitación definitiva en zirconio o cerámica',
                desc: 'Fabricación e instalación de la prótesis definitiva de alta calidad. Resultado final estético, funcional y duradero.',
              },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex gap-5 items-start">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                  >
                    {s.step}
                  </div>
                  <div
                    className="flex-1 p-5 rounded-xl border"
                    style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                  >
                    <h3 className="font-semibold text-base mb-1" style={{ color: '#F5F5F0' }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <section className="py-10 px-4" style={{ backgroundColor: '#0D1321', borderTop: '1px solid #1F2937', borderBottom: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Duración del proceso', value: '6 – 12 meses', icon: '⏱' },
              { label: 'Precio desde', value: '$15,000,000 COP / arcada', icon: '💰' },
              { label: 'Número de citas', value: '6 – 8 citas', icon: '📅' },
            ].map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              >
                <span className="text-2xl">{pill.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: '#9CA3AF' }}>{pill.label}</p>
                  <p className="font-semibold" style={{ color: '#C9A461' }}>{pill.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Preguntas frecuentes
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="p-6 rounded-xl border"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <h3 className="font-semibold text-base mb-3 flex items-start gap-2" style={{ color: '#E5B866' }}>
                    <span className="shrink-0 mt-0.5" style={{ color: '#C9A461' }}>▸</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Comienza tu transformación
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              La rehabilitación oral completa cambia vidas. Agenda tu diagnóstico 3D
              y descubre cuál es la mejor opción para tu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105"
                style={{ backgroundColor: '#C9A461', color: '#070B14' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.938l6.29-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.012-1.374l-.36-.213-3.733.978.995-3.629-.234-.373A9.778 9.778 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                </svg>
                Escribir por WhatsApp
              </a>
              <Link
                href={localePath('/contacto')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
                style={{ borderColor: '#C9A461', color: '#C9A461' }}
              >
                Ver página de contacto
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
