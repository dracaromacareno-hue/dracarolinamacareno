import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import RespuestaDirecta from '@/components/RespuestaDirecta';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import { casosDisenoSonrisa, casosPorId } from '@/lib/casos-galeria';
import SchemaOrg, { medicalServiceSchema, breadcrumbSchema, faqSchema, medicalWebPageSchema } from '@/components/SchemaOrg';

/*
  22-sep-2026: se tradujo por completo. La versión /en mostraba casi todo el cuerpo
  en español (hero, "qué es", "quién necesita", tipos, "por qué elegirnos", proceso,
  CTA); solo el título, la respuesta directa y las FAQ tenían inglés. Todo el texto
  visible vive ahora en `T`, un bloque por idioma, siguiendo el patrón de
  rehabilitacion-oral-completa/page.tsx.

  Corrección clínica (CLAUDE.md del sitio): el microdiseño en resina directa lleva
  diseño digital pero NO prueba física en boca. El "mockup" (prueba en boca) existe
  solo con carillas en cerámica. Antes el texto pegaba "ve tu sonrisa antes de
  empezar" al precio de entrada sin distinguir el material; se corrigió en la tarjeta
  de DSD, en "por qué elegirnos" y en la FAQ correspondiente. Nunca se usa la palabra
  "ensayo" en español, se usa "mockup" o "prueba en boca".

  El WhatsAppLink usaba el mismo mensaje en español para las dos versiones del
  idioma: en /en el paciente escribía en inglés y el primer mensaje llegaba en
  español, rompiendo la atribución de tema. Se corrigió con waMessage/waMessageEn.

  Precios: no se inventó ninguno. La FAQ de costo usa los rangos ya publicados en
  `lib/pricing.ts` (smile-design y veneer-single), todos con "desde".
*/

