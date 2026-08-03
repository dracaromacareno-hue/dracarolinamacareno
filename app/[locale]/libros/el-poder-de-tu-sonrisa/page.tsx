import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
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
    title: isEs
      ? 'El Poder de Tu Sonrisa, Libro | Dra. Carolina Macareno'
      : 'The Power of Your Smile, Book | Dr. Carolina Macareno',
    description: isEs
      ? 'El poder de tu sonrisa: cómo tus dientes transforman tu autoestima, tu confianza y tu imagen. Libro de la Dra. Carolina Macareno.'
      : 'The Power of Your Smile: how your teeth transform your self-esteem, confidence and personal image to achieve greater security and success. By Dr. Carolina Macareno B.',
    alternates: {
      canonical: isEs
        ? `${BASE}/libros/el-poder-de-tu-sonrisa`
        : `${BASE}/en/libros/el-poder-de-tu-sonrisa`,
      languages: {
        es: `${BASE}/libros/el-poder-de-tu-sonrisa`,
        en: `${BASE}/en/libros/el-poder-de-tu-sonrisa`,
      },
    },
    openGraph: {
      title: isEs
        ? 'El Poder de Tu Sonrisa, Dra. Carolina Macareno'
        : 'The Power of Your Smile, Dr. Carolina Macareno',
      description: isEs
        ? 'Cómo tus dientes transforman tu autoestima, confianza e imagen personal. Libro de la Dra. Carolina Macareno.'
        : 'How your teeth transform your self-esteem, confidence and personal image. Book by Dr. Carolina Macareno.',
      url: isEs
        ? `${BASE}/libros/el-poder-de-tu-sonrisa`
        : `${BASE}/en/libros/el-poder-de-tu-sonrisa`,
      siteName: 'Dra. Carolina Macareno',
      type: 'book',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/images/libro-el-poder-de-tu-sonrisa-2ed.webp`, width: 800, height: 1200, alt: 'El Poder de Tu Sonrisa' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'El Poder de Tu Sonrisa, Libro' : 'The Power of Your Smile, Book',
      description: isEs
        ? 'Transforma tu autoestima y confianza a través de tu sonrisa.'
        : 'Transform your self-esteem and confidence through your smile.',
      images: [`${BASE}/images/libro-el-poder-de-tu-sonrisa-2ed.webp`],
    },
  };
}

const bookFaqs = [
  {
    question: '¿De qué trata el libro "El poder de tu sonrisa"?',
    answer: 'No es un libro sobre dientes. Es un libro sobre identidad, seguridad y proyección personal. La Dra. Carolina Macareno integra tres dimensiones, el Triángulo PROYECTIA: Identidad (cómo tu sonrisa moldea tu autopercepción), Función (si tu boca te permite vivir sin dolor ni miedo) y Estética con criterio (cómo decidir sin modas ni improvisación). Escrito con rigor clínico, evidencia científica y la cercanía de una especialista con 17+ años de experiencia.',
  },
  {
    question: '¿Para quién está dirigido este libro?',
    answer: 'Para cualquier persona que alguna vez haya cerrado la boca en una foto, se haya contenido al reír en una reunión o haya sentido que su sonrisa le está costando oportunidades, relaciones o su propia plenitud. También para profesionales de la odontología que quieren entender el impacto psicológico de su trabajo.',
  },
  {
    question: '¿Dónde puedo conseguir el libro?',
    answer: 'El libro está disponible en Amazon. También puedes contactarnos por WhatsApp para mayor información sobre cómo adquirirlo.',
  },
  {
    question: '¿El libro también está disponible en inglés?',
    answer: 'Actualmente el libro está publicado en español. Se está evaluando la publicación de una versión en inglés.',
  },
  {
    question: '¿Qué es el Triángulo PROYECTIA?',
    answer: 'Es el marco conceptual del libro: tres dimensiones que casi nunca se abordan juntas, Identidad (cómo tu sonrisa moldea tu autopercepción y lenguaje no verbal), Función (si tu boca te permite vivir, comer, hablar y reír sin dolor ni miedo) y Estética con criterio (cómo decidir sobre tu imagen sin modas ni improvisación).',
  },
];

const discoveries = [
  'Los 7 segundos que deciden cómo te perciben, y cómo ganarlos',
  'El impuesto invisible que llevas pagando por esconder tu sonrisa',
  'El origen real de tu inseguridad al sonreír, y cómo revertirlo',
  'Los 4 tipos de tratamientos explicados sin letra pequeña',
  'El Plan Sonrisa Poderosa paso a paso en 5 fases',
  'Los 3 rituales diarios que sostienen tu transformación toda la vida',
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

  // ── COMPRA DIRECTA DEL PDF (Stripe Payment Link) ──
  // Pega aquí el Stripe Payment Link cuando lo crees (empieza por
  // https://buy.stripe.com/...). Mientras esté vacío, el botón principal cae a
  // WhatsApp para no perder la venta. En Stripe, configura el link para redirigir
  // tras el pago a: https://dracarolinamacareno.com/gracias
  const STRIPE_BOOK_URL: string = '';
  const BOOK_PRICE_USD = '9,99';
  // Fallback de compra si aún no hay Stripe Payment Link: enruta a WhatsApp.
  const waLink = 'https://wa.me/573163975232?text=Hola%2C%20me%20interesa%20obtener%20el%20libro%20El%20Poder%20de%20Tu%20Sonrisa';
  const buyHref = STRIPE_BOOK_URL || waLink;
  const buyIsStripe = Boolean(STRIPE_BOOK_URL);

  // Amazon, eBook Kindle (formato principal, 100% live). MISMO libro que se
  // está reeditando (nuevo título/carátula/texto) → el ASIN se conserva.
  const AMAZON_ASIN = 'B0FSYFX9B6';
  const amazonBuyUrl = AMAZON_ASIN ? `https://www.amazon.com/dp/${AMAZON_ASIN}` : '';
  const amazonReviewUrl = AMAZON_ASIN ? `https://www.amazon.com/review/create-review/?asin=${AMAZON_ASIN}` : '';

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Libros' : 'Books', url: isEs ? `${BASE}/libros` : `${BASE}/en/libros` },
    { name: isEs ? 'El Poder de Tu Sonrisa' : 'The Power of Your Smile', url: isEs ? `${BASE}/libros/el-poder-de-tu-sonrisa` : `${BASE}/en/libros/el-poder-de-tu-sonrisa` },
  ];

  return (
    <>
      <SchemaOrg schema={[bookSchema(), breadcrumbSchema(breadcrumbs), faqSchema(bookFaqs)]} />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 bg-[#FCFBF9] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.07)_0%,_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="down" delay={0}>
            <nav className="flex items-center gap-2 text-sm mb-10" style={{ color: '#77726A' }}>
              <Link href={localePath('/')} className="hover:text-[#8A6B2E] transition-colors">Inicio</Link>
              <span>/</span>
              <Link href={localePath('/libros')} className="hover:text-[#8A6B2E] transition-colors">Libros</Link>
              <span>/</span>
              <span style={{ color: '#C9A461' }}>El Poder de Tu Sonrisa</span>
            </nav>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Book visual */}
            <AnimatedSection direction="right">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-10 bg-[#C9A461]/10 rounded-full blur-3xl" />
                  <div className="relative w-64 h-96 shadow-2xl shadow-black/80 rounded-sm overflow-hidden">
                    <Image
                      src="/images/libro-el-poder-de-tu-sonrisa-2ed.webp"
                      alt="El Poder de Tu Sonrisa, Dra. Carolina Macareno B."
                      fill
                      className="object-cover"
                      sizes="256px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="left">
              <span
                className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded mb-5"
                style={{ backgroundColor: 'rgba(201,164,97,0.1)', border: '1px solid rgba(201,164,97,0.3)', color: '#C9A461' }}
              >
                {isEs ? 'Disponible ahora' : 'Available now'}
              </span>
              <h1
                className="text-3xl sm:text-4xl font-bold mb-3 leading-tight"
                style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                El Poder de Tu Sonrisa
              </h1>
              <p
                className="text-base mb-2 italic leading-snug"
                style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                Cómo tus dientes transforman tu autoestima, confianza e imagen personal para lograr mayor seguridad y éxito
              </p>
              <p className="text-sm mb-6" style={{ color: '#77726A' }}>
                por Dra. Carolina Macareno B., Especialista en Rehabilitación Oral Estética e Implantología
              </p>
              <div className="w-12 h-px mb-7" style={{ backgroundColor: '#C9A461' }} />
              <p className="text-base leading-relaxed mb-5" style={{ color: '#5A5449', fontFamily: 'var(--font-playfair-display, serif)', fontStyle: 'italic' }}>
                "Arreglar dientes no transforma una vida. Transformar la relación con tu sonrisa, sí."
              </p>
              {/* Oferta directa: PDF digital vía Stripe (CTA principal) */}
              <div
                className="mt-6 p-5 rounded-xl border"
                style={{ backgroundColor: 'rgba(201,164,97,0.05)', borderColor: 'rgba(201,164,97,0.3)' }}
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
                    USD ${BOOK_PRICE_USD}
                  </span>
                  <span className="text-xs" style={{ color: '#C9A461' }}>
                    {isEs ? 'precio de lanzamiento' : 'launch price'}
                  </span>
                </div>
                <p className="text-xs mb-4" style={{ color: '#77726A' }}>
                  {isEs
                    ? 'Edición digital en PDF. Descarga inmediata. Léelo en tu celular, tablet o computador, es tuyo para siempre.'
                    : 'Digital PDF edition. Instant download. Read it on your phone, tablet or computer, yours forever.'}
                </p>
                <a
                  href={buyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3.5 px-5 rounded font-bold text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: '#C9A461', color: '#070B14' }}
                >
                  {buyIsStripe
                    ? (isEs ? 'Comprar el PDF ahora' : 'Buy the PDF now')
                    : (isEs ? 'Comprar el PDF (escríbeme por WhatsApp)' : 'Buy the PDF (message me on WhatsApp)')}
                </a>
              </div>

              <div className="flex gap-3 mt-3">
                <WhatsAppLink
                  message="Hola, me interesa obtener el libro El Poder de Tu Sonrisa"
                  locale={locale as 'es' | 'en'}
                  trackingLabel="libro_poder_sonrisa_cta"
                  className="flex-1 text-center py-3 px-5 rounded font-semibold text-sm border transition-all hover:scale-105 border-[rgba(201,164,97,0.4)] text-[#211E18]"
                >
                  {isEs ? 'Preguntar por WhatsApp' : 'Ask on WhatsApp'}
                </WhatsAppLink>
                <Link
                  href={localePath('/contacto')}
                  className="flex-1 text-center py-3 px-5 rounded font-semibold text-sm border transition-all hover:scale-105"
                  style={{ borderColor: 'rgba(201,164,97,0.4)', color: '#211E18' }}
                >
                  {isEs ? 'Más información' : 'More info'}
                </Link>
              </div>

              {/* Amazon, se activa automáticamente cuando AMAZON_ASIN tenga valor */}
              {AMAZON_ASIN && (
                <div className="flex gap-3 mt-3">
                  <a
                    href={amazonBuyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-5 rounded font-semibold text-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#FF9900', color: '#0F1111' }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.547-.266-.472-.66C5.966 1.268 8.956.1 11.728.1c1.419 0 3.272.379 4.39 1.456 1.416 1.32 1.281 3.084 1.281 5.002v4.529c0 1.362.564 1.959 1.096 2.694.187.261.228.575-.01.769l-2.341 2.245zm3.56 2.984c-2.327 1.728-5.708 2.648-8.617 2.648-4.079 0-7.75-1.507-10.525-4.015-.218-.197-.023-.466.239-.313 2.994 1.742 6.7 2.791 10.528 2.791 2.58 0 5.418-.535 8.028-1.645.394-.168.724.258.347.534zm.995-1.135c-.298-.382-1.97-.181-2.721-.091-.229.027-.264-.171-.058-.315 1.332-.937 3.519-.666 3.773-.352.255.315-.066 2.508-1.317 3.553-.192.161-.374.075-.289-.136.281-.703.912-2.276.612-2.659z"/>
                    </svg>
                    {isEs ? 'Comprar en Amazon' : 'Buy on Amazon'}
                  </a>
                  <a
                    href={amazonReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-5 rounded font-semibold text-sm border transition-all hover:scale-105 flex items-center justify-center gap-2"
                    style={{ borderColor: '#FF9900', color: '#FF9900' }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {isEs ? 'Dejar reseña en Amazon' : 'Leave a review on Amazon'}
                  </a>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── HOOK QUESTIONS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p
              className="text-xl sm:text-2xl font-bold mb-8 italic leading-snug"
              style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              "En los primeros 7 segundos, el mundo ya decidió quién eres.<br />Tu sonrisa se los dijo."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-10">
              {[
                '¿Cuántas veces has cerrado la boca en una foto?',
                '¿Cuántas veces te has contenido al reír en una reunión de trabajo, en una cena, frente a tus propios hijos?',
                '¿Cuántas veces saliste del baño con el mismo pensamiento automático: "así no, mejor menos diente"?',
              ].map((q, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
                >
                  <p className="text-base font-medium leading-snug" style={{ color: '#5A5449', fontFamily: 'var(--font-playfair-display, serif)' }}>
                    {q}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-xl border text-left" style={{ backgroundColor: 'rgba(201,164,97,0.05)', borderColor: 'rgba(201,164,97,0.2)' }}>
              <p className="text-base leading-relaxed" style={{ color: '#5A5449' }}>
                Lo que no sabías es que ese gesto, diminuto, silencioso, cotidiano, te ha estado costando mucho más de lo que imaginas.{' '}
                <span style={{ color: '#E5B866' }}>Oportunidades laborales que no llegaron. Relaciones que no florecieron. Fotos que nunca tomaste. Versiones de ti misma que nunca dejaste salir al mundo.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PROYECTIA TRIANGLE ── */}
      <section className="py-16 bg-[#FCFBF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#C9A461' }}>El marco del libro</p>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              El Triángulo PROYECTIA
            </h2>
            <p className="text-base" style={{ color: '#77726A' }}>
              Tres dimensiones que casi nunca se abordan juntas, y que este libro integra por primera vez
            </p>
            <div className="w-12 h-px mx-auto mt-5" style={{ backgroundColor: '#C9A461' }} />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                title: 'Identidad',
                desc: 'Cómo tu sonrisa moldea tu autopercepción, tu lenguaje no verbal y la forma en que los demás te leen antes de que hables.',
                icon: <Icon name="mirror" />,
              },
              {
                num: '02',
                title: 'Función',
                desc: 'Si tu boca te permite vivir, comer, hablar y reír sin dolor ni miedo, la base que todo lo demás necesita.',
                icon: <Icon name="gear" />,
              },
              {
                num: '03',
                title: 'Estética con criterio',
                desc: 'Cómo decidir sobre tu imagen sin modas ni improvisación, con evidencia clínica y tu historia de vida.',
                icon: <Icon name="sparkle" />,
              },
            ].map((item) => (
              <AnimatedSection key={item.num}>
                <div className="p-6 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-bold tracking-widest" style={{ color: '#C9A461' }}>{item.num}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#5A5449' }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── LO QUE DESCUBRIRÁS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              Aquí descubrirás
            </h2>
            <div className="w-12 h-px mx-auto mt-4" style={{ backgroundColor: '#C9A461' }} />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {discoveries.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div
                  className="flex items-start gap-3 p-4 rounded-lg border"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}
                >
                  <span className="text-base font-bold shrink-0 mt-0.5" style={{ color: '#C9A461' }}>✔</span>
                  <span className="text-sm leading-relaxed" style={{ color: '#5A5449' }}>{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ARGUMENT ── */}
      <section className="py-20 bg-[#FCFBF9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#5A5449' }}>
              Este no es un libro sobre dientes.{' '}
              <strong style={{ color: '#211E18' }}>Es un libro sobre identidad, seguridad y proyección personal.</strong>{' '}
              Escrito con rigor clínico, evidencia científica y la cercanía de una especialista que llevaba 17 años esperando el momento para contártelo.
            </p>
            <p className="text-base leading-relaxed mb-12" style={{ color: '#5A5449' }}>
              Si alguna vez has sentido que tu sonrisa te está costando oportunidades, relaciones o simplemente tu propia plenitud… este libro es para ti.
            </p>
            <div
              className="p-8 rounded-2xl border mb-10"
              style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(201,164,97,0.25)' }}
            >
              <p
                className="text-xl sm:text-2xl font-bold mb-3 leading-snug"
                style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                "La sonrisa que el mundo merece ver de ti es exactamente la que llevas años guardándote."
              </p>
              <p className="text-base font-semibold" style={{ color: '#C9A461' }}>
                Deja de esperarla. Empieza a mostrarla.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={buyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded font-bold text-base transition-all hover:scale-105"
                style={{ backgroundColor: '#C9A461', color: '#070B14' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
                {buyIsStripe ? `Comprar el PDF, USD $${BOOK_PRICE_USD}` : 'Comprar el PDF (escríbeme)'}
              </a>
              {amazonBuyUrl && (
                <a
                  href={amazonBuyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-base transition-all hover:scale-105"
                  style={{ backgroundColor: '#FF9900', color: '#0F1111' }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.547-.266-.472-.66C5.966 1.268 8.956.1 11.728.1c1.419 0 3.272.379 4.39 1.456 1.416 1.32 1.281 3.084 1.281 5.002v4.529c0 1.362.564 1.959 1.096 2.694.187.261.228.575-.01.769l-2.341 2.245zm3.56 2.984c-2.327 1.728-5.708 2.648-8.617 2.648-4.079 0-7.75-1.507-10.525-4.015-.218-.197-.023-.466.239-.313 2.994 1.742 6.7 2.791 10.528 2.791 2.58 0 5.418-.535 8.028-1.645.394-.168.724.258.347.534zm.995-1.135c-.298-.382-1.97-.181-2.721-.091-.229.027-.264-.171-.058-.315 1.332-.937 3.519-.666 3.773-.352.255.315-.066 2.508-1.317 3.553-.192.161-.374.075-.289-.136.281-.703.912-2.276.612-2.659z"/>
                  </svg>
                  Comprar en Amazon
                </a>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-8">
            <h2
              className="text-2xl font-bold"
              style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Preguntas frecuentes' : 'FAQs'}
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {bookFaqs.map((faq, i) => (
              <AnimatedSection key={i}>
                <div className="rounded-xl border p-5" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                  <h3 className="font-semibold mb-2 text-sm flex items-start gap-2" style={{ color: '#E5B866' }}>
                    <span style={{ color: '#C9A461' }}>▸</span>
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5A5449' }}>{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
