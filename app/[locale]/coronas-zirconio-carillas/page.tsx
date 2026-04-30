import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg, { breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';

const WA_ES = 'https://wa.me/573163975232?text=Hola%2C%20quiero%20información%20sobre%20coronas%20de%20zirconio%20y%20carillas%20cerámicas%20en%20Medellín';
const WA_EN = 'https://wa.me/573163975232?text=Hi%2C%20I%27m%20interested%20in%20zirconia%20crowns%20or%20ceramic%20veneers%20in%20Medell%C3%ADn';

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
      ? 'Coronas de Zirconio y Carillas Cerámicas en Medellín Colombia — Dra. Carolina Macareno'
      : 'Zirconia Crowns and Ceramic Veneers in Medellín Colombia — Dr. Carolina Macareno',
    description: isEs
      ? 'Coronas de zirconio y carillas cerámicas en Medellín, Colombia. Resultados 100% naturales, máxima resistencia. Ahorra hasta 60% vs precios en EE.UU. Dra. Carolina Macareno, especialista en rehabilitación oral.'
      : 'Zirconia crowns and ceramic veneers in Medellín, Colombia. 100% natural results, maximum strength. Save up to 60% vs USA prices. Dr. Carolina Macareno, oral rehabilitation specialist.',
    keywords: isEs
      ? ['coronas de zirconio Medellín', 'carillas cerámicas Colombia', 'coronas dentales Colombia', 'zirconia crowns Medellín', 'ceramic veneers Colombia', 'corona dental Medellín', 'prótesis dental Colombia']
      : ['zirconia crowns Medellín', 'ceramic veneers Colombia', 'dental crowns Colombia', 'zirconia crowns Colombia', 'porcelain crowns Medellín', 'dental restoration Colombia', 'crowns Medellín'],
    alternates: {
      canonical: isEs ? `${BASE}/coronas-zirconio-carillas` : `${BASE}/en/coronas-zirconio-carillas`,
      languages: {
        'es': `${BASE}/coronas-zirconio-carillas`,
        'en': `${BASE}/en/coronas-zirconio-carillas`,
      },
    },
    openGraph: {
      title: isEs
        ? 'Coronas de Zirconio y Carillas Cerámicas en Medellín | Dra. Carolina Macareno'
        : 'Zirconia Crowns and Ceramic Veneers in Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'Coronas y carillas que nadie sabrá que son artificiales. Resultados naturales, precios accesibles en Medellín Colombia.'
        : 'Crowns and veneers nobody will know are artificial. Natural results, accessible prices in Medellín Colombia.',
      url: isEs ? `${BASE}/coronas-zirconio-carillas` : `${BASE}/en/coronas-zirconio-carillas`,
      siteName: 'Dra. Carolina Macareno',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630, alt: 'Coronas de Zirconio y Carillas — Medellín' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'Coronas de Zirconio y Carillas en Medellín' : 'Zirconia Crowns and Ceramic Veneers in Medellín',
      description: isEs
        ? 'Resultados naturales, máxima resistencia. Ahorra hasta 60% vs EE.UU.'
        : 'Natural results, maximum strength. Save up to 60% vs USA prices.',
      images: [`${BASE}/og-image.jpg`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CoronasZirconioCarillas({
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
    name: isEs ? 'Coronas de Zirconio y Carillas Cerámicas — Rehabilitación Estética' : 'Zirconia Crowns and Ceramic Veneers — Aesthetic Rehabilitation',
    description: isEs
      ? 'Restauraciones dentales de alta estética en cerámica de zirconio o porcelana feldespática. Resultados indistinguibles del diente natural, máxima durabilidad y biocompatibilidad.'
      : 'High-aesthetic dental restorations in zirconia ceramic or feldspathic porcelain. Results indistinguishable from natural teeth, maximum durability and biocompatibility.',
    url: isEs ? `${BASE}/coronas-zirconio-carillas` : `${BASE}/en/coronas-zirconio-carillas`,
    procedureType: 'https://schema.org/TherapeuticProcedure',
    bodyLocation: 'Teeth',
    followup: isEs ? 'Control al mes, al año. Garantía incluida.' : 'Follow-up at one month and one year. Warranty included.',
    performer: {
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
      telephone: '+573163975232',
      url: BASE,
    },
  };

  const materialComparison = isEs ? [
    {
      material: 'Zirconio Monolítico',
      aesthetic: '★★★★☆',
      strength: '★★★★★',
      duration: '20-25 años',
      indication: 'Molares, dientes muy dañados, prótesis sobre implantes',
      highlight: true,
    },
    {
      material: 'E-max (Disilicato de litio)',
      aesthetic: '★★★★★',
      strength: '★★★★☆',
      duration: '15-20 años',
      indication: 'Dientes anteriores, carillas, coronas de alta estética',
      highlight: false,
    },
    {
      material: 'Composite Directo',
      aesthetic: '★★★☆☆',
      strength: '★★★☆☆',
      duration: '5-8 años',
      indication: 'Correcciones menores, presupuesto limitado, casos temporales',
      highlight: false,
    },
  ] : [
    {
      material: 'Monolithic Zirconia',
      aesthetic: '★★★★☆',
      strength: '★★★★★',
      duration: '20-25 years',
      indication: 'Molars, heavily damaged teeth, implant prosthetics',
      highlight: true,
    },
    {
      material: 'E-max (Lithium Disilicate)',
      aesthetic: '★★★★★',
      strength: '★★★★☆',
      duration: '15-20 years',
      indication: 'Front teeth, veneers, high-aesthetic crowns',
      highlight: false,
    },
    {
      material: 'Direct Composite',
      aesthetic: '★★★☆☆',
      strength: '★★★☆☆',
      duration: '5-8 years',
      indication: 'Minor corrections, limited budget, temporary cases',
      highlight: false,
    },
  ];

  const decisionGuide = isEs ? [
    {
      question: '¿Cuándo necesito una CORONA?',
      icon: '👑',
      cases: [
        'El diente tiene caries extensa o está muy debilitado',
        'Hay un tratamiento de conducto (endodoncia) previo',
        'El diente está fracturado o con pérdida de estructura mayor al 50%',
        'Necesitas restaurar un implante dental',
        'El diente tiene decoloración severa por medicamentos o traumatismo',
      ],
    },
    {
      question: '¿Cuándo es mejor una CARILLA?',
      icon: '✨',
      cases: [
        'El diente está estructuralmente sano pero con problemas estéticos',
        'Quieres cambio de color, forma o proporción con mínimo desgaste',
        'Tienes espacios entre dientes (diastemas)',
        'Dientes ligeramente desalineados sin querer ortodoncia',
        'Bordes irregulares o dientes astillados',
      ],
    },
    {
      question: '¿Cuándo sirve el COMPOSITE?',
      icon: '🎨',
      cases: [
        'Correcciones menores de forma o color',
        'Pacientes jóvenes (dientes aún en desarrollo)',
        'Resultado temporal mientras decides',
        'Presupuesto limitado con posibilidad de upgrade futuro',
        'Dientes con poca pérdida de estructura',
      ],
    },
  ] : [
    {
      question: 'When do I need a CROWN?',
      icon: '👑',
      cases: [
        'The tooth has extensive decay or is very weakened',
        'There is a prior root canal treatment',
        'The tooth is fractured or with more than 50% structure loss',
        'You need to restore a dental implant',
        'The tooth has severe discoloration from medication or trauma',
      ],
    },
    {
      question: 'When is a VENEER better?',
      icon: '✨',
      cases: [
        'The tooth is structurally healthy but with aesthetic issues',
        'You want color, shape or proportion change with minimal reduction',
        'You have gaps between teeth (diastemas)',
        'Slightly misaligned teeth without wanting braces',
        'Irregular edges or chipped teeth',
      ],
    },
    {
      question: 'When does COMPOSITE work?',
      icon: '🎨',
      cases: [
        'Minor shape or color corrections',
        'Young patients (teeth still developing)',
        'Temporary result while deciding',
        'Limited budget with possibility of future upgrade',
        'Teeth with little structure loss',
      ],
    },
  ];

  const savings = [
    {
      procedure: isEs ? 'Corona de zirconio (por unidad)' : 'Zirconia crown (per unit)',
      usa: '$1,200 – $2,000',
      col: '$500 – $800',
      save: isEs ? 'Ahorra ~60%' : 'Save ~60%',
    },
    {
      procedure: isEs ? 'Carilla de porcelana (por unidad)' : 'Porcelain veneer (per unit)',
      usa: '$1,500 – $2,500',
      col: '$550 – $850',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
    {
      procedure: isEs ? 'Corona E-max (por unidad)' : 'E-max crown (per unit)',
      usa: '$1,400 – $2,200',
      col: '$600 – $900',
      save: isEs ? 'Ahorra ~60%' : 'Save ~60%',
    },
    {
      procedure: isEs ? 'Rehabilitación completa (8 coronas/carillas)' : 'Full rehabilitation (8 crowns/veneers)',
      usa: '$10,000 – $18,000',
      col: '$4,000 – $7,000',
      save: isEs ? 'Ahorra ~60%' : 'Save ~60%',
    },
  ];

  const process = isEs ? [
    { n: '01', title: 'Diagnóstico y diseño digital', desc: 'Fotografías, escaneo 3D e inspección clínica. Diseño digital de las restauraciones con previsualización del resultado final.' },
    { n: '02', title: 'Preparación del diente', desc: 'Bajo anestesia local, desgaste controlado y preciso del diente para recibir la corona o carilla. Impresión digital al laboratorio.' },
    { n: '03', title: 'Fabricación en laboratorio', desc: 'Laboratorio dental certificado fabrica la pieza en zirconio o E-max con tecnología CAD/CAM. 2-4 días de fabricación.' },
    { n: '04', title: 'Cementado y ajuste final', desc: 'Colocación definitiva, ajuste de mordida y pulido final. Control de oclusión incluido. Todo en 5-7 días.' },
  ] : [
    { n: '01', title: 'Diagnosis and digital design', desc: 'Photos, 3D scan and clinical inspection. Digital design of restorations with preview of the final result.' },
    { n: '02', title: 'Tooth preparation', desc: 'Under local anesthesia, controlled and precise tooth reduction to receive the crown or veneer. Digital impression to the lab.' },
    { n: '03', title: 'Laboratory fabrication', desc: 'Certified dental lab fabricates the piece in zirconia or E-max with CAD/CAM technology. 2-4 days fabrication time.' },
    { n: '04', title: 'Final bonding and adjustment', desc: 'Definitive placement, bite adjustment and final polishing. Occlusion control included. All in 5-7 days.' },
  ];

  const faqs = isEs ? [
    {
      q: '¿Cuánto duran las coronas de zirconio?',
      a: 'Las coronas de zirconio monolítico bien confeccionadas y cuidadas duran entre 20 y 25 años. Son el material más resistente disponible en odontología restauradora. La clave está en la calidad del laboratorio, la precisión del cementado y el mantenimiento del paciente.',
    },
    {
      q: '¿Se ven naturales las coronas de zirconio?',
      a: 'El zirconio moderno tiene excelente estética, especialmente en dientes posteriores. Para dientes anteriores donde la translucidez es crucial, el E-max (disilicato de litio) o el zirconio multicapa ofrecen resultados prácticamente indistinguibles del diente natural.',
    },
    {
      q: '¿Cuál es la diferencia entre corona y carilla?',
      a: 'Una corona cubre el diente completo (360°) y requiere mayor desgaste. Una carilla solo cubre la cara visible del diente con desgaste mínimo. La corona está indicada cuando el diente tiene daño estructural significativo; la carilla cuando el diente está sano pero tiene problemas estéticos.',
    },
    {
      q: '¿Duele el procedimiento?',
      a: 'La preparación del diente se realiza bajo anestesia local. No hay dolor durante el procedimiento. Post-preparación puede existir sensibilidad 24-48 horas. Durante el tiempo de laboratorio se coloca una restauración temporal para proteger el diente preparado.',
    },
    {
      q: '¿Puedo hacer todo en un solo viaje a Medellín?',
      a: 'Sí. El proceso completo de diagnóstico, preparación, fabricación en laboratorio y cementado final puede realizarse en 5-7 días hábiles, perfectamente compatible con un viaje de una semana. El laboratorio trabaja en paralelo para optimizar los tiempos.',
    },
  ] : [
    {
      q: 'How long do zirconia crowns last?',
      a: 'Well-made and cared-for monolithic zirconia crowns last 20-25 years. They are the most resistant material available in restorative dentistry. The key is laboratory quality, bonding precision and patient maintenance.',
    },
    {
      q: 'Do zirconia crowns look natural?',
      a: 'Modern zirconia has excellent aesthetics, especially for posterior teeth. For front teeth where translucency is crucial, E-max (lithium disilicate) or multilayer zirconia offer results virtually indistinguishable from natural teeth.',
    },
    {
      q: 'What is the difference between a crown and a veneer?',
      a: 'A crown covers the entire tooth (360°) and requires more reduction. A veneer only covers the visible face of the tooth with minimal reduction. A crown is indicated when the tooth has significant structural damage; a veneer when the tooth is healthy but has aesthetic problems.',
    },
    {
      q: 'Does the procedure hurt?',
      a: 'Tooth preparation is done under local anesthesia. There is no pain during the procedure. Post-preparation there may be sensitivity for 24-48 hours. During the laboratory time, a temporary restoration is placed to protect the prepared tooth.',
    },
    {
      q: 'Can I do everything in one trip to Medellín?',
      a: 'Yes. The complete process of diagnosis, preparation, laboratory fabrication and final bonding can be done in 5-7 business days, perfectly compatible with a one-week trip. The laboratory works in parallel to optimize timing.',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Coronas y Carillas' : 'Crowns and Veneers', url: isEs ? `${BASE}/coronas-zirconio-carillas` : `${BASE}/en/coronas-zirconio-carillas` },
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
            <Link href="/coronas-zirconio-carillas" style={{ color: isEs ? '#C9A461' : '#6B7280' }}>ES</Link>
            <span style={{ color: '#374151' }}>|</span>
            <Link href="/en/coronas-zirconio-carillas" style={{ color: !isEs ? '#C9A461' : '#6B7280' }}>EN</Link>
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
            {isEs ? '🇨🇴 Medellín, Colombia · Restauraciones Estéticas de Alta Gama' : '🇨🇴 Medellín, Colombia · High-End Aesthetic Restorations'}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? <>{`Coronas y carillas que`}<br /><span style={{ color: '#C9A461' }}>nadie sabrá que son artificiales</span></>
              : <>{'Crowns and veneers'}<br /><span style={{ color: '#C9A461' }}>nobody will know are artificial</span></>}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: '#D1D5DB', lineHeight: 1.7 }}>
            {isEs
              ? 'Coronas de zirconio y carillas cerámicas en Medellín con resultados 100% naturales. Materiales de grado internacional. Durabilidad de 20+ años. Ahorra hasta 65% vs. EE.UU.'
              : 'Zirconia crowns and ceramic veneers in Medellín with 100% natural results. International-grade materials. 20+ year durability. Save up to 65% vs. USA.'}
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
              {isEs ? 'Evalúa tu caso gratis' : 'Evaluate your case for free'}
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
              { n: '3,500+', label: isEs ? 'restauraciones realizadas' : 'restorations done' },
              { n: '20+', label: isEs ? 'años de durabilidad' : 'year durability' },
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

      {/* MATERIAL COMPARISON TABLE */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Zirconio vs E-max vs Composite' : 'Zirconia vs E-max vs Composite'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            {isEs ? 'Cada material tiene su indicación precisa. La elección correcta marca la diferencia en el resultado final.' : 'Each material has its precise indication. The right choice makes the difference in the final result.'}
          </p>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: '#1F2937' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#111827' }}>
                  <th className="text-left p-4 font-semibold" style={{ color: '#9CA3AF' }}>
                    {isEs ? 'Material' : 'Material'}
                  </th>
                  <th className="text-center p-4 font-semibold" style={{ color: '#9CA3AF' }}>
                    {isEs ? 'Estética' : 'Aesthetics'}
                  </th>
                  <th className="text-center p-4 font-semibold" style={{ color: '#9CA3AF' }}>
                    {isEs ? 'Resistencia' : 'Strength'}
                  </th>
                  <th className="text-center p-4 font-semibold" style={{ color: '#C9A461' }}>
                    {isEs ? 'Duración aprox.' : 'Approx. duration'}
                  </th>
                  <th className="text-left p-4 font-semibold" style={{ color: '#9CA3AF' }}>
                    {isEs ? 'Indicación principal' : 'Main indication'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {materialComparison.map((row, i) => (
                  <tr key={i} style={{
                    borderTop: '1px solid #1F2937',
                    backgroundColor: row.highlight ? 'rgba(201,164,97,0.06)' : (i % 2 === 0 ? '#0D1321' : '#111827')
                  }}>
                    <td className="p-4 font-semibold" style={{ color: row.highlight ? '#C9A461' : '#F5F5F0' }}>
                      {row.material}
                      {row.highlight && <span className="ml-2 text-xs font-normal" style={{ color: '#C9A461' }}>★ {isEs ? 'Más solicitado' : 'Most requested'}</span>}
                    </td>
                    <td className="p-4 text-center text-xs" style={{ color: '#D1D5DB' }}>{row.aesthetic}</td>
                    <td className="p-4 text-center text-xs" style={{ color: '#D1D5DB' }}>{row.strength}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#C9A461' }}>{row.duration}</td>
                    <td className="p-4 text-xs" style={{ color: '#9CA3AF' }}>{row.indication}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DECISION GUIDE */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? '¿Corona, carilla o composite?' : 'Crown, veneer or composite?'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            {isEs ? 'Guía rápida para entender qué tipo de restauración necesitas.' : 'Quick guide to understand what type of restoration you need.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {decisionGuide.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border"
                style={{ backgroundColor: '#111827', borderColor: i === 0 ? 'rgba(201,164,97,0.3)' : '#1F2937' }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-4 text-sm" style={{ color: '#F5F5F0' }}>{item.question}</h3>
                <ul className="space-y-2">
                  {item.cases.map((c, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: '#9CA3AF' }}>
                      <span className="mt-0.5 shrink-0" style={{ color: '#C9A461' }}>•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border max-w-3xl mx-auto text-center" style={{ backgroundColor: 'rgba(201,164,97,0.05)', borderColor: 'rgba(201,164,97,0.2)' }}>
            <p className="text-sm" style={{ color: '#D1D5DB' }}>
              {isEs
                ? '¿No sabes cuál necesitas? Envíanos fotos de tus dientes y te decimos exactamente qué corresponde en tu caso — sin costo ni compromiso.'
                : 'Not sure which you need? Send us photos of your teeth and we\'ll tell you exactly what applies in your case — at no cost or commitment.'}
            </p>
            <div className="flex justify-center mt-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: '#25D366', color: '#fff' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {isEs ? 'Consulta gratuita' : 'Free consultation'}
              </a>
            </div>
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
            {isEs ? 'El proceso en 5-7 días' : 'The process in 5-7 days'}
          </h2>
          <p className="text-center mb-12 text-sm" style={{ color: '#9CA3AF' }}>
            {isEs ? 'Optimizado para pacientes internacionales. 2-3 visitas clínicas.' : 'Optimized for international patients. 2-3 clinical visits.'}
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

      {/* SPECIALIST */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border" style={{ backgroundColor: 'rgba(201,164,97,0.04)', borderColor: 'rgba(201,164,97,0.2)' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Tu especialista en restauraciones cerámicas' : 'Your ceramic restoration specialist'}
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
                    '3,500+ restauraciones realizadas, incluyendo internacionales',
                    'Atención en español e inglés',
                    'Laboratorio dental certificado con tecnología CAD/CAM',
                    'Diseño digital de restauraciones con previsualización del resultado',
                    'Materiales: IPS e.max, Vita Suprinity, Ivoclar Vivadent',
                  ] : [
                    'Dentist — Universidad El Bosque',
                    'Oral Rehabilitation Specialist — Universidad CES',
                    'Implantology — FACOP',
                    'Aesthetic Dentistry — New York University',
                    '17+ years of clinical practice in Medellín',
                    '3,500+ restorations done, including international patients',
                    'Care in Spanish and English',
                    'Certified dental lab with CAD/CAM technology',
                    'Digital restoration design with result preview',
                    'Materials: IPS e.max, Vita Suprinity, Ivoclar Vivadent',
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
                      ? '"Una corona o carilla bien hecha no debería ser visible como tal — debería simplemente ser el diente más bonito de la boca y pasar desapercibida."'
                      : '"A well-made crown or veneer should not be visible as such — it should simply be the most beautiful tooth in the mouth and go unnoticed."'}
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
            {isEs ? 'Empieza hoy' : 'Start today'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? 'Tu restauración perfecta empieza con un mensaje'
              : 'Your perfect restoration starts with one message'}
          </h2>
          <p className="mb-8" style={{ color: '#D1D5DB' }}>
            {isEs
              ? 'Evaluación virtual gratuita. Sin compromiso. Respuesta en menos de 24 horas. Envíanos fotos de los dientes que quieres restaurar y te decimos exactamente qué necesitas.'
              : 'Free virtual evaluation. No commitment. Response in less than 24 hours. Send us photos of the teeth you want to restore and we\'ll tell you exactly what you need.'}
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
