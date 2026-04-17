import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { articleSchema, breadcrumbSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const slug = 'caso-clinico-implante-convencional';

  return {
    title: isEs
      ? 'Caso Clínico: Implante Convencional de Titanio con Provisionalización Inmediata | Dra. Carolina Macareno'
      : 'Clinical Case: Conventional Titanium Implant with Immediate Provisionalization | Dr. Carolina Macareno',
    description: isEs
      ? 'Caso clínico real: implante de titanio con prótesis provisional el mismo día. Cirugía con sedación consciente en El Poblado, Medellín.'
      : 'Real clinical case: titanium implant with same-day provisional prosthesis. Surgery with conscious sedation in El Poblado, Medellín.',
    keywords: isEs
      ? ['implante convencional Medellín', 'implante titanio caso clínico', 'provisionalización inmediata Medellín', 'dientes en un día Medellín', 'implante mismo día', 'cirugía implante Medellín', 'sedación consciente implante', 'Dra. Carolina Macareno']
      : ['conventional implant Medellin', 'titanium implant case', 'immediate provisionalization', 'same day dental implant Medellin'],
    openGraph: {
      title: isEs ? 'Caso Clínico: Implante de Titanio con Dientes el Mismo Día' : 'Clinical Case: Titanium Implant with Same-Day Teeth',
      description: isEs ? 'Implante convencional con provisionalización inmediata en Medellín.' : 'Conventional implant with immediate provisionalization in Medellín.',
      type: 'article',
      locale: isEs ? 'es_CO' : 'en_US',
      url: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`,
    },
    alternates: {
      canonical: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`,
      languages: { es: `${BASE}/blog/${slug}`, en: `${BASE}/en/blog/${slug}` },
    },
  };
}

// ── PASOS DEL CASO CLÍNICO ──────────────────────────────────────────────────
// TODO: reemplazar los src de imágenes con las fotos reales cuando estén disponibles
const steps = [
  {
    number: '01',
    title: 'Evaluación y Diagnóstico',
    label: 'CONSULTA INICIAL',
    content: 'Paciente con pérdida dentaria unitaria o múltiple con hueso residual suficiente para implante convencional. Tomografía CBCT confirma densidad y volumen óseo adecuados. Plan de tratamiento: implante de titanio con provisionalización inmediata.',
    highlight: 'CBCT confirma viabilidad del implante',
    // image: '/images/caso-convencional-cbct.webp',
    // imageAlt: 'Tomografía CBCT preoperatoria',
  },
  {
    number: '02',
    title: 'Planificación Digital',
    label: 'CIRUGÍA GUIADA',
    content: 'Con el software de planificación, diseñamos la posición exacta del implante antes de entrar a cirugía. La guía quirúrgica digital permite colocar el implante en el ángulo y profundidad precisos, mejorando el pronóstico y reduciendo el tiempo quirúrgico.',
    highlight: 'Posición planificada al milímetro',
    // image: '/images/caso-convencional-plan.webp',
    // imageAlt: 'Planificación digital del implante convencional',
  },
  {
    number: '03',
    title: 'Sedación Consciente',
    label: 'ANESTESIA Y CONFORT',
    content: 'Procedimiento bajo sedación consciente supervisada por anestesiólogo. El paciente no siente ni recuerda la cirugía. Este nivel de confort es parte de nuestro estándar: creemos que nadie debería temerle a un implante dental.',
    highlight: 'Sin dolor · Sin ansiedad · Sin estrés',
    // image: '/images/caso-convencional-sedacion.webp',
    // imageAlt: 'Preparación para sedación consciente',
  },
  {
    number: '04',
    title: 'Colocación del Implante',
    label: 'CIRUGÍA',
    content: 'Bajo campo estéril, se realiza la osteotomía guiada y se coloca el implante de titanio con el torque de inserción adecuado. La estabilidad primaria permite pasar directamente a la fase de provisionalización sin necesidad de esperar meses.',
    highlight: 'Estabilidad primaria para carga inmediata',
    // image: '/images/caso-convencional-cirugia.webp',
    // imageAlt: 'Colocación del implante convencional',
  },
  {
    number: '05',
    title: 'Provisionalización Inmediata',
    label: 'DIENTES EL MISMO DÍA',
    content: 'Con la estabilidad primaria confirmada, se coloca la corona provisional en la misma sesión quirúrgica. El paciente sale del consultorio con su diente. La prótesis definitiva se instala a los 3-4 meses, una vez el implante está completamente oseointegrado.',
    highlight: 'Corona provisional en la misma sesión',
    // image: '/images/caso-convencional-provisional.webp',
    // imageAlt: 'Provisionalización inmediata post-cirugía',
  },
  {
    number: '06',
    title: 'Resultado Final',
    label: 'PRÓTESIS DEFINITIVA',
    content: 'A los 3-4 meses, con la oseointegración confirmada, se coloca la corona definitiva de zirconio. El resultado: un diente que se ve, se siente y funciona exactamente igual que un diente natural. Sin diferencia visible.',
    highlight: 'Resultado indistinguible del diente natural',
    // image: '/images/caso-convencional-final.webp',
    // imageAlt: 'Resultado final con corona de zirconio',
  },
];

