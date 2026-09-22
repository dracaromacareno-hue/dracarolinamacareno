import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import RespuestaDirecta from '@/components/RespuestaDirecta';
import SchemaOrg, { medicalServiceSchema, breadcrumbSchema, faqSchema, medicalWebPageSchema } from '@/components/SchemaOrg';

/*
  Prótesis fija: la versión en inglés mostraba casi todo el cuerpo en español
  (~75%). Todo el texto visible vive ahora en `T`, un bloque por idioma, siguiendo
  el patrón de rehabilitacion-oral-completa/page.tsx.

  22-sep-2026: se agregaron 4 FAQ nuevas con la voz del paciente (banco de
  preguntas de pacientes internacionales): material de la prótesis definitiva,
  dientes fijos el mismo día, días en Medellín para la prótesis, y qué pasa si
  se afloja el tornillo de fijación (torque, ver CLAUDE.md). Las 4 FAQ que ya
  existían se conservan. No se cambiaron precios ni cifras.
*/

const icons = {
  corona: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path d="M10 3 Q7 3 7 7 L7 10 Q8 13 12 13 Q16 13 17 10 L17 7 Q17 3 14 3 Z" />
      <rect x="11" y="13" width="2" height="2" rx="0.5" />
      <path d="M12 15 L12 20" strokeLinecap="round" />
      <path d="M10 20 L14 20" strokeLinecap="round" />
      <circle cx="12" cy="21" r="1" fill="currentColor" />
    </svg>
  ),
  puente: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path d="M4 3 Q3 3 3 6 L3 9 Q4 11 7 11 Q10 11 11 9 L11 6 Q11 3 8 3 Z" />
      <path d="M13 3 Q12 3 12 6 L12 9 Q13 11 16 11 Q19 11 20 9 L20 6 Q20 3 18 3 Z" />
      <path d="M7 11 L7 14 M16 11 L16 14" strokeLinecap="round" />
      <path d="M7 14 Q11.5 12 16 14" strokeLinecap="round" />
      <circle cx="7" cy="15" r="1" fill="currentColor" />
      <circle cx="16" cy="15" r="1" fill="currentColor" />
    </svg>
  ),
  hibrida: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path d="M3 7 Q12 2 21 7" strokeLinecap="round" />
      <path d="M3 7 Q3 14 7 17 Q12 19 17 17 Q21 14 21 7" strokeLinecap="round" />
      <path d="M5 9 L5 16 M8 8 L8 17 M12 7 L12 18 M16 8 L16 17 M19 9 L19 16" strokeLinecap="round" />
      <path d="M3 17 L21 17" strokeLinecap="round" />
    </svg>
  ),
  allon4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path d="M4 8 Q12 3 20 8" strokeLinecap="round" />
      <path d="M4 8 Q4 15 8 18 Q12 20 16 18 Q20 15 20 8" strokeLinecap="round" />
      <path d="M5 10 L4 17" strokeLinecap="round" />
      <path d="M19 10 L20 17" strokeLinecap="round" />
      <circle cx="5" cy="10" r="1.2" fill="currentColor" />
      <circle cx="19" cy="10" r="1.2" fill="currentColor" />
      <path d="M8 8 L7 18" strokeLinecap="round" />
      <path d="M16 8 L17 18" strokeLinecap="round" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      <circle cx="16" cy="8" r="1.2" fill="currentColor" />
    </svg>
  ),
};

const whyIcons = ['scan', 'building', 'palette', 'handshake'];

