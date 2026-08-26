import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Link from 'next/link';
import Image from 'next/image';
import SchemaOrg, { breadcrumbSchema, faqSchema, howToSchema } from '@/components/SchemaOrg';
import WhatsAppLink from '@/components/WhatsAppLink';
import RelatedArticles from '@/components/sections/RelatedArticles';

const WA_ES = 'Hola, quiero información sobre All-on-4 o All-on-6 en Medellín';
const WA_EN = "Hi, I'm interested in All-on-4 or All-on-6 in Medellín";

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
      ? 'All-on-4 en Medellín | Sonrisa Fija en 24 Horas'
      : 'All-on-4 in Medellín | Fixed Smile in 24 Hours',
    description: isEs
      ? 'Recupera tu sonrisa en una sola cirugía. All-on-4 desde $10.000 USD (vs $25K-35K USA). Dra. Carolina Macareno, especialista 17 años. Valoración gratis.'
      : 'Restore your full smile in a single surgery. All-on-4 from $10,000 USD (vs $25K-35K USA). 17 yrs specialist, 3,500+ patients. Free virtual consultation.',
    keywords: isEs
      ? ['All-on-4 Medellín', 'All-on-6 Colombia', 'dientes fijos Colombia', 'implantes arcada completa Medellín', 'all on four Colombia', 'implantes totales Medellín', 'rehabilitación oral completa Colombia']
      : ['All-on-4 Medellín', 'All-on-6 Colombia', 'full arch implants Medellín', 'all on four Colombia', 'fixed teeth Colombia', 'dental implants Colombia', 'teeth in a day Medellín'],
    alternates: {
      canonical: isEs ? `${BASE}/all-on-4-medellin` : `${BASE}/en/all-on-4-medellin`,
      languages: {
        'es': `${BASE}/all-on-4-medellin`,
        'en': `${BASE}/en/all-on-4-medellin`,
      },
    },
    openGraph: {
      title: isEs
        ? 'All-on-4 y All-on-6 en Medellín | Dra. Carolina Macareno'
        : 'All-on-4 and All-on-6 in Medellín Colombia | Dr. Carolina Macareno',
      description: isEs
        ? 'Recupera tus dientes en un solo día. Implantes All-on-4 y All-on-6 en Medellín con especialista de 17+ años.'
        : 'Get your teeth back in a single day. All-on-4 and All-on-6 implants in Medellín with 17+ year specialist.',
      url: isEs ? `${BASE}/all-on-4-medellin` : `${BASE}/en/all-on-4-medellin`,
      siteName: 'Dra. Carolina Macareno',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.webp`, width: 1200, height: 630, alt: 'All-on-4 / All-on-6 Medellín' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'All-on-4 y All-on-6 en Medellín' : 'All-on-4 and All-on-6 in Medellín',
      description: isEs
        ? 'Implantes fijos de arcada completa con ahorro hasta 65% vs EE.UU.'
        : 'Full-arch fixed implants saving up to 65% vs USA prices.',
      images: [`${BASE}/og-image.webp`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function AllOn4Medellin({
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
    name: isEs ? 'All-on-4 / All-on-6, Rehabilitación Oral Completa' : 'All-on-4 / All-on-6, Full Arch Rehabilitation',
    description: isEs
      ? 'Procedimiento de implantología avanzada que reemplaza toda una arcada dental con 4 o 6 implantes de titanio y una prótesis fija de zirconio.'
      : 'Advanced implantology procedure that replaces an entire dental arch with 4 or 6 titanium implants and a fixed zirconia prosthesis.',
    url: isEs ? `${BASE}/all-on-4-medellin` : `${BASE}/en/all-on-4-medellin`,
    procedureType: 'https://schema.org/SurgicalProcedure',
    bodyLocation: 'Mouth',
    followup: isEs ? 'Prótesis zirconia definitiva en segundo viaje (3-6 meses)' : 'Final zirconia prosthesis on second trip (3-6 months)',
    preparation: isEs ? 'Evaluación clínica y radiológica, TAC dental, plan quirúrgico' : 'Clinical and radiological evaluation, dental CT scan, surgical plan',
    performer: {
      '@type': 'Dentist',
      name: 'Dra. Carolina Macareno',
      medicalSpecialty: ['Dentistry', 'Oral Rehabilitation', 'Implantology'],
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

  const implantTypes = isEs ? [
    {
      name: 'All-on-4',
      icon: <Icon name="tooth" />,
      desc: '4 implantes de titanio angulados estratégicamente para anclar toda una prótesis. Ideal cuando hay pérdida ósea moderada. Prótesis provisional fija el mismo día de la cirugía.',
      best: 'Pérdida ósea moderada, sin necesidad de injerto óseo en la mayoría de casos',
    },
    {
      name: 'All-on-6',
      icon: <Icon name="tooth" />,
      desc: '6 implantes distribuidos en la arcada para mayor estabilidad y soporte de carga. Recomendado cuando la carga oclusal es más exigente o para mayor distribución de fuerzas.',
      best: 'Pacientes con mayor exigencia masticatoria o cuando se prefiere más puntos de soporte',
    },
    {
      name: isEs ? 'Implantes Zigomáticos' : 'Zygomatic Implants',
      icon: <Icon name="bone" />,
      desc: isEs
        ? 'Implantes de mayor longitud anclados en el hueso cigomático (pómulo). Solución para casos de pérdida ósea severa donde el All-on-4 convencional no es viable sin injerto óseo mayor.'
        : 'Longer implants anchored in the zygomatic bone (cheekbone). Solution for severe bone loss cases where conventional All-on-4 is not viable without major bone grafting.',
      best: isEs ? 'Pérdida ósea severa en maxilar superior, atrofia avanzada' : 'Severe bone loss in upper jaw, advanced atrophy',
    },
  ] : [
    {
      name: 'All-on-4',
      icon: <Icon name="tooth" />,
      desc: '4 strategically angled titanium implants to anchor an entire prosthesis. Ideal when there is moderate bone loss. Fixed provisional prosthesis the same day as surgery.',
      best: 'Moderate bone loss, no bone graft needed in most cases',
    },
    {
      name: 'All-on-6',
      icon: <Icon name="tooth" />,
      desc: '6 implants distributed across the arch for greater stability and load support. Recommended when occlusal load is more demanding or for better force distribution.',
      best: 'Patients with greater chewing demands or when more support points are preferred',
    },
    {
      name: 'Zygomatic Implants',
      icon: <Icon name="bone" />,
      desc: 'Longer implants anchored in the zygomatic bone (cheekbone). Solution for severe bone loss cases where conventional All-on-4 is not viable without major bone grafting.',
      best: 'Severe bone loss in upper jaw, advanced atrophy',
    },
  ];

  const savings = [
    {
      procedure: 'All-on-4',
      usa: '$25,000 – $35,000',
      col: '$10,000 – $20,000',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
    {
      procedure: 'All-on-6',
      usa: '$30,000 – $40,000',
      col: '$14,000 – $18,000',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
    {
      procedure: isEs ? 'Implantes Zigomáticos (par)' : 'Zygomatic Implants (pair)',
      usa: '$35,000 – $50,000',
      col: '$16,000 – $20,000',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
  ];

  const process = isEs ? [
    { n: '01', title: 'Evaluación diagnóstica', desc: 'TAC dental 3D, análisis de hueso disponible, plan quirúrgico personalizado. Evaluación virtual gratuita previa.' },
    { n: '02', title: 'Día de cirugía', desc: 'Extracciones (si aplica), colocación de implantes bajo sedación o anestesia local. Proceso de 3-5 horas.' },
    { n: '03', title: 'Prótesis provisional mismo día', desc: 'Sales del consultorio con dientes fijos provisionales en acrílico resistente. Función y estética inmediatas.' },
    { n: '04', title: 'Prótesis definitiva en zirconio', desc: 'Segundo viaje (3-6 meses después) para colocación de la prótesis final en zirconio monolítico. Resultado permanente.' },
  ] : [
    { n: '01', title: 'Diagnostic evaluation', desc: '3D dental CT scan, analysis of available bone, personalized surgical plan. Free prior virtual evaluation.' },
    { n: '02', title: 'Surgery day', desc: 'Extractions (if applicable), implant placement under sedation or local anesthesia. 3-5 hour process.' },
    { n: '03', title: 'Provisional prosthesis same day', desc: 'You leave the clinic with fixed provisional acrylic teeth. Immediate function and aesthetics.' },
    { n: '04', title: 'Final zirconia prosthesis', desc: 'Second trip (3-6 months later) for placement of the final monolithic zirconia prosthesis. Permanent result.' },
  ];

  const candidates = isEs ? [
    { icon: <Icon name="tooth" />, label: 'Pérdida de todos o casi todos los dientes' },
    { icon: <Icon name="bone" />, label: 'Pérdida ósea moderada a severa en maxilar o mandíbula' },
    { icon: <Icon name="tooth" />, label: 'Usuarios de prótesis removibles (dentaduras) que quieren fijeza' },
    { icon: <Icon name="x" />, label: 'Implantes individuales no viables por cantidad o distribución' },
    { icon: <Icon name="stethoscope" />, label: 'Buena salud general (diabetes controlada, no fumador o ex-fumador controlado)' },
    { icon: <Icon name="pill" />, label: 'Sin tratamientos activos con bifosfonatos ni radioterapia maxilofacial reciente' },
  ] : [
    { icon: <Icon name="tooth" />, label: 'Loss of all or almost all teeth' },
    { icon: <Icon name="bone" />, label: 'Moderate to severe bone loss in jaw or mandible' },
    { icon: <Icon name="tooth" />, label: 'Removable denture users who want fixed teeth' },
    { icon: <Icon name="x" />, label: 'Individual implants not viable due to quantity or distribution' },
    { icon: <Icon name="stethoscope" />, label: 'Good general health (controlled diabetes, non-smoker or controlled ex-smoker)' },
    { icon: <Icon name="pill" />, label: 'No active bisphosphonate treatment or recent maxillofacial radiotherapy' },
  ];

  const faqs = isEs ? [
    {
      q: '¿Soy candidato si tengo mucha pérdida de hueso?',
      a: 'En la mayoría de casos de pérdida ósea moderada, el All-on-4 con implantes angulados evita la necesidad de injerto óseo. Para pérdida severa en el maxilar superior, los implantes zigomáticos son la solución. La evaluación con TAC 3D determina el protocolo ideal para tu caso específico.',
    },
    {
      q: '¿Cuánto dura el tratamiento completo?',
      a: 'El primer viaje (cirugía + prótesis provisional) requiere 7-10 días en Medellín. El segundo viaje para la prótesis definitiva en zirconio se realiza 3-6 meses después y requiere 3-5 días adicionales. La prótesis definitiva de zirconio dura 15-25 años con buen mantenimiento.',
    },
    {
      q: '¿Duele el procedimiento?',
      a: 'La cirugía se realiza bajo anestesia local o sedación consciente, por lo que no hay dolor durante el procedimiento. Los primeros 3-5 días post-cirugía pueden haber molestias controladas con analgésicos. La mayoría de pacientes retoma actividad normal en 48-72 horas.',
    },
    {
      q: '¿Necesito injerto óseo?',
      a: 'Una de las grandes ventajas del All-on-4 es que el diseño angulado de los implantes permite aprovechar al máximo el hueso disponible, eliminando la necesidad de injerto en la mayoría de casos. En casos severos se evalúan implantes zigomáticos o protocolos alternativos.',
    },
    {
      q: '¿Por qué son necesarios dos viajes?',
      a: 'El primer viaje es para la cirugía y la prótesis provisional (dientes fijos inmediatos). La oseointegración (fusión del implante con el hueso) requiere 3-6 meses. Una vez consolidados, se coloca la prótesis definitiva en zirconio en el segundo viaje. Este protocolo garantiza resultados permanentes y seguros.',
    },
  ] : [
    {
      q: 'Am I a candidate if I have significant bone loss?',
      a: 'In most cases of moderate bone loss, All-on-4 with angled implants avoids the need for bone grafting. For severe upper jaw loss, zygomatic implants are the solution. The 3D CT scan evaluation determines the ideal protocol for your specific case.',
    },
    {
      q: 'How long does the complete treatment take?',
      a: 'The first trip (surgery + provisional prosthesis) requires 7-10 days in Medellín. The second trip for the final zirconia prosthesis is done 3-6 months later and requires 3-5 additional days. The final zirconia prosthesis lasts 15-25 years with good maintenance.',
    },
    {
      q: 'Does the procedure hurt?',
      a: 'Surgery is performed under local anesthesia or conscious sedation, so there is no pain during the procedure. The first 3-5 days post-surgery may have discomfort controlled with analgesics. Most patients resume normal activity in 48-72 hours.',
    },
    {
      q: 'Do I need a bone graft?',
      a: 'One of the great advantages of All-on-4 is that the angled implant design maximizes use of available bone, eliminating the need for grafting in most cases. In severe cases, zygomatic implants or alternative protocols are evaluated.',
    },
    {
      q: 'Why are two trips necessary?',
      a: 'The first trip is for surgery and the provisional prosthesis (immediate fixed teeth). Osseointegration (implant fusion with bone) requires 3-6 months. Once consolidated, the final zirconia prosthesis is placed on the second trip. This protocol guarantees permanent and safe results.',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'All-on-4 Medellín' : 'All-on-4 Medellín', url: isEs ? `${BASE}/all-on-4-medellin` : `${BASE}/en/all-on-4-medellin` },
  ];
  const faqsForSchema = faqs.map((f) => ({ question: f.q, answer: f.a }));

  const allOn4HowTo = howToSchema({
    name: isEs
      ? 'Proceso All-on-4 paso a paso en Medellín'
      : 'All-on-4 procedure step-by-step in Medellín',
    description: isEs
      ? 'Cómo es el protocolo All-on-4 desde el diagnóstico hasta la prótesis definitiva en zirconio.'
      : 'The All-on-4 protocol from diagnosis to the final zirconia prosthesis.',
    totalTime: 'P180D',
    estimatedCost: { currency: 'USD', value: '14000' },
    steps: [
      {
        name: isEs ? 'Diagnóstico Sonrisa 360°' : 'Smile 360° Diagnostic',
        text: isEs
          ? 'Radiografía panorámica, escaneo intraoral 3D y CBCT 3D del maxilar para planificar la posición exacta de los 4 implantes.'
          : 'Panoramic X-ray, 3D intraoral scan and 3D CBCT of the jaw to plan the exact position of the 4 implants.',
      },
      {
        name: isEs ? 'Cirugía e implantes inmediatos' : 'Surgery and immediate implants',
        text: isEs
          ? 'Bajo anestesia local colocamos 4 implantes (2 rectos anteriores + 2 angulados posteriores) y atornillamos una prótesis provisional el mismo día. Sales con dientes fijos.'
          : 'Under local anesthesia we place 4 implants (2 straight anterior + 2 angled posterior) and screw a provisional prosthesis the same day. You leave with fixed teeth.',
      },
      {
        name: isEs ? 'Periodo de cicatrización (4-6 meses)' : 'Healing period (4-6 months)',
        text: isEs
          ? 'Los implantes se osteointegran al hueso. Llevas la prótesis provisional durante este periodo. Controles cada 4-8 semanas.'
          : 'Implants osseointegrate with the bone. You wear the provisional prosthesis during this period. Follow-ups every 4-8 weeks.',
      },
      {
        name: isEs ? 'Prótesis definitiva en zirconio' : 'Final zirconia prosthesis',
        text: isEs
          ? 'Diseño digital y fabricación de la prótesis definitiva en zirconio (más resistente, estética y duradera). Atornillada sobre los implantes osteointegrados.'
          : 'Digital design and fabrication of the final zirconia prosthesis (stronger, more aesthetic, longer-lasting). Screwed onto the osseointegrated implants.',
      },
      {
        name: isEs ? 'Mantenimiento y controles' : 'Maintenance and follow-ups',
        text: isEs
          ? 'Controles cada 6 meses con limpieza profesional. La prótesis puede durar 25+ años con cuidados adecuados.'
          : 'Follow-ups every 6 months with professional cleaning. The prosthesis can last 25+ years with proper care.',
      },
    ],
  });

  return (
    <div style={{ backgroundColor: '#FCFBF9', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <SchemaOrg schema={[schema, breadcrumbSchema(breadcrumbs), faqSchema(faqsForSchema), allOn4HowTo]} />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(7,11,20,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,164,97,0.15)' }}>
        <Link href={locale === 'es' ? '/' : '/en'} style={{ fontFamily: 'var(--font-playfair-display, serif)', color: '#F5F5F0', fontWeight: 700, fontSize: '1.1rem' }}>
          Dra. Carolina Macareno
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-bold">
            <Link href="/all-on-4-medellin" style={{ color: isEs ? '#C9A461' : '#6B7280' }}>ES</Link>
            <span style={{ color: '#374151' }}>|</span>
            <Link href="/en/all-on-4-medellin" style={{ color: !isEs ? '#C9A461' : '#6B7280' }}>EN</Link>
          </div>
          <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="allon4_nav_consulta"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded font-semibold text-sm transition-all hover:scale-105 bg-[#25D366] text-[#fff]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {isEs ? 'Consulta gratis' : 'Free consultation'}
          </WhatsAppLink>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,164,97,0.12) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#C9A461' }}>
            {isEs ? '🇨🇴 Medellín, Colombia · Implantología de Arcada Completa' : '🇨🇴 Medellín, Colombia · Full Arch Implantology'}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {/*
              Decía "Recupera toda tu arcada". "Arcada" es palabra de odontólogo:
              el paciente no la usa, no la piensa y no la busca en Google.

              La segunda línea traduce a lo que la persona de verdad siente. Un
              paciente no dice que quiere recuperar su función y su estética,
              dice que quiere volver a comer y volver a sonreír. Es el mismo
              criterio que hizo funcionar la ficha del diseño cerámico, donde
              "me veo los dientes amarillos" convence más que "discromía".

              Se mantiene corto a propósito: en celular, un H1 de diez palabras
              se parte en tres renglones y pierde el golpe.
            */}
            {isEs
              ? <>{`Recupera tus dientes en un solo día`}<br /><span style={{ color: '#C9A461' }}>vuelve a comer y a sonreír</span></>
              : <>{'Get your teeth back in a single day'}<br /><span style={{ color: '#C9A461' }}>eat and smile again</span></>}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: '#5A5449', lineHeight: 1.7 }}>
            {isEs
              ? 'All-on-4 y All-on-6 en Medellín con especialista de 17+ años. Dientes fijos, función completa y sonrisa natural desde el primer día de cirugía. Ahorra hasta 65% vs. EE.UU.'
              : 'All-on-4 and All-on-6 in Medellín with a 17+ year specialist. Fixed teeth, full function and natural smile from the first day of surgery. Save up to 65% vs. USA.'}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['🇺🇸 USA', '🇵🇦 Panamá', '🇵🇷 Puerto Rico', '🇨🇷 Costa Rica', '🇨🇴 Colombia'].map((f) => (
              <span key={f} className="text-xs px-3 py-1 rounded-full border"
                style={{ borderColor: 'rgba(201,164,97,0.3)', color: '#77726A', backgroundColor: 'rgba(201,164,97,0.05)' }}>
                {f}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="allon4_hero"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-xl bg-[#C9A461] text-[#070B14] shadow-[0_8px_32px_rgba(201,164,97,0.3)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {isEs ? 'Evalúa tu caso gratis' : 'Evaluate your case for free'}
            </WhatsAppLink>
            <Link href={locale === 'es' ? '/contacto' : '/en/contacto'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
              style={{ borderColor: '#C9A461', color: '#C9A461' }}>
              {isEs ? 'Agenda tu cita' : 'Book your appointment'}
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { n: '17+', label: isEs ? 'años de experiencia' : 'years experience' },
              { n: '3,500+', label: isEs ? 'pacientes transformados' : 'patients transformed' },
              { n: '65%', label: isEs ? 'ahorro vs. EE.UU.' : 'savings vs. USA' },
              { n: '5.0★', label: isEs ? 'calificación promedio' : 'average rating' },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <p className="text-2xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>{s.n}</p>
                <p className="text-xs" style={{ color: '#77726A' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLANT TYPES */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'All-on-4 vs All-on-6 vs Implantes Zigomáticos' : 'All-on-4 vs All-on-6 vs Zygomatic Implants'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#77726A' }}>
            {isEs ? 'Cada protocolo tiene indicaciones específicas. La evaluación diagnóstica determina cuál es el ideal para ti.' : 'Each protocol has specific indications. The diagnostic evaluation determines which is ideal for you.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {implantTypes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border"
                style={{ backgroundColor: '#FFFFFF', borderColor: i === 0 ? 'rgba(201,164,97,0.4)' : '#1F2937' }}>
                {i === 0 && (
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#C9A461' }}>
                    {isEs ? 'Más popular' : 'Most popular'}
                  </p>
                )}
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-3 text-lg" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>{item.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A5449' }}>{item.desc}</p>
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(201,164,97,0.08)' }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: '#C9A461' }}>{isEs ? 'Indicado para:' : 'Indicated for:'}</p>
                  <p className="text-xs" style={{ color: '#77726A' }}>{item.best}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Image
              src="/images/caso-cigomaticos-completo.webp"
              alt="Caso real de implantes cigomáticos: radiografía con cuatro cigomáticos en el maxilar superior y cuatro convencionales en el inferior, y la sonrisa antes y después, Dra. Carolina Macareno, Medellín"
              width={800}
              height={400}
              className="rounded-xl w-full mt-4"
              style={{ objectFit: 'cover' }}
            />
            <p className="text-xs text-center mt-2" style={{ color: '#77726A' }}>
              {isEs ? 'Radiografía panorámica de implantes cigomáticos, caso real' : 'Panoramic X-ray of zygomatic implants, real case'}
            </p>
          </div>
        </div>
      </section>

      {/* PRICE COMPARISON */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Cuánto ahorras eligiendo Medellín' : 'How much you save choosing Medellín'}
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: '#77726A' }}>
            {isEs ? 'Precios en USD · Mismos materiales importados, misma tecnología de punta' : 'Prices in USD · Same imported materials, same cutting-edge technology'}
          </p>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: '#E8E3DA' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <th className="text-left p-4 font-semibold" style={{ color: '#77726A' }}>
                    {isEs ? 'Procedimiento' : 'Procedure'}
                  </th>
                  <th className="text-center p-4 font-semibold" style={{ color: '#77726A' }}>
                    {isEs ? 'Precio EE.UU.' : 'USA Price'}
                  </th>
                  <th className="text-center p-4 font-semibold" style={{ color: '#C9A461' }}>
                    {isEs ? 'Precio Medellín' : 'Medellín Price'}
                  </th>
                  <th className="text-center p-4 font-semibold" style={{ color: '#15803D' }}>
                    {isEs ? 'Tu ahorro' : 'Your savings'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {savings.map((row, i) => (
                  <tr key={i} style={{
                    borderTop: '1px solid #E8E3DA',
                    /*
                      Migrada al tema claro el 5-ago-2026. Antes las filas
                      alternaban #0D1321 y #111827, fondos del tema oscuro
                      viejo, mientras el texto ya era #211E18 del tema claro:
                      negro sobre negro, contraste 1,07. La tabla que compara
                      precios con Estados Unidos estaba literalmente ilegible.
                      Los colores de precio también se oscurecieron: el rojo, el
                      verde y el dorado no llegaban a 4,5 sobre blanco.
                    */
                    backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FAF8F4',
                  }}>
                    <td className="p-4 font-medium" style={{ color: '#211E18' }}>{row.procedure}</td>
                    <td className="p-4 text-center" style={{ color: '#B3261E' }}>{row.usa}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#8A6B2E' }}>{row.col}</td>
                    <td className="p-4 text-center font-bold" style={{ color: '#15803D' }}>{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-center mt-4" style={{ color: '#77726A' }}>
            {isEs
              ? '* Desde $10.000 con prótesis definitiva híbrida en acrílico, y desde $13.000 en zirconio, que tiene varias opciones. El valor incluye los 4 implantes, la cirugía, la regeneración ósea o la elevación de seno maxilar cuando el caso lo necesita, la prótesis temporal fija que usas durante la cicatrización, la prótesis definitiva y el seguimiento. Al comparar con otra cotización, verifica si incluye injerto y elevación de seno: muchas no los incluyen.'
              : '* From $10,000 with a definitive hybrid acrylic prosthesis, and from $13,000 in zirconia, which comes in several options. The price includes the 4 implants, surgery, bone grafting or a sinus lift when the case needs it, the fixed temporary prosthesis you wear during healing, the definitive prosthesis and follow-up. When comparing another quote, check whether it includes grafting and a sinus lift: many do not.'}
          </p>
        </div>
      </section>

      {/*
        CASO REAL, PASO A PASO

        Va antes del proceso escrito a propósito: primero se ve que pasó de
        verdad, y después se lee cómo funciona. Al revés, el texto suena a
        promesa.

        Un antes y después demuestra el resultado pero no responde lo que de
        verdad frena a alguien que va a operarse en otro país, que es qué pasa en
        el medio. Por eso son cuatro fotos en orden y no dos.

        La segunda foto es la única prueba visual en todo el sitio de que la
        sedación se hace con un anestesiólogo presente, con monitorización y
        oxígeno. Es lo primero que pregunta quien viaja para una cirugía larga.
        El rostro de la paciente no aparece: va cubierta por el campo quirúrgico.

        Los datos son los que confirmó la Dra. y coinciden con la reseña pública
        de la paciente en Google, así que cualquiera puede contrastarlos.
      */}
      <section id="caso-real" className="py-16 px-4 scroll-mt-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: '#8A6B2E' }}>
            {isEs ? 'Caso real, paso a paso' : 'A real case, step by step'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'De Panamá a Medellín, en una sola cirugía' : 'From Panama to Medellín, in a single surgery'}
          </h2>
          <p className="text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto" style={{ color: '#5A5449' }}>
            {isEs
              ? 'Llegó con pérdida ósea y enfermedad periodontal avanzada: no era posible conservar ningún diente, ni arriba ni abajo. Diez implantes, seis en el maxilar superior y cuatro en el inferior, colocados en una sola sesión bajo sedación consciente.'
              : 'She arrived with bone loss and advanced periodontal disease: no tooth could be preserved, upper or lower. Ten implants, six in the upper jaw and four in the lower, placed in a single session under conscious sedation.'}
          </p>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: '/images/minerva-1-antes.webp',
                paso: isEs ? 'Antes' : 'Before',
                pie: isEs
                  ? 'Enfermedad periodontal avanzada y pérdida ósea. Ninguna pieza era conservable.'
                  : 'Advanced periodontal disease and bone loss. No tooth could be preserved.',
                alt: isEs
                  ? 'Estado inicial de un caso de All-on-6 y All-on-4, con enfermedad periodontal avanzada'
                  : 'Initial state of an All-on-6 and All-on-4 case, with advanced periodontal disease',
              },
              {
                src: '/images/minerva-2-cirugia.webp',
                paso: isEs ? 'La cirugía' : 'Surgery',
                pie: isEs
                  ? 'Sedación consciente con anestesiólogo, monitorización y oxígeno. Extracciones, injerto óseo y diez implantes en una sesión.'
                  : 'Conscious sedation with an anaesthetist, monitoring and oxygen. Extractions, bone graft and ten implants in one session.',
                alt: isEs
                  ? 'Cirugía de implantes bajo sedación consciente en consultorio, con anestesiólogo y monitorización'
                  : 'Implant surgery under conscious sedation in the clinic, with an anaesthetist and monitoring',
              },
              {
                src: '/images/minerva-3-provisional.webp',
                paso: isEs ? 'El mismo día' : 'The same day',
                pie: isEs
                  ? 'Prótesis provisional fija instalada el mismo día de la cirugía. Salió del consultorio con dientes.'
                  : 'Fixed temporary prosthesis fitted the same day as surgery. She left the clinic with teeth.',
                alt: isEs
                  ? 'Prótesis provisional fija colocada el mismo día de la cirugía de implantes'
                  : 'Fixed temporary prosthesis fitted the same day as the implant surgery',
              },
              {
                src: '/images/minerva-4-definitiva.webp',
                paso: isEs ? 'Cuatro meses después' : 'Four months later',
                pie: isEs
                  ? 'Prótesis definitiva híbrida en zirconio, ampliando el arco superior para devolver proporción.'
                  : 'Definitive zirconia hybrid prosthesis, widening the upper arch to restore proportion.',
                alt: isEs
                  ? 'Resultado final con prótesis fija híbrida en zirconio sobre implantes'
                  : 'Final result with a fixed hybrid zirconia prosthesis on implants',
              },
            ].map((f, i) => (
              <li key={f.src}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border" style={{ borderColor: '#E8E3DA', backgroundColor: '#FFFFFF' }}>
                  <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <span
                    className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase"
                    style={{ backgroundColor: '#FCFBF9', color: '#211E18' }}
                  >
                    {i + 1}. {f.paso}
                  </span>
                </div>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: '#77726A' }}>{f.pie}</p>
              </li>
            ))}
          </ol>

          <p className="text-sm text-center mt-10 max-w-3xl mx-auto leading-relaxed" style={{ color: '#77726A' }}>
            {isEs
              ? 'Fotografías del caso, sin retoque. La paciente viajó desde Panamá y dejó su testimonio público en Google.'
              : 'Photographs of the case, unretouched. The patient travelled from Panama and left her public review on Google.'}
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'El proceso paso a paso' : 'The step-by-step process'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm"
                  style={{ backgroundColor: 'rgba(201,164,97,0.15)', color: '#C9A461', border: '1px solid rgba(201,164,97,0.3)' }}>
                  {step.n}
                </div>
                <h4 className="font-semibold mb-2 text-sm" style={{ color: '#211E18' }}>{step.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#77726A' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS A CANDIDATE */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? '¿Eres candidato al All-on-4 o All-on-6?' : 'Are you a candidate for All-on-4 or All-on-6?'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#77726A' }}>
            {isEs ? 'Este procedimiento está indicado para pacientes con:' : 'This procedure is indicated for patients with:'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {candidates.map((c, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <span className="text-2xl shrink-0">{c.icon}</span>
                <p className="text-sm" style={{ color: '#5A5449' }}>{c.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border max-w-3xl mx-auto" style={{ backgroundColor: 'rgba(201,164,97,0.05)', borderColor: 'rgba(201,164,97,0.2)' }}>
            <p className="text-sm text-center" style={{ color: '#5A5449' }}>
              {isEs
                ? '¿No estás seguro si eres candidato? Envíanos por WhatsApp fotos panorámicas de tu boca o cualquier radiografía reciente y hacemos una evaluación virtual gratuita.'
                : 'Not sure if you are a candidate? Send us panoramic photos of your mouth or any recent X-rays via WhatsApp and we will do a free virtual evaluation.'}
            </p>
            <div className="flex justify-center mt-4">
              <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="allon4_candidato_eval"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 bg-[#25D366] text-[#fff]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {isEs ? 'Evaluación virtual gratuita' : 'Free virtual evaluation'}
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <h3 className="font-semibold mb-3 text-sm" style={{ color: '#211E18' }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border" style={{ backgroundColor: 'rgba(201,164,97,0.04)', borderColor: 'rgba(201,164,97,0.2)' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Tu especialista en implantología' : 'Your implantology specialist'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Dra. Carolina Macareno
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  {(isEs ? [
                    'Odontóloga, Universidad El Bosque',
                    'Especialista en Rehabilitación Oral, Universidad CES',
                    'Implantología, FACOP',
                    'Estética Dental, New York University',
                    
                    '17+ años de práctica clínica en Medellín',
                    '3,500+ pacientes transformados, incluyendo internacionales',
                    'Atención en español e inglés',
                    'Implantología guiada por computador y TAC 3D',
                    'Implantes: Straumann, Neodent, Dioimplant',
                  ] : [
                    'Dentist, Universidad El Bosque',
                    'Oral Rehabilitation Specialist, Universidad CES',
                    'Implantology, FACOP',
                    'Aesthetic Dentistry, New York University',
                    
                    '17+ years of clinical practice in Medellín',
                    '3,500+ patients transformed, including international',
                    'Care in Spanish and English',
                    'Computer-guided implantology and 3D CT scan',
                    'Implants: Straumann, Neodent, Dioimplant',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#5A5449' }}>
                      <span className="mt-0.5 shrink-0" style={{ color: '#C9A461' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-xl" style={{ backgroundColor: '#FFFFFF' }}>
                  <p className="text-sm italic leading-relaxed" style={{ color: '#5A5449' }}>
                    {isEs
                      ? '"El All-on-4 no es solo un procedimiento, es devolver a una persona su capacidad de comer, hablar y sonreír con confianza. Eso cambia vidas."'
                      : '"All-on-4 is not just a procedure, it\'s giving someone back their ability to eat, speak and smile with confidence. That changes lives."'}
                  </p>
                  <p className="text-xs mt-3" style={{ color: '#C9A461' }}>Dra. Carolina Macareno</p>
                </div>
                <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="allon4_especialista_directo"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {isEs ? 'Escribirle directamente' : 'Message her directly'}
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FCFBF9 55%, #F6F1E8 100%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
            {isEs ? 'Da el primer paso hoy' : 'Take the first step today'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? 'Tu nueva arcada empieza con un mensaje'
              : 'Your new arch starts with one message'}
          </h2>
          <p className="mb-8" style={{ color: '#5A5449' }}>
            {isEs
              ? 'Evaluación virtual gratuita. Sin compromiso. Respuesta en menos de 24 horas. Envía tus radiografías o fotos y recibe un plan real con costos en USD.'
              : 'Free virtual evaluation. No commitment. Response in less than 24 hours. Send your X-rays or photos and receive a real plan with costs in USD.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="allon4_cta_whatsapp"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 bg-[#25D366] text-[#fff]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </WhatsAppLink>
            <Link href={locale === 'es' ? '/contacto' : '/en/contacto'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
              style={{ borderColor: '#C9A461', color: '#C9A461' }}>
              {isEs ? 'Formulario de contacto' : 'Contact form'}
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: '#77726A' }}>
            <Icon name="pin" className="w-4 h-4 inline-block align-[-3px] mr-1.5" />
            El Poblado, Medellín · {isEs ? 'Atención en español e inglés' : 'Care in Spanish and English'}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center border-t" style={{ borderColor: '#E8E3DA' }}>
        <p className="text-sm" style={{ color: '#77726A' }}>
          © 2026 Dra. Carolina Macareno · El Poblado, Medellín, Colombia ·{' '}
          <Link href={locale === 'es' ? '/' : '/en'} style={{ color: '#C9A461' }}>
            {isEs ? 'Ver sitio completo' : 'View full site'}
          </Link>
          {' · '}
          <Link href={locale === 'es' ? '/dental-tourism-colombia' : '/en/dental-tourism-colombia'} style={{ color: '#C9A461' }}>
            {isEs ? 'Turismo Dental' : 'Dental Tourism'}
          </Link>
          {' · '}
          <Link href={locale === 'es' ? '/dental-implants-for-us-patients' : '/en/dental-implants-for-us-patients'} style={{ color: '#C9A461' }}>
            {isEs ? 'Implantes para Pacientes de EE.UU.' : 'Implants for US Patients'}
          </Link>
        </p>
      </footer>
      <RelatedArticles route="/all-on-4-medellin" locale={locale} />
    </div>
  );
}