export default async function CasoClinicoConvencional({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localePath = (path: string) => locale === 'es' ? path : '/en' + path;
  const BASE = 'https://dracarolinamacareno.com';
  const slug = 'caso-clinico-implante-convencional';

  const breadcrumbs = [
    { name: 'Inicio', url: locale === 'es' ? BASE : `${BASE}/en` },
    { name: 'Blog', url: locale === 'es' ? `${BASE}/blog` : `${BASE}/en/blog` },
    { name: 'Caso Clínico: Implante Convencional', url: `${BASE}/blog/${slug}` },
  ];

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        breadcrumbSchema(breadcrumbs),
        articleSchema({
          title: 'Caso Clínico: Implante Convencional de Titanio con Provisionalización Inmediata',
          description: 'Implante de titanio con dientes el mismo día. Cirugía guiada digital bajo sedación consciente en El Poblado, Medellín.',
          url: `${BASE}/blog/${slug}`,
          publishDate: '2025-04-10',
        }),
      ]} />

      {/* Hero */}
      <section className="pt-32 pb-0" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#9CA3AF' }}>
            <Link href={localePath('/')} className="hover:text-[#C9A461] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href={localePath('/blog')} className="hover:text-[#C9A461] transition-colors">Blog</Link>
            <span>/</span>
            <span style={{ color: '#C9A461' }}>Caso Clínico</span>
          </nav>

          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-5">
              {['CASO CLÍNICO REAL', 'IMPLANTE CONVENCIONAL', 'DIENTES EL MISMO DÍA'].map((tag) => (
                <span key={tag} className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border" style={{ color: '#C9A461', borderColor: '#C9A461', background: 'rgba(201,164,97,0.08)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Implante de Titanio:<br />
              <span style={{ color: '#C9A461' }}>dientes el mismo día</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>
              Cuando hay hueso suficiente, la tecnología de hoy permite colocar el implante y la corona provisional en una sola visita. Este es el caso documentado de un paciente tratado en nuestra clínica en El Poblado, Medellín.
            </p>

            <div className="flex items-center gap-4 pb-8 border-b" style={{ borderColor: '#1F2937' }}>
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
                <p className="text-sm font-semibold" style={{ color: '#F5F5F0' }}>Dra. Carolina Macareno</p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>Rehabilitadora Oral · Implantóloga · 17+ años de experiencia</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs" style={{ color: '#9CA3AF' }}>Medellín, Colombia</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Hero placeholder — replace with real photo */}
        <div className="max-w-5xl mx-auto px-4 mt-8">
          <AnimatedSection>
            <div className="relative aspect-[16/7] rounded-xl overflow-hidden border border-dashed flex items-center justify-center" style={{ borderColor: '#C9A461', background: 'rgba(201,164,97,0.04)' }}>
              <div className="text-center p-8">
                <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="#C9A461">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium" style={{ color: '#C9A461' }}>Foto hero del caso — próximamente</p>
                <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Envía las fotos del caso clínico para completar esta sección</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-12 px-4" style={{ backgroundColor: '#070B14' }}>
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
                  <p className="font-semibold mb-1" style={{ color: '#F5F5F0' }}>Video de la cirugía — próximamente</p>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>Desde la planificación digital hasta el resultado final con corona de zirconio.</p>
                </div>
                <a
                  href="https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20implantes%20con%20dientes%20el%20mismo%20día"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded transition-colors"
                  style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-4 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              El procedimiento paso a paso
            </h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: '#C9A461' }} />
          </AnimatedSection>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={0.1}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-5">
                    <span className="text-5xl font-bold flex-shrink-0 mt-1" style={{ color: 'rgba(201,164,97,0.15)', fontFamily: 'var(--font-playfair-display, serif)', lineHeight: 1 }}>
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <span className="text-xs font-semibold tracking-widest uppercase block mb-1" style={{ color: '#C9A461' }}>{step.label}</span>
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>{step.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#9CA3AF' }}>{step.content}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(201,164,97,0.08)', border: '1px solid rgba(201,164,97,0.2)' }}>
                        <svg className="w-4 h-4 flex-shrink-0" fill="#C9A461" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium" style={{ color: '#C9A461' }}>{step.highlight}</span>
                      </div>
                      {/* Photo placeholder per step */}
                      <div className="mt-4 rounded-lg border border-dashed px-4 py-3 text-xs" style={{ borderColor: '#374151', color: '#4B5563' }}>
                        📷 Foto del paso {step.number} — pendiente
                      </div>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && <div className="mt-16 w-px h-6 mx-auto" style={{ backgroundColor: 'rgba(201,164,97,0.2)' }} />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 px-4 mt-8" style={{ backgroundColor: '#0D1321', borderTop: '1px solid #1F2937', borderBottom: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '60–90', unit: 'min', label: 'Tiempo quirúrgico' },
            { value: '1', unit: 'sesión', label: 'Implante + provisional' },
            { value: '97%+', unit: 'éxito', label: 'Tasa de oseointegración' },
            { value: '3–4', unit: 'meses', label: 'Prótesis definitiva' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>
                {stat.value}<span className="text-sm font-normal ml-1" style={{ color: '#6B7280' }}>{stat.unit}</span>
              </p>
              <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: '#9CA3AF' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              ¿Quieres saber si eres candidato para carga inmediata?
            </h2>
            <p className="mb-8" style={{ color: '#9CA3AF' }}>
              Agenda tu consulta de diagnóstico. En 60 minutos sabemos exactamente qué tipo de implante es el ideal para tu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20consultar%20sobre%20implantes%20con%20dientes%20el%20mismo%20día"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded text-sm tracking-wider uppercase transition-all hover:scale-105"
                style={{ backgroundColor: '#C9A461', color: '#070B14' }}
              >
                Agendar consulta por WhatsApp
              </a>
              <Link
                href={localePath('/servicios/implantes-dentales')}
                className="inline-flex items-center justify-center gap-2 border font-medium px-8 py-4 rounded text-sm tracking-wider uppercase transition-all"
                style={{ borderColor: 'rgba(201,164,97,0.4)', color: '#F5F5F0' }}
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
