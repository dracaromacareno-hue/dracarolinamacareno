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

  20-oct-2026: la dueña pidió no mezclar las dos rehabilitaciones. Esta página quedó SOLO
  para la que se hace sobre los dientes propios (desgaste, bruxismo). Se quitaron las
  secciones de implantes, All-on-4, cigomáticos y el proceso sobre implantes; quien los
  necesita sale por el enlace a /all-on-4-medellin. No volver a meter implantes aquí.

  ⛔ Precios: NINGUNA cifra en esta página. El 20-oct-2026 la dueña quitó el «desde
  $15.000.000 por arcada»: con ese valor no se reconstruye un arco completo sobre implantes,
  y publicarlo compromete. El valor se define en la valoración. No añadir casos ni garantías sin su visto bueno.
*/

const T = {
  es: {
    eyebrow: 'Dientes desgastados · Bruxismo · Coronas y carillas',
    h1: 'Rehabilitación Oral Completa en Medellín',
    heroP:
      'Se realiza rehabilitación de la boca completa cuando hay muchos dientes perdidos, muy dañados o gastados por el bruxismo. Un solo plan, diseñado de forma digital, que devuelve la función, la estética y la tranquilidad de masticar sin miedo.',
    queEsH2: '¿Qué es la rehabilitación oral completa?',
    queEsP1:
      'Es la reconstrucción integral de la boca cuando el problema ya no es un diente sino el conjunto: la mordida, la altura de los dientes, la estética y la forma en que las dos arcadas trabajan juntas. Se hace sobre tus propios dientes y combina coronas, carillas e incrustaciones en un único plan coherente.',
    queEsP2:
      'La diferencia con tratar diente por diente es el orden. Primero se entiende por qué la boca llegó a ese punto, después se diseña el resultado final y solo entonces se empieza. Así el tratamiento no se desarma a los pocos años por la misma causa que dañó los dientes originales.',
    dosCaminosEyebrow: 'Antes de empezar',
    dosCaminosH2: '¿Se pueden conservar tus dientes?',
    dosCaminosP:
      'Esta rehabilitación se hace sobre tus propios dientes. Sirve cuando están gastados, fracturados o con restauraciones que fallan, pero las raíces están sanas, y cuando se pueden conservar, casi siempre es lo mejor. Si la mayoría de los dientes ya no se pueden salvar, el tratamiento es otro: una prótesis fija completa sobre implantes, con otro proceso, otros tiempos y otro valor.',
    dosCaminosLink: 'Si ese es tu caso, lo explico en la página de All-on-4 en Medellín',
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
        desc: 'Son coronas temporales en acrílico que se usan mientras se fabrican las definitivas, y además funcionan como prototipo: en ellos se prueba y se ajusta la altura de la mordida, los contactos, la guía de los dientes delanteros, los movimientos de la mandíbula, la fonética, la masticación, la comodidad muscular y la estética.',
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
    casoEyebrow: 'Caso real',
    casoH2: 'Rehabilitación completa por bruxismo en 12 días: una paciente que vive en España',
    casoP1:
      'Llegó con un diagnóstico de bruxismo crónico y un desgaste severo que se veía a simple vista. Como vive en España, empezamos con una consulta virtual: con sus fotos hicimos la planeación digital, programamos cada paso del tratamiento y definimos el presupuesto y los días que iba a necesitar en Medellín.',
    casoP2:
      'En la evaluación presencial encontramos más de lo que mostraban las fotos: dientes fracturados, compromiso del nervio en varios dientes y pérdida de la dimensión vertical, es decir, de la altura de la mordida. Ajustamos el plan con esa información, y así fueron sus 12 días aquí:',
    casoDias: [
      { dia: 'Día 1', txt: 'Evaluación integral, radiografías, escaneo intraoral y planeación digital.' },
      { dia: 'Día 2', txt: 'Todos los tratamientos de conducto que el caso necesitaba.' },
      { dia: 'Día 3', txt: 'Provisionales en el arco superior y en el inferior.' },
      { dia: 'Día 4', txt: 'Impresiones definitivas.' },
      { dia: 'Día 7', txt: 'Prueba en acrílico de toda la rehabilitación, con todas las coronas y carillas, antes de fabricar las definitivas.' },
      { dia: 'Día 10', txt: 'Coronas y carillas definitivas: se cementan y se prueba la oclusión.' },
      { dia: 'Día 12', txt: 'Entrega de la placa de protección y control de la rehabilitación.' },
    ],
    casoCierre:
      'Cada caso tiene sus propios tiempos, y los de este se definieron con lo que encontramos en la evaluación. Lo que se repite en todos es que la planeación empieza antes del viaje, con una valoración virtual, para que llegues a Medellín sabiendo qué se va a hacer y cuántos días necesitas.',
    casoImgAlt: 'Sonrisa final después de una rehabilitación oral completa por bruxismo, con coronas y carillas',
    casoCaptionAntes: 'Al llegar: desgaste severo por bruxismo',
    casoImgAltAntes: 'Dientes desgastados por bruxismo severo antes de la rehabilitación oral completa',
    casoCaption: 'Resultado final, día 12',
    quienH2: '¿Quién necesita una rehabilitación oral completa?',
    quien: [
      'Tiene los dientes muy desgastados por bruxismo severo o por acidez crónica.',
      'Siente que los dientes se ven cada vez más cortos o que la sonrisa envejeció.',
      'Ha tenido fracasos repetidos con tratamientos anteriores en varios dientes.',
      'Tiene dientes fracturados o con restauraciones que se despegan o se rompen.',
      'Necesita coronas o carillas en varios dientes a la vez y quiere un solo plan.',
    ],
    porqueEyebrow: '¿Por qué elegirnos?',
    porqueH2: 'El caso más complejo requiere la mayor experiencia',
    porque: [
      { icon: 'scan', title: 'Diagnóstico y diseño digital', desc: 'Escaneo intraoral 3D en el consultorio, fotografías y diseño del resultado antes de empezar. Las radiografías no están incluidas en la valoración, pero siempre son necesarias.' },
      { icon: 'award', title: 'Especialista en rehabilitación oral', desc: 'Más de 17 años de experiencia como especialista en rehabilitación oral (Universidad CES).' },
      { icon: 'check', title: 'La mordida se prueba antes de la cerámica', desc: 'Provisionales que funcionan como prototipo y prueba en boca antes de las restauraciones definitivas. Al terminar, la placa de protección va incluida.' },
      { icon: 'globe', title: 'Pacientes internacionales', desc: 'Atendemos pacientes de Estados Unidos, Panamá, Chile y Puerto Rico que viajan a Medellín.' },
    ],
    info: [
      { label: 'Tiempo en Medellín', value: '10 a 12 días' },
      { label: 'Valor', value: 'Se define en la valoración' },
      { label: 'Seguimiento', value: 'Por videollamada' },
    ],
    faqH2: 'Preguntas frecuentes',
    ctaH2: 'Empieza por el diagnóstico',
    ctaP: 'Cada rehabilitación empieza por entender tu caso. Escríbeme y revisamos si tus dientes se pueden conservar y cómo reconstruir tu mordida.',
    ctaWa: 'Escribir por WhatsApp',
    ctaContact: 'Ver página de contacto',
    waMessage: 'Hola, leí la página de rehabilitación oral completa. Me gustaría una valoración de mi caso.',
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
    breadcrumbHere: 'Rehabilitación Oral Completa',
    photoAlt: 'Rehabilitación oral completa, Dra. Carolina Macareno, Medellín',
    photoCaption: 'Desgaste y bruxismo · Coronas y carillas',
  },
  en: {
    eyebrow: 'Worn teeth · Bruxism · Crowns and veneers',
    h1: 'Full Mouth Rehabilitation in Medellín',
    heroP:
      'Full mouth rehabilitation is done when many teeth are missing, badly damaged or worn down by bruxism. One plan, designed digitally, that restores function, esthetics and the confidence to chew without fear.',
    queEsH2: 'What is full mouth rehabilitation?',
    queEsP1:
      'It is the complete reconstruction of the mouth when the problem is no longer one tooth but the whole system: the bite, the height of the teeth, the esthetics and the way both arches work together. It is done on your own teeth and combines crowns, veneers and onlays in a single, coherent plan.',
    queEsP2:
      'The difference from treating tooth by tooth is the order. First we understand why the mouth reached this point, then we design the final result, and only then do we begin. That way the treatment does not break down a few years later for the same reason that damaged the original teeth.',
    dosCaminosEyebrow: 'Before we start',
    dosCaminosH2: 'Can your teeth be kept?',
    dosCaminosP:
      'This rehabilitation is done on your own teeth. It is for teeth that are worn, fractured or have failing restorations but still have healthy roots, and when they can be kept, that is almost always the best option. If most of your teeth can no longer be saved, the treatment is a different one: a complete fixed prosthesis on implants, with a different process, timeline and price.',
    dosCaminosLink: 'If that is your case, I explain it on the All-on-4 in Medellín page',
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
        desc: 'They are temporary acrylic crowns worn while the definitive ones are made, and they also work as a prototype: in them we test and adjust bite height, contacts, front-teeth guidance, jaw movements, speech, chewing, muscular comfort and esthetics.',
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
    casoEyebrow: 'Real case',
    casoH2: 'Full mouth rehabilitation for bruxism in 12 days: a patient who lives in Spain',
    casoP1:
      'She came with a diagnosis of chronic bruxism and severe wear that was visible at a glance. Because she lives in Spain, we started with a virtual consultation: with her photos we did the digital planning, scheduled every step of the treatment, and set the budget and the number of days she would need in Medellín.',
    casoP2:
      'At the in-person evaluation we found more than the photos showed: fractured teeth, nerve involvement in several teeth, and loss of vertical dimension, meaning the height of the bite. We adjusted the plan with that information, and these were her 12 days here:',
    casoDias: [
      { dia: 'Day 1', txt: 'Comprehensive evaluation, X-rays, intraoral scan and digital planning.' },
      { dia: 'Day 2', txt: 'All the root canal treatments the case needed.' },
      { dia: 'Day 3', txt: 'Provisionals on the upper and lower arches.' },
      { dia: 'Day 4', txt: 'Final impressions.' },
      { dia: 'Day 7', txt: 'Acrylic try-in of the whole rehabilitation, with every crown and veneer, before the final ones were made.' },
      { dia: 'Day 10', txt: 'Final crowns and veneers: they are cemented and the bite is tested.' },
      { dia: 'Day 12', txt: 'Night guard delivered and a check-up of the rehabilitation.' },
    ],
    casoCierre:
      'Every case has its own timeline, and this one was set by what we found at the evaluation. What is the same in every case is that planning starts before the trip, with a virtual assessment, so you arrive in Medellín knowing what will be done and how many days you need.',
    casoImgAlt: 'Final smile after a full mouth rehabilitation for bruxism, with crowns and veneers',
    casoCaptionAntes: 'On arrival: severe wear from bruxism',
    casoImgAltAntes: 'Teeth worn down by severe bruxism before the full mouth rehabilitation',
    casoCaption: 'Final result, day 12',
    quienH2: 'Who needs a full mouth rehabilitation?',
    quien: [
      'Your teeth are badly worn from severe bruxism or chronic acid reflux.',
      'Your teeth look shorter every year or your smile has aged.',
      'You have had repeated failures with previous treatments on several teeth.',
      'You have fractured teeth or restorations that keep coming loose or breaking.',
      'You need crowns or veneers on several teeth at once and want a single plan.',
    ],
    porqueEyebrow: 'Why choose us?',
    porqueH2: 'The most complex case needs the most experience',
    porque: [
      { icon: 'scan', title: 'Digital diagnosis and design', desc: '3D intraoral scan in the office, photographs and design of the result before starting. X-rays are not included in the assessment, but they are always required.' },
      { icon: 'award', title: 'Oral rehabilitation specialist', desc: 'More than 17 years of experience as an oral rehabilitation specialist (CES University).' },
      { icon: 'check', title: 'The bite is tested before the ceramics', desc: 'Provisionals that work as a prototype and a try-in before the definitive restorations. At the end, the night guard is included.' },
      { icon: 'globe', title: 'International patients', desc: 'We treat patients from the United States, Panama, Chile and Puerto Rico who travel to Medellín.' },
    ],
    info: [
      { label: 'Time in Medellín', value: '10 to 12 days' },
      { label: 'Price', value: 'Set at your assessment' },
      { label: 'Follow-up', value: 'By video call' },
    ],
    faqH2: 'Frequently asked questions',
    ctaH2: 'Start with the diagnosis',
    ctaP: 'Every rehabilitation starts by understanding your case. Write to me and we will review whether your teeth can be kept and how to rebuild your bite.',
    ctaWa: 'Message on WhatsApp',
    ctaContact: 'Go to contact page',
    waMessage: 'Hello, I read the full mouth rehabilitation page. I would like an evaluation of my case.',
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    breadcrumbHere: 'Full Mouth Rehabilitation',
    photoAlt: 'Full mouth rehabilitation, Dr. Carolina Macareno, Medellín',
    photoCaption: 'Wear and bruxism · Crowns and veneers',
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
      ? 'Rehabilitación Oral en Medellín | Desgaste y Bruxismo'
      : 'Full Mouth Rehabilitation Medellín | Worn Teeth, Bruxism',
    description: isEs
      ? 'Rehabilitación oral en Medellín sobre tus propios dientes: reconstruyo la mordida gastada por bruxismo con coronas y carillas, con un solo plan digital.'
      : 'Full mouth rehabilitation in Medellín on your own teeth: I rebuild a bite worn down by bruxism with crowns and veneers, in one digitally designed plan.',
    keywords: isEs
      ? [
          'rehabilitación oral Medellín',
          'rehabilitación oral completa Medellín',
          'rehabilitador oral Medellín',
          'dientes desgastados bruxismo',
          'desgaste dental severo tratamiento',
          'dimensión vertical rehabilitación',
          'coronas y carillas por bruxismo',
          'reconstrucción de la mordida',
          'Dra. Carolina Macareno',
        ]
      : [
          'full mouth rehabilitation Medellin',
          'full mouth rehabilitation Colombia',
          'worn teeth bruxism treatment',
          'severe tooth wear reconstruction',
          'crowns and veneers for bruxism',
          'bite reconstruction',
        ],
    openGraph: {
      title: isEs
        ? 'Rehabilitación Oral Completa en Medellín | Dra. Carolina Macareno'
        : 'Full Mouth Rehabilitation in Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Dientes gastados por bruxismo, reconstruidos con coronas y carillas. Diagnóstico digital y un plan para tu caso en El Poblado, Medellín.'
        : 'Teeth worn down by bruxism, rebuilt with crowns and veneers. Digital diagnosis and a plan for your case in El Poblado, Medellín.',
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
    a: 'Depende de cuántos dientes hay que reconstruir, del material de las coronas y carillas, y de lo que aparezca en la evaluación, como dientes fracturados o que necesitan tratamiento de conducto. Por eso el valor exacto se define en la valoración. Si lo que necesitas es reemplazar los dientes con implantes, ese es otro tratamiento, con otro proceso y otro valor.',
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
    a: 'El All-on-4 reemplaza todos los dientes de una arcada con una prótesis fija sobre cuatro implantes, y se indica cuando los dientes ya no se pueden salvar. La rehabilitación de esta página es otra: conserva tus dientes y los reconstruye con coronas, carillas o incrustaciones. Si tu caso es de implantes, lo explico en la página de All-on-4 en Medellín.',
  },
  {
    q: '¿Hay límite de edad para la rehabilitación oral completa?',
    a: 'No existe un límite de edad. Lo que se evalúa es el estado general de salud. Pacientes mayores de 70 u 80 años son candidatos frecuentes. Lo importante es que la salud general esté controlada.',
  },
];

const faqsEn = [
  {
    q: 'How much does a full mouth rehabilitation cost in Colombia?',
    a: 'It depends on how many teeth need to be rebuilt, the material of the crowns and veneers, and what the evaluation finds, such as fractured teeth or teeth that need a root canal. That is why the exact price is set at your assessment. If what you need is to replace your teeth with implants, that is a different treatment, with a different process and price.',
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
    a: 'All-on-4 replaces all the teeth in one arch with a fixed prosthesis on four implants, and it is indicated when the teeth can no longer be saved. The rehabilitation on this page is a different one: it keeps your teeth and rebuilds them with crowns, veneers or onlays. If your case calls for implants, I explain it on the All-on-4 in Medellín page.',
  },
  {
    q: 'Is there an age limit for full mouth rehabilitation?',
    a: 'There is no age limit. What is evaluated is overall health. Patients over 70 or 80 are frequent candidates. The important thing is that general health is under control.',
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
            ? 'Rehabilitación oral completa sobre los dientes propios, por desgaste severo o bruxismo, con coronas, carillas e incrustaciones en Medellín.'
            : 'Full mouth rehabilitation on natural teeth, for severe wear or bruxism, with crowns, veneers and onlays in Medellín.',
          procedureName: isEs ? 'Rehabilitación Oral Completa' : 'Full Mouth Rehabilitation',
        }),
        medicalServiceSchema({
          name: isEs ? 'Rehabilitación Oral Completa Medellín' : 'Full Mouth Rehabilitation Medellín',
          description: isEs
            ? 'Reconstrucción de dientes desgastados por bruxismo y de la altura de la mordida en El Poblado, Medellín.'
            : 'Reconstruction of teeth worn down by bruxism and of the bite height in El Poblado, Medellín.',
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
          ? 'Depende de cuántos dientes hay que reconstruir, del material de las coronas y carillas, y de lo que aparezca en la evaluación, como dientes fracturados o que necesitan tratamiento de conducto. Por eso el valor exacto se define en la valoración. Si lo que necesitas es reemplazar los dientes con implantes, ese es otro tratamiento, con otro proceso y otro valor.'
          : 'It depends on how many teeth need to be rebuilt, the material of the crowns and veneers, and what the evaluation finds, such as fractured teeth or teeth that need a root canal. That is why the exact price is set at your assessment. If what you need is to replace your teeth with implants, that is a different treatment, with a different process and price.'}
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

      {/* ── ¿SE PUEDEN CONSERVAR? ── 20-oct-2026: la página es solo para la rehabilitación
          sobre los dientes propios, por decisión de la dueña. Lo de implantes vive en
          /all-on-4-medellin y /servicios/protesis-fija; aquí solo se enlaza. */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>{t.dosCaminosEyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={H2}>{t.dosCaminosH2}</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>{t.dosCaminosP}</p>
            <Link href={localePath('/all-on-4-medellin')} className="inline-block mt-5 font-semibold underline underline-offset-2" style={{ color: '#8A6B2E' }}>{t.dosCaminosLink}</Link>
          </AnimatedSection>
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

      {/* ── CASO REAL: BRUXISMO EN 12 DÍAS ──
          20-oct-2026, pedido y aprobado por la dueña. Los días salen de lo que ella cuenta
          en el video del caso (septiembre). Sin nombre de la paciente ni cara. */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>{t.casoEyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={H2}>{t.casoH2}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <AnimatedSection>
              <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>{t.casoP1}</p>
              <p className="text-lg leading-relaxed mt-4 mb-6" style={{ color: '#5A5449' }}>{t.casoP2}</p>
              <ol className="space-y-3">
                {t.casoDias.map((d, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="shrink-0 w-16 text-sm font-bold pt-0.5" style={{ color: '#8A6B2E' }}>{d.dia}</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#5A5449' }}>{d.txt}</span>
                  </li>
                ))}
              </ol>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <figure className="mb-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border" style={{ borderColor: '#E8E3DA' }}>
                  <Image src="/images/caso-bruxismo-12-dias-inicial.webp" alt={t.casoImgAltAntes} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <figcaption className="text-sm mt-3" style={{ color: '#77726A' }}>{t.casoCaptionAntes}</figcaption>
              </figure>
              <figure>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border" style={{ borderColor: '#E8E3DA' }}>
                  <Image src="/images/caso-bruxismo-12-dias-final.webp" alt={t.casoImgAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <figcaption className="text-sm mt-3" style={{ color: '#77726A' }}>{t.casoCaption}</figcaption>
              </figure>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <p className="text-base leading-relaxed mt-8 max-w-3xl" style={{ color: '#5A5449' }}>{t.casoCierre}</p>
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