const T = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
    breadcrumbHere: 'Diseño de Sonrisa',
    eyebrow: 'Estética · Carillas · Diseño Digital',
    h1: 'Diseño de Sonrisa en Medellín',
    heroP:
      'Transformación estética completa de tu sonrisa planificada digitalmente antes de tocar un solo diente. El resultado que buscas, con la precisión que mereces.',
    rdPregunta: '¿Cuánto cuesta un diseño de sonrisa en Medellín?',
    rdRespuesta:
      'El costo depende del número de dientes a tratar y del material elegido (resina, disilicato o zirconio). Con el Diseño Digital de Sonrisa (DSD) ves el resultado simulado sobre tus propias fotos antes de tocar un solo diente; en la valoración recibes un plan con el precio exacto por escrito.',
    queEsH2: '¿Qué es el diseño de sonrisa?',
    queEsP1:
      'Es una transformación estética integral que combina carillas de cerámica o resina compuesta, coronas y técnicas de diseño digital para crear una sonrisa armónica, natural y personalizada. Todo el resultado se planifica visualmente antes de comenzar cualquier procedimiento clínico.',
    queEsP2:
      'Con el sistema DSD (Digital Smile Design) analizamos las proporciones faciales, el color de la piel, la forma de los labios y la posición de los dientes para diseñar una sonrisa única para ti, no una sonrisa genérica, sino la tuya propia, mejorada.',
    quienH2: '¿Quién necesita este tratamiento?',
    quien: [
      'Dientes manchados o con cambio de color que no responden al blanqueamiento.',
      'Dientes pequeños, irregulares, desgastados o fracturados que afectan la estética.',
      'Espacios entre dientes (diastemas) que quieres cerrar sin brackets.',
      'Sonrisa gingival (que muestra mucho tejido de la encía) o asimétrica.',
      'Quieres un cambio de imagen profundo y duradero.',
      'Profesionales, figuras públicas o personas que desean proyectar más confianza.',
    ],
    tiposEyebrow: 'Modalidades disponibles',
    tiposH2: 'Opciones de tratamiento para tu sonrisa',
    tiposP: 'Desde carillas mínimamente invasivas hasta diseño digital completo, cada sonrisa tiene su solución.',
    tipos: [
      {
        badge: 'MÁXIMA ESTÉTICA',
        title: 'Carillas de Cerámica',
        desc: 'Láminas de porcelana feldespática o disilicato de litio, de 0.3 a 0.5 mm de grosor. El material más estético disponible: translucidez, brillo y naturalidad insuperables.',
        highlight: '✓ Durabilidad de 10 a 15 años',
      },
      {
        badge: 'MÍNIMA INVASIÓN',
        title: 'Carillas de Resina Compuesta',
        desc: 'Aplicación directa de resina compuesta sin desgaste del diente. Resultado inmediato en una sola sesión. Ideal para correcciones pequeñas y pacientes jóvenes.',
        highlight: '✓ Sin desgaste dental · Reversible',
      },
      {
        badge: 'ALTA RESISTENCIA',
        title: 'Coronas en Zirconio',
        desc: 'Cobertura completa del diente en zirconio monolítico o porcelana sobre zirconio. Para dientes muy dañados, decolorados o con restauraciones previas extensas.',
        highlight: '✓ Resistencia máxima · Larga duración',
      },
      {
        badge: 'DISEÑO DIGITAL PREVIO',
        title: 'Diseño Digital de Sonrisa (DSD)',
        desc: 'Planificación visual completa con software especializado: se diseña la sonrisa ideal sobre tus fotos antes de tocar un diente. Con carillas cerámicas, además se hace un mockup: una prueba física en boca de la forma y el tamaño antes de la versión definitiva.',
        highlight: '✓ Diseño digital con cualquier material',
      },
    ],
    photoTrustEyebrow: '¿Por qué elegirnos?',
    photoTrustH2: 'Diseño de sonrisa digital en Medellín, paso a paso',
    photoTrust: [
      { icon: 'camera', title: 'Fotografía clínica profesional', desc: 'Análisis facial, labial y dental completo para diseñar proporciones ideales según tu rostro.' },
      { icon: 'monitor', title: 'Software DSD', desc: 'Diseño digital sobre tus fotos reales. Ves exactamente cómo quedará tu sonrisa antes de cualquier procedimiento.' },
      { icon: 'tooth', title: 'Mockup en boca (carillas cerámicas)', desc: 'Cuando eliges carillas cerámicas, se hace una prueba física de la sonrisa diseñada directamente sobre tus dientes. Tocas y sientes el resultado antes de decidir.' },
      { icon: 'sparkle', title: 'Mínima invasión', desc: 'Priorizamos las técnicas que preservan el máximo tejido dental sano. Tu sonrisa ideal con el mínimo sacrificio.' },
    ],
    galeriaEyebrow: 'Casos reales',
    galeriaTitle: 'Diseños de sonrisa antes y después',
    galeriaSubtitle: 'Pacientes reales del consultorio. Carillas cerámicas y en resina con planificación digital previa.',
    procesoH2: 'El proceso paso a paso',
    proceso: [
      { step: '01', title: 'Consulta y diseño digital de la sonrisa (DSD)', desc: 'Valoración integral, fotografías clínicas, análisis facial y diseño digital del resultado esperado. Se presenta la simulación virtual para tu aprobación.' },
      { step: '02', title: 'Preparación dental mínima', desc: 'Solo si se requiere (carillas cerámicas). Desgaste ultraconservador de 0.3 a 0.5 mm bajo anestesia local. Las carillas de resina no requieren preparación.' },
      { step: '03', title: 'Toma de impresión digital', desc: 'Escáner intraoral 3D para capturar la geometría exacta de los dientes preparados y enviarla al laboratorio.' },
      { step: '04', title: 'Mockup, prueba en boca', desc: 'Con carillas cerámicas se hace una prueba provisional en boca para evaluar forma, tamaño y color antes de fresar las definitivas.' },
      { step: '05', title: 'Fabricación en laboratorio (2 a 3 días)', desc: 'Técnicos especializados en diseño digital y cerámica elaboran cada carilla o corona de forma individual, en disilicato o zirconio.' },
      { step: '06', title: 'Cementación', desc: 'Prueba final de ajuste, color y estética. Cementación con cemento resinoso y técnicas adhesivas de última generación.' },
    ],
    infoBar: [
      { label: 'Duración del proceso', value: '3 a 7 días' },
      { label: 'Materiales', value: 'Resina / Disilicato / Zirconio' },
      { label: 'Número de citas', value: '1 a 5 citas' },
    ],
    faqH2: 'Preguntas frecuentes',
    intlEyebrow: 'Pacientes Internacionales',
    intlTitle: 'Smile Makeover en Colombia, guía completa para pacientes extranjeros',
    intlDesc: 'Precios, tiempos, logística y antes/después de pacientes reales.',
    ctaH2: 'Descubre tu mejor sonrisa',
    ctaP: 'Agenda una valoración de diseño y ve cómo lucirá tu nueva sonrisa antes de tomar cualquier decisión.',
    ctaWa: 'Escribir por WhatsApp',
    ctaContact: 'Ver página de contacto',
    waMessage: 'Hola, leí la página de diseño de sonrisa. Me gustaría una valoración de mi caso.',
    finalPhotoAlt: 'Resultado final de diseño de sonrisa con carillas cerámicas en Medellín, Dra. Carolina Macareno',
    finalPhotoBadge: 'Caso real · Carillas cerámicas',
    finalPhotoCaption: 'Resultado final de un diseño de sonrisa',
    laptopPhotoAlt: 'Diseño de sonrisa digital, Dra. Carolina Macareno, Medellín',
    laptopPhotoCaption: 'Diseño Digital de Sonrisa · Planificación visual previa',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    breadcrumbHere: 'Smile Design',
    eyebrow: 'Aesthetics · Veneers · Digital Design',
    h1: 'Smile Design in Medellín',
    heroP:
      'A complete esthetic transformation of your smile, planned digitally before touching a single tooth. The result you want, with the precision you deserve.',
    rdPregunta: 'How much does a smile makeover cost in Medellín?',
    rdRespuesta:
      'The cost depends on the number of teeth treated and the material chosen (composite resin, lithium disilicate or zirconia). With Digital Smile Design (DSD) you see a simulation on your own photos before any tooth is touched; you receive an exact quote in writing at your assessment.',
    queEsH2: 'What is smile design?',
    queEsP1:
      'It is a complete esthetic transformation that combines ceramic or composite resin veneers, crowns and digital design techniques to create a harmonious, natural and personalized smile. The whole result is planned visually before any clinical procedure begins.',
    queEsP2:
      'With the DSD (Digital Smile Design) system we analyze your facial proportions, skin tone, lip shape and tooth position to design a smile that is unique to you, not a generic smile, but your own, improved.',
    quienH2: 'Who needs this treatment?',
    quien: [
      'Stained or discolored teeth that do not respond to whitening.',
      'Small, irregular, worn or fractured teeth that affect your smile.',
      'Gaps between teeth (diastemas) you want to close without braces.',
      'A gummy smile (that shows a lot of gum tissue) or an asymmetric one.',
      'You want a deep, lasting change in your image.',
      'Professionals, public figures or anyone who wants to project more confidence.',
    ],
    tiposEyebrow: 'Available options',
    tiposH2: 'Treatment options for your smile',
    tiposP: 'From minimally invasive veneers to a complete digital design, every smile has its solution.',
    tipos: [
      {
        badge: 'MAXIMUM ESTHETICS',
        title: 'Ceramic Veneers',
        desc: 'Feldspathic porcelain or lithium disilicate laminates, 0.3 to 0.5 mm thick. The most esthetic material available: translucency, shine and natural look that are hard to beat.',
        highlight: '✓ 10 to 15 years of durability',
      },
      {
        badge: 'MINIMALLY INVASIVE',
        title: 'Composite Resin Veneers',
        desc: 'Composite resin applied directly with no tooth reduction. Immediate result in a single session. Ideal for small corrections and younger patients.',
        highlight: '✓ No enamel removal · Reversible',
      },
      {
        badge: 'HIGH STRENGTH',
        title: 'Zirconia Crowns',
        desc: 'Full tooth coverage in monolithic zirconia or porcelain fused to zirconia. For teeth that are badly damaged, discolored or have extensive previous restorations.',
        highlight: '✓ Maximum strength · Long-lasting',
      },
      {
        badge: 'DIGITAL DESIGN FIRST',
        title: 'Digital Smile Design (DSD)',
        desc: 'Full visual planning with specialized software: your ideal smile is designed on your own photos before any tooth is touched. With ceramic veneers, we also do a mockup, a physical in-mouth try-in of shape and size before the final version.',
        highlight: '✓ Digital design with any material',
      },
    ],
    photoTrustEyebrow: 'Why choose us?',
    photoTrustH2: 'Digital smile design in Medellín, step by step',
    photoTrust: [
      { icon: 'camera', title: 'Professional clinical photography', desc: 'Complete facial, lip and dental analysis to design the ideal proportions for your face.' },
      { icon: 'monitor', title: 'DSD software', desc: 'Digital design on your real photos. You see exactly how your smile will look before any procedure.' },
      { icon: 'tooth', title: 'In-mouth mockup (ceramic veneers)', desc: 'If you choose ceramic veneers, a physical try-in of the designed smile is placed directly on your teeth. You touch and feel the result before deciding.' },
      { icon: 'sparkle', title: 'Minimal intervention', desc: 'We prioritize techniques that preserve as much healthy tooth structure as possible. Your ideal smile with the least sacrifice.' },
    ],
    galeriaEyebrow: 'Real cases',
    galeriaTitle: 'Smile designs before and after',
    galeriaSubtitle: 'Real patients from the clinic. Ceramic and composite veneers with prior digital planning.',
    procesoH2: 'The process, step by step',
    proceso: [
      { step: '01', title: 'Consultation and Digital Smile Design (DSD)', desc: 'Full assessment, clinical photographs, facial analysis and digital design of the expected result. The virtual simulation is presented for your approval.' },
      { step: '02', title: 'Minimal tooth preparation', desc: 'Only if needed (ceramic veneers). Ultra-conservative reduction of 0.3 to 0.5 mm under local anesthesia. Composite veneers require no preparation.' },
      { step: '03', title: 'Digital impression', desc: '3D intraoral scan to capture the exact geometry of the prepared teeth and send it to the lab.' },
      { step: '04', title: 'Mockup, in-mouth try-in', desc: 'With ceramic veneers, a provisional try-in is placed in your mouth to evaluate shape, size and color before the final ones are milled.' },
      { step: '05', title: 'Lab fabrication (2 to 3 days)', desc: 'Technicians specialized in digital design and ceramics make each veneer or crown individually, in lithium disilicate or zirconia.' },
      { step: '06', title: 'Bonding', desc: 'Final check of fit, color and esthetics. Bonded with resin cement and the latest adhesive techniques.' },
    ],
    infoBar: [
      { label: 'Process time', value: '3 to 7 days' },
      { label: 'Materials', value: 'Composite / Disilicate / Zirconia' },
      { label: 'Appointments', value: '1 to 5 visits' },
    ],
    faqH2: 'Frequently asked questions',
    intlEyebrow: 'International Patients',
    intlTitle: 'Smile Makeover in Colombia, complete guide for international patients',
    intlDesc: 'Prices, timelines, logistics and before/after from real patients.',
    ctaH2: 'Discover your best smile',
    ctaP: 'Book a design assessment and see how your new smile will look before making any decision.',
    ctaWa: 'Message on WhatsApp',
    ctaContact: 'Go to contact page',
    waMessage: 'Hello, I read the smile design page. I would like an evaluation of my case.',
    finalPhotoAlt: 'Final result of a smile design with ceramic veneers in Medellín, Dr. Carolina Macareno',
    finalPhotoBadge: 'Real case · Ceramic veneers',
    finalPhotoCaption: 'Final result of a smile design',
    laptopPhotoAlt: 'Digital smile design, Dr. Carolina Macareno, Medellín',
    laptopPhotoCaption: 'Digital Smile Design · Prior visual planning',
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
  const slug = 'diseno-de-sonrisa';

  return {
    title: isEs
      ? 'Diseño de Sonrisa en Medellín | Carillas y DSD'
      : 'Smile Design in Medellín | Veneers and DSD Design',
    description: isEs
      ? 'Diseño de sonrisa en Medellín: escaneo intraoral 3D, diseño digital DSD y carillas cerámicas o de resina. Especialista con más de 17 años de experiencia.'
      : 'Smile design in Medellín: 3D intraoral scan, digital DSD design and ceramic or composite veneers. Specialist dentist with over 17 years of experience.',
    keywords: isEs
      ? [
          'diseño de sonrisa Medellín',
          'carillas dentales Medellín',
          'carillas de porcelana',
          'sonrisa perfecta Medellín',
          'diseño digital sonrisa',
          'DSD Medellín',
          'carillas cerámica',
          'carillas zirconio Medellín',
          'carillas resina Medellín',
          'Dra. Carolina Macareno',
        ]
      : [
          'smile design Medellin',
          'dental veneers Medellin',
          'porcelain veneers Colombia',
          'DSD digital smile design',
          'veneers Colombia cost',
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
    a: 'Depende del tipo de carilla. Las de resina compuesta se colocan sin ningún desgaste y son completamente reversibles. Las cerámicas requieren un desgaste mínimo del esmalte (0.3 a 0.5 mm) bajo anestesia local. En ambos casos se prioriza preservar el máximo de diente sano.',
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
    a: 'Sí. Con el Diseño Digital de Sonrisa (DSD) simulamos el resultado sobre tus propias fotos antes de tocar un diente, con cualquier material. Si eliges carillas cerámicas, además se hace un mockup: una prueba física en boca para que apruebes forma, tamaño y color antes de fabricar las carillas definitivas.',
  },
  {
    q: '¿Cuántas citas necesita un diseño de sonrisa?',
    a: 'Un diseño con carillas cerámicas suele completarse en 3 o 4 citas: valoración y diseño digital (DSD), preparación e impresión, mockup de prueba y cementación final, con 2 a 3 días de fabricación en laboratorio. Un diseño en resina puede resolverse en una sola sesión.',
  },
  {
    q: '¿Las carillas se manchan o cambian de color con el tiempo?',
    a: 'Las carillas de cerámica no se manchan ni cambian de color con el tiempo, a diferencia del esmalte natural: el tono elegido en el diseño se mantiene estable durante toda su vida útil. Las de resina pueden pigmentarse levemente con los años y se pulen en los controles.',
  },
  {
    q: '¿Cuánto cuestan las carillas o el diseño de sonrisa completo?',
    a: 'El valor depende del material, de cuántos dientes se van a tratar y del diagnóstico, y se entrega por escrito después de la valoración. Como referencia, un arco completo de 10 carillas en resina de laboratorio cuesta desde $4.800 USD, en cerámica de disilicato desde $6.500 USD, y una sola carilla cerámica desde $550 USD.',
  },
  {
    q: '¿Cuántos días debo quedarme en Medellín para un diseño de sonrisa?',
    a: 'Entre 4 y 7 días, en 2 o 3 citas: diagnóstico y diseño digital, preparación e impresión, mockup o prueba en resina, y entrega y cementado. No se recomienda comprimir el proceso en un viaje de 3 o 4 días, porque no da tiempo de verificar el resultado antes de fijarlo.',
  },
  {
    q: '¿Qué diferencia hay entre carillas de resina y cerámica o disilicato de litio?',
    a: 'La resina cuesta menos y es reversible, pero se desgasta y se mancha antes. La cerámica y el disilicato duran más, mantienen mejor el color con el tiempo y requieren una preparación más precisa del diente. La decisión depende de tu caso, tu presupuesto y cuánto valoras la mínima invasión frente a la máxima durabilidad.',
  },
];

