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

  Precios: no se cambió ninguno, solo se tradujeron. Los de blanqueamiento y
  carillas de resina (directa/indirecta) ya estaban publicados en esta página; la
  FAQ nueva de costo de carillas los reutiliza, no inventa cifra nueva.

  El WhatsAppLink usaba el mismo mensaje en español para las dos versiones del
  idioma: en /en el paciente escribía en inglés y el primer mensaje llegaba en
  español, rompiendo la atribución de tema. Se corrigió con waMessage/waMessageEn.
*/

const T = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
    breadcrumbHere: 'Estética Dental',
    eyebrow: 'Blanqueamiento · Carillas · Ortodoncia Invisible · Mínima Invasión',
    h1: 'Estética Dental Avanzada en Medellín',
    heroP:
      'Transforma tu sonrisa con técnicas de mínima invasión. Resultados visibles, naturales y duraderos sin cirugías ni procedimientos complejos.',
    rdPregunta: '¿Cuánto cuesta la estética dental en Medellín?',
    rdRespuesta:
      'El blanqueamiento profesional cuesta desde $1.000.000 COP (~$300 USD), con resultado visible en una sola sesión. Las carillas en resina van desde $600.000 COP (directa) o $1.500.000 COP (indirecta fresada). El plan exacto se define en tu valoración (Protocolo Sonrisa 360°, $350.000 COP). El Poblado, Medellín.',
    queEsH2: '¿Qué es la estética dental avanzada?',
    queEsP1:
      'Son tratamientos de mejora estética que transforman la apariencia de la sonrisa con técnicas de mínima invasión. Incluye blanqueamiento dental profesional con técnica combinada, carillas de resina compuesta, microdiseño de sonrisa, ortodoncia invisible con alineadores y correcciones cosméticas que no requieren cirugía ni grandes preparaciones.',
    queEsP2:
      'Es la opción ideal para quienes desean mejorar su sonrisa sin someterse a tratamientos extensos, manteniendo la estructura natural del diente al máximo y obteniendo resultados visibles y duraderos.',
    quienH2: '¿Quién necesita este tratamiento?',
    quien: [
      'Tienes dientes amarillos o manchados por café, té, vino o tabaco.',
      'Quieres mejorar tu sonrisa sin someterte a tratamientos grandes ni invasivos.',
      'Tienes pequeños espacios entre los dientes o dientes ligeramente desalineados.',
      'Tus dientes tienen bordes desgastados, asimetrías leves o irregularidades de forma.',
      'Deseas una sonrisa más blanca y luminosa para una ocasión especial.',
      'Quieres alinear tu sonrisa sin brackets ni aparatología fija.',
    ],
    tiposEyebrow: 'Modalidades disponibles',
    tiposH2: 'Tratamientos de estética dental disponibles',
    tiposP: 'Resultados visibles desde la primera cita, con técnicas que preservan al máximo tu diente natural.',
    tipos: [
      {
        badge: 'TÉCNICA COMBINADA',
        title: 'Blanqueamiento / Aclaramiento Dental',
        desc: 'Técnica combinada: sesión profesional en consultorio y cubetas personalizadas para casa. Mejores resultados a largo plazo, con control total de la sensibilidad. Sin sacrificar la salud de tus dientes.',
        highlight: '✓ Resultados duraderos · Sensibilidad controlada',
      },
      {
        badge: 'MISMO DÍA',
        title: 'Carillas de Resina Compuesta',
        desc: 'Aplicación directa de resina compuesta para corregir forma, color, tamaño o espacios. Sin desgaste dental, reversible y a un costo accesible. Resultado inmediato en la misma cita.',
        highlight: '✓ Sin desgaste · Mismo día',
      },
      {
        badge: 'MÍNIMA INVASIÓN',
        title: 'Microdiseño de Sonrisa',
        desc: 'Corrección de bordes desgastados, asimetrías leves o pequeñas irregularidades de forma mediante adición de resina o remodelación suave. Cambios pequeños con impacto visual grande.',
        highlight: '✓ Sin desgaste · Resultado inmediato',
      },
      {
        badge: 'PLANIFICACIÓN DIGITAL',
        title: 'Ortodoncia Invisible con Alineadores',
        desc: 'Movimientos dentales planificados digitalmente mediante alineadores removibles y transparentes. Corrige la posición de los dientes, alinea la sonrisa y mejora la oclusión, sin brackets ni alambres.',
        highlight: '✓ Invisible · Cómodo · Removible',
      },
    ],
    photoTrustEyebrow: '¿Por qué elegirnos?',
    photoTrustH2: 'Resultados visibles desde la primera cita',
    photoTrust: [
      { icon: 'sparkle', title: 'Técnicas de mínima invasión', desc: 'Priorizamos preservar el máximo tejido dental sano. La mínima intervención para el máximo resultado estético.' },
      { icon: 'palette', title: 'Guía de color profesional', desc: 'Análisis de color con guía Vita para seleccionar el tono más natural y apropiado para tu piel y tu personalidad.' },
      { icon: 'bolt', title: 'Resultados el mismo día', desc: 'Blanqueamiento, carillas de resina y contorneados pueden completarse en una sola cita.' },
      { icon: 'refresh', title: 'Mantenimiento incluido', desc: 'Instrucciones personalizadas y kit de mantenimiento para prolongar al máximo los resultados obtenidos.' },
    ],
    galeriaEyebrow: 'Casos reales',
    galeriaTitle: 'Estética dental antes y después',
    galeriaSubtitle: 'Pacientes reales del consultorio. Carillas cerámicas y en resina para recuperar el color, la forma y la armonía de la sonrisa.',
    procesoH2: 'El proceso paso a paso',
    proceso: [
      { step: '01', title: 'Evaluación del color y estado dental', desc: 'Análisis del tono actual de los dientes, evaluación de manchas intrínsecas y extrínsecas y selección del tratamiento más adecuado.' },
      { step: '02', title: 'Limpieza profunda previa', desc: 'Profilaxis dental para eliminar sarro y manchas superficiales antes de iniciar el tratamiento estético. Garantiza mejores resultados.' },
      { step: '03', title: 'Aplicación del tratamiento elegido', desc: 'Sesión de blanqueamiento combinado, aplicación de carillas de resina, microdiseño de sonrisa u ortodoncia invisible, según el plan acordado.' },
      { step: '04', title: 'Verificación del resultado', desc: 'Comparación del color final con el inicial, ajuste de pequeños detalles y pulido de las restauraciones si es necesario.' },
      { step: '05', title: 'Instrucciones de mantenimiento en casa', desc: 'Pautas personalizadas para prolongar el resultado: kit de mantenimiento, hábitos recomendados y fecha del próximo control.' },
    ],
    infoBar: [
      { label: 'Duración del proceso', value: '1 – 3 sesiones' },
      { label: 'Precio desde', value: '$700.000 COP' },
      { label: 'Número de citas', value: '1 – 4 citas' },
    ],
    faqH2: 'Preguntas frecuentes',
    guideEyebrow: 'Guía Completa',
    guideTitle: 'Coronas de Zirconio y Carillas en Colombia, precios y comparativa',
    guideDesc: 'Todo lo que necesitas saber antes de decidir: materiales, durabilidad, costos reales.',
    ctaH2: 'Una sonrisa más luminosa te espera',
    ctaP: 'Los resultados estéticos pueden comenzar en tu primera visita. Escríbenos y cuéntanos qué te gustaría mejorar.',
    ctaWa: 'Escribir por WhatsApp',
    ctaContact: 'Ver página de contacto',
    waMessage: 'Hola, leí la página de estética dental. Me gustaría una valoración de mi caso.',
    heroPhotoAlt: 'Estética dental avanzada, blanqueamiento y carillas, Dra. Carolina Macareno, Medellín',
    heroPhotoCaption: 'Estética · Mínima invasión · Resultados inmediatos',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    breadcrumbHere: 'Aesthetic Dentistry',
    eyebrow: 'Whitening · Veneers · Invisible Orthodontics · Minimal Intervention',
    h1: 'Advanced Cosmetic Dentistry in Medellín',
    heroP:
      'Transform your smile with minimally invasive techniques. Visible, natural and long-lasting results, with no surgery or complex procedures.',
    rdPregunta: 'How much does cosmetic dentistry cost in Medellín?',
    rdRespuesta:
      'Professional teeth whitening starts at $300 USD (about $1,000,000 COP), with visible results in a single session. Composite veneers start from $600,000 COP (direct) or $1,500,000 COP (milled indirect). Your exact plan is set at your assessment (Smile 360° Protocol, $350,000 COP). El Poblado, Medellín.',
    queEsH2: 'What is advanced cosmetic dentistry?',
    queEsP1:
      'These are esthetic treatments that transform the look of your smile using minimally invasive techniques. They include professional teeth whitening with a combined technique, composite resin veneers, smile micro-design, invisible orthodontics with clear aligners, and cosmetic corrections that need no surgery or extensive preparation.',
    queEsP2:
      'It is the ideal option for anyone who wants to improve their smile without going through extensive treatments, keeping as much of the tooth\'s natural structure as possible while getting visible, long-lasting results.',
    quienH2: 'Who needs this treatment?',
    quien: [
      'Your teeth are yellow or stained from coffee, tea, wine or tobacco.',
      'You want to improve your smile without a large or invasive treatment.',
      'You have small gaps between your teeth or teeth that are slightly out of alignment.',
      'Your teeth have worn edges, mild asymmetries or minor irregularities in shape.',
      'You want a whiter, brighter smile for a special occasion.',
      'You want to align your smile without braces or fixed appliances.',
    ],
    tiposEyebrow: 'Available options',
    tiposH2: 'Cosmetic dentistry treatments available',
    tiposP: 'Visible results from your very first visit, with techniques that preserve as much of your natural tooth as possible.',
    tipos: [
      {
        badge: 'COMBINED TECHNIQUE',
        title: 'Teeth Whitening',
        desc: 'A combined technique: an in-office professional session plus custom trays for home use. Better long-term results, with full control of sensitivity, without sacrificing the health of your teeth.',
        highlight: '✓ Long-lasting results · Controlled sensitivity',
      },
      {
        badge: 'SAME DAY',
        title: 'Composite Resin Veneers',
        desc: 'Composite resin applied directly to correct shape, color, size or gaps. No tooth reduction, reversible and affordable. Immediate result in the same visit.',
        highlight: '✓ No tooth reduction · Same day',
      },
      {
        badge: 'MINIMALLY INVASIVE',
        title: 'Smile Micro-Design',
        desc: 'Correction of worn edges, mild asymmetries or small shape irregularities by adding resin or gentle reshaping. Small changes with a big visual impact.',
        highlight: '✓ No tooth reduction · Immediate result',
      },
      {
        badge: 'DIGITAL PLANNING',
        title: 'Invisible Orthodontics with Aligners',
        desc: 'Tooth movements planned digitally with removable, clear aligners. Corrects tooth position, aligns your smile and improves your bite, with no braces or wires.',
        highlight: '✓ Invisible · Comfortable · Removable',
      },
    ],
    photoTrustEyebrow: 'Why choose us?',
    photoTrustH2: 'Visible results from your very first visit',
    photoTrust: [
      { icon: 'sparkle', title: 'Minimally invasive techniques', desc: 'We prioritize preserving as much healthy tooth structure as possible. Minimal intervention for the greatest esthetic result.' },
      { icon: 'palette', title: 'Professional color matching', desc: 'Color analysis with a Vita guide to choose the shade that looks most natural for your skin tone and personality.' },
      { icon: 'bolt', title: 'Same-day results', desc: 'Whitening, composite veneers and contouring can all be completed in a single visit.' },
      { icon: 'refresh', title: 'Maintenance included', desc: 'Personalized instructions and a maintenance kit to make your results last as long as possible.' },
    ],
    galeriaEyebrow: 'Real cases',
    galeriaTitle: 'Cosmetic dentistry before and after',
    galeriaSubtitle: 'Real patients from the clinic. Ceramic and composite veneers to restore the color, shape and harmony of the smile.',
    procesoH2: 'The process, step by step',
    proceso: [
      { step: '01', title: 'Color and dental condition evaluation', desc: 'Analysis of the current tooth shade, evaluation of intrinsic and extrinsic stains, and selection of the most suitable treatment.' },
      { step: '02', title: 'Deep cleaning first', desc: 'Dental prophylaxis to remove tartar and surface stains before starting the esthetic treatment. It guarantees better results.' },
      { step: '03', title: 'Applying the chosen treatment', desc: 'A combined whitening session, composite veneer placement, smile micro-design or invisible orthodontics, according to the agreed plan.' },
      { step: '04', title: 'Checking the result', desc: 'Comparing the final color with the starting one, adjusting small details and polishing the restorations if needed.' },
      { step: '05', title: 'At-home maintenance instructions', desc: 'Personalized guidelines to make the result last: a maintenance kit, recommended habits and the date of your next check-up.' },
    ],
    infoBar: [
      { label: 'Process length', value: '1 – 3 sessions' },
      { label: 'Price from', value: '$700,000 COP' },
      { label: 'Appointments', value: '1 – 4 visits' },
    ],
    faqH2: 'Frequently asked questions',
    guideEyebrow: 'Full Guide',
    guideTitle: 'Zirconia Crowns & Veneers in Colombia, prices and comparison',
    guideDesc: 'Everything you need to know before deciding: materials, durability, real costs.',
    ctaH2: 'A brighter smile is waiting for you',
    ctaP: 'Esthetic results can start from your first visit. Write to us and tell us what you would like to improve.',
    ctaWa: 'Message on WhatsApp',
    ctaContact: 'Go to contact page',
    waMessage: 'Hello, I read the cosmetic dentistry page. I would like an evaluation of my case.',
    heroPhotoAlt: 'Advanced cosmetic dentistry, whitening and veneers, Dr. Carolina Macareno, Medellín',
    heroPhotoCaption: 'Esthetics · Minimal intervention · Immediate results',
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
  const slug = 'estetica-dental';

  return {
    title: isEs
      ? 'Estética Dental en Medellín | Blanqueamiento y Carillas'
      : 'Cosmetic Dentistry in Medellín | Whitening and Veneers',
    description: isEs
      ? 'Estética dental en Medellín: blanqueamiento profesional y carillas de resina sin desgaste dental, con resultados visibles desde la primera sesión.'
      : 'Cosmetic dentistry in Medellín: professional teeth whitening and no-prep composite veneers, with visible results from your very first appointment.',
    keywords: isEs
      ? [
          'estética dental Medellín',
          'blanqueamiento dental Medellín',
          'blanqueamiento profesional',
          'carillas de resina Medellín',
          'cierre de diastemas',
          'sonrisa blanca Medellín',
          'limpieza dental profesional',
          'contorneado dental',
          'estética dental El Poblado',
          'Dra. Carolina Macareno',
          'blanqueamiento dental Colombia',
        ]
      : [
          'dental aesthetics Medellin',
          'teeth whitening Medellin',
          'professional whitening Colombia',
          'composite veneers Medellin',
          'diastema closure',
          'El Poblado dental whitening',
        ],
    openGraph: {
      title: isEs
        ? 'Estética Dental Medellín | Dra. Carolina Macareno'
        : 'Dental Aesthetics Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Blanqueamiento profesional y carillas de resina en El Poblado, Medellín. Resultados visibles desde la primera sesión.'
        : 'Professional whitening and composite veneers in El Poblado, Medellín. Visible results from the first session.',
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
    q: '¿Cuánto dura el blanqueamiento dental?',
    a: 'El resultado del blanqueamiento profesional dura entre 12 y 18 meses con un mantenimiento adecuado (evitar exceso de café, vino tinto y tabaco). Se puede prolongar con aplicaciones de mantenimiento en casa con cubetas personalizadas.',
  },
  {
    q: '¿El blanqueamiento dental duele o genera sensibilidad?',
    a: 'No duele. Es normal una sensibilidad leve a moderada durante las primeras 24 a 48 horas; es temporal y se maneja con dentífrico desensibilizante. El protocolo incluye aplicación de flúor al finalizar para minimizarla.',
  },
  {
    q: '¿Las carillas de resina duran igual que las cerámicas?',
    a: 'No. Las carillas de resina compuesta duran de 5 a 7 años y las cerámicas de 10 a 15 años. A cambio, las de resina no requieren desgaste dental, son reversibles y tienen un costo significativamente menor.',
  },
  {
    q: '¿Cuánto cuesta el blanqueamiento dental en Medellín?',
    a: 'El blanqueamiento profesional cuesta desde $1.000.000 COP (~$300 USD) y el resultado es visible en una sola sesión de unos 45 minutos. Se realiza con técnica combinada (consultorio + cubetas para casa) para un efecto más duradero.',
  },
  {
    q: '¿Las carillas de resina dañan o desgastan los dientes?',
    a: 'No. Las carillas de resina compuesta se aplican directamente sobre el diente sin desgaste del esmalte y son completamente reversibles. Por eso son una de las opciones más conservadoras para mejorar forma, color o cerrar pequeños espacios.',
  },
  {
    q: '¿El blanqueamiento aclara las resinas, carillas o coronas?',
    a: 'No. El blanqueamiento solo aclara el esmalte natural; no cambia el color de resinas, carillas ni coronas. Si tienes restauraciones visibles, se evalúa el orden del tratamiento para que el color final sea uniforme.',
  },
  {
    q: '¿Es un proceso realmente sin desgaste (prepless)?',
    a: 'No es 100% prepless: las carillas de resina directa no requieren ningún desgaste, pero cuando hace falta un microtallado mínimo, de alrededor de 0,3 mm, es para que el resultado no se vea artificial ni sobrecontorneado. Se explica caso por caso en la valoración.',
  },
  {
    q: '¿Hacen un mock-up o diseño digital antes de decidir forma y color?',
    a: 'Sí. Se hace con fotos tuyas de referencia y se envía para tu aprobación antes de cualquier preparación física, así decides la forma y el color con el resultado ya visible.',
  },
  {
    q: '¿Cuánto cuestan las carillas de resina en Medellín?',
    a: 'Las carillas de resina directa, aplicadas en boca en la misma cita, cuestan desde $600.000 COP. Las indirectas, fresadas en laboratorio con un mejor acabado, cuestan desde $1.500.000 COP. El valor exacto depende del número de dientes y se entrega por escrito en la valoración.',
  },
];

