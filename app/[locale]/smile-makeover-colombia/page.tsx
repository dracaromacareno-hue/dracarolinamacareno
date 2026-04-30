import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg, { breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';

const WA_ES = 'https://wa.me/573163975232?text=Hola%2C%20quiero%20información%20sobre%20diseño%20de%20sonrisa%20y%20carillas%20en%20Medellín';
const WA_EN = 'https://wa.me/573163975232?text=Hi%2C%20I%27m%20interested%20in%20a%20smile%20makeover%20in%20Medell%C3%ADn%20Colombia';

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
      ? 'Diseño de Sonrisa en Medellín Colombia | Carillas de Porcelana — Dra. Carolina Macareno'
      : 'Smile Makeover in Colombia Medellín | Porcelain Veneers — Dr. Carolina Macareno',
    description: isEs
      ? 'Diseño de sonrisa y carillas de porcelana en Medellín, Colombia. Diseño Digital de Sonrisa (DSD), mock-up y resultado previsualizableantes de iniciar. Ahorra hasta 65% vs precios en EE.UU. Dra. Carolina Macareno.'
      : 'Smile makeover and porcelain veneers in Medellín, Colombia. Digital Smile Design (DSD), mock-up and previewable result before starting. Save up to 65% vs USA prices. Dr. Carolina Macareno.',
    keywords: isEs
      ? ['smile makeover Colombia', 'diseño de sonrisa Medellín', 'carillas porcelana Medellín', 'smile design Colombia', 'veneers Colombia', 'carillas dentales Colombia', 'diseño digital sonrisa Medellín']
      : ['smile makeover Colombia', 'smile design Colombia', 'veneers Colombia', 'porcelain veneers Medellín', 'dental veneers Colombia', 'smile design Medellín', 'cosmetic dentistry Colombia'],
    alternates: {
      canonical: isEs ? `${BASE}/smile-makeover-colombia` : `${BASE}/en/smile-makeover-colombia`,
      languages: {
        'es': `${BASE}/smile-makeover-colombia`,
        'en': `${BASE}/en/smile-makeover-colombia`,
      },
    },
    openGraph: {
      title: isEs
        ? 'Diseño de Sonrisa en Medellín | Dra. Carolina Macareno'
        : 'Smile Makeover in Medellín Colombia | Dr. Carolina Macareno',
      description: isEs
        ? 'Diseña la sonrisa que siempre quisiste con carillas de porcelana y Diseño Digital de Sonrisa en Medellín.'
        : 'Design the smile you always wanted with porcelain veneers and Digital Smile Design in Medellín.',
      url: isEs ? `${BASE}/smile-makeover-colombia` : `${BASE}/en/smile-makeover-colombia`,
      siteName: 'Dra. Carolina Macareno',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630, alt: 'Smile Makeover Medellín' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'Diseño de Sonrisa en Medellín' : 'Smile Makeover in Medellín',
      description: isEs
        ? 'Carillas de porcelana y Diseño Digital de Sonrisa con la Dra. Carolina Macareno.'
        : 'Porcelain veneers and Digital Smile Design with Dr. Carolina Macareno.',
      images: [`${BASE}/og-image.jpg`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function SmileMakeoverColombia({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const WA = isEs ? WA_ES : WA_EN;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: isEs ? 'Diseño de Sonrisa y Carillas Dentales — Smile Makeover' : 'Smile Makeover and Dental Veneers — Smile Design',
    description: isEs
      ? 'Procedimiento estético dental que combina Diseño Digital de Sonrisa (DSD), carillas de porcelana o zirconio y tratamientos complementarios para transformar completamente la sonrisa.'
      : 'Aesthetic dental procedure combining Digital Smile Design (DSD), porcelain or zirconia veneers and complementary treatments to completely transform the smile.',
    url: isEs ? `${BASE}/smile-makeover-colombia` : `${BASE}/en/smile-makeover-colombia`,
    procedureType: 'https://schema.org/TherapeuticProcedure',
    bodyLocation: 'Teeth',
    followup: isEs ? 'Control al mes y al año. Garantía incluida.' : 'Follow-up at one month and one year. Warranty included.',
    performer: {
      '@type': 'Dentist',
      name: 'Dra. Carolina Macareno',
      medicalSpecialty: ['Dentistry', 'Oral Rehabilitation', 'Cosmetic Dentistry'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cra. 25 #1A Sur-155, Consultorio 1353',
        addressLocality: 'Medellín',
        addressRegion: 'Antioquia',
        addressCountry: 'CO',
      },
      telephone: '+573163975232',
      url: BASE,
    },
  };

  const treatmentTypes = isEs ? [
    {
      name: 'Carillas de Porcelana',
      icon: '✨',
      desc: 'Láminas ultrafinas de cerámica feldespática adheridas a la superficie del diente. Resultado más natural y translúcido. La opción premium para cambios de color, forma y proporciones.',
      ideal: 'Cambios estéticos de mediana a alta magnitud, dientes sanos o con mínima restauración previa',
    },
    {
      name: 'Carillas de Composite',
      icon: '🎨',
      desc: 'Resina compuesta de alta calidad esculpida directamente sobre el diente en una sola cita. Reversible, económica y sin desgaste del diente en la mayoría de casos.',
      ideal: 'Correcciones menores, presupuesto más limitado, pacientes jóvenes o resultados temporales',
    },
    {
      name: 'Coronas de Zirconio',
      icon: '💎',
      desc: 'Cobertura total del diente con cerámica de zirconio de alta resistencia. Indicada cuando el diente tiene daño estructural significativo o cuando se busca máxima durabilidad.',
      ideal: 'Dientes muy deteriorados, cambios de color extremos, necesidad de refuerzo estructural',
    },
    {
      name: 'Blanqueamiento + Carillas',
      icon: '🌟',
      desc: 'Protocolo combinado que blanquea primero los dientes no tratados para lograr armonía de color total en el resultado final. Estándar en diseños de sonrisa completos.',
      ideal: 'Diseños de sonrisa completos donde no todos los dientes llevan carilla',
    },
  ] : [
    {
      name: 'Porcelain Veneers',
      icon: '✨',
      desc: 'Ultra-thin feldspathic ceramic sheets bonded to the tooth surface. Most natural and translucent result. The premium option for color, shape and proportion changes.',
      ideal: 'Medium to high aesthetic changes, healthy teeth or minimal prior restoration',
    },
    {
      name: 'Composite Veneers',
      icon: '🎨',
      desc: 'High-quality composite resin sculpted directly on the tooth in one appointment. Reversible, economical and no tooth reduction in most cases.',
      ideal: 'Minor corrections, tighter budget, young patients or temporary results',
    },
    {
      name: 'Zirconia Crowns',
      icon: '💎',
      desc: 'Full tooth coverage with high-strength zirconia ceramic. Indicated when the tooth has significant structural damage or when maximum durability is sought.',
      ideal: 'Very deteriorated teeth, extreme color changes, need for structural reinforcement',
    },
    {
      name: 'Whitening + Veneers',
      icon: '🌟',
      desc: 'Combined protocol that first whitens untreated teeth to achieve total color harmony in the final result. Standard in complete smile designs.',
      ideal: 'Complete smile designs where not all teeth receive a veneer',
    },
  ];

  const savings = [
    {
      procedure: isEs ? 'Carilla de porcelana (por unidad)' : 'Porcelain veneer (per unit)',
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
      procedure: isEs ? 'Carilla de composite (por unidad)' : 'Composite veneer (per unit)',
      usa: '$800 – $1,500',
      col: '$280 – $480',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
    {
      procedure: isEs ? 'Corona de zirconio (por unidad)' : 'Zirconia crown (per unit)',
      usa: '$1,200 – $2,000',
      col: '$500 – $800',
      save: isEs ? 'Ahorra ~60%' : 'Save ~60%',
    },
  ];

  const process = isEs ? [
    { n: '01', title: 'Diseño digital previo', desc: 'Fotografías clínicas y escaneo 3D. Diseño Digital de Sonrisa (DSD): ves cómo quedará tu sonrisa antes de tocar un diente.' },
    { n: '02', title: 'Mock-up en boca', desc: 'Simulación temporal en resina sobre tus dientes actuales. Apruebas forma, tamaño y armonía antes de proceder.' },
    { n: '03', title: 'Preparación y toma de impresión', desc: 'Desgaste mínimo del esmalte (o ninguno en composite). Impresión digital para el laboratorio especializado.' },
    { n: '04', title: 'Cementado final', desc: 'Colocación y cementado de las carillas definitivas. Ajustes de oclusión y pulido final. Todo en 5-7 días.' },
  ] : [
    { n: '01', title: 'Digital design preview', desc: 'Clinical photos and 3D scan. Digital Smile Design (DSD): you see what your smile will look like before touching a tooth.' },
    { n: '02', title: 'In-mouth mock-up', desc: 'Temporary simulation in resin on your current teeth. You approve shape, size and harmony before proceeding.' },
    { n: '03', title: 'Preparation and impression', desc: 'Minimal enamel reduction (or none for composite). Digital impression for the specialized laboratory.' },
    { n: '04', title: 'Final bonding', desc: 'Placement and bonding of the final veneers. Occlusion adjustment and final polishing. All in 5-7 days.' },
  ];

  const whoIsFor = isEs ? [
    { icon: '🟡', label: 'Dientes manchados o decolorados que no responden al blanqueamiento' },
    { icon: '🔲', label: 'Dientes con formas irregulares, pequeños o desproporcionados' },
    { icon: '🔲', label: 'Espacios entre dientes (diastemas) sin necesidad de ortodoncia' },
    { icon: '🔲', label: 'Dientes astillados, rotos o con bordes desgastados' },
    { icon: '🔲', label: 'Sonrisa con dientes desalineados leves sin querer usar brackets' },
    { icon: '🔲', label: 'Quienes quieren ver el resultado ANTES de empezar el tratamiento' },
  ] : [
    { icon: '🟡', label: 'Stained or discolored teeth that don\'t respond to whitening' },
    { icon: '🔲', label: 'Teeth with irregular shapes, small or disproportionate' },
    { icon: '🔲', label: 'Gaps between teeth (diastemas) without need for orthodontics' },
    { icon: '🔲', label: 'Chipped, broken or worn-edged teeth' },
    { icon: '🔲', label: 'Mildly misaligned smile without wanting braces' },
    { icon: '🔲', label: 'Those who want to see the result BEFORE starting treatment' },
  ];

  const faqs = isEs ? [
    {
      q: '¿Puedo ver cómo va a quedar mi sonrisa antes de empezar?',
      a: 'Sí. El protocolo de Diseño Digital de Sonrisa (DSD) incluye una simulación fotográfica de tu resultado final y un mock-up físico temporal en tu boca antes de cualquier procedimiento irreversible. Apruebas todo antes de proceder.',
    },
    {
      q: '¿Duele el procedimiento de carillas?',
      a: 'El proceso es mínimamente invasivo. Para carillas de porcelana se realiza un desgaste pequeño del esmalte bajo anestesia local, sin dolor durante el procedimiento. Las carillas de composite no requieren desgaste en la mayoría de casos. Post-procedimiento puede haber sensibilidad leve 24-48 horas.',
    },
    {
      q: '¿Cuánto duran las carillas de porcelana?',
      a: 'Las carillas de porcelana de calidad duran entre 10 y 20 años con buen mantenimiento (no morder objetos duros, usar protector nocturno si hay bruxismo, higiene adecuada). Las de composite duran 5-8 años. Las coronas de zirconio pueden durar 20+ años.',
    },
    {
      q: '¿Se verán naturales?',
      a: 'Las carillas de porcelana feldespática son el material más estético en odontología. Su translucidez e interacción con la luz imitan perfectamente al esmalte natural. El Diseño Digital de Sonrisa asegura proporciones armónicas con tu rostro, encías y dientes existentes.',
    },
    {
      q: '¿En cuántos días puedo tener mi sonrisa nueva?',
      a: 'Un diseño de sonrisa completo (8-10 carillas) puede realizarse en 5-7 días hábiles en Medellín. El primer día es evaluación y diseño, el segundo mock-up, el tercero preparación e impresión, y en el cuarto o quinto día cementado final. Ideal para viajeros internacionales.',
    },
  ] : [
    {
      q: 'Can I see what my smile will look like before starting?',
      a: 'Yes. The Digital Smile Design (DSD) protocol includes a photographic simulation of your final result and a physical temporary mock-up in your mouth before any irreversible procedure. You approve everything before proceeding.',
    },
    {
      q: 'Does the veneer procedure hurt?',
      a: 'The process is minimally invasive. For porcelain veneers, a small enamel reduction is done under local anesthesia, no pain during the procedure. Composite veneers don\'t require reduction in most cases. Post-procedure there may be mild sensitivity for 24-48 hours.',
    },
    {
      q: 'How long do porcelain veneers last?',
      a: 'Quality porcelain veneers last 10-20 years with good maintenance (don\'t bite hard objects, use night guard if there is bruxism, proper hygiene). Composite ones last 5-8 years. Zirconia crowns can last 20+ years.',
    },
    {
      q: 'Will they look natural?',
      a: 'Feldspathic porcelain veneers are the most aesthetic material in dentistry. Their translucency and interaction with light perfectly mimic natural enamel. Digital Smile Design ensures harmonious proportions with your face, gums and existing teeth.',
    },
    {
      q: 'How many days to get my new smile?',
      a: 'A complete smile design (8-10 veneers) can be done in 5-7 business days in Medellín. Day one is evaluation and design, day two mock-up, day three preparation and impression, and day four or five final bonding. Ideal for international travelers.',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Diseño de Sonrisa Colombia' : 'Smile Makeover Colombia', url: isEs ? `${BASE}/smile-makeover-colombia` : `${BASE}/en/smile-makeover-colombia` },
  ];
  const faqsForSchema = faqs.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <div style={{ backgroundColor: '#070B14', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <SchemaOrg schema={[schema, breadcrumbSchema(breadcrumbs), faqSchema(faqsForSchema)]} />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(7,11,20,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,164,97,0.15)' }}>
        <Link href={locale === 'es' ? '/' : '/en'} style={{ fontFamily: 'var(--font-playfair-display, serif)', color: '#F5F5F0', fontWeight: 700, fontSize: '1.1rem' }}>
          Dra. Carolina Macareno
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-bold">
            <Link href="/smile-makeover-colombia" style={{ color: isEs ? '#C9A461' : '#6B7280' }}>ES</Link>
            <span style={{ color: '#374151' }}>|</span>
            <Link href="/en/smile-makeover-colombia" style={{ color: !isEs ? '#C9A461' : '#6B7280' }}>EN</Link>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded font-semibold text-sm transition-all hover:scale-105"
            style={{ backgroundColor: '#25D366', color: '#fff' }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {isEs ? 'Consulta gratis' : 'Free consultation'}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,164,97,0.12) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#C9A461' }}>
            {isEs ? '🇨🇴 Medellín, Colombia · Estética Dental de Alta Gama' : '🇨🇴 Medellín, Colombia · High-End Cosmetic Dentistry'}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? <>{`Diseña la sonrisa`}<br /><span style={{ color: '#C9A461' }}>que siempre quisiste</span></>
              : <>{'Design the smile'}<br /><span style={{ color: '#C9A461' }}>you always wanted</span></>}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: '#D1D5DB', lineHeight: 1.7 }}>
            {isEs
              ? 'Diseño Digital de Sonrisa (DSD), carillas de porcelana y smile makeover completo en Medellín. Ves el resultado ANTES de empezar. Ahorra hasta 65% vs. EE.UU. Todo en 5-7 días.'
              : 'Digital Smile Design (DSD), porcelain veneers and complete smile makeover in Medellín. See the result BEFORE starting. Save up to 65% vs. USA. All done in 5-7 days.'}
          </p>

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
              {isEs ? 'Ver mi sonrisa nueva' : 'Preview my new smile'}
            </a>
            <Link href={locale === 'es' ? '/contacto' : '/en/contacto'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
              style={{ borderColor: '#C9A461', color: '#C9A461' }}>
              {isEs ? 'Agenda tu cita' : 'Book your appointment'}
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { n: '17+', label: isEs ? 'años de experiencia' : 'years experience' },
              { n: '3,500+', label: isEs ? 'sonrisas transformadas' : 'smiles transformed' },
              { n: '5-7', label: isEs ? 'días para tu nueva sonrisa' : 'days for your new smile' },
              { n: '65%', label: isEs ? 'ahorro vs. EE.UU.' : 'savings vs. USA' },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <p className="text-2xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>{s.n}</p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DSD BANNER */}
      <section className="py-12 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border text-center" style={{ backgroundColor: 'rgba(201,164,97,0.06)', borderColor: 'rgba(201,164,97,0.25)' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C9A461' }}>
              {isEs ? 'Tecnología exclusiva' : 'Exclusive technology'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Diseño Digital de Sonrisa (DSD)' : 'Digital Smile Design (DSD)'}
            </h2>
            <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'El Diseño Digital de Sonrisa es un protocolo basado en fotografía clínica, análisis facial y herramientas digitales que permite crear una simulación fotorrealista de tu nueva sonrisa ANTES de cualquier procedimiento. Ves el resultado, lo apruebas, y luego lo hacemos realidad. Sin sorpresas.'
                : 'Digital Smile Design is a protocol based on clinical photography, facial analysis and digital tools that creates a photorealistic simulation of your new smile BEFORE any procedure. You see the result, approve it, and then we make it real. No surprises.'}
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT TYPES */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Tipos de tratamiento disponibles' : 'Available treatment types'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            {isEs ? 'El plan ideal combina los tratamientos según tu caso clínico y tus objetivos estéticos.' : 'The ideal plan combines treatments according to your clinical case and aesthetic goals.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatmentTypes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border"
                style={{ backgroundColor: '#111827', borderColor: i === 0 ? 'rgba(201,164,97,0.4)' : '#1F2937' }}>
                {i === 0 && (
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#C9A461' }}>
                    {isEs ? 'Opción premium' : 'Premium option'}
                  </p>
                )}
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-3 text-lg" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>{item.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#D1D5DB' }}>{item.desc}</p>
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(201,164,97,0.08)' }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: '#C9A461' }}>{isEs ? 'Ideal para:' : 'Ideal for:'}</p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>{item.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE COMPARISON */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Cuánto ahorras eligiendo Medellín' : 'How much you save choosing Medellín'}
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: '#9CA3AF' }}>
            {isEs ? 'Precios en USD · Mismos materiales importados, misma tecnología de punta' : 'Prices in USD · Same imported materials, same cutting-edge technology'}
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

      {/* PROCESS */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Tu sonrisa nueva en 5-7 días' : 'Your new smile in 5-7 days'}
          </h2>
          <p className="text-center mb-12 text-sm" style={{ color: '#9CA3AF' }}>
            {isEs ? 'Protocolo optimizado para pacientes internacionales' : 'Protocol optimized for international patients'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((step) => (
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

      {/* WHO IS IT FOR */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? '¿Para quién es el diseño de sonrisa?' : 'Who is smile design for?'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            {isEs ? 'Si tienes alguna de estas situaciones, el smile makeover puede transformar tu sonrisa y tu confianza.' : 'If you have any of these situations, a smile makeover can transform your smile and your confidence.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whoIsFor.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                <span className="mt-0.5 shrink-0" style={{ color: '#C9A461', fontSize: '1.1rem' }}>✓</span>
                <p className="text-sm" style={{ color: '#D1D5DB' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
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

      {/* SPECIALIST */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border" style={{ backgroundColor: 'rgba(201,164,97,0.04)', borderColor: 'rgba(201,164,97,0.2)' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Tu especialista en diseño de sonrisa' : 'Your smile design specialist'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Dra. Carolina Macareno
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  {(isEs ? [
                    'Odontóloga — Universidad El Bosque',
                    'Especialista en Rehabilitación Oral — Universidad CES',
                    'Implantología — FACOP',
                    'Estética Dental — New York University',
                    '17+ años de práctica clínica en Medellín',
                    '3,500+ pacientes transformados, incluyendo internacionales',
                    'Certificada en Diseño Digital de Sonrisa (DSD)',
                    'Atención en español e inglés',
                    'Laboratorio dental certificado con tecnología CAD/CAM',
                    'Materiales: IPS e.max, Vita, Ivoclar Vivadent',
                  ] : [
                    'Dentist — Universidad El Bosque',
                    'Oral Rehabilitation Specialist — Universidad CES',
                    'Implantology — FACOP',
                    'Aesthetic Dentistry — New York University',
                    '17+ years of clinical practice in Medellín',
                    '3,500+ patients transformed, including international',
                    'Certified in Digital Smile Design (DSD)',
                    'Care in Spanish and English',
                    'Certified dental lab with CAD/CAM technology',
                    'Materials: IPS e.max, Vita, Ivoclar Vivadent',
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
                      ? '"Una sonrisa hermosa no se trata de perfección artificial — se trata de armonía. Diseño cada sonrisa para que cuente la historia de quien la lleva."'
                      : '"A beautiful smile is not about artificial perfection — it\'s about harmony. I design each smile to tell the story of the person who wears it."'}
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

      {/* CTA FINAL */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #070B14 50%, #1a1a0a 100%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
            {isEs ? 'Tu sonrisa te espera' : 'Your smile is waiting'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? 'Empieza con una foto de tu sonrisa'
              : 'Start with a photo of your smile'}
          </h2>
          <p className="mb-8" style={{ color: '#D1D5DB' }}>
            {isEs
              ? 'Evaluación virtual gratuita. Sin compromiso. Respuesta en menos de 24 horas. Envíanos fotos de tu sonrisa y te mostramos qué es posible.'
              : 'Free virtual evaluation. No commitment. Response in less than 24 hours. Send us photos of your smile and we\'ll show you what\'s possible.'}
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
          {' · '}
          <Link href={locale === 'es' ? '/dental-tourism-colombia' : '/en/dental-tourism-colombia'} style={{ color: '#C9A461' }}>
            {isEs ? 'Turismo Dental' : 'Dental Tourism'}
          </Link>
        </p>
      </footer>
    </div>
  );
}
