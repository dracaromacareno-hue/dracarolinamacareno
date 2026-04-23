import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg from '@/components/SchemaOrg';

const WA_ES = 'https://wa.me/573163975232?text=Hola%2C%20quiero%20información%20sobre%20All-on-4%20o%20All-on-6%20en%20Medellín';
const WA_EN = 'https://wa.me/573163975232?text=Hi%2C%20I%27m%20interested%20in%20All-on-4%20or%20All-on-6%20in%20Medell%C3%ADn';

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
      ? 'All-on-4 y All-on-6 en Medellín Colombia | Dientes Fijos — Dra. Carolina Macareno'
      : 'All-on-4 and All-on-6 in Medellín Colombia | Full Arch Implants — Dr. Carolina Macareno',
    description: isEs
      ? 'All-on-4 y All-on-6 en Medellín, Colombia. Recupera toda tu arcada en un solo día con implantes fijos. Ahorra hasta 65% vs precios en EE.UU. Dra. Carolina Macareno, especialista con 17+ años de experiencia.'
      : 'All-on-4 and All-on-6 in Medellín, Colombia. Restore your full arch in one day with fixed implants. Save up to 65% vs USA prices. Dr. Carolina Macareno, specialist with 17+ years experience.',
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
        ? 'Recupera toda tu arcada en un día. Implantes All-on-4 y All-on-6 en Medellín con especialista de 17+ años.'
        : 'Restore your full arch in one day. All-on-4 and All-on-6 implants in Medellín with 17+ year specialist.',
      url: isEs ? `${BASE}/all-on-4-medellin` : `${BASE}/en/all-on-4-medellin`,
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
    name: isEs ? 'All-on-4 / All-on-6 — Rehabilitación Oral Completa' : 'All-on-4 / All-on-6 — Full Arch Rehabilitation',
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
      icon: '4️⃣',
      desc: '4 implantes de titanio angulados estratégicamente para anclar toda una prótesis. Ideal cuando hay pérdida ósea moderada. Prótesis provisional fija el mismo día de la cirugía.',
      best: 'Pérdida ósea moderada, sin necesidad de injerto óseo en la mayoría de casos',
    },
    {
      name: 'All-on-6',
      icon: '6️⃣',
      desc: '6 implantes distribuidos en la arcada para mayor estabilidad y soporte de carga. Recomendado cuando la carga oclusal es más exigente o para mayor distribución de fuerzas.',
      best: 'Pacientes con mayor exigencia masticatoria o cuando se prefiere más puntos de soporte',
    },
    {
      name: isEs ? 'Implantes Zigomáticos' : 'Zygomatic Implants',
      icon: '🦴',
      desc: isEs
        ? 'Implantes de mayor longitud anclados en el hueso cigomático (pómulo). Solución para casos de pérdida ósea severa donde el All-on-4 convencional no es viable sin injerto óseo mayor.'
        : 'Longer implants anchored in the zygomatic bone (cheekbone). Solution for severe bone loss cases where conventional All-on-4 is not viable without major bone grafting.',
      best: isEs ? 'Pérdida ósea severa en maxilar superior, atrofia avanzada' : 'Severe bone loss in upper jaw, advanced atrophy',
    },
  ] : [
    {
      name: 'All-on-4',
      icon: '4️⃣',
      desc: '4 strategically angled titanium implants to anchor an entire prosthesis. Ideal when there is moderate bone loss. Fixed provisional prosthesis the same day as surgery.',
      best: 'Moderate bone loss, no bone graft needed in most cases',
    },
    {
      name: 'All-on-6',
      icon: '6️⃣',
      desc: '6 implants distributed across the arch for greater stability and load support. Recommended when occlusal load is more demanding or for better force distribution.',
      best: 'Patients with greater chewing demands or when more support points are preferred',
    },
    {
      name: 'Zygomatic Implants',
      icon: '🦴',
      desc: 'Longer implants anchored in the zygomatic bone (cheekbone). Solution for severe bone loss cases where conventional All-on-4 is not viable without major bone grafting.',
      best: 'Severe bone loss in upper jaw, advanced atrophy',
    },
  ];

  const savings = [
    {
      procedure: 'All-on-4',
      usa: '$25,000 – $35,000',
      col: '$12,000 – $16,000',
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
    { icon: '🦷', label: 'Pérdida de todos o casi todos los dientes' },
    { icon: '🦴', label: 'Pérdida ósea moderada a severa en maxilar o mandíbula' },
    { icon: '🪥', label: 'Usuarios de prótesis removibles (dentaduras) que quieren fijeza' },
    { icon: '❌', label: 'Implantes individuales no viables por cantidad o distribución' },
    { icon: '🩺', label: 'Buena salud general (diabetes controlada, no fumador o ex-fumador controlado)' },
    { icon: '💊', label: 'Sin tratamientos activos con bifosfonatos ni radioterapia maxilofacial reciente' },
  ] : [
    { icon: '🦷', label: 'Loss of all or almost all teeth' },
    { icon: '🦴', label: 'Moderate to severe bone loss in jaw or mandible' },
    { icon: '🪥', label: 'Removable denture users who want fixed teeth' },
    { icon: '❌', label: 'Individual implants not viable due to quantity or distribution' },
    { icon: '🩺', label: 'Good general health (controlled diabetes, non-smoker or controlled ex-smoker)' },
    { icon: '💊', label: 'No active bisphosphonate treatment or recent maxillofacial radiotherapy' },
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

  return (
    <div style={{ backgroundColor: '#070B14', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <SchemaOrg schema={schema} />

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
            {isEs ? '🇨🇴 Medellín, Colombia · Implantología de Arcada Completa' : '🇨🇴 Medellín, Colombia · Full Arch Implantology'}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? <>{`Recupera toda tu arcada`}<br /><span style={{ color: '#C9A461' }}>en un solo día</span></>
              : <>{'Restore your full arch'}<br /><span style={{ color: '#C9A461' }}>in one day</span></>}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: '#D1D5DB', lineHeight: 1.7 }}>
            {isEs
              ? 'All-on-4 y All-on-6 en Medellín con especialista de 17+ años. Dientes fijos, función completa y sonrisa natural desde el primer día de cirugía. Ahorra hasta 65% vs. EE.UU.'
              : 'All-on-4 and All-on-6 in Medellín with a 17+ year specialist. Fixed teeth, full function and natural smile from the first day of surgery. Save up to 65% vs. USA.'}
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
              { n: '3,500+', label: isEs ? 'pacientes transformados' : 'patients transformed' },
              { n: '65%', label: isEs ? 'ahorro vs. EE.UU.' : 'savings vs. USA' },
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

      {/* IMPLANT TYPES */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'All-on-4 vs All-on-6 vs Implantes Zigomáticos' : 'All-on-4 vs All-on-6 vs Zygomatic Implants'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            {isEs ? 'Cada protocolo tiene indicaciones específicas. La evaluación diagnóstica determina cuál es el ideal para ti.' : 'Each protocol has specific indications. The diagnostic evaluation determines which is ideal for you.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {implantTypes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border"
                style={{ backgroundColor: '#111827', borderColor: i === 0 ? 'rgba(201,164,97,0.4)' : '#1F2937' }}>
                {i === 0 && (
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#C9A461' }}>
                    {isEs ? 'Más popular' : 'Most popular'}
                  </p>
                )}
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-3 text-lg" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>{item.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#D1D5DB' }}>{item.desc}</p>
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(201,164,97,0.08)' }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: '#C9A461' }}>{isEs ? 'Indicado para:' : 'Indicated for:'}</p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>{item.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE COMPARISON */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
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
              ? '* Los precios incluyen implantes, cirugía, prótesis provisional y seguimiento. Prótesis definitiva en zirconio se cotiza por separado en segundo viaje.'
              : '* Prices include implants, surgery, provisional prosthesis and follow-up. Final zirconia prosthesis is quoted separately on the second trip.'}
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'El proceso paso a paso' : 'The step-by-step process'}
          </h2>
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

      {/* WHO IS A CANDIDATE */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? '¿Eres candidato al All-on-4 o All-on-6?' : 'Are you a candidate for All-on-4 or All-on-6?'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            {isEs ? 'Este procedimiento está indicado para pacientes con:' : 'This procedure is indicated for patients with:'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {candidates.map((c, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                <span className="text-2xl shrink-0">{c.icon}</span>
                <p className="text-sm" style={{ color: '#D1D5DB' }}>{c.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border max-w-3xl mx-auto" style={{ backgroundColor: 'rgba(201,164,97,0.05)', borderColor: 'rgba(201,164,97,0.2)' }}>
            <p className="text-sm text-center" style={{ color: '#D1D5DB' }}>
              {isEs
                ? '¿No estás seguro si eres candidato? Envíanos por WhatsApp fotos panorámicas de tu boca o cualquier radiografía reciente y hacemos una evaluación virtual gratuita.'
                : 'Not sure if you are a candidate? Send us panoramic photos of your mouth or any recent X-rays via WhatsApp and we will do a free virtual evaluation.'}
            </p>
            <div className="flex justify-center mt-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: '#25D366', color: '#fff' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {isEs ? 'Evaluación virtual gratuita' : 'Free virtual evaluation'}
              </a>
            </div>
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
              {isEs ? 'Tu especialista en implantología' : 'Your implantology specialist'}
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
                    'Atención en español e inglés',
                    'Implantología guiada por computador y TAC 3D',
                    'Implantes: Straumann, Neodent, Dioimplant',
                  ] : [
                    'Dentist — Universidad El Bosque',
                    'Oral Rehabilitation Specialist — Universidad CES',
                    'Implantology — FACOP',
                    'Aesthetic Dentistry — New York University',
                    
                    '17+ years of clinical practice in Medellín',
                    '3,500+ patients transformed, including international',
                    'Care in Spanish and English',
                    'Computer-guided implantology and 3D CT scan',
                    'Implants: Straumann, Neodent, Dioimplant',
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
                      ? '"El All-on-4 no es solo un procedimiento — es devolver a una persona su capacidad de comer, hablar y sonreír con confianza. Eso cambia vidas."'
                      : '"All-on-4 is not just a procedure — it\'s giving someone back their ability to eat, speak and smile with confidence. That changes lives."'}
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
            {isEs ? 'Da el primer paso hoy' : 'Take the first step today'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? 'Tu nueva arcada empieza con un mensaje'
              : 'Your new arch starts with one message'}
          </h2>
          <p className="mb-8" style={{ color: '#D1D5DB' }}>
            {isEs
              ? 'Evaluación virtual gratuita. Sin compromiso. Respuesta en menos de 24 horas. Envía tus radiografías o fotos y recibe un plan real con costos en USD.'
              : 'Free virtual evaluation. No commitment. Response in less than 24 hours. Send your X-rays or photos and receive a real plan with costs in USD.'}
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
