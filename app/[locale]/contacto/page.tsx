import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import SchemaOrg, { breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';
import AnimatedSection from '@/components/AnimatedSection';

/*
  22-sep-2026: la versión /en mostraba casi todo el cuerpo en español (título de
  sección, FAQ y breadcrumb quedaban fijos en español). Todo el texto visible vive
  ahora en `T`, un bloque por idioma, siguiendo el patrón de
  app/[locale]/servicios/rehabilitacion-oral-completa/page.tsx.

  El formulario, las etiquetas de campos y el texto de Habeas Data viven en
  components/sections/ContactSection.tsx, un componente compartido con texto
  español fijo (no forma parte de este encargo, ver nota al final del archivo).

  FAQ #3 usa la política de valoración vigente (22-sep-2026): nunca gratis, desde
  $150.000 COP presencial o virtual, no se abona al tratamiento.
*/

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';

  return {
    title: isEs
      ? 'Contacto y Citas en Medellín | Dra. Carolina Macareno'
      : 'Contact & Book an Appointment in Medellín | Dr. Macareno',
    description: isEs
      ? 'Agenda tu cita con la Dra. Carolina Macareno en El Poblado, Medellín: WhatsApp, formulario o valoración virtual. Atención bilingüe, pacientes internacionales.'
      : 'Book your appointment with Dr. Carolina Macareno in El Poblado, Medellín: WhatsApp, contact form or virtual evaluation. Bilingual, international patients.',
    keywords: isEs
      ? ['contacto odontólogo Medellín', 'agendar cita implantes Medellín', 'valoración dental Medellín', 'consultorio El Poblado Medellín', 'Dra. Carolina Macareno contacto']
      : ['dentist medellin contact', 'book dental appointment medellin colombia', 'dental evaluation medellin for foreigners', 'international patients dental clinic medellin', 'dental clinic el poblado medellin'],
    alternates: {
      canonical: isEs ? `${BASE}/contacto` : `${BASE}/en/contacto`,
      languages: { es: `${BASE}/contacto`, en: `${BASE}/en/contacto` },
    },
    openGraph: {
      title: isEs
        ? 'Contacto, Dra. Carolina Macareno | Agenda tu cita en El Poblado'
        : 'Contact, Dr. Carolina Macareno | Book your appointment in El Poblado',
      description: isEs
        ? 'Agenda por WhatsApp +57 316 397 5232 o el formulario. Consultorio en El Poblado, Medellín. Atención bilingüe a pacientes internacionales.'
        : 'Book via WhatsApp +57 316 397 5232 or the form. Office in El Poblado, Medellín. Bilingual care for international patients.',
      url: isEs ? `${BASE}/contacto` : `${BASE}/en/contacto`,
      siteName: 'Dra. Carolina Macareno',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.webp`, width: 1200, height: 630, alt: 'Dra. Carolina Macareno' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'Contacto, Dra. Carolina Macareno' : 'Contact, Dr. Carolina Macareno',
      description: isEs
        ? 'Agenda tu cita en El Poblado, Medellín. WhatsApp y formulario disponibles.'
        : 'Book your appointment in El Poblado, Medellín. WhatsApp and form available.',
      images: [`${BASE}/og-image.webp`],
    },
  };
}

const T = {
  es: {
    h1: 'Contacto',
    faqH2: 'Preguntas frecuentes',
    breadcrumbHome: 'Home',
    breadcrumbHere: 'Contacto',
  },
  en: {
    h1: 'Contact',
    faqH2: 'Frequently asked questions',
    breadcrumbHome: 'Home',
    breadcrumbHere: 'Contact',
  },
};

const faqsEs = [
  {
    q: '¿Cómo puedo agendar una cita con la Dra. Carolina Macareno?',
    a: 'Puedes escribir por WhatsApp al +57 316 397 5232, completar el formulario de esta página o escribir a dracarolinamacarenob@gmail.com. Respondemos en menos de 24 horas.',
  },
  {
    q: '¿Dónde está ubicado el consultorio?',
    a: 'El consultorio está en el Edificio Platinum Superior, Cra. 25 #1A Sur-155, Consultorio 1353, El Poblado, Medellín. El edificio cuenta con parqueadero.',
  },
  {
    q: '¿La valoración tiene costo?',
    a: 'Sí. La valoración, presencial o virtual con la Dra. Carolina, tiene un valor desde $150.000 COP y no se abona al tratamiento. Si primero quieres saber si tu caso es candidato, puedes enviar tus fotos y radiografías por WhatsApp y el equipo te orienta sobre el siguiente paso.',
  },
  {
    q: '¿Atienden pacientes internacionales?',
    a: 'Sí, atendemos pacientes de toda Colombia y del exterior. Ofrecemos valoraciones previas por videollamada para quienes viajarán desde otras ciudades o países.',
  },
  {
    q: '¿Puedo enviar mis radiografías o fotos antes de viajar?',
    a: 'Sí, puedes enviarlas por correo o por WhatsApp del consultorio, en el formato que te resulte más fácil, incluido un archivo DICOM si tienes una tomografía. Si la calidad no alcanza o falta algún estudio, se completa en la primera cita en Medellín.',
  },
  {
    q: '¿En qué idioma me atienden?',
    a: 'La correspondencia y las valoraciones también se hacen en inglés, así que puedes escribirnos en el idioma que te resulte más cómodo.',
  },
  {
    q: '¿Cuánto tardan en responder?',
    a: 'Respondemos en menos de 24 horas, ya sea por WhatsApp, formulario o correo electrónico.',
  },
  {
    q: '¿Puedo hacer una valoración por videollamada antes de comprar el tiquete?',
    a: 'Sí, se ofrece una valoración virtual para revisar tus fotos y radiografías con la Dra. antes de viajar, así llegas a Medellín con un plan orientativo del caso.',
  },
];

const faqsEn = [
  {
    q: 'How can I book an appointment with Dr. Carolina Macareno?',
    a: 'You can message us on WhatsApp at +57 316 397 5232, fill out the form on this page, or email dracarolinamacarenob@gmail.com. We reply within 24 hours.',
  },
  {
    q: 'Where is the office located?',
    a: 'The office is in the Edificio Platinum Superior, Cra. 25 #1A Sur-155, Suite 1353, El Poblado, Medellín. The building has parking available.',
  },
  {
    q: 'Does the evaluation cost anything?',
    a: 'Yes. The evaluation, in person or by video call with Dr. Carolina, costs from $150,000 COP, and it is not applied toward the cost of treatment. If you just want to know whether you are a candidate first, you can send your photos and X-rays over WhatsApp and the team will guide you on the next step.',
  },
  {
    q: 'Do you treat international patients?',
    a: 'Yes, we treat patients from across Colombia and abroad. We offer video-call evaluations beforehand for patients traveling from other cities or countries.',
  },
  {
    q: 'Can I send my X-rays or photos before I travel?',
    a: 'Yes, you can send them by email or WhatsApp to the office, in whatever format is easiest for you, including a DICOM file if you have a CT scan. If the quality is not enough or another study is needed, it is completed at your first appointment in Medellín.',
  },
  {
    q: 'What language will I be attended in?',
    a: 'Correspondence and evaluations are also handled in English, so you can write to us in whichever language is most comfortable for you.',
  },
  {
    q: 'How long does it take to get a reply?',
    a: 'We reply within 24 hours, whether you write on WhatsApp, through the form, or by email.',
  },
  {
    q: 'Can I have a video-call evaluation before I buy my ticket?',
    a: 'Yes, we offer a virtual evaluation to review your photos and X-rays with the Doctor before you travel, so you arrive in Medellín with an initial outline of your case.',
  },
];

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('contact');
  const isEs = locale === 'es';
  const T_ = isEs ? T.es : T.en;
  const faqs = isEs ? faqsEs : faqsEn;
  const BASE = 'https://dracarolinamacareno.com';

  const breadcrumbs = [
    { name: T_.breadcrumbHome, url: isEs ? BASE : `${BASE}/en` },
    { name: T_.breadcrumbHere, url: isEs ? `${BASE}/contacto` : `${BASE}/en/contacto` },
  ];

  const contactMessages = {
    titulo: t('titulo'),
    subtitulo: t('subtitulo'),
    descripcion: t('descripcion'),
    whatsapp: t('whatsapp'),
    nombre: t('nombre'),
    email: t('email'),
    telefono: t('telefono'),
    mensaje: t('mensaje'),
    tratamiento: t('tratamiento'),
    enviar: t('enviar'),
    enviando: t('enviando'),
    exito: t('exito'),
    seleccionar: t('seleccionar'),
    ubicacion: t('ubicacion'),
    horario: t('horario'),
    horarioDetalle: t('horarioDetalle'),
    ubicacionDetalle: t('ubicacionDetalle'),
  };

  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema(breadcrumbs), faqSchema(faqs.map(f => ({ question: f.q, answer: f.a })))]} />

      {/* Page header */}
      <section className="pt-32 pb-8 bg-[#FCFBF9]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#211E18] mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {T_.h1}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      <ContactSection messages={contactMessages} />

      {/* FAQ */}
      <section className="py-20 bg-[#FCFBF9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#211E18]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {T_.faqH2}
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A461] mx-auto mt-4" />
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#E8E3DA] rounded p-5">
                  <h3 className="text-[#211E18] font-semibold mb-2">{faq.q}</h3>
                  <p className="text-[#77726A] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/*
  Componente compartido fuera de este encargo, NO tocado:

  components/sections/ContactSection.tsx tiene texto español fijo que no depende
  del locale de la página: el array `treatments` (11 tratamientos, ej. "Implantes
  Dentales", "Otra consulta"), las etiquetas y placeholders del formulario
  ("WhatsApp *", "Tu nombre completo", "tu@email.com"), el texto de consentimiento
  Habeas Data, el mensaje de éxito ("Mensaje enviado exitosamente...") y el aviso
  de confidencialidad al pie del formulario. Además, los dos WhatsAppLink del
  panel izquierdo llevan `locale="es"` fijo (no reciben el locale real de la
  página) y su mensaje `waMessageDraText` siempre se redacta en español, así que
  hoy un paciente en /en/contacto termina escribiendo por WhatsApp en español.
*/
