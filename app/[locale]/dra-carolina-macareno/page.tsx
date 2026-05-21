import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SchemaOrg, { breadcrumbSchema } from '@/components/SchemaOrg';
import WhatsAppLink from '@/components/WhatsAppLink';

const BASE = 'https://dracarolinamacareno.com';
const WA_NUMBER = '573163975232';

/**
 * Brand anchor page — /dra-carolina-macareno
 *
 * Goal: rank #1 when users search "Dra Carolina Macareno" (or variants) and
 * outrank Doctoralia/TopDoctor for the personal-brand query. Also serves as
 * the canonical biography URL that all external profiles (LinkedIn, IG bio,
 * GBP, Doctoralia) should link back to.
 *
 * Created May 2026 after GA4 audit confirmed no brand-search anchor existed.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const url = isEs ? `${BASE}/dra-carolina-macareno` : `${BASE}/en/dra-carolina-macareno`;
  return {
    title: isEs
      ? 'Dra. Carolina Macareno — Trayectoria Profesional | Rehabilitadora Oral Medellín'
      : 'Dr. Carolina Macareno — Professional Profile | Oral Rehabilitation Specialist Medellín',
    description: isEs
      ? 'Conoce a la Dra. Carolina Macareno: odontóloga rehabilitadora oral con 17+ años de experiencia clínica y 3.500+ pacientes en Medellín. Especialista en All-on-4, implantes cigomáticos y diseño de sonrisa digital.'
      : 'Meet Dr. Carolina Macareno: oral rehabilitation specialist with 17+ years of clinical experience and 3,500+ patients in Medellín. Expert in All-on-4, zygomatic implants, and digital smile design.',
    keywords: [
      'Dra Carolina Macareno',
      'Dra. Carolina Macareno',
      'dentista rehabilitadora Medellín',
      'odontóloga implantes Medellín',
      'especialista rehabilitación oral Colombia',
      'Carolina Macareno El Poblado',
    ],
    alternates: {
      canonical: url,
      languages: {
        es: `${BASE}/dra-carolina-macareno`,
        en: `${BASE}/en/dra-carolina-macareno`,
      },
    },
    openGraph: {
      title: isEs
        ? 'Dra. Carolina Macareno — Trayectoria Profesional'
        : 'Dr. Carolina Macareno — Professional Profile',
      description: isEs
        ? 'Odontóloga rehabilitadora oral. 17+ años de experiencia. 3.500+ pacientes en Colombia y el mundo.'
        : 'Oral rehabilitation specialist. 17+ years of experience. 3,500+ patients across Colombia and the world.',
      url,
      type: 'profile',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

function profileSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      '@id': `${BASE}/dra-carolina-macareno#person`,
      name: 'Dra. Carolina Macareno',
      alternateName: ['Dr. Carolina Macareno', 'Carolina Macareno', 'Dra Caro Macareno'],
      givenName: 'Carolina',
      familyName: 'Macareno',
      honorificPrefix: locale === 'es' ? 'Dra.' : 'Dr.',
      jobTitle: locale === 'es' ? 'Odontóloga especialista en rehabilitación oral, estética e implantología' : 'Oral Rehabilitation, Aesthetics & Implantology Specialist',
      description:
        locale === 'es'
          ? 'Odontóloga rehabilitadora oral con más de 17 años de experiencia clínica y 3.500+ pacientes transformados en Colombia, Panamá, Chile, Estados Unidos y Puerto Rico.'
          : 'Oral rehabilitation specialist with over 17 years of clinical experience and 3,500+ patients transformed in Colombia, Panama, Chile, the United States, and Puerto Rico.',
      image: `${BASE}/images/dra-carolina-perfil.webp`,
      url: locale === 'es' ? `${BASE}/dra-carolina-macareno` : `${BASE}/en/dra-carolina-macareno`,
      worksFor: {
        '@type': 'DentalClinic',
        name: 'Consultorio Dra. Carolina Macareno',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Cra. 25 #1A Sur-155, Cons. 1353, Edificio Platinum Superior',
          addressLocality: 'El Poblado',
          addressRegion: 'Antioquia',
          addressCountry: 'CO',
        },
      },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Universidad El Bosque', sameAs: 'https://www.unbosque.edu.co/' },
        { '@type': 'EducationalOrganization', name: 'Universidad CES', sameAs: 'https://www.ces.edu.co/' },
        { '@type': 'EducationalOrganization', name: 'FACOP Brasil' },
        { '@type': 'EducationalOrganization', name: 'New York University', sameAs: 'https://www.nyu.edu/' },
      ],
      knowsAbout: [
        'Rehabilitación oral',
        'Implantes dentales',
        'All-on-4',
        'All-on-6',
        'Implantes cigomáticos',
        'Implantes subperiósticos',
        'Prótesis fija atornillada',
        'Diseño de sonrisa cerámico',
        'Carillas de porcelana',
        'Estética dental',
        'Turismo dental Colombia',
      ],
      sameAs: [
        'https://www.instagram.com/dracarolinamacareno/',
        'https://www.facebook.com/dracarolinamacareno',
        'https://www.doctoralia.co/carolina-macareno',
      ],
    },
  };
}

export default async function DraCarolinaMacarenoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const localePath = (p: string) => (locale === 'es' ? p : `/en${p}`);

  // Plain (un-encoded) message — WhatsAppLink applies encoding + source tag client-side.
  const waMsg = isEs
    ? 'Hola Dra. Carolina 🌐 Leí su trayectoria profesional y me gustaría agendar una consulta.'
    : 'Hi Dr. Carolina 🌐 I read your professional profile and I would like to book a consultation.';
  // Fallback href in case JS doesn't run (no source tag).
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  void waHref;

  const breadcrumbs = breadcrumbSchema([
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: 'Dra. Carolina Macareno', url: isEs ? `${BASE}/dra-carolina-macareno` : `${BASE}/en/dra-carolina-macareno` },
  ]);

  return (
    <>
      <SchemaOrg schema={profileSchema(locale)} />
      <SchemaOrg schema={breadcrumbs} />

      <article className="bg-[#070B14] text-[#F5F5F0] min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="mb-16 text-center">
            <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase mb-4">
              {isEs ? 'Trayectoria Profesional' : 'Professional Profile'}
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Dra. Carolina Macareno
            </h1>
            <p className="text-lg sm:text-xl text-[#C9A461] font-light max-w-2xl mx-auto mb-8">
              {isEs
                ? 'Odontóloga especialista en rehabilitación oral · Medellín, Colombia'
                : 'Oral rehabilitation specialist · Medellín, Colombia'}
            </p>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-2 border-[#C9A461]/40 shadow-xl shadow-[#C9A461]/10">
              <Image
                src="/images/dra-carolina-perfil.webp"
                alt={
                  isEs
                    ? 'Dra. Carolina Macareno — Odontóloga Rehabilitadora Oral en Medellín'
                    : 'Dr. Carolina Macareno — Oral Rehabilitation Specialist in Medellín'
                }
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
          </header>

          {/* Resumen */}
          <section id="resumen" className="mb-16">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6 text-[#C9A461]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs
                ? 'Una trayectoria de 17 años transformando sonrisas'
                : '17 years transforming smiles'}
            </h2>
            <div className="space-y-5 text-[#D1D5DB] leading-relaxed text-base sm:text-lg">
              <p>
                {isEs
                  ? 'Soy la Dra. Carolina Macareno, especialista en Rehabilitación Oral, Estética e Implantología con más de 17 años de experiencia clínica en Medellín, Colombia. Mi consultorio en El Poblado se ha convertido en un punto de referencia para pacientes nacionales e internacionales que buscan tratamientos de rehabilitación oral integral con los más altos estándares técnicos y estéticos.'
                  : 'I am Dr. Carolina Macareno, specialist in Oral Rehabilitation, Aesthetics, and Implantology with over 17 years of clinical experience in Medellín, Colombia. My practice in El Poblado has become a reference point for both national and international patients seeking comprehensive oral rehabilitation treatments at the highest technical and aesthetic standards.'}
              </p>
              <p>
                {isEs
                  ? 'A lo largo de mi carrera he tenido el privilegio de transformar más de 3.500 sonrisas — pacientes provenientes de Colombia, Panamá, Chile, Estados Unidos, Puerto Rico y España. Cada caso me ha enseñado que devolver dientes no es solo un acto técnico: es restaurar la confianza para hablar, comer y sonreír sin reservas.'
                  : 'Throughout my career I have had the privilege of transforming more than 3,500 smiles — patients from Colombia, Panama, Chile, the United States, Puerto Rico, and Spain. Every case has taught me that restoring teeth is not just a technical act: it is restoring the confidence to speak, eat, and smile without reservations.'}
              </p>
            </div>
          </section>

          {/* Formación */}
          <section id="formacion" className="mb-16">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6 text-[#C9A461]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Formación académica' : 'Academic background'}
            </h2>
            <ul className="space-y-4 text-[#D1D5DB] text-base">
              <li className="flex flex-col sm:flex-row sm:gap-4 border-l-2 border-[#C9A461]/40 pl-4">
                <span className="text-[#C9A461] font-semibold whitespace-nowrap sm:min-w-[140px]">2002</span>
                <span>
                  {isEs ? 'Odontóloga, Universidad El Bosque (Bogotá, Colombia)' : 'Dentist, Universidad El Bosque (Bogotá, Colombia)'}
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-4 border-l-2 border-[#C9A461]/40 pl-4">
                <span className="text-[#C9A461] font-semibold whitespace-nowrap sm:min-w-[140px]">2009</span>
                <span>
                  {isEs ? 'Especialista en Rehabilitación Oral, Universidad CES (Medellín, Colombia)' : 'Specialist in Oral Rehabilitation, Universidad CES (Medellín, Colombia)'}
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-4 border-l-2 border-[#C9A461]/40 pl-4">
                <span className="text-[#C9A461] font-semibold whitespace-nowrap sm:min-w-[140px]">{isEs ? 'Continua' : 'Ongoing'}</span>
                <span>
                  {isEs
                    ? 'Formación avanzada en implantología — FACOP (Brasil) · Estética dental — New York University (EEUU)'
                    : 'Advanced training in implantology — FACOP (Brazil) · Dental aesthetics — New York University (USA)'}
                </span>
              </li>
            </ul>
          </section>

          {/* Especializaciones */}
          <section id="especializaciones" className="mb-16">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6 text-[#C9A461]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Áreas de especialización' : 'Areas of specialization'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                isEs ? 'Implantes dentales (Straumann, Neodent, DioImplant)' : 'Dental implants (Straumann, Neodent, DioImplant)',
                isEs ? 'Rehabilitación oral completa' : 'Full mouth rehabilitation',
                isEs ? 'All-on-4 y All-on-6' : 'All-on-4 and All-on-6',
                isEs ? 'Implantes cigomáticos' : 'Zygomatic implants',
                isEs ? 'Implantes subperiósticos' : 'Subperiosteal implants',
                isEs ? 'Prótesis fija atornillada' : 'Screw-retained fixed prosthetics',
                isEs ? 'Diseño de sonrisa cerámico' : 'Ceramic smile design',
                isEs ? 'Carillas de porcelana y zirconio' : 'Porcelain and zirconia veneers',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start text-[#D1D5DB]">
                  <span className="text-[#C9A461] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A461] flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pacientes internacionales */}
          <section id="pacientes-internacionales" className="mb-16">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6 text-[#C9A461]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Atención a pacientes internacionales' : 'International patients'}
            </h2>
            <p className="text-[#D1D5DB] leading-relaxed text-base sm:text-lg mb-4">
              {isEs
                ? 'Más del 40% de mis pacientes vienen de fuera de Colombia — principalmente Estados Unidos, Puerto Rico, Panamá, España y Chile. Mi consultorio está preparado para atención bilingüe completa, planificación digital pre-viaje, coordinación de hospedaje en El Poblado y consultas de seguimiento virtuales para minimizar la estadía en Medellín.'
                : 'More than 40% of my patients come from outside Colombia — mainly from the United States, Puerto Rico, Panama, Spain, and Chile. My practice is fully equipped for bilingual care, pre-travel digital planning, accommodation coordination in El Poblado, and virtual follow-up consultations to minimize your stay in Medellín.'}
            </p>
            <Link
              href={localePath('/dental-tourism-colombia')}
              className="inline-block text-[#C9A461] hover:text-[#E5B866] underline underline-offset-4 text-sm font-medium"
            >
              {isEs ? 'Conocer el programa de turismo dental →' : 'Learn about the dental tourism program →'}
            </Link>
          </section>

          {/* Filosofía */}
          <section id="filosofia" className="mb-16">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6 text-[#C9A461]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Filosofía profesional' : 'Professional philosophy'}
            </h2>
            <div className="space-y-4 text-[#D1D5DB] leading-relaxed text-base sm:text-lg">
              <p>
                {isEs
                  ? 'Creo profundamente en la odontología basada en evidencia y en la planificación digital previa a cada procedimiento. Antes de tocar un solo diente, el paciente recibe un escaneo 3D, una propuesta visual del resultado final y un plan transparente con costos, tiempos y alternativas.'
                  : 'I deeply believe in evidence-based dentistry and in thorough digital planning before every procedure. Before touching a single tooth, the patient receives a 3D scan, a visual proposal of the final outcome, and a transparent plan with costs, timing, and alternatives.'}
              </p>
              <p>
                {isEs
                  ? 'Cuento con un equipo de especialistas de respaldo — periodoncia, endodoncia, cirugía maxilofacial y ortodoncia — para garantizar que cada caso reciba el tratamiento integral que requiere, sin compromisos.'
                  : 'I work with a team of supporting specialists — periodontics, endodontics, maxillofacial surgery and orthodontics — to guarantee that every case receives the comprehensive treatment it deserves, without compromise.'}
              </p>
            </div>
          </section>

          {/* CTA */}
          <section id="contacto" className="text-center py-12 border-t border-[#1F2937]">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? '¿Quieres conversar conmigo?' : 'Would you like to talk?'}
            </h2>
            <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
              {isEs
                ? 'Escríbeme directamente por WhatsApp. Te respondo personalmente y te oriento sobre el primer paso para tu caso.'
                : "Message me directly on WhatsApp. I'll personally reply and guide you on the first step for your case."}
            </p>
            <WhatsAppLink
              message={waMsg}
              locale={isEs ? 'es' : 'en'}
              trackingLabel="brand_anchor_page_cta"
              className="inline-flex items-center gap-2 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-8 py-4 rounded text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#C9A461]/20"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
              </svg>
              {isEs ? 'Escribir por WhatsApp' : 'Message on WhatsApp'}
            </WhatsAppLink>
          </section>
        </div>
      </article>
    </>
  );
}
