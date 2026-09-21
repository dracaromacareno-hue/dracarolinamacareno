import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import RespuestaDirecta from '@/components/RespuestaDirecta';
import RelatedArticles from '@/components/sections/RelatedArticles';
import SchemaOrg, { medicalServiceSchema, breadcrumbSchema, faqSchema, medicalWebPageSchema } from '@/components/SchemaOrg';

/*
  Rehabilitación oral completa: la página pilar de «rehabilitación oral medellín».

  21-sep-2026: se rehízo porque (1) solo hablaba de implantes y All-on-4, y competía con
  /all-on-4-medellin sin cubrir la otra mitad del servicio, la rehabilitación sobre los
  dientes propios (desgaste severo, bruxismo), que es la que traen casos como el de un
  paciente internacional de septiembre; y (2) la versión en inglés mostraba casi todo el
  cuerpo en español. Todo el texto visible vive ahora en `T`, un bloque por idioma.

  ⛔ Precios: el único publicado es el de la vía sobre implantes (desde, por arcada), que
  ya existía. La rehabilitación sobre dientes propios no lleva cifra hasta que la dueña la
  autorice. No añadir casos ni garantías sin su visto bueno.
*/

const T = {
  es: {
    eyebrow: 'Dientes desgastados · Bruxismo · Implantes · All-on-4',
    h1: 'Rehabilitación Oral Completa en Medellín',
    heroP:
      'Reconstruyo la boca completa cuando hay muchos dientes perdidos, muy dañados o gastados por el bruxismo. Un solo plan, diseñado de forma digital, que devuelve la función, la estética y la tranquilidad de masticar sin miedo.',
    queEsH2: '¿Qué es la rehabilitación oral completa?',
    queEsP1:
      'Es la reconstrucción integral de la boca cuando el problema ya no es un diente sino el conjunto: la mordida, la altura de los dientes, la estética y la forma en que las dos arcadas trabajan juntas. Combina coronas, carillas, implantes y prótesis fijas en un único plan coherente.',
    queEsP2:
      'La diferencia con tratar diente por diente es el orden. Primero se entiende por qué la boca llegó a ese punto, después se diseña el resultado final y solo entonces se empieza. Así el tratamiento no se desarma a los pocos años por la misma causa que dañó los dientes originales.',
    dosCaminosEyebrow: 'Dos caminos, un mismo criterio',
    dosCaminosH2: '¿Rehabilitación sobre tus dientes o sobre implantes?',
    dosCaminosP:
      'No todas las rehabilitaciones completas son iguales. La primera pregunta es si tus dientes se pueden conservar. Cuando se puede, conservarlos casi siempre es lo mejor.',
    caminos: [
      {
        badge: 'CONSERVA TUS DIENTES',
        title: 'Rehabilitación sobre tus propios dientes',
        desc: 'Para dientes gastados, fracturados o con restauraciones que fallan, pero con raíces sanas. Se reconstruyen con coronas y carillas en zirconio o disilicato de litio, recuperando la altura perdida y una mordida estable.',
        highlight: '✓ Desgaste severo y bruxismo',
      },
      {
        badge: 'ARCADA COMPLETA',
        title: 'Rehabilitación sobre implantes',
        desc: 'Cuando faltan la mayoría de los dientes o los que quedan no se pueden salvar. Una prótesis fija completa sobre 4 o 6 implantes, con provisional el mismo día cuando el caso lo permite.',
        highlight: '✓ All-on-4, All-on-6 y cigomáticos',
        link: { href: '/all-on-4-medellin', label: 'Ver All-on-4 en Medellín' },
      },
    ],
    desgasteH2: 'Dientes desgastados por bruxismo: cómo se reconstruyen',
    desgasteP1:
      'El bruxismo, apretar o rechinar los dientes, gasta el esmalte durante años sin doler. Cuando el paciente lo nota, los dientes se ven cortos, la sonrisa envejeció y a veces ya no hay espacio para poner una corona sin desgastar más. Ahí no basta con «arreglar los dientes»: hay que reconstruir la mordida.',
    desgasteP2:
      'En estos casos el trabajo empieza antes de tocar un diente. Hago un análisis oclusal y funcional completo para entender cómo muerde el paciente, cuánta altura perdió y cuánta se puede recuperar de forma segura. Con eso se planifica la nueva dimensión vertical, que es la altura de la mordida.',
    desgastePasos: [
      {
        title: 'Análisis oclusal y funcional',
        desc: 'Estudio de la mordida, los movimientos de la mandíbula, la musculatura y la articulación. Si hay indicación clínica se usa un desprogramador; no es un paso obligatorio para todos.',
      },
      {
        title: 'Las dos arcadas como un solo sistema',
        desc: 'Aunque el desgaste se vea en una sola arcada, estudio cómo encajan las dos. Planificar la relación entre ambas es lo que permite recuperar el espacio y construir una mordida estable.',
      },
      {
        title: 'Diseño digital y encerado diagnóstico',
        desc: 'Escaneo intraoral 3D, fotografías y diseño de la nueva forma de los dientes, de la dimensión vertical y de la relación entre las dos arcadas antes de empezar.',
      },
      {
        title: 'Provisionales que funcionan como prototipo',
        desc: 'No son coronas temporales mientras se espera. En ellos se prueba y se ajusta la altura de la mordida, los contactos, la guía de los dientes delanteros, los movimientos de la mandíbula, la fonética, la masticación, la comodidad muscular y la estética.',
      },
      {
        title: 'Prueba en resina antes de la cerámica',
        desc: 'Antes de fabricar las definitivas se verifica en boca la forma, las proporciones, la altura y la mordida. La cerámica reproduce una mordida que ya se probó, en vez de adaptar la mordida a la cerámica.',
      },
      {
        title: 'Restauraciones definitivas, diente por diente',
        desc: 'Corona, carilla o incrustación se decide en cada diente según la estructura sana, el esmalte y la carga que recibe. No se convierten en coronas completas los dientes que se pueden tratar de forma más conservadora. El material, zirconio o disilicato de litio, se elige por resistencia y no solo por estética.',
      },
      {
        title: 'Placa de protección y controles',
        desc: 'Reconstruir la mordida no elimina el bruxismo. Por eso al terminar se entrega la placa de protección, que va incluida siempre, y se programan controles periódicos.',
      },
    ],
    desgasteNota:
      'Si quieres entender mejor el origen del problema, lo explico en el artículo sobre',
    desgasteNotaLink: 'bruxismo y rehabilitación',
    vsH2: '¿En qué se diferencia la rehabilitación oral completa del All-on-4?',
    vsP1:
      'El All-on-4 es una de las formas de hacer una rehabilitación completa, no un sinónimo. Es la solución cuando la arcada ya no tiene dientes que se puedan salvar: se colocan cuatro implantes y sobre ellos una prótesis fija completa.',
    vsP2:
      'La rehabilitación oral completa es el concepto más amplio. Puede hacerse sobre los dientes propios, sobre implantes o combinando las dos cosas en la misma boca. Lo que decide el camino no es la técnica que se quiera vender, sino cuántos dientes se pueden conservar y en qué estado está el hueso.',
    tiposEyebrow: 'Modalidades sobre implantes',
    tiposH2: 'Cuando la solución son los implantes',
    tiposP: 'Desde All-on-4 con carga inmediata hasta implantes cigomáticos para los casos con poco hueso.',
    tipos: [
      { badge: 'CARGA INMEDIATA', title: 'All-on-4', desc: 'Arcada completa sobre 4 implantes: 2 anteriores verticales y 2 posteriores angulados. Cuando el caso lo permite, el paciente sale con dientes provisionales el mismo día de la cirugía.', highlight: '✓ Dientes el mismo día' },
      { badge: 'MAYOR ESTABILIDAD', title: 'All-on-6', desc: '6 implantes para distribuir mejor las fuerzas y dar más soporte a la prótesis definitiva. Se recomienda cuando hay hueso suficiente y se busca la máxima estabilidad a largo plazo.', highlight: '✓ Máxima estabilidad y soporte' },
      { badge: 'SOLUCIÓN DEFINITIVA', title: 'Prótesis híbrida', desc: 'Arcada completa en resina de alta resistencia con refuerzo metálico o en zirconio, sobre 4 a 6 implantes. Reemplaza todos los dientes de una arcada.', highlight: '✓ Arcada completa permanente' },
      { badge: 'SIN INJERTO ÓSEO', title: 'Implantes cigomáticos', desc: 'Para atrofia ósea severa del maxilar superior, cuando los implantes convencionales no son posibles. El implante se ancla en el hueso del pómulo y evita el injerto.', highlight: '✓ Alternativa al injerto óseo' },
    ],
    quienH2: '¿Quién necesita una rehabilitación oral completa?',
    quien: [
      'Tiene los dientes muy desgastados por bruxismo severo o por acidez crónica.',
      'Siente que los dientes se ven cada vez más cortos o que la sonrisa envejeció.',
      'Ha tenido fracasos repetidos con tratamientos anteriores en varios dientes.',
      'Perdió la mayoría o todos sus dientes, por cualquier causa.',
      'Lleva años con prótesis removible y quiere una solución fija.',
      'Necesita coronas, implantes o extracciones en varios dientes a la vez.',
    ],
    porqueEyebrow: '¿Por qué elegirnos?',
    porqueH2: 'El caso más complejo requiere la mayor experiencia',
    porque: [
      { icon: 'scan', title: 'Diagnóstico y diseño digital', desc: 'Escaneo intraoral 3D en el consultorio, fotografías y diseño del resultado antes de empezar. Las radiografías no están incluidas en la valoración, pero siempre son necesarias.' },
      { icon: 'award', title: 'Especialista en rehabilitación oral', desc: 'Más de 17 años de experiencia y formación avanzada en implantología (NEODENT/FACOP, Brasil).' },
      { icon: 'check', title: 'Cirugía planificada en equipo', desc: 'La cirugía la realiza la Dra. Carolina o el cirujano maxilofacial del equipo, según se defina en la planeación del caso.' },
      { icon: 'globe', title: 'Pacientes internacionales', desc: 'Atendemos pacientes de Estados Unidos, Panamá, Chile y Puerto Rico que viajan a Medellín.' },
    ],
    procesoH2: 'El proceso sobre implantes, paso a paso',
    proceso: [
      { title: 'Diagnóstico 3D y planificación digital', desc: 'Tomografía, escaneo intraoral, fotografías y análisis facial. Se diseña el resultado final antes de comenzar.' },
      { title: 'Extracciones y preparación', desc: 'Si hay dientes que no se pueden recuperar, se extraen y se prepara el hueso para recibir los implantes.' },
      { title: 'Cirugía de implantes', desc: 'Colocación de los implantes con anestesia local o sedación consciente. Dura de 2 a 4 horas según el caso.' },
      { title: 'Prótesis provisional inmediata', desc: 'En los casos de carga inmediata se coloca una prótesis provisional fija el mismo día.' },
      { title: 'Período de oseointegración', desc: 'De 3 a 6 meses mientras el implante se integra con el hueso, con controles periódicos.' },
      { title: 'Rehabilitación definitiva', desc: 'Fabricación e instalación de la prótesis definitiva en zirconio o cerámica.' },
    ],
    info: [
      { label: 'Duración del proceso', value: '6 a 12 meses' },
      { label: 'Sobre implantes, desde', value: '$15.000.000 COP por arcada' },
      { label: 'Número de citas', value: '6 a 8 citas' },
    ],
    faqH2: 'Preguntas frecuentes',
    ctaH2: 'Empieza por el diagnóstico',
    ctaP: 'Cada rehabilitación empieza por entender tu caso. Escríbeme y revisamos qué camino te sirve: conservar tus dientes, implantes o una combinación.',
    ctaWa: 'Escribir por WhatsApp',
    ctaContact: 'Ver página de contacto',
    waMessage: 'Hola, leí la página de rehabilitación oral completa. Me gustaría una valoración de mi caso.',
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
    breadcrumbHere: 'Rehabilitación Oral Completa',
    photoAlt: 'Rehabilitación oral completa, Dra. Carolina Macareno, Medellín',
    photoCaption: 'Desgaste y bruxismo · Implantes · All-on-4',
  },
  en: {
    eyebrow: 'Worn teeth · Bruxism · Implants · All-on-4',
    h1: 'Full Mouth Rehabilitation in Medellín',
    heroP:
      'I rebuild the whole mouth when many teeth are missing, badly damaged or worn down by bruxism. One plan, designed digitally, that restores function, esthetics and the confidence to chew without fear.',
    queEsH2: 'What is full mouth rehabilitation?',
    queEsP1:
      'It is the complete reconstruction of the mouth when the problem is no longer one tooth but the whole system: the bite, the height of the teeth, the esthetics and the way both arches work together. It combines crowns, veneers, implants and fixed prostheses in a single, coherent plan.',
    queEsP2:
      'The difference from treating tooth by tooth is the order. First we understand why the mouth reached this point, then we design the final result, and only then do we begin. That way the treatment does not break down a few years later for the same reason that damaged the original teeth.',
    dosCaminosEyebrow: 'Two paths, one standard',
    dosCaminosH2: 'Rehabilitation on your own teeth or on implants?',
    dosCaminosP:
      'Not every full mouth rehabilitation is the same. The first question is whether your teeth can be kept. When they can, keeping them is almost always the best option.',
    caminos: [
      {
        badge: 'KEEP YOUR TEETH',
        title: 'Rehabilitation on your own teeth',
        desc: 'For teeth that are worn, fractured or have failing restorations, but still have healthy roots. They are rebuilt with crowns and veneers in zirconia or lithium disilicate, restoring lost height and a stable bite.',
        highlight: '✓ Severe wear and bruxism',
      },
      {
        badge: 'FULL ARCH',
        title: 'Rehabilitation on implants',
        desc: 'When most teeth are missing or the remaining ones cannot be saved. A complete fixed prosthesis on 4 or 6 implants, with a same-day provisional when the case allows it.',
        highlight: '✓ All-on-4, All-on-6 and zygomatic',
        link: { href: '/all-on-4-medellin', label: 'See All-on-4 in Medellín' },
      },
    ],
    desgasteH2: 'Teeth worn down by bruxism: how they are rebuilt',
    desgasteP1:
      'Bruxism, clenching or grinding your teeth, wears the enamel down for years without pain. By the time the patient notices, the teeth look short, the smile has aged, and sometimes there is no room left for a crown without removing more tooth. At that point it is not enough to "fix the teeth": the bite has to be rebuilt.',
    desgasteP2:
      'In these cases the work starts before touching a tooth. I carry out a complete occlusal and functional analysis to understand how the patient bites, how much height was lost and how much can be safely recovered. That is how the new vertical dimension, the height of the bite, is planned.',
    desgastePasos: [
      {
        title: 'Occlusal and functional analysis',
        desc: 'Study of the bite, jaw movements, muscles and joint. When there is a clinical indication a deprogrammer is used; it is not a mandatory step for everyone.',
      },
      {
        title: 'Both arches as one system',
        desc: 'Even when the wear shows in one arch, I study how both fit together. Planning the relationship between them is what makes it possible to recover restorative space and build a stable bite.',
      },
      {
        title: 'Digital design and diagnostic wax-up',
        desc: '3D intraoral scan, photographs and design of the new tooth anatomy, the vertical dimension and the relationship between both arches before starting.',
      },
      {
        title: 'Provisionals that work as a prototype',
        desc: 'They are not temporary crowns while you wait. In them we test and adjust bite height, contacts, front-teeth guidance, jaw movements, speech, chewing, muscular comfort and esthetics.',
      },
      {
        title: 'Resin try-in before the ceramics',
        desc: 'Before the definitive restorations are made, shape, proportions, height and bite are checked in your mouth. The ceramics reproduce a bite that has already been tested, instead of adapting your bite to the ceramics.',
      },
      {
        title: 'Definitive restorations, tooth by tooth',
        desc: 'Crown, veneer or onlay is decided for each tooth based on sound structure, enamel and the load it carries. Teeth that can be treated more conservatively are not turned into full crowns. The material, zirconia or lithium disilicate, is chosen for strength and not for esthetics alone.',
      },
      {
        title: 'Night guard and follow-up',
        desc: 'Rebuilding the bite does not eliminate bruxism. That is why a night guard is delivered at the end, always included, and periodic check-ups are scheduled.',
      },
    ],
    desgasteNota: 'If you want to understand where the problem comes from, I explain it in the article on',
    desgasteNotaLink: 'bruxism and rehabilitation',
    vsH2: 'How is full mouth rehabilitation different from All-on-4?',
    vsP1:
      'All-on-4 is one way of doing a full mouth rehabilitation, not a synonym for it. It is the solution when the arch no longer has teeth that can be saved: four implants are placed and a complete fixed prosthesis goes on top.',
    vsP2:
      'Full mouth rehabilitation is the broader concept. It can be done on your own teeth, on implants, or combining both in the same mouth. What decides the path is not the technique someone wants to sell, but how many teeth can be kept and the condition of the bone.',
    tiposEyebrow: 'Implant-based options',
    tiposH2: 'When implants are the solution',
    tiposP: 'From All-on-4 with immediate loading to zygomatic implants for cases with little bone.',
    tipos: [
      { badge: 'IMMEDIATE LOADING', title: 'All-on-4', desc: 'A full arch on 4 implants: 2 vertical in front and 2 angled at the back. When the case allows it, the patient leaves with provisional teeth on the day of surgery.', highlight: '✓ Teeth the same day' },
      { badge: 'GREATER STABILITY', title: 'All-on-6', desc: '6 implants to distribute forces better and give more support to the definitive prosthesis. Recommended when there is enough bone and maximum long-term stability is the goal.', highlight: '✓ Maximum stability and support' },
      { badge: 'DEFINITIVE SOLUTION', title: 'Hybrid prosthesis', desc: 'A full arch in high-strength resin with a metal framework, or in zirconia, on 4 to 6 implants. It replaces all the teeth in one arch.', highlight: '✓ Permanent full arch' },
      { badge: 'NO BONE GRAFT', title: 'Zygomatic implants', desc: 'For severe bone loss in the upper jaw, when conventional implants are not possible. The implant is anchored in the cheekbone and avoids a bone graft.', highlight: '✓ Alternative to bone grafting' },
    ],
    quienH2: 'Who needs a full mouth rehabilitation?',
    quien: [
      'Your teeth are badly worn from severe bruxism or chronic acid reflux.',
      'Your teeth look shorter every year or your smile has aged.',
      'You have had repeated failures with previous treatments on several teeth.',
      'You have lost most or all of your teeth, for any reason.',
      'You have worn a removable denture for years and want a fixed solution.',
      'You need crowns, implants or extractions on several teeth at once.',
    ],
    porqueEyebrow: 'Why choose us?',
    porqueH2: 'The most complex case needs the most experience',
    porque: [
      { icon: 'scan', title: 'Digital diagnosis and design', desc: '3D intraoral scan in the office, photographs and design of the result before starting. X-rays are not included in the assessment, but they are always required.' },
      { icon: 'award', title: 'Oral rehabilitation specialist', desc: 'More than 17 years of experience and advanced implant training (NEODENT/FACOP, Brazil).' },
      { icon: 'check', title: 'Surgery planned as a team', desc: 'Surgery is performed by Dr. Carolina or by the maxillofacial surgeon on the team, as defined when the case is planned.' },
      { icon: 'globe', title: 'International patients', desc: 'We treat patients from the United States, Panama, Chile and Puerto Rico who travel to Medellín.' },
    ],
    procesoH2: 'The implant process, step by step',
    proceso: [
      { title: '3D diagnosis and digital planning', desc: 'CT scan, intraoral scan, photographs and facial analysis. The final result is designed before starting.' },
      { title: 'Extractions and preparation', desc: 'If some teeth cannot be saved, they are extracted and the bone is prepared to receive the implants.' },
      { title: 'Implant surgery', desc: 'Implants are placed under local anesthesia or conscious sedation. It takes 2 to 4 hours depending on the case.' },
      { title: 'Immediate provisional prosthesis', desc: 'In immediate-loading cases a fixed provisional prosthesis is placed the same day.' },
      { title: 'Osseointegration period', desc: '3 to 6 months while the implant integrates with the bone, with periodic check-ups.' },
      { title: 'Definitive rehabilitation', desc: 'Fabrication and placement of the definitive prosthesis in zirconia or ceramic.' },
    ],
    info: [
      { label: 'Treatment length', value: '6 to 12 months' },
      { label: 'On implants, from', value: '$15,000,000 COP per arch' },
      { label: 'Number of visits', value: '6 to 8 visits' },
    ],
    faqH2: 'Frequently asked questions',
    ctaH2: 'Start with the diagnosis',
    ctaP: 'Every rehabilitation starts by understanding your case. Write to me and we will review which path suits you: keeping your teeth, implants or a combination.',
    ctaWa: 'Message on WhatsApp',
    ctaContact: 'Go to contact page',
    waMessage: 'Hello, I read the full mouth rehabilitation page. I would like an evaluation of my case.',
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    breadcrumbHere: 'Full Mouth Rehabilitation',
    photoAlt: 'Full mouth rehabilitation, Dr. Carolina Macareno, Medellín',
    photoCaption: 'Wear and bruxism · Implants · All-on-4',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const BASE = 'https://dracarolinamacareno.com';
  const isEs = locale === 'es';
  const slug = 'rehabilitacion-oral-completa';

  return {
    title: isEs
      ? 'Rehabilitación Oral en Medellín | Desgaste e Implantes'
      : 'Full Mouth Rehabilitation Medellín | Worn Teeth & Implants',
    description: isEs
      ? 'Rehabilitación oral completa en Medellín: reconstruyo dientes gastados por bruxismo o la arcada completa sobre implantes. Te digo qué camino te sirve.'
      : 'Full mouth rehabilitation in Medellín: I rebuild teeth worn down by bruxism or the whole arch on implants. I tell you which path is right for your case.',
    keywords: isEs
      ? [
          'rehabilitación oral Medellín',
          'rehabilitación oral completa Medellín',
          'rehabilitador oral Medellín',
          'dientes desgastados bruxismo',
          'desgaste dental severo tratamiento',
          'dimensión vertical rehabilitación',
          'All-on-4 Medellín',
          'implantes cigomáticos sin injerto',
          'Dra. Carolina Macareno',
        ]
      : [
          'full mouth rehabilitation Medellin',
          'full mouth rehabilitation Colombia',
          'worn teeth bruxism treatment',
          'severe tooth wear reconstruction',
          'All-on-4 Medellin',
          'zygomatic implants no graft',
        ],
    openGraph: {
      title: isEs
        ? 'Rehabilitación Oral Completa en Medellín | Dra. Carolina Macareno'
        : 'Full Mouth Rehabilitation in Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Dientes gastados por bruxismo o arcada completa sobre implantes. Diagnóstico digital y un plan para tu caso en El Poblado, Medellín.'
        : 'Teeth worn down by bruxism or a full arch on implants. Digital diagnosis and a plan for your case in El Poblado, Medellín.',
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
    q: '¿Cuánto cuesta una rehabilitación oral completa en Colombia?',
    a: 'Sobre implantes, una rehabilitación oral completa cuesta desde $15.000.000 COP por arcada, según el número de implantes, el tipo de prótesis y la complejidad del caso. Cuando se hace sobre los dientes propios, el valor depende de cuántos dientes se reconstruyen y del material. En los dos casos el valor exacto se define en la valoración.',
  },
  {
    q: '¿Se pueden salvar mis dientes si están muy gastados por el bruxismo?',
    a: 'Muchas veces sí. Si las raíces están sanas, los dientes gastados se reconstruyen con coronas o carillas recuperando la altura perdida. Primero se hace un análisis oclusal y funcional para saber cuánta altura se puede recuperar de forma segura.',
  },
  {
    q: '¿Qué es la dimensión vertical y por qué importa?',
    a: 'Es la altura de la mordida. Con el desgaste por bruxismo esa altura se pierde, los dientes se ven cortos y a veces no queda espacio para restaurarlos. En la rehabilitación se planifica la nueva altura y se prueba primero en los provisionales antes de hacer los definitivos.',
  },
  {
    q: '¿Para qué sirven los provisionales?',
    a: 'Funcionan como el prototipo de la rehabilitación final. En ellos se evalúan y ajustan la altura de la mordida, los contactos, la guía de los dientes delanteros, la fonética, la masticación y la estética. Cuando todo funciona, se copian en el material definitivo.',
  },
  {
    q: '¿Necesito usar un desprogramador antes de la rehabilitación?',
    a: 'No siempre. El desprogramador sirve para obtener una posición de la mandíbula estable y reproducible cuando la mordida actual no da una referencia confiable. Por eso se indica según lo que muestre el examen de la articulación, los músculos y la mordida, y no como un paso automático para todo paciente con bruxismo. Tampoco se define por un número fijo de días: el objetivo es obtener registros confiables.',
  },
  {
    q: 'Si el desgaste está en los dientes de abajo, ¿por qué estudiar las dos arcadas?',
    a: 'Porque las dos arcadas trabajan como un solo sistema. Las coronas de arriba pueden tener desajustes y la forma en que encajan las dos define la mordida final. Estudiarlas juntas permite recuperar el espacio y construir una mordida estable. Eso no significa automáticamente hacer coronas en todos los dientes.',
  },
  {
    q: '¿Me van a poner coronas en todos los dientes?',
    a: 'No necesariamente. Corona, carilla o incrustación se decide diente por diente, según cuánta estructura sana y cuánto esmalte queda, las restauraciones que ya existen y la carga que recibe cada diente. Los dientes que se pueden restaurar de forma más conservadora no se convierten en coronas completas.',
  },
  {
    q: '¿Qué radiografías necesito y habrá que hacer tratamientos de conducto?',
    a: 'La panorámica da información general, pero para una rehabilitación de este alcance hace falta una serie periapical completa, que muestra cada diente por separado. Si puedes, tómala antes del viaje y envíala; si no, se hace aquí el primer día. Los tratamientos de conducto no se hacen de forma preventiva: solo donde hay indicación clínica y radiográfica, y a veces eso se sabe al retirar una corona antigua.',
  },
  {
    q: '¿Cuántos días debo quedarme en Medellín para una rehabilitación sobre mis dientes?',
    a: 'Alrededor de 10 a 12 días, siempre que los estudios previos no muestren algo que obligue a cambiar el plan. El primer día es el examen y la planeación; en los siguientes se colocan y ajustan los provisionales, se hacen las preparaciones y la prueba en resina, y al final se cementan las definitivas y se hace un control antes de volver a casa.',
  },
  {
    q: '¿Qué seguimiento tengo cuando vuelvo a mi país?',
    a: 'Antes del viaje de regreso se hace un control final. Después hay dos citas de seguimiento por videollamada, a los 15 y a los 30 días, y se entrega un resumen escrito de todo el tratamiento para tu odontólogo en tu país.',
  },
  {
    q: '¿La rehabilitación cura el bruxismo?',
    a: 'No. Reconstruir la mordida no elimina el bruxismo. Por eso al terminar se entrega una placa de protección, que va incluida siempre, y se hacen controles periódicos para cuidar el trabajo a largo plazo.',
  },
  {
    q: '¿En qué se diferencia de un All-on-4?',
    a: 'El All-on-4 es una forma de rehabilitación completa sobre cuatro implantes, indicada cuando la arcada no tiene dientes que se puedan salvar. La rehabilitación oral completa es el concepto más amplio: puede hacerse sobre los dientes propios, sobre implantes o combinando las dos cosas.',
  },
  {
    q: '¿Se puede tener dientes el mismo día de la cirugía?',
    a: 'En la vía sobre implantes, con All-on-4 o All-on-6, es posible colocar una prótesis provisional el mismo día de la cirugía cuando el caso lo permite. La definitiva en zirconio se coloca después del período de oseointegración.',
  },
  {
    q: '¿Hay límite de edad para la rehabilitación oral completa?',
    a: 'No existe un límite de edad. Lo que se evalúa es el estado general de salud. Pacientes mayores de 70 u 80 años son candidatos frecuentes. Lo importante es que la salud general esté controlada.',
  },
  {
    q: '¿Qué pasa si perdí todo el hueso del maxilar?',
    a: 'Para la atrofia ósea severa existen los implantes cigomáticos, que se anclan en el hueso del pómulo y no requieren injerto óseo previo. Permiten rehabilitar incluso los casos más complejos.',
  },
];

const faqsEn = [
  {
    q: 'How much does a full mouth rehabilitation cost in Colombia?',
    a: 'On implants, a full mouth rehabilitation costs from $15,000,000 COP per arch, depending on the number of implants, the type of prosthesis and case complexity. When it is done on your own teeth, the price depends on how many teeth are rebuilt and the material. In both cases the exact price is set at your assessment.',
  },
  {
    q: 'Can my teeth be saved if they are badly worn from bruxism?',
    a: 'Often, yes. If the roots are healthy, worn teeth are rebuilt with crowns or veneers that restore the lost height. First an occlusal and functional analysis is done to know how much height can be safely recovered.',
  },
  {
    q: 'What is vertical dimension and why does it matter?',
    a: 'It is the height of your bite. With bruxism wear that height is lost, the teeth look short and sometimes there is no room left to restore them. In the rehabilitation the new height is planned and tested first in the provisionals before the definitive restorations are made.',
  },
  {
    q: 'What are the provisionals for?',
    a: 'They work as the prototype of the final rehabilitation. In them we evaluate and adjust bite height, contacts, front-teeth guidance, speech, chewing and esthetics. Once everything works, they are copied into the definitive material.',
  },
  {
    q: 'Do I need to wear a deprogrammer before rehabilitation?',
    a: 'Not always. A deprogrammer is used to obtain a stable, reproducible jaw position when the existing bite does not give a reliable reference. So it is indicated by what the examination of the joints, muscles and bite shows, not as an automatic step for every patient with bruxism. Nor is it defined by a fixed number of days: the goal is to obtain reliable records.',
  },
  {
    q: 'If the wear is on my lower teeth, why study both arches?',
    a: 'Because both arches work as one system. The upper crowns may have marginal discrepancies, and the way both arches fit together defines the final bite. Studying them together makes it possible to recover restorative space and build a stable bite. It does not automatically mean crowning every tooth.',
  },
  {
    q: 'Will every tooth get a crown?',
    a: 'Not necessarily. Crown, veneer or onlay is decided tooth by tooth, based on how much sound structure and enamel remains, existing restorations and the load each tooth carries. Teeth that can be restored more conservatively are not turned into full crowns.',
  },
  {
    q: 'Which X-rays do I need, and will I need root canals?',
    a: 'A panoramic gives general information, but a rehabilitation of this scope needs a complete periapical series, which shows each tooth individually. If you can, have it taken before your trip and send it; if not, it is taken here on the first day. Root canals are not done preventively: only where there is a clinical and radiographic indication, and sometimes that is only known once an old crown is removed.',
  },
  {
    q: 'How many days do I need to stay in Medellín for a rehabilitation on my own teeth?',
    a: 'About 10 to 12 days, provided the preliminary studies do not reveal anything that requires changing the plan. The first day is the examination and planning; the following days the provisionals are placed and adjusted, preparations and the resin try-in are done, and at the end the definitive restorations are cemented with a check-up before you travel home.',
  },
  {
    q: 'What follow-up do I get once I am back home?',
    a: 'There is a final check-up before your return trip. After that, two video follow-up appointments at 15 and 30 days, and a written summary of your entire treatment for your dentist at home.',
  },
  {
    q: 'Does rehabilitation cure bruxism?',
    a: 'No. Rebuilding the bite does not eliminate bruxism. That is why a night guard is delivered at the end, always included, and periodic check-ups are scheduled to protect the work over the long term.',
  },
  {
    q: 'How is it different from All-on-4?',
    a: 'All-on-4 is one form of full mouth rehabilitation on four implants, indicated when the arch has no teeth that can be saved. Full mouth rehabilitation is the broader concept: it can be done on your own teeth, on implants, or combining both.',
  },
  {
    q: 'Can I have teeth the same day as surgery?',
    a: 'On the implant path, with All-on-4 or All-on-6, a provisional prosthesis can be placed on the day of surgery when the case allows it. The definitive zirconia prosthesis is placed after the osseointegration period.',
  },
  {
    q: 'Is there an age limit for full mouth rehabilitation?',
    a: 'There is no age limit. What is evaluated is overall health. Patients over 70 or 80 are frequent candidates. The important thing is that general health is under control.',
  },
  {
    q: 'What if I lost all the bone in my upper jaw?',
    a: 'For severe bone loss there are zygomatic implants, anchored in the cheekbone and requiring no prior bone graft. They make it possible to rehabilitate even the most complex cases.',
  },
];

const H2 = { color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' };

export default async function RehabilitacionOralCompletaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const t = isEs ? T.es : T.en;
  const faqs = isEs ? faqsEs : faqsEn;
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) =>
    locale === 'es' ? path : '/en' + path;

  const breadcrumbs = [
    { name: t.breadcrumbHome, url: isEs ? BASE : `${BASE}/en` },
    { name: t.breadcrumbServices, url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: t.breadcrumbHere, url: isEs ? `${BASE}/servicios/rehabilitacion-oral-completa` : `${BASE}/en/servicios/rehabilitacion-oral-completa` },
  ];

  return (
    <main style={{ backgroundColor: '#FCFBF9' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/rehabilitacion-oral-completa` : `${BASE}/en/servicios/rehabilitacion-oral-completa`,
          name: isEs ? 'Rehabilitación Oral Completa Medellín' : 'Full Mouth Rehabilitation Medellín',
          description: isEs
            ? 'Rehabilitación oral completa sobre dientes propios (desgaste severo, bruxismo) o sobre implantes (All-on-4, All-on-6, cigomáticos) en Medellín.'
            : 'Full mouth rehabilitation on natural teeth (severe wear, bruxism) or on implants (All-on-4, All-on-6, zygomatic) in Medellín.',
          procedureName: isEs ? 'Rehabilitación Oral Completa' : 'Full Mouth Rehabilitation',
        }),
        medicalServiceSchema({
          name: isEs ? 'Rehabilitación Oral Completa Medellín' : 'Full Mouth Rehabilitation Medellín',
          description: isEs
            ? 'Reconstrucción de dientes desgastados por bruxismo y rehabilitación de arcada completa sobre implantes en El Poblado, Medellín.'
            : 'Reconstruction of teeth worn down by bruxism and full-arch rehabilitation on implants in El Poblado, Medellín.',
          url: isEs ? `${BASE}/servicios/rehabilitacion-oral-completa` : `${BASE}/en/servicios/rehabilitacion-oral-completa`,
        }),
        faqSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema(breadcrumbs),
      ]} />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="down" delay={0}>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#77726A' }}>
              <Link href={localePath('/')} className="hover:text-[#8A6B2E] transition-colors">{t.breadcrumbHome}</Link>
              <span>/</span>
              <Link href={localePath('/servicios')} className="hover:text-[#8A6B2E] transition-colors">{t.breadcrumbServices}</Link>
              <span>/</span>
              <span style={{ color: '#C9A461' }}>{t.breadcrumbHere}</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>{t.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={H2}>{t.h1}</h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#5A5449' }}>{t.heroP}</p>
          </AnimatedSection>
        </div>
      </section>

      <RespuestaDirecta
        pregunta={isEs ? '¿Cuánto cuesta una rehabilitación oral completa en Medellín?' : 'How much does a full mouth rehabilitation cost in Medellín?'}
        respuesta={isEs
          ? 'Sobre implantes, una rehabilitación oral completa en Medellín cuesta desde $15.000.000 COP por arcada, con prótesis fija definitiva. Si tus dientes se pueden conservar, se reconstruyen con coronas o carillas y el valor depende de cuántos dientes y del material. En los dos casos el valor exacto se define en la valoración.'
          : 'On implants, a full mouth rehabilitation in Medellín costs from $15,000,000 COP per arch, with a permanent fixed prosthesis. If your teeth can be kept, they are rebuilt with crowns or veneers and the price depends on how many teeth and the material. In both cases the exact price is set at your assessment.'}
      />

      {/* ── QUÉ ES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={H2}>{t.queEsH2}</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>{t.queEsP1}</p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#5A5449' }}>{t.queEsP2}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── DOS CAMINOS ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>{t.dosCaminosEyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={H2}>{t.dosCaminosH2}</h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#77726A' }}>{t.dosCaminosP}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.caminos.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                  <span className="self-start text-xs font-semibold px-2 py-1 rounded tracking-wide uppercase mb-4" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>{c.badge}</span>
                  <h3 className="text-lg font-semibold mb-2" style={H2}>{c.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#77726A' }}>{c.desc}</p>
                  <div className="text-xs font-medium px-3 py-1.5 rounded border inline-block self-start" style={{ borderColor: '#C9A461', color: '#C9A461', backgroundColor: '#C9A46110' }}>{c.highlight}</div>
                  {'link' in c && c.link && (
                    <Link href={localePath(c.link.href)} className="mt-4 text-sm font-semibold underline" style={{ color: '#8A6B2E' }}>{c.link.label}</Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESGASTE Y BRUXISMO ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={H2}>{t.desgasteH2}</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>{t.desgasteP1}</p>
            <p className="text-lg leading-relaxed mt-4 mb-10" style={{ color: '#5A5449' }}>{t.desgasteP2}</p>
          </AnimatedSection>
          <div className="space-y-5">
            {t.desgastePasos.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div className="flex-1 p-5 rounded-xl border" style={{ backgroundColor: '#FCFBF9', borderColor: '#E8E3DA' }}>
                    <h3 className="font-semibold text-base mb-1" style={{ color: '#211E18' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="mt-8 text-base" style={{ color: '#5A5449' }}>
            {t.desgasteNota}{' '}
            <Link href={localePath('/blog/bruxismo-rehabilitacion')} className="font-semibold underline" style={{ color: '#8A6B2E' }}>{t.desgasteNotaLink}</Link>.
          </p>
        </div>
      </section>

      {/* ── VS ALL-ON-4 ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={H2}>{t.vsH2}</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>{t.vsP1}</p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#5A5449' }}>{t.vsP2}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUIÉN NECESITA ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={H2}>{t.quienH2}</h2>
            <ul className="space-y-4">
              {t.quien.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>✓</span>
                  <span style={{ color: '#5A5449' }}>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TIPOS SOBRE IMPLANTES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>{t.tiposEyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={H2}>{t.tiposH2}</h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#77726A' }}>{t.tiposP}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.tipos.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                  <span className="self-start text-xs font-semibold px-2 py-1 rounded tracking-wide uppercase mb-4" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>{card.badge}</span>
                  <h3 className="text-lg font-semibold mb-2" style={H2}>{card.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#77726A' }}>{card.desc}</p>
                  <div className="text-xs font-medium px-3 py-1.5 rounded border inline-block self-start" style={{ borderColor: '#C9A461', color: '#C9A461', backgroundColor: '#C9A46110' }}>{card.highlight}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="/images/dra-carolina-hero.webp" alt={t.photoAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#FFFFFF' }}>{t.photoCaption}</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>{t.porqueEyebrow}</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={H2}>{t.porqueH2}</h2>
              <div className="space-y-4">
                {t.porque.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xl shrink-0 mt-0.5"><Icon name={item.icon} /></span>
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

      {/* ── PROCESO SOBRE IMPLANTES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-10" style={H2}>{t.procesoH2}</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {t.proceso.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div className="flex-1 p-5 rounded-xl border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                    <h3 className="font-semibold text-base mb-1" style={{ color: '#211E18' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <section className="py-10 px-4" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E3DA', borderBottom: '1px solid #E8E3DA' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.info.map((pill, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <span className="text-2xl"><Icon name={['calendar', 'money', 'calendar'][i]} /></span>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={H2}>{t.faqH2}</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                  <h3 className="font-semibold text-base mb-3 flex items-start gap-2" style={{ color: '#8A6B2E' }}>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={H2}>{t.ctaH2}</h2>
            <p className="mb-8 text-lg" style={{ color: '#5A5449' }}>{t.ctaP}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={t.waMessage}
                locale={locale as 'es' | 'en'}
                trackingLabel="rehabilitacion_oral_cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.938l6.29-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.012-1.374l-.36-.213-3.733.978.995-3.629-.234-.373A9.778 9.778 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                </svg>
                {t.ctaWa}
              </WhatsAppLink>
              <Link href={localePath('/contacto')} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105" style={{ borderColor: '#C9A461', color: '#8A6B2E' }}>
                {t.ctaContact}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <RelatedArticles route="/servicios/rehabilitacion-oral-completa" locale={locale} />
    </main>
  );
}
