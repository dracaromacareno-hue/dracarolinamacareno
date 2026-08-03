import type { Metadata } from 'next';
import Icon from '@/components/Icon';
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
import InternationalLeadForm from '@/components/InternationalLeadForm';
import RelatedArticles from '@/components/sections/RelatedArticles';

const BASE = 'https://dracarolinamacareno.com';
const WA_NUMBER = '573163975232';
const PATH = '/turismo-dental-puerto-rico';

/**
 * Country landing, Puerto Rico. Spanish-primary (Puerto Rico is a
 * Spanish-speaking market), with an English mirror at /en for completeness.
 *
 * Angle (see docs/marketing/plan-contenido-geo-diaspora-3meses-jul2026.md):
 * Puerto Rico pays US-territory prices. All-on-4 runs $20K-$32K there vs
 * $12K-$20K in Medellín (per lib/pricing.ts). The gap is real, so the hook is
 * SAVINGS + same language + the Medellín experience. Boricuas already travel
 * for care and speak Spanish natively, so the friction is lower than for a US
 * anglophone patient.
 *
 * hreflang: declares es-PR + es-419 (Latin American Spanish umbrella) so Google
 * serves this page to Spanish speakers in Puerto Rico, not just generic es.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const esUrl = `${BASE}${PATH}`;
  const enUrl = `${BASE}/en${PATH}`;
  const canonical = isEs ? esUrl : enUrl;

  return {
    title: isEs
      ? 'Turismo Dental Puerto Rico | Implantes Medellín, Ahorra 50%'
      : 'Dental Tourism Puerto Rico | Implants Medellín, Save 50%',
    description: isEs
      ? 'Pacientes de Puerto Rico ahorran $8K-$12K por arcada en All-on-4 e implantes en Medellín. Mismos materiales Straumann/Neodent, atención en español.'
      : 'Puerto Rico patients save $8K-$12K per arch on All-on-4 and implants in Medellín. Same Straumann/Neodent materials, care in Spanish. Free virtual consultation.',
    keywords: isEs
      ? [
          'turismo dental Puerto Rico',
          'implantes dentales Puerto Rico vs Colombia',
          'all on 4 para boricuas',
          'dentista para puertorriqueños en Colombia',
          'implantes dentales baratos para pacientes de Puerto Rico',
          'costo All-on-4 Puerto Rico',
          'turismo dental Medellín desde San Juan',
        ]
      : [
          'dental tourism Puerto Rico',
          'dental implants Puerto Rico vs Colombia',
          'all on 4 for Puerto Ricans',
          'affordable implants for Puerto Rico patients',
          'dental tourism Medellín from San Juan',
        ],
    alternates: {
      canonical,
      languages: {
        es: esUrl,
        'es-419': esUrl,
        'es-PR': esUrl,
        en: enUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title: isEs
        ? 'Turismo Dental desde Puerto Rico | Ahorra hasta 50% en Medellín'
        : 'Dental Tourism from Puerto Rico | Save up to 50% in Medellín',
      description: isEs
        ? 'Mismo idioma, mismos materiales, mejor precio. All-on-4 e implantes en Medellín con una especialista de 17+ años. Videoconsulta gratis antes de viajar.'
        : 'Same language, same materials, better price. All-on-4 and implants in Medellín with a 17+ year specialist. Free virtual consultation before you fly.',
      url: canonical,
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.webp`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs
        ? 'Turismo Dental Puerto Rico → Medellín | Ahorra hasta 50%'
        : 'Dental Tourism Puerto Rico → Medellín | Save up to 50%',
      description: isEs
        ? 'Atención 100% en español, mismos materiales, precio de Colombia. Dra. Carolina Macareno, 17+ años.'
        : 'Care in Spanish, same materials, Colombia pricing. Dr. Carolina Macareno, 17+ years.',
    },
  };
}

const FAQS_ES = [
  {
    question: '¿Por qué un puertorriqueño viajaría a Colombia para tratarse los dientes?',
    answer:
      'Por tres razones concretas: el precio, el idioma y la experiencia. En Puerto Rico un All-on-4 cuesta entre $20,000 y $32,000 por arcada (precios de territorio estadounidense); en Medellín, con la Dra. Carolina, ese mismo tratamiento va de $12,000 a $20,000, un ahorro de $8,000 a $12,000 por arcada incluso contando el vuelo y el hospedaje. Todo se hace en español, con los mismos materiales (Straumann, Neodent) que se usan en Estados Unidos, y Medellín es una de las mejores ciudades de Latinoamérica para recuperarte.',
  },
  {
    question: '¿Cuánto puedo ahorrar realmente comparado con hacerme los implantes en Puerto Rico?',
    answer:
      'Un implante individual cuesta $2,800-$4,500 en Puerto Rico vs $1,200-$2,000 en Medellín. Un All-on-4 completo por arcada cuesta $20,000-$32,000 en Puerto Rico vs $12,000-$20,000 aquí. Un diseño de sonrisa de 10 carillas cuesta $12,000-$20,000 en Puerto Rico vs $5,500-$8,500 en Medellín. El ahorro es real incluso después de sumar vuelo y estadía.',
  },
  {
    question: '¿Los materiales y la calidad son iguales a los de una clínica en Puerto Rico?',
    answer:
      'Sí. La Dra. Carolina usa las mismas marcas de implantes aprobadas internacionalmente (Straumann, Neodent, DioImplant), imagenología 3D CBCT, diseño digital de sonrisa y zirconio fresado CAD/CAM. El ahorro viene del costo de vida en Colombia, no de recortar en materiales ni en protocolos.',
  },
  {
    question: '¿Cuántos días necesito quedarme en Medellín viniendo desde Puerto Rico?',
    answer:
      'Para implantes individuales, 5-7 días en una sola visita. Para All-on-4, normalmente dos viajes: el primero de 7-10 días para la cirugía y los dientes provisionales, y el segundo de 5-7 días unos 4 meses después para la prótesis definitiva. La planificación previa se hace por videollamada, así reduces el tiempo en el consultorio.',
  },
  {
    question: '¿Cómo llego a Medellín desde San Juan?',
    answer:
      'Hay conexiones frecuentes desde San Juan (SJU) a Medellín (MDE), normalmente vía Panamá o Bogotá. El consultorio coordina hoteles y apartamentos confiables en El Poblado, a 5-10 minutos caminando de la clínica.',
  },
  {
    question: '¿Y si necesito seguimiento cuando regrese a Puerto Rico?',
    answer:
      'La Dra. Carolina ofrece garantías escritas sobre los implantes y el trabajo protésico, y hace seguimiento por WhatsApp y videollamada. Si en algún momento necesitas una visita presencial, un vuelo de regreso a Medellín suele costar menos que una sola cita dental en Puerto Rico.',
  },
  {
    question: '¿Puedo saber mi presupuesto exacto antes de comprar el tiquete?',
    answer:
      'Sí. Cada paciente recibe una videoconsulta gratis de 30 minutos. Envías tu radiografía panorámica y fotos, la Dra. Carolina revisa tu caso, te propone un plan y te manda un presupuesto por escrito en dólares, todo antes de que reserves el viaje.',
  },
];

const FAQS_EN = [
  {
    question: 'Why would a Puerto Rican travel to Colombia for dental work?',
    answer:
      'Price, language, and experience. In Puerto Rico an All-on-4 runs $20,000-$32,000 per arch (US-territory pricing); in Medellín the same treatment with Dr. Carolina is $12,000-$20,000, a saving of $8,000-$12,000 per arch even after flights and lodging. Everything is done in Spanish, with the same materials (Straumann, Neodent) used in the US.',
  },
  {
    question: 'How much can I really save vs treatment in Puerto Rico?',
    answer:
      'A single implant is $2,800-$4,500 in Puerto Rico vs $1,200-$2,000 in Medellín. A full-arch All-on-4 is $20,000-$32,000 in Puerto Rico vs $12,000-$20,000 here. A 10-veneer smile design is $12,000-$20,000 in Puerto Rico vs $5,500-$8,500 in Medellín.',
  },
  {
    question: 'Are the materials and quality the same as a clinic in Puerto Rico?',
    answer:
      'Yes. Dr. Carolina uses the same internationally approved implant brands (Straumann, Neodent, DioImplant), CBCT 3D imaging, digital smile design and CAD/CAM milled zirconia. The savings come from Colombia cost of living, not from cutting corners.',
  },
  {
    question: 'How many days do I need to stay in Medellín coming from Puerto Rico?',
    answer:
      'For single implants, 5-7 days in one visit. For All-on-4, usually two trips: the first 7-10 days for surgery and provisional teeth, the second 5-7 days about 4 months later for the definitive prosthetic.',
  },
];

const TRIP_STEPS_ES = [
  { name: '1. Videoconsulta gratis', text: 'Envías radiografías y fotos. La Dra. Carolina revisa tu caso en una videollamada de 30 min y te manda un plan con precios exactos en dólares.' },
  { name: '2. Reserva tu viaje', text: 'Reserva tu vuelo de San Juan (SJU) a Medellín (MDE) y tu hospedaje. El consultorio recomienda hoteles y apartamentos en El Poblado a 5-10 min caminando.' },
  { name: '3. Día 1 en Medellín', text: 'Escaneo digital, radiografía panorámica, CBCT si hace falta y confirmación final del plan. Si es un caso de una sola visita, el procedimiento empieza el mismo día.' },
  { name: '4. Tratamiento', text: 'La cirugía de implantes dura 60-120 min. El All-on-4 incluye cirugía + dientes provisionales el mismo día.' },
  { name: '5. Recuperación', text: 'Quédate 2-5 días para los controles. Medellín tiene clima perfecto todo el año y todo queda cerca en El Poblado.' },
  { name: '6. Regreso con seguimiento', text: 'Seguimiento por WhatsApp y video. Para All-on-4, un segundo viaje 3-4 meses después finaliza la prótesis definitiva.' },
];

const TRIP_STEPS_EN = [
  { name: '1. Free virtual consultation', text: 'Send X-rays + photos. Dr. Carolina reviews your case in a 30-min video call and sends a plan with exact USD pricing.' },
  { name: '2. Book your trip', text: 'Book your flight from San Juan (SJU) to Medellín (MDE) and your lodging. The practice recommends hotels and apartments in El Poblado within 5-10 min walking.' },
  { name: '3. Day 1 in Medellín', text: 'Digital scan, panoramic X-ray, CBCT if needed, and final plan confirmation. Single-visit cases start the same day.' },
  { name: '4. Treatment', text: 'Implant surgery is 60-120 min. All-on-4 includes surgery + provisional teeth the same day.' },
  { name: '5. Recovery', text: 'Stay 2-5 days for post-op checks. Medellín has perfect weather year-round and everything is close in El Poblado.' },
  { name: '6. Fly home with follow-up', text: 'Follow-up by WhatsApp and video. For All-on-4, a second trip 3-4 months later finalizes the definitive prosthetic.' },
];

const WHY_CARDS_ES = [
  { icon: <Icon name="money" />, title: 'Ahorro real, precio de Colombia', text: 'All-on-4 desde $12,000 vs $20,000-$32,000 en Puerto Rico. El ahorro cubre de sobra el vuelo y el hospedaje.' },
  { icon: <Icon name="chat" />, title: 'Todo en español', text: 'Sin barrera de idioma. Consulta, plan de tratamiento, presupuesto y post-operatorio, todo en español con una especialista boricua-friendly.' },
  { icon: <Icon name="scan" />, title: 'Mismos materiales', text: 'Straumann, Neodent, DioImplant, los mismos que se usan en territorio estadounidense. CBCT 3D y zirconio CAD/CAM.' },
  { icon: <Icon name="stethoscope" />, title: 'Especialista, no una cadena', text: 'Dra. Carolina Macareno, especialista en rehabilitación oral, 17+ años, 3.500+ pacientes, formación en estética en NYU.' },
  { icon: <Icon name="plane" />, title: 'Conexión cómoda desde SJU', text: 'Vuelos frecuentes de San Juan a Medellín vía Panamá o Bogotá. Coordinamos tu hospedaje en El Poblado.' },
  { icon: <Icon name="handshake" />, title: 'Presupuesto por escrito', text: 'Recibes tu presupuesto en dólares antes de viajar. Sin sorpresas ni cobros de última hora.' },
];

const WHY_CARDS_EN = [
  { icon: <Icon name="money" />, title: 'Real savings, Colombia pricing', text: 'All-on-4 from $12,000 vs $20,000-$32,000 in Puerto Rico. The savings more than cover flights and lodging.' },
  { icon: <Icon name="chat" />, title: 'Everything in Spanish', text: 'No language barrier. Consultation, treatment plan, quote and post-op, all in Spanish.' },
  { icon: <Icon name="scan" />, title: 'Same materials', text: 'Straumann, Neodent, DioImplant, the same used in US territory. CBCT 3D and CAD/CAM zirconia.' },
  { icon: <Icon name="stethoscope" />, title: 'A specialist, not a chain', text: 'Dr. Carolina Macareno, oral rehabilitation specialist, 17+ years, 3,500+ patients, NYU-trained in aesthetics.' },
  { icon: <Icon name="plane" />, title: 'Easy connection from SJU', text: 'Frequent flights from San Juan to Medellín via Panama or Bogotá. We coordinate your lodging in El Poblado.' },
  { icon: <Icon name="handshake" />, title: 'Written quote', text: 'You get your quote in USD before you fly. No surprises, no last-minute add-ons.' },
];

export default async function TurismoDentalPuertoRicoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const localePath = (p: string) => (isEs ? p : `/en${p}`);
  const calcLocale: 'es' | 'en' = isEs ? 'es' : 'en';
  const url = isEs ? `${BASE}${PATH}` : `${BASE}/en${PATH}`;

  const waConsultMsg = isEs
    ? 'Hola Dra. Carolina 🇵🇷 Soy de Puerto Rico y me gustaría agendar una videoconsulta gratis de 30 minutos para hablar de mi tratamiento en Medellín.'
    : 'Hi Dr. Carolina 🇵🇷 I am from Puerto Rico and I would like to schedule a free 30-minute virtual consultation about treatment in Medellín.';

  const FAQS = isEs ? FAQS_ES : FAQS_EN;
  const TRIP_STEPS = isEs ? TRIP_STEPS_ES : TRIP_STEPS_EN;
  const WHY_CARDS = isEs ? WHY_CARDS_ES : WHY_CARDS_EN;

  const t = isEs
    ? {
        heroBadge: '🇵🇷 → 🇨🇴 · Para pacientes que viajan desde Puerto Rico',
        heroTitlePre: 'Turismo Dental desde Puerto Rico:',
        heroTitleAccent: 'Implantes en Medellín',
        heroSubtitle: (
          <>
            Mismo idioma, mismos materiales, mejor precio. Ahorra hasta 50% en implantes y All-on-4 frente a los precios de Puerto Rico. Atención 100% en español. <strong className="text-[#211E18]">Videoconsulta gratis</strong> antes de viajar.
          </>
        ),
        trustReviews: '5.0 · 55+ reseñas verificadas',
        trustPatients: '3.500+ pacientes · 40% internacionales',
        trustEducation: 'Estética dental en NYU · 17+ años',
        ctaPrimary: 'Agenda tu videoconsulta gratis',
        ctaPrimarySub: 'Respondemos en horas · Sin compromiso · Todo en español',
        ctaSecondary: '¿Prefieres email? Solicita tu presupuesto por escrito →',
        calcKicker: 'Cuánto ahorras',
        calcTitle: 'Compara el precio de Puerto Rico vs Medellín',
        calcSubtitle: 'La calculadora ya viene con los precios de Puerto Rico. Elige tu procedimiento y mira el ahorro real.',
        whyKicker: 'Por qué Medellín',
        whyTitle: 'Por qué los boricuas eligen tratarse en Medellín',
        tripKicker: 'Tu plan',
        tripTitle: 'Tu viaje, paso a paso',
        doctorKicker: 'La especialista',
        doctorTitle: 'Dra. Carolina Macareno',
        doctorBio:
          '17+ años especializada en rehabilitación oral, implantes y diseño de sonrisa. Formada en la Universidad CES (Medellín) y New York University (estética). 3.500+ pacientes en Colombia, Estados Unidos, Puerto Rico, Panamá, República Dominicana, España y Chile. Atención en español.',
        doctorLink: 'Trayectoria profesional completa →',
        faqKicker: 'Preguntas frecuentes',
        faqTitle: 'Lo que preguntan los pacientes de Puerto Rico',
        finalTitle: '¿Listo para dar el primer paso?',
        finalText:
          'Escríbeme por WhatsApp. Te respondo personalmente en horas. La primera videoconsulta de 30 min es gratis: revisamos tu caso, te envío un presupuesto por escrito y decides si Medellín es para ti. Cero riesgo.',
        finalCta: 'Escribir a la Dra. por WhatsApp',
      }
    : {
        heroBadge: '🇵🇷 → 🇨🇴 · For patients traveling from Puerto Rico',
        heroTitlePre: 'Dental Tourism from Puerto Rico:',
        heroTitleAccent: 'Implants in Medellín',
        heroSubtitle: (
          <>
            Same language, same materials, better price. Save up to 50% on implants and All-on-4 vs Puerto Rico pricing. Care in Spanish. <strong className="text-[#211E18]">Free virtual consultation</strong> before you fly.
          </>
        ),
        trustReviews: '5.0 · 55+ verified reviews',
        trustPatients: '3,500+ patients · 40% international',
        trustEducation: 'NYU dental aesthetics · 17+ years',
        ctaPrimary: 'Get Your Free Virtual Consultation',
        ctaPrimarySub: 'Replies within hours · No commitment · Spanish & English',
        ctaSecondary: 'Prefer email? Request your written quote →',
        calcKicker: 'How much you save',
        calcTitle: 'Compare Puerto Rico vs Medellín pricing',
        calcSubtitle: 'The calculator is preset to Puerto Rico prices. Pick your procedure and see the real savings.',
        whyKicker: 'Why Medellín',
        whyTitle: 'Why Puerto Ricans choose to treat in Medellín',
        tripKicker: 'Your plan',
        tripTitle: 'Your trip, step by step',
        doctorKicker: 'The specialist',
        doctorTitle: 'Dr. Carolina Macareno',
        doctorBio:
          '17+ years specializing in oral rehabilitation, implants and smile design. Trained at Universidad CES (Medellín) and New York University (aesthetics). 3,500+ patients across Colombia, the US, Puerto Rico, Panama, Dominican Republic, Spain and Chile.',
        doctorLink: 'Full professional profile →',
        faqKicker: 'Common questions',
        faqTitle: 'What Puerto Rico patients ask',
        finalTitle: 'Ready to take the first step?',
        finalText:
          'Message me on WhatsApp. I personally reply within hours. The first 30-min video consultation is free: we review your case, I send a written quote, and you decide if Medellín is right for you. Zero risk.',
        finalCta: 'Message Dr. Carolina on WhatsApp',
      };

  const breadcrumbs = breadcrumbSchema([
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: t.heroTitleAccent, url },
  ]);

  const webPage = medicalWebPageSchema({
    url,
    name: isEs
      ? 'Turismo Dental desde Puerto Rico: Implantes en Medellín'
      : 'Dental Tourism from Puerto Rico: Implants in Medellín',
    description: isEs
      ? 'Pacientes de Puerto Rico ahorran hasta 50% en implantes y All-on-4 en Medellín. Mismos materiales, atención en español, 17+ años de experiencia.'
      : 'Puerto Rico patients save up to 50% on implants and All-on-4 in Medellín. Same materials, care in Spanish, 17+ years experience.',
    procedureName: 'Dental Implants',
  });

  const procedure = medicalServiceSchema({
    name: 'Dental Implants, Puerto Rico Patient Program',
    description:
      'Dental implants, All-on-4 and smile design for patients traveling from Puerto Rico to Medellín, Colombia. Spanish-speaking care, pre-travel video consultation, coordinated lodging in El Poblado.',
    url,
    keywords: [
      'dental implants Puerto Rico patients',
      'all on 4 Puerto Rico vs Colombia',
      'dental tourism Medellín Puerto Rico',
    ],
  });

  const faqs = faqSchema(FAQS);

  const trip = howToSchema({
    name: isEs
      ? 'Planea tu viaje de Puerto Rico a Medellín para tratamiento dental'
      : 'Plan your dental trip from Puerto Rico to Medellín',
    description: isEs
      ? 'Plan paso a paso para que un paciente de Puerto Rico viaje a Medellín, Colombia, para implantes o diseño de sonrisa con la Dra. Carolina Macareno.'
      : 'Step-by-step plan for a Puerto Rico patient to travel to Medellín, Colombia for dental implants or smile design with Dr. Carolina Macareno.',
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

      <article className="bg-[#FCFBF9] text-[#211E18]">
        {/* Hero */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(201,164,97,0.10)_0%,_transparent_60%)]" />
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-[#8A6B2E] text-xs sm:text-sm font-medium tracking-widest uppercase mb-4">
              {t.heroBadge}
            </p>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.heroTitlePre}{' '}
              <span className="text-[#8A6B2E]">{t.heroTitleAccent}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#5A5449] max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10 text-[#77726A] text-sm">
              <span className="flex items-center gap-2">
                <span className="text-[#8A6B2E] text-lg">★</span> {t.trustReviews}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="handshake" className="w-4 h-4 inline-block align-[-3px] text-[#8A6B2E]" /> {t.trustPatients}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="award" className="w-4 h-4 inline-block align-[-3px] text-[#8A6B2E]" /> {t.trustEducation}
              </span>
            </div>

            <WhatsAppLink
              message={waConsultMsg}
              locale={calcLocale}
              trackingLabel="pr_landing_hero"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
              </svg>
              {t.ctaPrimary}
            </WhatsAppLink>
            <p className="text-[#77726A] text-xs mt-4">{t.ctaPrimarySub}</p>
            <p className="mt-5">
              <a
                href="#lead-form"
                className="text-[#8A6B2E] hover:text-[#E5B866] text-sm font-medium underline-offset-4 hover:underline transition-colors"
              >
                {t.ctaSecondary}
              </a>
            </p>
          </div>
        </section>

        {/* Savings calculator, preset to Puerto Rico */}
        <section id="pricing" className="px-4 sm:px-6 pb-16 scroll-mt-24">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#8A6B2E] text-xs font-medium tracking-widest uppercase text-center mb-3">
              {t.calcKicker}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-3"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.calcTitle}
            </h2>
            <p className="text-[#77726A] text-center max-w-xl mx-auto mb-8">{t.calcSubtitle}</p>
            <SavingsCalculator locale={calcLocale} initialCountry="puerto_rico" />
          </div>
        </section>

        {/* Travel costs */}
        <TravelCostsSection locale={calcLocale} />

        {/* Why Medellín */}
        <section id="results" className="px-4 sm:px-6 py-16 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#8A6B2E] text-xs font-medium tracking-widest uppercase text-center mb-3">
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
                <div key={item.title} className="bg-white border border-[#E8E3DA] rounded-xl p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-[#211E18] font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#77726A] text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trip plan */}
        <section id="trip" className="px-4 sm:px-6 py-16 bg-white border-y border-[#E8E3DA] scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#8A6B2E] text-xs font-medium tracking-widest uppercase text-center mb-3">
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
                <li key={step.name} className="bg-[#FCFBF9] border border-[#E8E3DA] rounded-xl p-5 flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A461]/15 border border-[#C9A461]/40 text-[#8A6B2E] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[#211E18] font-bold mb-1">{step.name.replace(/^\d+\.\s*/, '')}</h3>
                    <p className="text-[#77726A] text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Doctor mini-bio */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#C9A461]/40">
              <Image
                src="/images/dra-carolina-perfil.webp"
                alt={isEs
                  ? 'Dra. Carolina Macareno, Especialista en Rehabilitación Oral en Medellín'
                  : 'Dr. Carolina Macareno, Oral Rehabilitation Specialist in Medellín'}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, 192px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[#8A6B2E] text-xs font-medium tracking-widest uppercase mb-2">
                {t.doctorKicker}
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {t.doctorTitle}
              </h2>
              <p className="text-[#5A5449] text-sm sm:text-base leading-relaxed mb-4">
                {t.doctorBio}
              </p>
              <Link
                href={localePath('/dra-carolina-macareno')}
                className="inline-block text-[#8A6B2E] hover:text-[#E5B866] underline underline-offset-4 text-sm font-medium"
              >
                {t.doctorLink}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-4 sm:px-6 py-16 bg-white border-y border-[#E8E3DA]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#8A6B2E] text-xs font-medium tracking-widest uppercase text-center mb-3">
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
                  className="group bg-[#FCFBF9] border border-[#E8E3DA] rounded-xl px-5 py-4 open:border-[#C9A461]/40 transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-start gap-3 text-[#211E18] font-semibold text-base sm:text-lg">
                    <span className="text-[#8A6B2E] flex-shrink-0 transform transition-transform group-open:rotate-45">+</span>
                    {faq.question}
                  </summary>
                  <p className="text-[#5A5449] text-sm sm:text-base leading-relaxed mt-3 pl-7">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Lead form */}
        <InternationalLeadForm locale={calcLocale} />

        {/* Enlaces relacionados */}
        <section className="px-4 sm:px-6 py-14 bg-white border-t border-[#E8E3DA]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#77726A] text-sm mb-5">
              {isEs ? 'Sigue explorando antes de decidir:' : 'Keep exploring before you decide:'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={localePath('/dental-tourism-colombia')} className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#C9A461]/40 text-[#8A6B2E] text-sm font-medium hover:border-[#C9A461] transition-colors">
                {isEs ? 'Turismo dental en Colombia' : 'Dental tourism in Colombia'}
              </Link>
              <Link href={localePath('/dental-implants-for-us-patients')} className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#C9A461]/40 text-[#8A6B2E] text-sm font-medium hover:border-[#C9A461] transition-colors">
                {isEs ? 'Implantes en Colombia para pacientes de EE.UU.' : 'Dental implants in Colombia for US patients'}
              </Link>
              <Link href={localePath('/blog/turismo-dental-en-colombia-seguro')} className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#C9A461]/40 text-[#8A6B2E] text-sm font-medium hover:border-[#C9A461] transition-colors">
                {isEs ? '¿Es seguro el turismo dental en Colombia?' : 'Is dental tourism in Colombia safe?'}
              </Link>
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
            <p className="text-[#77726A] text-base sm:text-lg mb-8 leading-relaxed">
              {t.finalText}
            </p>
            <WhatsAppLink
              message={waConsultMsg}
              locale={calcLocale}
              trackingLabel="pr_landing_final"
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
      <RelatedArticles route="/turismo-dental-puerto-rico" locale={locale} />
    </>
  );
}
