import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BooksSection from '@/components/sections/BooksSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ContactSection from '@/components/sections/ContactSection';
import SchemaOrg, { personSchema, faqSchema } from '@/components/SchemaOrg';
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
    title: isEs
      ? 'Dra. Carolina Macareno | Rehabilitadora Oral e Implantes Medellín'
      : 'Dr. Carolina Macareno | Oral Rehabilitation & Implants Medellín',
    description: isEs
      ? 'Especialista en rehabilitación oral, implantes dentales y diseño de sonrisa en El Poblado, Medellín. 17+ años de experiencia, 3,500+ pacientes transformados. Agenda tu cita.'
      : 'Oral rehabilitation specialist, dental implants and smile design in El Poblado, Medellín. 17+ years experience, 3,500+ patients transformed. Book your appointment.',
    keywords: isEs
      ? ['implantes dentales medellin', 'rehabilitacion oral medellin', 'diseño de sonrisa medellin', 'dentista el poblado', 'dra carolina macareno', 'implantes dentales colombia', 'turismo dental medellin', 'implantes dentales panama', 'implantes dentales puerto rico', 'dentista para extranjeros colombia', 'all on 4 medellin', 'protesis fija sobre implantes']
      : ['dental implants medellin colombia', 'oral rehabilitation medellin', 'smile design medellin', 'dentist el poblado colombia', 'dental tourism colombia', 'affordable dental implants colombia', 'dental implants for panama patients', 'dental implants puerto rico patients', 'all on 4 medellin colombia', 'dental implants usa patients colombia'],
    alternates: {
      canonical: isEs ? BASE : `${BASE}/en`,
      languages: { es: BASE, en: `${BASE}/en` },
    },
    openGraph: {
      title: isEs ? 'Dra. Carolina Macareno | Rehabilitadora Oral Medellín' : 'Dr. Carolina Macareno | Oral Rehabilitation Medellín',
      description: isEs
        ? 'Especialista en implantes, prótesis fija y diseño de sonrisa en Medellín, Colombia.'
        : 'Implant, fixed prosthetics and smile design specialist in Medellín, Colombia.',
      url: isEs ? BASE : `${BASE}/en`,
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Dra. Carolina Macareno | Rehabilitadora Oral Medellín',
      description: isEs ? 'Implantes, diseño de sonrisa y rehabilitación oral en Medellín.' : 'Implants, smile design and oral rehabilitation in Medellín.',
    },
  };
}