const faqsEn = [
  {
    q: 'Do teeth get damaged to place veneers?',
    a: 'It depends on the type of veneer. Composite resin veneers are placed with no grinding at all and are fully reversible. Ceramic veneers require minimal enamel reduction (0.3 to 0.5 mm) under local anesthesia. In both cases we prioritize preserving as much healthy tooth as possible.',
  },
  {
    q: 'How long does a smile makeover last?',
    a: 'It depends on the material: composite resin veneers last 5 to 7 years and ceramic ones (lithium disilicate or zirconia) 10 to 15 years with proper care. Bruxism, hygiene and eating habits affect their durability.',
  },
  {
    q: 'Does a smile makeover hurt?',
    a: "It doesn't hurt. Ceramic veneer preparation is done under local anesthesia, so you feel no pain during the procedure. There may be mild, temporary sensitivity for the first few days that resolves on its own. Composite veneers require no grinding.",
  },
  {
    q: 'Can I see how my smile will look before we start?',
    a: 'Yes. With Digital Smile Design (DSD) we simulate the result on your own photos before touching a tooth, with any material. If you choose ceramic veneers, we also do a mockup: a physical in-mouth try-in so you approve the shape, size and color before the final veneers are made.',
  },
  {
    q: 'How many visits does a smile makeover take?',
    a: 'A makeover with ceramic veneers is usually completed in 3 to 4 visits: assessment and digital design (DSD), preparation and impression, try-in mockup and final bonding, with 2 to 3 days of lab fabrication. A composite makeover can be done in a single session.',
  },
  {
    q: 'Do veneers stain or change color over time?',
    a: "Ceramic veneers don't stain or change color over time, unlike natural enamel: the shade chosen in the design stays stable throughout their lifespan. Composite veneers can pick up slight staining over the years and are polished at checkups.",
  },
  {
    q: 'How much do veneers or a full smile design cost?',
    a: 'The price depends on the material, how many teeth are treated and the diagnosis, and is given in writing after your assessment. As a reference, a full arch of 10 lab-made composite veneers starts from $4,800 USD, ceramic lithium disilicate veneers start from $6,500 USD, and a single ceramic veneer starts from $550 USD.',
  },
  {
    q: 'How many days do I need to stay in Medellín for a smile design?',
    a: 'Between 4 and 7 days, over 2 to 3 visits: diagnosis and digital design, preparation and impression, the mockup or resin try-in, and final delivery and bonding. Compressing the process into a 3 or 4-day trip is not recommended, since it does not leave time to verify the result before it is set.',
  },
  {
    q: 'What is the difference between composite resin and ceramic or lithium disilicate veneers?',
    a: 'Composite resin costs less and is reversible, but it wears down and stains sooner. Ceramic and lithium disilicate last longer, hold their color better over time and require more precise tooth preparation. The choice depends on your case, your budget and how much you value minimal intervention versus maximum durability.',
  },
];

