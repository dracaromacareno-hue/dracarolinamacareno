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
  const slug = 'implantes-dentales';

  return {
    title: isEs
      ? 'Implantes Dentales Medellín | Titanio y Zirconio | Dra. Carolina Macareno'
      : 'Dental Implants Medellín | Titanium & Zirconia | Dr. Carolina Macareno',
    description: isEs
      ? 'Implantes dentales de titanio y zirconio en Medellín. Especialista con 17+ años. Implantes cigomáticos y subperiósticos. El Poblado. Agenda hoy.'
      : 'Titanium and zirconia dental implants in Medellín. Specialist with 17+ years. Zygomatic and subperiosteal implants. El Poblado. Book today.',
    keywords: isEs
      ? [
          'implantes dentales Medellín',
          'implantes dentales titanio',
          'implante cigomático',
          'implante de zirconio',
          'clínica implantes Medellín',
          'implantología El Poblado',
          'precio implantes dentales Colombia',
          'implantólogo Medellín',
          'implante subperióstico',
          'All-on-4 Medellín',
          'Dra. Carolina Macareno',
        ]
      : [
          'dental implants Medellin',
          'titanium implants',
          'zirconia implants',
          'zygomatic implants',
          'implant dentist Medellin',
          'El Poblado dental clinic',
          'Colombia dental implants',
        ],
    openGraph: {
      title: isEs
        ? 'Implantes Dentales Medellín | Dra. Carolina Macareno'
        : 'Dental Implants Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Especialista en implantología con 17+ años. Titanio, zirconio e implantes cigomáticos en El Poblado, Medellín.'
        : 'Implant specialist with 17+ years. Titanium, zirconia and zygomatic implants in El Poblado, Medellín.',
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
    q: '¿Duele el procedimiento de implante dental?',
    a: 'El procedimiento se realiza con anestesia local, por lo que durante la cirugía no siente dolor. Es posible experimentar molestia leve los primeros 2-3 días postoperatorios, que se maneja fácilmente con analgésicos convencionales.',
  },
  {
    q: '¿Cuánto duran los implantes dentales?',
    a: 'Los implantes de titanio, con una higiene adecuada y controles periódicos, pueden durar toda la vida. La corona sobre el implante tiene una vida útil de 10-15 años dependiendo del desgaste y los cuidados.',
  },
  {
    q: '¿Cómo sé si tengo suficiente hueso para un implante?',
    a: 'Realizamos un estudio tomográfico 3D (CBCT) que nos permite medir con exactitud la cantidad y calidad de hueso disponible. Si el hueso es insuficiente, existen técnicas de regeneración ósea o implantes cigomáticos como alternativa.',
  },
  {
    q: '¿Se puede colocar un implante si fumo o tengo diabetes?',
    a: 'Cada caso se evalúa individualmente. El tabaquismo y la diabetes no controlada aumentan el riesgo de fallo del implante, pero no son una contraindicación absoluta. Con un protocolo adecuado y compromisos del paciente, muchos casos son viables.',
  },
];

