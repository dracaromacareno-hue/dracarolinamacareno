import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import Image from 'next/image';
import { blogPosts, getBlogPost, type BlogPost } from '@/lib/blog-posts';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { articleSchema, breadcrumbSchema, faqSchema } from '@/components/SchemaOrg';
import RelatedServices from '@/components/sections/RelatedServices';

/**
 * Smart related-posts ranker.
 * Scores each candidate by topical similarity to the current post:
 *   +50 same category   (strongest signal)
 *   +30 shared keyword  (per keyword match, capped at 90)
 *   +10 recent post     (published in last 12 months)
 *   +5  title overlap   (per shared word ≥ 4 chars, capped at 20)
 * Returns the top 4 (was 3) so we have more linking surface.
 */
function getSmartRelatedPosts(currentPost: BlogPost): BlogPost[] {
  const now = Date.now();
  const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
  const currentTitleWords = new Set(
    (currentPost.title + ' ' + currentPost.titleEn)
      .toLowerCase()
      .split(/\W+/)
      .filter((w) => w.length >= 4),
  );

  const scored = blogPosts
    .filter((p) => p.slug !== currentPost.slug && !p.redirected)
    .map((p) => {
      let score = 0;
      // Same category, strongest signal
      if (p.category === currentPost.category || p.categoryEn === currentPost.categoryEn) {
        score += 50;
      }
      // Shared keywords
      const sharedKeywords = (p.keywords || []).filter((k) =>
        (currentPost.keywords || []).includes(k),
      );
      score += Math.min(sharedKeywords.length * 30, 90);
      // Recency bonus
      const ageMs = now - new Date(p.publishDate).getTime();
      if (ageMs < ONE_YEAR_MS) score += 10;
      // Title word overlap
      const titleWords = (p.title + ' ' + p.titleEn).toLowerCase().split(/\W+/);
      const overlap = titleWords.filter((w) => w.length >= 4 && currentTitleWords.has(w)).length;
      score += Math.min(overlap * 5, 20);
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 4).map((s) => s.post);
}


/**
 * Puente hacia Consultoria Dental CM LLC, la empresa en Estados Unidos.
 *
 * Existe porque el enlace entre los dos sitios estaba en una sola dirección:
 * la LLC enlazaba aquí 24 veces y este sitio enlazaba allá 2, las dos en el
 * mismo artículo. Todo el tráfico está de este lado y no cruzaba.
 *
 * No compite con nada de aquí: este sitio explica el tratamiento, la LLC
 * explica el presupuesto y la decisión. Son públicos distintos en el mismo
 * momento, y por eso el puente va solo en las categorías donde el lector
 * probablemente tiene una cotización de otro país en la mano.
 */
function getPuenteLLC(
  category: string,
  categoryEn: string,
  isEs: boolean,
): { titulo: string; texto: string; enlace: string; boton: string } | null {
  const cat = category || categoryEn;
  const mapa: Record<string, { es: string; en: string }> = {
    Costos: { es: 'presupuesto-dental-28000-dolares-es-normal', en: 'dental-implant-quote-28000-normal' },
    Costs: { es: 'presupuesto-dental-28000-dolares-es-normal', en: 'dental-implant-quote-28000-normal' },
    Implantes: { es: 'presupuesto-implante-no-incluye-corona', en: 'why-implant-quote-excludes-crown' },
    Implants: { es: 'presupuesto-implante-no-incluye-corona', en: 'why-implant-quote-excludes-crown' },
    'Turismo Dental': { es: 'segunda-opinion-dental-cuando-vale-la-pena', en: 'dental-second-opinion-when-worth-it' },
    'Dental Tourism': { es: 'segunda-opinion-dental-cuando-vale-la-pena', en: 'dental-second-opinion-when-worth-it' },
    'Guías': { es: 'preguntas-antes-de-firmar-presupuesto-dental', en: 'questions-to-ask-dentist-before-signing' },
    Guides: { es: 'preguntas-antes-de-firmar-presupuesto-dental', en: 'questions-to-ask-dentist-before-signing' },
    Rehabilitación: { es: 'presupuesto-no-se-si-resuelve-mi-problema', en: 'quote-understood-but-will-it-fix-my-problem' },
    Rehabilitation: { es: 'presupuesto-no-se-si-resuelve-mi-problema', en: 'quote-understood-but-will-it-fix-my-problem' },
    Cirugía: { es: 'especialista-o-odontologo-general', en: 'specialist-or-general-dentist' },
    Surgery: { es: 'especialista-o-odontologo-general', en: 'specialist-or-general-dentist' },
  };
  const destino = mapa[cat];
  if (!destino) return null;

  const base = 'https://consultoriadentalcm.com';
  return isEs
    ? {
        titulo: '¿Tienes un presupuesto de Estados Unidos que no entiendes?',
        texto:
          'Consultoria Dental CM es mi empresa en Estados Unidos. Ahí explico, en español, qué dice un presupuesto dental, qué significa cada línea y qué preguntarle a tu odontólogo antes de firmar. Sin venderte ningún tratamiento.',
        enlace: `${base}/blog/${destino.es}`,
        boton: 'Leer el artículo →',
      }
    : {
        titulo: 'Have a U.S. dental quote you do not understand?',
        texto:
          'Consultoria Dental CM is my company in the United States. There I explain, in Spanish, what a dental quote says, what each line means and what to ask your dentist before signing. Without selling you any treatment.',
        enlace: `${base}/en/blog/${destino.en}`,
        boton: 'Read the article →',
      };
}

/**
 * Picks a category-specific CTA for the end of each blog post.
 * Falls back to the generic "Agenda tu Cita" when category isn't mapped.
 */
function getCategoryCTA(
  category: string,
  categoryEn: string,
  isEs: boolean,
): { headline: string; subline: string; buttonText: string; href: string } {
  const cat = category || categoryEn;
  const map: Record<string, { headline: string; subline: string; buttonText: string; href: string }> = {
    Implantes: {
      headline: isEs ? '¿Listo para tus implantes?' : 'Ready for your implants?',
      subline: isEs
        ? 'Titanio, zirconio, cigomáticos y subperiósticos. Especialista 17 años, 3.500+ pacientes.'
        : 'Titanium, zirconia, zygomatic and subperiosteal implants. 17 yrs specialist, 3,500+ patients.',
      buttonText: isEs ? 'Ver Implantes Dentales →' : 'See Dental Implants →',
      href: '/servicios/implantes-dentales',
    },
    Estética: {
      headline: isEs ? 'Transforma tu sonrisa' : 'Transform your smile',
      subline: isEs
        ? 'Diseño de sonrisa por arco de 10 dientes desde $4.800 USD en resina de laboratorio y desde $6.500 en cerámica.'
        : 'Smile design per arch of 10 teeth from $4,800 USD in lab-made composite and from $6,500 in ceramic.',
      buttonText: isEs ? 'Ver Diseño de Sonrisa →' : 'See Smile Design →',
      href: '/servicios/diseno-de-sonrisa',
    },
    Aesthetics: {
      headline: isEs ? 'Transforma tu sonrisa' : 'Transform your smile',
      subline: isEs
        ? 'Diseño de sonrisa por arco de 10 dientes desde $4.800 USD en resina de laboratorio y desde $6.500 en cerámica.'
        : 'Smile design per arch of 10 teeth from $4,800 USD in lab-made composite and from $6,500 in ceramic.',
      buttonText: isEs ? 'Ver Diseño de Sonrisa →' : 'See Smile Design →',
      href: '/servicios/diseno-de-sonrisa',
    },
    Rehabilitación: {
      headline: isEs ? 'Recupera tu sonrisa completa' : 'Recover your full smile',
      subline: isEs
        ? 'Rehabilitación oral completa con All-on-4 desde $10.000 USD. Sonrisa fija en 24h.'
        : 'Full mouth rehabilitation with All-on-4 from $10,000 USD. Fixed smile in 24h.',
      buttonText: isEs ? 'Ver All-on-4 Medellín →' : 'See All-on-4 Medellín →',
      href: '/all-on-4-medellin',
    },
    Rehabilitation: {
      headline: isEs ? 'Recupera tu sonrisa completa' : 'Recover your full smile',
      subline: isEs
        ? 'Rehabilitación oral completa con All-on-4 desde $10.000 USD. Sonrisa fija en 24h.'
        : 'Full mouth rehabilitation with All-on-4 from $10,000 USD. Fixed smile in 24h.',
      buttonText: isEs ? 'Ver All-on-4 Medellín →' : 'See All-on-4 Medellín →',
      href: '/all-on-4-medellin',
    },
    'Turismo Dental': {
      headline: isEs ? '¿Ya decidiste viajar a Medellín?' : 'Ready to travel to Medellín?',
      subline: isEs
        ? 'Ahorra hasta 65% vs USA. Plan completo en USD antes de comprar vuelos.'
        : 'Save up to 65% vs USA. Full USD quote before booking flights.',
      buttonText: isEs ? 'Ver Turismo Dental →' : 'See Dental Tourism →',
      href: '/dental-tourism-colombia',
    },
    'Dental Tourism': {
      headline: isEs ? '¿Ya decidiste viajar a Medellín?' : 'Ready to travel to Medellín?',
      subline: isEs
        ? 'Ahorra hasta 65% vs USA. Plan completo en USD antes de comprar vuelos.'
        : 'Save up to 65% vs USA. Full USD quote before booking flights.',
      buttonText: isEs ? 'Ver Turismo Dental →' : 'See Dental Tourism →',
      href: '/dental-tourism-colombia',
    },
    Costos: {
      headline: isEs ? 'Calcula tu ahorro exacto' : 'Calculate your exact savings',
      subline: isEs
        ? 'Precios oficiales en USD. Ahorra $10K-$40K vs USA en implantes y All-on-4.'
        : 'Official USD pricing. Save $10K-$40K vs USA on implants and All-on-4.',
      buttonText: isEs ? 'Ver Calculadora de Ahorros →' : 'See Savings Calculator →',
      href: '/dental-implants-for-us-patients',
    },
    Costs: {
      headline: isEs ? 'Calcula tu ahorro exacto' : 'Calculate your exact savings',
      subline: isEs
        ? 'Precios oficiales en USD. Ahorra $10K-$40K vs USA en implantes y All-on-4.'
        : 'Official USD pricing. Save $10K-$40K vs USA on implants and All-on-4.',
      buttonText: isEs ? 'Ver Calculadora de Ahorros →' : 'See Savings Calculator →',
      href: '/dental-implants-for-us-patients',
    },
    Materiales: {
      headline: isEs ? 'Premium para tu sonrisa' : 'Premium for your smile',
      subline: isEs
        ? 'Coronas zirconio y carillas premium desde $550 USD. Laboratorio premium.'
        : 'Zirconia crowns and premium veneers from $550 USD. Premium lab.',
      buttonText: isEs ? 'Ver Coronas y Carillas →' : 'See Crowns & Veneers →',
      href: '/coronas-zirconio-carillas',
    },
    Materials: {
      headline: isEs ? 'Premium para tu sonrisa' : 'Premium for your smile',
      subline: isEs
        ? 'Coronas zirconio y carillas premium desde $550 USD. Laboratorio premium.'
        : 'Zirconia crowns and premium veneers from $550 USD. Premium lab.',
      buttonText: isEs ? 'Ver Coronas y Carillas →' : 'See Crowns & Veneers →',
      href: '/coronas-zirconio-carillas',
    },
  };
  return (
    map[cat] || {
      headline: isEs ? '¿Tienes preguntas sobre este tema?' : 'Do you have questions about this topic?',
      subline: isEs
        ? 'Agenda una consulta de diagnóstico y resolveremos todas tus dudas de manera personalizada.'
        : 'Book a diagnostic consultation and we will resolve all your questions in a personalized way.',
      buttonText: isEs ? 'Agenda tu Cita' : 'Book Appointment',
      href: '/contacto',
    }
  );
}

export async function generateStaticParams() {
  return blogPosts.filter((post) => !post.redirected).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const title = isEs ? post.title : post.titleEn;
  // `seoTitle`/`seoTitleEn` (opcional) = <title> corto ≤60 chars SOLO para el tag
  // <title>; el H1 y las tarjetas del blog siguen usando `title` completo.
  const seoTitle = (isEs ? post.seoTitle : post.seoTitleEn) ?? title;
  // `seoDescription` (opcional) = meta description corta para el snippet de Google.
  // El `excerpt` sigue siendo lo que ven las tarjetas del listado del blog.
  const description =
    (isEs ? post.seoDescription : post.seoDescriptionEn) ?? (isEs ? post.excerpt : post.excerptEn);
  const url = isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`;

  return {
    title: seoTitle,
    description,
    keywords: post.keywords,
    alternates: {
      canonical: url,
      languages: {
        es: `${BASE}/blog/${slug}`,
        en: `${BASE}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: `${title} | Dra. Carolina Macareno`,
      description,
      url,
      type: 'article',
      publishedTime: post.publishDate,
      authors: ['Dra. Carolina Macareno'],
      images: [{ url: `${BASE}/og-image.webp`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  const title = isEs ? post.title : post.titleEn;
  const content = isEs ? post.content : post.contentEn;
  const excerpt = isEs ? post.excerpt : post.excerptEn;
  // Una sola fuente para el schema y para el bloque visible, así nunca se
  // desincronizan: Google retira el rich result si el structured data declara
  // preguntas que no están en la página, o que están en otro idioma.
  const localeFaqs = (isEs ? post.faqs : post.faqsEn) ?? [];

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: 'Blog', url: isEs ? `${BASE}/blog` : `${BASE}/en/blog` },
    { name: title, url: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}` },
  ];

  const relatedPosts = getSmartRelatedPosts(post);
  const cta = getCategoryCTA(post.category, post.categoryEn, isEs);
  const puente = getPuenteLLC(post.category, post.categoryEn, isEs);

  // Botón CTA de WhatsApp: enruta al CRM (GHL) con un mensaje pre-cargado que
  // identifica que el lead viene de la web y el tema del artículo. Cada post puede
  // definir su propio mensaje (`whatsappMessage`/`whatsappMessageEn`); si falta, se
  // usa un genérico. Alimenta el evento `whatsapp_click` en GA4.
  const waText = isEs
    ? post.whatsappMessage ??
      'Hola, vengo de la página web. Me gustaría recibir más información y resolver mis dudas.'
    : post.whatsappMessageEn ??
      'Hello, I am coming from your website. I would like more information.';

  return (
    <>
      <SchemaOrg
        schema={[
          articleSchema({
            title,
            description: excerpt,
            url: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`,
            publishDate: post.publishDate,
            lastModified: post.lastModified,
          }),
          breadcrumbSchema(breadcrumbs),
          // FAQPage schema por idioma. Google exige que el structured data y las preguntas
          // visibles estén en el mismo idioma que la página, así que cada locale usa su
          // propia lista: ES lee post.faqs y EN lee post.faqsEn. Hasta agosto de 2026 esto
          // estaba capado a español y ninguna página en inglés era elegible para el rich
          // result, que es el formato del que más citan los buscadores con IA.
          // Si un post no tiene faqsEn, su versión en inglés simplemente no emite schema.
          // all-on-4-colombia surfaces its own FAQs inside its content HTML, so it keeps the
          // schema but is skipped in the visible block.
          ...(localeFaqs.length > 0 ? [faqSchema(localeFaqs)] : []),
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-[#FCFBF9] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#77726A] mb-6">
              <Link href={localePath('/')} className="hover:text-[#8A6B2E] transition-colors">Home</Link>
              <span>/</span>
              <Link href={localePath('/blog')} className="hover:text-[#8A6B2E] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#8A6B2E] truncate">{title.substring(0, 40)}...</span>
            </div>

            {/* Category */}
            <span className="inline-block bg-[#C9A461]/10 border border-[#C9A461]/30 text-[#8A6B2E] text-xs px-3 py-1 rounded mb-4">
              {isEs ? post.category : post.categoryEn}
            </span>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211E18] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-[#77726A]">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-[#C9A461]/40 flex-shrink-0">
                  <Image
                    src="/images/dra-carolina-perfil.webp"
                    alt="Dra. Carolina Macareno"
                    fill
                    sizes="32px"
                    className="object-cover object-top"
                  />
                </div>
                <span>Dra. Carolina Macareno</span>
              </div>
              <span>·</span>
              <span>
                {new Date(post.publishDate).toLocaleDateString(isEs ? 'es-CO' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>·</span>
              <span>{post.readTime} {isEs ? 'min de lectura' : 'min read'}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Excerpt */}
          <AnimatedSection>
            <div className="border-l-4 border-[#C9A461] pl-6 mb-10">
              <p className="text-[#5A5449] text-lg italic leading-relaxed">{excerpt}</p>
            </div>
          </AnimatedSection>

          {/* Article body */}
          <AnimatedSection>
            <div
              className="prose-dental"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </AnimatedSection>

          {/* FAQ visible: sostiene el schema de arriba, porque Google solo concede el rich
              result si las preguntas están de verdad en la página y en su idioma.
              all-on-4-colombia ya las renderiza dentro de su HTML, así que se omite aquí. */}
          {/* El slug real es all-on-4-colombia-vs-usa-guia-2025. La comparación anterior
              contra 'all-on-4-colombia' nunca coincidía, así que ese post renderizaba sus
              FAQ dos veces: las de su propio HTML y las del array. Corregido 2-ago-2026. */}
          {localeFaqs.length > 0 && post.slug !== 'all-on-4-colombia-vs-usa-guia-2025' && (
            <AnimatedSection className="mt-12">
              <h2
                className="text-2xl font-bold text-[#211E18] mb-6"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-4">
                {localeFaqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-[#E8E3DA] rounded-lg p-6">
                    <h3 className="font-semibold text-base mb-3 flex items-start gap-2 text-[#E5B866]">
                      <span className="shrink-0 mt-0.5 text-[#8A6B2E]">▸</span>
                      {faq.question}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5A5449]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Author box */}
          <AnimatedSection className="mt-12">
            <div className="bg-white border border-[#E8E3DA] rounded-lg p-6 flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#C9A461] flex-shrink-0">
                <Image
                  src="/images/dra-carolina-perfil.webp"
                  alt="Dra. Carolina Macareno"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-[#211E18] font-semibold mb-1">Dra. Carolina Macareno</p>
                <p className="text-[#8A6B2E] text-sm mb-2">Rehabilitadora Oral · Especialista en Implantes</p>
                <p className="text-[#77726A] text-sm leading-relaxed">
                  {isEs
                    ? 'Odontóloga especialista en Rehabilitación Oral por la Universidad CES. Más de 17 años transformando sonrisas en Medellín, Colombia.'
                    : 'Oral Rehabilitation specialist from Universidad CES. Over 17 years transforming smiles in Medellín, Colombia.'}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Category-specific CTA, drives readers to the matching landing page */}
          <AnimatedSection className="mt-10">
            <div className="bg-gradient-to-r from-[#C9A461]/10 to-[#C9A461]/5 border border-[#C9A461]/20 rounded-lg p-7 text-center">
              <h3
                className="text-xl font-bold text-[#211E18] mb-3"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {cta.headline}
              </h3>
              <p className="text-[#77726A] mb-5 text-sm">{cta.subline}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                {/* WhatsApp, primario, enruta al CRM con mensaje pre-cargado */}
                <WhatsAppLink
                  message={waText}
                  locale={locale as 'es' | 'en'}
                  trackingLabel="blog_post_cta"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-8 py-3 rounded transition-all duration-200 hover:scale-105 text-sm tracking-wider uppercase"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.938l6.29-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.012-1.374l-.36-.213-3.733.978.995-3.629-.234-.373A9.778 9.778 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                  </svg>
                  {isEs ? 'Escribir por WhatsApp' : 'Message on WhatsApp'}
                </WhatsAppLink>
                {/* Enlace a la página de servicio, secundario */}
                <Link
                  href={localePath(cta.href)}
                  className="inline-flex items-center justify-center border border-[#C9A461] text-[#8A6B2E] hover:bg-[#C9A461]/10 font-bold px-8 py-3 rounded transition-all duration-200 hover:scale-105 text-sm tracking-wider uppercase"
                >
                  {cta.buttonText}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </article>

      {/* Puente a la LLC. Solo en las categorías donde el lector suele tener una cotización de otro país */}
      {puente && (
        <section className="py-12 bg-[#0A2540]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{puente.titulo}</h2>
            <p className="text-[#C9D4E3] leading-relaxed mb-7">{puente.texto}</p>
            <a
              href={puente.enlace}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center border border-[#C9A461] text-[#E5B866] hover:bg-[#C9A461]/10 font-bold px-8 py-3 rounded transition-all duration-200 text-sm tracking-wider uppercase"
            >
              {puente.boton}
            </a>
          </div>
        </section>
      )}

      {/* Related Services, links to commercial landings mapped by category */}
      <RelatedServices category={post.category} categoryEn={post.categoryEn} locale={locale} />

      {/* Related posts, smart ranker: category + keywords + recency + title overlap */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#FCFBF9] border-t border-[#E8E3DA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-[#211E18] mb-8"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Artículos relacionados' : 'Related articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={localePath(`/blog/${related.slug}`)}
                  className="group bg-white border border-[#E8E3DA] rounded-lg p-5 hover:border-[#C9A461]/40 transition-all"
                >
                  <span className="text-[#8A6B2E] text-xs">{isEs ? related.category : related.categoryEn}</span>
                  <h3
                    className="text-[#211E18] font-semibold mt-2 mb-2 text-sm leading-snug group-hover:text-[#8A6B2E] transition-colors line-clamp-2"
                    style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    {isEs ? related.title : related.titleEn}
                  </h3>
                  <p className="text-[#77726A] text-xs line-clamp-2">
                    {isEs ? related.excerpt : related.excerptEn}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA de costos para artículos de turismo dental */}
      {(post.slug.includes('turismo-dental') || post.slug.includes('dental-tourism') || post.slug.includes('dental-implants')) && (
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm mb-2" style={{ color: '#77726A' }}>
              {isEs ? '¿Ya decidiste que Colombia es la opción?' : 'Ready to take the next step?'}
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#211E18' }}>
              {isEs ? 'Ve exactamente cuánto ahorras, implantes, vuelo y hotel incluidos' : 'See exactly how much you save, implants, flight and hotel included'}
            </h2>
            <Link
              href={isEs ? '/dental-implants-for-us-patients' : '/en/dental-implants-for-us-patients'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ backgroundColor: '#C9A461', color: '#0D1321' }}
            >
              {isEs ? 'Ver costos de tratamientos →' : 'See treatment costs →'}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
