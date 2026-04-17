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
  const slug = 'consulta-diagnostico';

  return {
    title: isEs
      ? 'Evaluación Clínica Integral Medellín | El Poblado | Dra. Carolina Macareno'
      : 'Comprehensive Clinical Evaluation Medellín | El Poblado | Dr. Carolina Macareno',
    description: isEs
      ? 'Evaluación clínica integral en Medellín: diagnóstico completo, impresión digital, limpieza dental y diseño de sonrisa digital. 60 min. El Poblado. Agenda hoy.'
      : 'Comprehensive clinical evaluation in Medellín: full diagnosis, digital impression, dental cleaning and digital smile design. 60 min. El Poblado. Book today.',
    keywords: isEs
      ? [
          'evaluación clínica integral Medellín',
          'consulta odontológica Medellín',
          'diagnóstico dental Medellín',
          'odontóloga El Poblado',
          'impresión digital dental',
          'diseño de sonrisa digital Medellín',
          'plan de tratamiento dental',
          'primera cita odontológica Medellín',
          'segunda opinión dental Medellín',
          'Dra. Carolina Macareno',
          'limpieza dental Medellín',
        ]
      : [
          'dental evaluation Medellin',
          'dental diagnosis Colombia',
          'dentist El Poblado',
          'digital impression Medellin',
          'dental treatment plan Medellin',
          'second opinion dentist Colombia',
          'smile design Medellin',
        ],
    openGraph: {
      title: isEs
        ? 'Evaluación Clínica Integral Medellín | Dra. Carolina Macareno'
        : 'Comprehensive Clinical Evaluation Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Evaluación oral integral en El Poblado, Medellín. Diagnóstico completo, impresión digital, limpieza y diseño de sonrisa en 60 minutos.'
        : 'Comprehensive oral evaluation in El Poblado, Medellín. Full diagnosis, digital impression, cleaning and smile design in 60 minutes.',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      url: isEs ? `${BASE}/servicios/${slug}` : `${BASE}/en/servicios/${slug}`,
    },
    alternates: {
      canonical: isEs ? `${BASE}/servicios/${slug}` : `${BASE}/en/servicios/${slug}`,
      languages: {
        es: `${BASE}/servicios/${slug}`,
        en: `${BASE}/en/servicios/${slug}`,
      },
    },
  };
}

const faqs = [
  {
    q: '¿El costo de la evaluación se descuenta si inicio tratamiento?',
    a: 'Sí. Si decide iniciar tratamiento con nosotros, el valor de la evaluación se descuenta del costo total del tratamiento. Es una inversión, no un gasto.',
  },
  {
    q: '¿Puedo venir sin saber qué tratamiento necesito?',
    a: 'Es exactamente para eso. La evaluación está diseñada para pacientes que no saben qué necesitan, que quieren una segunda opinión o que simplemente no han ido al dentista hace tiempo. Saldrá con un diagnóstico claro, opciones concretas y todas sus dudas resueltas.',
  },
  {
    q: '¿Debo traer radiografías anteriores?',
    a: 'Si tiene radiografías recientes (menos de 6 meses), tráigalas — son de gran utilidad para comparar. Sin embargo, la evaluación incluye nuestros propios registros digitales actualizados, por lo que no es indispensable traer nada.',
  },
  {
    q: '¿Qué diferencia hay entre el paquete de $150.000 y el de $350.000?',
    a: 'El paquete de $150.000 incluye la evaluación clínica integral con historia clínica, examen oral, impresión digital, diagnóstico y plan de tratamiento. El paquete de $350.000 incluye todo lo anterior más limpieza dental profesional completa y diseño de sonrisa digital, ideal para quienes quieren ver cómo quedaría su resultado antes de decidir.',
  },
];