export default async function ImplantesDentalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localePath = (path: string) =>
    locale === 'es' ? path : '/en' + path;
  const waLink =
    'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20Implantes%20Dentales';

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        localBusinessSchema(),
        medicalServiceSchema({
          name: 'Implantes Dentales Medellín',
          description: 'Especialista en implantes dentales de titanio, zirconio y cigomáticos en Medellín con 17+ años de experiencia. El Poblado.',
          url: 'https://dracarolinamacareno.com/servicios/implantes-dentales',
        }),
      ]} />
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-16 px-4"
        style={{ backgroundColor: '#070B14' }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
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
              <span style={{ color: '#C9A461' }}>Implantes Dentales</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#C9A461' }}
            >
              Cirugía Oral · Implantología
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                color: '#F5F5F0',
                fontFamily: 'var(--font-playfair-display, serif)',
              }}
            >
              Implantes Dentales
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              La solución más cercana a tener dientes naturales. Tornillos de titanio
              que se integran al hueso y soportan coronas, puentes o prótesis completas de manera permanente.
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
              ¿Qué es un implante dental?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              Un implante dental es un tornillo de titanio de grado médico que se coloca
              quirúrgicamente dentro del hueso de la mandíbula o el maxilar para reemplazar
              la raíz de un diente perdido. Una vez que el implante se integra al hueso
              (osteointegración), soporta una corona, un puente o una prótesis completa.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#D1D5DB' }}>
              Es la única solución que reemplaza tanto la raíz como la corona del diente,
              preservando el hueso, sin desgastar dientes vecinos y con resultados
              estéticos y funcionales que imitan perfectamente la dentición natural.
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
                'Perdió uno o varios dientes por caries avanzada, trauma o enfermedad periodontal.',
                'Usa prótesis removible (placa dental) y le resulta incómoda o poco estética.',
                'Tiene un espacio vacío que afecta la masticación, el habla o la autoestima.',
                'Quiere una solución permanente que no involucre desgastar los dientes vecinos sanos.',
                'Lleva años sin uno o varios dientes y ha notado pérdida de hueso en la zona.',
                'Busca rehabilitar una arcada completa con la menor cantidad de implantes posible.',
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
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Tipos de implantes que manejo
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>
              Cada caso es diferente. El tipo de implante se elige según la cantidad de hueso disponible, la ubicación del diente, la salud general y los objetivos estéticos de cada paciente.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 48 60" fill="none" className="w-12 h-14">
                    {/* Crown */}
                    <path d="M14 18 Q24 10 34 18 L32 28 H16 Z" fill="#C9A461" opacity="0.15" stroke="#C9A461" strokeWidth="1.5"/>
                    {/* Abutment */}
                    <rect x="20" y="28" width="8" height="5" rx="1" fill="#C9A461" opacity="0.4" stroke="#C9A461" strokeWidth="1.2"/>
                    {/* Implant body */}
                    <rect x="21" y="33" width="6" height="18" rx="3" fill="none" stroke="#C9A461" strokeWidth="1.5"/>
                    {/* Thread lines */}
                    <line x1="21" y1="38" x2="27" y2="38" stroke="#C9A461" strokeWidth="0.8" opacity="0.6"/>
                    <line x1="21" y1="42" x2="27" y2="42" stroke="#C9A461" strokeWidth="0.8" opacity="0.6"/>
                    <line x1="21" y1="46" x2="27" y2="46" stroke="#C9A461" strokeWidth="0.8" opacity="0.6"/>
                    {/* Bone */}
                    <path d="M12 36 Q24 33 36 36 L36 56 Q24 58 12 56 Z" fill="#1F2937" stroke="#374151" strokeWidth="1"/>
                  </svg>
                ),
                badge: 'Más utilizado',
                title: 'Implante de Titanio',
                desc: 'El estándar de oro de la implantología. Aleación de titanio grado 5, 100% biocompatible, con tasa de éxito superior al 97%. Trabajamos con Neodent, Straumann y DioImplant, y rehabilitamos cualquier marca comercializada en Colombia o el exterior.',
                highlight: 'Tasa de éxito: 97%+',
              },
              {
                icon: (
                  <svg viewBox="0 0 48 60" fill="none" className="w-12 h-14">
                    {/* Crown */}
                    <path d="M14 18 Q24 10 34 18 L32 28 H16 Z" fill="#E5E7EB" opacity="0.15" stroke="#E5E7EB" strokeWidth="1.5"/>
                    {/* Abutment */}
                    <rect x="20" y="28" width="8" height="5" rx="1" fill="#E5E7EB" opacity="0.3" stroke="#D1D5DB" strokeWidth="1.2"/>
                    {/* Implant body - white/ceramic */}
                    <rect x="21" y="33" width="6" height="18" rx="3" fill="none" stroke="#D1D5DB" strokeWidth="1.5"/>
                    <line x1="21" y1="38" x2="27" y2="38" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.6"/>
                    <line x1="21" y1="42" x2="27" y2="42" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.6"/>
                    <line x1="21" y1="46" x2="27" y2="46" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.6"/>
                    {/* Metal-free label */}
                    <circle cx="38" cy="14" r="7" fill="#C9A461" opacity="0.2" stroke="#C9A461" strokeWidth="1"/>
                    <text x="38" y="17" textAnchor="middle" fontSize="5" fill="#C9A461" fontWeight="bold">0%</text>
                    {/* Bone */}
                    <path d="M12 36 Q24 33 36 36 L36 56 Q24 58 12 56 Z" fill="#1F2937" stroke="#374151" strokeWidth="1"/>
                  </svg>
                ),
                badge: 'Sin metal',
                title: 'Implante de Zirconio',
                desc: 'Implante cerámico 100% libre de metal, color blanco que se mimetiza perfectamente con el tejido blando. Ideal para pacientes con sensibilidad a los metales o con encías delgadas donde el metal podría ser visible.',
                highlight: 'Libre de metal',
              },
              {
                icon: (
                  <svg viewBox="0 0 56 60" fill="none" className="w-14 h-14">
                    {/* Skull outline - cheekbone area */}
                    <path d="M8 20 Q28 8 48 20 Q52 30 48 44 Q36 50 28 50 Q20 50 8 44 Q4 30 8 20Z" fill="#111827" stroke="#374151" strokeWidth="1"/>
                    {/* Zygomatic bone highlight */}
                    <path d="M38 14 Q50 18 50 30" stroke="#C9A461" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                    {/* Long implant going to zygoma */}
                    <line x1="22" y1="48" x2="44" y2="16" stroke="#C9A461" strokeWidth="2" strokeLinecap="round"/>
                    {/* Thread marks on implant */}
                    <line x1="24" y1="45" x2="27" y2="43" stroke="#C9A461" strokeWidth="1" opacity="0.7"/>
                    <line x1="29" y1="40" x2="32" y2="38" stroke="#C9A461" strokeWidth="1" opacity="0.7"/>
                    <line x1="34" y1="35" x2="37" y2="33" stroke="#C9A461" strokeWidth="1" opacity="0.7"/>
                    {/* Anchor point at zygoma */}
                    <circle cx="44" cy="16" r="3" fill="#C9A461" opacity="0.8"/>
                    {/* Anchor at jaw */}
                    <circle cx="22" cy="48" r="2" fill="#C9A461" opacity="0.5"/>
                  </svg>
                ),
                badge: 'Atrofia severa',
                title: 'Implante Cigomático',
                desc: 'Para pacientes con pérdida ósea severa en el maxilar superior donde los implantes convencionales no son posibles. Se ancla directamente en el hueso cigomático (pómulo), eliminando la necesidad de injertos óseos.',
                highlight: 'Sin injerto óseo',
              },
              {
                icon: (
                  <svg viewBox="0 0 56 50" fill="none" className="w-14 h-12">
                    {/* Bone cross section */}
                    <path d="M4 22 Q28 15 52 22 L52 46 Q28 50 4 46 Z" fill="#1F2937" stroke="#374151" strokeWidth="1"/>
                    {/* Periosteum layer */}
                    <path d="M4 22 Q28 16 52 22" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"/>
                    {/* Subperiosteal framework sitting ON the bone */}
                    <path d="M10 21 L14 17 L22 15 L28 14 L34 15 L42 17 L46 21" stroke="#C9A461" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    {/* Posts going through gum */}
                    <line x1="18" y1="16" x2="18" y2="8" stroke="#C9A461" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="28" y1="14" x2="28" y2="6" stroke="#C9A461" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="38" y1="16" x2="38" y2="8" stroke="#C9A461" strokeWidth="2" strokeLinecap="round"/>
                    {/* Crown attachment points */}
                    <circle cx="18" cy="7" r="2.5" fill="#C9A461" opacity="0.7"/>
                    <circle cx="28" cy="5" r="2.5" fill="#C9A461" opacity="0.7"/>
                    <circle cx="38" cy="7" r="2.5" fill="#C9A461" opacity="0.7"/>
                    {/* Labels */}
                    <text x="28" y="49" textAnchor="middle" fontSize="5" fill="#6B7280">Hueso</text>
                  </svg>
                ),
                badge: 'Poco hueso',
                title: 'Implante Subperióstico',
                desc: 'Se coloca sobre el hueso pero debajo del periostio. Alternativa para pacientes con atrofia ósea severa. Cada implante se fabrica completamente a medida con una empresa especializada en EE.UU., a partir del CBCT del paciente. Único, personalizado, irreemplazable.',
                highlight: 'Fabricado a medida en EE.UU.',
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="p-6 rounded-xl border h-full flex flex-col"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  {/* Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div style={{ color: '#C9A461' }}>{card.icon}</div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded tracking-wide uppercase"
                      style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#9CA3AF' }}>
                    {card.desc}
                  </p>
                  <div
                    className="text-xs font-medium px-3 py-1.5 rounded border inline-block"
                    style={{ borderColor: '#C9A461', color: '#C9A461', backgroundColor: '#C9A461' + '10' }}
                  >
                    ✓ {card.highlight}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO TRUST SECTION ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/consultorio.webp"
                  alt="Consultorio Dra. Carolina Macareno - Implantes Dentales Medellín"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>
                    El Poblado, Medellín
                  </span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#F5F5F0' }}>
                    Tecnología de diagnóstico 3D y cirugía guiada digital
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>
                ¿Por qué elegir nuestra clínica?
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                Implantología con precisión digital
              </h2>
              <div className="space-y-4">
                {[
                  { icon: '🔬', title: 'Diagnóstico tomográfico 3D', desc: 'Tomografía CBCT para medir hueso con precisión milimétrica antes de cualquier cirugía.' },
                  { icon: '🦷', title: 'Marcas líderes + compatibilidad total', desc: 'Colocamos implantes Neodent, Straumann y DioImplant. Además, rehabilitamos sobre cualquier marca comercializada en Colombia o el exterior. Los implantes subperiósticos se fabrican a medida con empresa especializada en EE.UU.' },
                  { icon: '📋', title: 'Planificación digital', desc: 'Cirugía guiada por software: sabemos exactamente dónde va cada implante antes de iniciar.' },
                  { icon: '🤝', title: '17+ años de experiencia', desc: 'Más de 3.500 pacientes atendidos. Formación avanzada en Brasil (FACOP) y Nueva York (NYU).' },
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

      {/* ── CASO CLÍNICO REAL ── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: '#C9A461' }}>
              CASO CLÍNICO REAL · IMPLANTE SUBPERIÓSTICO
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              De la planeación al resultado: un caso real
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
              Paciente con reabsorción ósea severa. Solución: implante subperióstico personalizado, fabricado a medida sobre la mandíbula. Sin injerto, sin espera — con posibilidad de rehabilitación inmediata en la misma sesión.
            </p>
            <div className="w-16 h-0.5 mx-auto mt-5" style={{ background: 'linear-gradient(to right, #C9A461, #E5B866)' }} />
          </AnimatedSection>

          {/* Photo grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { src: '/images/planeacion-implante-subperiostico-3d.webp', label: '1. Planeación Digital 3D', desc: 'Diseño del implante a medida sobre el modelo 3D de la mandíbula del paciente' },
              { src: '/images/caso-clinico-subperiostico-intraoral.webp', label: '2. Colocación Quirúrgica', desc: 'Vista intraoral — el implante se posiciona directamente sobre el hueso' },
              { src: '/images/caso-clinico-subperiostico-postqx.webp', label: '3. Resultado Postquirúrgico', desc: 'Postes emergentes listos para recibir la prótesis provisional el mismo día' },
            ].map((photo, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="rounded-xl overflow-hidden border border-[#1F2937] group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.85) 0%, transparent 55%)' }} />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs font-bold tracking-widest uppercase block mb-1" style={{ color: '#C9A461' }}>
                        {photo.label}
                      </span>
                      <p className="text-xs leading-relaxed" style={{ color: '#D1D5DB' }}>{photo.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Result photo + CTA to full case */}
          <AnimatedSection>
            <div className="rounded-xl overflow-hidden border border-[#1F2937] relative">
              <div className="relative aspect-[16/6]">
                <Image
                  src="/images/caso-clinico-subperiostico-postqx.webp"
                  alt="Resultado postquirúrgico — implante subperióstico colocado"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(7,11,20,0.92) 0%, rgba(7,11,20,0.5) 50%, rgba(7,11,20,0.2) 100%)' }} />
                <div className="absolute inset-0 flex items-center px-8 md:px-12">
                  <div className="max-w-lg">
                    <span className="text-xs font-semibold tracking-widest uppercase block mb-2" style={{ color: '#C9A461' }}>
                      4. RESULTADO POSTQUIRÚRGICO
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
                      Implantes integrados, listos para la prótesis
                    </h3>
                    <p className="text-sm mb-5" style={{ color: '#9CA3AF' }}>
                      Postes emergentes perfectamente posicionados. El paciente recibe su prótesis provisional en la misma sesión.
                    </p>
                    <Link
                      href={localePath('/blog/caso-clinico-implante-subperiostico')}
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors"
                      style={{ color: '#C9A461' }}
                    >
                      Ver caso clínico completo con videos
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Second case + video teaser */}
          <AnimatedSection className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Second case link */}
              <Link
                href={localePath('/blog/caso-clinico-implante-convencional')}
                className="flex items-center gap-4 rounded-xl border border-[#1F2937] hover:border-[#C9A461]/40 bg-[#111827] px-5 py-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201,164,97,0.1)', border: '1px solid rgba(201,164,97,0.3)' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold group-hover:text-[#C9A461] transition-colors" style={{ color: '#F5F5F0' }}>Caso Clínico: Implante Convencional</p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>Titanio · Dientes el mismo día · Próximamente</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>

              {/* Video teaser */}
              <div className="flex items-center gap-4 rounded-xl border border-[#C9A461]/20 bg-[#C9A461]/5 px-5 py-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#C9A461' }}>
                <svg className="w-5 h-5 text-[#070B14]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#F5F5F0' }}>Video de la cirugía completa disponible próximamente</p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>Desde la sedación consciente con anestesiólogo hasta la provisionalización — el proceso completo documentado</p>
              </div>
            </div>
            </div>
          </AnimatedSection>
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
                title: 'Consulta y diagnóstico 3D',
                desc: 'Tomografía CBCT, fotografías clínicas y evaluación integral del estado de salud oral. Se presenta el plan de tratamiento con costos.',
              },
              {
                step: '02',
                title: 'Cirugía de colocación del implante',
                desc: 'Procedimiento ambulatorio con anestesia local. La cirugía dura entre 30 y 90 minutos según la cantidad de implantes.',
              },
              {
                step: '03',
                title: 'Período de osteointegración',
                desc: 'El titanio se fusiona con el hueso durante 3 a 6 meses. En algunos casos se puede usar una corona provisional inmediata.',
              },
              {
                step: '04',
                title: 'Colocación del pilar y corona definitiva',
                desc: 'Se conecta el pilar protésico y se coloca la corona, puente o prótesis definitiva fabricada en zirconio o cerámica.',
              },
              {
                step: '05',
                title: 'Seguimiento y mantenimiento',
                desc: 'Controles periódicos para verificar la salud del implante y los tejidos periimplantarios. Higiene personalizada con hilo dental especial.',
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
                    <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                      {s.desc}
                    </p>
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
              { label: 'Duración del proceso', value: '4 – 8 meses', icon: '⏱' },
              { label: 'Precio desde', value: '$2,500,000 COP / implante', icon: '💰' },
              { label: 'Número de citas', value: '3 – 5 citas', icon: '📅' },
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
                  <p className="font-semibold" style={{ color: '#C9A461' }}>
                    {pill.value}
                  </p>
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
                  <h3
                    className="font-semibold text-base mb-3 flex items-start gap-2"
                    style={{ color: '#E5B866' }}
                  >
                    <span className="shrink-0 mt-0.5" style={{ color: '#C9A461' }}>▸</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL PATIENTS BANNER ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#070B14', borderTop: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Link
              href={locale === 'es' ? '/all-on-4-medellin' : '/en/all-on-4-medellin'}
              className="flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-[#C9A461]/30 p-6 hover:border-[#C9A461]/60 transition-all group"
              style={{ backgroundColor: '#111827' }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,164,97,0.15)', border: '1px solid rgba(201,164,97,0.4)' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="text-xs font-semibold tracking-widest uppercase block mb-1" style={{ color: '#C9A461' }}>
                  {locale === 'es' ? 'Pacientes Internacionales' : 'International Patients'}
                </span>
                <p className="font-semibold text-base group-hover:text-[#C9A461] transition-colors" style={{ color: '#F5F5F0' }}>
                  {locale === 'es'
                    ? '¿Eres paciente internacional? Ver guía All-on-4 Medellín'
                    : 'Are you an international patient? See the All-on-4 Medellín guide'}
                </p>
                <p className="text-sm mt-1" style={{ color: '#9CA3AF' }}>
                  {locale === 'es'
                    ? 'Costos, logística, tiempos y todo lo que necesitas saber para venir a Medellín.'
                    : 'Costs, logistics, timelines and everything you need to know to come to Medellín.'}
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
              ¿Listo para recuperar tu sonrisa?
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              Agenda tu consulta de diagnóstico y recibe un plan de tratamiento
              personalizado con costos transparentes.
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
