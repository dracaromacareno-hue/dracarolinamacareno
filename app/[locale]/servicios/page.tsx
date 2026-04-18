import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { faqSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const BASE = 'https://dracarolinamacareno.com';
  const isEs = locale === 'es';
  return {
    title: isEs
      ? 'Servicios Odontológicos Especializados | Dra. Carolina Macareno Medellín'
      : 'Specialized Dental Services | Dr. Carolina Macareno Medellín Colombia',
    description: isEs
      ? 'Implantes dentales, prótesis fija, diseño de sonrisa y rehabilitación oral en El Poblado, Medellín. Atendemos pacientes de Colombia, Panamá, Puerto Rico y EE.UU. 17+ años de experiencia.'
      : 'Dental implants, fixed prosthetics, smile design and oral rehabilitation in Medellín, Colombia. Serving patients from Panama, Puerto Rico and the USA. 17+ years experience.',
    keywords: isEs
      ? ['implantes dentales medellin', 'diseño de sonrisa colombia', 'protesis fija medellin', 'rehabilitacion oral colombia', 'turismo dental medellin', 'implantes dentales panama', 'implantes dentales puerto rico', 'dentista para extranjeros colombia', 'all on 4 medellin', 'estetica dental medellin']
      : ['dental implants medellin colombia', 'smile design medellin', 'dental tourism colombia', 'dental implants for panama patients', 'dental implants puerto rico', 'affordable dental implants colombia', 'all on 4 medellin colombia', 'oral rehabilitation medellin'],
    alternates: {
      canonical: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios`,
      languages: { es: `${BASE}/servicios`, en: `${BASE}/en/servicios` },
    },
    openGraph: {
      title: isEs
        ? 'Servicios | Dra. Carolina Macareno — Rehabilitadora Oral Medellín'
        : 'Services | Dr. Carolina Macareno — Oral Rehabilitation Medellín',
      description: isEs
        ? 'Implantes, diseño de sonrisa y rehabilitación oral en Medellín. Pacientes de Panamá, Puerto Rico y EE.UU. bienvenidos.'
        : 'Dental implants, smile design and oral rehabilitation in Medellín, Colombia. Patients from Panama, Puerto Rico and USA welcome.',
      url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios`,
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

const services = [
  {
    slug: 'implantes-dentales',
    eyebrow: 'Cirugía Oral · Implantología',
    title: 'Implantes Dentales',
    description:
      'Reemplazo permanente de dientes perdidos mediante tornillos de titanio integrados al hueso. La solución más cercana a tener dientes naturales. Unitarios, múltiples, All-on-4 y cigomáticos.',
    price: 'Desde $2,500,000 COP / implante',
    duration: '4 – 8 meses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="12" cy="7" r="3" />
        <path d="M12 10v12M10 19h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'protesis-fija',
    eyebrow: 'Implantología · Prótesis Dental',
    title: 'Prótesis Fija Atornillada',
    description:
      'Restauración permanente sobre implantes en zirconio o cerámica. Coronas unitarias, puentes, All-on-4 y arcadas completas. Sin cemento, sin removible, sin adhesivos.',
    price: 'Desde $3,000,000 COP',
    duration: '2 – 4 semanas de fabricación',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <rect x="8" y="3" width="8" height="9" rx="4" />
        <path d="M8 9v11M16 9v11M6 20h12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'diseno-de-sonrisa',
    eyebrow: 'Estética · Carillas · Diseño Digital',
    title: 'Diseño de Sonrisa',
    description:
      'Transformación estética completa con carillas de cerámica o resina y diseño digital DSD previo. Planificamos el resultado antes de tocar un solo diente.',
    price: 'Desde $5,000,000 COP (sonrisa completa)',
    duration: '3 – 4 semanas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M12 3 Q17 3 18 8 L18 16 Q17 21 12 21 Q7 21 6 16 L6 8 Q7 3 12 3Z" />
        <path d="M9 13 Q12 10 15 13" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'rehabilitacion-oral-completa',
    eyebrow: 'All-on-4 · All-on-6 · Implantes Cigomáticos',
    title: 'Rehabilitación Oral Completa',
    description:
      'Reconstrucción integral de toda la dentición. Combina implantes, prótesis y estética en un plan unificado y digital. Para pacientes con pérdida dental extensa o total.',
    price: 'Desde $15,000,000 COP / arcada',
    duration: '6 – 12 meses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M3 9 Q12 3 21 9" strokeLinecap="round" />
        <path d="M5 9v9M8 8v10M12 7v11M16 8v10M19 9v9" strokeLinecap="round" />
        <path d="M3 18h18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'estetica-dental',
    eyebrow: 'Blanqueamiento · Carillas · Mínima Invasión',
    title: 'Estética Dental Avanzada',
    description:
      'Blanqueamiento profesional, carillas de resina, contorneado y cierre de diastemas. Resultados visibles desde la primera sesión sin procedimientos invasivos.',
    price: 'Desde $700,000 COP',
    duration: '1 – 3 sesiones',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'consulta-diagnostico',
    eyebrow: 'Primera Cita · Evaluación · Sin Compromiso',
    title: 'Consulta de Diagnóstico',
    description:
      'Evaluación integral con tecnología digital. Examen completo, radiografías, fotos clínicas y plan de tratamiento con costos transparentes. El mejor primer paso.',
    price: 'Desde $150,000 COP (se descuenta del tto.)',
    duration: '60 – 90 minutos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const localePath = (path: string) =>
    locale === 'es' ? path : '/en' + path;
  const waLink =
    'https://wa.me/573163975232?text=Hola%2C%20me%20gustaría%20información%20sobre%20los%20servicios%20de%20la%20Dra.%20Carolina%20Macareno';

  const serviciosFaqs = [
    {
      question: '¿Cuánto cuestan los implantes dentales en Medellín?',
      answer: 'El precio de un implante dental en Medellín varía entre $2,500,000 y $4,500,000 COP por unidad, dependiendo del tipo y la complejidad del caso. En la consulta de diagnóstico entregamos un plan de tratamiento con costos detallados y transparentes.',
    },
    {
      question: '¿Puedo viajar desde Panamá, Puerto Rico o EE.UU. para hacerme implantes dentales en Colombia?',
      answer: 'Sí, atendemos pacientes internacionales de Panamá, Puerto Rico, Estados Unidos y otros países. El ahorro comparado con precios locales en esos países puede ser del 50 al 70%. Coordinamos el plan de tratamiento por anticipado para optimizar el tiempo de estadía.',
    },
    {
      question: '¿Cuánto tiempo necesito estar en Medellín para un tratamiento de implantes?',
      answer: 'Para implantes convencionales se requieren dos viajes: el primero de 5-7 días para la cirugía, y el segundo 3-6 meses después para la prótesis definitiva. Con carga inmediata, en algunos casos se puede completar el tratamiento en una sola visita de 7-10 días.',
    },
    {
      question: '¿Qué es la prótesis fija atornillada sobre implantes?',
      answer: 'Es una restauración dental permanente fijada mecánicamente sobre implantes de titanio. No se retira, no usa cemento ni adhesivos, y funciona como dientes naturales. Está fabricada en zirconio o cerámica de alta resistencia con tecnología digital CAD/CAM.',
    },
    {
      question: '¿En qué consiste el diseño de sonrisa digital?',
      answer: 'El diseño de sonrisa digital es un proceso que combina fotografía clínica, planificación computarizada y restauraciones en cerámica para transformar la apariencia de los dientes. Se puede visualizar el resultado final antes de comenzar cualquier procedimiento.',
    },
  ];

  return (
    <>
      <SchemaOrg schema={[faqSchema(serviciosFaqs)]} />
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="down" delay={0}>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#9CA3AF' }}>
              <Link href={localePath('/')} className="hover:text-[#C9A461] transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span style={{ color: '#C9A461' }}>Servicios</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#C9A461' }}
            >
              Rehabilitación Oral · Implantología · Estética
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Servicios Especializados
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              Cada tratamiento está respaldado por más de 17 años de experiencia,
              tecnología digital de vanguardia y un compromiso absoluto con la
              excelencia clínica. El Poblado, Medellín, Colombia.
            </p>
          </AnimatedSection>

          {/* Stats strip */}
          <AnimatedSection delay={0.25}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: '17+', label: 'Años de experiencia' },
                { value: '3,500+', label: 'Pacientes atendidos' },
                { value: '6', label: 'Especialidades' },
                { value: '100%', label: 'Tecnología digital' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border text-center"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <p
                    className="text-2xl font-bold mb-1"
                    style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICE CARDS GRID ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-2 text-center"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Todos los tratamientos
            </h2>
            <p className="text-center mb-12" style={{ color: '#9CA3AF' }}>
              Haga clic en cualquier servicio para conocer todos los detalles, el proceso y los precios.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <div
                  className="flex flex-col h-full rounded-2xl border overflow-hidden group transition-all duration-300 hover:border-[#C9A461]/50"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  {/* Card top accent */}
                  <div className="h-1 w-full" style={{ backgroundColor: '#C9A461' }} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: '#0D1321', color: '#C9A461' }}
                    >
                      {service.icon}
                    </div>

                    {/* Eyebrow */}
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: '#9CA3AF' }}
                    >
                      {service.eyebrow}
                    </p>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#D1D5DB' }}>
                      {service.description}
                    </p>

                    {/* Price + Duration pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ borderColor: '#C9A461', color: '#C9A461', backgroundColor: 'transparent' }}
                      >
                        💰 {service.price}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ borderColor: '#1F2937', color: '#9CA3AF', backgroundColor: 'transparent' }}
                      >
                        ⏱ {service.duration}
                      </span>
                    </div>

                    {/* CTA */}
                    <Link
                      href={localePath(`/servicios/${service.slug}`)}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                      style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                    >
                      Ver más
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATENCIÓN INTEGRAL — EQUIPO DE ESPECIALISTAS ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4 text-center"
              style={{ color: '#C9A461' }}
            >
              {isEs ? 'Atención Integral · Equipo de Especialistas' : 'Comprehensive Care · Specialist Team'}
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-3 text-center"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Especialidades complementarias bajo un mismo techo' : 'Complementary specialties under one roof'}
            </h2>
            <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
              {isEs
                ? 'Para un tratamiento verdaderamente integral, contamos con un equipo de especialistas que trabajan de forma coordinada con la Dra. Macareno.'
                : 'For truly comprehensive treatment, our team of specialists works in a coordinated approach with Dr. Macareno.'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                slug: 'ortodoncia',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-9 h-9">
                    <path d="M8 3h8M6 7h12M5 11h14M6 15h12M8 19h8" strokeLinecap="round" />
                  </svg>
                ),
                titleEs: 'Ortodoncia',
                titleEn: 'Orthodontics',
                descEs: 'Brackets metálicos, cerámicos e Invisalign para alineación dental perfecta.',
                descEn: 'Metal, ceramic brackets and Invisalign for perfect dental alignment.',
                tagEs: 'Alineación · Brackets · Invisalign',
                tagEn: 'Alignment · Braces · Invisalign',
              },
              {
                slug: 'endodoncia',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-9 h-9">
                    <path d="M12 3 Q16 3 17 8 L17 14 Q16 21 12 21 Q8 21 7 14 L7 8 Q8 3 12 3Z" />
                    <path d="M12 8v8" strokeLinecap="round" />
                  </svg>
                ),
                titleEs: 'Endodoncia',
                titleEn: 'Endodontics',
                descEs: 'Tratamiento de conductos para salvar dientes que de otro modo habría que extraer.',
                descEn: 'Root canal treatment to save teeth that would otherwise need extraction.',
                tagEs: 'Conductos · Conservar dientes',
                tagEn: 'Root Canal · Tooth Preservation',
              },
              {
                slug: 'periodoncia',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-9 h-9">
                    <path d="M4 17 Q12 10 20 17" strokeLinecap="round" />
                    <path d="M7 17v3M12 14v6M17 17v3" strokeLinecap="round" />
                  </svg>
                ),
                titleEs: 'Periodoncia',
                titleEn: 'Periodontics',
                descEs: 'Diagnóstico y tratamiento de la enfermedad periodontal. Base para implantes exitosos.',
                descEn: 'Diagnosis and treatment of periodontal disease. Foundation for successful implants.',
                tagEs: 'Encías · Enfermedad Periodontal',
                tagEn: 'Gums · Periodontal Disease',
              },
              {
                slug: 'cirugia-maxilofacial',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-9 h-9">
                    <path d="M12 3c-4.4 0-8 3.6-8 8v2c0 4.4 3.6 8 8 8s8-3.6 8-8v-2c0-4.4-3.6-8-8-8z" />
                    <path d="M9 14s1 1 3 1 3-1 3-1" strokeLinecap="round" />
                    <path d="M9 9h.01M15 9h.01" strokeLinecap="round" />
                  </svg>
                ),
                titleEs: 'Cirugía Maxilofacial',
                titleEn: 'Oral & Maxillofacial Surgery',
                descEs: 'Extracciones complejas, muelas del juicio, cirugía ortognática y procedimientos previos a implantes.',
                descEn: 'Complex extractions, wisdom teeth, orthognathic surgery and pre-implant procedures.',
                tagEs: 'Cirugía · Extracciones · Ortognática',
                tagEn: 'Surgery · Extractions · Orthognathic',
              },
            ].map((sp, i) => (
              <AnimatedSection key={sp.slug} delay={i * 0.08}>
                <Link
                  href={localePath(`/servicios/${sp.slug}`)}
                  className="flex flex-col h-full rounded-2xl border overflow-hidden group transition-all duration-300 hover:border-[#C9A461]/50 hover:scale-[1.02]"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <div className="h-1 w-full" style={{ backgroundColor: '#C9A461', opacity: 0.5 }} />
                  <div className="p-6 flex flex-col flex-1">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: '#0D1321', color: '#C9A461' }}
                    >
                      {sp.icon}
                    </div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#9CA3AF' }}>
                      {isEs ? sp.tagEs : sp.tagEn}
                    </p>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
                    >
                      {isEs ? sp.titleEs : sp.titleEn}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#D1D5DB' }}>
                      {isEs ? sp.descEs : sp.descEn}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                      style={{ color: '#C9A461' }}
                    >
                      {isEs ? 'Ver especialidad' : 'View specialty'}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DRA. CAROLINA ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              ¿Por qué elegir a la Dra. Macareno?
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: '🎓',
                title: 'Especialista certificada',
                desc: 'Posgrado en Rehabilitación Oral (U. CES), formación en NYU y cursos avanzados en implantología internacional.',
              },
              {
                icon: '💡',
                title: 'Tecnología digital de punta',
                desc: 'Scanner intraoral 3Shape, diseño digital DSD, tomografía 3D y planificación CAD/CAM para precisión milimétrica.',
              },
              {
                icon: '🤝',
                title: 'Atención personalizada',
                desc: 'Cada plan de tratamiento es único. Sin protocolos genéricos — solo soluciones diseñadas para usted y su caso.',
              },
              {
                icon: '💎',
                title: 'Precios transparentes',
                desc: 'Los costos se presentan por escrito antes de comenzar. Sin cobros sorpresa. Opciones de pago disponibles.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="flex items-start gap-4 p-6 rounded-xl border"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#F5F5F0' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{item.desc}</p>
                  </div>
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
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              El Poblado, Medellín · +57 316 397 5232
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              ¿No sabe por dónde empezar?
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              La consulta de diagnóstico es el primer paso. Saldrá con un plan claro,
              costos reales y toda la información para tomar la mejor decisión para su salud oral.
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
                href={localePath('/servicios/consulta-diagnostico')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
                style={{ borderColor: '#C9A461', color: '#C9A461' }}
              >
                Ver consulta de diagnóstico
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
    </>
  );
}
