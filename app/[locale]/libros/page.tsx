import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { bookSchema, breadcrumbSchema } from '@/components/SchemaOrg';

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
      ? 'El poder de tu sonrisa — el libro de la Dra. Carolina Macareno sobre rehabilitación oral, implantes y el impacto psicológico de una sonrisa saludable.'
      : 'The Power of Your Smile — Dr. Carolina Macareno\'s book about oral rehabilitation, implants and the psychological impact of a healthy smile.',
    alternates: {
      canonical: isEs ? `${BASE}/libros` : `${BASE}/en/libros`,
      languages: { es: `${BASE}/libros`, en: `${BASE}/en/libros` },
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

  return (
    <>
      <SchemaOrg schema={[bookSchema(), breadcrumbSchema(breadcrumbs)]} />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.06)_0%,_transparent_60%)]" />
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
              <div className="flex items-center justify-center p-10 bg-gradient-to-br from-[#0D1321] to-[#1A5276]/20 border-b md:border-b-0 md:border-r border-[#1F2937]">
                {/* Photo: libro-el-poder-de-tu-sonrisa.jpg */}
                <div className="w-40 h-56 relative">
                  <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-[#A07830] to-[#C9A461]" />
                  <div className="absolute left-4 top-0 right-0 h-full bg-gradient-to-br from-[#111827] via-[#1A5276] to-[#070B14] border border-[#C9A461]/20 flex flex-col items-center justify-between p-5">
                    <div className="text-center">
                      <div className="w-8 h-0.5 bg-[#C9A461]/60 mx-auto mb-2" />
                      <p className="text-[#C9A461]/70 text-xs tracking-widest">DRA.</p>
                      <p className="text-[#C9A461]/50 text-xs">CAROLINA M.</p>
                    </div>
                    <div className="text-center">
                      <h3
                        className="text-[#F5F5F0] font-bold text-sm leading-tight"
                        style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                      >
                        El poder
                      </h3>
                      <p className="text-[#C9A461] text-xs tracking-widest">de tu sonrisa</p>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-[#C9A461]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#C9A461]/20" />
                    </div>
                  </div>
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
                    {isEs ? 'El poder de tu sonrisa' : 'The Power of Your Smile'}
                  </h2>
                  <p className="text-[#C9A461] mb-4 italic" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
                    {isEs ? 'por Dra. Carolina Macareno' : 'by Dr. Carolina Macareno'}
                  </p>
                  <div className="w-10 h-0.5 bg-[#C9A461] mb-6" />
                  <p className="text-[#D1D5DB] leading-relaxed mb-4 text-sm">
                    {isEs
                      ? 'Un libro escrito desde la experiencia clínica real, para pacientes que quieren entender su salud oral y tomar decisiones informadas. La Dra. Carolina Macareno comparte 17 años de aprendizajes, casos clínicos transformadores y la ciencia detrás de los implantes dentales modernos.'
                      : 'A book written from real clinical experience, for patients who want to understand their oral health and make informed decisions. Dr. Carolina Macareno shares 17 years of learnings, transformative clinical cases and the science behind modern dental implants.'}
                  </p>
                  <p className="text-[#D1D5DB] leading-relaxed mb-6 text-sm">
                    {isEs
                      ? 'Más que técnica, es una guía humana sobre el impacto psicológico de una sonrisa sana, las preguntas correctas que hacerle a tu dentista, y por qué una rehabilitación oral de calidad puede cambiar tu vida.'
                      : 'More than technique, it is a human guide about the psychological impact of a healthy smile, the right questions to ask your dentist, and why quality oral rehabilitation can change your life.'}
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
