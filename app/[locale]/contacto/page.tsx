import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import SchemaOrg, { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';
import AnimatedSection from '@/components/AnimatedSection';

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
      ? 'Contacto | Dra. Carolina Macareno'
      : 'Contact | Dr. Carolina Macareno',
    description: isEs
      ? 'Agenda tu cita con la Dra. Carolina Macareno en El Poblado, Medellín. WhatsApp disponible o completa el formulario. Respondemos en menos de 24 horas.'
      : 'Book your appointment with Dr. Carolina Macareno in El Poblado, Medellín. WhatsApp available or fill out the form. We respond within 24 hours.',
    alternates: {
      canonical: isEs ? `${BASE}/contacto` : `${BASE}/en/contacto`,
      languages: { es: `${BASE}/contacto`, en: `${BASE}/en/contacto` },
    },
  };
}

const contactFaqs = [
  {
    question: '¿Cómo puedo agendar una cita con la Dra. Carolina Macareno?',
    answer: 'Puedes agendar tu cita por WhatsApp al +57 300 000 0000, completando el formulario en esta página, o enviando un correo a hola@dracarolinamacareno.com. Respondemos en menos de 24 horas.',
  },
  {
    question: '¿Dónde está ubicada la consulta?',
    answer: 'La consulta está ubicada en El Poblado, Medellín, cerca al CC El Tesoro. Compartimos la dirección exacta al confirmar la cita.',
  },
  {
    question: '¿Cuánto cuesta la consulta de diagnóstico?',
    answer: 'El costo de la consulta de diagnóstico varía según la complejidad del caso. Contáctenos para obtener información actualizada de precios.',
  },
  {
    question: '¿Atienden pacientes internacionales?',
    answer: 'Sí, atendemos pacientes de toda Colombia y del exterior. Ofrecemos consultas previas virtuales para pacientes que viajarán desde otras ciudades o países.',
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
  const BASE = 'https://dracarolinamacareno.com';

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Contacto' : 'Contact', url: isEs ? `${BASE}/contacto` : `${BASE}/en/contacto` },
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
      <SchemaOrg schema={[localBusinessSchema(), breadcrumbSchema(breadcrumbs), faqSchema(contactFaqs)]} />

      {/* Page header */}
      <section className="pt-32 pb-8 bg-[#070B14]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Contacto' : 'Contact'}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      <ContactSection messages={contactMessages} />

      {/* FAQ */}
      <section className="py-20 bg-[#070B14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A461] mx-auto mt-4" />
          </AnimatedSection>
          <div className="space-y-4">
            {contactFaqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[#0D1321] border border-[#1F2937] rounded p-5">
                  <h3 className="text-[#F5F5F0] font-semibold mb-2">{faq.question}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