export default async function ConsultaDiagnosticoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localePath = (path: string) =>
    locale === 'es' ? path : '/en' + path;
  const waLink =
    'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20agendar%20una%20Evaluaci%C3%B3n%20Cl%C3%ADnica%20Integral';

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        localBusinessSchema(),
        medicalServiceSchema({
          name: 'Evaluación Clínica Integral Medellín',
          description: 'Evaluación odontológica integral con diagnóstico, impresión digital, limpieza dental y diseño de sonrisa. El Poblado, Medellín.',
          url: 'https://dracarolinamacareno.com/servicios/consulta-diagnostico',
        }),
      ]} />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="down" delay={0}>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#9CA3AF' }}>
              <Link href={localePath('/')} className="hover:text-[#C9A461] transition-colors">Inicio</Link>
              <span>/</span>
              <Link href={localePath('/servicios')} className="hover:text-[#C9A461] transition-colors">Servicios</Link>
              <span>/</span>
              <span style={{ color: '#C9A461' }}>Evaluación Clínica Integral</span>
            </nav>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              Primera Cita · Diagnóstico Completo · Sin Compromiso
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Evaluación Clínica Integral
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              El primer paso para transformar tu salud oral. Una evaluación completa que incluye
              diagnóstico digital, impresión intraoral, limpieza profesional y diseño de sonrisa —
              todo en una sola cita de 60 minutos, sin sorpresas.
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
              ¿Qué es la Evaluación Clínica Integral?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              Es mucho más que una consulta tradicional. En 60 minutos evaluamos tu salud oral de forma
              completa: clínica y emocionalmente. Escuchamos tu historia, entendemos qué te trajo aquí,
              cuáles son tus expectativas y gustos — y desde ahí construimos un diagnóstico y un plan
              de tratamiento real, adaptado a ti.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#D1D5DB' }}>
              Utilizamos tecnología de impresión digital intraoral para digitalizar toda la información
              de tu boca, obteniendo un modelo 3D preciso. Con esa información, presentamos un diagnóstico
              claro y opciones de tratamiento acordes a tu necesidad y presupuesto.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>
              ¿Qué incluye?
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Dos fases, todo en 60 minutos
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>
              Una evaluación diseñada para darte claridad total sobre tu salud oral y tus opciones reales de tratamiento.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phase 1 */}
            <AnimatedSection delay={0.1}>
              <div className="p-7 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#111827', borderColor: '#C9A461', borderWidth: '1px' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shrink-0"
                    style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                  >
                    01
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C9A461' }}>Fase 1</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
                  Evaluación Clínica Completa
                </h3>
                <ul className="space-y-3 flex-1">
                  {[
                    'Historia clínica detallada: antecedentes médicos, medicamentos y motivo de consulta',
                    'Evaluación clínica y emocional del paciente — comprendemos qué te trajo y qué esperas',
                    'Examen oral completo: dientes, encías, articulación, musculatura y tejidos blandos',
                    'Registro fotográfico clínico estandarizado',
                    'Evaluación de radiografías disponibles (si las tienes, las usamos; si no, no es obligatorio)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1" style={{ color: '#C9A461' }}>✓</span>
                      <span className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Phase 2 */}
            <AnimatedSection delay={0.2}>
              <div className="p-7 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#111827', borderColor: '#C9A461', borderWidth: '1px' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shrink-0"
                    style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                  >
                    02
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C9A461' }}>Fase 2</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
                  Impresión Digital y Diagnóstico
                </h3>
                <ul className="space-y-3 flex-1">
                  {[
                    'Impresión digital intraoral con escáner 3Shape — sin radiografías adicionales ni alginatos incómodos',
                    'Digitalización completa de toda la información de tu boca',
                    'Diagnóstico detallado explicado en pantalla con imágenes reales',
                    'Opciones de tratamiento adaptadas a tu necesidad y presupuesto, sin presiones',
                    'Limpieza dental profesional completa y diseño de sonrisa digital (paquete completo)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1" style={{ color: '#C9A461' }}>✓</span>
                      <span className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── QUIÉN NECESITA ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              ¿Quién debería venir a esta evaluación?
            </h2>
            <ul className="space-y-4">
              {[
                'No sabes qué tratamiento necesitas y quieres una evaluación profesional completa.',
                'Quieres una segunda opinión sobre un diagnóstico o presupuesto que ya tienes.',
                'Llevas tiempo sin ir al dentista y quieres conocer tu estado actual.',
                'Planeas un tratamiento grande (implantes, rehabilitación, diseño de sonrisa) y quieres explorar todas las opciones.',
                'Eres paciente internacional que visita Medellín y necesitas una evaluación rápida y confiable.',
                'Quieres ver cómo quedaría tu sonrisa antes de comprometerte con algún tratamiento.',
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

      {/* ── PRECIOS ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>
              Precios transparentes
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Elige el paquete que más te conviene
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>
              Sin letras pequeñas. El valor de la evaluación se descuenta del tratamiento si decides realizarlo con nosotros.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Paquete básico */}
            <AnimatedSection delay={0.1}>
              <div className="p-7 rounded-xl border flex flex-col h-full" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#9CA3AF' }}>Paquete Esencial</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>$150.000</span>
                  <span className="text-sm mb-1" style={{ color: '#9CA3AF' }}>COP</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    'Evaluación clínica y emocional completa',
                    'Historia clínica detallada',
                    'Fotografías clínicas estandarizadas',
                    'Impresión digital intraoral (3Shape)',
                    'Diagnóstico y opciones de tratamiento con costos',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1" style={{ color: '#C9A461' }}>✓</span>
                      <span className="text-sm" style={{ color: '#D1D5DB' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 px-6 rounded-lg font-semibold text-sm border transition-all hover:scale-105"
                  style={{ borderColor: '#C9A461', color: '#C9A461' }}
                >
                  Agendar por WhatsApp →
                </a>
              </div>
            </AnimatedSection>

            {/* Paquete completo */}
            <AnimatedSection delay={0.2}>
              <div className="p-7 rounded-xl border flex flex-col h-full relative" style={{ backgroundColor: '#111827', borderColor: '#C9A461' }}>
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase"
                  style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                >
                  Más completo
                </div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#C9A461' }}>Paquete Completo</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>$350.000</span>
                  <span className="text-sm mb-1" style={{ color: '#9CA3AF' }}>COP</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    'Todo lo del paquete esencial',
                    'Limpieza dental profesional completa',
                    'Diseño de sonrisa digital (si se requiere)',
                    'Visualización del resultado antes de decidir',
                    'Plan de tratamiento priorizado y detallado',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1" style={{ color: '#C9A461' }}>✓</span>
                      <span className="text-sm" style={{ color: '#D1D5DB' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                >
                  Agendar por WhatsApp →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PHOTO TRUST ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/dra-carolina-sentada.webp"
                  alt="Evaluación clínica integral - Dra. Carolina Macareno El Poblado Medellín"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#F5F5F0' }}>60 minutos · Sin compromiso · El Poblado</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>¿Por qué elegirnos?</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
                La primera cita lo cambia todo
              </h2>
              <div className="space-y-4">
                {[
                  { icon: '💬', title: 'Escuchamos antes de diagnosticar', desc: 'Entendemos tu historia, tus miedos, tus expectativas y tu presupuesto antes de proponer cualquier tratamiento.' },
                  { icon: '📲', title: 'Sin radiografías adicionales', desc: 'La impresión digital intraoral nos da toda la información necesaria sin exponer al paciente a radiación innecesaria.' },
                  { icon: '💰', title: 'Valor se descuenta del tratamiento', desc: 'Si decides iniciar tratamiento con nosotros, el costo de la evaluación se descuenta del total. Es una inversión.' },
                  { icon: '🌍', title: 'Atención a pacientes internacionales', desc: 'Coordinamos consulta virtual previa para pacientes de otro país. Planificación completa antes de llegar a Medellín.' },
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

      {/* ── INFO BAR ── */}
      <section className="py-10 px-4" style={{ backgroundColor: '#0D1321', borderTop: '1px solid #1F2937', borderBottom: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Duración', value: '60 minutos', icon: '⏱' },
              { label: 'Precio desde', value: '$150.000 COP', icon: '💰' },
              { label: 'Número de citas', value: '1 cita', icon: '📅' },
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
                <div className="p-6 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
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
              Agenda tu Evaluación Clínica Integral
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              El primer paso siempre es el más importante. Escríbenos por WhatsApp
              y agendamos el horario que mejor se adapte a ti.
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
                Agendar por WhatsApp
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
