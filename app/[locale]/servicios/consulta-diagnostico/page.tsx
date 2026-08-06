import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import RespuestaDirecta from '@/components/RespuestaDirecta';
import SchemaOrg, { medicalServiceSchema, breadcrumbSchema, faqSchema, medicalWebPageSchema } from '@/components/SchemaOrg';

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
    // 20-jul-2026. "Evaluación clínica integral" es como lo llama la clínica,
    // no como lo busca el paciente. El costo de la valoración es la 3ª pregunta
    // más frecuente en WhatsApp (97 veces en 6 meses), por eso va en el título.
    // GSC 90d: la consulta top es "evaluación dental integral gratuita", así que
    // la valoración virtual gratis se nombra en la description.
    title: isEs
      ? 'Valoración Odontológica en Medellín desde $150.000'
      : 'Dental Evaluation in Medellín from $150,000 COP',
    description: isEs
      ? 'Historia clínica, escaneo intraoral 3D, simulación, diagnóstico y presupuesto en 60 minutos. Se descuenta si inicias tratamiento. Valoración gratis.'
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

const faqsEs = [
  {
    q: '¿Cuánto cuesta la primera consulta o valoración odontológica en Medellín?',
    a: 'La evaluación odontológica integral cuesta desde $150.000 COP e incluye historia clínica, evaluación de tus radiografías, escaneo intraoral 3D, planeación y simulación digital, diagnóstico, opciones de tratamiento y presupuesto. El paquete completo de $350.000 COP añade la limpieza dental profesional completa. Las imágenes diagnósticas no están incluidas: puedes llevarlas o tomarlas el mismo día en el centro radiológico de la torre vecina. Si inicias tratamiento, el valor se descuenta del total.',
  },
  {
    q: '¿El costo de la evaluación se descuenta si inicio tratamiento?',
    a: 'Sí. Si decide iniciar tratamiento con nosotros, el valor de la evaluación se descuenta del costo total del tratamiento. Es una inversión, no un gasto.',
  },
  {
    q: '¿Puedo venir sin saber qué tratamiento necesito?',
    a: 'Es exactamente para eso. La evaluación está diseñada para pacientes que no saben qué necesitan, que quieren una segunda opinión o que simplemente no han ido al dentista hace tiempo. Saldrá con un diagnóstico claro, opciones concretas y todas sus dudas resueltas.',
  },
  {
    q: '¿Las radiografías están incluidas en la valoración?',
    a: 'No. Las imágenes diagnósticas (radiografía panorámica o tomografía) no están incluidas en el valor de la valoración. Si tienes radiografías recientes de menos de 6 meses, llévalas. Si no las tienes, puedes tomarlas el mismo día en el centro radiológico ubicado en la torre vecina. El escaneo intraoral 3D sí está incluido y se realiza en el consultorio.',
  },
  {
    q: '¿Qué diferencia hay entre el paquete de $150.000 y el de $350.000?',
    a: 'El paquete de $150.000 incluye la evaluación clínica integral: historia clínica, evaluación de radiografías, escaneo intraoral 3D, planeación y simulación digital, diagnóstico, opciones de tratamiento y presupuesto. El paquete de $350.000 incluye todo lo anterior más la limpieza dental completa: detartraje, remoción de cálculos, profilaxis, despigmentación de manchas superficiales y evaluación periodontal.',
  },
];

