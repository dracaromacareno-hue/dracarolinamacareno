import { getTranslations } from 'next-intl/server';
import Icon from '@/components/Icon';
import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { personSchema, breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';

  return {
    // 20-jul-2026. En búsquedas de marca el título debe abrir con el nombre,
    // no con "Sobre Mí". OJO: cambio por criterio, NO por evidencia. GSC 90d
    // devuelve "Sin datos" en consultas para esta URL (77 impresiones, todas
    // de cola larga anonimizada), así que no hay línea base por consulta.
    title: isEs
      ? 'Dra. Carolina Macareno | Rehabilitadora Oral en Medellín'
      : 'Dr. Carolina Macareno | Oral Rehabilitation in Medellín',
    description: isEs
      ? '17 años en rehabilitación oral, estética e implantología. Formación en CES, NYU y Neodent Brasil. Consultorio propio en El Poblado, Medellín, desde 2022.'
      : 'Meet Dr. Carolina Macareno, oral rehabilitation and dental implant specialist with over 17 years of experience in Medellín, Colombia.',
    alternates: {
      canonical: isEs ? `${BASE}/sobre-mi` : `${BASE}/en/sobre-mi`,
      languages: { es: `${BASE}/sobre-mi`, en: `${BASE}/en/sobre-mi` },
    },
    openGraph: {
      title: isEs
        ? 'Sobre Mí, Dra. Carolina Macareno | Rehabilitadora Oral Medellín'
        : 'About Me, Dr. Carolina Macareno | Oral Rehabilitation Medellín',
      description: isEs
        ? 'Conoce a la Dra. Carolina Macareno, especialista en rehabilitación oral con 17+ años de experiencia y 3,500+ pacientes en Medellín, Colombia.'
        : 'Meet Dr. Carolina Macareno, oral rehabilitation specialist with 17+ years of experience and 3,500+ patients in Medellín, Colombia.',
      url: isEs ? `${BASE}/sobre-mi` : `${BASE}/en/sobre-mi`,
      siteName: 'Dra. Carolina Macareno',
      type: 'profile',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/images/dra-carolina-perfil.webp`, width: 1200, height: 1600, alt: 'Dra. Carolina Macareno' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'Sobre Mí, Dra. Carolina Macareno' : 'About Me, Dr. Carolina Macareno',
      description: isEs
        ? 'Especialista en rehabilitación oral con 17+ años de experiencia en Medellín.'
        : 'Oral rehabilitation specialist with 17+ years of experience in Medellín.',
      images: [`${BASE}/images/dra-carolina-perfil.webp`],
    },
  };
}

const timeline = [
  { year: '2002', event: 'Grado como Odontóloga, Universidad El Bosque, Bogotá' },
  { year: '2006', event: 'Diplomado en Odontología Estética' },
  { year: '2009', event: 'Posgrado en Rehabilitación Oral, Universidad CES, Medellín' },
  { year: '2014', event: 'Advances in Cosmetic Dentistry and Oral Rehabilitation, New York University, EEUU' },
  { year: '2015', event: 'Curso: Manejo del paciente edéntulo con atrofia severa mediante prótesis híbridas sobre implantes Nobel Biocare' },
  { year: '2015', event: 'Curso: Diseño de Sonrisa Digital y Fotografía Clínica' },
  { year: '2016', event: 'Curso: Manejo de Scanner Digital Intraoral 3Shape, Impresión digital y Rehabilitación Oral Digital' },
  { year: '2017', event: 'Curso Avanzado en Implantología, NEODENT / FACOP, Brasil' },
  { year: '2022', event: 'Curso Hands-on: Rehabilitación Digital en paciente edéntulo con implantes DioImplant' },
  { year: '2022', event: 'Curso Hands-on: Carillas en Resina Compuesta, Dr. Felipe Becerra' },
  { year: '2025', event: 'Publicación del libro "El poder de tu sonrisa", Guía de transformación oral para pacientes y profesionales' },
];

const experiencia = [
  { year: '2002', period: '2002', event: 'Residente de Odontología, Hospital Naval de Cartagena' },
  { year: '2007', period: '2007 – 2009', event: 'Rehabilitadora Oral, Clínica Dentisalud' },
  { year: '2009', period: '2009 – 2015', event: 'Rehabilitadora Oral, Clínica Promta' },
  { year: '2011', period: '2011 – 2016', event: 'Fundadora y Rehabilitadora Oral, Top Dental Group' },
  { year: '2013', period: '2013 – 2017', event: 'Rehabilitadora Oral, Clínica Las Américas' },
  { year: '2016', period: '2016 – 2021', event: 'Fundadora y Rehabilitadora Oral, Clínica Sorytech' },
  { year: '2022', period: '2022 – Presente', event: 'Fundadora · Rehabilitadora Oral, Estética e Implantóloga, Clínica Privada Dra. Carolina Macareno' },
];

export default async function SobreMiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('about_page');
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Sobre Mí' : 'About Me', url: isEs ? `${BASE}/sobre-mi` : `${BASE}/en/sobre-mi` },
  ];

  const sobreMiFaqs = isEs ? [
    {
      question: '¿Cuál es la especialidad de la Dra. Carolina Macareno?',
      answer: 'La Dra. Carolina Macareno es Especialista en Rehabilitación Oral por la Universidad CES de Medellín, con formación complementaria en estética dental por New York University y en implantología por FACOP (Brasil). Trata casos integrales de implantes dentales, prótesis fija atornillada, All-on-4, All-on-6, implantes cigomáticos y diseño digital de sonrisa.',
    },
    {
      question: '¿Cuántos años de experiencia tiene la Dra. Macareno?',
      answer: 'Más de 17 años de práctica clínica continua desde 2002. Ha tratado más de 3,500 pacientes en Colombia y atiende regularmente pacientes internacionales de Estados Unidos, Panamá, Puerto Rico y Costa Rica. Es fundadora de su clínica privada en El Poblado, Medellín, desde 2022.',
    },
    {
      question: '¿Dónde se formó académicamente?',
      answer: 'Odontóloga graduada de la Universidad El Bosque (Bogotá, 2002), Especialista en Rehabilitación Oral de la Universidad CES (Medellín, 2009), formación avanzada en estética dental en New York University (2014), implantología en FACOP/NEODENT (Brasil, 2017) y rehabilitación digital con DioImplant (2022).',
    },
    {
      question: '¿Atiende pacientes internacionales?',
      answer: 'Sí. La Dra. Macareno atiende pacientes que viajan a Medellín desde Estados Unidos, Panamá, Puerto Rico, Costa Rica y otros países. Ofrece evaluaciones virtuales previas por WhatsApp o videollamada, planes de tratamiento adaptados al tiempo de estadía y coordinación con alojamiento en El Poblado.',
    },
    {
      /*
        2-oct-2026. Las tres preguntas de dinero y logística se añadieron después
        de comparar con TourSalud: sus 5 preguntas son todas transaccionales
        (cuánto cuesta, cómo reservo, qué incluye, cómo pago, pacientes del
        exterior) y las de aquí eran todas de credenciales. Las de credenciales se
        dejaron, porque sirven para la entidad; estas contestan a quien compara.
        ⛔ Ninguna menciona financiación: Welli cobra un porcentaje al desembolsar
        y se plantea en la cita, nunca en público.
      */
      question: '¿Cuánto cuesta un implante dental con la Dra. Carolina Macareno?',
      answer: 'Un implante unitario parte desde $3.000.000 COP, y el hidrofílico desde $3.500.000. La corona definitiva va aparte: desde $3.000.000 la de zirconio sobre implante, que ya incluye los aditamentos. El valor exacto depende del estado del hueso, del sistema de implante y del material de la corona. Si el caso necesita regeneración ósea o elevación de seno maxilar, eso se cotiza aparte. El presupuesto se arma después de la valoración y se entrega por escrito, con las opciones viables para tu caso.',
    },
    {
      question: '¿Qué incluye la valoración y cuánto cuesta?',
      answer: 'La valoración con la Dra. Carolina, presencial o virtual, tiene un valor desde $150.000 COP e incluye historia clínica, escaneo intraoral 3D, análisis de la mordida, diagnóstico y presupuesto por escrito. Las radiografías no están incluidas pero siempre son necesarias: si ya las tienes se usan, y si no, se entrega una orden para tomarlas en el centro radiológico de la torre vecina. Si solo quieres saber si eres candidata, puedes enviar fotos de tu sonrisa por WhatsApp y el equipo te orienta sobre el siguiente paso.',
    },
    {
      question: '¿Qué medios de pago aceptan?',
      answer: 'Tarjeta de crédito, con opción de diferir a cuotas, PSE, transferencia bancaria y transferencia internacional en dólares para pacientes que vienen del exterior. Las opciones concretas de tu caso se revisan en la conversación, antes de empezar el tratamiento.',
    },
    {
      question: '¿Cómo puedo agendar una consulta con la Dra. Carolina Macareno?',
      answer: 'Puedes agendar a través de WhatsApp al +57 316 397 5232, completar el formulario de contacto en dracarolinamacareno.com/contacto o llamar directamente al consultorio. La consulta de diagnóstico Sonrisa 360° incluye escaneo intraoral 3D, planeación digital, limpieza profesional y plan de tratamiento personalizado.',
    },
  ] : [
    {
      question: 'What is Dr. Carolina Macareno\'s specialty?',
      answer: 'Dr. Carolina Macareno is a Specialist in Oral Rehabilitation from Universidad CES in Medellín, with complementary training in aesthetic dentistry at New York University and implantology at FACOP (Brazil). She treats comprehensive cases of dental implants, screw-retained fixed prosthetics, All-on-4, All-on-6, zygomatic implants and digital smile design.',
    },
    {
      question: 'How many years of experience does Dr. Macareno have?',
      answer: 'More than 17 years of continuous clinical practice since 2002. She has treated more than 3,500 patients in Colombia and regularly treats international patients from the United States, Panama, Puerto Rico and Costa Rica. She is the founder of her private clinic in El Poblado, Medellín, since 2022.',
    },
    {
      question: 'Where did she train academically?',
      answer: 'Dentist graduated from Universidad El Bosque (Bogotá, 2002), Specialist in Oral Rehabilitation from Universidad CES (Medellín, 2009), advanced training in aesthetic dentistry at New York University (2014), implantology at FACOP/NEODENT (Brazil, 2017) and digital rehabilitation with DioImplant (2022).',
    },
    {
      question: 'Does she treat international patients?',
      answer: 'Yes. Dr. Macareno treats patients traveling to Medellín from the United States, Panama, Puerto Rico, Costa Rica and other countries. She offers prior virtual evaluations via WhatsApp or video call, treatment plans adapted to the length of stay and coordination with accommodation in El Poblado.',
    },
    {
      question: 'How much does a dental implant cost with Dr. Carolina Macareno?',
      answer: 'A single implant starts at $3,000,000 COP, and the hydrophilic one at $3,500,000. The definitive crown is separate: from $3,000,000 for a zirconia crown on an implant, abutments already included. The exact figure depends on the condition of the bone, the implant system and the crown material. If the case needs bone grafting or a sinus lift, that is quoted separately. The full quote is prepared after the consultation and given in writing, with the options that are viable for your case.',
    },
    {
      question: 'What does the consultation include and what does it cost?',
      answer: 'The consultation with Dr. Carolina, in person or online, starts at $150,000 COP and includes clinical history, a 3D intraoral scan, bite analysis, diagnosis and a written treatment quote. X-rays are not included but are always necessary: if you already have them we use them, and if not, you are given an order to have them taken at the radiology centre in the neighbouring tower. If you only want to know whether you are a candidate, you can send photos of your smile by WhatsApp and the team will tell you what the next step is.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Credit card, with the option to split into instalments, PSE, bank transfer, and international wire transfer in US dollars for patients travelling from abroad. The options for your particular case are reviewed in conversation, before treatment begins.',
    },
    {
      question: 'How can I book an appointment with Dr. Carolina Macareno?',
      answer: 'You can book via WhatsApp at +57 316 397 5232, fill out the contact form at dracarolinamacareno.com/contacto or call the office directly. The Smile 360° diagnostic consultation includes a 3D intraoral scan, digital planning, professional cleaning and a personalized treatment plan.',
    },
  ];

  return (
    <>
      <SchemaOrg schema={[personSchema(), breadcrumbSchema(breadcrumbs), faqSchema(sobreMiFaqs)]} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#FCFBF9] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="text-[#8A6B2E] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
              {isEs ? 'Mi historia' : 'My story'}
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#211E18] mb-6"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t('titulo')}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mb-6" />
            <p className="text-[#77726A] text-lg max-w-2xl mx-auto">{t('metaDesc')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/*
        FICHA PROFESIONAL · añadida el 2-oct-2026

        Por qué existe. ChatGPT, al responder cuánto cuesta un All-on-4, citaba a
        TourSalud y no a esta web. Al comparar las dos páginas salió que TourSalud
        no tiene NI UN dato estructurado (esta web tiene Dentist, MedicalClinic,
        Person, FAQPage y MedicalProcedure) y aun así se llevaba la cita. La
        diferencia no era técnica: su perfil mete en 1.160 palabras quién es, qué
        hace, CUÁNTO CUESTA CADA COSA, dónde queda, cuándo atiende y en qué
        idiomas. Esta web tenía todo eso repartido en seis páginas, y la de
        «Sobre mí» abría con «Nací en Colombia», sin un solo dato citable.
        Ver «Qué hace TourSalud que no hace nuestra web» en la bóveda.

        Va ANTES de la historia a propósito: primero los datos, después el relato.
        La historia no se quitó, se bajó.

        ⛔ Las cifras salen de donde ya estaban aprobadas, ninguna se escribió de
        memoria: los precios son los mismos de /servicios, y la identidad (cédula,
        REPS, dirección, horario, formación) sale de la ficha canónica del cerebro.
        El «40 % de pacientes internacionales» que publica TourSalud NO se incluyó
        porque no está confirmado por la dueña.
      */}
      <section className="py-14 bg-white border-y border-[#E8E3DA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#211E18] mb-2" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Ficha profesional' : 'Professional profile'}
            </h2>
            <p className="text-[#77726A] mb-8">
              {isEs
                ? 'Los datos, de un vistazo. Títulos, registro profesional, dónde atiende y qué trata.'
                : 'The facts, at a glance. Qualifications, professional registration, where she practises and what she treats.'}
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-10">
              {(isEs ? [
                ['Especialidad', 'Odontóloga Especialista en Rehabilitación Oral, Estética e Implantología'],
                ['Experiencia', '17 años de ejercicio clínico y más de 3.500 pacientes atendidos'],
                ['Atención', 'En español y en inglés, a pacientes de Colombia, Estados Unidos, Panamá, Puerto Rico y Costa Rica'],
                ['Registro profesional', 'Cédula profesional 52696525 · Código REPS 0500111814'],
                ['Consultorio', 'Cra. 25 #1A Sur-155, consultorio 1353, Edificio Platinum Superior, El Poblado, Medellín'],
                ['Horario', 'Lunes a viernes de 8:00 a 18:00 · Sábados de 9:00 a 14:00 (hora de Colombia)'],
                ['WhatsApp y teléfono', '+57 316 397 5232 · fijo 604 408 3280'],
                ['Tecnología', 'Escaneo intraoral 3D, planeación quirúrgica con tomografía y diseño digital de la sonrisa'],
              ] : [
                ['Specialty', 'Dentist, Specialist in Oral Rehabilitation, Aesthetics and Implant Dentistry'],
                ['Experience', '17 years of clinical practice and more than 3,500 patients treated'],
                ['Languages', 'Spanish and English, for patients from Colombia, the United States, Panama, Puerto Rico and Costa Rica'],
                ['Professional registration', 'Professional licence 52696525 · REPS code 0500111814'],
                ['Practice', 'Cra. 25 #1A Sur-155, office 1353, Edificio Platinum Superior, El Poblado, Medellín'],
                ['Hours', 'Monday to Friday 8:00 to 18:00 · Saturdays 9:00 to 14:00 (Colombia time)'],
                ['WhatsApp and phone', '+57 316 397 5232 · landline 604 408 3280'],
                ['Technology', '3D intraoral scanning, CBCT-guided surgical planning and digital smile design'],
              ]).map(([k, v]) => (
                <div key={k} className="border-b border-[#F0ECE4] pb-3">
                  <dt className="text-xs font-semibold tracking-wide uppercase text-[#8A6B2E] mb-1">{k}</dt>
                  <dd className="text-[#5A5449] leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>

          {/*
            2-oct-2026. Aquí había una lista de tratamientos con su «desde». Se
            quitó por decisión de la dueña: «no coloquemos ese chorrero de precios
            porque eso quita valor a nuestro nombre». Tenía razón, y mirando cómo
            lo hace TourSalud se entendió por qué: ellos NO tienen tabla de precios.
            El valor va dentro del párrafo que explica cada servicio, en su tarjeta,
            y ahí se lee como información y no como un menú.

            Así que los precios se quedan en el cuadrito de cada servicio, en
            /servicios, siempre con «desde». Aquí solo van los enlaces.
          */}
          <AnimatedSection>
            <h3 className="text-xl font-bold text-[#211E18] mb-4" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Qué trata' : 'What she treats'}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {(isEs ? [
                ['Implantes dentales', '/servicios/implantes-dentales'],
                ['Rehabilitación oral completa', '/servicios/rehabilitacion-oral-completa'],
                ['All-on-4 y All-on-6', '/servicios/implantes-dentales'],
                ['Implantes cigomáticos', '/servicios/implantes-cigomaticos'],
                ['Prótesis fija atornillada', '/servicios/protesis-fija'],
                ['Diseño de sonrisa', '/servicios/diseno-de-sonrisa'],
                ['Estética dental', '/servicios/estetica-dental'],
                ['Valoración y diagnóstico', '/servicios/consulta-diagnostico'],
              ] : [
                ['Dental implants', '/servicios/implantes-dentales'],
                ['Full-mouth oral rehabilitation', '/servicios/rehabilitacion-oral-completa'],
                ['All-on-4 and All-on-6', '/servicios/implantes-dentales'],
                ['Zygomatic implants', '/servicios/implantes-cigomaticos'],
                ['Screw-retained fixed prosthesis', '/servicios/protesis-fija'],
                ['Smile design', '/servicios/diseno-de-sonrisa'],
                ['Aesthetic dentistry', '/servicios/estetica-dental'],
                ['Consultation and diagnosis', '/servicios/consulta-diagnostico'],
              ]).map(([nombre, ruta]) => (
                <Link
                  key={nombre}
                  href={localePath(ruta)}
                  className="text-sm px-4 py-2 rounded-full border border-[#E8E3DA] bg-[#FCFBF9] text-[#5A5449] hover:border-[#C9A461] hover:text-[#8A6B2E] transition-colors"
                >
                  {nombre}
                </Link>
              ))}
            </div>
            <p className="text-sm text-[#77726A]">
              {isEs
                ? 'El valor de cada tratamiento está en su página, siempre con «desde». El presupuesto exacto depende del diagnóstico y se entrega por escrito después de la valoración.'
                : 'What each treatment costs is on its own page, always as a starting figure. The exact quote depends on the diagnosis and is given in writing after the consultation.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <AnimatedSection direction="right">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden">
                <Image
                  src="/images/dra-carolina-perfil.webp"
                  alt="Dra. Carolina Macareno - Especialista en Rehabilitación Oral, Medellín"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#070B14]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#8A6B2E] font-bold text-xl" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
                    Dra. Carolina Macareno
                  </p>
                  <p className="text-[#211E18] text-sm">Rehabilitadora Oral · 17+ años</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="left">
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#211E18] mb-6"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {t('mision')}
              </h2>
              <div className="bg-white border-l-4 border-[#C9A461] p-6 rounded-r mb-8">
                <p className="text-[#5A5449] italic text-lg leading-relaxed">
                  &ldquo;{t('misionTexto')}&rdquo;
                </p>
              </div>

              <p className="text-[#5A5449] leading-relaxed mb-4">
                {isEs
                  ? 'Nací en Colombia y desde muy joven supe que quería dedicarme a la salud y al cuidado de las personas. La odontología me permitió combinar mi amor por la ciencia, la precisión y el arte. Cada boca es un universo diferente, cada paciente tiene una historia única, y eso es lo que hace mi trabajo apasionante.'
                  : 'I was born in Colombia and from a very young age I knew I wanted to dedicate myself to health and caring for people. Dentistry allowed me to combine my love of science, precision and art. Every mouth is a different universe, every patient has a unique story, and that is what makes my work passionate.'}
              </p>
              <p className="text-[#5A5449] leading-relaxed mb-4">
                {isEs
                  ? 'Después de graduarme de la Universidad El Bosque en 2002, me instalé en Medellín, una ciudad que me enamoró desde el primer momento. Aquí construí mi práctica, desarrollé mi trayectoria en instituciones de prestigio y formé un equipo de especialistas comprometidos con la excelencia.'
                  : 'After graduating from Universidad El Bosque in 2002, I settled in Medellín, a city I fell in love with from the very first moment. Here I built my practice, developed my career at prestigious institutions, and formed a team of specialists committed to excellence.'}
              </p>
              <p className="text-[#5A5449] leading-relaxed">
                {isEs
                  ? 'La especialización en Rehabilitación Oral en la Universidad CES fue el momento que definió el norte de mi carrera. Entendí que mi rol no era solo "arreglar dientes" sino restaurar vidas, devolver sonrisas y con ellas, la autoestima y calidad de vida de mis pacientes.'
                  : 'Specializing in Oral Rehabilitation at Universidad CES was the moment that defined the direction of my career. I understood that my role was not just to "fix teeth" but to restore lives, return smiles and with them, the self-esteem and quality of life of my patients.'}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#FCFBF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#211E18] mb-6"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t('filosofia')}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mb-10" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Icon name="scan" />,
                title: isEs ? 'Evidencia Científica' : 'Scientific Evidence',
                text: isEs
                  ? 'Cada técnica y material que uso está respaldado por la mejor evidencia clínica disponible.'
                  : 'Every technique and material I use is backed by the best available clinical evidence.',
              },
              {
                icon: <Icon name="handshake" />,
                title: isEs ? 'Trato Humanizado' : 'Humanized Care',
                text: isEs
                  ? 'Escucho activamente a mis pacientes, entiendo sus miedos y adapto el tratamiento a sus necesidades reales.'
                  : 'I actively listen to my patients, understand their fears and adapt treatment to their real needs.',
              },
              {
                icon: <Icon name="award" />,
                title: isEs ? 'Excelencia Técnica' : 'Technical Excellence',
                text: isEs
                  ? 'La perfección técnica no es un objetivo, es el estándar mínimo que me exijo en cada procedimiento.'
                  : 'Technical perfection is not a goal, it is the minimum standard I demand of myself in every procedure.',
              },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="bg-white border border-[#E8E3DA] rounded-lg p-7 text-center">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3
                    className="text-[#211E18] font-bold text-lg mb-3"
                    style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#77726A] text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#211E18]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t('trayectoria')}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mt-6" />
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1F2937]" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-white border border-[#C9A461]/30 flex items-center justify-center z-10 relative">
                        <span className="text-[#8A6B2E] font-bold text-xs">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-white border border-[#E8E3DA] rounded p-4 mt-3">
                      <p className="text-[#5A5449] text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia Clínica */}
      <section className="py-20 bg-[#FCFBF9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#8A6B2E] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
              {isEs ? 'Trayectoria Laboral' : 'Clinical Career'}
            </span>
            <h2
              className="text-3xl font-bold text-[#211E18]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Experiencia Clínica' : 'Clinical Experience'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mt-6" />
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1F2937]" />
            <div className="space-y-6">
              {experiencia.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-white border border-[#C9A461]/30 flex items-center justify-center z-10 relative">
                        <span className="text-[#8A6B2E] font-bold text-xs">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-white border border-[#E8E3DA] rounded p-4 mt-3">
                      <span className="inline-block text-[#8A6B2E] text-xs font-medium tracking-wider uppercase mb-2 bg-[#C9A461]/10 px-2 py-0.5 rounded">
                        {item.period}
                      </span>
                      <p className="text-[#5A5449] text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-[#E8E3DA]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#211E18] mb-4"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {isEs ? '¿Listo para conocernos?' : 'Ready to meet?'}
          </h2>
          <p className="text-[#77726A] mb-8">
            {isEs
              ? 'Agenda una consulta de diagnóstico y demos el primer paso juntos hacia tu nueva sonrisa.'
              : 'Book a diagnostic consultation and let\'s take the first step together toward your new smile.'}
          </p>
          <Link
            href={localePath('/contacto')}
            className="inline-block bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-10 py-4 rounded tracking-wider uppercase text-sm transition-all duration-200 hover:scale-105"
          >
            {isEs ? 'Agenda tu Cita' : 'Book Appointment'}
          </Link>
        </div>
      </section>
    </>
  );
}