const faqsEn = [
  {
    q: 'How long does teeth whitening last?',
    a: 'Professional teeth whitening lasts 12 to 18 months with proper maintenance (limiting coffee, red wine and tobacco). It can be extended with at-home maintenance using custom trays.',
  },
  {
    q: 'Does teeth whitening hurt or cause sensitivity?',
    a: "It doesn't hurt. Mild to moderate sensitivity during the first 24 to 48 hours is normal, temporary and managed with desensitizing toothpaste. The protocol includes a final fluoride application to minimize it.",
  },
  {
    q: 'Do composite veneers last as long as ceramic ones?',
    a: 'No. Composite resin veneers last 5 to 7 years and ceramic ones 10 to 15 years. In exchange, composite veneers require no tooth grinding, are reversible and cost significantly less.',
  },
  {
    q: 'How much does teeth whitening cost in Medellín?',
    a: 'Professional teeth whitening starts at $1,000,000 COP (~$300 USD), with visible results in a single ~45-minute session. It uses a combined technique (in-office + at-home trays) for a longer-lasting effect.',
  },
  {
    q: 'Do composite veneers damage or grind down your teeth?',
    a: 'No. Composite resin veneers are applied directly onto the tooth with no enamel grinding and are fully reversible. That makes them one of the most conservative options to improve shape, color or close small gaps.',
  },
  {
    q: 'Does whitening lighten resins, veneers or crowns?',
    a: 'No. Whitening only lightens natural enamel; it does not change the color of resins, veneers or crowns. If you have visible restorations, we plan the treatment order so the final color is uniform.',
  },
  {
    q: 'Is this really a no-prep process?',
    a: 'It is not 100% no-prep: direct composite veneers require no tooth reduction at all, but when a minimal reduction of around 0.3 mm is needed, it is so the result does not look artificial or overbuilt. This is explained case by case at your assessment.',
  },
  {
    q: 'Do you do a mock-up or digital design before I decide on shape and color?',
    a: 'Yes. It is done with reference photos of your own smile and sent for your approval before any physical preparation, so you decide on shape and color with the result already visible.',
  },
  {
    q: 'How much do composite veneers cost in Medellín?',
    a: 'Direct composite veneers, applied chairside in the same visit, start from $600,000 COP. Indirect ones, milled in a lab for a finer finish, start from $1,500,000 COP. The exact price depends on the number of teeth and is given in writing at your assessment.',
  },
];

