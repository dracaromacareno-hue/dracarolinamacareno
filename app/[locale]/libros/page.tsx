import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { bookSchema, breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';

  return {
    title: isEs ? 'Libros | Dra. Carolina Macareno' : 'Books | Dr. Carolina Macareno',
    description: isEs
      ? 'El poder de tu sonrisa — Cómo tus dientes transforman tu autoestima, confianza e imagen personal para lograr mayor seguridad y éxito. Libro de la Dra. Carolina Macareno.'
      : 'The Power of Your Smile — How your teeth transform your self-esteem, confidence and personal image to achieve greater security and success. Book by Dr. Carolina Macareno.',
    alternates: {
      canonical: isEs ? `${BASE}/libros` : `${BASE}/en/libros`,
      languages: { es: `${BASE}/libros`, en: `${BASE}/en/libros` },
    },
    openGraph: {
      title: isEs ? 'El Poder de Tu Sonrisa — Dra. Carolina Macareno' : 'The Power of Your Smile — Dr. Carolina Macareno',
      description: isEs
        ? 'Cómo tus dientes transforman tu autoestima, confianza e imagen personal. Libro de la Dra. Carolina Macareno, especialista en rehabilitación oral.'
        : 'How your teeth transform your self-esteem, confidence and personal image. Book by Dr. Carolina Macareno, oral rehabilitation specialist.',
      url: isEs ? `${BASE}/libros` : `${BASE}/en/libros`,
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/images/libro-el-poder-de-tu-sonrisa.webp`, width: 800, height: 1200 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'El Poder de Tu Sonrisa — Dra. Carolina Macareno' : 'The Power of Your Smile — Dr. Carolina Macareno',
      description: isEs
        ? 'Transforma tu autoestima y confianza a través de tu sonrisa.'
        : 'Transform your self-esteem and confidence through your smile.',
    },
  };
}

export default async function LibrosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Libros' : 'Books', url: isEs ? `${BASE}/libros` : `${BASE}/en/libros` },
  ];

  const librosFaqs = isEs ? [
    {
      question: '¿De qué trata el libro "El Poder de Tu Sonrisa"?',
      answer: 'Es un libro de transformación personal que revela la conexión profunda entre tus dientes, tu autoestima y tu éxito personal y profesional. La Dra. Carolina Macareno integra 17 años de experiencia clínica con un enfoque humano sobre cómo la sonrisa influye en la confianza, las relaciones y la imagen personal. No es un libro técnico de odontología.',
    },
    {
      question: '¿Quién debería leer este libro?',
      answer: 'Adultos que evitan sonreír en fotos, se cubren la boca al reír, han perdido dientes o sienten que su imagen limita su seguridad personal o profesional. También profesionales de la salud, coaches y comunicadores interesados en el impacto psicosocial de la sonrisa.',
    },
    {
      question: '¿Dónde puedo comprar el libro?',
      answer: 'Próximamente estará disponible en Amazon (versión Kindle e impresa) y en venta directa desde dracarolinamacareno.com. Para reservar tu copia anticipada o consultar disponibilidad, escríbenos por WhatsApp al +57 316 397 5232.',
    },
    {
      question: '¿Está disponible en inglés?',
      answer: 'La versión inicial está en español. Una edición en inglés está en desarrollo para 2026 dirigida a la audiencia internacional, especialmente pacientes de turismo dental en Estados Unidos, Panamá y Puerto Rico.',
    },
    {
      question: '¿En qué se diferencia este libro de otros sobre odontología?',
      answer: 'Este libro no enseña técnicas clínicas — explora cómo la sonrisa transforma identidad, autoestima y oportunidades. Combina ciencia odontológica accesible con psicología, imagen personal y desarrollo humano. Es el resultado del MÉTODO PROYECTIA, un sistema integral creado por la Dra. Macareno tras tratar más de 3,500 pacientes.',
    },
  ] : [
    {
      question: 'What is "The Power of Your Smile" about?',
      answer: 'It is a personal transformation book that reveals the deep connection between your teeth, your self-esteem and your personal and professional success. Dr. Carolina Macareno integrates 17 years of clinical experience with a human approach on how a smile influences confidence, relationships and personal image. It is not a technical dentistry book.',
    },
    {
      question: 'Who should read this book?',
      answer: 'Adults who avoid smiling in photos, cover their mouth when laughing, have lost teeth or feel their image limits personal or professional confidence. Also health professionals, coaches and communicators interested in the psychosocial impact of the smile.',
    },
    {
      question: 'Where can I buy the book?',
      answer: 'It will soon be available on Amazon (Kindle and print) and for direct purchase from dracarolinamacareno.com. To reserve your early copy or inquire about availability, message us on WhatsApp at +57 316 397 5232.',
    },
    {
      question: 'Is it available in English?',
      answer: 'The initial version is in Spanish. An English edition is in development for 2026 aimed at the international audience, especially dental tourism patients in the United States, Panama and Puerto Rico.',
    },
    {
      question: 'How is this book different from other dentistry books?',
      answer: 'This book does not teach clinical techniques — it explores how a smile transforms identity, self-esteem and opportunities. It combines accessible dental science with psychology, personal image and human development. It is the result of MÉTODO PROYECTIA, a comprehensive system created by Dr. Macareno after treating more than 3,500 patients.',
    },
  ];

  return (
    <>
      <SchemaOrg schema={[bookSchema(), breadcrumbSchema(breadcrumbs), faqSchema(librosFaqs)]} />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
              {isEs ? 'Publicaciones' : 'Publications'}
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Libros' : 'Books'}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Book card */}
      <section className="py-20 bg-[#0D1321]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Book visual */}
              <div className="flex items-center justify-center p-10 bg-[#070B14] border-b md:border-b-0 md:border-r border-[#1F2937]">
                <div className="relative w-44 h-64 shadow-2xl shadow-black/60 rounded-sm overflow-hidden">
                  <Image
                    src="/images/libro-el-poder-de-tu-sonrisa.webp"
                    alt="El Poder de Tu Sonrisa — Dra. Carolina Macareno B."
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-8">
                <AnimatedSection>
                  <span className="inline-flex items-center gap-2 bg-[#C9A461]/10 border border-[#C9A461]/30 text-[#C9A461] text-xs px-3 py-1 rounded mb-4">
                    <span>📖</span>
                    <span>{isEs ? 'Disponible ahora' : 'Available now'}</span>
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-[#F5F5F0] mb-2"
                    style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    {isEs ? 'El Poder de Tu Sonrisa' : 'The Power of Your Smile'}
                  </h2>
                  <p className="text-[#C9A461] text-sm mb-1 italic" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
                    {isEs
                      ? 'Cómo tus dientes transforman tu autoestima, confianza e imagen personal para lograr mayor seguridad y éxito'
                      : 'How your teeth transform your self-esteem, confidence and personal image to achieve greater security and success'}
                  </p>
                  <p className="text-[#9CA3AF] text-xs mb-4">
                    {isEs ? 'por Dra. Carolina Macareno B.' : 'by Dr. Carolina Macareno B.'}
                  </p>
                  <div className="w-10 h-0.5 bg-[#C9A461] mb-5" />
                  <p className="text-[#D1D5DB] leading-relaxed mb-4 text-sm">
                    {isEs
                      ? '¿Evitas sonreír en fotos? ¿Te cubres la boca al reír? ¿Sientes que tu imagen limita tu seguridad en el trabajo o en tus relaciones? La sonrisa no es solo estética — es autoestima, confianza, presencia y liderazgo.'
                      : 'Do you avoid smiling in photos? Do you cover your mouth when you laugh? Do you feel your image is limiting your confidence at work or in your relationships? Your smile is not just aesthetics — it is self-esteem, confidence, presence and leadership.'}
                  </p>
                  <p className="text-[#D1D5DB] leading-relaxed mb-6 text-sm">
                    {isEs
                      ? 'Este no es un libro de odontología. Es un libro de transformación personal, imagen y crecimiento. La Dra. Macareno revela la conexión profunda entre tus dientes, tu autoestima y tu éxito personal y profesional.'
                      : 'This is not a dentistry book. It is a book about personal transformation, image and growth. Dr. Macareno reveals the deep connection between your teeth, your self-esteem and your personal and professional success.'}
                  </p>
                  <Link
                    href={localePath('/libros/el-poder-de-tu-sonrisa')}
                    className="inline-flex items-center gap-2 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-6 py-3 rounded transition-all duration-200 hover:scale-105 text-sm"
                  >
                    {isEs ? 'Ver detalles del libro' : 'View book details'}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
