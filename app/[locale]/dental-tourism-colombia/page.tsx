import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg from '@/components/SchemaOrg';

const WA_EN = 'https://wa.me/573163975232?text=Hi%2C%20I%20found%20you%20through%20your%20dental%20tourism%20page%20and%20would%20like%20to%20know%20more%20about%20treatment%20options%20in%20Medell%C3%ADn';
const WA_ES = 'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20información%20sobre%20turismo%20dental%20en%20Medellín';

const BASE = 'https://dracarolinamacareno.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  return {
    title: isEs
      ? 'Turismo Dental en Medellín Colombia | Rehabilitadora Oral — Dra. Carolina Macareno'
      : 'Dental Tourism in Colombia Medellín | Oral Rehabilitation Specialist — Dr. Carolina Macareno',
    description: isEs
      ? 'Turismo dental de primer nivel en Medellín, Colombia. Implantes, All-on-4, diseño de sonrisa y rehabilitación oral completa. Ahorra hasta 70% vs precios en EE.UU. Dra. Carolina Macareno, 17+ años de experiencia.'
      : 'World-class dental tourism in Medellín, Colombia. Implants, All-on-4, smile design and full oral rehabilitation. Save up to 70% vs USA prices. Dr. Carolina Macareno, 17+ years experience.',
    keywords: isEs
      ? ['turismo dental Colombia', 'turismo dental Medellín', 'rehabilitación oral Medellín', 'implantes dentales Colombia', 'All-on-4 Colombia', 'diseño de sonrisa Medellín', 'dentista Medellín internacional']
      : ['dental tourism Colombia', 'dental tourism Medellín', 'oral rehabilitation Colombia', 'dental implants Medellín', 'All-on-4 Colombia', 'smile makeover Colombia', 'oral rehabilitation specialist Medellín', 'dental work Panama', 'dental work Colombia USA'],
    alternates: {
      canonical: isEs ? `${BASE}/dental-tourism-colombia` : `${BASE}/en/dental-tourism-colombia`,
      languages: {
        'es': `${BASE}/dental-tourism-colombia`,
        'en': `${BASE}/en/dental-tourism-colombia`,
      },
    },
    openGraph: {
      title: isEs
        ? 'Turismo Dental en Medellín | Dra. Carolina Macareno'
        : 'Dental Tourism in Medellín Colombia | Dr. Carolina Macareno',
      description: isEs
        ? 'Rehabilitación oral, implantes y diseño de sonrisa en Medellín. Ahorra hasta 70% con calidad de primer mundo.'
        : 'Oral rehabilitation, implants and smile design in Medellín. Save up to 70% with world-class quality.',
      url: isEs ? `${BASE}/dental-tourism-colombia` : `${BASE}/en/dental-tourism-colombia`,
    },
  };
}