const homeFaqs = [
  {
    question: '¿Cuánto cuestan los implantes dentales en Medellín?',
    answer: 'El costo de un implante dental en Medellín varía según el tipo y la cantidad de implantes necesarios. En la consulta de diagnóstico realizamos una evaluación completa y entregamos un plan de tratamiento con costos detallados y transparentes.',
  },
  {
    question: '¿Cuánto dura el proceso de implantes dentales?',
    answer: 'El proceso completo de un implante dental puede durar entre 3 y 6 meses, dependiendo de la condición del hueso y el plan de tratamiento. En muchos casos se pueden realizar procedimientos de carga inmediata.',
  },
  {
    question: '¿En qué consiste el diseño de sonrisa cerámico?',
    answer: 'El diseño de sonrisa cerámico es un proceso que combina planificación digital con carillas y coronas de cerámica de alta calidad para transformar completamente la apariencia de tus dientes, logrando resultados naturales y duraderos.',
  },
  {
    question: '¿Cuál es la diferencia entre prótesis fija y removible?',
    answer: 'La prótesis fija atornillada sobre implantes es permanente, no se retira, ofrece mayor comodidad y funcionalidad similar a los dientes naturales. La prótesis removible se puede quitar para limpiarla pero puede generar mayor incomodidad a largo plazo.',
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const tHero = await getTranslations('hero');
  const tStats = await getTranslations('stats');
  const tAbout = await getTranslations('about');
  const tServices = await getTranslations('services');
  const tBooks = await getTranslations('books');
  const tTestimonials = await getTranslations('testimonials');
  const tContact = await getTranslations('contact');

  const heroMessages = {
    nombre: tHero('nombre'),
    titulo: tHero('titulo'),
    subtitulo: tHero('subtitulo'),
    descripcion: tHero('descripcion'),
    credenciales: tHero('credenciales'),
    ctaPrincipal: tHero('ctaPrincipal'),
    ctaSecundario: tHero('ctaSecundario'),
    ubicacion: tHero('ubicacion'),
  };

  const statsMessages = {
    titulo: tStats('titulo'),
    anios: tStats('anios'),
    pacientes: tStats('pacientes'),
    clinicas: tStats('clinicas'),
    satisfaccion: tStats('satisfaccion'),
  };

  const aboutMessages = {
    titulo: tAbout('titulo'),
    subtitulo: tAbout('subtitulo'),
    bio1: tAbout('bio1'),
    bio2: tAbout('bio2'),
    bio3: tAbout('bio3'),
    credenciales: tAbout('credenciales'),
    verMas: tAbout('verMas'),
  };

  const servicesMessages = {
    titulo: tServices('titulo'),
    subtitulo: tServices('subtitulo'),
    implantes: {
      nombre: tServices('implantes.nombre'),
      descripcion: tServices('implantes.descripcion'),
    },
    protesis: {
      nombre: tServices('protesis.nombre'),
      descripcion: tServices('protesis.descripcion'),
    },
    diseno: {
      nombre: tServices('diseno.nombre'),
      descripcion: tServices('diseno.descripcion'),
    },
    rehabilitacion: {
      nombre: tServices('rehabilitacion.nombre'),
      descripcion: tServices('rehabilitacion.descripcion'),
    },
    estetica: {
      nombre: tServices('estetica.nombre'),
      descripcion: tServices('estetica.descripcion'),
    },
    diagnostico: {
      nombre: tServices('diagnostico.nombre'),
      descripcion: tServices('diagnostico.descripcion'),
    },
    solicitarInfo: tServices('solicitarInfo'),
  };

  const booksMessages = {
    titulo: tBooks('titulo'),
    subtitulo: tBooks('subtitulo'),
    descripcion: tBooks('descripcion'),
    descripcion2: tBooks('descripcion2'),
    disponible: tBooks('disponible'),
    verLibro: tBooks('verLibro'),
    paraQuien: tBooks('paraQuien'),
    pacientes: tBooks('pacientes'),
    profesionales: tBooks('profesionales'),
    curiosos: tBooks('curiosos'),
  };

  const testimonialsMessages = {
    titulo: tTestimonials('titulo'),
    subtitulo: tTestimonials('subtitulo'),
  };

  const contactMessages = {
    titulo: tContact('titulo'),
    subtitulo: tContact('subtitulo'),
    descripcion: tContact('descripcion'),
    whatsapp: tContact('whatsapp'),
    nombre: tContact('nombre'),
    email: tContact('email'),
    telefono: tContact('telefono'),
    mensaje: tContact('mensaje'),
    tratamiento: tContact('tratamiento'),
    enviar: tContact('enviar'),
    enviando: tContact('enviando'),
    exito: tContact('exito'),
    seleccionar: tContact('seleccionar'),
    ubicacion: tContact('ubicacion'),
    horario: tContact('horario'),
    horarioDetalle: tContact('horarioDetalle'),
    ubicacionDetalle: tContact('ubicacionDetalle'),
  };

  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  return (
    <>
      <SchemaOrg schema={[personSchema(), faqSchema(homeFaqs)]} />
      <HeroSection messages={heroMessages} locale={locale} />
      <StatsSection messages={statsMessages} />
      <AboutSection messages={aboutMessages} locale={locale} />
      <ServicesSection messages={servicesMessages} locale={locale} />
      <BooksSection messages={booksMessages} locale={locale} />
      <TestimonialsSection messages={testimonialsMessages} />
      <SocialProofSection locale={locale} />
      <ContactSection messages={contactMessages} />

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-[#C9A461]/10 via-[#C9A461]/5 to-[#C9A461]/10 border-t border-[#C9A461]/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#F5F5F0] mb-4"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {locale === 'es'
              ? '¿Listo para transformar tu sonrisa?'
              : 'Ready to transform your smile?'}
          </h2>
          <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
            {locale === 'es'
              ? 'Da el primer paso hoy. Una consulta de diagnóstico puede cambiar tu vida.'
              : 'Take the first step today. A diagnostic consultation can change your life.'}
          </p>
          <Link
            href={localePath('/contacto')}
            className="inline-block bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-10 py-4 rounded tracking-wider uppercase text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#C9A461]/30"
          >
            {locale === 'es' ? 'Agenda tu Cita Ahora' : 'Book Your Appointment Now'}
          </Link>
        </div>
      </section>
    </>
  );
}
