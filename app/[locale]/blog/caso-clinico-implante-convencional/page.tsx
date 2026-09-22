import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { articleSchema, breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';

/*
  22-sep-2026: reescrito siguiendo el patrón T.es/T.en de /servicios/implantes-dentales
  porque la versión /en mostraba casi todo el cuerpo en español (solo generateMetadata
  tenía inglés; hero, pasos, placeholders y CTA quedaban en español sin importar el
  locale). Todo el texto visible vive ahora en `T`, un bloque por idioma.

  Se agregó FAQPage schema (no existía) con 9 preguntas frecuentes en cada idioma,
  redactadas con el banco de preguntas de pacientes internacionales, para cumplir la
  regla del sitio de mínimo 9 encabezados en forma de pregunta y FAQPage siempre.

  Este caso no tenía ningún dato que identifique al paciente (sin nombre, sin edad,
  sin ciudad ni oficio) y se mantiene así. Los placeholders de foto/video ya
  presentes ("Foto del paso X, pendiente") se tradujeron tal cual, sin inventar
  imágenes ni datos clínicos nuevos. Nunca se muestra la cara del paciente.

  ⛔ Por la regla del 10-sep-2026, título y descripción del generateMetadata NO
  llevan precio ni cifra de ahorro.
*/

const T = {
  es: {
    badges: ['CASO CLÍNICO REAL', 'IMPLANTE CONVENCIONAL', 'DIENTES EL MISMO DÍA'],
    breadcrumbHome: 'Inicio',
    breadcrumbBlog: 'Blog',
    breadcrumbHere: 'Caso Clínico',
    h1Main: 'Implante de Titanio en Medellín:',
    h1Accent: 'dientes fijos el mismo día',
    heroP:
      'Cuando hay hueso suficiente, la tecnología de hoy permite colocar el implante y la corona provisional en una sola visita. Este es el caso documentado de un paciente tratado en nuestra clínica en El Poblado, Medellín.',
    authorName: 'Dra. Carolina Macareno',
    authorRole: 'Rehabilitadora Oral · Implantóloga · 17+ años de experiencia',
    authorLocation: 'Medellín, Colombia',
    heroPlaceholderTitle: 'Foto hero del caso, próximamente',
    heroPlaceholderDesc: 'Envía las fotos del caso clínico para completar esta sección',
    videoTitle: 'Video de la cirugía, próximamente',
    videoDesc: 'Desde la planificación digital hasta el resultado final con corona de zirconio.',
    videoWaMessage: 'Hola, leí el artículo sobre el implante convencional con dientes el mismo día y me interesa saber más.',
    videoWaLabel: 'Consultar por WhatsApp',
    stepsH2: 'El procedimiento paso a paso',
    steps: [
      {
        number: '01',
        label: 'CONSULTA INICIAL',
        title: 'Evaluación y Diagnóstico',
        content:
          'Paciente con pérdida dentaria unitaria o múltiple con hueso residual suficiente para implante convencional. Tomografía CBCT confirma densidad y volumen óseo adecuados. Plan de tratamiento: implante de titanio con provisionalización inmediata.',
        highlight: 'CBCT confirma viabilidad del implante',
      },
      {
        number: '02',
        label: 'CIRUGÍA GUIADA',
        title: 'Planificación Digital',
        content:
          'Con el software de planificación, diseñamos la posición exacta del implante antes de entrar a cirugía. La guía quirúrgica digital permite colocar el implante en el ángulo y profundidad precisos, mejorando el pronóstico y reduciendo el tiempo quirúrgico.',
        highlight: 'Posición planificada al milímetro',
      },
      {
        number: '03',
        label: 'ANESTESIA Y CONFORT',
        title: 'Sedación Consciente',
        content:
          'Procedimiento bajo sedación consciente supervisada por anestesiólogo. El paciente no siente ni recuerda la cirugía. Este nivel de confort es parte de nuestro estándar: creemos que nadie debería temerle a un implante dental.',
        highlight: 'Sin dolor · Sin ansiedad · Sin estrés',
      },
      {
        number: '04',
        label: 'CIRUGÍA',
        title: 'Colocación del Implante',
        content:
          'Bajo campo estéril, se realiza la osteotomía guiada y se coloca el implante de titanio con el torque de inserción adecuado. La estabilidad primaria permite pasar directamente a la fase de provisionalización sin necesidad de esperar meses.',
        highlight: 'Estabilidad primaria para carga inmediata',
      },
      {
        number: '05',
        label: 'DIENTES EL MISMO DÍA',
        title: 'Provisionalización Inmediata',
        content:
          'Con la estabilidad primaria confirmada, se coloca la corona provisional en la misma sesión quirúrgica. El paciente sale del consultorio con su diente. La prótesis definitiva se instala a los 3-4 meses, una vez el implante está completamente oseointegrado.',
        highlight: 'Corona provisional en la misma sesión',
      },
      {
        number: '06',
        label: 'PRÓTESIS DEFINITIVA',
        title: 'Resultado Final',
        content:
          'A los 3-4 meses, con la oseointegración confirmada, se coloca la corona definitiva de zirconio. El resultado: un diente que se ve, se siente y funciona exactamente igual que un diente natural. Sin diferencia visible.',
        highlight: 'Resultado indistinguible del diente natural',
      },
    ],
    stepPhotoPending: (n: string) => `Foto del paso ${n}, pendiente`,
    statLabels: ['Tiempo quirúrgico', 'Implante + provisional', 'Tasa de oseointegración', 'Prótesis definitiva'],
    statUnits: ['min', 'sesión', 'éxito', 'meses'],
    faqH2: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Puedo tener dientes fijos el mismo día de la cirugía?',
        a: 'Depende del torque de inserción que se logre durante la cirugía. Si la estabilidad primaria del implante es suficiente, se coloca una corona provisional fija en la misma sesión. Si no lo es, se prioriza la integración y se usa una solución temporal removible hasta que el implante esté listo.',
      },
      {
        q: '¿Necesito injerto óseo o elevación de seno antes de un implante convencional?',
        a: 'Eso se decide con la tomografía, nunca con una radiografía panorámica. Si el hueso posterior del maxilar superior lleva años reabsorbido, una elevación de seno es una posibilidad real y es un procedimiento de rutina dentro del mismo plan de tratamiento.',
      },
      {
        q: '¿Es obligatoria la tomografía (CBCT), o basta con una radiografía panorámica?',
        a: 'Para planear un implante se considera obligatoria, no opcional. La panorámica es una imagen plana y distorsionada; la tomografía muestra el hueso en tres dimensiones, el piso del seno maxilar y la posición del nervio, que es lo que define si hay estabilidad primaria para dientes el mismo día.',
      },
      {
        q: '¿Puedo enviar la radiografía panorámica o la tomografía que ya me tomé en mi país?',
        a: 'Sí, la puedes enviar por WhatsApp o correo, incluido el archivo DICOM si es una tomografía. Si la calidad no alcanza o hace falta un estudio adicional, se completa el primer día en Medellín, antes de confirmar el plan de tratamiento.',
      },
      {
        q: '¿Qué marca y modelo de implante usan en un caso convencional?',
        a: 'Trabajamos principalmente con implantes del grupo Straumann y Neodent, en titanio, y también colocamos DioImplant. La marca exacta para tu caso se decide en la valoración, según el diagnóstico óseo y el tipo de diente a reemplazar.',
      },
      {
        q: '¿Cuántos viajes necesito, y cuánto debo esperar entre uno y otro?',
        a: 'Normalmente dos viajes. En el primero se hace la cirugía y se coloca el provisional; en el segundo, entre 3 y 4 meses después, una vez completada la oseointegración, se coloca la corona definitiva de zirconio. El tiempo exacto se confirma en tu valoración.',
      },
      {
        q: 'Ya tengo implantes puestos en otro país, con problemas. ¿Pueden evaluar y corregir mi caso?',
        a: 'Sí. Se evalúan con tomografía, radiografías y fotos del estado actual, y ahí se define si alguno de tus implantes se puede conservar o si hay que retirarlo o corregirlo con un implante nuevo. El plan se confirma después de revisar esos estudios.',
      },
      {
        q: 'Me dijeron que no tengo hueso suficiente para un implante. ¿Qué opciones tengo?',
        a: 'El implante convencional, como el de este caso, necesita una base ósea suficiente confirmada por tomografía. Si el hueso no alcanza, existen alternativas sin injerto: el implante cigomático para el maxilar superior, o el implante subperióstico fabricado a medida para maxilar superior o mandíbula. Cuál te sirve se define en la valoración.',
      },
      {
        q: '¿Duele el procedimiento, y qué tan segura es la carga inmediata?',
        a: 'La cirugía se hace con anestesia local o sedación consciente supervisada por anestesiólogo, según el caso, por lo que no sientes dolor durante el procedimiento. La estabilidad primaria del implante es la que determina si es seguro cargarlo el mismo día: si no es suficiente, se prioriza la integración antes que la provisionalización inmediata.',
      },
    ],
    ctaH2: '¿Quieres saber si eres candidato para carga inmediata?',
    ctaP: 'Agenda tu consulta de diagnóstico. Con tomografía y evaluación clínica sabemos qué tipo de implante es el indicado para tu caso.',
    ctaWaMessage: 'Hola, leí el caso clínico del implante convencional con dientes el mismo día y me interesa consultar.',
    ctaWaLabel: 'Agendar consulta por WhatsApp',
    ctaLinkLabel: 'Ver todos los tipos de implantes',
    metaTitle: 'Caso Clínico: Implante de Titanio, Dientes en un Día',
    metaDescription:
      'Caso clínico real en Medellín: implante de titanio con corona provisional el mismo día, bajo sedación consciente. Diagnóstico, cirugía y resultado final.',
    keywords: ['implante convencional Medellín', 'implante titanio caso clínico', 'provisionalización inmediata Medellín', 'dientes en un día Medellín', 'implante mismo día', 'cirugía implante Medellín', 'sedación consciente implante', 'Dra. Carolina Macareno'],
    ogTitle: 'Caso Clínico: Implante de Titanio con Dientes el Mismo Día',
    ogDescription: 'Implante convencional con provisionalización inmediata en Medellín.',
    schemaBreadcrumbHere: 'Caso Clínico: Implante Convencional',
    schemaArticleTitle: 'Caso Clínico: Implante Convencional de Titanio con Provisionalización Inmediata',
    schemaArticleDescription: 'Implante de titanio con dientes el mismo día. Cirugía guiada digital bajo sedación consciente en El Poblado, Medellín.',
  },
  en: {
    badges: ['REAL CLINICAL CASE', 'CONVENTIONAL IMPLANT', 'SAME-DAY TEETH'],
    breadcrumbHome: 'Home',
    breadcrumbBlog: 'Blog',
    breadcrumbHere: 'Clinical Case',
    h1Main: 'Titanium Implant in Medellín:',
    h1Accent: 'fixed teeth the same day as surgery',
    heroP:
      "When there is enough bone, today's technology lets us place the implant and the provisional crown in a single visit. This is the documented case of a patient treated at our clinic in El Poblado, Medellín.",
    authorName: 'Dr. Carolina Macareno',
    authorRole: 'Oral Rehabilitation Specialist · Implantologist · 17+ years of experience',
    authorLocation: 'Medellín, Colombia',
    heroPlaceholderTitle: 'Case hero photo, coming soon',
    heroPlaceholderDesc: 'Send the clinical case photos to complete this section',
    videoTitle: 'Surgery video, coming soon',
    videoDesc: 'From digital planning to the final result with a zirconia crown.',
    videoWaMessage: 'Hello, I read the article about the conventional implant with same-day teeth and would like to know more.',
    videoWaLabel: 'Ask on WhatsApp',
    stepsH2: 'The procedure, step by step',
    steps: [
      {
        number: '01',
        label: 'INITIAL CONSULTATION',
        title: 'Evaluation and Diagnosis',
        content:
          'A patient with a single or multiple missing teeth and enough remaining bone for a conventional implant. A CBCT scan confirms adequate bone density and volume. Treatment plan: a titanium implant with immediate provisionalization.',
        highlight: 'CBCT confirms the implant is viable',
      },
      {
        number: '02',
        label: 'GUIDED SURGERY',
        title: 'Digital Planning',
        content:
          "Using planning software, we design the exact position of the implant before entering surgery. The digital surgical guide allows the implant to be placed at the precise angle and depth, improving the prognosis and reducing surgical time.",
        highlight: 'Position planned down to the millimeter',
      },
      {
        number: '03',
        label: 'ANESTHESIA AND COMFORT',
        title: 'Conscious Sedation',
        content:
          "A procedure under conscious sedation supervised by an anesthesiologist. The patient feels nothing and doesn't remember the surgery. This level of comfort is part of our standard: we believe no one should be afraid of a dental implant.",
        highlight: 'No pain · No anxiety · No stress',
      },
      {
        number: '04',
        label: 'SURGERY',
        title: 'Implant Placement',
        content:
          'Under a sterile field, the guided osteotomy is performed and the titanium implant is placed with the appropriate insertion torque. Primary stability allows moving directly into the provisionalization phase without waiting months.',
        highlight: 'Primary stability for immediate loading',
      },
      {
        number: '05',
        label: 'SAME-DAY TEETH',
        title: 'Immediate Provisionalization',
        content:
          "With primary stability confirmed, the provisional crown is placed during the same surgical session. The patient leaves the office with a tooth. The definitive prosthesis is placed 3 to 4 months later, once the implant is fully osseointegrated.",
        highlight: 'Provisional crown in the same session',
      },
      {
        number: '06',
        label: 'DEFINITIVE PROSTHESIS',
        title: 'Final Result',
        content:
          "At 3 to 4 months, with osseointegration confirmed, the definitive zirconia crown is placed. The result: a tooth that looks, feels and functions exactly like a natural tooth, with no visible difference.",
        highlight: 'A result indistinguishable from a natural tooth',
      },
    ],
    stepPhotoPending: (n: string) => `Photo for step ${n}, pending`,
    statLabels: ['Surgical time', 'Implant + provisional', 'Osseointegration rate', 'Definitive prosthesis'],
    statUnits: ['min', 'session', 'success', 'months'],
    faqH2: 'Frequently asked questions',
    faqs: [
      {
        q: 'Can I have fixed teeth the same day as surgery?',
        a: "It depends on the insertion torque achieved during surgery. If the implant's primary stability is high enough, a fixed provisional crown is placed during the same session. If not, integration is prioritized and a removable temporary solution is used until the implant is ready.",
      },
      {
        q: 'Will I need a bone graft or a sinus lift before a conventional implant?',
        a: 'That is decided with a CT scan, never with a panoramic X-ray. If the back of the upper jaw has been resorbed for years, a sinus lift is a real possibility and is a routine procedure within the same treatment plan.',
      },
      {
        q: 'Is a CBCT scan mandatory, or is a panoramic X-ray enough?',
        a: "For planning an implant it is considered mandatory, not optional. A panoramic X-ray is a flat, distorted image; a CT scan shows the bone in three dimensions, the floor of the sinus and the position of the nerve, which is what determines whether there is enough primary stability for same-day teeth.",
      },
      {
        q: 'Can I send the panoramic X-ray or CT scan I already had taken in my own country?',
        a: 'Yes, you can send it over WhatsApp or email, including the DICOM file if it is a CT scan. If the quality is not enough or an additional study is needed, it is completed on your first day in Medellín, before the treatment plan is confirmed.',
      },
      {
        q: 'What implant brand and model do you use for a conventional case?',
        a: 'We mainly work with titanium implants from the Straumann and Neodent group, and we also place DioImplant. The exact brand for your case is decided at your assessment, based on the bone diagnosis and the tooth being replaced.',
      },
      {
        q: 'How many trips do I need, and how much time should I wait between them?',
        a: 'Usually two trips. The first is for the surgery and the provisional; the second, 3 to 4 months later, once osseointegration is complete, is for placing the definitive zirconia crown. The exact timing is confirmed at your assessment.',
      },
      {
        q: 'I already have implants placed in another country, with problems. Can you evaluate and fix my case?',
        a: 'Yes. They are evaluated with a CT scan, X-rays and photos of their current condition, and that determines whether any of your implants can be kept or need to be removed and replaced with a new one. The plan is confirmed once those studies are reviewed.',
      },
      {
        q: "I was told I don't have enough bone for an implant. What are my options?",
        a: 'A conventional implant, like the one in this case, needs a sufficient bone base confirmed by a CT scan. If the bone is not enough, there are graft-free alternatives: a zygomatic implant for the upper jaw, or a custom-made subperiosteal implant for the upper or lower jaw. Which one fits you is decided at your assessment.',
      },
      {
        q: 'Does the procedure hurt, and how safe is immediate loading?',
        a: "Surgery is done under local anesthesia or conscious sedation supervised by an anesthesiologist, depending on the case, so you feel no pain during the procedure. The implant's primary stability is what determines whether it is safe to load it the same day: if it isn't high enough, integration is prioritized over immediate provisionalization.",
      },
    ],
    ctaH2: 'Want to know if you are a candidate for immediate loading?',
    ctaP: 'Schedule your diagnostic consultation. With a CT scan and a clinical evaluation, we know exactly which type of implant is right for your case.',
    ctaWaMessage: 'Hello, I read the clinical case about the conventional implant with same-day teeth and I am interested in a consultation.',
    ctaWaLabel: 'Schedule a consultation on WhatsApp',
    ctaLinkLabel: 'See all implant types',
    metaTitle: 'Clinical Case: Titanium Implant, Teeth in a Day',
    metaDescription:
      'Real clinical case in Medellín: a titanium implant with a same-day provisional crown, under conscious sedation. Diagnosis, surgery and result, step by step.',
    keywords: ['conventional implant Medellin', 'titanium implant case', 'immediate provisionalization', 'same day dental implant Medellin', 'dental implant surgery Medellin', 'conscious sedation dental implant'],
    ogTitle: 'Clinical Case: Titanium Implant with Same-Day Teeth',
    ogDescription: 'Conventional implant with immediate provisionalization in Medellín.',
    schemaBreadcrumbHere: 'Clinical Case: Conventional Implant',
    schemaArticleTitle: 'Clinical Case: Conventional Titanium Implant with Immediate Provisionalization',
    schemaArticleDescription: 'A titanium implant with same-day teeth. Digitally guided surgery under conscious sedation in El Poblado, Medellín.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const t = isEs ? T.es : T.en;
  const BASE = 'https://dracarolinamacareno.com';
  const slug = 'caso-clinico-implante-convencional';

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords: t.keywords,
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
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

export default async function CasoClinicoConvencional({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const t = isEs ? T.es : T.en;
  const localePath = (path: string) => (locale === 'es' ? path : '/en' + path);
  const BASE = 'https://dracarolinamacareno.com';
  const slug = 'caso-clinico-implante-convencional';

  const breadcrumbs = [
    { name: t.breadcrumbHome, url: isEs ? BASE : `${BASE}/en` },
    { name: t.breadcrumbBlog, url: isEs ? `${BASE}/blog` : `${BASE}/en/blog` },
    { name: t.schemaBreadcrumbHere, url: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}` },
  ];

  return (
    <main style={{ backgroundColor: '#FCFBF9' }} className="min-h-screen">
      <SchemaOrg schema={[
        breadcrumbSchema(breadcrumbs),
        articleSchema({
          title: t.schemaArticleTitle,
          description: t.schemaArticleDescription,
          url: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`,
          publishDate: '2025-04-10',
        }),
        faqSchema(t.faqs.map(f => ({ question: f.q, answer: f.a }))),
      ]} />

      {/* Hero */}
      <section className="pt-32 pb-0" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#77726A' }}>
            <Link href={localePath('/')} className="hover:text-[#8A6B2E] transition-colors">{t.breadcrumbHome}</Link>
            <span>/</span>
            <Link href={localePath('/blog')} className="hover:text-[#8A6B2E] transition-colors">{t.breadcrumbBlog}</Link>
            <span>/</span>
            <span style={{ color: '#C9A461' }}>{t.breadcrumbHere}</span>
          </nav>

          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-5">
              {t.badges.map((tag) => (
                <span key={tag} className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border" style={{ color: '#C9A461', borderColor: '#C9A461', background: 'rgba(201,164,97,0.08)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.h1Main}<br />
              <span style={{ color: '#C9A461' }}>{t.h1Accent}</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#77726A' }}>
              {t.heroP}
            </p>

            <div className="flex items-center gap-4 pb-8 border-b" style={{ borderColor: '#E8E3DA' }}>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 flex-shrink-0" style={{ borderColor: '#C9A461' }}>
                <Image
                  src="/images/dra-carolina-perfil.webp"
                  alt={t.authorName}
                  width={40}
                  height={40}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#211E18' }}>{t.authorName}</p>
                <p className="text-xs" style={{ color: '#77726A' }}>{t.authorRole}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs" style={{ color: '#77726A' }}>{t.authorLocation}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Hero placeholder, replace with real photo */}
        <div className="max-w-5xl mx-auto px-4 mt-8">
          <AnimatedSection>
            <div className="relative aspect-[16/7] rounded-xl overflow-hidden border border-dashed flex items-center justify-center" style={{ borderColor: '#C9A461', background: 'rgba(201,164,97,0.04)' }}>
              <div className="text-center p-8">
                <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="#C9A461">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium" style={{ color: '#C9A461' }}>{t.heroPlaceholderTitle}</p>
                <p className="text-xs mt-1" style={{ color: '#77726A' }}>{t.heroPlaceholderDesc}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-12 px-4" style={{ backgroundColor: '#FCFBF9' }}>
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
                  <p className="font-semibold mb-1" style={{ color: '#211E18' }}>{t.videoTitle}</p>
                  <p className="text-sm" style={{ color: '#77726A' }}>{t.videoDesc}</p>
                </div>
                <WhatsAppLink
                  message={t.videoWaMessage}
                  locale={locale as 'es' | 'en'}
                  trackingLabel="caso_convencional_inline"
                  className="text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded transition-colors bg-[#C9A461] text-[#070B14]"
                >
                  {t.videoWaLabel}
                </WhatsAppLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-4 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {t.stepsH2}
            </h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: '#C9A461' }} />
          </AnimatedSection>

          <div className="space-y-16">
            {t.steps.map((step, i) => (
              <AnimatedSection key={i} delay={0.1}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-5">
                    <span className="text-5xl font-bold flex-shrink-0 mt-1" style={{ color: 'rgba(201,164,97,0.15)', fontFamily: 'var(--font-playfair-display, serif)', lineHeight: 1 }}>
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <span className="text-xs font-semibold tracking-widest uppercase block mb-1" style={{ color: '#C9A461' }}>{step.label}</span>
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>{step.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#77726A' }}>{step.content}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(201,164,97,0.08)', border: '1px solid rgba(201,164,97,0.2)' }}>
                        <svg className="w-4 h-4 flex-shrink-0" fill="#C9A461" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium" style={{ color: '#C9A461' }}>{step.highlight}</span>
                      </div>
                      {/* Photo placeholder per step */}
                      <div className="mt-4 rounded-lg border border-dashed px-4 py-3 text-xs" style={{ borderColor: '#374151', color: '#4B5563' }}>
                        {t.stepPhotoPending(step.number)}
                      </div>
                    </div>
                  </div>
                </div>
                {i < t.steps.length - 1 && <div className="mt-16 w-px h-6 mx-auto" style={{ backgroundColor: 'rgba(201,164,97,0.2)' }} />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 px-4 mt-8" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E3DA', borderBottom: '1px solid #E8E3DA' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '60–90' },
            { value: '1' },
            { value: '97%+' },
            { value: '3–4' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>
                {stat.value}<span className="text-sm font-normal ml-1" style={{ color: '#77726A' }}>{t.statUnits[i]}</span>
              </p>
              <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: '#77726A' }}>{t.statLabels[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {t.faqH2}
            </h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: '#C9A461' }} />
          </AnimatedSection>
          <div className="space-y-4">
            {t.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={0.05}>
                <div className="rounded-xl border p-6" style={{ borderColor: '#E8E3DA', backgroundColor: '#FFFFFF' }}>
                  <h3 className="text-base md:text-lg font-semibold mb-2 flex items-start gap-2" style={{ color: '#211E18' }}>
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

      {/* CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {t.ctaH2}
            </h2>
            <p className="mb-8" style={{ color: '#77726A' }}>
              {t.ctaP}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={t.ctaWaMessage}
                locale={locale as 'es' | 'en'}
                trackingLabel="caso_convencional_cta"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded text-sm tracking-wider uppercase transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]"
              >
                {t.ctaWaLabel}
              </WhatsAppLink>
              <Link
                href={localePath('/servicios/implantes-dentales')}
                className="inline-flex items-center justify-center gap-2 border font-medium px-8 py-4 rounded text-sm tracking-wider uppercase transition-all"
                style={{ borderColor: 'rgba(201,164,97,0.4)', color: '#211E18' }}
              >
                {t.ctaLinkLabel}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
