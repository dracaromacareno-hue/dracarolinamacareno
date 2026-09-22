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
  Implantes dentales: la página de dinero para el paciente de EE. UU.

  22-sep-2026: se rehízo siguiendo el patrón de /servicios/rehabilitacion-oral-completa
  porque la versión /en mostraba casi todo el cuerpo en español (breadcrumb, mensaje de
  WhatsApp y el nombre/descripción del schema del servicio quedaban en español sin
  importar el locale). Todo el texto visible vive ahora en `T`, un bloque por idioma.

  Se agregaron preguntas frecuentes del banco de pacientes internacionales (marca de
  implante, envío de radiografía/tomografía propia, número de viajes, dientes el mismo
  día, implantes libres de metal, corrección de implantes puestos en otro país, y si el
  presupuesto es rango o precio cerrado). No se inventó ningún precio nuevo: los que
  aparecen ya estaban publicados en esta página o en lib/pricing.ts.

  ⛔ Por la regla del 10-sep-2026, el título y la descripción del generateMetadata NO
  llevan precio ni cifra de ahorro (el anterior sí tenía "$1,500 USD" en la descripción).
*/

const T = {
  es: {
    eyebrow: 'Cirugía Oral · Implantología',
    h1: 'Implantes Dentales en Medellín',
    heroP:
      'La solución más cercana a tener dientes naturales. Tornillos de titanio que se integran al hueso y soportan coronas, puentes o prótesis completas de manera permanente.',
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
    breadcrumbHere: 'Implantes Dentales',
    queEsH2: '¿Qué es un implante dental?',
    queEsP1:
      'Un implante dental es un tornillo de titanio de grado médico que se coloca quirúrgicamente dentro del hueso de la mandíbula o el maxilar para reemplazar la raíz de un diente perdido. Una vez que el implante se integra al hueso (osteointegración), soporta una corona, un puente o una prótesis completa.',
    queEsP2:
      'Es la única solución que reemplaza tanto la raíz como la corona del diente, preservando el hueso, sin desgastar dientes vecinos y con resultados estéticos y funcionales que imitan perfectamente la dentición natural.',
    queEsPhotoAlt: 'Resultado real de rehabilitación con implantes dentales en Medellín, Dra. Carolina Macareno',
    queEsPhotoEyebrow: 'Caso real · Rehabilitación oral',
    queEsPhotoCaption: 'Sonrisa devuelta con implantes dentales',
    quienH2: '¿Quién necesita este tratamiento?',
    quien: [
      'Perdió uno o varios dientes por caries avanzada, trauma o enfermedad periodontal.',
      'Usa prótesis removible (placa dental) y le resulta incómoda o poco estética.',
      'Tiene un espacio vacío que afecta la masticación, el habla o la autoestima.',
      'Quiere una solución permanente que no involucre desgastar los dientes vecinos sanos.',
      'Lleva años sin uno o varios dientes y ha notado pérdida de hueso en la zona.',
      'Busca rehabilitar una arcada completa con la menor cantidad de implantes posible.',
    ],
    tiposEyebrow: 'Modalidades disponibles',
    tiposH2: 'Tipos de implantes que manejo',
    tiposP: 'Cada caso es diferente. El tipo de implante se elige según la cantidad de hueso disponible, la ubicación del diente, la salud general y los objetivos estéticos de cada paciente.',
    tipos: [
      {
        badge: 'Más utilizado',
        title: 'Implante de Titanio',
        desc: 'El estándar de oro de la implantología. Aleación de titanio grado 5, 100% biocompatible, con tasa de éxito superior al 97%. Trabajamos con Neodent, Straumann y DioImplant, y rehabilitamos cualquier marca comercializada en Colombia o el exterior.',
        highlight: 'Tasa de éxito: 97%+',
      },
      {
        badge: 'Sin metal',
        title: 'Implante de Zirconio',
        desc: 'Implante cerámico blanco que se mimetiza perfectamente con el tejido blando. Ideal para pacientes con sensibilidad a los metales o con encías delgadas donde el metal podría ser visible.',
        highlight: 'Libre de metal',
      },
      {
        badge: 'Atrofia severa',
        title: 'Implante Cigomático',
        desc: 'Para pacientes con pérdida ósea severa en el maxilar superior donde los implantes convencionales no son posibles. Se ancla directamente en el hueso cigomático (pómulo), eliminando la necesidad de injertos óseos.',
        highlight: 'Sin injerto óseo',
      },
      {
        badge: 'Poco hueso',
        title: 'Implante Subperióstico',
        desc: 'Se coloca sobre el hueso pero debajo del periostio. Alternativa para pacientes con atrofia ósea severa. Cada implante se fabrica completamente a medida con una empresa especializada en EE.UU., a partir del CBCT del paciente. Único, personalizado, irreemplazable.',
        highlight: 'Fabricado a medida en EE.UU.',
      },
    ],
    spokeTitle: '¿Te dijeron que "no tienes hueso"? Conoce los implantes cigomáticos',
    spokeDesc: 'Maxilar superior atrófico: anclaje en el pómulo, sin injerto, con dientes fijos en días.',
    photoTrustCaptionEyebrow: 'El Poblado, Medellín',
    photoTrustCaption: 'Tecnología de diagnóstico 3D y cirugía guiada digital',
    porqueEyebrow: '¿Por qué elegir nuestra clínica?',
    porqueH2: 'Implantología con precisión digital en Medellín',
    porque: [
      { icon: 'scan', title: 'Diagnóstico tomográfico 3D', desc: 'Tomografía CBCT para medir hueso con precisión milimétrica antes de cualquier cirugía.' },
      { icon: 'tooth', title: 'Marcas líderes + compatibilidad total', desc: 'Colocamos implantes Neodent, Straumann y DioImplant. Además, rehabilitamos sobre cualquier marca comercializada en Colombia o el exterior. Los implantes subperiósticos se fabrican a medida con empresa especializada en EE.UU.' },
      { icon: 'clipboard', title: 'Planificación digital', desc: 'Cirugía guiada por software: sabemos exactamente dónde va cada implante antes de iniciar.' },
      { icon: 'handshake', title: '17+ años de experiencia', desc: 'Más de 3.500 pacientes atendidos. Formación avanzada en Brasil (FACOP) y Nueva York (NYU).' },
    ],
    casoEyebrow: 'CASO CLÍNICO REAL · REHABILITACIÓN ALL-ON-4',
    casoH2: 'De la planeación al resultado: un caso real',
    casoP: 'Rehabilitación de una arcada completa sobre implantes con técnica All-on-4. Todo el caso se planifica digitalmente en 3D antes de la cirugía para posicionar cada implante con precisión y devolver una dentadura fija.',
    casoFotos: [
      { src: '/images/planeacion-digital-implantes-all-on-4.webp', label: '1. Planeación digital 3D', desc: 'El caso se diseña sobre la tomografía del paciente: posición y angulación de cada implante antes de la cirugía.' },
      { src: '/images/implantes-posicionados-all-on-4.webp', label: '2. Implantes posicionados', desc: 'Los implantes colocados con la técnica All-on-4, listos para soportar la arcada fija.' },
    ],
    casoLink1Title: 'Guía completa de All-on-4 en Medellín',
    casoLink1Desc: 'Arcada fija sobre 4 implantes · precios y proceso',
    casoLink2Title: 'Caso clínico: implante subperióstico',
    casoLink2Desc: 'Para reabsorción ósea severa · caso completo con fotos',
    procesoH2: 'El proceso paso a paso',
    proceso: [
      { title: 'Consulta y diagnóstico 3D', desc: 'Tomografía CBCT, fotografías clínicas y evaluación integral del estado de salud oral. Se presenta el plan de tratamiento con costos.' },
      { title: 'Cirugía de colocación del implante', desc: 'Procedimiento ambulatorio con anestesia local. La cirugía dura entre 30 y 90 minutos según la cantidad de implantes.' },
      { title: 'Período de osteointegración', desc: 'El titanio se fusiona con el hueso durante 3 a 6 meses. En algunos casos se puede usar una corona provisional inmediata.' },
      { title: 'Colocación del pilar y corona definitiva', desc: 'Se conecta el pilar protésico y se coloca la corona, puente o prótesis definitiva fabricada en zirconio o cerámica.' },
      { title: 'Seguimiento y mantenimiento', desc: 'Controles periódicos para verificar la salud del implante y los tejidos periimplantarios. Higiene personalizada con hilo dental especial.' },
    ],
    info: [
      { label: 'Duración del proceso', value: '4 – 8 meses' },
      { label: 'Precio desde', value: '$3,000,000 COP / implante' },
      { label: 'Número de citas', value: '3 – 5 citas' },
    ],
    faqH2: 'Preguntas frecuentes',
    intlBanner1Eyebrow: 'Pacientes Internacionales',
    intlBanner1Title: '¿Eres paciente internacional? Ver guía All-on-4 Medellín',
    intlBanner1Desc: 'Costos, logística, tiempos y todo lo que necesitas saber para venir a Medellín.',
    intlBanner2Eyebrow: 'Pacientes de EE.UU. y Puerto Rico',
    intlBanner2Title: 'Implantes dentales en Colombia para pacientes de EE.UU.',
    intlBanner2Desc: 'Ahorra 50-70% con los mismos materiales Straumann y Neodent, con plan de tratamiento y costos en USD antes de viajar.',
    ctaH2: '¿Listo para recuperar tu sonrisa?',
    ctaP: 'Agenda tu consulta de diagnóstico y recibe un plan de tratamiento personalizado con costos transparentes.',
    ctaWa: 'Escribir por WhatsApp',
    ctaContact: 'Ver página de contacto',
    waMessage: 'Hola, leí la página de implantes dentales. Me gustaría una valoración de mi caso.',
    schemaWebPageName: 'Implantes Dentales Medellín',
    schemaWebPageDesc: 'Implantes dentales de titanio, zirconio y cigomáticos en Medellín con 17+ años de experiencia. El Poblado.',
    schemaProcedureName: 'Implantes Dentales (Titanio, Zirconio, Cigomáticos)',
    schemaServiceName: 'Implantes Dentales Medellín',
    schemaServiceDesc: 'Especialista en implantes dentales de titanio, zirconio y cigomáticos en Medellín con 17+ años de experiencia. El Poblado.',
  },
  en: {
    eyebrow: 'Oral Surgery · Implantology',
    h1: 'Dental Implants in Medellín',
    heroP:
      'The closest solution to having your natural teeth back. Titanium screws that fuse with the bone and permanently support crowns, bridges or full dentures.',
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    breadcrumbHere: 'Dental Implants',
    queEsH2: 'What is a dental implant?',
    queEsP1:
      'A dental implant is a medical-grade titanium screw surgically placed inside the jawbone to replace the root of a missing tooth. Once the implant fuses with the bone (osseointegration), it supports a crown, a bridge or a full denture.',
    queEsP2:
      'It is the only solution that replaces both the root and the crown of the tooth, preserving bone, without grinding down neighboring teeth, and with esthetic and functional results that closely mimic your natural teeth.',
    queEsPhotoAlt: 'Real dental implant rehabilitation result in Medellín, Dr. Carolina Macareno',
    queEsPhotoEyebrow: 'Real case · Oral rehabilitation',
    queEsPhotoCaption: 'A smile restored with dental implants',
    quienH2: 'Who needs this treatment?',
    quien: [
      'You lost one or more teeth to advanced decay, trauma or gum disease.',
      'You wear a removable denture and find it uncomfortable or unattractive.',
      'You have a gap that affects chewing, speech or your confidence.',
      'You want a permanent solution that does not involve grinding down healthy neighboring teeth.',
      "You have gone years without one or more teeth and have noticed bone loss in the area.",
      'You want to rehabilitate a full arch with as few implants as possible.',
    ],
    tiposEyebrow: 'Options available',
    tiposH2: 'Types of implants I work with',
    tiposP: 'Every case is different. The type of implant is chosen based on the amount of bone available, the location of the tooth, your overall health and each patient’s esthetic goals.',
    tipos: [
      {
        badge: 'Most used',
        title: 'Titanium Implant',
        desc: 'The gold standard in implantology. Grade 5 titanium alloy, 100% biocompatible, with a success rate above 97%. We work with Neodent, Straumann and DioImplant, and we rehabilitate any brand placed in Colombia or abroad.',
        highlight: 'Success rate: 97%+',
      },
      {
        badge: 'Metal-free',
        title: 'Zirconia Implant',
        desc: 'A white ceramic implant that blends naturally with the soft tissue. Ideal for patients with metal sensitivity or thin gum tissue where metal could show through.',
        highlight: 'Metal-free',
      },
      {
        badge: 'Severe atrophy',
        title: 'Zygomatic Implant',
        desc: 'For patients with severe bone loss in the upper jaw where conventional implants are not possible. It anchors directly into the cheekbone (zygomatic bone), removing the need for bone grafts.',
        highlight: 'No bone graft',
      },
      {
        badge: 'Little bone',
        title: 'Subperiosteal Implant',
        desc: 'Placed on top of the bone but under the periosteum. An alternative for patients with severe bone atrophy. Each implant is fully custom-made by a specialized company in the U.S., built from the patient’s CBCT scan. Unique, personalized, irreplaceable.',
        highlight: 'Custom-made in the U.S.',
      },
    ],
    spokeTitle: 'Told you "have no bone"? Learn about zygomatic implants',
    spokeDesc: 'Atrophic upper jaw: cheekbone anchorage, no graft, fixed teeth in days.',
    photoTrustCaptionEyebrow: 'El Poblado, Medellín',
    photoTrustCaption: '3D diagnostic technology and digitally guided surgery',
    porqueEyebrow: 'Why choose our clinic?',
    porqueH2: 'Digitally precise implantology in Medellín',
    porque: [
      { icon: 'scan', title: '3D tomographic diagnosis', desc: 'CBCT scan to measure bone with millimeter precision before any surgery.' },
      { icon: 'tooth', title: 'Leading brands + full compatibility', desc: 'We place Neodent, Straumann and DioImplant implants. We also rehabilitate any brand placed in Colombia or abroad. Subperiosteal implants are custom-made by a specialized company in the U.S.' },
      { icon: 'clipboard', title: 'Digital planning', desc: 'Software-guided surgery: we know exactly where each implant goes before we start.' },
      { icon: 'handshake', title: '17+ years of experience', desc: 'Over 3,500 patients treated. Advanced training in Brazil (FACOP) and New York (NYU).' },
    ],
    casoEyebrow: 'REAL CLINICAL CASE · ALL-ON-4 REHABILITATION',
    casoH2: 'From planning to result: a real case',
    casoP: 'Full-arch rehabilitation on implants with the All-on-4 technique. The entire case is planned digitally in 3D before surgery to position each implant with precision and restore a fixed set of teeth.',
    casoFotos: [
      { src: '/images/planeacion-digital-implantes-all-on-4.webp', label: '1. Digital 3D planning', desc: "The case is designed over the patient's CT scan: the position and angulation of each implant before surgery." },
      { src: '/images/implantes-posicionados-all-on-4.webp', label: '2. Implants placed', desc: 'The implants placed with the All-on-4 technique, ready to support the fixed arch.' },
    ],
    casoLink1Title: 'Complete All-on-4 Medellín guide',
    casoLink1Desc: 'Fixed arch on 4 implants · pricing and process',
    casoLink2Title: 'Clinical case: subperiosteal implant',
    casoLink2Desc: 'For severe bone loss · full case with photos',
    procesoH2: 'The process, step by step',
    proceso: [
      { title: 'Consultation and 3D diagnosis', desc: 'CBCT scan, clinical photographs and a full evaluation of your oral health. The treatment plan is presented with costs.' },
      { title: 'Implant placement surgery', desc: 'An outpatient procedure under local anesthesia. Surgery takes 30 to 90 minutes depending on the number of implants.' },
      { title: 'Osseointegration period', desc: 'The titanium fuses with the bone over 3 to 6 months. In some cases an immediate provisional crown can be used.' },
      { title: 'Abutment and permanent crown placement', desc: 'The abutment is connected and the definitive crown, bridge or denture, made of zirconia or ceramic, is placed.' },
      { title: 'Follow-up and maintenance', desc: 'Periodic checkups to verify the health of the implant and the surrounding tissue. Personalized hygiene with special floss.' },
    ],
    info: [
      { label: 'Treatment length', value: '4 – 8 months' },
      { label: 'Price from', value: '$3,000,000 COP / implant' },
      { label: 'Number of appointments', value: '3 – 5 appointments' },
    ],
    faqH2: 'Frequently asked questions',
    intlBanner1Eyebrow: 'International Patients',
    intlBanner1Title: 'Are you an international patient? See the All-on-4 Medellín guide',
    intlBanner1Desc: 'Costs, logistics, timelines and everything you need to know to come to Medellín.',
    intlBanner2Eyebrow: 'US & Puerto Rico Patients',
    intlBanner2Title: 'Dental implants in Colombia for US patients',
    intlBanner2Desc: 'Save 50-70% with the same Straumann and Neodent materials, with a treatment plan and USD costs before you travel.',
    ctaH2: 'Ready to get your smile back?',
    ctaP: 'Schedule your diagnostic consultation and get a personalized treatment plan with transparent costs.',
    ctaWa: 'Message on WhatsApp',
    ctaContact: 'Go to contact page',
    waMessage: 'Hello, I read the page about dental implants. I would like an evaluation of my case.',
    schemaWebPageName: 'Dental Implants Medellín',
    schemaWebPageDesc: 'Titanium, zirconia and zygomatic dental implants in Medellín. 17+ years of experience. El Poblado.',
    schemaProcedureName: 'Dental Implants (Titanium, Zirconia, Zygomatic)',
    schemaServiceName: 'Dental Implants Medellín',
    schemaServiceDesc: 'Specialist in titanium, zirconia and zygomatic dental implants in Medellín with 17+ years of experience. El Poblado.',
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
  const slug = 'implantes-dentales';

  return {
    title: isEs
      ? 'Implantes Dentales en Medellín | Dra. Macareno'
      : 'Dental Implants in Medellín | Dr. Carolina Macareno',
    description: isEs
      ? 'Implantes de titanio, zirconio, cigomáticos y subperiósticos en Medellín. Dra. Carolina Macareno, especialista con 17+ años y miles de pacientes atendidos.'
      : 'Titanium, zirconia, zygomatic and subperiosteal dental implants in Medellín. Dr. Carolina Macareno, 17+ years of experience and thousands of patients treated.',
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
          'dental implants Colombia',
          'dental implant cost Colombia',
          'Straumann implants Colombia',
          'dental implants abroad',
          'zygomatic implants Colombia',
          'implant dentist Medellin',
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

const faqsEs = [
  {
    q: '¿Cuánto cuesta un implante convencional de titanio en Colombia?',
    a: 'Un implante de titanio en Medellín cuesta desde $3.000.000 COP por implante, y desde $1.500 USD incluyendo el implante más la corona definitiva. Trabajamos con marcas como Neodent, Straumann y DioImplant. El precio exacto depende del número de implantes y se confirma en la valoración.',
  },
  {
    q: '¿Cuánto vale un implante blanco de zirconio en Colombia?',
    a: 'El implante de zirconio cuesta desde $3.500.000 COP por implante. Es la opción sin metal visible: un tornillo blanco, biocompatible, indicado para pacientes que buscan una alternativa al titanio o tienen sensibilidad a los metales. Su costo es algo mayor que el de titanio y se confirma en la valoración.',
  },
  {
    q: '¿Qué marca y modelo de implante usan?',
    a: 'Trabajamos principalmente con implantes del grupo Straumann y Neodent, en titanio o en sus líneas de zirconio según el caso, y también colocamos DioImplant. Además, rehabilitamos sobre cualquier marca ya colocada en Colombia o en el exterior. La marca exacta para tu caso se decide en la valoración, según el diagnóstico óseo.',
  },
  {
    q: '¿Por qué la corona sobre un implante cuesta más que la corona de un diente natural?',
    a: 'Son COP $500.000 de diferencia: la corona de zirconio sobre implante cuesta desde $3.000.000 COP y la de un diente natural desde $2.500.000 COP. La diferencia son los aditamentos, el pilar y el tornillo de fijación que unen la corona al implante. Son piezas de precisión del mismo fabricante del implante, y un diente natural no las lleva porque la corona se cementa directamente sobre el diente tallado. Se lo digo de entrada para que no aparezca como una sorpresa en el presupuesto.',
  },
  {
    q: '¿El presupuesto que me dan es un rango, o es un precio cerrado?',
    a: 'Se cotiza como techo, con todo incluido. Si en la valoración o durante el tratamiento resulta que necesitas menos de lo previsto, pagas menos, nunca más de lo cotizado. El valor exacto de tu caso, siempre desde un mínimo, se confirma después de revisar tus radiografías o tomografía.',
  },
  {
    q: '¿Puedo enviar la radiografía panorámica o la tomografía que ya me tomé en mi país?',
    a: 'Sí, la puedes enviar por WhatsApp o correo, incluido el archivo DICOM si es una tomografía (CBCT). Si la calidad no alcanza o hace falta un estudio adicional, se completa el primer día en Medellín. Para planear implantes la tomografía es obligatoria: la panorámica es una imagen plana y no muestra el hueso en tres dimensiones.',
  },
  {
    q: '¿Cuántos viajes necesito, y cuánto tiempo debo esperar entre uno y otro?',
    a: 'Normalmente son dos viajes. En el primero se hace la cirugía y se colocan los provisionales; en el segundo, meses después, una vez completada la oseointegración, se coloca la corona definitiva. El tiempo de espera exacto entre los dos viajes varía según cada caso y se confirma en la valoración.',
  },
  {
    q: '¿Puedo tener dientes fijos el mismo día de la cirugía?',
    a: 'Depende del torque que se logre durante la cirugía. Si es suficiente, se coloca un provisional fijo el mismo día; si no, se usa uno removible hasta que el implante se integre al hueso. Eso se decide en el momento de la cirugía, no antes.',
  },
  {
    q: '¿Tienen implantes 100% libres de metal, incluso en el tornillo interno?',
    a: 'Existe un sistema de implante y pilar en zirconio, que es la opción sin metal visible y biocompatible. Pero el tornillo interno que conecta el pilar al implante es de titanio biocompatible: hoy no existe, en Colombia, un sistema verificado que esté completamente libre de cualquier metal.',
  },
  {
    q: 'Ya tengo implantes puestos en otro país, con problemas. ¿Pueden evaluar y corregir mi caso?',
    a: 'Sí. Se evalúan con tomografía, radiografías y fotos del estado actual, y ahí se define si alguno de tus implantes se puede conservar o si hay que retirarlo o corregirlo. El plan se confirma después de revisar esos estudios.',
  },
  {
    q: '¿Qué es el All-on-4?',
    a: 'Es una técnica que rehabilita una arcada completa fija (todos los dientes) sobre solo 4 implantes, en lugar de uno por cada diente. Permite recuperar una dentadura fija en poco tiempo y es ideal para personas sin dientes o con la mayoría de ellos comprometidos. Tenemos una guía dedicada de All-on-4 en Medellín.',
  },
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
    a: 'Cada caso se evalúa individualmente. El tabaquismo y la diabetes no controlada aumentan el riesgo de fallo del implante, pero no son una contraindicación absoluta. Con un protocolo adecuado y compromiso del paciente, muchos casos son viables.',
  },
];

const faqsEn = [
  {
    q: 'How much does a conventional titanium dental implant cost in Colombia?',
    a: 'A titanium implant in Medellín costs from $3,000,000 COP per implant, and from $1,500 USD including the implant plus the permanent crown. We work with brands such as Neodent, Straumann and DioImplant. The exact price depends on the number of implants and is confirmed at your assessment.',
  },
  {
    q: 'How much does a white zirconia dental implant cost in Colombia?',
    a: 'A zirconia implant costs from $3,500,000 COP per implant. It is the option with no visible metal: a white, biocompatible screw, indicated for patients looking for an alternative to titanium or with metal sensitivity. It costs somewhat more than titanium and is confirmed at your assessment.',
  },
  {
    q: 'What implant brand and system do you use?',
    a: 'We mainly work with implants from the Straumann and Neodent group, in titanium or their zirconia lines depending on the case, and we also place DioImplant. We also rehabilitate any brand already placed in Colombia or abroad. The exact brand for your case is decided at your assessment, based on the bone diagnosis.',
  },
  {
    q: 'Why does the crown on an implant cost more than the crown on a natural tooth?',
    a: 'The difference is COP $500,000: a zirconia crown on an implant starts at $3,000,000 COP and one on a natural tooth at $2,500,000 COP. That gap is the abutment and the fixation screw that join the crown to the implant. They are precision parts made by the same manufacturer as the implant, and a natural tooth does not need them because the crown is cemented directly onto the prepared tooth. I tell you upfront so it never shows up as a surprise in your quote.',
  },
  {
    q: 'Is the quote you give me a range, or a fixed price?',
    a: "It is quoted as a ceiling, with everything included. If your assessment or the treatment itself shows you need less than expected, you pay less, never more than quoted. The exact figure for your case, always from a minimum, is confirmed once we review your X-rays or CT scan.",
  },
  {
    q: 'Can I send the panoramic X-ray or CT scan I already had taken in my own country?',
    a: 'Yes, you can send it over WhatsApp or email, including the DICOM file if it is a CBCT scan. If the quality is not enough or an additional study is needed, it is completed on your first day in Medellín. A CT scan is mandatory for planning implants: a panoramic X-ray is a flat image and does not show the bone in three dimensions.',
  },
  {
    q: 'How many trips do I need, and how much time should I wait between them?',
    a: 'Usually two trips. The first is for the surgery and the provisionals; the second, months later, once osseointegration is complete, is for placing the permanent crown. The exact waiting time between the two trips varies by case and is confirmed at your assessment.',
  },
  {
    q: 'Can I have fixed teeth the same day as surgery?',
    a: 'It depends on the torque achieved during surgery. If it is high enough, a fixed provisional is placed the same day; if not, a removable one is used until the implant integrates with the bone. That is decided during surgery, not before.',
  },
  {
    q: 'Do you have implants that are 100% metal-free, even in the internal screw?',
    a: 'There is an implant-and-abutment system in zirconia, which is the option with no visible metal and fully biocompatible. But the internal screw that connects the abutment to the implant is made of biocompatible titanium: today, no verified system in Colombia is completely free of any metal.',
  },
  {
    q: 'I already have implants placed in another country, with problems. Can you evaluate and fix my case?',
    a: 'Yes. They are evaluated with a CT scan, X-rays and photos of their current condition, and that determines whether any of your implants can be kept or need to be removed or corrected. The plan is confirmed once those studies are reviewed.',
  },
  {
    q: 'What is All-on-4?',
    a: 'It is a technique that restores a full fixed arch (all the teeth) on just 4 implants, instead of one per tooth. It lets you regain a fixed set of teeth in a short time and is ideal for people with no teeth or with most of them compromised. We have a dedicated All-on-4 Medellín guide.',
  },
  {
    q: 'Does the dental implant procedure hurt?',
    a: 'The procedure is done under local anesthesia, so you feel no pain during surgery. You may experience mild discomfort for the first 2-3 days after surgery, easily managed with conventional pain relievers.',
  },
  {
    q: 'How long do dental implants last?',
    a: 'Titanium implants, with proper hygiene and regular checkups, can last a lifetime. The crown over the implant has a lifespan of 10-15 years depending on wear and care.',
  },
  {
    q: 'How do I know if I have enough bone for an implant?',
    a: 'We perform a 3D tomographic study (CBCT) that lets us precisely measure the amount and quality of available bone. If bone is insufficient, there are bone regeneration techniques or zygomatic implants as an alternative.',
  },
  {
    q: 'Can I get an implant if I smoke or have diabetes?',
    a: 'Each case is evaluated individually. Smoking and uncontrolled diabetes increase the risk of implant failure, but they are not an absolute contraindication. With a proper protocol and patient commitment, many cases are viable.',
  },
];

const H2 = { color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' };

const tiposIcons = [
  (
    <svg key="titanio" viewBox="0 0 48 60" fill="none" className="w-12 h-14">
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
  (
    <svg key="zirconio" viewBox="0 0 48 60" fill="none" className="w-12 h-14">
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
  (
    <svg key="cigomatico" viewBox="0 0 56 60" fill="none" className="w-14 h-14">
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
  (
    <svg key="subperiostico" viewBox="0 0 56 50" fill="none" className="w-14 h-12">
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
];

export default async function ImplantesDentalesPage({
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
    { name: t.breadcrumbHere, url: isEs ? `${BASE}/servicios/implantes-dentales` : `${BASE}/en/servicios/implantes-dentales` },
  ];

  return (
    <main style={{ backgroundColor: '#FCFBF9' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/implantes-dentales` : `${BASE}/en/servicios/implantes-dentales`,
          name: t.schemaWebPageName,
          description: t.schemaWebPageDesc,
          procedureName: t.schemaProcedureName,
        }),
        medicalServiceSchema({
          name: t.schemaServiceName,
          description: t.schemaServiceDesc,
          url: isEs ? `${BASE}/servicios/implantes-dentales` : `${BASE}/en/servicios/implantes-dentales`,
        }),
        faqSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema(breadcrumbs),
      ]} />
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-16 px-4"
        style={{ backgroundColor: '#FCFBF9' }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <AnimatedSection direction="down" delay={0}>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#77726A' }}>
              <Link href={localePath('/')} className="hover:text-[#8A6B2E] transition-colors">
                {t.breadcrumbHome}
              </Link>
              <span>/</span>
              <Link href={localePath('/servicios')} className="hover:text-[#8A6B2E] transition-colors">
                {t.breadcrumbServices}
              </Link>
              <span>/</span>
              <span style={{ color: '#C9A461' }}>{t.breadcrumbHere}</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#C9A461' }}
            >
              {t.eyebrow}
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={H2}
            >
              {t.h1}
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#5A5449' }}>
              {t.heroP}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RespuestaDirecta
        pregunta={isEs ? '¿Cuánto cuestan los implantes dentales en Medellín?' : 'How much do dental implants cost in Medellín?'}
        respuesta={isEs
          ? 'Un implante de titanio en Medellín cuesta desde $3.000.000 COP por implante, o desde $1.500 USD incluyendo el implante más la corona definitiva; el de zirconio (sin metal visible) parte de $3.500.000 COP. El precio final depende del número de implantes, la marca y de si se requiere regeneración ósea, y se confirma en la valoración con diagnóstico 3D.'
          : 'A titanium implant in Medellín costs from $3,000,000 COP per implant, or from $1,500 USD including the implant plus the permanent crown; the zirconia option with no visible metal starts at $3,500,000 COP. The final price depends on the number of implants, the brand and whether bone regeneration is needed, and is confirmed at your assessment with 3D diagnosis.'}
      />

      {/* ── QUÉ ES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection direction="right">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={H2}
              >
                {t.queEsH2}
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>
                {t.queEsP1}
              </p>
              <p className="text-lg leading-relaxed mt-4" style={{ color: '#5A5449' }}>
                {t.queEsP2}
              </p>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <figure className="relative aspect-[4/3] rounded-xl overflow-hidden border" style={{ borderColor: '#E8E3DA' }}>
                <Image
                  src="/images/final-implantes-4.webp"
                  alt={t.queEsPhotoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.75) 0%, transparent 45%)' }} />
                <figcaption className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>{t.queEsPhotoEyebrow}</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#211E18' }}>{t.queEsPhotoCaption}</p>
                </figcaption>
              </figure>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── QUIÉN NECESITA ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={H2}
            >
              {t.quienH2}
            </h2>
            <ul className="space-y-4">
              {t.quien.map((item, i) => (
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

      {/* ── TIPOS ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>
              {t.tiposEyebrow}
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={H2}
            >
              {t.tiposH2}
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#77726A' }}>
              {t.tiposP}
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.tipos.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="p-6 rounded-xl border h-full flex flex-col"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
                >
                  {/* Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div style={{ color: '#C9A461' }}>{tiposIcons[i]}</div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded tracking-wide uppercase"
                      style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={H2}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#77726A' }}>
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

      {/* ── SPOKE: CIGOMÁTICOS ── */}
      <section className="px-4 pb-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <Link
              href={localePath('/servicios/implantes-cigomaticos')}
              className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border p-5 transition-all hover:border-[#C9A461]/60 group"
              style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(201,164,97,0.3)' }}
            >
              <Icon name="bone" className="w-6 h-6 shrink-0" />
              <div className="flex-1 text-center sm:text-left">
                <p className="font-semibold text-sm group-hover:text-[#8A6B2E] transition-colors" style={{ color: '#211E18' }}>
                  {t.spokeTitle}
                </p>
                <p className="text-xs mt-1" style={{ color: '#77726A' }}>
                  {t.spokeDesc}
                </p>
              </div>
              <svg className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PHOTO TRUST SECTION ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/consultorio.webp"
                  alt={isEs ? 'Consultorio Dra. Carolina Macareno - Implantes Dentales Medellín' : 'Dr. Carolina Macareno’s office - Dental Implants Medellín'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>
                    {t.photoTrustCaptionEyebrow}
                  </span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#211E18' }}>
                    {t.photoTrustCaption}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>
                {t.porqueEyebrow}
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={H2}
              >
                {t.porqueH2}
              </h2>
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

      {/* ── CASO CLÍNICO REAL ── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: '#C9A461' }}>
              {t.casoEyebrow}
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={H2}
            >
              {t.casoH2}
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#77726A' }}>
              {t.casoP}
            </p>
            <div className="w-16 h-0.5 mx-auto mt-5" style={{ background: 'linear-gradient(to right, #C9A461, #E5B866)' }} />
          </AnimatedSection>

          {/* Photo grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {t.casoFotos.map((photo, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="rounded-xl overflow-hidden border border-[#E8E3DA] group">
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
                      <p className="text-xs leading-relaxed" style={{ color: '#5A5449' }}>{photo.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA: guía All-on-4 + caso subperióstico */}
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href={localePath('/all-on-4-medellin')}
                className="flex items-center gap-4 rounded-xl border border-[#E8E3DA] hover:border-[#C9A461]/40 bg-white px-5 py-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201,164,97,0.1)', border: '1px solid rgba(201,164,97,0.3)' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold group-hover:text-[#8A6B2E] transition-colors" style={{ color: '#211E18' }}>{t.casoLink1Title}</p>
                  <p className="text-xs" style={{ color: '#77726A' }}>{t.casoLink1Desc}</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>

              <Link
                href={localePath('/blog/implantes-subperiosticos-medellin')}
                className="flex items-center gap-4 rounded-xl border border-[#E8E3DA] hover:border-[#C9A461]/40 bg-white px-5 py-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201,164,97,0.1)', border: '1px solid rgba(201,164,97,0.3)' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold group-hover:text-[#8A6B2E] transition-colors" style={{ color: '#211E18' }}>{t.casoLink2Title}</p>
                  <p className="text-xs" style={{ color: '#77726A' }}>{t.casoLink2Desc}</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-10"
              style={H2}
            >
              {t.procesoH2}
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {t.proceso.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-5 items-start">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="flex-1 p-5 rounded-xl border"
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
                  >
                    <h3 className="font-semibold text-base mb-1" style={{ color: '#211E18' }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>
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
      <section className="py-10 px-4" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E3DA', borderBottom: '1px solid #E8E3DA' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.info.map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
              >
                <span className="text-2xl"><Icon name={['calendar', 'money', 'calendar'][i]} /></span>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: '#77726A' }}>
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
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={H2}
            >
              {t.faqH2}
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="p-6 rounded-xl border"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
                >
                  <h3
                    className="font-semibold text-base mb-3 flex items-start gap-2"
                    style={{ color: '#8A6B2E' }}
                  >
                    <span className="shrink-0 mt-0.5" style={{ color: '#C9A461' }}>▸</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5A5449' }}>
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL PATIENTS BANNER ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#FCFBF9', borderTop: '1px solid #E8E3DA' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Link
              href={localePath('/all-on-4-medellin')}
              className="flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-[#C9A461]/30 p-6 hover:border-[#C9A461]/60 transition-all group"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,164,97,0.15)', border: '1px solid rgba(201,164,97,0.4)' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="text-xs font-semibold tracking-widest uppercase block mb-1" style={{ color: '#C9A461' }}>
                  {t.intlBanner1Eyebrow}
                </span>
                <p className="font-semibold text-base group-hover:text-[#8A6B2E] transition-colors" style={{ color: '#211E18' }}>
                  {t.intlBanner1Title}
                </p>
                <p className="text-sm mt-1" style={{ color: '#77726A' }}>
                  {t.intlBanner1Desc}
                </p>
              </div>
              <svg className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </AnimatedSection>
          <AnimatedSection>
            <Link
              href={localePath('/dental-implants-for-us-patients')}
              className="mt-4 flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-[#C9A461]/30 p-6 hover:border-[#C9A461]/60 transition-all group"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,164,97,0.15)', border: '1px solid rgba(201,164,97,0.4)' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="text-xs font-semibold tracking-widest uppercase block mb-1" style={{ color: '#C9A461' }}>
                  {t.intlBanner2Eyebrow}
                </span>
                <p className="font-semibold text-base group-hover:text-[#8A6B2E] transition-colors" style={{ color: '#211E18' }}>
                  {t.intlBanner2Title}
                </p>
                <p className="text-sm mt-1" style={{ color: '#77726A' }}>
                  {t.intlBanner2Desc}
                </p>
              </div>
              <svg className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={H2}
            >
              {t.ctaH2}
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#5A5449' }}>
              {t.ctaP}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={t.waMessage}
                locale={locale as 'es' | 'en'}
                trackingLabel="implantes_dentales_cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.938l6.29-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.012-1.374l-.36-.213-3.733.978.995-3.629-.234-.373A9.778 9.778 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                </svg>
                {t.ctaWa}
              </WhatsAppLink>
              <Link
                href={localePath('/contacto')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
                style={{ borderColor: '#C9A461', color: '#8A6B2E' }}
              >
                {t.ctaContact}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <RelatedArticles route="/servicios/implantes-dentales" locale={locale} />
    </main>
  );
}
