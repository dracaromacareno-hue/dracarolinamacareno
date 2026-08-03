import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import RespuestaDirecta from '@/components/RespuestaDirecta';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import { casosDisenoSonrisa } from '@/lib/casos-galeria';
import SchemaOrg, { medicalServiceSchema, breadcrumbSchema, faqSchema, medicalWebPageSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const BASE = 'https://dracarolinamacareno.com';
  const isEs = locale === 'es';
  const slug = 'diseno-de-sonrisa';

  return {
    title: isEs
      ? 'Diseño de Sonrisa en Medellín | Dientes Parejos y Blancos'
      : 'Smile Design in Medellín | Even and White Teeth',
    description: isEs
      ? 'Diseño de sonrisa en Medellín: microdiseño desde $1.500 USD y carillas cerámicas premium hasta $8.000 USD. Ve el resultado antes de empezar con DSD.'
      : 'Smile makeover in Medellín for straight, white teeth: micro-design from $1,500 USD up to $8,000 USD in premium ceramic veneers. See the result first with Digital Smile Design.',
    keywords: isEs
      ? [
          'diseño de sonrisa Medellín',
          'carillas dentales Medellín',
          'carillas de porcelana',
          'sonrisa perfecta Medellín',
          'diseño digital sonrisa',
          'DSD Medellín',
          'carillas cerámica',
          'Hollywood smile Medellín',
          'carillas zirconio Medellín',
          'carillas resina Medellín',
          'Dra. Carolina Macareno',
        ]
      : [
          'smile design Medellin',
          'dental veneers Medellin',
          'porcelain veneers Colombia',
          'DSD digital smile design',
          'Hollywood smile Medellin',
          'ceramic veneers El Poblado',
        ],
    openGraph: {
      title: isEs
        ? 'Diseño de Sonrisa Medellín | Dra. Carolina Macareno'
        : 'Smile Design Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Carillas cerámicas y diseño digital de sonrisa en El Poblado, Medellín. Ve el resultado antes de empezar con tecnología DSD.'
        : 'Ceramic veneers and digital smile design in El Poblado, Medellín. See the result before starting with DSD technology.',
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

const faqsEs = [
  {
    q: '¿Se dañan los dientes para colocar carillas?',
    a: 'Depende del tipo de carilla. Las de resina compuesta se colocan sin ningún desgaste y son completamente reversibles. Las cerámicas requieren un desgaste mínimo del esmalte (0.3-0.5 mm) bajo anestesia local. En ambos casos se prioriza preservar el máximo de diente sano.',
  },
  {
    q: '¿Cuánto dura un diseño de sonrisa?',
    a: 'Depende del material: las carillas de resina compuesta duran de 5 a 7 años y las cerámicas (disilicato o zirconio) de 10 a 15 años con el cuidado adecuado. El bruxismo, la higiene y los hábitos alimenticios influyen en su durabilidad.',
  },
  {
    q: '¿Duele el diseño de sonrisa?',
    a: 'No duele. La preparación de las carillas cerámicas se hace con anestesia local, así que no se siente dolor durante el procedimiento. Puede haber una sensibilidad leve y temporal los primeros días, que cede sola. Las carillas de resina no requieren desgaste.',
  },
  {
    q: '¿Puedo ver cómo quedará mi sonrisa antes de empezar?',
    a: 'Sí. Con el Diseño Digital de Sonrisa (DSD) simulamos el resultado sobre tus propias fotos antes de tocar ningún diente. Además se hace un mockup (prueba en boca) para que apruebes la forma, el tamaño y el color físicamente antes de fabricar las carillas definitivas.',
  },
  {
    q: '¿Cuántas citas necesita un diseño de sonrisa?',
    a: 'Un diseño con carillas cerámicas suele completarse en 3 o 4 citas: valoración y diseño digital (DSD), preparación e impresión, mockup de prueba y cementación final, con 2 a 3 días de fabricación en laboratorio. Un diseño en resina puede resolverse en una sola sesión.',
  },
  {
    q: '¿Las carillas se manchan o cambian de color con el tiempo?',
    a: 'Las carillas de cerámica no se manchan ni cambian de color con el tiempo, a diferencia del esmalte natural: el tono elegido en el diseño se mantiene estable durante toda su vida útil. Las de resina pueden pigmentarse levemente con los años y se pulen en los controles.',
  },
];

const faqsEn = [
  {
    q: 'Do teeth get damaged to place veneers?',
    a: 'It depends on the type of veneer. Composite resin veneers are placed with no grinding at all and are fully reversible. Ceramic veneers require minimal enamel reduction (0.3-0.5 mm) under local anesthesia. In both cases we prioritize preserving as much healthy tooth as possible.',
  },
  {
    q: 'How long does a smile makeover last?',
    a: 'It depends on the material: composite resin veneers last 5 to 7 years and ceramic ones (lithium disilicate or zirconia) 10 to 15 years with proper care. Bruxism, hygiene and eating habits affect their durability.',
  },
  {
    q: 'Does a smile makeover hurt?',
    a: "It doesn't hurt. Ceramic veneer preparation is done under local anesthesia, so you feel no pain during the procedure. There may be mild, temporary sensitivity for the first few days that resolves on its own. Resin veneers require no grinding.",
  },
  {
    q: 'Can I see how my smile will look before we start?',
    a: 'Yes. With Digital Smile Design (DSD) we simulate the result on your own photos before touching any tooth. We also do a mockup (in-mouth try-in) so you approve the shape, size and color physically before the final veneers are made.',
  },
  {
    q: 'How many visits does a smile makeover take?',
    a: 'A makeover with ceramic veneers is usually completed in 3 to 4 visits: assessment and digital design (DSD), preparation and impression, try-in mockup and final bonding, with 2 to 3 days of lab fabrication. A resin makeover can be done in a single session.',
  },
  {
    q: 'Do veneers stain or change color over time?',
    a: "Ceramic veneers don't stain or change color over time, unlike natural enamel: the shade chosen in the design stays stable throughout their lifespan. Resin veneers can pick up slight staining over the years and are polished at checkups.",
  },
];

export default async function DisenoDeSonrisaPage({
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
  const waMessage = 'Hola, me interesa información sobre Diseño de Sonrisa';

  const breadcrumbs = [
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Servicios' : 'Services', url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: isEs ? 'Diseño de Sonrisa' : 'Smile Design', url: isEs ? `${BASE}/servicios/diseno-de-sonrisa` : `${BASE}/en/servicios/diseno-de-sonrisa` },
  ];

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/diseno-de-sonrisa` : `${BASE}/en/servicios/diseno-de-sonrisa`,
          name: isEs ? 'Diseño de Sonrisa Medellín' : 'Smile Design Medellín',
          description: isEs ? 'Diseño de sonrisa digital con carillas cerámicas y de resina en Medellín. El Poblado.' : 'Digital smile design with ceramic and resin veneers in Medellín. El Poblado.',
          procedureName: isEs ? 'Diseño Digital de Sonrisa con Carillas' : 'Digital Smile Design with Veneers',
        }),
        medicalServiceSchema({
          name: 'Diseño de Sonrisa Medellín',
          description: 'Diseño de sonrisa con carillas cerámicas y DSD digital en Medellín. Carillas de zirconio y resina. El Poblado.',
          url: 'https://dracarolinamacareno.com/servicios/diseno-de-sonrisa',
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
              <span style={{ color: '#C9A461' }}>Diseño de Sonrisa</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              Estética · Carillas · Diseño Digital
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Diseño de Sonrisa en Medellín' : 'Smile Design in Medellín'}
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              Transformación estética completa de tu sonrisa planificada digitalmente
              antes de tocar un solo diente. El resultado que sueñas, con la precisión
              que mereces.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RespuestaDirecta
        pregunta={isEs ? '¿Cuánto cuesta un diseño de sonrisa en Medellín?' : 'How much does a smile makeover cost in Medellín?'}
        respuesta={isEs
          ? 'El costo depende del número de dientes a tratar y del material elegido (disilicato o zirconio). Con el diseño digital de sonrisa (DSD) ves el resultado simulado y apruebas tu nueva sonrisa antes de tocar un solo diente; en la valoración recibes un plan con el precio exacto.'
          : 'The cost depends on the number of teeth treated and the material chosen (lithium disilicate or zirconia). With Digital Smile Design (DSD) you see a simulation and approve your new smile before any tooth is touched; you receive an exact quote at your consultation.'}
      />

      {/* ── QUÉ ES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection direction="right">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                ¿Qué es el diseño de sonrisa?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
                Es una transformación estética integral que combina carillas de cerámica
                o resina compuesta, coronas y técnicas de diseño digital para crear una
                sonrisa armónica, natural y personalizada. Todo el resultado se planifica
                visualmente antes de comenzar cualquier procedimiento clínico.
              </p>
              <p className="text-lg leading-relaxed mt-4" style={{ color: '#D1D5DB' }}>
                Con el sistema DSD (Digital Smile Design), analizamos las proporciones
                faciales, el color de la piel, la forma de los labios y la posición de
                los dientes para diseñar una sonrisa que sea única para usted, no una
                sonrisa genérica, sino la suya propia, mejorada.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <figure className="relative aspect-[4/3] rounded-xl overflow-hidden border" style={{ borderColor: '#1F2937' }}>
                <Image
                  src="/images/final-diseno-ceramica-6.webp"
                  alt="Resultado final de diseño de sonrisa con carillas cerámicas en Medellín, Dra. Carolina Macareno"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.75) 0%, transparent 45%)' }} />
                <figcaption className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>Caso real · Carillas cerámicas</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#F5F5F0' }}>Resultado final de un diseño de sonrisa</p>
                </figcaption>
              </figure>
            </AnimatedSection>
          </div>
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
                'Dientes manchados o con cambio de color que no responden al blanqueamiento.',
                'Dientes pequeños, irregulares, desgastados o fracturados que afectan la estética.',
                'Espacios entre dientes (diastemas) que desea cerrar sin brackets.',
                'Sonrisa "encías" (que muestra mucho tejido gingival) o asimétrica.',
                'Quiere un cambio de imagen profundo y duradero.',
                'Profesionales, figuras públicas o personas que desean proyectar más confianza.',
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
              Opciones de tratamiento para tu sonrisa
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>Desde carillas mínimamente invasivas hasta diseño digital completo, cada sonrisa tiene su solución.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M9 4 Q8 4 8 7 L8 16 Q9 20 12 20 Q15 20 16 16 L16 7 Q16 4 15 4 Z" />
                    <path d="M9 4 Q9 6 10 7 L14 7 Q15 6 15 4" strokeLinecap="round" />
                  </svg>
                ),
                badge: 'MÁXIMA ESTÉTICA',
                title: 'Carillas de Cerámica',
                desc: 'Láminas de porcelana feldespática o disilicato de litio de 0.3-0.5mm. El material más estético disponible: translucidez, brillo y naturalidad insuperables.',
                highlight: '✓ Durabilidad 10-15 años',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M9 5 Q8 5 8 8 L8 16 Q9 20 12 20 Q15 20 16 16 L16 8 Q16 5 15 5 Z" />
                    <path d="M9 5 L15 5" strokeLinecap="round" />
                    <path d="M9 5 Q9 7 10 8 L14 8 Q15 7 15 5" strokeLinecap="round" strokeDasharray="1 2" />
                  </svg>
                ),
                badge: 'MÍNIMA INVASIÓN',
                title: 'Carillas de Resina Compuesta',
                desc: 'Aplicación directa de resina compuesta sin desgaste del diente. Resultado inmediato en una sola sesión. Ideal para correcciones pequeñas y pacientes jóvenes.',
                highlight: '✓ Sin desgaste dental · Reversible',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M7 3 Q12 1 17 3 L18 7 Q17 11 12 12 Q7 11 6 7 Z" />
                    <path d="M6 7 L6 17 Q8 21 12 21 Q16 21 18 17 L18 7" strokeLinecap="round" />
                    <path d="M9 10 L9 18 M15 10 L15 18" strokeLinecap="round" strokeDasharray="1 2" />
                  </svg>
                ),
                badge: 'ALTA RESISTENCIA',
                title: 'Coronas en Zirconio',
                desc: 'Cobertura completa del diente en zirconio monolítico o porcelana sobre zirconio. Para dientes muy dañados, decolorados o con restauraciones previas extensas.',
                highlight: '✓ Resistencia máxima · Larga duración',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <rect x="3" y="4" width="18" height="13" rx="2" />
                    <path d="M7 10 Q9 8 11 10 Q13 12 15 10 Q17 8 17 10" strokeLinecap="round" />
                    <path d="M9 17 L9 20 M15 17 L15 20 M7 20 L17 20" strokeLinecap="round" />
                  </svg>
                ),
                badge: 'VE EL RESULTADO ANTES',
                title: 'Diseño Digital de Sonrisa (DSD)',
                desc: 'Planificación visual completa con software especializado: se diseña la sonrisa ideal sobre sus fotos antes de tocar ningún diente. Incluye mockup en boca.',
                highlight: '✓ Aprueba el resultado antes de iniciar',
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
                <Image src="/images/dra-carolina-laptop.webp" alt="Diseño de sonrisa digital - Dra. Carolina Macareno Medellín" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#F5F5F0' }}>Diseño Digital de Sonrisa · Planificación visual previa</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>¿Por qué elegirnos?</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>Diseño de sonrisa digital en Medellín, paso a paso</h2>
              <div className="space-y-4">
                {[
                  { icon: <Icon name="camera" />, title: 'Fotografía clínica profesional', desc: 'Análisis facial, labial y dental completo para diseñar proporciones ideales según tu rostro.' },
                  { icon: <Icon name="monitor" />, title: 'Software DSD', desc: 'Diseño digital sobre tus fotos reales. Ves exactamente cómo quedará tu sonrisa antes de cualquier procedimiento.' },
                  { icon: <Icon name="tooth" />, title: 'Mockup en boca', desc: 'Prueba de la sonrisa diseñada directamente sobre tus dientes. Tocas y sientes el resultado antes de decidir.' },
                  { icon: <Icon name="sparkle" />, title: 'Mínima invasión', desc: 'Priorizamos técnicas que preservan el máximo tejido dental sano. Tu sonrisa ideal con el mínimo sacrificio.' },
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

      {/* ── VITRINA ANTES / DESPUÉS ── */}
      <BeforeAfterGallery
        locale={locale}
        cases={casosDisenoSonrisa}
        eyebrow={{ es: 'Casos reales', en: 'Real cases' }}
        title={{ es: 'Diseños de sonrisa antes y después', en: 'Smile designs before and after' }}
        subtitle={{
          es: 'Pacientes reales del consultorio. Carillas cerámicas y en resina con planificación digital previa.',
          en: 'Real patients from the clinic. Ceramic and composite veneers with prior digital planning.',
        }}
        bg="#0D1321"
      />

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
                title: 'Consulta y diseño digital de la sonrisa (DSD)',
                desc: 'Valoración integral, fotografías clínicas, análisis facial y diseño digital del resultado esperado. Se presenta la simulación virtual para aprobación.',
              },
              {
                step: '02',
                title: 'Preparación dental mínima',
                desc: 'Solo si se requiere (carillas cerámicas). Desgaste ultraconservador de 0.3-0.5 mm bajo anestesia local. Las carillas de resina no requieren preparación.',
              },
              {
                step: '03',
                title: 'Toma de impresión digital',
                desc: 'Escáner intraoral 3Shape para capturar la geometría exacta de los dientes preparados y enviar al laboratorio.',
              },
              {
                step: '04',
                title: 'Mockup, prueba en boca',
                desc: 'Se realiza una prueba provisional en boca para evaluar forma, tamaño y color de los dientes antes de fresar las carillas definitivas.',
              },
              {
                step: '05',
                title: 'Fabricación en laboratorio (2-3 días)',
                desc: 'Técnicos especializados en diseño digital y en cerámica elaboran cada carilla o corona de forma individualizada con materiales de disilicato o zirconio.',
              },
              {
                step: '06',
                title: 'Cementación',
                desc: 'Prueba final de ajuste, color y estética. Cementación con cemento resinoso y técnicas adhesivas de última generación.',
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
              { label: isEs ? 'Duración del proceso' : 'Process time', value: isEs ? '3 días' : '3 days', icon: '⏱' },
              { label: isEs ? 'Materiales' : 'Materials', value: isEs ? 'Disilicato / Zirconio' : 'Disilicate / Zirconia', icon: <Icon name="sparkle" /> },
              { label: isEs ? 'Número de citas' : 'Appointments', value: isEs ? '3 – 5 citas' : '3 – 5 visits', icon: <Icon name="calendar" /> },
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
              {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
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

      {/* ── INTERNATIONAL PATIENTS BANNER ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#0D1321', borderTop: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Link
              href={locale === 'es' ? '/smile-makeover-colombia' : '/en/smile-makeover-colombia'}
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
                    ? 'Smile Makeover en Colombia, guía completa para pacientes extranjeros'
                    : 'Smile Makeover in Colombia, complete guide for international patients'}
                </p>
                <p className="text-sm mt-1" style={{ color: '#9CA3AF' }}>
                  {locale === 'es'
                    ? 'Precios, tiempos, logística y antes/después de pacientes reales.'
                    : 'Prices, timelines, logistics and before/after from real patients.'}
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
              Descubre tu mejor sonrisa
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              Agenda una consulta de diseño y ve cómo lucirá tu nueva sonrisa antes de
              tomar cualquier decisión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={waMessage}
                locale={locale as 'es' | 'en'}
                trackingLabel="diseno_sonrisa_cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.938l6.29-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.012-1.374l-.36-.213-3.733.978.995-3.629-.234-.373A9.778 9.778 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                </svg>
                Escribir por WhatsApp
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