const H2 = { color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' };

const tipoIcons = [
  <svg key="blanqueamiento" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <circle cx="12" cy="13" r="4" />
    <path d="M12 2v2M12 7v2M4.22 4.22l1.42 1.42M7.05 7.05l1.42 1.42M2 13h2M7 13h2M19.78 4.22l-1.42 1.42M16.95 7.05l-1.42 1.42M22 13h-2M17 13h-2" strokeLinecap="round" />
  </svg>,
  <svg key="carillas-resina" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path d="M9 4 Q8 4 8 7 L8 16 Q9 20 12 20 Q15 20 16 16 L16 7 Q16 4 15 4 Z" />
    <path d="M9 4 L15 4" strokeLinecap="round" />
    <path d="M8 10 Q10 8 12 10 Q14 12 16 10" strokeLinecap="round" strokeDasharray="1 1.5" />
  </svg>,
  <svg key="microdiseno" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path d="M9 5 Q8 5 8 8 L8 15 Q9 19 12 19 Q15 19 16 15 L16 8 Q16 5 15 5 Z" />
    <path d="M10 5 Q10 7 12 7 Q14 7 14 5" strokeLinecap="round" />
    <path d="M18 8 Q21 10 20 13 Q19 16 17 15" strokeLinecap="round" />
    <path d="M19 10 L21 9" strokeLinecap="round" />
  </svg>,
  <svg key="ortodoncia" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path d="M4 6 Q4 4 7 4 Q9 4 10 6 L10 17 Q9 21 7 21 Q5 21 4 17 Z" />
    <path d="M14 6 Q14 4 17 4 Q19 4 20 6 L20 17 Q19 21 17 21 Q15 21 14 17 Z" />
    <path d="M10 12 Q12 10 14 12" strokeLinecap="round" />
    <path d="M11 7 Q12 6 13 7" strokeLinecap="round" strokeDasharray="1 1" />
  </svg>,
];

export default async function EsteticaDentalPage({
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
    { name: t.breadcrumbHere, url: isEs ? `${BASE}/servicios/estetica-dental` : `${BASE}/en/servicios/estetica-dental` },
  ];

  return (
    <main style={{ backgroundColor: '#FCFBF9' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/estetica-dental` : `${BASE}/en/servicios/estetica-dental`,
          name: isEs ? 'Estética Dental Medellín' : 'Aesthetic Dentistry Medellín',
          description: isEs ? 'Blanqueamiento dental profesional y carillas de resina en Medellín. Resultados en 1 sesión.' : 'Professional teeth whitening and resin veneers in Medellín. Same-session results.',
          procedureName: isEs ? 'Blanqueamiento Dental y Carillas de Resina' : 'Teeth Whitening and Resin Veneers',
        }),
        medicalServiceSchema({
          name: isEs ? 'Estética Dental Medellín' : 'Aesthetic Dentistry Medellín',
          description: isEs
            ? 'Blanqueamiento dental profesional y carillas de resina en Medellín. Resultados en 1 sesión. El Poblado.'
            : 'Professional teeth whitening and composite veneers in Medellín. Same-session results. El Poblado.',
          url: isEs ? `${BASE}/servicios/estetica-dental` : `${BASE}/en/servicios/estetica-dental`,
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
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={H2}
            >
              {t.queEsH2}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#5A5449' }}>{t.queEsP1}</p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#5A5449' }}>{t.queEsP2}</p>
          </AnimatedSection>
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
                <Image src="/images/dra-carolina-perfil.webp" alt={t.heroPhotoAlt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#211E18' }}>{t.heroPhotoCaption}</p>
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
        cases={[...casosPorId('alineadores-resina'), ...casosDisenoSonrisa]}
        eyebrow={{ es: T.es.galeriaEyebrow, en: T.en.galeriaEyebrow }}
        title={{ es: T.es.galeriaTitle, en: T.en.galeriaTitle }}
        subtitle={{ es: T.es.galeriaSubtitle, en: T.en.galeriaSubtitle }}
      />

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
                <span className="text-2xl">{[<span key="clock">⏱</span>, <Icon key="money" name="money" />, <Icon key="calendar" name="calendar" />][i]}</span>
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

      {/* ── CORONAS Y CARILLAS LANDING BANNER ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E3DA' }}>
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
                  {t.guideEyebrow}
                </span>
                <p className="font-semibold text-base group-hover:text-[#8A6B2E] transition-colors" style={{ color: '#211E18' }}>
                  {t.guideTitle}
                </p>
                <p className="text-sm mt-1" style={{ color: '#77726A' }}>
                  {t.guideDesc}
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
                trackingLabel="estetica_dental_cta"
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