const T = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
    breadcrumbHere: 'Prótesis Fija',
    eyebrow: 'Implantología · Prótesis Dental',
    h1: 'Prótesis Fija Atornillada en Medellín',
    heroP:
      'Restauración permanente sobre implantes, fijada con tornillos. Sin cemento, sin adhesivos, sin prótesis que se mueva. Una solución que se ve, se siente y funciona como dientes naturales.',
    queEsH2: '¿Qué es la prótesis fija atornillada?',
    queEsP1:
      'Es una restauración dental que se fija de forma permanente sobre implantes mediante tornillos de titanio, sin cemento. Puede reemplazar desde un solo diente hasta una arcada completa. No se retira, no se mueve y no requiere adhesivos de ningún tipo.',
    queEsP2:
      'Los materiales usados, zirconio monolítico y cerámica de alta resistencia, replican con exactitud el color, la translucidez y la forma de los dientes naturales. Se fabrica en laboratorio dental especializado a partir de un escáner digital intraoral (3Shape), garantizando un ajuste milimétrico.',
    galleryH2: 'Así se ve antes de instalarla',
    galleryP:
      'Fotos de una prótesis híbrida de un caso real, en el laboratorio y todavía sin colocar. Casi nadie ha visto una fuera de la boca, y es más fácil entenderla mirándola que leyendo la descripción.',
    galleryPhotos: [
      {
        src: '/images/protesis-hibrida-arcadas.webp',
        alt: 'Prótesis híbrida completa sobre implantes, arcada superior e inferior montadas, antes de instalarla',
        pie: 'Las dos arcadas montadas, tal como quedan en boca.',
      },
      {
        src: '/images/protesis-hibrida-atornillada.webp',
        alt: 'Reverso de una prótesis híbrida atornillada donde se ven los cuatro alojamientos de los tornillos',
        pie: 'El reverso, con los cuatro alojamientos de los tornillos. Por ahí se atornilla a los implantes.',
      },
      {
        src: '/images/protesis-hibrida-detalle.webp',
        alt: 'Detalle frontal de los dientes de una prótesis híbrida sostenida en la mano',
        pie: 'De frente, para ver la forma y el color de los dientes.',
      },
    ],
    quienH2: '¿Quién necesita este tratamiento?',
    quien: [
      'Tiene implantes colocados y necesita la corona o puente definitivo.',
      'Perdió varios dientes contiguos y quiere una solución fija y estable.',
      'Usa prótesis removible (placa) y quiere algo definitivo que no se mueva.',
      'Busca la mejor combinación de estética, funcionalidad y durabilidad.',
      'Tiene rehabilitación provisional y está listo para la definitiva en zirconio.',
      'Quiere evitar la incomodidad, la inseguridad y el desgaste de una prótesis removible.',
    ],
    tiposEyebrow: 'Modalidades disponibles',
    tiposH2: 'Tipos de prótesis fija sobre implantes',
    tiposP: 'Desde una sola corona hasta una arcada completa, cada caso tiene su solución ideal.',
    tipos: [
      { icon: 'corona', badge: '1 DIENTE', title: 'Corona Unitaria', desc: 'Una sola corona de cerámica o zirconio sobre un implante. No requiere desgastar los dientes vecinos. Resultado idéntico al diente natural en forma, color y función.', highlight: '✓ No afecta dientes vecinos' },
      { icon: 'puente', badge: '2-4 DIENTES', title: 'Puente Fijo sobre Implantes', desc: 'Estructura de 3 a 6 unidades apoyada en 2 implantes. Repone varios dientes contiguos sin necesidad de un implante por cada espacio.', highlight: '✓ Menos implantes, más cobertura' },
      { icon: 'hibrida', badge: 'ARCADA COMPLETA', title: 'Prótesis Híbrida', desc: 'Arcada completa en resina de alta resistencia sobre una estructura metálica o de zirconio, apoyada en 4-6 implantes. La opción más usada para rehabilitación total.', highlight: '✓ Arcada completa sobre 4-6 implantes' },
      { icon: 'allon4', badge: 'CARGA INMEDIATA', title: 'All-on-4 / All-on-6', desc: '4 o 6 implantes estratégicamente angulados para aprovechar el hueso disponible. Permite colocar una prótesis provisional el mismo día de la cirugía.', highlight: '✓ Dientes provisionales el mismo día' },
    ],
    photoAlt: 'Prótesis fija sobre implantes, Dra. Carolina Macareno, El Poblado, Medellín',
    photoCaption: 'Scanner digital 3Shape intraoral',
    whyEyebrow: '¿Por qué elegirnos?',
    whyH2: 'Fabricación digital de precisión',
    why: [
      { title: 'Scanner 3Shape intraoral', desc: 'Sin impresiones convencionales. Captura digital milimétrica de la posición de cada implante.' },
      { title: 'Laboratorio especializado', desc: 'Fresado CAD/CAM en zirconio monolítico. Fabricación en 1-2 semanas con control de calidad.' },
      { title: 'Personalización estética', desc: 'Caracterización individual del color y la translucidez para que sea indistinguible de los dientes naturales.' },
      { title: 'Garantía de ajuste', desc: 'Prueba clínica antes del atornillado definitivo. Si no ajusta perfectamente, se repite sin costo adicional.' },
    ],
    procesoH2: 'El proceso paso a paso',
    proceso: [
      { step: '01', title: 'Evaluación y planificación digital', desc: 'Revisión de la salud de los implantes, oclusión y estética. Definición del diseño, material y forma de las restauraciones.' },
      { step: '02', title: 'Toma de impresión digital (scanner 3Shape)', desc: 'Sin material de impresión convencional. Un escáner intraoral captura la posición exacta de los implantes en milisegundos.' },
      { step: '03', title: 'Fabricación en laboratorio', desc: 'La pieza se fabrica en zirconio o cerámica de alta resistencia con fresado CAD/CAM. Tiempo: 1 a 2 semanas.' },
      { step: '04', title: 'Prueba y ajuste', desc: 'Se verifica la estética, el ajuste y la oclusión antes de la entrega definitiva. Se realizan los ajustes necesarios.' },
      { step: '05', title: 'Atornillado definitivo', desc: 'La prótesis queda fija con torque controlado. Se sella el acceso del tornillo con resina del mismo color del diente.' },
    ],
    info: [
      { label: 'Fabricación', value: '2 – 4 semanas' },
      { label: 'Precio desde', value: '$3.000.000 COP' },
      { label: 'Número de citas', value: '3 – 4 citas' },
    ],
    faqH2: 'Preguntas frecuentes',
    bannerEyebrow: 'Guía Completa',
    bannerTitle: 'Coronas de Zirconio y Carillas en Colombia, precios y comparativa',
    bannerDesc: 'Materiales, durabilidad y costos reales. Todo en un solo lugar.',
    ctaH2: '¿Tienes implantes y necesitas la prótesis?',
    ctaP: 'Escríbenos hoy y agenda tu cita de diseño y planificación de prótesis fija.',
    ctaWa: 'Escribir por WhatsApp',
    ctaContact: 'Ver página de contacto',
    waMessage: 'Hola, leí la página de prótesis fija sobre implantes. Me gustaría una valoración de mi caso.',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    breadcrumbHere: 'Fixed Prosthetics',
    eyebrow: 'Implant Dentistry · Fixed Prosthetics',
    h1: 'Screw-Retained Fixed Prosthesis in Medellín',
    heroP:
      'A permanent restoration on implants, held in place with screws. No cement, no adhesives, no prosthesis that shifts. A solution that looks, feels and functions like natural teeth.',
    queEsH2: 'What is a screw-retained fixed prosthesis?',
    queEsP1:
      "It is a dental restoration that is permanently fixed onto implants with titanium screws, with no cement. It can replace anything from a single tooth to a full arch. It is never removed, it doesn't move, and it needs no adhesives of any kind.",
    queEsP2:
      'The materials we use, monolithic zirconia and high-strength ceramic, closely match the color, translucency and shape of natural teeth. It is made in a specialized dental laboratory from a digital intraoral scan (3Shape), which guarantees a precise, millimetric fit.',
    galleryH2: "What it looks like before it's placed",
    galleryP:
      'Photos of a hybrid prosthesis from a real case, in the laboratory and not yet placed. Almost no one has seen one outside the mouth, and it is easier to understand by looking at it than by reading a description.',
    galleryPhotos: [
      {
        src: '/images/protesis-hibrida-arcadas.webp',
        alt: 'Full hybrid prosthesis on implants, upper and lower arches assembled, before it is placed',
        pie: 'Both arches assembled, exactly as they sit in the mouth.',
      },
      {
        src: '/images/protesis-hibrida-atornillada.webp',
        alt: 'Underside of a screw-retained hybrid prosthesis showing the four screw access channels',
        pie: 'The underside, with the four screw access channels. This is where it screws onto the implants.',
      },
      {
        src: '/images/protesis-hibrida-detalle.webp',
        alt: 'Front detail of the teeth on a hybrid prosthesis held in hand',
        pie: 'From the front, to see the shape and color of the teeth.',
      },
    ],
    quienH2: 'Who needs this treatment?',
    quien: [
      'You already have implants placed and need the definitive crown or bridge.',
      'You lost several teeth next to each other and want a fixed, stable solution.',
      "You wear a removable denture (a plate) and want something permanent that doesn't move.",
      'You want the best combination of esthetics, function and durability.',
      'You have a provisional rehabilitation and are ready for the definitive one in zirconia.',
      'You want to avoid the discomfort, insecurity and wear of a removable prosthesis.',
    ],
    tiposEyebrow: 'Available options',
    tiposH2: 'Types of fixed prosthesis on implants',
    tiposP: 'From a single crown to a full arch, every case has its ideal solution.',
    tipos: [
      { icon: 'corona', badge: '1 TOOTH', title: 'Single Crown', desc: "A single ceramic or zirconia crown on one implant. It doesn't require grinding down neighboring teeth. The result matches a natural tooth in shape, color and function.", highlight: "✓ Doesn't affect neighboring teeth" },
      { icon: 'puente', badge: '2-4 TEETH', title: 'Fixed Bridge on Implants', desc: 'A 3-to-6-unit structure supported by 2 implants. It replaces several teeth next to each other without needing one implant per gap.', highlight: '✓ Fewer implants, more coverage' },
      { icon: 'hibrida', badge: 'FULL ARCH', title: 'Hybrid Prosthesis', desc: 'A full arch in high-strength resin over a metal or zirconia framework, supported by 4 to 6 implants. The option used most often for full rehabilitation.', highlight: '✓ Full arch on 4 to 6 implants' },
      { icon: 'allon4', badge: 'IMMEDIATE LOADING', title: 'All-on-4 / All-on-6', desc: '4 or 6 implants strategically angled to make the most of the available bone. It allows a provisional prosthesis to be placed on the same day as surgery.', highlight: '✓ Provisional teeth the same day' },
    ],
    photoAlt: 'Fixed prosthesis on implants, Dr. Carolina Macareno, El Poblado, Medellín',
    photoCaption: '3Shape digital intraoral scanner',
    whyEyebrow: 'Why choose us?',
    whyH2: 'Precision digital fabrication',
    why: [
      { title: '3Shape intraoral scanner', desc: 'No conventional impressions. A millimetric digital capture of the position of each implant.' },
      { title: 'Specialized laboratory', desc: 'CAD/CAM milling in monolithic zirconia. Manufactured in 1 to 2 weeks with quality control.' },
      { title: 'Esthetic customization', desc: 'Individual shading of color and translucency so it is indistinguishable from natural teeth.' },
      { title: 'Fit guarantee', desc: "A clinical try-in before the final screw-retained placement. If it doesn't fit perfectly, it is remade at no additional cost." },
    ],
    procesoH2: 'The process, step by step',
    proceso: [
      { step: '01', title: 'Evaluation and digital planning', desc: 'Review of implant health, occlusion and esthetics. We define the design, material and shape of the restorations.' },
      { step: '02', title: 'Digital impression (3Shape scanner)', desc: 'No conventional impression material. An intraoral scanner captures the exact position of your implants in milliseconds.' },
      { step: '03', title: 'Laboratory fabrication', desc: 'The piece is milled in zirconia or high-strength ceramic using CAD/CAM. Turnaround: 1 to 2 weeks.' },
      { step: '04', title: 'Try-in and adjustment', desc: 'We check esthetics, fit and occlusion before the final delivery, and make any adjustments needed.' },
      { step: '05', title: 'Final screw-retained placement', desc: 'The prosthesis is secured with controlled torque. The screw access hole is sealed with tooth-colored resin.' },
    ],
    info: [
      { label: 'Manufacturing', value: '2 to 4 weeks' },
      { label: 'Price from', value: '$3,000,000 COP' },
      { label: 'Number of visits', value: '3 to 4 visits' },
    ],
    faqH2: 'Frequently asked questions',
    bannerEyebrow: 'Full Guide',
    bannerTitle: 'Zirconia Crowns & Veneers in Colombia, prices and comparison',
    bannerDesc: 'Materials, durability and real costs. All in one place.',
    ctaH2: 'Do you have implants and need the prosthesis?',
    ctaP: 'Write to us today and schedule your design and planning visit for your fixed prosthesis.',
    ctaWa: 'Message on WhatsApp',
    ctaContact: 'Go to contact page',
    waMessage: "Hello, I read the fixed prosthesis on implants page. I would like an evaluation of my case.",
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
  const slug = 'protesis-fija';

  return {
    title: isEs
      ? 'Prótesis Fija y Coronas Dentales en Medellín | Zirconio'
      : 'Fixed Prosthetics & Dental Crowns in Medellín | Zirconia',
    description: isEs
      ? 'Prótesis fija y coronas dentales en Medellín: metal-porcelana y zirconio, sobre diente o implante. Puentes y All-on-4 atornillados. El Poblado, 17+ años.'
      : 'Fixed prosthetics and crowns in Medellín: porcelain-fused-to-metal and zirconia, on tooth or implant. Screw-retained bridges, All-on-4, no cement. El Poblado.',
    keywords: isEs
      ? [
          'prótesis fija Medellín',
          'corona dental zirconio',
          'puente dental sobre implantes',
          'prótesis sobre implantes Medellín',
          'rehabilitación implantes',
          'corona cerámica Medellín',
          'prótesis atornillada',
          'All-on-4 Medellín',
          'prótesis híbrida implantes',
          'Dra. Carolina Macareno',
          'El Poblado prótesis dental',
        ]
      : [
          'fixed prosthetics Medellin',
          'zirconia crown',
          'dental bridge implants',
          'implant prosthetics Medellin',
          'screw retained prosthetics',
          'All-on-4 Colombia',
        ],
    openGraph: {
      title: isEs
        ? 'Prótesis Fija sobre Implantes Medellín | Dra. Carolina Macareno'
        : 'Fixed Implant Prosthetics Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Coronas de zirconio, puentes y All-on-4 atornillados sobre implantes en El Poblado, Medellín. Sin cemento, sin movimiento.'
        : 'Zirconia crowns, bridges and All-on-4 screw-retained on implants in El Poblado, Medellín.',
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
    q: '¿Cuál es la diferencia entre prótesis fija y removible?',
    a: 'La prótesis fija está atornillada sobre los implantes y no se retira nunca, ni para dormir ni para limpiarla. La removible se quita para limpiar y puede moverse al hablar o comer. La fija ofrece mayor comodidad, estética superior y preserva mejor el hueso.',
  },
  {
    q: '¿Se puede romper una prótesis fija de zirconio?',
    a: 'El zirconio es uno de los materiales dentales más resistentes disponibles hoy. Aunque técnicamente puede fracturarse ante impactos muy severos, en condiciones normales de uso tiene una durabilidad excepcional. Además, en caso de fractura, solo se reemplaza la pieza dañada.',
  },
  {
    q: '¿Qué material usan para la prótesis definitiva: zirconio, acrílico o híbrida?',
    a: 'Depende del caso. Puede ser híbrida, con estructura metálica y dientes en resina acrílica; toda en zirconio, con la estructura y los dientes en una sola pieza; o con estructura en titanio y dientes individuales en zirconio. Lo que decide el material es la cantidad y la calidad del hueso, por eso la tomografía es el primer paso.',
  },
  {
    q: '¿Puedo tener dientes fijos el mismo día, o debo esperar con un provisional removible?',
    a: 'Depende del torque que se logre en la cirugía de los implantes. Si es suficiente, se coloca un provisional fijo el mismo día; si no, se usa un provisional removible mientras se completa la oseointegración. La definitiva se coloca después, cuando el implante ya está integrado.',
  },
  {
    q: '¿Cómo se limpia una prótesis fija sobre implantes?',
    a: 'Se limpia igual que los dientes naturales: cepillado regular y uso de hilo dental especial para implantes (superfloss o hilo grueso). En citas de control se realiza limpieza profesional periimplantaria para garantizar la salud a largo plazo.',
  },
  {
    q: '¿Cuánto tiempo dura una corona sobre implante?',
    a: 'Las coronas de zirconio o cerámica sobre implantes tienen una vida útil estimada de 15-20 años con cuidados adecuados. El implante en sí puede durar toda la vida. Los controles anuales permiten detectar desgaste a tiempo.',
  },
  {
    q: '¿Cuántos días debo quedarme en Medellín para la prótesis fija?',
    a: 'Si ya tienes los implantes y solo necesitas la prótesis, el proceso toma entre 3 y 4 citas repartidas en 2 a 4 semanas: impresión digital, prueba y ajuste, y atornillado definitivo. Si tu caso incluye la cirugía de los implantes (All-on-4 o All-on-6), ese tiempo se suma aparte.',
  },
  {
    q: 'Siento que la prótesis o un diente se mueve, ¿perdí el implante?',
    a: 'Casi nunca. Lo más frecuente es que se aflojó el tornillo de fijación, el que une la prótesis o la corona con el implante, y eso está dentro de los riesgos propios del procedimiento. La solución es torquearlo, es decir, ajustarlo con la fuerza exacta que indica el fabricante, en una cita corta y no en una cirugía. El implante que está dentro del hueso, mientras tanto, está perfecto.',
  },
];

