import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, getAllCategories } from '@/lib/blog-posts';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { breadcrumbSchema } from '@/components/SchemaOrg';

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
      ? 'Blog | Dra. Carolina Macareno'
      : 'Blog | Dr. Carolina Macareno',
    description: isEs
      ? 'Artículos especializados sobre implantes dentales, rehabilitación oral, diseño de sonrisa y estética dental. Información actualizada por la Dra. Carolina Macareno.'
      : 'Specialized articles on dental implants, oral rehabilitation, smile design and dental aesthetics. Updated information by Dr. Carolina Macareno.',
    alternates: {
      canonical: isEs ? `${BASE}/blog` : `${BASE}/en/blog`,
      languages: { es: `${BASE}/blog`, en: `${BASE}/en/blog` },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('blog_page');
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: 'Blog', url: isEs ? `${BASE}/blog` : `${BASE}/en/blog` },
  ];

  const categories = getAllCategories();

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema(breadcrumbs)} />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-4"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t('titulo')}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mb-4" />
            <p className="text-[#9CA3AF] text-lg">{t('subtitulo')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-[#0D1321] border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-4 py-1.5 rounded border border-[#C9A461] bg-[#C9A461]/10 text-[#C9A461] text-sm">
              {t('todas')}
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded border border-[#1F2937] text-[#9CA3AF] text-sm hover:border-[#C9A461]/40 hover:text-[#F5F5F0] cursor-pointer transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-[#070B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={(i % 3) * 0.1}>
                <Link
                  href={localePath(`/blog/${post.slug}`)}
                  className="group block bg-[#0D1321] border border-[#1F2937] rounded-lg overflow-hidden hover:border-[#C9A461]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A461]/5 h-full"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-[#111827] to-[#1A5276]/20 flex items-center justify-center relative overflow-hidden">
                    <span className="text-[#C9A461]/20 text-6xl font-bold" style={{ fontFamily: 'serif' }}>
                      {post.category.charAt(0)}
                    </span>
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#C9A461]/20 border border-[#C9A461]/30 text-[#C9A461] text-xs px-2.5 py-1 rounded">
                        {isEs ? post.category : post.categoryEn}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mb-3">
                      <span>{new Date(post.publishDate).toLocaleDateString(isEs ? 'es-CO' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <span>·</span>
                      <span>{post.readTime} {t('minutos')}</span>
                    </div>
                    <h2
                      className="text-[#F5F5F0] font-semibold text-base leading-snug mb-3 group-hover:text-[#C9A461] transition-colors line-clamp-2"
                      style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                    >
                      {isEs ? post.title : post.titleEn}
                    </h2>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-3">
                      {isEs ? post.excerpt : post.excerptEn}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-[#C9A461] text-sm font-medium">
                      {t('leerMas')}
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
