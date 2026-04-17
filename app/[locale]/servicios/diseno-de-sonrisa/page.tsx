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
  const slug = 'diseno-de-sonrisa';

  return {
    title: isEs
      ? 'Diseño de Sonrisa Medellín | Carillas Cerámicas y Porcelana | Dra. Carolina'
      : 'Smile Design Medellín | Ceramic & Porcelain Veneers | Dr. Carolina',
    description: isEs
      ? 'Diseño de sonrisa con carillas cerámicas en Medellín. DSD Digital, carillas de zirconio y resina. Transforma tu sonrisa en El Poblado. Agenda tu consulta.'
      : 'Smile design with ceramic veneers in Medellín. DSD Digital, zirconia and composite veneers. Transform your smile in El Poblado. Book your consultation.',
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

const faqs = [
  {
    q: '¿Se dañan los dientes para colocar carillas?',
    a: 'Depende del tipo de carilla. Las carillas cerámicas tradicionales requieren un desgaste mínimo del esmalte (0.3-0.5 mm). Sin embargo, las carillas de resina compuesta se pueden colocar sin ningún desgaste dental, siendo una opción completamente reversible.',
  },
  {
    q: '¿Cuánto duran las carillas cerámicas?',
    a: 'Las carillas de porcelana o cerámica tienen una vida útil de 10 a 15 años con el cuidado adecuado. Factores como el bruxismo, los hábitos alimenticios y la higiene influyen en su durabilidad. Las de resina compuesta duran entre 5 y 7 años.',
  },
  {
    q: '¿Puedo ver cómo quedará mi sonrisa antes de empezar?',
    a: 'Sí. Utilizamos el sistema de Diseño Digital de Sonrisa (DSD) que permite simular el resultado en fotos y video antes de iniciar cualquier procedimiento. Además, realizamos un mockup (prueba en boca) para que apruebe el diseño físicamente antes de la fabricación.',
  },
  {
    q: '¿Las carillas cambian el color de forma permanente?',
    a: 'Las carillas de cerámica no se manchan ni cambian de color con el tiempo, a diferencia del esmalte natural. El color elegido en el diseño inicial se mantiene estable durante toda la vida útil de la restauración.',
  },
];

export default async function DisenoDeSonrisaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localePath = (path: string) =>
    locale === 'es' ? path : '/en' + path;
  const waLink =
    'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20Diseño%20de%20Sonrisa';

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        localBusinessSchema(),
        medicalServiceSchema({
          name: 'Diseño de Sonrisa Medellín',
          description: 'Diseño de sonrisa con carillas cerámicas y DSD digital en Medellín. Carillas de zirconio y resina. El Poblado.',
          url: 'https://dracarolinamacareno.com/servicios/diseno-de-sonrisa',
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
              Diseño de Sonrisa
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

      {/* ── QUÉ ES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
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
              los dientes para diseñar una sonrisa que sea única para usted — no una
              sonrisa genérica, sino la suya propia, mejorada.
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
            <p className="mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>Desde carillas mínimamente invasivas hasta diseño digital completo — cada sonrisa tiene su solución.</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>Tu sonrisa diseñada antes de iniciar</h2>
              <div className="space-y-4">
                {[
                  { icon: '📸', title: 'Fotografía clínica profesional', desc: 'Análisis facial, labial y dental completo para diseñar proporciones ideales según tu rostro.' },
                  { icon: '💻', title: 'Software DSD', desc: 'Diseño digital sobre tus fotos reales. Ves exactamente cómo quedará tu sonrisa antes de cualquier procedimiento.' },
                  { icon: '🦷', title: 'Mockup en boca', desc: 'Prueba de la sonrisa diseñada directamente sobre tus dientes. Tocas y sientes el resultado antes de decidir.' },
                  { icon: '✨', title: 'Mínima invasión', desc: 'Priorizamos técnicas que preservan el máximo tejido dental sano. Tu sonrisa ideal con el mínimo sacrificio.' },
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
                title: 'Consulta y diseño digital de la sonrisa (DSD)',
                desc: 'Fotografías clínicas, análisis facial y diseño digital del resultado esperado. Se presenta la simulación virtual para aprobación.',
              },
              {
                step: '02',
                title: 'Mockup — prueba en boca',
                desc: 'Se realiza una maqueta provisional en boca para evaluar forma, tamaño y color de los dientes antes de cualquier intervención.',
              },
              {
                step: '03',
                title: 'Preparación dental mínima',
                desc: 'Solo si se requiere (carillas cerámicas). Desgaste ultraconservador de 0.3-0.5 mm bajo anestesia local. Las carillas de resina no requieren preparación.',
              },
              {
                step: '04',
                title: 'Toma de impresión digital',
                desc: 'Escáner intraoral 3Shape para capturar la geometría exacta de los dientes preparados y enviar al laboratorio.',
              },
              {
                step: '05',
                title: 'Fabricación en laboratorio (1-2 semanas)',
                desc: 'Artesanos cerámicos elaboran cada carilla o corona de forma individualizada con materiales de primera calidad.',
              },
              {
                step: '06',
                title: 'Cementación o atornillado definitivo',
                desc: 'Prueba final de ajuste, color y estética. Cementación con adhesivo de última generación o atornillado sobre implante.',
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
              { label: 'Duración del proceso', value: '3 – 4 semanas', icon: '⏱' },
              { label: 'Precio desde', value: '$5,000,000 COP (sonrisa completa)', icon: '💰' },
              { label: 'Número de citas', value: '4 – 5 citas', icon: '📅' },
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
              Descubre tu mejor sonrisa
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              Agenda una consulta de diseño y ve cómo lucirá tu nueva sonrisa antes de
              tomar cualquier decisión.
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
