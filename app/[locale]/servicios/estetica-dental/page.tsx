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
  const slug = 'estetica-dental';

  return {
    title: isEs
      ? 'Estética Dental Medellín | Blanqueamiento y Carillas | Dra. Carolina Macareno'
      : 'Dental Aesthetics Medellín | Whitening & Veneers | Dr. Carolina Macareno',
    description: isEs
      ? 'Blanqueamiento dental profesional y carillas de resina en Medellín. Resultados visibles en 1 sesión. Cierre de diastemas sin brackets. El Poblado.'
      : 'Professional teeth whitening and composite veneers in Medellín. Visible results in 1 session. Diastema closure without braces. El Poblado.',
    keywords: isEs
      ? [
          'estética dental Medellín',
          'blanqueamiento dental Medellín',
          'blanqueamiento profesional',
          'carillas de resina Medellín',
          'cierre de diastemas',
          'sonrisa blanca Medellín',
          'limpieza dental profesional',
          'contorneado dental',
          'estética dental El Poblado',
          'Dra. Carolina Macareno',
          'blanqueamiento dental Colombia',
        ]
      : [
          'dental aesthetics Medellin',
          'teeth whitening Medellin',
          'professional whitening Colombia',
          'composite veneers Medellin',
          'diastema closure',
          'El Poblado dental whitening',
        ],
    openGraph: {
      title: isEs
        ? 'Estética Dental Medellín | Dra. Carolina Macareno'
        : 'Dental Aesthetics Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Blanqueamiento profesional y carillas de resina en El Poblado, Medellín. Resultados visibles desde la primera sesión.'
        : 'Professional whitening and composite veneers in El Poblado, Medellín. Visible results from the first session.',
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
    q: '¿Cuánto dura el efecto del blanqueamiento dental?',
    a: 'Con un mantenimiento adecuado (evitar exceso de café, vino tinto y tabaco), el resultado del blanqueamiento profesional dura entre 12 y 18 meses. Se puede complementar con aplicaciones de mantenimiento en casa para prolongar el efecto.',
  },
  {
    q: '¿El blanqueamiento genera sensibilidad?',
    a: 'Es normal sentir sensibilidad leve a moderada durante las primeras 24-48 horas después del tratamiento. Esta sensibilidad es temporal y se maneja con el uso de dentífrico desensibilizante. El protocolo clínico incluye aplicación de flúor al finalizar para minimizarla.',
  },
  {
    q: '¿Las carillas de resina duran igual que las cerámicas?',
    a: 'No. Las carillas de resina compuesta tienen una durabilidad de 5 a 7 años, mientras que las cerámicas duran entre 10 y 15 años. Sin embargo, las de resina tienen una ventaja importante: no requieren desgaste dental y son completamente reversibles, con un costo significativamente menor.',
  },
  {
    q: '¿Blanqueamiento y carillas se pueden combinar?',
    a: 'No es necesario combinarlos, ya que las carillas ya tienen el color ideal incorporado. Si desea blanquear primero y luego hacer carillas en solo algunos dientes, se recomienda estabilizar el color con blanqueamiento antes de elegir el tono de las carillas.',
  },
];