const faqsEn = [
  {
    q: 'What is the difference between a fixed and a removable prosthesis?',
    a: 'A fixed prosthesis is screwed onto the implants and is never removed, not to sleep or to clean it. A removable one is taken out to clean and can move when speaking or eating. The fixed option offers greater comfort, superior aesthetics and better preserves the bone.',
  },
  {
    q: 'Can a fixed zirconia prosthesis break?',
    a: 'Zirconia is one of the most resistant dental materials available today. Although it can technically fracture under very severe impacts, under normal use it has exceptional durability. Also, if it fractures, only the damaged piece is replaced.',
  },
  {
    q: 'What material is the final prosthesis made of: zirconia, acrylic or hybrid?',
    a: 'It depends on your case. It can be hybrid, with a metal framework and acrylic resin teeth; full zirconia, with the framework and teeth milled as one piece; or a titanium framework with individual zirconia teeth. What decides the material is the amount and quality of your bone, which is why a CT scan is the first step.',
  },
  {
    q: 'Can I have fixed teeth the same day, or do I have to wait with a removable provisional?',
    a: 'It depends on the torque achieved during the implant surgery. If it is high enough, a fixed provisional is placed the same day; if not, a removable one is used while osseointegration completes. The definitive prosthesis is placed afterward, once the implant has integrated.',
  },
  {
    q: 'How do you clean a fixed prosthesis on implants?',
    a: 'It is cleaned like natural teeth: regular brushing and special floss for implants (superfloss or thick floss). At checkups, professional peri-implant cleaning is done to ensure long-term health.',
  },
  {
    q: 'How long does a crown on an implant last?',
    a: 'Zirconia or ceramic crowns on implants have an estimated lifespan of 15-20 years with proper care. The implant itself can last a lifetime. Annual checkups allow wear to be detected in time.',
  },
  {
    q: 'How many days do I need to stay in Medellín for the fixed prosthesis?',
    a: 'If you already have your implants and only need the prosthesis, the process takes 3 to 4 visits spread over 2 to 4 weeks: digital impression, try-in and adjustment, and the final screw-retained placement. If your case includes the implant surgery itself (All-on-4 or All-on-6), that time is added separately.',
  },
  {
    q: 'I feel like the prosthesis or a tooth is moving, did I lose the implant?',
    a: 'Almost never. The most common cause is that the fixation screw, the one that connects the prosthesis or crown to the implant, has loosened, and that is one of the known risks of the procedure. The fix is to torque it, meaning tighten it with the exact force the manufacturer specifies, in a short appointment, not surgery. The implant inside the bone, meanwhile, is fine.',
  },
];

