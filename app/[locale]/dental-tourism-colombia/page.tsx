import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Link from 'next/link';
import Image from 'next/image';
import RespuestaDirecta from '@/components/RespuestaDirecta';
import SchemaOrg, { breadcrumbSchema, faqSchema, howToSchema } from '@/components/SchemaOrg';
import WhatsAppLink from '@/components/WhatsAppLink';

const WA_EN = 'Hi, I found you through your dental tourism page and would like to know more about treatment options in Medellín';
const WA_ES = 'Hola, me interesa información sobre turismo dental en Medellín';

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
      ? 'Turismo Dental en Medellín | Presupuesto Antes de Viajar'
      : 'Dental Tourism in Medellín | 17-Year Specialist',
    description: isEs
      ? 'Turismo dental en Medellín para pacientes hispanos. Con tus radiografías te doy un presupuesto exacto antes de viajar. Ahorra hasta 65% vs EE.UU.'
      : 'Dental tourism in Medellín, Colombia: implant + crown from $1,200 USD, All-on-4 & smile makeovers. Save up to 65% vs USA. Free virtual consult before booking flights.',
    keywords: isEs
      ? ['turismo dental Colombia', 'turismo dental Medellín', 'rehabilitación oral Medellín', 'implantes dentales Colombia', 'All-on-4 Colombia', 'diseño de sonrisa Medellín', 'dentista Medellín internacional']
      : ['dental tourism Colombia', 'dental tourism Medellín', 'oral rehabilitation Colombia', 'dental implants Medellín', 'All-on-4 Colombia', 'smile makeover Colombia', 'oral rehabilitation specialist Medellín', 'dental work Panama', 'dental work Colombia USA'],
    alternates: {
      canonical: isEs ? `${BASE}/dental-tourism-colombia` : `${BASE}/en/dental-tourism-colombia`,
      languages: {
        'es': `${BASE}/dental-tourism-colombia`,
        'es-419': `${BASE}/dental-tourism-colombia`,
        'en': `${BASE}/en/dental-tourism-colombia`,
        'x-default': `${BASE}/dental-tourism-colombia`,
      },
    },
    openGraph: {
      title: isEs
        ? 'Turismo Dental en Medellín | Dra. Carolina Macareno'
        : 'Dental Tourism in Medellín Colombia | Dr. Carolina Macareno',
      description: isEs
        ? 'Rehabilitación oral, implantes y diseño de sonrisa en Medellín. Ahorra hasta 65% con calidad de primer mundo.'
        : 'Oral rehabilitation, implants and smile design in Medellín. Save up to 65% with world-class quality.',
      url: isEs ? `${BASE}/dental-tourism-colombia` : `${BASE}/en/dental-tourism-colombia`,
      siteName: 'Dra. Carolina Macareno',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.webp`, width: 1200, height: 630, alt: 'Dental Tourism Medellín' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'Turismo Dental en Medellín' : 'Dental Tourism in Medellín',
      description: isEs
        ? 'Implantes y rehabilitación oral en Medellín. Ahorra hasta 65% con calidad de primer mundo.'
        : 'Implants and oral rehabilitation in Medellín. Save up to 65% with world-class quality.',
      images: [`${BASE}/og-image.webp`],
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
  const p = isEs ? '' : '/en';
  const WA_DIASPORA = isEs
    ? 'Hola Dra. Carolina, vivo fuera de Colombia y quiero aprovechar un viaje para hacerme los dientes. ¿Podemos hablar de mi caso y presupuesto?'
    : WA_EN;

  const dentalTourismSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: isEs ? 'Turismo Dental en Colombia, Dra. Carolina Macareno' : 'Dental Tourism in Colombia, Dr. Carolina Macareno',
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
      procedure: 'All-on-4 / All-on-6',
      usa: '$25,000 – $35,000',
      col: '$10,000 – $20,000',
      save: isEs ? 'Ahorra ~65%' : 'Save ~65%',
    },
    {
      procedure: isEs ? 'Sobredentadura sobre implantes (2 a 4)' : 'Implant overdenture (2 to 4 implants)',
      usa: '$8,000 – $15,000',
      col: '$3,500 – $5,000',
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
    { icon: <Icon name="plane" />, title: 'Ciudad fácil de llegar', desc: 'Vuelos directos desde Miami, Nueva York, Bogotá, Ciudad de Panamá y muchas otras ciudades.' },
    { icon: <Icon name="building" />, title: 'Alojamiento premium a bajo costo', desc: 'El Poblado, donde está el consultorio, es el barrio más turístico de Medellín. Hoteles de 5 estrellas desde $80 USD/noche.' },
    { icon: <Icon name="sun" />, title: 'Clima perfecto todo el año', desc: 'Medellín es la "Ciudad de la Eterna Primavera". 22°C promedio, ideal para recuperarte cómodamente.' },
    { icon: <Icon name="tooth" />, title: 'Odontología de clase mundial', desc: 'Colombia forma a sus especialistas en los mejores programas de América Latina. Tecnología de punta, materiales importados.' },
    { icon: <Icon name="money" />, title: 'Ahorro real sin sacrificar calidad', desc: 'Hasta 70% de ahorro vs. EE.UU. o Europa. El mismo nivel de atención, los mismos materiales, a una fracción del costo.' },
    { icon: <Icon name="lock" />, title: 'Seguridad y confort', desc: 'El Poblado es la zona más segura y moderna de Medellín. Restaurantes, spas, centros comerciales, todo a pasos del consultorio.' },
  ] : [
    { icon: <Icon name="plane" />, title: 'Easy city to reach', desc: 'Direct flights from Miami, New York, Bogotá, Panama City and many other cities.' },
    { icon: <Icon name="building" />, title: 'Premium accommodation at low cost', desc: 'El Poblado, where the clinic is, is Medellín\'s most touristic neighborhood. 5-star hotels from $80 USD/night.' },
    { icon: <Icon name="sun" />, title: 'Perfect climate year-round', desc: 'Medellín is the "City of Eternal Spring". 22°C average, ideal for a comfortable recovery.' },
    { icon: <Icon name="tooth" />, title: 'World-class dentistry', desc: 'Colombia trains its specialists in Latin America\'s best programs. Cutting-edge technology, imported materials.' },
    { icon: <Icon name="money" />, title: 'Real savings without sacrificing quality', desc: 'Up to 70% savings vs. USA or Europe. Same level of care, same materials, at a fraction of the cost.' },
    { icon: <Icon name="lock" />, title: 'Safety and comfort', desc: 'El Poblado is Medellín\'s safest and most modern area. Restaurants, spas, shopping centers, all steps from the clinic.' },
  ];

  const treatments = isEs ? [
    { title: 'Implantes dentales', desc: 'Reemplaza uno o varios dientes con implantes Straumann y Neodent, las mismas marcas que se usan en EE.UU.', href: `${p}/servicios/implantes-dentales` },
    { title: 'All-on-4 en Medellín', desc: 'Dentadura fija sobre 4 implantes: recupera toda tu boca, muchas veces con dientes provisionales el mismo día.', href: `${p}/all-on-4-medellin` },
    { title: 'Implantes cigomáticos', desc: 'La solución cuando en otro lado te dijeron que "no tienes hueso suficiente" para implantes.', href: `${p}/servicios/implantes-cigomaticos` },
    { title: 'Diseño de sonrisa', desc: 'Carillas y coronas en porcelana o zirconio para una sonrisa natural, armónica y a tu medida.', href: `${p}/servicios/diseno-de-sonrisa` },
    { title: 'Rehabilitación oral completa', desc: 'Un plan integral que devuelve función y estética a toda tu boca, no solo un diente a la vez.', href: `${p}/servicios/rehabilitacion-oral-completa` },
  ] : [
    { title: 'Dental implants', desc: 'Replace one or several teeth with Straumann and Neodent implants, the same brands used in the USA.', href: `${p}/servicios/implantes-dentales` },
    { title: 'All-on-4 in Medellín', desc: 'Fixed teeth on 4 implants: rebuild your whole mouth, often with same-day provisional teeth.', href: `${p}/all-on-4-medellin` },
    { title: 'Zygomatic implants', desc: 'The solution when you\'ve been told you "don\'t have enough bone" for implants.', href: `${p}/servicios/implantes-cigomaticos` },
    { title: 'Smile design', desc: 'Porcelain or zirconia veneers and crowns for a natural, harmonious, custom smile.', href: `${p}/servicios/diseno-de-sonrisa` },
    { title: 'Full oral rehabilitation', desc: 'An integral plan that restores function and aesthetics to your whole mouth, not one tooth at a time.', href: `${p}/servicios/rehabilitacion-oral-completa` },
  ];

  const faqs = isEs ? [
    {
      q: '¿Puedo hacerme los implantes en Colombia si vivo en Estados Unidos, España o Canadá?',
      a: 'Sí. La mayoría de pacientes de turismo dental de la Dra. Carolina son colombianos e hispanos que viven en el exterior y aprovechan un viaje a casa para tratarse. Coordinamos todo por WhatsApp o videollamada antes de que viajes, valoración de tu caso, plan y presupuesto, para que solo reserves los días de tu tratamiento en Medellín.',
    },
    {
      q: '¿Cómo me dan un presupuesto exacto antes de comprar el tiquete?',
      a: 'La Dra. Carolina te llama personalmente para entender tu caso. Si tienes radiografías o una tomografía recientes, las revisa y te entrega un presupuesto exacto en USD antes de que viajes, sin sorpresas al llegar. Si no las tienes, te da un rango realista y confirmamos el valor final el primer día, con la radiografía que te tomas en el centro radiológico de la torre vecina.',
    },
    {
      q: '¿Cuánto cuesta un All-on-4 en Medellín, Colombia?',
      a: 'Un All-on-4 o 6 en Medellín cuesta entre $10.000 y $20.000 USD por arcada, hasta 65% menos que los $25.000–$35.000 USD de Estados Unidos, con los mismos implantes de marca (Straumann, Neodent). Ese valor incluye la cirugía y tanto la prótesis temporal como la definitiva. El valor exacto depende de tu hueso y del tipo de prótesis, y se define en la valoración. Recuerda que se puede realizar prótesis fija atornillada a los implantes, o sobredentadura (prótesis removible pero retenida por implantes para controlar el movimiento).',
    },
    {
      q: '¿Necesito llevar mis radiografías a la cita?',
      a: 'Si las tienes, envíalas por WhatsApp antes de viajar: nos permiten afinar tu plan y darte un presupuesto exacto. Si no las tienes, no te preocupes; el primer día hacemos el escaneo intraoral 3D en el consultorio, incluido en la consulta diagnóstica, y la radiografía la tomas el mismo día en el centro radiológico de la torre vecina (se cobra aparte).',
    },
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
      a: 'Sí. Aceptamos pagos en USD, COP, transferencias internacionales y tarjetas de crédito internacionales, con opción de diferir a cuotas. Escríbenos para revisar las opciones de pago que aplican a tu caso.',
    },
  ] : [
    {
      q: 'Can I get implants in Colombia if I live in the USA, Spain or Canada?',
      a: 'Yes. Most of Dr. Carolina\'s dental-tourism patients are Colombians and Hispanics living abroad who use a trip home to get treated. We coordinate everything by WhatsApp or video call before you travel, case assessment, plan and quote, so you only book the days of your treatment in Medellín.',
    },
    {
      q: 'How do you give me an exact quote before I buy my ticket?',
      a: 'Dr. Carolina calls you personally to understand your case. If you have recent X-rays or a CT scan, she reviews them and gives you an exact quote in USD before you travel, no surprises on arrival. If you don\'t have them, she gives you a realistic range and we confirm the final cost on day one, with the X-ray taken at the radiology center in the neighboring tower.',
    },
    {
      q: 'How much does an All-on-4 cost in Medellín, Colombia?',
      a: 'An All-on-4 or All-on-6 in Medellín costs between $10,000 and $20,000 USD per arch, up to 65% less than the $25,000–$35,000 USD in the USA, using the same brand implants (Straumann, Neodent). That price includes the surgery and both the temporary and the final prosthesis. The exact cost depends on your bone and prosthesis type, and is defined at the assessment. It can be done as a fixed prosthesis screwed onto the implants, or as an overdenture (a removable prosthesis retained by implants to control movement).',
    },
    {
      q: 'Do I need to bring my X-rays to the appointment?',
      a: 'If you have them, send them by WhatsApp before traveling: they let us fine-tune your plan and give you an exact quote. If not, don\'t worry; on your first day we do the 3D intraoral scan at the office, included in the diagnostic consultation, and you get the X-ray taken the same day at the radiology center in the neighboring tower (billed separately).',
    },
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
      a: 'Yes. We accept payments in USD, COP, international transfers and international credit cards, with the option to split payments into installments. Message us to review the payment options that apply to your case.',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Turismo Dental Colombia' : 'Dental Tourism Colombia', url: isEs ? `${BASE}/dental-tourism-colombia` : `${BASE}/en/dental-tourism-colombia` },
  ];
  const faqsForSchema = faqs.map((f) => ({ question: f.q, answer: f.a }));

  const dentalTourismHowTo = howToSchema({
    name: isEs
      ? 'Cómo planificar tu viaje de turismo dental a Medellín'
      : 'How to plan your dental-tourism trip to Medellín',
    description: isEs
      ? 'Guía paso a paso para coordinar tu tratamiento dental en Medellín desde Estados Unidos, Panamá, Puerto Rico o Costa Rica.'
      : 'Step-by-step guide to coordinate your dental treatment in Medellín from the United States, Panama, Puerto Rico or Costa Rica.',
    totalTime: 'P21D',
    estimatedCost: { currency: 'USD', value: '3500' },
    supply: isEs
      ? ['Pasaporte vigente', 'Radiografías o estudios previos (si los tienes)', 'Lista de medicamentos actuales']
      : ['Valid passport', 'Previous X-rays or studies (if available)', 'List of current medications'],
    tool: isEs
      ? ['WhatsApp para evaluación virtual', 'Tarjeta de crédito o efectivo USD']
      : ['WhatsApp for virtual evaluation', 'Credit card or cash in USD'],
    steps: [
      {
        name: isEs ? 'Evaluación virtual gratuita' : 'Free virtual evaluation',
        text: isEs
          ? 'Envíanos por WhatsApp 5 fotos de tu sonrisa (frontal, perfil derecho, perfil izquierdo, boca abierta arriba y abajo) y describe lo que quieres mejorar. Te respondemos en 24-48 horas con orientación inicial.'
          : 'Send us 5 photos of your smile via WhatsApp (frontal, right profile, left profile, open mouth top and bottom) and describe what you want to improve. We respond in 24-48 hours with initial guidance.',
        url: 'https://wa.me/573163975232',
      },
      {
        name: isEs ? 'Plan de tratamiento + cotización' : 'Treatment plan + quote',
        text: isEs
          ? 'Recibes un plan de tratamiento por escrito con opciones, tiempos y cotización detallada en USD y COP. Sin presión, puedes tomar la decisión a tu ritmo.'
          : 'You receive a written treatment plan with options, timelines and a detailed quote in USD and COP. No pressure, decide at your own pace.',
      },
      {
        name: isEs ? 'Coordinación de viaje' : 'Trip coordination',
        text: isEs
          ? 'Una vez confirmes, te ayudamos con recomendaciones de hospedaje en El Poblado (cerca al consultorio) y agendamos tus citas en los días que mejor se acomoden a tu viaje.'
          : 'Once you confirm, we help with hotel recommendations in El Poblado (near the clinic) and schedule your appointments around your trip.',
      },
      {
        name: isEs ? 'Llegada y consulta diagnóstica Sonrisa 360°' : 'Arrival and Smile 360° diagnostic consultation',
        text: isEs
          ? 'Día 1 en Medellín: consulta diagnóstica con radiografía panorámica, escaneo 3D, limpieza profesional y confirmación final del plan.'
          : 'Day 1 in Medellín: diagnostic consultation with panoramic X-ray, 3D scan, professional cleaning and final plan confirmation.',
      },
      {
        name: isEs ? 'Tratamiento clínico' : 'Clinical treatment',
        text: isEs
          ? 'Ejecutamos el tratamiento en bloques eficientes (cirugía + provisionalización el mismo día cuando es posible) para optimizar tu tiempo en la ciudad.'
          : 'We execute the treatment in efficient blocks (surgery + provisional restoration the same day when possible) to optimize your time in the city.',
      },
      {
        name: isEs ? 'Controles y entrega final' : 'Follow-ups and final delivery',
        text: isEs
          ? 'Citas de control durante tu estadía y seguimiento remoto desde tu país. Para tratamientos extensos coordinamos un segundo viaje 4-6 meses después.'
          : 'Follow-up appointments during your stay and remote monitoring from your country. For extensive treatments we schedule a second trip 4-6 months later.',
      },
    ],
  });

  return (
    <div style={{ backgroundColor: '#FCFBF9', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <SchemaOrg schema={[dentalTourismSchema, breadcrumbSchema(breadcrumbs), faqSchema(faqsForSchema), dentalTourismHowTo]} />

      {/* MINIMAL NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(7,11,20,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,164,97,0.15)' }}>
        <Link href={locale === 'es' ? '/' : '/en'} style={{ fontFamily: 'var(--font-playfair-display, serif)', color: '#211E18', fontWeight: 700, fontSize: '1.1rem' }}>
          Dra. Carolina Macareno
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-bold">
            <Link href="/dental-tourism-colombia" style={{ color: isEs ? '#C9A461' : '#6B7280' }}>ES</Link>
            <span style={{ color: '#374151' }}>|</span>
            <Link href="/en/dental-tourism-colombia" style={{ color: !isEs ? '#C9A461' : '#6B7280' }}>EN</Link>
          </div>
          <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="tourism_nav_consulta"
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
            {isEs ? '🇨🇴 Medellín, Colombia · Turismo Dental de Especialidad' : '🇨🇴 Medellín, Colombia · Specialty Dental Tourism'}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? <>{`Turismo Dental en Medellín, Colombia`}<br /><span style={{ color: '#C9A461' }}>La sonrisa que quieres al precio que no esperabas</span></>
              : <>{'Dental Tourism in Medellín, Colombia'}<br /><span style={{ color: '#C9A461' }}>The smile you want at a price you didn&apos;t expect</span></>}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: '#5A5449', lineHeight: 1.7 }}>
            {isEs
              ? 'Rehabilitación oral completa, implantes dentales y diseño de sonrisa en Medellín, Colombia. Calidad de primer mundo. Hasta 70% de ahorro vs. EE.UU., Panamá o Europa.'
              : 'Full oral rehabilitation, dental implants and smile design in Medellín, Colombia. World-class quality. Up to 70% savings vs. USA, Panama or Europe.'}
          </p>

          {/* Flags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['🇺🇸 USA', '🇵🇦 Panamá', '🇵🇷 Puerto Rico', '🇨🇷 Costa Rica', '🇨🇴 Colombia'].map((f) => (
              <span key={f} className="text-xs px-3 py-1 rounded-full border"
                style={{ borderColor: 'rgba(201,164,97,0.3)', color: '#77726A', backgroundColor: 'rgba(201,164,97,0.05)' }}>
                {f}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="tourism_hero"
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
                <p className="text-xs" style={{ color: '#77726A' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT ANSWER (GEO / AI Overviews) */}
      <RespuestaDirecta
        pregunta={isEs
          ? '¿Cuánto cuesta hacerse tratamiento dental en Colombia y es seguro?'
          : 'How much does dental work in Colombia cost, and is it safe?'}
        respuesta={isEs
          ? 'Un implante con corona en Medellín cuesta desde $1.200 USD y un All-on-4 o 6 entre $10.000 y $20.000 USD por arcada (incluye la cirugía y la prótesis temporal y la definitiva), hasta 65% menos que en EE.UU., con las mismas marcas (Straumann, Neodent) y protocolos. La Dra. Carolina Macareno, rehabilitadora oral con más de 17 años en El Poblado, atiende pacientes internacionales con valoración virtual gratuita antes de viajar.'
          : 'A single implant with crown in Medellín starts at $1,200 USD and All-on-4 or All-on-6 ranges from $10,000 to $20,000 USD per arch (surgery and both temporary and final prosthesis included), up to 65% less than in the USA, using the same brands (Straumann, Neodent) and protocols. Dr. Carolina Macareno, an oral rehabilitation specialist with 17+ years in El Poblado, treats international patients and offers a free virtual consultation before you book flights.'}
      />

      {/* PRICE COMPARISON */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Cuánto ahorras en Medellín' : 'How much you save in Medellín'}
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: '#77726A' }}>
            {isEs ? 'Precios en USD · La misma calidad, materiales y tecnología' : 'Prices in USD · Same quality, materials and technology'}
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
                  <th className="text-center p-4 font-semibold" style={{ color: '#4ADE80' }}>
                    {isEs ? 'Tu ahorro' : 'Your savings'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {savings.map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #1F2937', backgroundColor: i % 2 === 0 ? '#0D1321' : '#111827' }}>
                    <td className="p-4 font-medium" style={{ color: '#211E18' }}>{row.procedure}</td>
                    <td className="p-4 text-center" style={{ color: '#EF4444' }}>{row.usa}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#C9A461' }}>{row.col}</td>
                    <td className="p-4 text-center font-bold" style={{ color: '#4ADE80' }}>{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-center mt-4" style={{ color: '#77726A' }}>
            {isEs
              ? '* Los precios son referenciales. El plan exacto y costo se define en la consulta diagnóstica.'
              : '* Prices are referential. Exact plan and cost is defined in the diagnostic consultation.'}
          </p>
        </div>
      </section>

      {/* DIÁSPORA, personal call + exact quote before traveling */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              <Icon name="globe" className="w-4 h-4 inline-block align-[-3px] mr-1.5" />
              {isEs ? 'Para colombianos e hispanos en el exterior' : 'For Colombians and Hispanics abroad'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs
                ? 'Vuelve a casa y aprovecha tu viaje para recuperar tu sonrisa'
                : 'Come home and use your trip to get your smile back'}
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#5A5449', lineHeight: 1.7 }}>
              {isEs
                ? 'La mayoría de nuestros pacientes de turismo dental son colombianos y personas con familia, amigos o negocios en Colombia que viven en Estados Unidos, España, Canadá, Puerto Rico o Panamá. Vienen a visitar a los suyos y regresan con los dientes que tanto deseaban y que llevaban años posponiendo, con las mismas marcas premium (Straumann, Neodent) a una fracción del precio de allá.'
                : 'Most of our dental-tourism patients are Colombians and people with family, friends or business in Colombia who live in the USA, Spain, Canada, Puerto Rico or Panama. They come to visit their loved ones and return with the teeth they had longed for and postponed for years, using the same premium brands (Straumann, Neodent) at a fraction of the price back home.'}
            </p>
          </div>

          {/* Differentiator card */}
          <div className="p-8 md:p-10 rounded-2xl border mb-8"
            style={{ backgroundColor: 'rgba(201,164,97,0.05)', borderColor: 'rgba(201,164,97,0.25)' }}>
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs
                ? 'Sabes tu presupuesto exacto ANTES de comprar el tiquete'
                : 'You know your exact budget BEFORE you buy your ticket'}
            </h3>
            <p className="text-sm md:text-base mb-6" style={{ color: '#5A5449', lineHeight: 1.7 }}>
              {isEs
                ? 'Esto no es una "valoración gratis" genérica. La Dra. Carolina te llama personalmente para entender tu caso. Si tienes radiografías o una tomografía, las revisa y te entrega un presupuesto exacto en dólares antes de que viajes. Así organizas tu viaje con números reales, sin sorpresas al llegar.'
                : 'This is not a generic "free consultation". Dr. Carolina calls you personally to understand your case. If you have X-rays or a CT scan, she reviews them and gives you an exact quote in dollars before you travel. That way you plan your trip with real numbers, no surprises on arrival.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {(isEs ? [
                { n: '1', t: 'Llamada personal', d: 'La Dra. te llama y escucha tu caso, no un formulario automático.' },
                { n: '2', t: 'Revisamos tus radiografías', d: 'Si las tienes, envíalas por WhatsApp; si no, te damos la orden para tomarlas el día 1 en el centro radiológico de la torre vecina.' },
                { n: '3', t: 'Presupuesto exacto en USD', d: 'Sabes cuánto y cuántos días necesitas antes de reservar vuelo.' },
              ] : [
                { n: '1', t: 'Personal call', d: 'The doctor calls and listens to your case, not an automated form.' },
                { n: '2', t: 'We review your X-rays', d: 'If you have them, send them by WhatsApp; if not, we take them on day 1.' },
                { n: '3', t: 'Exact quote in USD', d: 'You know the cost and how many days you need before booking a flight.' },
              ]).map((s) => (
                <div key={s.n} className="p-5 rounded-xl" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center mb-3 font-bold text-sm"
                    style={{ backgroundColor: 'rgba(201,164,97,0.15)', color: '#C9A461', border: '1px solid rgba(201,164,97,0.3)' }}>
                    {s.n}
                  </div>
                  <h4 className="font-semibold mb-1 text-sm" style={{ color: '#211E18' }}>{s.t}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#77726A' }}>{s.d}</p>
                </div>
              ))}
            </div>
            <WhatsAppLink message={WA_DIASPORA} locale={locale as 'es' | 'en'} trackingLabel="tourism_diaspora_whatsapp"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 bg-[#25D366] text-[#fff]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {isEs ? 'Cuéntame tu caso por WhatsApp' : 'Tell me your case on WhatsApp'}
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* TREATMENTS, internal links to money pages */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Tratamientos que hacemos para pacientes que viajan' : 'Treatments we do for traveling patients'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#77726A' }}>
            {isEs
              ? 'Cada tratamiento tiene su propia página con detalles, materiales y qué esperar. Toca el que te interesa.'
              : 'Each treatment has its own page with details, materials and what to expect. Tap the one you\'re interested in.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <Link key={t.href} href={t.href}
                className="group p-6 rounded-2xl border transition-all hover:scale-[1.02]"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <h3 className="font-bold mb-2 text-base flex items-center gap-2" style={{ color: '#211E18' }}>
                  {t.title}
                  <span style={{ color: '#C9A461' }}>→</span>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MEDELLÍN */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Por qué Medellín para tu tratamiento dental' : 'Why Medellín for your dental treatment'}
          </h2>
          <p className="text-center mb-10 text-sm max-w-2xl mx-auto" style={{ color: '#77726A' }}>
            {isEs
              ? 'Medellín no es solo turismo dental. Es la combinación perfecta de calidad clínica, comodidad urbana y experiencia de vida.'
              : 'Medellín is not just dental tourism. It\'s the perfect combination of clinical quality, urban comfort and life experience.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMedellin.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-base" style={{ color: '#211E18' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Image
              src="/images/dra-carolina-scanner.webp"
              alt="Dra. Carolina Macareno atendiendo a un paciente en su consultorio de Medellín con vista a la ciudad"
              width={900}
              height={1200}
              className="rounded-2xl w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      {/* SPECIALIST PROFILE */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border" style={{ backgroundColor: 'rgba(201,164,97,0.04)', borderColor: 'rgba(201,164,97,0.2)' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Tu especialista en Medellín' : 'Your specialist in Medellín'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Dra. Carolina Macareno
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-0">
              <div className="md:col-span-1">
                <Image
                  src="/images/dra-carolina-portrait.webp"
                  alt="Dra. Carolina Macareno, Especialista en Rehabilitación Oral, Medellín"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
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
                    'Tecnología de escaneo digital 3D e implantología guiada',
                    'Materiales importados: Straumann, Neodent, Dioimplant',
                  ] : [
                    'Dentist, Universidad El Bosque',
                    'Oral Rehabilitation Specialist, Universidad CES',
                    'Implantology, FACOP',
                    'Aesthetic Dentistry, New York University',
                    '17+ years of clinical practice in Medellín',
                    '3,500+ patients transformed, including international',
                    'Care in Spanish and English',
                    '3D digital scanning technology and guided implantology',
                    'Imported materials: Straumann, Neodent, Dioimplant',
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
                      ? '"Mi consulta no es solo arreglar dientes, es transformar la relación de mis pacientes con su sonrisa para siempre."'
                      : '"My practice is not just about fixing teeth, it\'s about transforming my patients\' relationship with their smile forever."'}
                  </p>
                  <p className="text-xs mt-3" style={{ color: '#C9A461' }}>Dra. Carolina Macareno</p>
                </div>
                <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="tourism_specialist_whatsapp"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {isEs ? 'Escribirle directamente' : 'Message her directly'}
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS FOR INTERNATIONAL PATIENTS */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Image
              src="/images/edificio-platinum.webp"
              alt="Edificio Platinum Superior, Consultorio Dra. Carolina Macareno, El Poblado, Medellín"
              width={800}
              height={400}
              className="rounded-2xl mx-auto w-full"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
            <p className="text-xs mt-2" style={{ color: '#77726A' }}>
              {isEs ? 'Edificio Platinum Superior, El Poblado, Medellín' : 'Platinum Superior Building, El Poblado, Medellín'}
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
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
                <h4 className="font-semibold mb-2 text-sm" style={{ color: '#211E18' }}>{step.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#77726A' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: '#C9A461' }}>
            Doctoralia · 5.0★ · {isEs ? 'Verificados' : 'Verified'}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Lo que dicen nuestros pacientes' : 'What our patients say'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Brian Armstrong, International */}
            <div className="p-6 rounded-2xl border flex flex-col gap-3"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#C9A461' }}>
              <div className="flex items-center gap-2">
                <span style={{ color: '#C9A461', fontSize: '1rem' }}>★★★★★</span>
                <span className="text-xs font-semibold ml-auto" style={{ color: '#77726A' }}>🇺🇸 International patient</span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#5A5449' }}>
                &ldquo;Carolina and her team were exceptionally accommodating and executed complex treatment flawlessly. Truly world class dentistry and service. Highly recommended!!!&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#211E18' }}>Brian Armstrong</p>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(201,164,97,0.12)', color: '#C9A461' }}>Complex treatment</span>
              </div>
            </div>

            {/* Yuli */}
            <div className="p-6 rounded-2xl border flex flex-col gap-3"
              style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(201,164,97,0.25)' }}>
              <div className="flex items-center gap-2">
                <span style={{ color: '#C9A461', fontSize: '1rem' }}>★★★★★</span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#5A5449' }}>
                &ldquo;El servicio es excelente, las instalaciones son modernas y acogedoras. La doctora demuestra gran amabilidad y profesionalismo, explica cada detalle del procedimiento con claridad y realiza su trabajo de manera impecable. Una verdadera profesional.&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#211E18' }}>Yuli</p>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(201,164,97,0.12)', color: '#C9A461' }}>Odontología general</span>
              </div>
            </div>

            {/* Alexander Marulanda */}
            <div className="p-6 rounded-2xl border flex flex-col gap-3"
              style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(201,164,97,0.25)' }}>
              <div className="flex items-center gap-2">
                <span style={{ color: '#C9A461', fontSize: '1rem' }}>★★★★★</span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#5A5449' }}>
                &ldquo;Me gustó la atención desde el ingreso al consultorio. Me ayudó demasiado a resolver las dudas que tenía, me dio la mejor opción para mi necesidad, sentí el acompañamiento en todo momento.&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#211E18' }}>Alexander Marulanda</p>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(201,164,97,0.12)', color: '#C9A461' }}>Coronas en zirconio</span>
              </div>
            </div>

            {/* Dominique Cantore */}
            <div className="p-6 rounded-2xl border flex flex-col gap-3"
              style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(201,164,97,0.25)' }}>
              <div className="flex items-center gap-2">
                <span style={{ color: '#C9A461', fontSize: '1rem' }}>★★★★★</span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#5A5449' }}>
                &ldquo;La Dra Macareno es excelente profesional, explica todo súper bien, atenta a cualquier duda que uno pueda tener, tiene muchísima paciencia también. Los tratamientos fueron completamente indoloros y tuvimos un resultado espectacular. Muy recomendada.&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#211E18' }}>Dominique Cantore</p>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(201,164,97,0.12)', color: '#C9A461' }}>Tratamiento completo</span>
              </div>
            </div>

            {/* Santiago Pérez */}
            <div className="p-6 rounded-2xl border flex flex-col gap-3"
              style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(201,164,97,0.25)' }}>
              <div className="flex items-center gap-2">
                <span style={{ color: '#C9A461', fontSize: '1rem' }}>★★★★★</span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#5A5449' }}>
                &ldquo;La idoneidad profesional es lo que más destacó de la atención recibida, esta no solo se nota sino que también se siente en la forma de abordar al paciente.&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#211E18' }}>Santiago Pérez</p>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(201,164,97,0.12)', color: '#C9A461' }}>Coronas en zirconio</span>
              </div>
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

      {/* CTA FINAL */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FCFBF9 55%, #F6F1E8 100%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
            {isEs ? 'Da el primer paso hoy' : 'Take the first step today'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? 'Tu transformación empieza con un mensaje'
              : 'Your transformation starts with one message'}
          </h2>
          <p className="mb-8" style={{ color: '#5A5449' }}>
            {isEs
              ? 'Evaluación virtual gratuita. Sin compromiso. Respuesta en menos de 24 horas. Envía fotos de tu sonrisa y tu historial dental y te damos un plan real.'
              : 'Free virtual evaluation. No commitment. Response in less than 24 hours. Send photos of your smile and dental history and we\'ll give you a real plan.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="tourism_cta_final_whatsapp"
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
{/* ARTICLE LINK */}
<section className="py-12 px-4" style={{ backgroundColor: '#FFFFFF' }}>
  <div className="max-w-3xl mx-auto text-center">
    <p className="text-sm mb-2" style={{ color: '#77726A' }}>
      {isEs ? 'Antes de decidir, lee esto:' : 'Before you decide, read this:'}
    </p>
    <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#211E18' }}>
      {isEs ? '¿Es seguro el turismo dental en Colombia?' : 'Is dental tourism in Colombia safe?'}
    </h2>
    <p className="text-sm mb-6" style={{ color: '#77726A' }}>
      {isEs ? 'Una guía honesta escrita por una especialista. Las 4 cosas que debes verificar antes de viajar.' : 'An honest guide written by a specialist. The 4 things you must verify before traveling.'}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href={isEs ? '/dental-implants-for-us-patients' : '/en/dental-implants-for-us-patients'}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
        style={{ backgroundColor: '#C9A461', color: '#0D1321' }}
      >
        {isEs ? 'Ver costos de tratamientos →' : 'See treatment costs →'}
      </Link>
      <Link
        href={isEs ? '/blog/turismo-dental-en-colombia-seguro' : '/en/blog/turismo-dental-en-colombia-seguro'}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
        style={{ border: '1px solid #C9A461', color: '#C9A461' }}
      >
        {isEs ? 'Leer la guía completa →' : 'Read the full guide →'}
      </Link>
    </div>
  </div>
</section>

{/* DIASPORA LANDINGS */}
<section className="py-12 px-4" style={{ backgroundColor: '#FFFFFF' }}>
  <div className="max-w-3xl mx-auto text-center">
    <p className="text-sm mb-4" style={{ color: '#77726A' }}>
      {isEs ? '¿Nos escribes desde fuera de Colombia? Tenemos páginas dedicadas para tu país:' : 'Writing from outside Colombia? We have pages dedicated to your country:'}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href={isEs ? '/turismo-dental-puerto-rico' : '/en/turismo-dental-puerto-rico'}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
        style={{ border: '1px solid #C9A461', color: '#C9A461' }}
      >
        {isEs ? 'Turismo dental para Puerto Rico →' : 'Dental tourism for Puerto Rico →'}
      </Link>
      <Link
        href={isEs ? '/turismo-dental-panama' : '/en/turismo-dental-panama'}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
        style={{ border: '1px solid #C9A461', color: '#C9A461' }}
      >
        {isEs ? 'Turismo dental para Panamá →' : 'Dental tourism for Panama →'}
      </Link>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center border-t" style={{ borderColor: '#E8E3DA' }}>
        <p className="text-sm" style={{ color: '#77726A' }}>
          © 2026 Dra. Carolina Macareno · El Poblado, Medellín, Colombia ·{' '}
          <Link href={locale === 'es' ? '/' : '/en'} style={{ color: '#C9A461' }}>
            {isEs ? 'Ver sitio completo' : 'View full site'}
          </Link>
        </p>
      </footer>
    </div>
  );
}
