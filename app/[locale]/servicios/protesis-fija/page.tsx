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
  const slug = 'protesis-fija';

  return {
    title: isEs
      ? 'Prótesis Fija sobre Implantes Medellín | Coronas y Puentes | Dra. Carolina'
      : 'Fixed Implant Prosthetics Medellín | Crowns & Bridges | Dr. Carolina',
    description: isEs
      ? 'Prótesis fija atornillada sobre implantes en Medellín. Coronas de zirconio, puentes y All-on-4. Sin cemento, sin movimiento. El Poblado, 17+ años de experiencia.'
      : 'Screw-retained fixed prosthetics on implants in Medellín. Zirconia crowns, bridges and All-on-4. No cement, no movement. El Poblado, 17+ years experience.',
    keywords: isEs
      ? [
          'prótesis fija Medellín',
          'corona dental zirconio',
          'puente dental sobre implantes',
          'prótesis sobre implantes Medellín',
          'rehabilitación implantes',
          'corona cerámica Medellín',
          'prótesis atornillada',
          'All-on-4 Medellín',
          'prótesis híbrida implantes',
          'Dra. Carolina Macareno',
          'El Poblado prótesis dental',
        ]
      : [
          'fixed prosthetics Medellin',
          'zirconia crown',
          'dental bridge implants',
          'implant prosthetics Medellin',
          'screw retained prosthetics',
          'All-on-4 Colombia',
        ],
    openGraph: {
      title: isEs
        ? 'Prótesis Fija sobre Implantes Medellín | Dra. Carolina Macareno'
        : 'Fixed Implant Prosthetics Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Coronas de zirconio, puentes y All-on-4 atornillados sobre implantes en El Poblado, Medellín. Sin cemento, sin movimiento.'
        : 'Zirconia crowns, bridges and All-on-4 screw-retained on implants in El Poblado, Medellín.',
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
    q: '¿Cuál es la diferencia entre prótesis fija y removible?',
    a: 'La prótesis fija está atornillada sobre los implantes y no se retira nunca — ni para dormir ni para limpiarla. La removible se quita para limpiar y puede moverse al hablar o comer. La fija ofrece mayor comodidad, estética superior y preserva mejor el hueso.',
  },
  {
    q: '¿Se puede romper una prótesis fija de zirconio?',
    a: 'El zirconio es uno de los materiales dentales más resistentes disponibles hoy. Aunque técnicamente puede fracturarse ante impactos muy severos, en condiciones normales de uso tiene una durabilidad excepcional. Además, en caso de fractura, solo se reemplaza la pieza dañada.',
  },
  {
    q: '¿Cómo se limpia una prótesis fija sobre implantes?',
    a: 'Se limpia igual que los dientes naturales: cepillado regular y uso de hilo dental especial para implantes (superfloss o hilo grueso). En citas de control se realiza limpieza profesional periimplantaria para garantizar la salud a largo plazo.',
  },
  {
    q: '¿Cuánto tiempo dura una corona sobre implante?',
    a: 'Las coronas de zirconio o cerámica sobre implantes tienen una vida útil estimada de 15-20 años con cuidados adecuados. El implante en sí puede durar toda la vida. Los controles anuales permiten detectar desgaste a tiempo.',
  },
];

