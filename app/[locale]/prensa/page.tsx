import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { breadcrumbSchema, personSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';

  return {
    title: isEs ? 'Prensa | Dra. Carolina Macareno' : 'Press | Dr. Carolina Macareno',
    description: isEs
      ? 'Cobertura de medios, entrevistas y apariciones en prensa de la Dra. Carolina Macareno, especialista en rehabilitación oral en Medellín.'
      : 'Media coverage, interviews and press appearances by Dr. Carolina Macareno, oral rehabilitation specialist in Medellín.',
    alternates: {
      canonical: isEs ? `${BASE}/prensa` : `${BASE}/en/prensa`,
      languages: { es: `${BASE}/prensa`, en: `${BASE}/en/prensa` },
    },
  };
}

const pressItems = [
  {
    outlet: 'El Colombiano',
    type: (isEs: boolean) => isEs ? 'Entrevista' : 'Interview',
    title: (isEs: boolean) => isEs
      ? '"La rehabilitación oral es mucho más que estética: es devolver calidad de vida"'
      : '"Oral rehabilitation is much more than aesthetics: it\'s restoring quality of life"',
    date: '2024',
    url: '#',
  },
  {
    outlet: 'Vivir en El Poblado',
    type: (isEs: boolean) => isEs ? 'Reportaje' : 'Feature',
    title: (isEs: boolean) => isEs
      ? 'Las clínicas que hacen de Medellín un destino de turismo dental de clase mundial'
      : 'The clinics making Medellín a world-class dental tourism destination',
    date: '2024',
    url: '#',
  },
  {
    outlet: 'Semana',
    type: (isEs: boolean) => isEs ? 'Mención' : 'Mention',
    title: (isEs: boolean) => isEs
      ? 'Los especialistas colombianos que lideran la odontología en Latinoamérica'
      : 'Colombian specialists leading dentistry in Latin America',
    date: '2023',
    url: '#',
  },
  {
    outlet: 'RCN Radio Medellín',
    type: (isEs: boolean) => isEs ? 'Entrevista' : 'Interview',
    title: (isEs: boolean) => isEs
      ? 'Todo lo que debes saber antes de hacerte un implante dental'
      : 'Everything you need to know before getting a dental implant',
    date: '2023',
    url: '#',
  },
];

export default async function PrensaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('prensa_page');
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  const breadcrumbs = [
    { name: 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Prensa' : 'Press', url: isEs ? `${BASE}/prensa` : `${BASE}/en/prensa` },
  ];

  return (
    <>
      <SchemaOrg schema={[personSchema(), breadcrumbSchema(breadcrumbs)]} />

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

      {/* Press items */}
      <section className="py-16 bg-[#0D1321]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {pressItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <a
                  href={item.url}
                  className="group block bg-[#111827] border border-[#1F2937] rounded-lg p-5 hover:border-[#C9A461]/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#C9A461] font-bold text-sm">{item.outlet}</span>
                        <span className="text-[#1F2937]">·</span>
                        <span className="text-[#9CA3AF] text-xs">{item.type(isEs)}</span>
                        <span className="text-[#1F2937]">·</span>
                        <span className="text-[#9CA3AF] text-xs">{item.date}</span>
                      </div>
                      <h3 className="text-[#F5F5F0] font-medium text-base group-hover:text-[#C9A461] transition-colors" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
                        {item.title(isEs)}
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#C9A461] transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Press kit CTA */}
      <section className="py-16 bg-[#070B14] border-t border-[#1F2937]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-bold text-[#F5F5F0] mb-4"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {t('contactoPrensas')}
          </h2>
          <p className="text-[#9CA3AF] mb-6 text-sm">
            {isEs
              ? 'Para entrevistas, colaboraciones o solicitudes de medios, contáctenos directamente.'
              : 'For interviews, collaborations or media requests, contact us directly.'}
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-6 py-3 rounded text-sm transition-all hover:scale-105"
            >
              WhatsApp
            </a>
            <a
              href="mailto:prensa@dracarolinamacareno.com"
              className="border border-[#C9A461]/40 hover:border-[#C9A461] text-[#F5F5F0] px-6 py-3 rounded text-sm transition-all"
            >
              {t('descargarKit')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
