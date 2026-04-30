import React from 'react';
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
    openGraph: {
      title: isEs ? 'Blog — Dra. Carolina Macareno' : 'Blog — Dr. Carolina Macareno',
      description: isEs
        ? 'Artículos especializados sobre implantes, rehabilitación oral y diseño de sonrisa por la Dra. Carolina Macareno.'
        : 'Specialized articles on implants, oral rehabilitation and smile design by Dr. Carolina Macareno.',
      url: isEs ? `${BASE}/blog` : `${BASE}/en/blog`,
      siteName: 'Dra. Carolina Macareno',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630, alt: 'Blog Dra. Carolina Macareno' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? 'Blog — Dra. Carolina Macareno' : 'Blog — Dr. Carolina Macareno',
      description: isEs
        ? 'Artículos especializados en odontología por la Dra. Carolina Macareno.'
        : 'Specialized dentistry articles by Dr. Carolina Macareno.',
      images: [`${BASE}/og-image.jpg`],
    },
  };
}

function categoryVisual(category: string): { bg: string; icon: React.ReactNode } {
  const map: Record<string, { bg: string; icon: React.ReactNode }> = {
    'Implantes': {
      bg: 'linear-gradient(135deg, #0f2027 0%, #1a3a5c 50%, #C9A461 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="7" r="3"/><path d="M12 10v12M10 19h4" strokeLinecap="round"/><path d="M8 7h8" strokeLinecap="round"/></svg>,
    },
    'Estética': {
      bg: 'linear-gradient(135deg, #1a0a2e 0%, #4a1942 50%, #C9A461 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 3 Q16 3 17 8 L17 16 Q16 21 12 21 Q8 21 7 16 L7 8 Q8 3 12 3Z"/><path d="M9 13 Q12 10 15 13" strokeLinecap="round"/><path d="M9 9h.01M15 9h.01" strokeLinecap="round"/></svg>,
    },
    'Rehabilitación': {
      bg: 'linear-gradient(135deg, #0d2137 0%, #0a4a4a 50%, #1a7a6a 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M3 9 Q12 3 21 9" strokeLinecap="round"/><path d="M5 9v9M8 8v10M12 7v11M16 8v10M19 9v9" strokeLinecap="round"/><path d="M3 18h18" strokeLinecap="round"/></svg>,
    },
    'Guías': {
      bg: 'linear-gradient(135deg, #1a1a3e 0%, #2d2d6b 50%, #4a4aaa 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round"/><path d="M9 12l2 2 4-4" strokeLinecap="round"/></svg>,
    },
    'Turismo Dental': {
      bg: 'linear-gradient(135deg, #0a2e1a 0%, #1a5c38 50%, #2a8a56 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9"/><path d="M12 3a15 15 0 010 18M3 12a15 15 0 0118 0" strokeLinecap="round"/></svg>,
    },
    'Materiales': {
      bg: 'linear-gradient(135deg, #1a1a2e 0%, #3a3a5c 50%, #5a5a8a 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 2l3.5 6.5L22 10l-5 5 1 7-6-3.5L6 22l1-7-5-5 6.5-1.5L12 2z"/></svg>,
    },
    'Costos': {
      bg: 'linear-gradient(135deg, #2e1a00 0%, #5c3a00 50%, #C9A461 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9"/><path d="M12 6v2m0 8v2M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 2.5-5 2.5-5 5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" strokeLinecap="round"/></svg>,
    },
    'Salud Oral': {
      bg: 'linear-gradient(135deg, #0a2e0a 0%, #1a5c1a 50%, #2a8a2a 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 3 Q16 3 17 8 L17 16 Q16 21 12 21 Q8 21 7 16 L7 8 Q8 3 12 3Z"/><path d="M9 10h6M9 14h4" strokeLinecap="round"/></svg>,
    },
    'Cuidado': {
      bg: 'linear-gradient(135deg, #2e0a2e 0%, #5c1a5c 50%, #8a2a8a 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    },
    'Psicología Dental': {
      bg: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a5c 50%, #2a5a8a 100%)',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="8" r="4"/><path d="M12 12c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" strokeLinecap="round"/><path d="M16 6c1-1 3 0 3 2s-2 3-3 3" strokeLinecap="round"/></svg>,
    },
  };
  return map[category] ?? {
    bg: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="8" r="4"/><path d="M12 12v8" strokeLinecap="round"/></svg>,
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
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
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
                  {/* Visual card per category */}
                  <div className="aspect-video relative overflow-hidden flex items-center justify-center"
                    style={{ background: categoryVisual(post.category).bg }}>
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                        <span className="text-white opacity-90">{categoryVisual(post.category).icon}</span>
                      </div>
                      <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
                        {isEs ? post.category : post.categoryEn}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/30 backdrop-blur-sm border border-white/10 text-white text-xs px-2.5 py-1 rounded">
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
