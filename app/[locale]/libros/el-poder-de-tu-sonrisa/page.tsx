import type { Metadata } from 'next';
import Link from 'next/link';
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
    title: isEs
      ? 'El Poder de Tu Sonrisa — Libro | Dra. Carolina Macareno'
      : 'The Power of Your Smile — Book | Dr. Carolina Macareno',
    description: isEs
      ? 'El libro "El poder de tu sonrisa" de la Dra. Carolina Macareno: guía sobre rehabilitación oral, implantes dentales y el impacto psicológico de una sonrisa sana.'
      : '"The Power of Your Smile" book by Dr. Carolina Macareno: guide on oral rehabilitation, dental implants and the psychological impact of a healthy smile.',
    alternates: {
      canonical: isEs
        ? `${BASE}/libros/el-poder-de-tu-sonrisa`
        : `${BASE}/en/libros/el-poder-de-tu-sonrisa`,
      languages: {
        es: `${BASE}/libros/el-poder-de-tu-sonrisa`,
        en: `${BASE}/en/libros/el-poder-de-tu-sonrisa`,
      },
    },
  };
}

const bookFaqs = [
  {
    question: '¿De qué trata el libro "El poder de tu sonrisa"?',
    answer: 'Es una guía práctica y humana sobre rehabilitación oral, implantes dentales y el impacto psicológico de una sonrisa sana, escrita para pacientes y para profesionales de la odontología.',
  },
  {
    question: '¿Dónde puedo conseguir el libro?',
    answer: 'El libro está disponible a través del sitio web de la Dra. Carolina Macareno. Contáctenos para obtener información sobre cómo adquirirlo.',
  },
  {
    question: '¿El libro también está disponible en inglés?',
    answer: 'Actualmente el libro está publicado en español. Se está evaluando la publicación de una versión en inglés.',
  },
];

export default async function BookDetailPage({
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
    { name: isEs ? 'El poder de tu sonrisa' : 'The Power of Your Smile', url: isEs ? `${BASE}/libros/el-poder-de-tu-sonrisa` : `${BASE}/en/libros/el-poder-de-tu-sonrisa` },
  ];

  const chapters = [
    isEs ? 'La boca: ventana a tu salud integral' : 'The mouth: window to your integral health',
    isEs ? 'Por qué perdemos los dientes (y cómo evitarlo)' : 'Why we lose teeth (and how to avoid it)',
    isEs ? 'El mundo de los implantes: mitos y realidades' : 'The world of implants: myths and realities',
    isEs ? 'El poder psicológico de una sonrisa sana' : 'The psychological power of a healthy smile',
    isEs ? 'Diseño de sonrisa: ciencia y arte' : 'Smile design: science and art',
    isEs ? 'Cómo elegir a tu especialista' : 'How to choose your specialist',
    isEs ? 'Preguntas que debes hacerle a tu dentista' : 'Questions you should ask your dentist',
    isEs ? 'El antes y el después: historias reales de transformación' : 'Before and after: real transformation stories',
  ];

  return (
    <>
      <SchemaOrg schema={[bookSchema(), breadcrumbSchema(breadcrumbs), faqSchema(bookFaqs)]} />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book 3D */}
            <AnimatedSection direction="right">
              <div className="flex justify-center">
                {/* Photo: el-poder-de-tu-sonrisa-portada.jpg */}
                <div className="relative w-56 h-80">
                  <div className="absolute -inset-4 bg-[#C9A461]/10 rounded-lg blur-2xl" />
                  <div className="relative h-full">
                    <div className="absolute left-0 top-0 w-5 h-full bg-gradient-to-r from-[#A07830] to-[#C9A461] shadow-lg" />
                    <div className="absolute left-5 top-0 right-0 h-full bg-gradient-to-br from-[#0D1321] via-[#1A5276] to-[#070B14] border border-[#C9A461]/30 shadow-2xl flex flex-col items-center justify-between p-8">
                      <div className="absolute inset-4 border border-[#C9A461]/10" />
                      <div className="text-center">
                        <div className="w-12 h-0.5 bg-[#C9A461]/60 mx-auto mb-2" />
                        <p className="text-[#C9A461]/80 text-xs tracking-[0.2em] uppercase">Dra.</p>
                        <p className="text-[#C9A461]/60 text-xs tracking-widest">Carolina Macareno</p>
                      </div>
                      <div className="text-center">
                        <h1
                          className="text-[#F5F5F0] font-bold text-2xl leading-tight mb-1"
                          style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                        >
                          El poder
                        </h1>
                        <p className="text-[#C9A461] text-xs tracking-widest uppercase">de tu sonrisa</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-[#C9A461]/30 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#C9A461]/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 bg-[#C9A461]/10 border border-[#C9A461]/30 text-[#C9A461] text-xs px-3 py-1 rounded mb-4">
                📖 {isEs ? 'Disponible ahora' : 'Available now'}
              </span>
              <h1
                className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-2 leading-tight"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {isEs ? 'El poder de tu sonrisa' : 'The Power of Your Smile'}
              </h1>
              <p className="text-[#C9A461] text-lg mb-6 italic" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
                {isEs ? 'por Dra. Carolina Macareno' : 'by Dr. Carolina Macareno'}
              </p>
              <div className="w-12 h-0.5 bg-[#C9A461] mb-6" />
              <p className="text-[#D1D5DB] leading-relaxed mb-4">
                {isEs
                  ? 'Escrito desde la trinchera de 17 años de práctica clínica, este libro es una guía honesta y accesible sobre todo lo que deberías saber antes de tomar decisiones sobre tu salud oral. Sin tecnicismos innecesarios, con casos reales y con la voz de una especialista que ha acompañado a más de 3,500 pacientes en su transformación.'
                  : 'Written from the trenches of 17 years of clinical practice, this book is an honest and accessible guide to everything you should know before making decisions about your oral health. Without unnecessary technicalities, with real cases and with the voice of a specialist who has accompanied more than 3,500 patients in their transformation.'}
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://wa.me/573000000000?text=Hola, me interesa obtener el libro El poder de tu sonrisa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold py-3 rounded text-center text-sm transition-all hover:scale-105"
                >
                  {isEs ? 'Obtener el libro' : 'Get the book'}
                </a>
                <Link
                  href={localePath('/contacto')}
                  className="flex-1 border border-[#C9A461]/40 hover:border-[#C9A461] text-[#F5F5F0] py-3 rounded text-center text-sm transition-all"
                >
                  {isEs ? 'Más información' : 'More info'}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16 bg-[#0D1321]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Contenido del libro' : 'Book contents'}
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A461] mx-auto mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {chapters.map((chapter, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-[#111827] border border-[#1F2937] rounded p-4">
                  <span className="text-[#C9A461] font-bold text-sm flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[#D1D5DB] text-sm">{chapter}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#070B14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-8">
            <h2
              className="text-2xl font-bold text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Preguntas frecuentes' : 'FAQs'}
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {bookFaqs.map((faq, i) => (
              <AnimatedSection key={i}>
                <div className="bg-[#0D1321] border border-[#1F2937] rounded p-5">
                  <h3 className="text-[#F5F5F0] font-semibold mb-2 text-sm">{faq.question}</h3>
                  <p className="text-[#9CA3AF] text-sm">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