const faqsEn = [
  {
    q: 'How much does the first dental consultation or assessment cost in Medellín?',
    a: 'The comprehensive dental evaluation costs from $150,000 COP and includes clinical history, review of your X-rays, 3D intraoral scan, digital planning and simulation, diagnosis, treatment options and a written quote. The complete $350,000 COP package adds a full professional dental cleaning. Diagnostic imaging is not included: you can bring your X-rays or have them taken the same day at the radiology center in the neighboring tower. If you start treatment, the amount is deducted from the total.',
  },
  {
    q: 'Is the cost of the evaluation deducted if I start treatment?',
    a: 'Yes. If you decide to start treatment with us, the value of the evaluation is deducted from the total cost of the treatment. It is an investment, not an expense.',
  },
  {
    q: 'Can I come without knowing what treatment I need?',
    a: "That is exactly what it is for. The evaluation is designed for patients who don't know what they need, who want a second opinion or who simply haven't been to the dentist in a while. You will leave with a clear diagnosis, concrete options and all your questions answered.",
  },
  {
    q: 'Are X-rays included in the evaluation?',
    a: 'No. Diagnostic imaging (panoramic X-ray or CT scan) is not included in the price of the evaluation. If you have recent X-rays (less than 6 months old), bring them. If you do not have them, you can have them taken the same day at the radiology center located in the neighboring tower. The 3D intraoral scan is included and is done at the office.',
  },
  {
    q: 'What is the difference between the $150,000 and the $350,000 package?',
    a: 'The $150,000 package includes the comprehensive clinical evaluation: clinical history, review of your X-rays, 3D intraoral scan, digital planning and simulation, diagnosis, treatment options and a written quote. The $350,000 package includes all of the above plus the complete dental cleaning: scaling, calculus removal, prophylaxis, removal of surface stains and periodontal evaluation.',
  },
];


