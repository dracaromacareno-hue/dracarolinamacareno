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

const BASE = 'https://dracarolinamacareno.com';
const WA_NUMBER = '573163975232';

/**
 * USA-focused dental tourism landing — /en/dental-implants-for-us-patients
 *
 * Built May 2026 after GA4 audit revealed:
 *  - 13 US visitors/week growing +225% (organic, no paid acquisition)
 *  - Top market by user count after Colombia, but no dedicated US landing
 *  - /en/dental-tourism-colombia was generic (not US-specific)
 *
 * Strategy:
 *  - Address US-specific objections (Medicare doesn't cover, ClearChoice $50K, etc.)
 *  - Quantify savings with interactive calculator (SavingsCalculator.tsx)
 *  - Address travel/logistics fear with HowTo schema 6-step trip plan
 *  - Triple proof: 17 yrs + 3,500 patients + 5.0 rating
 *  - Direct WhatsApp CTA from every section (no /contact funnel)
 *
 * Locale handling: page lives under [locale] so /en/... AND /dental-implants-for-us-patients
 * both render. Canonical points to the /en version since copy is English-only.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  // Canonical always points to EN — copy is English-only by design (US audience)
  const canonical = `${BASE}/en/dental-implants-for-us-patients`;

  return {
    title: isEs
      ? 'Dental Implants for US Patients in Medellín | Save 60-70% — Dr. Carolina Macareno'
      : 'Dental Implants for US Patients in Medellín, Colombia | Save 60-70% — Dr. Carolina Macareno',
    description:
      'US patients save 60-70% on dental implants, All-on-4, and full-mouth rehabilitation in Medellín, Colombia. Same materials (Straumann, Neodent), bilingual care, 17+ years experience. Free virtual consultation.',
    keywords: [
      'dental implants for US patients',
      'dental implants Colombia',
      'all on 4 Colombia for Americans',
      'dental tourism Medellín USA',
      'cheap dental implants abroad',
      'Medicare dental implants alternative',
      'ClearChoice alternative Colombia',
      'best dentist Medellín English speaking',
      'zygomatic implants Colombia',
      'dental work Colombia for foreigners',
    ],
    alternates: {
      canonical,
      languages: {
        en: canonical,
        // No ES variant — US-targeted page kept English-only by design
      },
    },
    openGraph: {
      title: 'Dental Implants for US Patients in Medellín, Colombia | Save 60-70%',
      description:
        'Save $10K–$40K on implants, All-on-4 and smile makeovers in Medellín. Same materials, bilingual care, 17+ years experience. Free virtual consult.',
      url: canonical,
      type: 'website',
      locale: 'en_US',
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Dental Implants for US Patients | Save 60-70% in Medellín',
      description:
        'Same materials, bilingual care, free virtual consult. Dr. Carolina Macareno, 17+ years experience.',
    },
  };
}

const FAQS = [
  {
    question: 'Is dental work in Colombia safe for US patients?',
    answer:
      'Yes. Dr. Carolina Macareno operates a private practice in El Poblado, Medellín, using FDA-approved materials and the same implant brands used in the US (Straumann, Neodent, DioImplant). She has treated 3,500+ patients including over 40% from outside Colombia, with a 5.0 average rating across verified review platforms.',
  },
  {
    question: 'How much can I really save vs treatment in the United States?',
    answer:
      'Typical savings are 60-70%. A single implant runs $4,500-$6,000 in the US (per Aspen Dental and NewMouth 2025 surveys) vs $1,800-$2,400 with Dr. Carolina. An All-on-4 full arch is $25,000-$50,000 at ClearChoice vs $12,000-$16,000 in Medellín — a savings of $10,000-$40,000 even after counting flights and hotel.',
  },
  {
    question: 'How long do I need to stay in Medellín?',
    answer:
      'For single implants: typically 5-7 days (one visit). For All-on-4: usually two trips — Trip 1 (7-10 days) for surgery and provisional teeth; Trip 2 (5-7 days) about 4 months later for the definitive prosthetic. For veneers and smile design: 7-10 days total. Pre-visit planning is done by video so the in-clinic time is minimized.',
  },
  {
    question: 'Does Dr. Carolina speak English?',
    answer:
      'Yes — Dr. Carolina speaks fluent English and trained in dental aesthetics at New York University. All consultations, treatment planning, written quotes, and post-op instructions are bilingual. Her chairside team also speaks English.',
  },
  {
    question: 'What if I have severe bone loss and was told I cannot have implants in the US?',
    answer:
      'Dr. Carolina is one of the few specialists in Colombia certified in zygomatic implants and subperiosteal implants — both designed specifically for patients with severe maxillary bone atrophy. US patients told "you have no bone, you cannot have implants" routinely receive treatment here.',
  },
  {
    question: 'Can I have a consultation before flying?',
    answer:
      "Yes. Every US patient gets a free 30-minute video consultation. You'll send a panoramic X-ray and intraoral photos (your local dentist can take these), and Dr. Carolina will review your case, propose a treatment plan, and send a written quote — all before you book the trip. Zero risk to evaluate.",
  },
  {
    question: 'What about flights and where do I stay?',
    answer:
      'Medellín has direct flights from Miami (3h), Atlanta (5h), Fort Lauderdale (4h), New York (6h), Houston (5h), and Los Angeles (8h). The practice coordinates with vetted hotels and apartments in El Poblado within 5-10 min walking distance of the clinic. Many patients combine treatment with the Medellín experience (it has become one of the top US-expat cities in Latin America).',
  },
  {
    question: 'What if something goes wrong after I fly home?',
    answer:
      'Dr. Carolina provides written warranties on implants and prosthetic work. Follow-ups are by video. If you need an in-person visit, return flights to Medellín are often cheaper than a single US dental visit. Local emergency support in your US city is also available through her network of US-based specialists.',
  },
];

const TRIP_STEPS = [
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

export default async function DentalImplantsUsPatientsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params; // ensure params resolves; copy is locale-independent here

  const url = `${BASE}/en/dental-implants-for-us-patients`;
  const waConsult = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Hi Dr. Carolina 🌐 I am a US patient and I would like to schedule a free 30-minute virtual consultation about my case.',
  )}`;

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: `${BASE}/en` },
    { name: 'Dental Implants for US Patients', url },
  ]);

  const webPage = medicalWebPageSchema({
    url,
    name: 'Dental Implants for US Patients in Medellín, Colombia',
    description:
      'Save 60-70% on dental implants, All-on-4, and full-mouth rehabilitation in Medellín, Colombia. Same materials, bilingual care, 17+ years experience.',
    procedureName: 'Dental Implants',
  });

  const procedure = medicalServiceSchema({
    name: 'Dental Implants — International Patient Program',
    description:
      'Dental implants for international (US, Puerto Rico, Panama, Spain) patients, including All-on-4, All-on-6, zygomatic and subperiosteal implants. Bilingual care, pre-travel video consultation, coordinated lodging in El Poblado.',
    url,
    keywords: [
      'dental implants USA patients',
      'all on 4 Colombia for Americans',
      'zygomatic implants Colombia',
      'Medellín dental tourism',
    ],
  });

  const faqs = faqSchema(FAQS);

  const trip = howToSchema({
    name: 'Plan your dental treatment trip to Medellín from the US',
    description:
      'Step-by-step plan for a US patient to travel to Medellín, Colombia for dental implants or smile design with Dr. Carolina Macareno.',
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
              🇺🇸 → 🇨🇴 · For Patients Traveling from the United States
            </p>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Dental Implants in Medellín for{' '}
              <span className="text-[#C9A461]">US Patients</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#D1D5DB] max-w-2xl mx-auto mb-8 leading-relaxed">
              Save 60–70% on implants, All-on-4, and full-mouth rehabilitation. Same materials. Bilingual care. 17+ years experience. <strong className="text-[#F5F5F0]">Free virtual consultation</strong> before you fly.
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10 text-[#9CA3AF] text-sm">
              <span className="flex items-center gap-2">
                <span className="text-[#C9A461] text-lg">★</span> 5.0 rating · 55+ verified reviews
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#C9A461]">👥</span> 3,500+ patients · 40% international
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#C9A461]">🎓</span> NYU dental aesthetics · 17+ years
              </span>
            </div>

            {/* Primary CTA */}
            <a
              href={waConsult}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
              </svg>
              Get Your Free Virtual Consultation
            </a>
            <p className="text-[#6B7280] text-xs mt-4">
              Replies within hours · No commitment · English & Spanish
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="px-4 sm:px-6 pb-16">
          <div className="max-w-2xl mx-auto">
            <SavingsCalculator />
          </div>
        </section>

        {/* Why patients travel */}
        <section className="px-4 sm:px-6 py-16 bg-[#0D1321] border-y border-[#1F2937]">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#C9A461]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Why US patients choose Medellín
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: '💵',
                  title: 'Real savings, not low quality',
                  text: 'Same Straumann, Neodent and Nobel-equivalent implants used in the US — at a third of the price. The savings come from the cost of living in Colombia, not from cutting corners.',
                },
                {
                  icon: '🩺',
                  title: 'Specialist, not a chain',
                  text: 'Dr. Carolina is a board-certified oral rehabilitation specialist — 17 years, 3,500 patients, NYU-trained in aesthetics. Not a high-volume dental chain.',
                },
                {
                  icon: '✈️',
                  title: 'Direct flights from major US cities',
                  text: 'Medellín is 3-6 hours from Miami, Atlanta, NYC, Houston, LA. Combine the treatment with the city Anthony Bourdain called one of his favorites in the Americas.',
                },
                {
                  icon: '🗣️',
                  title: 'Bilingual care, end to end',
                  text: 'Every consultation, treatment plan, and follow-up is bilingual. Your written quote, your post-op instructions, your insurance receipts — all in English.',
                },
                {
                  icon: '🔬',
                  title: 'Same materials & technology',
                  text: 'CBCT 3D imaging, digital smile design, CAD/CAM milled zirconia, guided implant surgery. Same protocols as top US clinics.',
                },
                {
                  icon: '🤝',
                  title: 'Honest pricing, written upfront',
                  text: 'You receive a written quote in USD before you fly. No surprise add-ons. No "we found something" mid-treatment. Transparent, fixed pricing.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#070B14] border border-[#1F2937] rounded-xl p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-[#F5F5F0] font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trip plan */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase text-center mb-3">
              Your Plan
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-10"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Your trip, step by step
            </h2>
            <ol className="space-y-5">
              {TRIP_STEPS.map((step, i) => (
                <li key={step.name} className="bg-[#0D1321] border border-[#1F2937] rounded-xl p-5 flex gap-4">
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
        <section className="px-4 sm:px-6 py-16 bg-[#0D1321] border-y border-[#1F2937]">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#C9A461]/40">
              <Image
                src="/images/dra-carolina-perfil.webp"
                alt="Dr. Carolina Macareno — Oral Rehabilitation Specialist in Medellín"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, 192px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase mb-2">
                The specialist
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                Dr. Carolina Macareno
              </h2>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed mb-4">
                17+ years specializing in oral rehabilitation, implants and smile design. Trained at Universidad CES (Medellín) and New York University (aesthetics). 3,500+ patients across Colombia, USA, Puerto Rico, Panama, Spain and Chile. Fluent English speaker.
              </p>
              <Link
                href="/en/dra-carolina-macareno"
                className="inline-block text-[#C9A461] hover:text-[#E5B866] underline underline-offset-4 text-sm font-medium"
              >
                Full professional profile →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase text-center mb-3">
              Common questions
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-10"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Everything US patients ask
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-[#0D1321] border border-[#1F2937] rounded-xl px-5 py-4 open:border-[#C9A461]/40 transition-colors"
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
        <section className="px-4 sm:px-6 py-20 text-center border-t border-[#1F2937]">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Ready to take the first step?
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg mb-8 leading-relaxed">
              Send a message on WhatsApp. Dr. Carolina personally replies within hours. The first 30-min video consultation is free — review your case, get a written quote, and decide if Medellín is right for you. Zero risk.
            </p>
            <a
              href={waConsult}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
              </svg>
              Message Dr. Carolina on WhatsApp
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
