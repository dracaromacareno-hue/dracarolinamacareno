import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { articleSchema, breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';

/*
  22-sep-2026: reescrito siguiendo el patrón T.es/T.en de /servicios/implantes-dentales
  porque la versión /en mostraba casi todo el cuerpo en español (hero, pasos, FAQ,
  breadcrumb y mensajes de WhatsApp quedaban en español sin importar el locale).
  Todo el texto visible vive ahora en `T`, un bloque por idioma.

  Se agregaron 3 preguntas frecuentes nuevas del banco de pacientes internacionales
  (marca/fabricante del implante subperióstico, número de viajes, corrección de
  implantes o injertos fallidos hechos en otro país) para llegar a 8 FAQ y cumplir
  el mínimo de 9 encabezados en forma de pregunta del sitio (2 H2 + 8 FAQ EN AMBOS
  idiomas). No se inventó ningún dato clínico nuevo: la fabricación a medida en
  EE.UU. y los tiempos ya estaban publicados en esta página o en /servicios/implantes-dentales.

  Dato del paciente ya publicado antes de este cambio: "paciente de 67 años" en el
  paso 1. No es un dato que identifique por sí solo (no hay nombre, ciudad exacta
  de residencia ni oficio), así que se conserva sin tocar, tal como pide el
  encargo. Nunca se muestra la cara del paciente en las fotos de este caso.

  ⛔ Por la regla del 10-sep-2026, título y descripción del generateMetadata NO
  llevan precio ni cifra de ahorro.
*/

const T = {
  es: {
    badges: ['CASO CLÍNICO REAL', 'IMPLANTOLOGÍA AVANZADA', 'SEDACIÓN CONSCIENTE'],
    breadcrumbHome: 'Inicio',
    breadcrumbBlog: 'Blog',
    breadcrumbHere: 'Caso Clínico',
    h1Main: 'Implantes Subperiósticos en Medellín:',
    h1Accent: 'dientes fijos sin injerto óseo',
    heroP:
      'Cuando el hueso no es suficiente para implantes convencionales, existe una alternativa precisa y definitiva. Aquí te explico qué es un implante subperióstico, en qué se diferencia de un cigomático y cuándo se indica, y te muestro un caso real documentado paso a paso en nuestra clínica en El Poblado, Medellín.',
    authorName: 'Dra. Carolina Macareno',
    authorRole: 'Rehabilitadora Oral · Implantóloga · 17+ años de experiencia',
    authorLocation: 'Medellín, Colombia',
    authorYear: '2025',
    heroImageAlt: 'Cirugía de implante subperióstico, vista intraoral',
    heroImageCaption: 'Fotografía intraoperatoria, Clínica Dra. Carolina Macareno',
    videoTitle: 'Video de la cirugía completa, próximamente',
    videoDescLine1: 'Desde la sedación consciente con anestesiólogo hasta la provisionalización.',
    videoDescLine2: 'El proceso completo documentado en video.',
    videoWaMessage: 'Hola, leí el artículo sobre implantes subperiósticos en Medellín y me interesa saber más.',
    videoWaLabel: 'Consultar por WhatsApp mientras tanto',
    section1H2: '¿Qué es un implante subperióstico?',
    section1P:
      'Un implante subperióstico es un dispositivo de titanio fabricado a la medida de tu hueso que, en lugar de insertarse dentro del hueso como un implante convencional, se apoya sobre la superficie del hueso, por debajo del periostio (la membrana que lo recubre). Se diseña de forma personalizada a partir de una tomografía 3D, por lo que ningún implante subperióstico es igual a otro. Es la opción indicada cuando la reabsorción ósea es tan severa que ya no queda dónde anclar un implante tradicional y un injerto no es viable o el paciente no quiere pasar por meses de espera.',
    section2H2: 'Subperióstico y cigomático no son lo mismo',
    section2P:
      'Es una confusión frecuente, pero son dos soluciones distintas para "no tengo hueso". El implante cigomático se ancla en el hueso del pómulo y es exclusivo del maxilar superior. El implante subperióstico se apoya sobre el hueso, se fabrica a medida y sirve tanto para el maxilar superior como para la mandíbula (maxilar inferior), donde el cigomático no aplica. Cuál es el indicado para ti depende de tu anatomía, y eso solo se define con una valoración y diagnóstico 3D.',
    compare1Title: 'Subperióstico',
    compare1Desc: 'Se apoya sobre el hueso, a medida. Sirve para maxilar superior e inferior. Ideal cuando no hay hueso y el injerto no es una opción.',
    compare2Title: 'Cigomático',
    compare2Desc1: 'Se ancla en el hueso del pómulo. Solo maxilar superior. Puedes ver la ',
    compare2LinkText: 'página de implantes cigomáticos',
    compare2Desc2: '.',
    section3H2: '¿Quién es candidato?',
    candidates: [
      'Te dijeron que "no tienes hueso suficiente" para implantes convencionales.',
      'Tienes reabsorción ósea severa en el maxilar o en la mandíbula.',
      'Un injerto óseo no es viable por tu edad, condición sistémica o porque no quieres esperar meses.',
      'Llevas años con una prótesis removible que se mueve y quieres dientes fijos.',
      'Tuviste injertos o implantes previos que no funcionaron.',
    ],
    stepsH2: 'El procedimiento paso a paso',
    steps: [
      {
        number: '01',
        label: 'EVALUACIÓN INICIAL',
        title: 'Consulta y Diagnóstico',
        content:
          'Paciente de 67 años con edentulismo parcial mandibular y reabsorción ósea severa. Radiografías panorámicas y tomografía cone beam confirmaron que el hueso residual era insuficiente para implantes convencionales y que un injerto óseo no era viable por la edad y condición sistémica del paciente.',
        highlight: 'Diagnóstico: candidato ideal para implante subperióstico',
      },
      {
        number: '02',
        label: 'DISEÑO A MEDIDA',
        title: 'Planeación Digital 3D',
        content:
          'A partir del CBCT (tomografía computarizada cone beam), se diseñó digitalmente el implante subperióstico. El dispositivo de titanio se fabrica completamente personalizado para adaptarse a la anatomía única de la mandíbula del paciente. Ningún implante subperióstico es igual a otro.',
        highlight: 'Fabricación personalizada en 7-10 días hábiles',
        image: '/images/planeacion-implante-subperiostico-3d.webp',
        imageAlt: 'Planeación digital 3D del implante subperióstico sobre mandíbula',
      },
      {
        number: '03',
        label: 'ANESTESIA Y CONFORT',
        title: 'Preparación: Sedación Consciente',
        content:
          'El procedimiento se realizó con sedación consciente supervisada por anestesiólogo. El paciente permanece relajado, sin dolor, y cooperador durante toda la cirugía. Esta modalidad es ideal para procedimientos complejos: elimina la ansiedad, mejora la experiencia del paciente y permite mayor precisión al equipo quirúrgico.',
        highlight: 'Anestesiólogo presente durante toda la cirugía',
      },
      {
        number: '04',
        label: 'CIRUGÍA',
        title: 'Colocación del Implante',
        content:
          'Bajo campo quirúrgico estéril y sedación consciente, se realiza la incisión y se expone el hueso mandibular. El implante subperióstico, ya fabricado a medida, se posiciona directamente sobre el hueso y se fija con tornillos de titanio. Los postes de emergencia quedan listos para recibir la prótesis.',
        highlight: 'Tiempo quirúrgico: 90-120 minutos',
        image: '/images/caso-clinico-subperiostico-intraoral.webp',
        imageAlt: 'Vista intraoral durante colocación del implante subperióstico',
      },
      {
        number: '05',
        label: 'PROVISIONALIZACIÓN',
        title: 'Resultado Postquirúrgico',
        content:
          'Al cierre de la herida quirúrgica, los postes del implante emergen a través de la encía, listos para recibir la prótesis provisional en la misma sesión o en las primeras 48 horas. El paciente sale del consultorio con sus dientes. El resultado estético definitivo se obtiene a los 3-4 meses.',
        highlight: 'Dientes provisionales el mismo día',
        image: '/images/caso-clinico-subperiostico-postqx.webp',
        imageAlt: 'Vista postquirúrgica, postes del implante subperióstico emergentes',
      },
    ],
    statLabels: ['Tiempo quirúrgico', 'Sin injerto óseo', 'Provisionalización', 'Tasa de integración'],
    statUnits: ['min', 'injertos', 'sesión', 'éxito'],
    faqH2: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Cuál es la diferencia entre un implante subperióstico y uno cigomático?',
        a: 'Son dos soluciones distintas para cuando no hay hueso. El implante cigomático se ancla en el hueso del pómulo y solo sirve para el maxilar superior. El implante subperióstico se fabrica a medida y se apoya sobre el hueso, y puede usarse tanto en el maxilar superior como en la mandíbula. Cuál es el indicado depende de tu anatomía y se define con un diagnóstico 3D.',
      },
      {
        q: '¿Puedo tener implantes si me dijeron que no tengo hueso?',
        a: 'Sí. El implante subperióstico está diseñado precisamente para pacientes con reabsorción ósea severa a quienes les dijeron que "no tienen hueso" para implantes convencionales. Al apoyarse sobre el hueso en lugar de insertarse dentro de él, evita el injerto óseo y los meses de espera que este exige.',
      },
      {
        q: '¿El implante subperióstico necesita injerto de hueso?',
        a: 'No. Esa es su principal ventaja. En lugar de reconstruir el hueso perdido con un injerto (un proceso que puede tomar de 6 a 12 meses), el dispositivo se fabrica a la medida de tu anatomía y se fija sobre el hueso disponible, acortando el tratamiento de forma considerable.',
      },
      {
        q: '¿En cuánto tiempo tengo mis dientes con un implante subperióstico?',
        a: 'En muchos casos se coloca una prótesis provisional en la misma sesión quirúrgica o en las primeras 48 horas, por lo que el paciente sale con dientes fijos. El resultado estético definitivo se obtiene alrededor de los 3 a 4 meses, una vez estabilizado el implante.',
      },
      {
        q: '¿Es seguro el implante subperióstico y cuánto dura?',
        a: 'Es un procedimiento avanzado que exige planeación 3D precisa y experiencia quirúrgica. Realizado por un especialista, con fabricación personalizada y bajo sedación consciente supervisada por anestesiólogo, tiene tasas de integración documentadas superiores al 95%. Con buenos hábitos de higiene y controles, es una solución de largo plazo.',
      },
      {
        q: '¿Qué marca o fabricante usan para el implante subperióstico?',
        a: 'El implante subperióstico no es una marca comercial como Straumann o Neodent: se fabrica a medida para cada paciente con una empresa especializada en Estados Unidos, a partir de tu tomografía (CBCT). Es un dispositivo único, diseñado sobre tu anatomía exacta, no una pieza de catálogo.',
      },
      {
        q: '¿Cuántos viajes necesito para completar un implante subperióstico?',
        a: 'Normalmente dos viajes. En el primero se hace el diagnóstico 3D, se fabrica el implante a medida (7 a 10 días hábiles) y se realiza la cirugía, de la que sales con dientes provisionales. En el segundo, entre 3 y 4 meses después, se coloca la prótesis definitiva. El tiempo exacto entre los dos se confirma en tu valoración.',
      },
      {
        q: 'Ya tengo implantes o un injerto que no funcionó en otro país. ¿Pueden evaluar mi caso?',
        a: 'Sí. Se evalúa con tomografía, radiografías y fotos del estado actual, y ahí se define si el implante subperióstico es la alternativa indicada para tu caso o si conviene otra opción. El plan se confirma después de revisar esos estudios, no antes.',
      },
    ],
    ctaH2: '¿Crees que podrías ser candidato?',
    ctaP: 'Si te han dicho que "no tienes hueso suficiente" para implantes, agenda una consulta. El implante subperióstico puede ser tu solución.',
    ctaWaMessage: 'Hola, vi el caso clínico del implante subperióstico y me interesa una consulta.',
    ctaWaLabel: 'Agendar consulta de diagnóstico',
    ctaLinkLabel: 'Ver todos los tipos de implantes',
    metaTitle: 'Implantes Subperiósticos en Medellín: Caso Real',
    metaDescription:
      'Implantes subperiósticos a medida en Medellín: la solución cuando no hay hueso y el injerto no es viable. Qué son y un caso clínico real, paso a paso.',
    keywords: ['implantes subperiósticos Medellín', 'implante subperióstico', 'implante sin injerto óseo', 'implante a medida sin hueso', 'reabsorción ósea implante', 'implante subperióstico vs cigomático', 'sedación consciente implante', 'implantología avanzada Medellín', 'Dra. Carolina Macareno'],
    ogTitle: 'Caso Clínico Real: Implante Subperióstico | Dra. Carolina Macareno',
    ogDescription: 'Cirugía documentada paso a paso: implante subperióstico sin injerto en Medellín.',
    schemaBreadcrumbHere: 'Implantes Subperiósticos en Medellín',
    schemaArticleTitle: 'Implantes Subperiósticos en Medellín: Qué Son y Caso Real',
    schemaArticleDescription: 'Documentación completa de cirugía de implante subperióstico en paciente con reabsorción ósea severa. Paso a paso con sedación consciente.',
  },
  en: {
    badges: ['REAL CLINICAL CASE', 'ADVANCED IMPLANTOLOGY', 'CONSCIOUS SEDATION'],
    breadcrumbHome: 'Home',
    breadcrumbBlog: 'Blog',
    breadcrumbHere: 'Clinical Case',
    h1Main: 'Subperiosteal Implants in Medellín:',
    h1Accent: 'fixed teeth without a bone graft',
    heroP:
      "When there isn't enough bone for conventional implants, there is a precise, definitive alternative. Here I explain what a subperiosteal implant is, how it differs from a zygomatic implant and when it's indicated, and I walk you through a real case documented step by step at our clinic in El Poblado, Medellín.",
    authorName: 'Dr. Carolina Macareno',
    authorRole: 'Oral Rehabilitation Specialist · Implantologist · 17+ years of experience',
    authorLocation: 'Medellín, Colombia',
    authorYear: '2025',
    heroImageAlt: 'Subperiosteal implant surgery, intraoral view',
    heroImageCaption: 'Intraoperative photograph, Dr. Carolina Macareno Clinic',
    videoTitle: 'Full surgery video, coming soon',
    videoDescLine1: 'From conscious sedation with an anesthesiologist to provisionalization.',
    videoDescLine2: 'The entire process documented on video.',
    videoWaMessage: 'Hello, I read the article about subperiosteal implants in Medellín and would like to know more.',
    videoWaLabel: 'Ask on WhatsApp in the meantime',
    section1H2: 'What is a subperiosteal implant?',
    section1P:
      "A subperiosteal implant is a titanium device custom-made to fit your bone that, instead of being inserted inside the bone like a conventional implant, rests on top of the bone surface, under the periosteum (the membrane that covers it). It is custom-designed from a 3D scan, so no two subperiosteal implants are alike. It's the option indicated when bone loss is so severe that there is nowhere left to anchor a traditional implant, and a bone graft either isn't viable or the patient doesn't want to go through months of waiting.",
    section2H2: 'Subperiosteal and zygomatic are not the same thing',
    section2P:
      'It is a common mix-up, but they are two different solutions for "I have no bone." A zygomatic implant anchors into the cheekbone and is exclusive to the upper jaw. A subperiosteal implant rests on top of the bone, is custom-made, and works for both the upper jaw and the lower jaw (mandible), where a zygomatic implant does not apply. Which one is right for you depends on your anatomy, and that is only defined with an assessment and 3D diagnosis.',
    compare1Title: 'Subperiosteal',
    compare1Desc: 'Custom-made, rests on top of the bone. Works for both the upper and lower jaw. Ideal when there is no bone and a graft is not an option.',
    compare2Title: 'Zygomatic',
    compare2Desc1: 'Anchors into the cheekbone. Upper jaw only. You can see the ',
    compare2LinkText: 'zygomatic implants page',
    compare2Desc2: '.',
    section3H2: 'Who is a candidate?',
    candidates: [
      "You were told you don't have enough bone for conventional implants.",
      'You have severe bone loss in the upper or lower jaw.',
      "A bone graft isn't viable because of your age, your general health, or because you don't want to wait months.",
      'You have worn a loose removable denture for years and want fixed teeth.',
      'You had a previous graft or implants that failed.',
    ],
    stepsH2: 'The procedure, step by step',
    steps: [
      {
        number: '01',
        label: 'INITIAL EVALUATION',
        title: 'Consultation and Diagnosis',
        content:
          'A 67-year-old patient with partial mandibular edentulism and severe bone loss. Panoramic X-rays and a cone beam CT scan confirmed that the remaining bone was insufficient for conventional implants, and that a bone graft was not viable given the patient\'s age and overall health.',
        highlight: 'Diagnosis: an ideal candidate for a subperiosteal implant',
      },
      {
        number: '02',
        label: 'CUSTOM DESIGN',
        title: '3D Digital Planning',
        content:
          "From the CBCT (cone beam CT scan), the subperiosteal implant was digitally designed. The titanium device is fully custom-made to fit the unique anatomy of the patient's jaw. No two subperiosteal implants are alike.",
        highlight: 'Custom manufacturing in 7-10 business days',
        image: '/images/planeacion-implante-subperiostico-3d.webp',
        imageAlt: '3D digital planning of the subperiosteal implant on the jawbone',
      },
      {
        number: '03',
        label: 'ANESTHESIA AND COMFORT',
        title: 'Preparation: Conscious Sedation',
        content:
          'The procedure was performed under conscious sedation supervised by an anesthesiologist. The patient stays relaxed, pain-free and cooperative throughout the surgery. This approach is ideal for complex procedures: it removes anxiety, improves the patient experience and allows the surgical team to work with greater precision.',
        highlight: 'An anesthesiologist present throughout the surgery',
      },
      {
        number: '04',
        label: 'SURGERY',
        title: 'Implant Placement',
        content:
          'Under a sterile surgical field and conscious sedation, an incision is made and the jawbone is exposed. The subperiosteal implant, already custom-made, is positioned directly on top of the bone and secured with titanium screws. The emergence posts are left ready to receive the prosthesis.',
        highlight: 'Surgical time: 90-120 minutes',
        image: '/images/caso-clinico-subperiostico-intraoral.webp',
        imageAlt: 'Intraoral view during subperiosteal implant placement',
      },
      {
        number: '05',
        label: 'PROVISIONALIZATION',
        title: 'Post-Surgical Result',
        content:
          "Once the surgical site is closed, the implant posts emerge through the gum, ready to receive the provisional prosthesis during the same session or within the first 48 hours. The patient leaves the office with teeth. The definitive esthetic result is achieved around 3 to 4 months later.",
        highlight: 'Provisional teeth the same day',
        image: '/images/caso-clinico-subperiostico-postqx.webp',
        imageAlt: 'Post-surgical view, subperiosteal implant posts emerging',
      },
    ],
    statLabels: ['Surgical time', 'No bone graft', 'Provisionalization', 'Integration rate'],
    statUnits: ['min', 'grafts', 'session', 'success'],
    faqH2: 'Frequently asked questions',
    faqs: [
      {
        q: "What's the difference between a subperiosteal and a zygomatic implant?",
        a: 'They are two different solutions for when there is no bone. A zygomatic implant anchors into the cheekbone and only works for the upper jaw. A subperiosteal implant is custom-made and rests on top of the bone, and can be used in both the upper jaw and the lower jaw. Which one is right for you depends on your anatomy and is defined with a 3D diagnosis.',
      },
      {
        q: "Can I still get implants if I was told I don't have enough bone?",
        a: 'Yes. The subperiosteal implant is designed precisely for patients with severe bone loss who were told they "have no bone" for conventional implants. By resting on top of the bone instead of being inserted inside it, it avoids the bone graft and the months of waiting that a graft requires.',
      },
      {
        q: 'Does a subperiosteal implant need a bone graft?',
        a: "No. That's its main advantage. Instead of rebuilding lost bone with a graft (a process that can take 6 to 12 months), the device is custom-made to fit your anatomy and is secured on top of the bone you already have, shortening the treatment considerably.",
      },
      {
        q: 'How soon do I have teeth with a subperiosteal implant?',
        a: 'In many cases a provisional prosthesis is placed during the same surgical session or within the first 48 hours, so the patient leaves with fixed teeth. The definitive esthetic result is achieved around 3 to 4 months later, once the implant has stabilized.',
      },
      {
        q: 'Is a subperiosteal implant safe, and how long does it last?',
        a: 'It is an advanced procedure that requires precise 3D planning and surgical experience. Performed by a specialist, with custom manufacturing and under conscious sedation supervised by an anesthesiologist, it has documented integration rates above 95%. With good hygiene habits and regular checkups, it is a long-term solution.',
      },
      {
        q: 'What brand or manufacturer do you use for the subperiosteal implant?',
        a: "A subperiosteal implant isn't a commercial brand like Straumann or Neodent: it is custom-made for each patient by a specialized company in the United States, built from your CT (CBCT) scan. It's a one-of-a-kind device, designed around your exact anatomy, not a catalog part.",
      },
      {
        q: 'How many trips do I need to complete a subperiosteal implant?',
        a: 'Usually two trips. The first covers the 3D diagnosis, the custom manufacturing of the implant (7 to 10 business days) and the surgery, after which you leave with provisional teeth. The second, 3 to 4 months later, is for placing the permanent prosthesis. The exact time between the two is confirmed at your assessment.',
      },
      {
        q: 'I already have implants or a failed graft from another country. Can you evaluate my case?',
        a: 'Yes. It is evaluated with a CT scan, X-rays and photos of the current condition, and that determines whether a subperiosteal implant is the right alternative for your case or whether another option fits better. The plan is confirmed only after those studies are reviewed.',
      },
    ],
    ctaH2: 'Think you might be a candidate?',
    ctaP: 'If you have been told you "don\'t have enough bone" for implants, schedule a consultation. A subperiosteal implant may be your solution.',
    ctaWaMessage: 'Hello, I saw the subperiosteal implant clinical case and I am interested in a consultation.',
    ctaWaLabel: 'Schedule a diagnostic consultation',
    ctaLinkLabel: 'See all implant types',
    metaTitle: 'Subperiosteal Implants in Medellín: A Real Case',
    metaDescription:
      'Custom subperiosteal implants in Medellín: the option when there is no bone and a graft is not viable. What they are, and a real case, step by step.',
    keywords: ['subperiosteal implants Medellin', 'subperiosteal implant', 'implant without bone graft', 'custom implant no bone', 'subperiosteal vs zygomatic implant', 'dental implants no bone Colombia', 'conscious sedation dental implant'],
    ogTitle: 'Real Clinical Case: Subperiosteal Implant | Dr. Carolina Macareno',
    ogDescription: 'Step-by-step documented surgery: subperiosteal implant without a bone graft in Medellín.',
    schemaBreadcrumbHere: 'Subperiosteal Implants in Medellín',
    schemaArticleTitle: 'Subperiosteal Implants in Medellín: What They Are and a Real Case',
    schemaArticleDescription: 'Full documentation of subperiosteal implant surgery in a patient with severe bone loss. Step by step, under conscious sedation.',
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
  const slug = 'implantes-subperiosticos-medellin';

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
      images: [{ url: `${BASE}/images/caso-clinico-subperiostico-intraoral.webp`, width: 1800, height: 1350 }],
    },
    alternates: {
      canonical: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`,
      languages: { es: `${BASE}/blog/${slug}`, en: `${BASE}/en/blog/${slug}` },
    },
  };
}

export default async function CasoClinicoSubperiostico({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const t = isEs ? T.es : T.en;
  const localePath = (path: string) => (locale === 'es' ? path : '/en' + path);
  const BASE = 'https://dracarolinamacareno.com';
  const slug = 'implantes-subperiosticos-medellin';

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
          image: `${BASE}/images/caso-clinico-subperiostico-intraoral.webp`,
        }),
        faqSchema(t.faqs.map(f => ({ question: f.q, answer: f.a }))),
      ]} />

      {/* Hero */}
      <section className="pt-32 pb-0" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#77726A' }}>
            <Link href={localePath('/')} className="hover:text-[#8A6B2E] transition-colors">{t.breadcrumbHome}</Link>
            <span>/</span>
            <Link href={localePath('/blog')} className="hover:text-[#8A6B2E] transition-colors">{t.breadcrumbBlog}</Link>
            <span>/</span>
            <span style={{ color: '#C9A461' }}>{t.breadcrumbHere}</span>
          </nav>

          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-5">
              {t.badges.map((badge, i) => (
                <span
                  key={badge}
                  className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border"
                  style={i === 0
                    ? { color: '#C9A461', borderColor: '#C9A461', background: 'rgba(201,164,97,0.08)' }
                    : { color: '#77726A', borderColor: '#E8E3DA' }}
                >
                  {badge}
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
                <p className="text-xs" style={{ color: '#77726A' }}>{t.authorYear}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Hero image */}
        <div className="max-w-5xl mx-auto px-4 mt-8">
          <AnimatedSection>
            <div className="relative aspect-[16/7] rounded-xl overflow-hidden">
              <Image
                src="/images/caso-clinico-subperiostico-intraoral.webp"
                alt={t.heroImageAlt}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.6) 0%, transparent 60%)' }} />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-medium tracking-wider uppercase" style={{ color: '#C9A461' }}>
                  {t.heroImageCaption}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Educational body */}
      <section className="py-14 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {t.section1H2}
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: '#77726A' }}>
              {t.section1P}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {t.section2H2}
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: '#77726A' }}>
              {t.section2P}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl border p-5" style={{ borderColor: '#E8E3DA', backgroundColor: '#FFFFFF' }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#C9A461' }}>{t.compare1Title}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>{t.compare1Desc}</p>
              </div>
              <div className="rounded-xl border p-5" style={{ borderColor: '#E8E3DA', backgroundColor: '#FFFFFF' }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#C9A461' }}>{t.compare2Title}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>
                  {t.compare2Desc1}
                  <Link href={localePath('/servicios/implantes-cigomaticos')} className="underline" style={{ color: '#C9A461' }}>{t.compare2LinkText}</Link>
                  {t.compare2Desc2}
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {t.section3H2}
            </h2>
            <ul className="space-y-3 mb-2">
              {t.candidates.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base leading-relaxed" style={{ color: '#77726A' }}>
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="#C9A461" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
                  <p className="text-sm" style={{ color: '#77726A' }}>
                    {t.videoDescLine1}<br />
                    {t.videoDescLine2}
                  </p>
                </div>
                <WhatsAppLink
                  message={t.videoWaMessage}
                  locale={locale as 'es' | 'en'}
                  trackingLabel="subperiostico_inline"
                  className="text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded transition-colors bg-[#C9A461] text-[#070B14]"
                >
                  {t.videoWaLabel}
                </WhatsAppLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Step by step */}
      <section className="py-4 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.stepsH2}
            </h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: '#C9A461' }} />
          </AnimatedSection>

          <div className="space-y-16">
            {t.steps.map((step, i) => (
              <AnimatedSection key={i} delay={0.1}>
                <div className={`grid grid-cols-1 ${step.image ? 'lg:grid-cols-2' : ''} gap-8 items-center`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: 'rgba(201,164,97,0.2)', fontFamily: 'var(--font-playfair-display, serif)', lineHeight: 1 }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <span className="text-xs font-semibold tracking-widest uppercase block" style={{ color: '#C9A461' }}>
                          {step.label}
                        </span>
                        <h3 className="text-xl font-bold" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#77726A' }}>
                      {step.content}
                    </p>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg" style={{ backgroundColor: 'rgba(201,164,97,0.08)', border: '1px solid rgba(201,164,97,0.2)' }}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="#C9A461" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium" style={{ color: '#C9A461' }}>{step.highlight}</span>
                    </div>
                  </div>

                  {step.image && (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border" style={{ borderColor: '#E8E3DA' }}>
                      <Image
                        src={step.image}
                        alt={step.imageAlt!}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
                {i < t.steps.length - 1 && (
                  <div className="mt-16 w-px h-8 mx-auto" style={{ backgroundColor: 'rgba(201,164,97,0.2)' }} />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key facts bar */}
      <section className="py-10 px-4 mt-8" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E3DA', borderBottom: '1px solid #E8E3DA' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '90–120' },
            { value: '0' },
            { value: '1' },
            { value: '97%+' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>
                {stat.value}
                <span className="text-sm font-normal ml-1" style={{ color: '#77726A' }}>{t.statUnits[i]}</span>
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
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.ctaH2}
            </h2>
            <p className="mb-8" style={{ color: '#77726A' }}>
              {t.ctaP}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={t.ctaWaMessage}
                locale={locale as 'es' | 'en'}
                trackingLabel="subperiostico_cta"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded text-sm tracking-wider uppercase transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