export default async function ConsultaDiagnosticoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const faqs = isEs ? faqsEs : faqsEn;
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) =>
    locale === 'es' ? path : '/en' + path;
  const waMessage = 'Hola, me interesa agendar una Evaluación Clínica Integral';

  const breadcrumbs = [
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Servicios' : 'Services', url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: isEs ? 'Evaluación Clínica Integral' : 'Comprehensive Clinical Evaluation', url: isEs ? `${BASE}/servicios/consulta-diagnostico` : `${BASE}/en/servicios/consulta-diagnostico` },
  ];

  return (
    <main style={{ backgroundColor: '#FCFBF9' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/consulta-diagnostico` : `${BASE}/en/servicios/consulta-diagnostico`,
          name: isEs ? 'Sonrisa 360°, Consulta Diagnóstica Medellín' : 'Smile 360°, Diagnostic Consultation Medellín',
          description: isEs ? 'Evaluación odontológica integral con escaneo intraoral 3D, planeación digital, diagnóstico y presupuesto. Desde $150.000 COP.' : 'Comprehensive dental evaluation with 3D intraoral scan, digital planning, diagnosis and written quote. From $150,000 COP.',
          procedureName: isEs ? 'Evaluación Clínica Integral Sonrisa 360°' : 'Smile 360° Comprehensive Clinical Evaluation',
        }),
        medicalServiceSchema({
          name: 'Evaluación Clínica Integral Medellín',
          description: 'Evaluación odontológica integral con diagnóstico, impresión digital, limpieza dental y diseño de sonrisa. El Poblado, Medellín.',
          url: 'https://dracarolinamacareno.com/servicios/consulta-diagnostico',
        }),
        faqSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema(breadcrumbs),
      ]} />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="down" delay={0}>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#77726A' }}>
              <Link href={localePath('/')} className="hover:text-[#8A6B2E] transition-colors">Inicio</Link>
              <span>/</span>
              <Link href={localePath('/servicios')} className="hover:text-[#8A6B2E] transition-colors">Servicios</Link>
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
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Evaluación Clínica Integral en Medellín' : 'Comprehensive Clinical Assessment in Medellín'}
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#5A5449' }}>
              El primer paso para transformar tu salud oral. Una evaluación completa que incluye
              diagnóstico digital, impresión intraoral, limpieza profesional y diseño de sonrisa, 
              todo en una sola cita de 60 minutos, sin sorpresas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RespuestaDirecta
        pregunta={isEs ? '¿Cuánto cuesta la valoración odontológica en Medellín?' : 'How much does a dental consultation cost in Medellín?'}
        respuesta={isEs
          ? 'La evaluación clínica integral en Medellín cuesta desde $150.000 COP e incluye historia clínica, evaluación de tus radiografías, escaneo intraoral 3D, planeación y simulación digital, diagnóstico, opciones de tratamiento y presupuesto. El paquete completo de $350.000 COP añade la limpieza dental profesional completa. Las imágenes diagnósticas no están incluidas: puedes llevarlas o tomarlas el mismo día en el centro radiológico de la torre vecina. Si inicias tratamiento, el valor se descuenta del total.'
          : 'A comprehensive clinical evaluation in Medellín costs from $150,000 COP and includes clinical history, review of your X-rays, 3D intraoral scan, digital planning and simulation, diagnosis, treatment options and a written quote. The complete $350,000 COP package adds a full professional dental cleaning. Diagnostic imaging is not included: you can bring your X-rays or have them taken the same day at the radiology center in the neighboring tower. If you start treatment, the amount is deducted from the total.'}
      />

      {/* ── QUÉ ES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              ¿Qué es la Evaluación Clínica Integral?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>
              Es mucho más que una consulta tradicional. En 60 minutos evaluamos tu salud oral de forma
              completa: clínica y emocionalmente. Escuchamos tu historia, entendemos qué te trajo aquí,
              cuáles son tus expectativas y gustos, y desde ahí construimos un diagnóstico y un plan
              de tratamiento real, adaptado a ti.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#5A5449' }}>
              Utilizamos tecnología de escaneo intraoral 3D para digitalizar toda la información
              de tu boca, obteniendo un modelo 3D preciso. Con esa información, presentamos un diagnóstico
              claro y opciones de tratamiento acordes a tu necesidad y presupuesto.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>
              ¿Qué incluye?
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Dos fases, todo en 60 minutos
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#77726A' }}>
              Una evaluación diseñada para darte claridad total sobre tu salud oral y tus opciones reales de tratamiento.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phase 1 */}
            <AnimatedSection delay={0.1}>
              <div className="p-7 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#FFFFFF', borderColor: '#C9A461', borderWidth: '1px' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shrink-0"
                    style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                  >
                    01
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C9A461' }}>Fase 1</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
                  Evaluación Clínica Completa
                </h3>
                <ul className="space-y-3 flex-1">
                  {[
                    'Historia clínica detallada: antecedentes médicos, medicamentos y motivo de consulta',
                    'Evaluación clínica y emocional del paciente, comprendemos qué te trajo y qué esperas',
                    'Examen oral completo: dientes, encías, articulación, musculatura y tejidos blandos',
                    'Registro fotográfico clínico estandarizado',
                    'Evaluación de tus radiografías (si las tienes, las usamos; si no, te damos la orden para que te las realices)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1" style={{ color: '#C9A461' }}>✓</span>
                      <span className="text-sm leading-relaxed" style={{ color: '#5A5449' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Phase 2 */}
            <AnimatedSection delay={0.2}>
              <div className="p-7 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#FFFFFF', borderColor: '#C9A461', borderWidth: '1px' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shrink-0"
                    style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                  >
                    02
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C9A461' }}>Fase 2</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
                  Impresión Digital y Diagnóstico
                </h3>
                <ul className="space-y-3 flex-1">
                  {[
                    'Escaneo intraoral 3D con escáner 3Shape, sin alginatos incómodos',
                    'Digitalización completa de toda la información de tu boca',
                    'Diagnóstico detallado explicado en pantalla con imágenes reales',
                    'Opciones de tratamiento adaptadas a tu necesidad y presupuesto, sin presiones',
                    'Limpieza dental profesional completa y diseño de sonrisa digital (paquete completo)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1" style={{ color: '#C9A461' }}>✓</span>
                      <span className="text-sm leading-relaxed" style={{ color: '#5A5449' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── QUIÉN NECESITA ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
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
                  <span style={{ color: '#5A5449' }}>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRECIOS ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>
              Precios transparentes
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Elige el paquete que más te conviene
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#77726A' }}>
              Sin letras pequeñas. El valor de la evaluación se descuenta del tratamiento si decides realizarlo con nosotros.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Paquete básico */}
            <AnimatedSection delay={0.1}>
              <div className="p-7 rounded-xl border flex flex-col h-full" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#77726A' }}>Paquete Esencial</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>$150.000</span>
                  <span className="text-sm mb-1" style={{ color: '#77726A' }}>COP</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    'Evaluación clínica y emocional completa',
                    'Historia clínica detallada',
                    'Evaluación de tus radiografías',
                    'Escaneo intraoral 3D (3Shape)',
                    'Planeación y simulación digital de tu caso',
                    'Diagnóstico, opciones de tratamiento y presupuesto',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1" style={{ color: '#C9A461' }}>✓</span>
                      <span className="text-sm" style={{ color: '#5A5449' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  message={waMessage}
                  locale={locale as 'es' | 'en'}
                  trackingLabel="consulta_diagnostico_esencial"
                  className="block text-center py-3 px-6 rounded-lg font-semibold text-sm border transition-all hover:scale-105 border-[#C9A461] text-[#8A6B2E]"
                >
                  Agendar por WhatsApp →
                </WhatsAppLink>
              </div>
            </AnimatedSection>

            {/* Paquete completo */}
            <AnimatedSection delay={0.2}>
              <div className="p-7 rounded-xl border flex flex-col h-full relative" style={{ backgroundColor: '#FFFFFF', borderColor: '#C9A461' }}>
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase"
                  style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                >
                  Más completo
                </div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#C9A461' }}>Paquete Completo</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>$350.000</span>
                  <span className="text-sm mb-1" style={{ color: '#77726A' }}>COP</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    'Todo lo del paquete esencial',
                    'Detartraje y remoción de cálculos',
                    'Profilaxis y despigmentación de manchas superficiales',
                    'Evaluación periodontal',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1" style={{ color: '#C9A461' }}>✓</span>
                      <span className="text-sm" style={{ color: '#5A5449' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  message={waMessage}
                  locale={locale as 'es' | 'en'}
                  trackingLabel="consulta_diagnostico_completo"
                  className="block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]"
                >
                  Agendar por WhatsApp →
                </WhatsAppLink>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PHOTO TRUST ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
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
                  <p className="text-sm font-semibold mt-1" style={{ color: '#211E18' }}>60 minutos · Sin compromiso · El Poblado</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>¿Por qué elegirnos?</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
                La primera cita lo cambia todo
              </h2>
              <div className="space-y-4">
                {[
                  { icon: <Icon name="chat" />, title: 'Escuchamos antes de diagnosticar', desc: 'Entendemos tu historia, tus miedos, tus expectativas y tu presupuesto antes de proponer cualquier tratamiento.' },
                  { icon: <Icon name="phone" />, title: 'Escaneo intraoral', desc: 'El escaneo intraoral nos da toda la información digital que necesitamos, sin exponer al paciente a radiación innecesaria.' },
                  { icon: <Icon name="money" />, title: 'Valor se descuenta del tratamiento', desc: 'Si decides iniciar tratamiento con nosotros, el costo de la evaluación se descuenta del total. Es una inversión.' },
                  { icon: <Icon name="globe" />, title: 'Atención a pacientes internacionales', desc: 'Coordinamos consulta virtual previa para pacientes de otro país. Planificación completa antes de llegar a Medellín.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: '#211E18' }}>{item.title}</p>
                      <p className="text-sm" style={{ color: '#77726A' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <section className="py-10 px-4" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E3DA', borderBottom: '1px solid #E8E3DA' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Duración', value: '60 minutos', icon: '⏱' },
              { label: 'Precio desde', value: '$150.000 COP', icon: <Icon name="money" /> },
              { label: 'Número de citas', value: '1 cita', icon: <Icon name="calendar" /> },
            ].map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
              >
                <span className="text-2xl">{pill.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: '#77726A' }}>{pill.label}</p>
                  <p className="font-semibold" style={{ color: '#C9A461' }}>{pill.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                  <h3 className="font-semibold text-base mb-3 flex items-start gap-2" style={{ color: '#E5B866' }}>
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

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Agenda tu Evaluación Clínica Integral
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#5A5449' }}>
              El primer paso siempre es el más importante. Escríbenos por WhatsApp
              y agendamos el horario que mejor se adapte a ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={waMessage}
                locale={locale as 'es' | 'en'}
                trackingLabel="consulta_diagnostico_cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.938l6.29-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.012-1.374l-.36-.213-3.733.978.995-3.629-.234-.373A9.778 9.778 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                </svg>
                Agendar por WhatsApp
              </WhatsAppLink>
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