const H2 = { color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' };

export default async function ProtesisFijaPage({
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
    { name: t.breadcrumbHere, url: isEs ? `${BASE}/servicios/protesis-fija` : `${BASE}/en/servicios/protesis-fija` },
  ];

  return (
    <main style={{ backgroundColor: '#FCFBF9' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/protesis-fija` : `${BASE}/en/servicios/protesis-fija`,
          name: isEs ? 'Prótesis Fija sobre Implantes Medellín' : 'Fixed Implant Prosthetics Medellín',
          description: isEs ? 'Prótesis fija atornillada, coronas de zirconio, puentes y All-on-4 en Medellín.' : 'Screw-retained fixed prosthetics, zirconia crowns, bridges and All-on-4 in Medellín.',
          procedureName: isEs ? 'Prótesis Fija Atornillada sobre Implantes' : 'Screw-Retained Fixed Implant Prosthetics',
        }),
        medicalServiceSchema({
          name: isEs ? 'Prótesis Fija sobre Implantes Medellín' : 'Fixed Implant Prosthetics Medellín',
          description: isEs
            ? 'Prótesis fija atornillada sobre implantes en Medellín. Coronas de zirconio, puentes dentales y rehabilitación All-on-4.'
            : 'Screw-retained fixed prosthetics on implants in Medellín. Zirconia crowns, dental bridges and All-on-4 rehabilitation.',
          url: isEs ? `${BASE}/servicios/protesis-fija` : `${BASE}/en/servicios/protesis-fija`,
        }),
        faqSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema(breadcrumbs),
      ]} />
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
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
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {t.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={H2}>
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
        pregunta={isEs ? '¿Cuánto cuesta una prótesis fija o corona dental en Medellín?' : 'How much does a fixed prosthesis or dental crown cost in Medellín?'}
        respuesta={isEs
          ? 'Una corona o prótesis fija sobre implante cuesta desde $3.000.000 COP (~$900 USD), en metal-porcelana o zirconio, atornillada y sin cemento. Las rehabilitaciones completas tipo All-on-4 se cotizan según el caso en tu valoración. El Poblado, Medellín, 17+ años de experiencia.'
          : 'A crown or fixed prosthesis on an implant starts at $3,000,000 COP (≈ $900 USD), in porcelain-fused-to-metal or zirconia, screw-retained and cement-free. Full-arch All-on-4 restorations are quoted per case at your assessment. El Poblado, Medellín, 17+ years of experience.'}
      />

      {/* ── QUÉ ES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={H2}>
              {t.queEsH2}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>
              {t.queEsP1}
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#5A5449' }}>
              {t.queEsP2}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/*
        ── CÓMO ES POR DENTRO ──

        Va justo después de "¿qué es?" porque es donde el lector se queda con la
        duda que el texto no resuelve: cómo es esa cosa que le van a atornillar.
        Casi nadie ha visto una prótesis híbrida fuera de la boca, y explicarla
        con palabras no funciona.

        Son fotos reales de un caso de la Dra., tomadas en el laboratorio antes
        de instalarlas. La del reverso es la que más aporta: se ven los cuatro
        alojamientos de los tornillos, que es lo que hace que la prótesis se
        pueda retirar en el consultorio y volver a colocar.
      */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={H2}>
              {t.galleryH2}
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A5449' }}>
              {t.galleryP}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {t.galleryPhotos.map((f) => (
                <figure key={f.src}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border" style={{ borderColor: '#E8E3DA', backgroundColor: '#FFFFFF' }}>
                    <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                  <figcaption className="text-sm mt-3 leading-relaxed" style={{ color: '#77726A' }}>
                    {f.pie}
                  </figcaption>
                </figure>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUIÉN NECESITA ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={H2}>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={H2}>
              {t.tiposH2}
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#77726A' }}>{t.tiposP}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.tipos.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div style={{ color: '#C9A461' }}>{icons[card.icon as keyof typeof icons]}</div>
                    <span className="text-xs font-semibold px-2 py-1 rounded tracking-wide uppercase" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>{card.badge}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={H2}>{card.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#77726A' }}>{card.desc}</p>
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
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image src="/images/dra-carolina-consultorio.webp" alt={t.photoAlt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#211E18' }}>{t.photoCaption}</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>{t.whyEyebrow}</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={H2}>{t.whyH2}</h2>
              <div className="space-y-4">
                {t.why.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xl shrink-0 mt-0.5"><Icon name={whyIcons[i]} /></span>
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

      {/* ── PROCESO ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-10" style={H2}>
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
                    {s.step}
                  </div>
                  <div
                    className="flex-1 p-5 rounded-xl border"
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
                  >
                    <h3 className="font-semibold text-base mb-1" style={{ color: '#211E18' }}>
                      {s.title}
                    </h3>
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
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
              >
                <span className="text-2xl">{i === 0 ? '⏱' : <Icon name={['', 'money', 'calendar'][i]} />}</span>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: '#77726A' }}>
                    {pill.label}
                  </p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={H2}>
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

      {/* ── CORONAS Y CARILLAS LANDING BANNER ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#FCFBF9', borderTop: '1px solid #E8E3DA' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Link
              href={localePath('/coronas-zirconio-carillas')}
              className="flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-[#C9A461]/30 p-6 hover:border-[#C9A461]/60 transition-all group"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,164,97,0.15)', border: '1px solid rgba(201,164,97,0.4)' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="text-xs font-semibold tracking-widest uppercase block mb-1" style={{ color: '#C9A461' }}>
                  {t.bannerEyebrow}
                </span>
                <p className="font-semibold text-base group-hover:text-[#8A6B2E] transition-colors" style={{ color: '#211E18' }}>
                  {t.bannerTitle}
                </p>
                <p className="text-sm mt-1" style={{ color: '#77726A' }}>
                  {t.bannerDesc}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={H2}>
              {t.ctaH2}
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#5A5449' }}>
              {t.ctaP}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={t.waMessage}
                locale={locale as 'es' | 'en'}
                trackingLabel="protesis_fija_cta"
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
                style={{ borderColor: '#C9A461', color: '#C9A461' }}
              >
                {t.ctaContact}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