export default async function EsteticaDentalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localePath = (path: string) =>
    locale === 'es' ? path : '/en' + path;
  const waLink =
    'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20Estética%20Dental';

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        localBusinessSchema(),
        medicalServiceSchema({
          name: 'Estética Dental Medellín',
          description: 'Blanqueamiento dental profesional y carillas de resina en Medellín. Resultados en 1 sesión. El Poblado.',
          url: 'https://dracarolinamacareno.com/servicios/estetica-dental',
        }),
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
              <span style={{ color: '#C9A461' }}>Estética Dental</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              Blanqueamiento · Carillas · Ortodoncia Invisible · Mínima Invasión
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Estética Dental Avanzada
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              Transforma tu sonrisa con técnicas de mínima invasión. Resultados visibles,
              naturales y duraderos sin cirugías ni procedimientos complejos.
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
              ¿Qué es la estética dental avanzada?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              Son tratamientos de mejora estética que transforman la apariencia de la
              sonrisa con técnicas de mínima invasión. Incluye blanqueamiento dental
              profesional con técnica combinada, carillas de resina compuesta, microdiseño
              de sonrisa, ortodoncia invisible con alineadores y correcciones cosméticas
              que no requieren cirugía ni grandes preparaciones.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#D1D5DB' }}>
              Es la opción ideal para quienes desean mejorar su sonrisa sin someterse
              a tratamientos extensos, manteniendo la estructura natural del diente al
              máximo y obteniendo resultados visibles y duraderos.
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
                'Tiene dientes amarillos o manchados por café, té, vino o tabaco.',
                'Quiere mejorar su sonrisa sin someterse a tratamientos grandes ni invasivos.',
                'Tiene pequeños espacios entre los dientes o dientes ligeramente desalineados.',
                'Sus dientes tienen bordes desgastados, asimetrías leves o irregularidades de forma.',
                'Desea una sonrisa más blanca y luminosa para una ocasión especial.',
                'Quiere alinear su sonrisa sin brackets ni aparatología fija.',
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
              Tratamientos de estética dental disponibles
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>Resultados visibles desde la primera cita, con técnicas que preservan al máximo tu diente natural.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <circle cx="12" cy="13" r="4" />
                    <path d="M12 2v2M12 7v2M4.22 4.22l1.42 1.42M7.05 7.05l1.42 1.42M2 13h2M7 13h2M19.78 4.22l-1.42 1.42M16.95 7.05l-1.42 1.42M22 13h-2M17 13h-2" strokeLinecap="round" />
                  </svg>
                ),
                badge: 'TÉCNICA COMBINADA',
                title: 'Blanqueamiento / Aclaramiento Dental',
                desc: 'Técnica combinada: sesión profesional en consultorio + cubetas personalizadas para casa. Mejores resultados a largo plazo, con control total de la sensibilidad. Sin sacrificar la salud de tus dientes.',
                highlight: '✓ Resultados duraderos · Sensibilidad controlada',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M9 4 Q8 4 8 7 L8 16 Q9 20 12 20 Q15 20 16 16 L16 7 Q16 4 15 4 Z" />
                    <path d="M9 4 L15 4" strokeLinecap="round" />
                    <path d="M8 10 Q10 8 12 10 Q14 12 16 10" strokeLinecap="round" strokeDasharray="1 1.5" />
                  </svg>
                ),
                badge: 'MISMO DÍA',
                title: 'Carillas de Resina Compuesta',
                desc: 'Aplicación directa de resina compuesta para corregir forma, color, tamaño o espacios. Sin desgaste dental, reversible y a un costo accesible. Resultado inmediato en la misma cita.',
                highlight: '✓ Sin desgaste · Mismo día',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M9 5 Q8 5 8 8 L8 15 Q9 19 12 19 Q15 19 16 15 L16 8 Q16 5 15 5 Z" />
                    <path d="M10 5 Q10 7 12 7 Q14 7 14 5" strokeLinecap="round" />
                    <path d="M18 8 Q21 10 20 13 Q19 16 17 15" strokeLinecap="round" />
                    <path d="M19 10 L21 9" strokeLinecap="round" />
                  </svg>
                ),
                badge: 'MÍNIMA INVASIÓN',
                title: 'Microdiseño de Sonrisa',
                desc: 'Corrección de bordes desgastados, asimetrías leves o pequeñas irregularidades de forma mediante adición de resina o remodelación suave. Cambios pequeños con impacto visual grande.',
                highlight: '✓ Sin desgaste · Resultado inmediato',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M4 6 Q4 4 7 4 Q9 4 10 6 L10 17 Q9 21 7 21 Q5 21 4 17 Z" />
                    <path d="M14 6 Q14 4 17 4 Q19 4 20 6 L20 17 Q19 21 17 21 Q15 21 14 17 Z" />
                    <path d="M10 12 Q12 10 14 12" strokeLinecap="round" />
                    <path d="M11 7 Q12 6 13 7" strokeLinecap="round" strokeDasharray="1 1" />
                  </svg>
                ),
                badge: 'PLANIFICACIÓN DIGITAL',
                title: 'Ortodoncia Invisible con Alineadores',
                desc: 'Movimientos dentales planificados digitalmente mediante alineadores removibles y transparentes. Corrige posición de dientes, alinea la sonrisa y mejora la oclusión — sin brackets ni alambres.',
                highlight: '✓ Invisible · Cómodo · Removible',
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
                <Image src="/images/dra-carolina-perfil.webp" alt="Estética dental avanzada blanqueamiento carillas - Dra. Carolina Macareno Medellín" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#F5F5F0' }}>Estética · Mínima invasión · Resultados inmediatos</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>¿Por qué elegirnos?</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>Resultados visibles desde la primera cita</h2>
              <div className="space-y-4">
                {[
                  { icon: '✨', title: 'Técnicas de mínima invasión', desc: 'Priorizamos preservar el máximo tejido dental sano. La mínima intervención para el máximo resultado estético.' },
                  { icon: '🎨', title: 'Guía de color profesional', desc: 'Análisis de color con guía Vita para seleccionar el tono más natural y apropiado para tu piel y personalidad.' },
                  { icon: '⚡', title: 'Resultados el mismo día', desc: 'Blanqueamiento, carillas de resina y contorneados pueden completarse en una sola cita.' },
                  { icon: '🔄', title: 'Mantenimiento incluido', desc: 'Instrucciones personalizadas y kit de mantenimiento para prolongar al máximo los resultados obtenidos.' },
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
                title: 'Evaluación del color y estado dental',
                desc: 'Análisis del tono actual de los dientes, evaluación de manchas intrínsecas/extrínsecas y selección del tratamiento más adecuado.',
              },
              {
                step: '02',
                title: 'Limpieza profunda previa',
                desc: 'Profilaxis dental para eliminar sarro y manchas superficiales antes de iniciar el tratamiento estético. Garantiza mejores resultados.',
              },
              {
                step: '03',
                title: 'Aplicación del tratamiento elegido',
                desc: 'Sesión de blanqueamiento combinado, aplicación de carillas de resina, microdiseño de sonrisa u ortodoncia invisible según el plan acordado.',
              },
              {
                step: '04',
                title: 'Verificación del resultado',
                desc: 'Comparación del color final con el inicial, ajuste de pequeños detalles y pulido de las restauraciones si es necesario.',
              },
              {
                step: '05',
                title: 'Instrucciones de mantenimiento en casa',
                desc: 'Pautas personalizadas para prolongar el resultado: kit de mantenimiento, hábitos recomendados y fecha del próximo control.',
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
              { label: 'Duración del proceso', value: '1 – 3 sesiones', icon: '⏱' },
              { label: 'Precio desde', value: '$700,000 COP', icon: '💰' },
              { label: 'Número de citas', value: '1 – 4 citas', icon: '📅' },
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

      {/* ── CORONAS Y CARILLAS LANDING BANNER ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#0D1321', borderTop: '1px solid #1F2937' }}>
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
                    ? 'Todo lo que necesitas saber antes de decidir: materiales, durabilidad, costos reales.'
                    : 'Everything you need to know before deciding: materials, durability, real costs.'}
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
              Una sonrisa más luminosa te espera
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              Los resultados estéticos pueden comenzar en tu primera visita.
              Escríbenos y cuéntanos qué te gustaría mejorar.
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