export default async function DentalTourismColombia({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const WA = isEs ? WA_ES : WA_EN;

  const dentalTourismSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: isEs ? 'Turismo Dental en Colombia — Dra. Carolina Macareno' : 'Dental Tourism in Colombia — Dr. Carolina Macareno',
    description: isEs
      ? 'Rehabilitación oral completa, implantes dentales y diseño de sonrisa en Medellín, Colombia. Especialista con 17 años de experiencia atendiendo pacientes internacionales.'
      : 'Full oral rehabilitation, dental implants and smile design in Medellín, Colombia. Specialist with 17 years experience serving international patients.',
    url: isEs ? `${BASE}/dental-tourism-colombia` : `${BASE}/en/dental-tourism-colombia`,
    about: {
      '@type': 'Dentist',
      name: 'Dra. Carolina Macareno',
      medicalSpecialty: ['Dentistry', 'Oral Rehabilitation'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cra. 25 #1A Sur-155, Consultorio 1353',
        addressLocality: 'Medellín',
        addressRegion: 'Antioquia',
        addressCountry: 'CO',
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Panama' },
        { '@type': 'Country', name: 'Puerto Rico' },
        { '@type': 'Country', name: 'Costa Rica' },
        { '@type': 'Country', name: 'Colombia' },
      ],
      telephone: '+573163975232',
      url: BASE,
    },
    specialty: 'Oral Rehabilitation, Dental Implants, Smile Design, Dental Tourism',
  };

  const savings = [
    {
      procedure: isEs ? 'Implante unitario (titanio + corona)' : 'Single implant (titanium + crown)',
      usa: '$3,500 – $6,000',
      col: '$1,200 – $2,000',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
    {
      procedure: 'All-on-4',
      usa: '$25,000 – $35,000',
      col: '$8,500 – $12,000',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
    {
      procedure: isEs ? 'Carillas de porcelana (por unidad)' : 'Porcelain veneers (per unit)',
      usa: '$1,500 – $2,500',
      col: '$550 – $850',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
    {
      procedure: isEs ? 'Diseño de sonrisa completo (10 carillas)' : 'Full smile design (10 veneers)',
      usa: '$15,000 – $25,000',
      col: '$5,500 – $8,500',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
    {
      procedure: isEs ? 'Rehabilitación oral completa' : 'Full mouth rehabilitation',
      usa: '$40,000 – $80,000',
      col: '$12,000 – $25,000',
      save: isEs ? 'Ahorra ~70%' : 'Save ~70%',
    },
  ];

  const whyMedellin = isEs ? [
    { icon: '✈️', title: 'Ciudad fácil de llegar', desc: 'Vuelos directos desde Miami, Nueva York, Bogotá, Ciudad de Panamá y muchas otras ciudades.' },
    { icon: '🏨', title: 'Alojamiento premium a bajo costo', desc: 'El Poblado, donde está el consultorio, es el barrio más turístico de Medellín. Hoteles de 5 estrellas desde $80 USD/noche.' },
    { icon: '🌡️', title: 'Clima perfecto todo el año', desc: 'Medellín es la "Ciudad de la Eterna Primavera". 22°C promedio, ideal para recuperarte cómodamente.' },
    { icon: '🦷', title: 'Odontología de clase mundial', desc: 'Colombia forma a sus especialistas en los mejores programas de América Latina. Tecnología de punta, materiales importados.' },
    { icon: '💰', title: 'Ahorro real sin sacrificar calidad', desc: 'Hasta 70% de ahorro vs. EE.UU. o Europa. El mismo nivel de atención, los mismos materiales, a una fracción del costo.' },
    { icon: '🔒', title: 'Seguridad y confort', desc: 'El Poblado es la zona más segura y moderna de Medellín. Restaurantes, spas, centros comerciales — todo a pasos del consultorio.' },
  ] : [
    { icon: '✈️', title: 'Easy city to reach', desc: 'Direct flights from Miami, New York, Bogotá, Panama City and many other cities.' },
    { icon: '🏨', title: 'Premium accommodation at low cost', desc: 'El Poblado, where the clinic is, is Medellín\'s most touristic neighborhood. 5-star hotels from $80 USD/night.' },
    { icon: '🌡️', title: 'Perfect climate year-round', desc: 'Medellín is the "City of Eternal Spring". 22°C average, ideal for a comfortable recovery.' },
    { icon: '🦷', title: 'World-class dentistry', desc: 'Colombia trains its specialists in Latin America\'s best programs. Cutting-edge technology, imported materials.' },
    { icon: '💰', title: 'Real savings without sacrificing quality', desc: 'Up to 70% savings vs. USA or Europe. Same level of care, same materials, at a fraction of the cost.' },
    { icon: '🔒', title: 'Safety and comfort', desc: 'El Poblado is Medellín\'s safest and most modern area. Restaurants, spas, shopping centers — all steps from the clinic.' },
  ];

  const faqs = isEs ? [
    {
      q: '¿Es seguro hacerse tratamiento dental en Colombia?',
      a: 'Sí. Colombia tiene una de las escuelas de odontología más reconocidas de América Latina. Los especialistas están formados bajo los mismos estándares internacionales que en EE.UU. o Europa. El consultorio trabaja con materiales importados de marcas reconocidas mundialmente.',
    },
    {
      q: '¿Cuánto tiempo necesito estar en Medellín?',
      a: 'Depende del tratamiento. Para implantes unitarios o carillas, generalmente 5-7 días. Para All-on-4 con prótesis provisional, 7-10 días. Para rehabilitaciones completas con prótesis definitiva en zirconio, puede requerir dos viajes: uno para la cirugía y otro (3-6 meses después) para la prótesis final.',
    },
    {
      q: '¿Cómo puedo coordinar mi viaje con el tratamiento?',
      a: 'Una vez acordado el plan de tratamiento por WhatsApp o videollamada, coordinamos las fechas que se ajusten a tu agenda. Podemos recomendarte opciones de alojamiento cerca del consultorio en El Poblado.',
    },
    {
      q: '¿Qué pasa si tengo algún problema después de regresar a mi país?',
      a: 'Ofrecemos seguimiento virtual post-tratamiento. Todos los procedimientos incluyen garantía y coordinamos con odontólogos de confianza en tu ciudad si necesitas atención de emergencia.',
    },
    {
      q: '¿Aceptan pagos internacionales?',
      a: 'Sí. Aceptamos pagos en USD, COP, transferencias internacionales y tarjetas de crédito internacionales. También trabajamos con planes de financiación para pacientes internacionales.',
    },
  ] : [
    {
      q: 'Is it safe to get dental treatment in Colombia?',
      a: 'Yes. Colombia has one of Latin America\'s most recognized dental schools. Specialists are trained under the same international standards as in the USA or Europe. The clinic works with imported materials from globally recognized brands.',
    },
    {
      q: 'How long do I need to stay in Medellín?',
      a: 'It depends on the treatment. For single implants or veneers, usually 5-7 days. For All-on-4 with provisional prosthesis, 7-10 days. For complete rehabilitations with final zirconia prosthesis, it may require two trips: one for surgery and another (3-6 months later) for the final prosthesis.',
    },
    {
      q: 'How can I coordinate my trip with the treatment?',
      a: 'Once the treatment plan is agreed via WhatsApp or video call, we coordinate dates that fit your schedule. We can recommend accommodation options near the clinic in El Poblado.',
    },
    {
      q: 'What happens if I have a problem after returning to my country?',
      a: 'We offer virtual post-treatment follow-up. All procedures include a warranty and we coordinate with trusted dentists in your city if you need emergency care.',
    },
    {
      q: 'Do you accept international payments?',
      a: 'Yes. We accept payments in USD, COP, international transfers and international credit cards. We also work with financing plans for international patients.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#070B14', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <SchemaOrg schema={dentalTourismSchema} />

      {/* MINIMAL NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(7,11,20,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,164,97,0.15)' }}>
        <Link href={locale === 'es' ? '/' : '/en'} style={{ fontFamily: 'var(--font-playfair-display, serif)', color: '#F5F5F0', fontWeight: 700, fontSize: '1.1rem' }}>
          Dra. Carolina Macareno
        </Link>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded font-semibold text-sm transition-all hover:scale-105"
          style={{ backgroundColor: '#25D366', color: '#fff' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          {isEs ? 'Consulta gratis' : 'Free consultation'}
        </a>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,164,97,0.12) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#C9A461' }}>
            {isEs ? '🇨🇴 Medellín, Colombia · Turismo Dental de Especialidad' : '🇨🇴 Medellín, Colombia · Specialty Dental Tourism'}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? <>{`La sonrisa que quieres`}<br /><span style={{ color: '#C9A461' }}>al precio que no esperabas</span></>
              : <>{'The smile you want'}<br /><span style={{ color: '#C9A461' }}>at a price you didn&apos;t expect</span></>}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: '#D1D5DB', lineHeight: 1.7 }}>
            {isEs
              ? 'Rehabilitación oral completa, implantes dentales y diseño de sonrisa en Medellín, Colombia. Calidad de primer mundo. Hasta 70% de ahorro vs. EE.UU., Panamá o Europa.'
              : 'Full oral rehabilitation, dental implants and smile design in Medellín, Colombia. World-class quality. Up to 70% savings vs. USA, Panama or Europe.'}
          </p>

          {/* Flags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['🇺🇸 USA', '🇵🇦 Panamá', '🇵🇷 Puerto Rico', '🇨🇷 Costa Rica', '🇨🇴 Colombia'].map((f) => (
              <span key={f} className="text-xs px-3 py-1 rounded-full border"
                style={{ borderColor: 'rgba(201,164,97,0.3)', color: '#9CA3AF', backgroundColor: 'rgba(201,164,97,0.05)' }}>
                {f}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#C9A461', color: '#070B14', boxShadow: '0 8px 32px rgba(201,164,97,0.3)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {isEs ? 'Evalúa tu caso gratis' : 'Evaluate your case for free'}
            </a>
            <Link href={locale === 'es' ? '/contacto' : '/en/contacto'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
              style={{ borderColor: '#C9A461', color: '#C9A461' }}>
              {isEs ? 'Agenda tu cita' : 'Book your appointment'}
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { n: '17+', label: isEs ? 'años de experiencia' : 'years experience' },
              { n: '3,500+', label: isEs ? 'pacientes transformados' : 'patients transformed' },
              { n: '70%', label: isEs ? 'de ahorro vs. EE.UU.' : 'savings vs. USA' },
              { n: '5.0★', label: isEs ? 'calificación promedio' : 'average rating' },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <p className="text-2xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>{s.n}</p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE COMPARISON */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Cuánto ahorras en Medellín' : 'How much you save in Medellín'}
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: '#9CA3AF' }}>
            {isEs ? 'Precios en USD · La misma calidad, materiales y tecnología' : 'Prices in USD · Same quality, materials and technology'}
          </p>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: '#1F2937' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#111827' }}>
                  <th className="text-left p-4 font-semibold" style={{ color: '#9CA3AF' }}>
                    {isEs ? 'Procedimiento' : 'Procedure'}
                  </th>
                  <th className="text-center p-4 font-semibold" style={{ color: '#9CA3AF' }}>
                    {isEs ? 'Precio EE.UU.' : 'USA Price'}
                  </th>
                  <th className="text-center p-4 font-semibold" style={{ color: '#C9A461' }}>
                    {isEs ? 'Precio Medellín' : 'Medellín Price'}
                  </th>
                  <th className="text-center p-4 font-semibold" style={{ color: '#4ADE80' }}>
                    {isEs ? 'Tu ahorro' : 'Your savings'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {savings.map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #1F2937', backgroundColor: i % 2 === 0 ? '#0D1321' : '#111827' }}>
                    <td className="p-4 font-medium" style={{ color: '#F5F5F0' }}>{row.procedure}</td>
                    <td className="p-4 text-center" style={{ color: '#EF4444' }}>{row.usa}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#C9A461' }}>{row.col}</td>
                    <td className="p-4 text-center font-bold" style={{ color: '#4ADE80' }}>{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-center mt-4" style={{ color: '#6B7280' }}>
            {isEs
              ? '* Los precios son referenciales. El plan exacto y costo se define en la consulta diagnóstica.'
              : '* Prices are referential. Exact plan and cost is defined in the diagnostic consultation.'}
          </p>
        </div>
      </section>

      {/* WHY MEDELLÍN */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Por qué Medellín para tu tratamiento dental' : 'Why Medellín for your dental treatment'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            {isEs
              ? 'Medellín no es solo turismo dental. Es la combinación perfecta de calidad clínica, comodidad urbana y experiencia de vida.'
              : 'Medellín is not just dental tourism. It\'s the perfect combination of clinical quality, urban comfort and life experience.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMedellin.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-base" style={{ color: '#F5F5F0' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST PROFILE */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border" style={{ backgroundColor: 'rgba(201,164,97,0.04)', borderColor: 'rgba(201,164,97,0.2)' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Tu especialista en Medellín' : 'Your specialist in Medellín'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Dra. Carolina Macareno
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  {(isEs ? [
                    'Especialista en Rehabilitación Oral — Universidad El Bosque',
                    'Especialización en Implantología — Universidad CES',
                    '17+ años de práctica clínica en Medellín',
                    '3,500+ pacientes transformados, incluyendo internacionales',
                    'Atención en español e inglés',
                    'Tecnología de escaneo digital 3D e implantología guiada',
                    'Materiales importados: Straumann, Neodent, Nobel Biocare',
                  ] : [
                    'Oral Rehabilitation Specialist — Universidad El Bosque',
                    'Implantology Specialization — Universidad CES',
                    '17+ years of clinical practice in Medellín',
                    '3,500+ patients transformed, including international',
                    'Care in Spanish and English',
                    '3D digital scanning technology and guided implantology',
                    'Imported materials: Straumann, Neodent, Nobel Biocare',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#D1D5DB' }}>
                      <span className="mt-0.5 shrink-0" style={{ color: '#C9A461' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-xl" style={{ backgroundColor: '#111827' }}>
                  <p className="text-sm italic leading-relaxed" style={{ color: '#D1D5DB' }}>
                    {isEs
                      ? '"Mi consulta no es solo arreglar dientes — es transformar la relación de mis pacientes con su sonrisa para siempre."'
                      : '"My practice is not just about fixing teeth — it\'s about transforming my patients\' relationship with their smile forever."'}
                  </p>
                  <p className="text-xs mt-3" style={{ color: '#C9A461' }}>— Dra. Carolina Macareno</p>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: '#C9A461', color: '#070B14' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {isEs ? 'Escribirle directamente' : 'Message her directly'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS FOR INTERNATIONAL PATIENTS */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Cómo funciona para pacientes internacionales' : 'How it works for international patients'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {(isEs ? [
              { n: '01', title: 'Contacto inicial', desc: 'Escríbenos por WhatsApp con fotos de tu sonrisa y cualquier estudio dental previo. Evaluación virtual gratuita.' },
              { n: '02', title: 'Plan y presupuesto', desc: 'Te enviamos el plan de tratamiento completo con costos reales en USD antes de reservar tu vuelo.' },
              { n: '03', title: 'Tu viaje a Medellín', desc: 'Coordinamos todas las citas para que aproveches al máximo tu estadía. Recomendamos hoteles y logística.' },
              { n: '04', title: 'Seguimiento virtual', desc: 'Seguimiento post-tratamiento por video. Garantía en todos los procedimientos. Siempre disponibles.' },
            ] : [
              { n: '01', title: 'Initial contact', desc: 'Message us on WhatsApp with photos of your smile and any previous dental studies. Free virtual evaluation.' },
              { n: '02', title: 'Plan & quote', desc: 'We send you the complete treatment plan with real costs in USD before you book your flight.' },
              { n: '03', title: 'Your trip to Medellín', desc: 'We schedule all appointments to maximize your stay. We recommend hotels and help with logistics.' },
              { n: '04', title: 'Virtual follow-up', desc: 'Post-treatment follow-up by video. Warranty on all procedures. Always available.' },
            ]).map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm"
                  style={{ backgroundColor: 'rgba(201,164,97,0.15)', color: '#C9A461', border: '1px solid rgba(201,164,97,0.3)' }}>
                  {step.n}
                </div>
                <h4 className="font-semibold mb-2 text-sm" style={{ color: '#F5F5F0' }}>{step.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                <h3 className="font-semibold mb-3 text-sm" style={{ color: '#F5F5F0' }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #070B14 50%, #1a1a0a 100%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
            {isEs ? 'Da el primer paso hoy' : 'Take the first step today'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? 'Tu transformación empieza con un mensaje'
              : 'Your transformation starts with one message'}
          </h2>
          <p className="mb-8" style={{ color: '#D1D5DB' }}>
            {isEs
              ? 'Evaluación virtual gratuita. Sin compromiso. Respuesta en menos de 24 horas. Envía fotos de tu sonrisa y tu historial dental y te damos un plan real.'
              : 'Free virtual evaluation. No commitment. Response in less than 24 hours. Send photos of your smile and dental history and we\'ll give you a real plan.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
              style={{ backgroundColor: '#25D366', color: '#fff' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <Link href={locale === 'es' ? '/contacto' : '/en/contacto'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
              style={{ borderColor: '#C9A461', color: '#C9A461' }}>
              {isEs ? 'Formulario de contacto' : 'Contact form'}
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: '#9CA3AF' }}>
            📍 El Poblado, Medellín · {isEs ? 'Atención en español e inglés' : 'Care in Spanish and English'}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center border-t" style={{ borderColor: '#1F2937' }}>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          © 2026 Dra. Carolina Macareno · El Poblado, Medellín, Colombia ·{' '}
          <Link href={locale === 'es' ? '/' : '/en'} style={{ color: '#C9A461' }}>
            {isEs ? 'Ver sitio completo' : 'View full site'}
          </Link>
        </p>
      </footer>
    </div>
  );
}
