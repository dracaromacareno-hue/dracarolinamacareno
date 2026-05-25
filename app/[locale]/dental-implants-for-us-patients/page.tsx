import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SchemaOrg, {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  medicalServiceSchema,
  medicalWebPageSchema,
} from '@/components/SchemaOrg';
import SavingsCalculator from '@/components/SavingsCalculator';
import TravelCostsSection from '@/components/TravelCostsSection';
import WhatsAppLink from '@/components/WhatsAppLink';

const BASE = 'https://dracarolinamacareno.com';
const WA_NUMBER = '573163975232';

/**
 * International dental tourism landing — bilingual ES + EN.
 *
 * Lives at:
 *  - /dental-implants-for-us-patients (Spanish content)
 *  - /en/dental-implants-for-us-patients (English content)
 *
 * Audience: international patients traveling to Medellín for dental work.
 * Primary market: USA (GA4 May 2026: 13 users/week, +225% MoM).
 * Secondary markets: Canada, Panama, Dominican Republic, Spain — many of whose
 * residents are Spanish-speaking. That's why the page must be fully bilingual:
 * roughly half the addressable audience would bounce on an English-only page.
 *
 * Strategy:
 *  - Address objections of each origin country
 *  - Quantify savings with interactive calculator (SavingsCalculator.tsx)
 *  - Address travel/logistics fear with HowTo schema 6-step trip plan
 *  - Triple proof: 17 yrs + 3,500 patients + 5.0 rating
 *  - Direct WhatsApp CTA from every section with locale-aware prefilled message
 *
 * Canonical strategy: each locale is its own canonical (no language collapse).
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const canonical = isEs
    ? `${BASE}/dental-implants-for-us-patients`
    : `${BASE}/en/dental-implants-for-us-patients`;

  return {
    title: isEs
      ? 'Implantes Medellín para USA, Canadá y España | Ahorra $10K-$40K USD'
      : 'Dental Implants for US Patients | Save $10K-$40K in Medellín 2026',
    description: isEs
      ? 'Pacientes USA, Canadá, Panamá y España ahorran $10K-$40K en implantes y All-on-4 en Medellín. Materiales Straumann/Neodent, atención bilingüe. Valoración virtual gratis.'
      : 'Premium dental implants in Medellín. Save $10K-$40K vs US premium clinics. 17 yrs specialist, 3,500+ patients. Free virtual consultation, US-friendly bilingual clinic.',
    keywords: isEs
      ? [
          'implantes dentales para pacientes USA',
          'implantes dentales Colombia',
          'all on 4 Colombia para latinos en USA',
          'turismo dental Medellín',
          'implantes dentales para canadienses',
          'implantes dentales para panameños',
          'implantes dentales para dominicanos',
          'dentista hispano Medellín',
          'odontólogo bilingüe Colombia',
          'implantes cigomáticos Colombia',
        ]
      : [
          'dental implants for US patients',
          'dental implants Colombia',
          'all on 4 Colombia for Americans',
          'dental tourism Medellín',
          'dental implants for Canadians',
          'dental implants for Panamanians',
          'dental implants for Dominicans',
          'ClearChoice alternative Colombia',
          'best dentist Medellín English speaking',
          'zygomatic implants Colombia',
        ],
    alternates: {
      canonical,
      languages: {
        es: `${BASE}/dental-implants-for-us-patients`,
        en: `${BASE}/en/dental-implants-for-us-patients`,
      },
    },
    openGraph: {
      title: isEs
        ? 'Implantes Medellín para Pacientes USA | Ahorra $10K-$40K USD'
        : 'Dental Implants in Medellín for US Patients | Save $10K-$40K 2026',
      description: isEs
        ? 'Ahorra $10K-$40K en implantes y All-on-4 en Medellín. Materiales premium, atención bilingüe. Valoración virtual gratis antes de viajar.'
        : 'Save $10K-$40K vs US premium clinics. Premium dental implants in Medellín. 17 yrs specialist. Free virtual consultation before booking flights.',
      url: canonical,
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs
        ? 'Implantes para Pacientes Internacionales | Ahorra 60-70% en Medellín'
        : 'Dental Implants for International Patients | Save 60-70% in Medellín',
      description: isEs
        ? 'Mismos materiales, atención bilingüe, videoconsulta gratis. Dra. Carolina Macareno, 17+ años de experiencia.'
        : 'Same materials, bilingual care, free virtual consult. Dr. Carolina Macareno, 17+ years experience.',
    },
  };
}

const FAQS_EN = [
  {
    question: 'Is dental work in Colombia safe for international patients?',
    answer:
      'Yes. Dr. Carolina Macareno operates a private practice in El Poblado, Medellín, using FDA-approved materials and the same implant brands used in the US, Canada and Europe (Straumann, Neodent, DioImplant). She has treated 3,500+ patients including over 40% from outside Colombia, with a 5.0 average rating across verified review platforms.',
  },
  {
    question: 'How much can I really save vs treatment in the United States or Canada?',
    answer:
      'Typical savings are 60-70%. A single implant runs $4,500-$6,000 in the US (per Aspen Dental and NewMouth 2025 surveys) vs $1,800-$2,400 with Dr. Carolina. An All-on-4 full arch is $25,000-$50,000 at ClearChoice vs $12,000-$16,000 in Medellín — a savings of $10,000-$40,000 even after counting flights and hotel. Canadian patients save similar percentages since dental is rarely covered by provincial health plans.',
  },
  {
    question: 'How long do I need to stay in Medellín?',
    answer:
      'For single implants: typically 5-7 days (one visit). For All-on-4: usually two trips — Trip 1 (7-10 days) for surgery and provisional teeth; Trip 2 (5-7 days) about 4 months later for the definitive prosthetic. For veneers and smile design: 7-10 days total. Pre-visit planning is done by video so the in-clinic time is minimized.',
  },
  {
    question: 'Does Dr. Carolina speak English and Spanish?',
    answer:
      'Yes — Dr. Carolina is fully bilingual. She speaks fluent English (trained at New York University in dental aesthetics) and is a native Spanish speaker. All consultations, treatment planning, written quotes, and post-op instructions are in your preferred language. Her chairside team also speaks both languages.',
  },
  {
    question: 'What if I have severe bone loss and was told I cannot have implants?',
    answer:
      'Dr. Carolina is one of the few specialists in Colombia certified in zygomatic implants and subperiosteal implants — both designed specifically for patients with severe maxillary bone atrophy. Patients told "you have no bone, you cannot have implants" routinely receive treatment here.',
  },
  {
    question: 'Can I have a consultation before flying?',
    answer:
      "Yes. Every international patient gets a free 30-minute video consultation. You'll send a panoramic X-ray and intraoral photos (your local dentist can take these), and Dr. Carolina will review your case, propose a treatment plan, and send a written quote — all before you book the trip. Zero risk to evaluate.",
  },
  {
    question: 'What flights connect to Medellín from my country?',
    answer:
      'Medellín has direct flights from Miami (3h), Atlanta (5h), Fort Lauderdale (4h), New York (6h), Houston (5h), Los Angeles (8h), Toronto and Montreal (6-7h via Bogotá), Panama City (1.5h direct), and Santo Domingo (3.5h direct). The practice coordinates with vetted hotels and apartments in El Poblado within 5-10 min walking distance of the clinic.',
  },
  {
    question: 'What if something goes wrong after I fly home?',
    answer:
      'Dr. Carolina provides written warranties on implants and prosthetic work. Follow-ups are by video. If you need an in-person visit, return flights to Medellín are often cheaper than a single dental visit in your home country. Local emergency support in major US, Canadian, Panamanian and Dominican cities is also available through her network.',
  },
];

const FAQS_ES = [
  {
    question: '¿Es seguro hacerme tratamientos dentales en Colombia siendo paciente internacional?',
    answer:
      'Sí. La Dra. Carolina Macareno tiene su consultorio privado en El Poblado, Medellín, y utiliza materiales aprobados por la FDA y las mismas marcas de implantes que se usan en USA, Canadá y Europa (Straumann, Neodent, DioImplant). Ha tratado a más de 3.500 pacientes, de los cuales más del 40% son internacionales, con una calificación promedio de 5.0 en plataformas verificadas.',
  },
  {
    question: '¿Cuánto ahorro realmente vs. tratarme en Estados Unidos o Canadá?',
    answer:
      'Los ahorros típicos son del 60-70%. Un implante individual cuesta $4,500-$6,000 en USA (según encuestas Aspen Dental y NewMouth 2025) vs. $1,800-$2,400 con la Dra. Carolina. Un All-on-4 completo cuesta $25,000-$50,000 en ClearChoice vs. $12,000-$16,000 en Medellín — un ahorro de $10,000-$40,000 incluso después de contar vuelos y hospedaje. Los pacientes canadienses ahorran porcentajes similares, ya que los seguros provinciales raramente cubren odontología.',
  },
  {
    question: '¿Cuánto tiempo tengo que quedarme en Medellín?',
    answer:
      'Para implantes individuales: típicamente 5-7 días (una sola visita). Para All-on-4: usualmente dos viajes — Viaje 1 (7-10 días) para cirugía y prótesis provisional; Viaje 2 (5-7 días) unos 4 meses después para la prótesis definitiva. Para carillas y diseño de sonrisa: 7-10 días en total. La planificación previa se hace por video, así minimizamos tu tiempo en consultorio.',
  },
  {
    question: '¿La Dra. Carolina habla inglés y español?',
    answer:
      'Sí — la Dra. Carolina es totalmente bilingüe. Habla inglés fluido (se formó en estética dental en New York University) y es hablante nativa de español. Todas las consultas, planes de tratamiento, presupuestos escritos y cuidados post-operatorios se hacen en tu idioma preferido. Su equipo en clínica también habla ambos idiomas.',
  },
  {
    question: '¿Y si tengo pérdida ósea severa y me dijeron que no puedo tener implantes?',
    answer:
      'La Dra. Carolina es una de las pocas especialistas en Colombia certificadas en implantes cigomáticos e implantes subperiósticos — ambos diseñados específicamente para pacientes con atrofia maxilar severa. Pacientes que en otros países escucharon "no tienes hueso, no puedes tener implantes" rutinariamente reciben tratamiento aquí.',
  },
  {
    question: '¿Puedo tener una consulta antes de viajar?',
    answer:
      'Sí. Cada paciente internacional recibe una videoconsulta de 30 minutos GRATIS. Envías tu radiografía panorámica y fotos intraorales (tu odontólogo local las puede tomar), y la Dra. Carolina revisa tu caso, propone un plan de tratamiento y envía un presupuesto por escrito — todo antes de que reserves el viaje. Cero riesgo al evaluar.',
  },
  {
    question: '¿Qué vuelos conectan a Medellín desde mi país?',
    answer:
      'Medellín tiene vuelos directos desde Miami (3h), Atlanta (5h), Fort Lauderdale (4h), Nueva York (6h), Houston (5h), Los Ángeles (8h), Toronto y Montreal (6-7h vía Bogotá), Ciudad de Panamá (1.5h directo) y Santo Domingo (3.5h directo). El consultorio coordina con hoteles y apartamentos confiables en El Poblado a 5-10 min caminando de la clínica.',
  },
  {
    question: '¿Y si algo sale mal después de regresar a mi país?',
    answer:
      'La Dra. Carolina ofrece garantías escritas sobre implantes y trabajo protésico. Los seguimientos se hacen por video. Si necesitas una visita presencial, los vuelos de regreso a Medellín suelen ser más baratos que una sola visita dental en tu país. También hay apoyo de emergencia local en las principales ciudades de USA, Canadá, Panamá y República Dominicana a través de su red de especialistas.',
  },
];

const TRIP_STEPS_EN = [
  {
    name: '1. Free virtual consultation',
    text: 'Send X-rays + photos. Dr. Carolina reviews your case in a 30-min video call and sends a written treatment plan with exact pricing.',
  },
  {
    name: '2. Book your trip',
    text: 'Book your flight to Medellín (MDE) and your hotel near El Poblado. The practice can recommend hotels and apartments within 5-10 min walking.',
  },
  {
    name: '3. Day 1 in Medellín — In-person evaluation',
    text: 'Full digital scan, panoramic X-ray, CBCT if needed, and final treatment confirmation. Same-day procedure starts if it is a single-visit case.',
  },
  {
    name: '4. Treatment phase',
    text: 'Implant surgery is typically 60-120 min. Veneers take 2-3 visits across 5-7 days. All-on-4 includes surgery + provisional teeth same day.',
  },
  {
    name: '5. Recovery in Medellín',
    text: 'Stay 2-5 days for post-op checks. Medellín is one of the best cities in Latin America to recover — perfect weather year-round, world-class restaurants, walkable neighborhoods.',
  },
  {
    name: '6. Fly home with follow-up by video',
    text: 'Dr. Carolina follows up by WhatsApp + video monthly for the next 6 months. For All-on-4, a second trip 3-4 months later finalizes the definitive prosthetic.',
  },
];

const TRIP_STEPS_ES = [
  {
    name: '1. Videoconsulta inicial gratis',
    text: 'Envías radiografías y fotos. La Dra. Carolina revisa tu caso en una videollamada de 30 min y te envía un plan de tratamiento por escrito con precios exactos.',
  },
  {
    name: '2. Reserva tu viaje',
    text: 'Reserva tu vuelo a Medellín (MDE) y tu hotel cerca de El Poblado. El consultorio recomienda hoteles y apartamentos a 5-10 min caminando.',
  },
  {
    name: '3. Día 1 en Medellín — Evaluación presencial',
    text: 'Escaneo digital completo, radiografía panorámica, CBCT si es necesario y confirmación final del tratamiento. Si es un caso de una sola visita, el procedimiento puede empezar el mismo día.',
  },
  {
    name: '4. Fase de tratamiento',
    text: 'La cirugía de implantes dura típicamente 60-120 min. Las carillas requieren 2-3 visitas en 5-7 días. All-on-4 incluye cirugía + dientes provisionales el mismo día.',
  },
  {
    name: '5. Recuperación en Medellín',
    text: 'Quédate 2-5 días para los controles post-operatorios. Medellín es una de las mejores ciudades de Latinoamérica para recuperarte — clima perfecto todo el año, restaurantes de clase mundial y barrios caminables.',
  },
  {
    name: '6. Regreso a casa con seguimiento por video',
    text: 'La Dra. Carolina hace seguimiento por WhatsApp + video mensual durante los siguientes 6 meses. Para All-on-4, un segundo viaje 3-4 meses después finaliza la prótesis definitiva.',
  },
];

const WHY_CARDS_EN = [
  { icon: '💵', title: 'Real savings, not low quality', text: 'Same Straumann, Neodent and Nobel-equivalent implants used in the US — at a third of the price. The savings come from the cost of living in Colombia, not from cutting corners.' },
  { icon: '🩺', title: 'Specialist, not a chain', text: 'Dr. Carolina is a board-certified oral rehabilitation specialist — 17 years, 3,500 patients, NYU-trained in aesthetics. Not a high-volume dental chain.' },
  { icon: '✈️', title: 'Direct flights from major cities', text: 'Medellín is 3-7h from Miami, Atlanta, NYC, Toronto, Houston, LA, Panama City, Santo Domingo. Combine the treatment with the city Anthony Bourdain called one of his favorites in the Americas.' },
  { icon: '🗣️', title: 'Bilingual care, end to end', text: 'Every consultation, treatment plan, and follow-up is bilingual in English and Spanish. Your written quote, your post-op instructions, your insurance receipts — all in your preferred language.' },
  { icon: '🔬', title: 'Same materials & technology', text: 'CBCT 3D imaging, digital smile design, CAD/CAM milled zirconia, guided implant surgery. Same protocols as top clinics in the US, Canada and Europe.' },
  { icon: '🤝', title: 'Honest pricing, written upfront', text: 'You receive a written quote in USD before you fly. No surprise add-ons. No "we found something" mid-treatment. Transparent, fixed pricing.' },
];

const WHY_CARDS_ES = [
  { icon: '💵', title: 'Ahorro real, sin sacrificar calidad', text: 'Mismos implantes Straumann, Neodent y equivalentes a Nobel que se usan en USA — a un tercio del precio. El ahorro viene del costo de vida en Colombia, no de tomar atajos.' },
  { icon: '🩺', title: 'Especialista, no una cadena', text: 'La Dra. Carolina es especialista certificada en rehabilitación oral — 17 años, 3.500 pacientes, formación en estética en NYU. No es una cadena dental de alto volumen.' },
  { icon: '✈️', title: 'Vuelos directos desde las principales ciudades', text: 'Medellín está a 3-7h de Miami, Atlanta, Nueva York, Toronto, Houston, LA, Ciudad de Panamá, Santo Domingo. Combina tu tratamiento con la ciudad que Anthony Bourdain llamó una de sus favoritas en América.' },
  { icon: '🗣️', title: 'Atención bilingüe, de principio a fin', text: 'Cada consulta, plan de tratamiento y seguimiento se hace en inglés y español. Tu presupuesto escrito, tus indicaciones post-operatorias, tus comprobantes — todo en tu idioma preferido.' },
  { icon: '🔬', title: 'Mismos materiales y tecnología', text: 'Imagenología 3D CBCT, diseño digital de sonrisa, zirconio fresado CAD/CAM, cirugía guiada de implantes. Mismos protocolos que las mejores clínicas de USA, Canadá y Europa.' },
  { icon: '🤝', title: 'Precio honesto, escrito desde el principio', text: 'Recibes un presupuesto escrito en USD antes de viajar. Sin sorpresas. Sin "encontramos algo más" a mitad del tratamiento. Precios fijos y transparentes.' },
];

const COUNTRIES_EN = [
  { flag: '🇺🇸', name: 'United States', note: 'Direct flights from Miami, Atlanta, NYC, LA, Houston' },
  { flag: '🇨🇦', name: 'Canada', note: 'Via Bogotá from Toronto, Montreal — dental rarely covered by provincial plans' },
  { flag: '🇵🇦', name: 'Panama', note: '1.5h direct flight, Spanish-speaking patients welcome' },
  { flag: '🇩🇴', name: 'Dominican Republic', note: 'Direct flights from Santo Domingo (3.5h)' },
  { flag: '🇵🇷', name: 'Puerto Rico', note: 'Direct flights from SJU, bilingual care' },
  { flag: '🇪🇸', name: 'Spain', note: 'Long-stay patients welcome, all care in Spanish' },
  { flag: '🇨🇱', name: 'Chile', note: 'Direct flights from Santiago, all care in Spanish' },
];

const COUNTRIES_ES = [
  { flag: '🇺🇸', name: 'Estados Unidos', note: 'Vuelos directos desde Miami, Atlanta, NY, LA, Houston' },
  { flag: '🇨🇦', name: 'Canadá', note: 'Vía Bogotá desde Toronto y Montreal — dental raramente cubierto por seguros provinciales' },
  { flag: '🇵🇦', name: 'Panamá', note: 'Vuelo directo 1.5h, atención en español' },
  { flag: '🇩🇴', name: 'República Dominicana', note: 'Vuelos directos desde Santo Domingo (3.5h)' },
  { flag: '🇵🇷', name: 'Puerto Rico', note: 'Vuelos directos desde SJU, atención bilingüe' },
  { flag: '🇪🇸', name: 'España', note: 'Pacientes de larga estadía bienvenidos, todo en español' },
  { flag: '🇨🇱', name: 'Chile', note: 'Vuelos directos desde Santiago, todo en español' },
];

export default async function DentalImplantsInternationalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const localePath = (p: string) => (isEs ? p : `/en${p}`);
  const calcLocale: 'es' | 'en' = isEs ? 'es' : 'en';

  const url = isEs
    ? `${BASE}/dental-implants-for-us-patients`
    : `${BASE}/en/dental-implants-for-us-patients`;

  const waConsultMsg = isEs
    ? 'Hola Dra. Carolina 🌐 Soy paciente internacional y me gustaría agendar una videoconsulta gratis de 30 minutos para hablar de mi caso.'
    : 'Hi Dr. Carolina 🌐 I am an international patient and I would like to schedule a free 30-minute virtual consultation about my case.';
  // waConsult is the fallback href for environments where JS doesn't run.
  // The actual clickable elements are <WhatsAppLink> below — they upgrade
  // the href client-side with [fuente: X] tag for GHL CRM attribution.
  const waConsult = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waConsultMsg)}`;
  void waConsult; // keep for potential future use (e.g. <noscript> fallbacks)

  const FAQS = isEs ? FAQS_ES : FAQS_EN;
  const TRIP_STEPS = isEs ? TRIP_STEPS_ES : TRIP_STEPS_EN;
  const WHY_CARDS = isEs ? WHY_CARDS_ES : WHY_CARDS_EN;
  const COUNTRIES = isEs ? COUNTRIES_ES : COUNTRIES_EN;

  const t = isEs
    ? {
        heroBadge: '🇺🇸 🇨🇦 🇵🇦 🇩🇴 → 🇨🇴 · Para pacientes que viajan desde USA, Canadá, Panamá y RD',
        heroTitlePre: 'Implantes Dentales en Medellín para',
        heroTitleAccent: 'Pacientes Internacionales',
        heroSubtitle: (
          <>
            Ahorra 60–70% en implantes, All-on-4 y rehabilitación oral completa. Mismos materiales. Atención bilingüe (español/inglés). 17+ años de experiencia. <strong className="text-[#F5F5F0]">Videoconsulta inicial gratis</strong> antes de viajar.
          </>
        ),
        trustReviews: '5.0 · 55+ reseñas verificadas',
        trustPatients: '3.500+ pacientes · 40% internacionales',
        trustEducation: 'Estética dental en NYU · 17+ años',
        ctaPrimary: 'Agenda tu videoconsulta gratis',
        ctaPrimarySub: 'Respondemos en horas · Sin compromiso · Español e inglés',

        countriesKicker: 'Países a los que atendemos',
        countriesTitle: 'Pacientes de toda América',
        countriesSubtitle: 'Más del 40% de mis pacientes vienen de fuera de Colombia. Atención bilingüe completa.',

        whyKicker: 'Por qué viajan a Medellín',
        whyTitle: 'Por qué los pacientes internacionales eligen Medellín',

        tripKicker: 'Tu plan',
        tripTitle: 'Tu viaje, paso a paso',

        doctorKicker: 'La especialista',
        doctorTitle: 'Dra. Carolina Macareno',
        doctorBio:
          '17+ años especializada en rehabilitación oral, implantes y diseño de sonrisa. Formada en la Universidad CES (Medellín) y New York University (estética). 3.500+ pacientes en Colombia, USA, Canadá, Panamá, República Dominicana, Puerto Rico, España y Chile. Atención bilingüe en español e inglés.',
        doctorLink: 'Trayectoria profesional completa →',

        faqKicker: 'Preguntas frecuentes',
        faqTitle: 'Todo lo que los pacientes internacionales preguntan',

        finalKicker: '¿Listo para el primer paso?',
        finalTitle: '¿Listo para dar el primer paso?',
        finalText:
          'Escríbeme directamente por WhatsApp. Yo te respondo personalmente en horas. La primera videoconsulta de 30 min es gratis — revisamos tu caso, te envío un presupuesto por escrito y decides si Medellín es para ti. Cero riesgo.',
        finalCta: 'Escribir a la Dra. por WhatsApp',
      }
    : {
        heroBadge: '🇺🇸 🇨🇦 🇵🇦 🇩🇴 → 🇨🇴 · For patients traveling from the USA, Canada, Panama & DR',
        heroTitlePre: 'Dental Implants in Medellín for',
        heroTitleAccent: 'International Patients',
        heroSubtitle: (
          <>
            Save 60–70% on implants, All-on-4 and full-mouth rehabilitation. Same materials. Bilingual care (English/Spanish). 17+ years experience. <strong className="text-[#F5F5F0]">Free virtual consultation</strong> before you fly.
          </>
        ),
        trustReviews: '5.0 · 55+ verified reviews',
        trustPatients: '3,500+ patients · 40% international',
        trustEducation: 'NYU dental aesthetics · 17+ years',
        ctaPrimary: 'Get Your Free Virtual Consultation',
        ctaPrimarySub: 'Replies within hours · No commitment · English & Spanish',

        countriesKicker: 'Where my patients come from',
        countriesTitle: 'Patients from across the Americas',
        countriesSubtitle: 'Over 40% of my patients come from outside Colombia. Fully bilingual care.',

        whyKicker: 'Why patients travel',
        whyTitle: 'Why international patients choose Medellín',

        tripKicker: 'Your plan',
        tripTitle: 'Your trip, step by step',

        doctorKicker: 'The specialist',
        doctorTitle: 'Dr. Carolina Macareno',
        doctorBio:
          '17+ years specializing in oral rehabilitation, implants and smile design. Trained at Universidad CES (Medellín) and New York University (aesthetics). 3,500+ patients across Colombia, USA, Canada, Panama, Dominican Republic, Puerto Rico, Spain and Chile. Bilingual care in English and Spanish.',
        doctorLink: 'Full professional profile →',

        faqKicker: 'Common questions',
        faqTitle: 'Everything international patients ask',

        finalKicker: 'Ready to take the first step?',
        finalTitle: 'Ready to take the first step?',
        finalText:
          'Send a message on WhatsApp. Dr. Carolina personally replies within hours. The first 30-min video consultation is free — review your case, get a written quote, and decide if Medellín is right for you. Zero risk.',
        finalCta: 'Message Dr. Carolina on WhatsApp',
      };

  const breadcrumbs = breadcrumbSchema([
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: t.heroTitleAccent, url },
  ]);

  const webPage = medicalWebPageSchema({
    url,
    name: isEs
      ? 'Implantes Dentales en Medellín para Pacientes Internacionales'
      : 'Dental Implants in Medellín for International Patients',
    description: isEs
      ? 'Ahorra 60-70% en implantes, All-on-4 y rehabilitación oral completa en Medellín. Mismos materiales, atención bilingüe, 17+ años de experiencia.'
      : 'Save 60-70% on dental implants, All-on-4, and full-mouth rehabilitation in Medellín, Colombia. Same materials, bilingual care, 17+ years experience.',
    procedureName: 'Dental Implants',
  });

  const procedure = medicalServiceSchema({
    name: 'Dental Implants — International Patient Program',
    description:
      'Dental implants for international (US, Canada, Panama, Dominican Republic, Puerto Rico, Spain, Chile) patients, including All-on-4, All-on-6, zygomatic and subperiosteal implants. Bilingual care, pre-travel video consultation, coordinated lodging in El Poblado.',
    url,
    keywords: [
      'dental implants USA patients',
      'dental implants Canadian patients',
      'dental implants Panama patients',
      'dental implants Dominican Republic patients',
      'all on 4 Colombia for Americans',
      'zygomatic implants Colombia',
      'Medellín dental tourism',
    ],
  });

  const faqs = faqSchema(FAQS);

  const trip = howToSchema({
    name: isEs
      ? 'Planea tu viaje a Medellín para tratamiento dental'
      : 'Plan your dental treatment trip to Medellín',
    description: isEs
      ? 'Plan paso a paso para que un paciente internacional viaje a Medellín, Colombia, para tratamientos de implantes o diseño de sonrisa con la Dra. Carolina Macareno.'
      : 'Step-by-step plan for an international patient to travel to Medellín, Colombia for dental implants or smile design with Dr. Carolina Macareno.',
    totalTime: 'P7D',
    estimatedCost: { currency: 'USD', value: '13000' },
    steps: TRIP_STEPS.map((s) => ({ name: s.name, text: s.text })),
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbs} />
      <SchemaOrg schema={webPage} />
      <SchemaOrg schema={procedure} />
      <SchemaOrg schema={faqs} />
      <SchemaOrg schema={trip} />

      <article className="bg-[#070B14] text-[#F5F5F0]">
        {/* Hero */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(201,164,97,0.10)_0%,_transparent_60%)]" />
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-[#C9A461] text-xs sm:text-sm font-medium tracking-widest uppercase mb-4">
              {t.heroBadge}
            </p>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.heroTitlePre}{' '}
              <span className="text-[#C9A461]">{t.heroTitleAccent}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#D1D5DB] max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10 text-[#9CA3AF] text-sm">
              <span className="flex items-center gap-2">
                <span className="text-[#C9A461] text-lg">★</span> {t.trustReviews}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#C9A461]">👥</span> {t.trustPatients}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#C9A461]">🎓</span> {t.trustEducation}
              </span>
            </div>

            {/* Primary CTA */}
            <WhatsAppLink
              message={waConsultMsg}
              locale={calcLocale}
              trackingLabel="usa_landing_hero"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
              </svg>
              {t.ctaPrimary}
            </WhatsAppLink>
            <p className="text-[#6B7280] text-xs mt-4">{t.ctaPrimarySub}</p>
          </div>
        </section>

        {/* Calculator */}
        <section className="px-4 sm:px-6 pb-16">
          <div className="max-w-2xl mx-auto">
            <SavingsCalculator locale={calcLocale} />
          </div>
        </section>

        {/* Travel costs (flights + lodging) */}
        <TravelCostsSection locale={calcLocale} />

        {/* Countries we serve */}
        <section className="px-4 sm:px-6 py-16 bg-[#0D1321] border-y border-[#1F2937]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase text-center mb-3">
              {t.countriesKicker}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-3"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.countriesTitle}
            </h2>
            <p className="text-[#9CA3AF] text-center max-w-2xl mx-auto mb-10">
              {t.countriesSubtitle}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {COUNTRIES.map((c) => (
                <div key={c.name} className="bg-[#070B14] border border-[#1F2937] rounded-xl p-4 flex gap-3 items-start">
                  <span className="text-3xl flex-shrink-0">{c.flag}</span>
                  <div>
                    <h3 className="text-[#F5F5F0] font-bold text-base mb-1">{c.name}</h3>
                    <p className="text-[#9CA3AF] text-xs leading-relaxed">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why patients travel */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase text-center mb-3">
              {t.whyKicker}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.whyTitle}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {WHY_CARDS.map((item) => (
                <div key={item.title} className="bg-[#0D1321] border border-[#1F2937] rounded-xl p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-[#F5F5F0] font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trip plan */}
        <section className="px-4 sm:px-6 py-16 bg-[#0D1321] border-y border-[#1F2937]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase text-center mb-3">
              {t.tripKicker}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-10"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.tripTitle}
            </h2>
            <ol className="space-y-5">
              {TRIP_STEPS.map((step, i) => (
                <li key={step.name} className="bg-[#070B14] border border-[#1F2937] rounded-xl p-5 flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A461]/15 border border-[#C9A461]/40 text-[#C9A461] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[#F5F5F0] font-bold mb-1">{step.name.replace(/^\d+\.\s*/, '')}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Dr. Carolina mini-bio */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#C9A461]/40">
              <Image
                src="/images/dra-carolina-perfil.webp"
                alt={isEs
                  ? 'Dra. Carolina Macareno — Especialista en Rehabilitación Oral en Medellín'
                  : 'Dr. Carolina Macareno — Oral Rehabilitation Specialist in Medellín'}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, 192px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase mb-2">
                {t.doctorKicker}
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {t.doctorTitle}
              </h2>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed mb-4">
                {t.doctorBio}
              </p>
              <Link
                href={localePath('/dra-carolina-macareno')}
                className="inline-block text-[#C9A461] hover:text-[#E5B866] underline underline-offset-4 text-sm font-medium"
              >
                {t.doctorLink}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-4 sm:px-6 py-16 bg-[#0D1321] border-y border-[#1F2937]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase text-center mb-3">
              {t.faqKicker}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-10"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.faqTitle}
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-[#070B14] border border-[#1F2937] rounded-xl px-5 py-4 open:border-[#C9A461]/40 transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-start gap-3 text-[#F5F5F0] font-semibold text-base sm:text-lg">
                    <span className="text-[#C9A461] flex-shrink-0 transform transition-transform group-open:rotate-45">+</span>
                    {faq.question}
                  </summary>
                  <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed mt-3 pl-7">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 sm:px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.finalTitle}
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg mb-8 leading-relaxed">
              {t.finalText}
            </p>
            <WhatsAppLink
              message={waConsultMsg}
              locale={calcLocale}
              trackingLabel="usa_landing_final"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
              </svg>
              {t.finalCta}
            </WhatsAppLink>
          </div>
        </section>
      </article>
    </>
  );
}
