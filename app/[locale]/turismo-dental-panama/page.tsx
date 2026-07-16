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
import TravelCostsSection from '@/components/TravelCostsSection';
import WhatsAppLink from '@/components/WhatsAppLink';
import InternationalLeadForm from '@/components/InternationalLeadForm';

const BASE = 'https://dracarolinamacareno.com';
const WA_NUMBER = '573163975232';
const PATH = '/turismo-dental-panama';

/**
 * Country landing, Panama. Spanish-primary, English mirror at /en.
 *
 * Angle (see docs/marketing/plan-contenido-geo-diaspora-3meses-jul2026.md):
 * Panama pricing is NOW essentially level with Colombia (All-on-4 $14K-$22K in
 * Panama vs $12K-$20K in Medellín, per lib/pricing.ts). So this page does NOT
 * lead with savings and deliberately omits the SavingsCalculator, showing a
 * near-flat comparison would undercut the message. Instead the hook is
 * QUALITY and SPECIALIZATION: a dedicated oral rehabilitation specialist,
 * premium Straumann/Neodent materials, complex cases (zygomatic implants) that
 * many Panama clinics don't offer, and a short 1.5h direct flight from PTY.
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
      ? 'Turismo Dental Panamá vs Medellín | Implantes con Especialista, a un Vuelo Corto'
      : 'Dental Tourism Panama vs Medellín | Implants with a Specialist, a Short Flight Away',
    description: isEs
      ? 'Si el precio entre Panamá y Colombia es parecido, la diferencia está en el resultado: especialista en rehabilitación oral, materiales Straumann/Neodent y casos complejos como implantes cigomáticos. Vuelo directo de 1.5h desde Panamá.'
      : 'If Panama and Colombia pricing is similar, the difference is the result: an oral rehabilitation specialist, Straumann/Neodent materials, and complex cases like zygomatic implants. 1.5h direct flight from Panama.',
    keywords: isEs
      ? [
          'turismo dental Panamá',
          'implantes dentales Panamá vs Colombia',
          'all on 4 Panamá o Medellín',
          'especialista rehabilitación oral para panameños',
          'implantes cigomáticos Colombia',
          'mejor clínica dental Medellín para panameños',
        ]
      : [
          'dental tourism Panama',
          'dental implants Panama vs Colombia',
          'all on 4 Panama or Medellín',
          'zygomatic implants Colombia',
          'oral rehabilitation specialist for Panamanians',
        ],
    alternates: {
      canonical,
      languages: {
        es: esUrl,
        'es-419': esUrl,
        'es-PA': esUrl,
        en: enUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title: isEs
        ? 'Turismo Dental Panamá vs Medellín | La diferencia está en el resultado'
        : 'Dental Tourism Panama vs Medellín | The difference is the result',
      description: isEs
        ? 'Especialista en rehabilitación oral, materiales premium y casos complejos. A un vuelo directo de 1.5h desde Panamá. Videoconsulta gratis.'
        : 'Oral rehabilitation specialist, premium materials and complex cases. A 1.5h direct flight from Panama. Free virtual consultation.',
      url: canonical,
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.webp`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs
        ? 'Turismo Dental Panamá → Medellín | Especialista y casos complejos'
        : 'Dental Tourism Panama → Medellín | Specialist and complex cases',
      description: isEs
        ? 'Mismo rango de precio, mejor resultado. Dra. Carolina Macareno, 17+ años en rehabilitación oral.'
        : 'Same price range, better result. Dr. Carolina Macareno, 17+ years in oral rehabilitation.',
    },
  };
}

const FAQS_ES = [
  {
    question: 'Si en Panamá los implantes cuestan parecido, ¿por qué viajar a Colombia?',
    answer:
      'Porque lo que buscas en una rehabilitación oral no es solo el precio, es el resultado y quién lo hace. En Medellín te atiende la Dra. Carolina Macareno, especialista en rehabilitación oral con 17+ años y más de 3.500 pacientes, no una consulta general. Usa materiales premium (Straumann, Neodent), diseño digital de sonrisa y resuelve casos complejos que muchas clínicas no ofrecen, como los implantes cigomáticos para pacientes con pérdida ósea severa. El vuelo directo desde Panamá es de apenas 1.5 horas.',
  },
  {
    question: '¿Cuánto cuesta un All-on-4 en Panamá comparado con Medellín?',
    answer:
      'Los precios quedaron muy parecidos: un All-on-4 por arcada ronda los $14,000-$22,000 en Panamá y $12,000-$20,000 en Medellín. La decisión no debería tomarse solo por precio, sino por la especialización de quien te trata, los materiales y la garantía del resultado a largo plazo.',
  },
  {
    question: '¿Qué hace diferente a la Dra. Carolina frente a una clínica en Panamá?',
    answer:
      'Es especialista en rehabilitación oral, no odontóloga general, con formación en estética dental en New York University. Trabaja con planificación 3D CBCT, cirugía guiada y zirconio fresado CAD/CAM, y es una de las pocas en Colombia certificada en implantes cigomáticos y subperiósticos. Cada caso se planifica en detalle y recibes un presupuesto por escrito antes de viajar.',
  },
  {
    question: 'Me dijeron que no tengo suficiente hueso para implantes. ¿Hay solución?',
    answer:
      'Sí. La Dra. Carolina es una de las pocas especialistas en Colombia certificadas en implantes cigomáticos, diseñados específicamente para pacientes con atrofia maxilar severa a quienes les dijeron "no puedes tener implantes". La cirugía de estos casos complejos la realiza el especialista del equipo. Es justamente uno de los motivos por los que pacientes de Panamá viajan a Medellín.',
  },
  {
    question: '¿Cómo llego a Medellín desde Panamá y cuánto me quedo?',
    answer:
      'Hay vuelo directo de aproximadamente 1.5 horas entre Ciudad de Panamá (PTY) y Medellín (MDE), es de los trayectos más cortos de la región. Para implantes individuales necesitas 5-7 días; para All-on-4, normalmente dos viajes (7-10 días el primero, 5-7 días el segundo unos 4 meses después). Coordinamos tu hospedaje en El Poblado.',
  },
  {
    question: '¿Los materiales son iguales o mejores que en Panamá?',
    answer:
      'Se usan las mismas marcas premium reconocidas internacionalmente (Straumann, Neodent, DioImplant), con imagenología 3D y zirconio CAD/CAM. La diferencia no está en pagar menos por menos, sino en un plan de tratamiento hecho por una especialista y un laboratorio de ceramista experta.',
  },
];

const FAQS_EN = [
  {
    question: 'If implants cost about the same in Panama, why travel to Colombia?',
    answer:
      'Because an oral rehabilitation is about the result and who performs it, not only the price. In Medellín you are treated by Dr. Carolina Macareno, an oral rehabilitation specialist with 17+ years and 3,500+ patients, using premium materials (Straumann, Neodent), digital smile design, and solving complex cases many clinics do not offer, such as zygomatic implants for severe bone loss. The direct flight from Panama is just 1.5 hours.',
  },
  {
    question: 'How much is an All-on-4 in Panama vs Medellín?',
    answer:
      'Pricing is now very similar: an All-on-4 per arch is around $14,000-$22,000 in Panama and $12,000-$20,000 in Medellín. The decision should rest on the specialization of who treats you, the materials, and the long-term result, not on price alone.',
  },
  {
    question: 'I was told I do not have enough bone for implants. Is there a solution?',
    answer:
      'Yes. Dr. Carolina is one of the few specialists in Colombia certified in zygomatic implants, designed for patients with severe maxillary bone atrophy who were told they cannot have implants. This is one of the reasons Panama patients travel to Medellín.',
  },
  {
    question: 'How do I get to Medellín from Panama and how long do I stay?',
    answer:
      'There is a direct flight of about 1.5 hours between Panama City (PTY) and Medellín (MDE). Single implants need 5-7 days; All-on-4 usually two trips. We coordinate your lodging in El Poblado.',
  },
];

const TRIP_STEPS_ES = [
  { name: '1. Videoconsulta gratis', text: 'Envías radiografías y fotos. La Dra. Carolina revisa tu caso en una videollamada de 30 min y te manda un plan con precios exactos.' },
  { name: '2. Vuelo directo de 1.5h', text: 'Reserva tu vuelo de Ciudad de Panamá (PTY) a Medellín (MDE), uno de los trayectos más cortos de la región. Coordinamos tu hospedaje en El Poblado.' },
  { name: '3. Día 1 en Medellín', text: 'Escaneo digital, radiografía panorámica, CBCT si hace falta y confirmación del plan con la especialista.' },
  { name: '4. Tratamiento', text: 'Cirugía de implantes de 60-120 min. All-on-4 con dientes provisionales el mismo día. Los casos complejos los realiza el especialista del equipo.' },
  { name: '5. Recuperación', text: 'Quédate 2-5 días para los controles. Medellín tiene clima perfecto todo el año y todo queda cerca en El Poblado.' },
  { name: '6. Regreso con seguimiento', text: 'Seguimiento por WhatsApp y video. Para All-on-4, un segundo viaje corto finaliza la prótesis definitiva.' },
];

const TRIP_STEPS_EN = [
  { name: '1. Free virtual consultation', text: 'Send X-rays + photos. Dr. Carolina reviews your case in a 30-min video call and sends a plan with exact pricing.' },
  { name: '2. 1.5h direct flight', text: 'Book your flight from Panama City (PTY) to Medellín (MDE), one of the shortest routes in the region. We coordinate your lodging in El Poblado.' },
  { name: '3. Day 1 in Medellín', text: 'Digital scan, panoramic X-ray, CBCT if needed, and plan confirmation with the specialist.' },
  { name: '4. Treatment', text: 'Implant surgery 60-120 min. All-on-4 with provisional teeth the same day. Complex cases are performed by the team specialist.' },
  { name: '5. Recovery', text: 'Stay 2-5 days for post-op checks. Medellín has perfect weather year-round and everything is close in El Poblado.' },
  { name: '6. Fly home with follow-up', text: 'Follow-up by WhatsApp and video. For All-on-4, a short second trip finalizes the definitive prosthetic.' },
];

const DIFF_CARDS_ES = [
  { icon: '🩺', title: 'Especialista, no consulta general', text: 'Dra. Carolina Macareno, especialista en rehabilitación oral, 17+ años, 3.500+ pacientes, formación en estética en NYU. Tu caso lo planifica y ejecuta una especialista.' },
  { icon: '🦷', title: 'Casos complejos que otros no hacen', text: 'Implantes cigomáticos y subperiósticos para pérdida ósea severa. Si en Panamá te dijeron que "no tienes hueso", aquí probablemente sí hay solución.' },
  { icon: '🔬', title: 'Materiales y tecnología premium', text: 'Straumann, Neodent, DioImplant, planificación 3D CBCT, cirugía guiada, zirconio CAD/CAM y ceramista experta. Sin recortes.' },
  { icon: '🎨', title: 'Diseño de sonrisa, no solo función', text: 'No se trata solo de que muerdas bien, sino de que el resultado se vea natural. Diseño digital de sonrisa en cada rehabilitación.' },
  { icon: '✈️', title: 'A 1.5h en vuelo directo', text: 'Ciudad de Panamá a Medellín es de los trayectos más cortos de la región. Ir y volver es sencillo, ideal para el seguimiento.' },
  { icon: '🤝', title: 'Presupuesto y garantía por escrito', text: 'Recibes tu plan y tu presupuesto antes de viajar, y garantía escrita sobre implantes y prótesis. Transparencia total.' },
];

const DIFF_CARDS_EN = [
  { icon: '🩺', title: 'A specialist, not general practice', text: 'Dr. Carolina Macareno, oral rehabilitation specialist, 17+ years, 3,500+ patients, NYU-trained in aesthetics. A specialist plans and performs your case.' },
  { icon: '🦷', title: 'Complex cases others do not do', text: 'Zygomatic and subperiosteal implants for severe bone loss. If you were told in Panama you have no bone, there may be a solution here.' },
  { icon: '🔬', title: 'Premium materials and technology', text: 'Straumann, Neodent, DioImplant, CBCT 3D planning, guided surgery, CAD/CAM zirconia and a master ceramist. No shortcuts.' },
  { icon: '🎨', title: 'Smile design, not just function', text: 'It is not only about biting well, it is about a natural-looking result. Digital smile design in every rehabilitation.' },
  { icon: '✈️', title: '1.5h direct flight', text: 'Panama City to Medellín is one of the shortest routes in the region. Easy to travel back for follow-up.' },
  { icon: '🤝', title: 'Written quote and warranty', text: 'You receive your plan and quote before you fly, plus written warranties on implants and prosthetics. Full transparency.' },
];

export default async function TurismoDentalPanamaPage({
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
    ? 'Hola Dra. Carolina 🇵🇦 Soy de Panamá y me gustaría agendar una videoconsulta gratis de 30 minutos para hablar de mi tratamiento en Medellín.'
    : 'Hi Dr. Carolina 🇵🇦 I am from Panama and I would like to schedule a free 30-minute virtual consultation about treatment in Medellín.';

  const FAQS = isEs ? FAQS_ES : FAQS_EN;
  const TRIP_STEPS = isEs ? TRIP_STEPS_ES : TRIP_STEPS_EN;
  const DIFF_CARDS = isEs ? DIFF_CARDS_ES : DIFF_CARDS_EN;

  const t = isEs
    ? {
        heroBadge: '🇵🇦 → 🇨🇴 · Para pacientes que viajan desde Panamá',
        heroTitlePre: 'El precio es parecido.',
        heroTitleAccent: 'La diferencia está en el resultado',
        heroSubtitle: (
          <>
            Con el dólar, tratarte en Panamá o en Medellín cuesta casi lo mismo. La verdadera diferencia es quién te trata: una especialista en rehabilitación oral, materiales premium y casos complejos que otras clínicas no hacen. A <strong className="text-[#F5F5F0]">1.5 horas en vuelo directo</strong>. Videoconsulta gratis.
          </>
        ),
        trustReviews: '5.0 · 55+ reseñas verificadas',
        trustPatients: '3.500+ pacientes · 40% internacionales',
        trustEducation: 'Estética dental en NYU · 17+ años',
        ctaPrimary: 'Agenda tu videoconsulta gratis',
        ctaPrimarySub: 'Respondemos en horas · Sin compromiso · En español',
        ctaSecondary: '¿Prefieres email? Solicita tu presupuesto por escrito →',
        diffKicker: 'Panamá vs Medellín',
        diffTitle: 'Mismo rango de precio. Esto es lo que cambia',
        diffSubtitle: 'Si el costo es similar, la decisión debería tomarse por el resultado y por quién lo hace.',
        tripKicker: 'Tu plan',
        tripTitle: 'Tu viaje, paso a paso',
        doctorKicker: 'La especialista',
        doctorTitle: 'Dra. Carolina Macareno',
        doctorBio:
          '17+ años especializada en rehabilitación oral, implantes y diseño de sonrisa. Formada en la Universidad CES (Medellín) y New York University (estética). 3.500+ pacientes en Colombia, Panamá, Estados Unidos, Puerto Rico, República Dominicana, España y Chile. Una de las pocas especialistas en Colombia certificadas en implantes cigomáticos.',
        doctorLink: 'Trayectoria profesional completa →',
        faqKicker: 'Preguntas frecuentes',
        faqTitle: 'Lo que preguntan los pacientes de Panamá',
        finalTitle: '¿Listo para dar el primer paso?',
        finalText:
          'Escríbeme por WhatsApp. Te respondo personalmente en horas. La primera videoconsulta de 30 min es gratis: revisamos tu caso, te envío un presupuesto por escrito y decides. A un vuelo corto de casa.',
        finalCta: 'Escribir a la Dra. por WhatsApp',
      }
    : {
        heroBadge: '🇵🇦 → 🇨🇴 · For patients traveling from Panama',
        heroTitlePre: 'The price is similar.',
        heroTitleAccent: 'The difference is the result',
        heroSubtitle: (
          <>
            With the dollar, treating in Panama or Medellín costs about the same. The real difference is who treats you: an oral rehabilitation specialist, premium materials and complex cases other clinics do not do. Just <strong className="text-[#F5F5F0]">1.5 hours by direct flight</strong>. Free virtual consultation.
          </>
        ),
        trustReviews: '5.0 · 55+ verified reviews',
        trustPatients: '3,500+ patients · 40% international',
        trustEducation: 'NYU dental aesthetics · 17+ years',
        ctaPrimary: 'Get Your Free Virtual Consultation',
        ctaPrimarySub: 'Replies within hours · No commitment · Spanish & English',
        ctaSecondary: 'Prefer email? Request your written quote →',
        diffKicker: 'Panama vs Medellín',
        diffTitle: 'Same price range. Here is what changes',
        diffSubtitle: 'If cost is similar, the decision should rest on the result and who performs it.',
        tripKicker: 'Your plan',
        tripTitle: 'Your trip, step by step',
        doctorKicker: 'The specialist',
        doctorTitle: 'Dr. Carolina Macareno',
        doctorBio:
          '17+ years specializing in oral rehabilitation, implants and smile design. Trained at Universidad CES (Medellín) and New York University (aesthetics). 3,500+ patients across Colombia, Panama, the US, Puerto Rico, Dominican Republic, Spain and Chile. One of the few specialists in Colombia certified in zygomatic implants.',
        doctorLink: 'Full professional profile →',
        faqKicker: 'Common questions',
        faqTitle: 'What Panama patients ask',
        finalTitle: 'Ready to take the first step?',
        finalText:
          'Message me on WhatsApp. I personally reply within hours. The first 30-min video consultation is free: we review your case, I send a written quote, and you decide. A short flight from home.',
        finalCta: 'Message Dr. Carolina on WhatsApp',
      };

  const breadcrumbs = breadcrumbSchema([
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Turismo Dental Panamá' : 'Dental Tourism Panama', url },
  ]);

  const webPage = medicalWebPageSchema({
    url,
    name: isEs
      ? 'Turismo Dental Panamá vs Medellín: Implantes con Especialista'
      : 'Dental Tourism Panama vs Medellín: Implants with a Specialist',
    description: isEs
      ? 'Con precios similares entre Panamá y Colombia, la diferencia está en la especialización, los materiales y los casos complejos. Vuelo directo de 1.5h desde Panamá.'
      : 'With similar pricing between Panama and Colombia, the difference is specialization, materials and complex cases. 1.5h direct flight from Panama.',
    procedureName: 'Dental Implants',
  });

  const procedure = medicalServiceSchema({
    name: 'Dental Implants, Panama Patient Program',
    description:
      'Dental implants, All-on-4, smile design and complex cases (zygomatic implants) for patients traveling from Panama to Medellín, Colombia. Specialist care, 1.5h direct flight, pre-travel video consultation.',
    url,
    keywords: [
      'dental implants Panama patients',
      'all on 4 Panama vs Colombia',
      'zygomatic implants Colombia',
      'dental tourism Medellín Panama',
    ],
  });

  const faqs = faqSchema(FAQS);

  const trip = howToSchema({
    name: isEs
      ? 'Planea tu viaje de Panamá a Medellín para tratamiento dental'
      : 'Plan your dental trip from Panama to Medellín',
    description: isEs
      ? 'Plan paso a paso para que un paciente de Panamá viaje a Medellín, Colombia, para implantes o rehabilitación oral con la Dra. Carolina Macareno.'
      : 'Step-by-step plan for a Panama patient to travel to Medellín, Colombia for dental implants or oral rehabilitation with Dr. Carolina Macareno.',
    totalTime: 'P7D',
    estimatedCost: { currency: 'USD', value: '15000' },
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

            <WhatsAppLink
              message={waConsultMsg}
              locale={calcLocale}
              trackingLabel="panama_landing_hero"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
              </svg>
              {t.ctaPrimary}
            </WhatsAppLink>
            <p className="text-[#6B7280] text-xs mt-4">{t.ctaPrimarySub}</p>
            <p className="mt-5">
              <a
                href="#lead-form"
                className="text-[#C9A461] hover:text-[#E5B866] text-sm font-medium underline-offset-4 hover:underline transition-colors"
              >
                {t.ctaSecondary}
              </a>
            </p>
          </div>
        </section>

        {/* Panama vs Medellín, quality differentiators (no savings calculator) */}
        <section id="results" className="px-4 sm:px-6 py-16 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase text-center mb-3">
              {t.diffKicker}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-3"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.diffTitle}
            </h2>
            <p className="text-[#9CA3AF] text-center max-w-2xl mx-auto mb-12">{t.diffSubtitle}</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {DIFF_CARDS.map((item) => (
                <div key={item.title} className="bg-[#0D1321] border border-[#1F2937] rounded-xl p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-[#F5F5F0] font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel costs (short flight is a plus for Panama) */}
        <TravelCostsSection locale={calcLocale} />

        {/* Trip plan */}
        <section id="trip" className="px-4 sm:px-6 py-16 bg-[#0D1321] border-y border-[#1F2937] scroll-mt-24">
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

        {/* Lead form */}
        <InternationalLeadForm locale={calcLocale} />

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
              trackingLabel="panama_landing_final"
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