export default async function ProteisaFijaPage({
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
    'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20Prótesis%20Fija%20Atornillada';

  const breadcrumbs = [
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Servicios' : 'Services', url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: isEs ? 'Prótesis Fija sobre Implantes' : 'Fixed Implant Prosthetics', url: isEs ? `${BASE}/servicios/protesis-fija` : `${BASE}/en/servicios/protesis-fija` },
  ];

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        localBusinessSchema(),
        medicalServiceSchema({
          name: 'Prótesis Fija sobre Implantes Medellín',
          description: 'Prótesis fija atornillada sobre implantes en Medellín. Coronas de zirconio, puentes dentales y rehabilitación All-on-4.',
          url: 'https://dracarolinamacareno.com/servicios/protesis-fija',
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
              <span style={{ color: '#C9A461' }}>Prótesis Fija</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              Implantología · Prótesis Dental
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Prótesis Fija Atornillada
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              Restauración permanente sobre implantes, fijada con tornillos. Sin cemento,
              sin adhesivos, sin prótesis que se mueva. Una solución que se ve, se siente
              y funciona como dientes naturales.
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
              ¿Qué es la prótesis fija atornillada?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              Es una restauración dental que se fija de forma permanente sobre implantes
              mediante tornillos de titanio — sin cemento. Puede reemplazar desde un solo
              diente hasta una arcada completa. No se retira, no se mueve y no requiere
              adhesivos de ningún tipo.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#D1D5DB' }}>
              Los materiales usados — zirconio monolítico y cerámica de alta resistencia —
              replican con exactitud el color, la translucidez y la forma de los dientes
              naturales. Se fabrica en laboratorio dental especializado a partir de un
              escáner digital intraoral (3Shape), garantizando un ajuste milimétrico.
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
                'Tiene implantes colocados y necesita la corona o puente definitivo.',
                'Perdió varios dientes contiguos y quiere una solución fija y estable.',
                'Usa prótesis removible (placa) y quiere algo definitivo que no se mueva.',
                'Busca la mejor combinación de estética, funcionalidad y durabilidad.',
                'Tiene rehabilitación provisional y está listo para la definitiva en zirconio.',
                'Quiere evitar la incomodidad, la inseguridad y el desgaste de una prótesis removible.',
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
              Tipos de prótesis fija sobre implantes
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>Desde una sola corona hasta una arcada completa — cada caso tiene su solución ideal.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M10 3 Q7 3 7 7 L7 10 Q8 13 12 13 Q16 13 17 10 L17 7 Q17 3 14 3 Z" />
                    <rect x="11" y="13" width="2" height="2" rx="0.5" />
                    <path d="M12 15 L12 20" strokeLinecap="round" />
                    <path d="M10 20 L14 20" strokeLinecap="round" />
                    <circle cx="12" cy="21" r="1" fill="currentColor" />
                  </svg>
                ),
                badge: '1 DIENTE',
                title: 'Corona Unitaria',
                desc: 'Una sola corona de cerámica o zirconio sobre un implante. No requiere desgastar los dientes vecinos. Resultado idéntico al diente natural en forma, color y función.',
                highlight: '✓ No afecta dientes vecinos',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M4 3 Q3 3 3 6 L3 9 Q4 11 7 11 Q10 11 11 9 L11 6 Q11 3 8 3 Z" />
                    <path d="M13 3 Q12 3 12 6 L12 9 Q13 11 16 11 Q19 11 20 9 L20 6 Q20 3 18 3 Z" />
                    <path d="M7 11 L7 14 M16 11 L16 14" strokeLinecap="round" />
                    <path d="M7 14 Q11.5 12 16 14" strokeLinecap="round" />
                    <circle cx="7" cy="15" r="1" fill="currentColor" />
                    <circle cx="16" cy="15" r="1" fill="currentColor" />
                  </svg>
                ),
                badge: '2-4 DIENTES',
                title: 'Puente Fijo sobre Implantes',
                desc: 'Estructura de 3 a 6 unidades apoyada en 2 implantes. Repone varios dientes contiguos sin necesidad de un implante por cada espacio.',
                highlight: '✓ Menos implantes, más cobertura',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M3 7 Q12 2 21 7" strokeLinecap="round" />
                    <path d="M3 7 Q3 14 7 17 Q12 19 17 17 Q21 14 21 7" strokeLinecap="round" />
                    <path d="M5 9 L5 16 M8 8 L8 17 M12 7 L12 18 M16 8 L16 17 M19 9 L19 16" strokeLinecap="round" />
                    <path d="M3 17 L21 17" strokeLinecap="round" />
                  </svg>
                ),
                badge: 'ARCADA COMPLETA',
                title: 'Prótesis Híbrida',
                desc: 'Arcada completa en resina de alta resistencia sobre una estructura metálica o de zirconio, apoyada en 4-6 implantes. La opción más usada para rehabilitación total.',
                highlight: '✓ Arcada completa sobre 4-6 implantes',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M4 8 Q12 3 20 8" strokeLinecap="round" />
                    <path d="M4 8 Q4 15 8 18 Q12 20 16 18 Q20 15 20 8" strokeLinecap="round" />
                    <path d="M5 10 L4 17" strokeLinecap="round" />
                    <path d="M19 10 L20 17" strokeLinecap="round" />
                    <circle cx="5" cy="10" r="1.2" fill="currentColor" />
                    <circle cx="19" cy="10" r="1.2" fill="currentColor" />
                    <path d="M8 8 L7 18" strokeLinecap="round" />
                    <path d="M16 8 L17 18" strokeLinecap="round" />
                    <circle cx="8" cy="8" r="1.2" fill="currentColor" />
                    <circle cx="16" cy="8" r="1.2" fill="currentColor" />
                  </svg>
                ),
                badge: 'CARGA INMEDIATA',
                title: 'All-on-4 / All-on-6',
                desc: '4 o 6 implantes estratégicamente angulados para aprovechar el hueso disponible. Permite colocar una prótesis provisional el mismo día de la cirugía.',
                highlight: '✓ Dientes provisionales el mismo día',
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
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image src="/images/dra-carolina-consultorio.webp" alt="Prótesis fija sobre implantes - Dra. Carolina Macareno El Poblado Medellín" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#F5F5F0' }}>Scanner digital 3Shape intraoral</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>¿Por qué elegirnos?</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>Fabricación digital de precisión</h2>
              <div className="space-y-4">
                {[
                  { icon: '🔬', title: 'Scanner 3Shape intraoral', desc: 'Sin impresiones convencionales. Captura digital milimétrica de la posición de cada implante.' },
                  { icon: '🏭', title: 'Laboratorio especializado', desc: 'Fresado CAD/CAM en zirconio monolítico. Fabricación en 1-2 semanas con control de calidad.' },
                  { icon: '🎨', title: 'Personalización estética', desc: 'Caracterización individual del color y la translucidez para que sea indistinguible de los dientes naturales.' },
                  { icon: '🤝', title: 'Garantía de ajuste', desc: 'Prueba clínica antes del atornillado definitivo. Si no ajusta perfectamente, se repite sin costo adicional.' },
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
                title: 'Evaluación y planificación digital',
                desc: 'Revisión de la salud de los implantes, oclusión y estética. Definición del diseño, material y forma de las restauraciones.',
              },
              {
                step: '02',
                title: 'Toma de impresión digital (scanner 3Shape)',
                desc: 'Sin material de impresión convencional. Un escáner intraoral captura la posición exacta de los implantes en milisegundos.',
              },
              {
                step: '03',
                title: 'Fabricación en laboratorio',
                desc: 'La pieza se fabrica en zirconio o cerámica de alta resistencia con fresado CAD/CAM. Tiempo: 1 a 2 semanas.',
              },
              {
                step: '04',
                title: 'Prueba y ajuste',
                desc: 'Se verifica la estética, el ajuste y la oclusión antes de la entrega definitiva. Se realizan los ajustes necesarios.',
              },
              {
                step: '05',
                title: 'Atornillado definitivo',
                desc: 'La prótesis queda fija con torque controlado. Se sella el acceso del tornillo con resina del mismo color del diente.',
              },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
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
              { label: 'Fabricación', value: '2 – 4 semanas', icon: '⏱' },
              { label: 'Precio desde', value: '$3,000,000 COP', icon: '💰' },
              { label: 'Número de citas', value: '3 – 4 citas', icon: '📅' },
            ].map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              >
                <span className="text-2xl">{pill.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: '#9CA3AF' }}>
                    {pill.label}
                  </p>
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

      {/* ── CORONAS Y CARILLAS LANDING BANNER ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#070B14', borderTop: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Link
              href={locale === 'es' ? '/coronas-zirconio-carillas' : '/en/coronas-zirconio-carillas'}
              className="flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-[#C9A461]/30 p-6 hover:border-[#C9A461]/60 transition-all group"
              style={{ backgroundColor: '#111827' }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,164,97,0.15)', border: '1px solid rgba(201,164,97,0.4)' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="text-xs font-semibold tracking-widest uppercase block mb-1" style={{ color: '#C9A461' }}>
                  {locale === 'es' ? 'Guía Completa' : 'Full Guide'}
                </span>
                <p className="font-semibold text-base group-hover:text-[#C9A461] transition-colors" style={{ color: '#F5F5F0' }}>
                  {locale === 'es'
                    ? 'Coronas de Zirconio y Carillas en Colombia — precios y comparativa'
                    : 'Zirconia Crowns & Veneers in Colombia — prices and comparison'}
                </p>
                <p className="text-sm mt-1" style={{ color: '#9CA3AF' }}>
                  {locale === 'es'
                    ? 'Materiales, durabilidad y costos reales. Todo en un solo lugar.'
                    : 'Materials, durability and real costs. All in one place.'}
                </p>
              </div>
              <svg className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </AnimatedSection>
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
              ¿Tienes implantes y necesitas la prótesis?
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              Escríbenos hoy y agenda tu cita de diseño y planificación de prótesis fija.
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