const H2 = { color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' };

const tipoIcons = [
  <svg key="ceramica" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path d="M9 4 Q8 4 8 7 L8 16 Q9 20 12 20 Q15 20 16 16 L16 7 Q16 4 15 4 Z" />
    <path d="M9 4 Q9 6 10 7 L14 7 Q15 6 15 4" strokeLinecap="round" />
  </svg>,
  <svg key="resina" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path d="M9 5 Q8 5 8 8 L8 16 Q9 20 12 20 Q15 20 16 16 L16 8 Q16 5 15 5 Z" />
    <path d="M9 5 L15 5" strokeLinecap="round" />
    <path d="M9 5 Q9 7 10 8 L14 8 Q15 7 15 5" strokeLinecap="round" strokeDasharray="1 2" />
  </svg>,
  <svg key="zirconio" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path d="M7 3 Q12 1 17 3 L18 7 Q17 11 12 12 Q7 11 6 7 Z" />
    <path d="M6 7 L6 17 Q8 21 12 21 Q16 21 18 17 L18 7" strokeLinecap="round" />
    <path d="M9 10 L9 18 M15 10 L15 18" strokeLinecap="round" strokeDasharray="1 2" />
  </svg>,
  <svg key="dsd" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M7 10 Q9 8 11 10 Q13 12 15 10 Q17 8 17 10" strokeLinecap="round" />
    <path d="M9 17 L9 20 M15 17 L15 20 M7 20 L17 20" strokeLinecap="round" />
  </svg>,
];

export default async function DisenoDeSonrisaPage({
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
    { name: t.breadcrumbHere, url: isEs ? `${BASE}/servicios/diseno-de-sonrisa` : `${BASE}/en/servicios/diseno-de-sonrisa` },
  ];

  return (
    <main style={{ backgroundColor: '#FCFBF9' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/diseno-de-sonrisa` : `${BASE}/en/servicios/diseno-de-sonrisa`,
          name: isEs ? 'Diseño de Sonrisa Medellín' : 'Smile Design Medellín',
          description: isEs ? 'Diseño de sonrisa digital con carillas cerámicas y de resina en Medellín. El Poblado.' : 'Digital smile design with ceramic and resin veneers in Medellín. El Poblado.',
          procedureName: isEs ? 'Diseño Digital de Sonrisa con Carillas' : 'Digital Smile Design with Veneers',
        }),
        medicalServiceSchema({
          name: isEs ? 'Diseño de Sonrisa Medellín' : 'Smile Design Medellín',
          description: isEs
            ? 'Diseño de sonrisa con carillas cerámicas y DSD digital en Medellín. Carillas de zirconio y resina. El Poblado.'
            : 'Smile design with ceramic veneers and digital DSD in Medellín. Zirconia and composite veneers. El Poblado.',
          url: isEs ? `${BASE}/servicios/diseno-de-sonrisa` : `${BASE}/en/servicios/diseno-de-sonrisa`,
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

      <RespuestaDirecta pregunta={t.rdPregunta} respuesta={t.rdRespuesta} />

      {/* ── QUÉ ES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection direction="right">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={H2}>
                {t.queEsH2}
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>{t.queEsP1}</p>
              <p className="text-lg leading-relaxed mt-4" style={{ color: '#5A5449' }}>{t.queEsP2}</p>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <figure className="relative aspect-[4/3] rounded-xl overflow-hidden border" style={{ borderColor: '#E8E3DA' }}>
                <Image
                  src="/images/final-diseno-ceramica-6.webp"
                  alt={t.finalPhotoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.75) 0%, transparent 45%)' }} />
                <figcaption className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>{t.finalPhotoBadge}</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#211E18' }}>{t.finalPhotoCaption}</p>
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
                    <div style={{ color: '#C9A461' }}>{tipoIcons[i]}</div>
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
                <Image src="/images/dra-carolina-laptop.webp" alt={t.laptopPhotoAlt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#211E18' }}>{t.laptopPhotoCaption}</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>{t.photoTrustEyebrow}</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={H2}>{t.photoTrustH2}</h2>
              <div className="space-y-4">
                {t.photoTrust.map((item, i) => (
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

      {/* ── VITRINA ANTES / DESPUÉS ── */}
      <BeforeAfterGallery
        locale={locale}
        cases={[...casosPorId('ceramico-arco-superior'), ...casosDisenoSonrisa]}
        eyebrow={{ es: T.es.galeriaEyebrow, en: T.en.galeriaEyebrow }}
        title={{ es: T.es.galeriaTitle, en: T.en.galeriaTitle }}
        subtitle={{ es: T.es.galeriaSubtitle, en: T.en.galeriaSubtitle }}
      />

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
            {t.infoBar.map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
              >
                <span className="text-2xl">{[<span key="clock">⏱</span>, <Icon key="sparkle" name="sparkle" />, <Icon key="calendar" name="calendar" />][i]}</span>
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
                  <h3 className="font-semibold text-base mb-3 flex items-start gap-2" style={{ color: '#E5B866' }}>
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

      {/* ── INTERNATIONAL PATIENTS BANNER ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E3DA' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Link
              href={localePath('/smile-makeover-colombia')}
              className="flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-[#C9A461]/30 p-6 hover:border-[#C9A461]/60 transition-all group"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,164,97,0.15)', border: '1px solid rgba(201,164,97,0.4)' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#C9A461"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="text-xs font-semibold tracking-widest uppercase block mb-1" style={{ color: '#C9A461' }}>
                  {t.intlEyebrow}
                </span>
                <p className="font-semibold text-base group-hover:text-[#8A6B2E] transition-colors" style={{ color: '#211E18' }}>
                  {t.intlTitle}
                </p>
                <p className="text-sm mt-1" style={{ color: '#77726A' }}>
                  {t.intlDesc}
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
                trackingLabel="diseno_sonrisa_cta"
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
