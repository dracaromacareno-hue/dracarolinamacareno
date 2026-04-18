import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, getBlogPost } from '@/lib/blog-posts';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { articleSchema, breadcrumbSchema } from '@/components/SchemaOrg';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
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
  const description = isEs ? post.excerpt : post.excerptEn;
  const url = isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`;

  return {
    title: `${title} | Dra. Carolina Macareno`,
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
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630 }],
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

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: 'Blog', url: isEs ? `${BASE}/blog` : `${BASE}/en/blog` },
    { name: title, url: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}` },
  ];

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && (p.category === post.category || p.categoryEn === post.categoryEn))
    .slice(0, 3);

  return (
    <>
      <SchemaOrg
        schema={[
          articleSchema({
            title,
            description: excerpt,
            url: isEs ? `${BASE}/blog/${slug}` : `${BASE}/en/blog/${slug}`,
            publishDate: post.publishDate,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-6">
              <Link href={localePath('/')} className="hover:text-[#C9A461] transition-colors">Home</Link>
              <span>/</span>
              <Link href={localePath('/blog')} className="hover:text-[#C9A461] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#C9A461] truncate">{title.substring(0, 40)}...</span>
            </div>

            {/* Category */}
            <span className="inline-block bg-[#C9A461]/10 border border-[#C9A461]/30 text-[#C9A461] text-xs px-3 py-1 rounded mb-4">
              {isEs ? post.category : post.categoryEn}
            </span>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F0] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A461] to-[#A07830] flex items-center justify-center text-[#070B14] font-bold text-xs">
                  CM
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
      <article className="py-12 bg-[#0D1321]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Excerpt */}
          <AnimatedSection>
            <div className="border-l-4 border-[#C9A461] pl-6 mb-10">
              <p className="text-[#D1D5DB] text-lg italic leading-relaxed">{excerpt}</p>
            </div>
          </AnimatedSection>

          {/* Article body */}
          <AnimatedSection>
            <div
              className="prose-dental"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </AnimatedSection>

          {/* Author box */}
          <AnimatedSection className="mt-12">
            <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6 flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A461] to-[#A07830] flex items-center justify-center text-[#070B14] font-bold text-xl flex-shrink-0">
                CM
              </div>
              <div>
                <p className="text-[#F5F5F0] font-semibold mb-1">Dra. Carolina Macareno</p>
                <p className="text-[#C9A461] text-sm mb-2">Rehabilitadora Oral · Especialista en Implantes</p>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {isEs
                    ? 'Odontóloga especialista en Rehabilitación Oral por la Universidad CES. Más de 17 años transformando sonrisas en Medellín, Colombia.'
                    : 'Oral Rehabilitation specialist from Universidad CES. Over 17 years transforming smiles in Medellín, Colombia.'}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="mt-10">
            <div className="bg-gradient-to-r from-[#C9A461]/10 to-[#C9A461]/5 border border-[#C9A461]/20 rounded-lg p-7 text-center">
              <h3
                className="text-xl font-bold text-[#F5F5F0] mb-3"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {isEs ? '¿Tienes preguntas sobre este tema?' : 'Do you have questions about this topic?'}
              </h3>
              <p className="text-[#9CA3AF] mb-5 text-sm">
                {isEs
                  ? 'Agenda una consulta de diagnóstico y resolveremos todas tus dudas de manera personalizada.'
                  : 'Book a diagnostic consultation and we will resolve all your questions in a personalized way.'}
              </p>
              <Link
                href={localePath('/contacto')}
                className="inline-block bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-8 py-3 rounded transition-all duration-200 hover:scale-105 text-sm tracking-wider uppercase"
              >
                {isEs ? 'Agenda tu Cita' : 'Book Appointment'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#070B14] border-t border-[#1F2937]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-[#F5F5F0] mb-8"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Artículos relacionados' : 'Related articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={localePath(`/blog/${related.slug}`)}
                  className="group bg-[#0D1321] border border-[#1F2937] rounded-lg p-5 hover:border-[#C9A461]/40 transition-all"
                >
                  <span className="text-[#C9A461] text-xs">{isEs ? related.category : related.categoryEn}</span>
                  <h3
                    className="text-[#F5F5F0] font-semibold mt-2 mb-2 text-sm leading-snug group-hover:text-[#C9A461] transition-colors line-clamp-2"
                    style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    {isEs ? related.title : related.titleEn}
                  </h3>
                  <p className="text-[#9CA3AF] text-xs line-clamp-2">
                    {isEs ? related.excerpt : related.excerptEn}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
