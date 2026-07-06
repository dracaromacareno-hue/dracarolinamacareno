import Link from 'next/link';

/**
 * Maps each blog category to 3 commercial landings that should receive
 * internal links from that blog. This file is the single source of truth
 * for blog → service linking. Updating the map updates every blog at once.
 *
 * Why this matters for SEO:
 * - Distributes authority from content pages (blogs) to money pages (landings)
 * - Reduces bounce rate by giving readers next-step actions
 * - Helps Google understand topical clusters (blog topic + matching service)
 *
 * The mapping was approved by Dra. Carolina Macareno on May 25, 2026.
 */
const CATEGORY_TO_SERVICES: Record<string, ServiceLink[]> = {
  // Implantes, strongest commercial category
  Implantes: [
    { href: '/servicios/implantes-dentales', titleEs: 'Implantes Dentales', titleEn: 'Dental Implants', priceEs: 'desde $1.200 USD', priceEn: 'from $1,200 USD' },
    { href: '/all-on-4-medellin', titleEs: 'All-on-4 Medellín', titleEn: 'All-on-4 Medellín', priceEs: 'desde $12.000 USD', priceEn: 'from $12,000 USD' },
    { href: '/dental-tourism-colombia', titleEs: 'Turismo Dental Colombia', titleEn: 'Dental Tourism Colombia', priceEs: 'ahorra 65% vs USA', priceEn: 'save 65% vs USA' },
  ],
  // Estética
  Estética: [
    { href: '/servicios/diseno-de-sonrisa', titleEs: 'Diseño de Sonrisa', titleEn: 'Smile Design', priceEs: '10 carillas desde $5.500', priceEn: '10 veneers from $5,500' },
    { href: '/coronas-zirconio-carillas', titleEs: 'Carillas y Coronas Zirconio', titleEn: 'Veneers & Zirconia Crowns', priceEs: 'desde $550 USD', priceEn: 'from $550 USD' },
    { href: '/servicios/estetica-dental', titleEs: 'Estética Dental Avanzada', titleEn: 'Advanced Dental Aesthetics', priceEs: 'planes personalizados', priceEn: 'custom plans' },
  ],
  // Rehabilitación
  Rehabilitación: [
    { href: '/servicios/rehabilitacion-oral-completa', titleEs: 'Rehabilitación Oral Completa', titleEn: 'Full Mouth Rehabilitation', priceEs: 'planes desde $8.000', priceEn: 'plans from $8,000' },
    { href: '/all-on-4-medellin', titleEs: 'All-on-4 Medellín', titleEn: 'All-on-4 Medellín', priceEs: 'desde $12.000 USD', priceEn: 'from $12,000 USD' },
    { href: '/servicios/protesis-fija', titleEs: 'Prótesis Fija sobre Implantes', titleEn: 'Fixed Prosthetics on Implants', priceEs: 'desde $3.000 USD', priceEn: 'from $3,000 USD' },
  ],
  // Turismo Dental
  'Turismo Dental': [
    { href: '/dental-tourism-colombia', titleEs: 'Turismo Dental en Medellín', titleEn: 'Dental Tourism in Medellín', priceEs: 'ahorra 65% vs USA', priceEn: 'save 65% vs USA' },
    { href: '/dental-implants-for-us-patients', titleEs: 'Implantes para Pacientes USA', titleEn: 'Dental Implants for US Patients', priceEs: 'ahorra $10K-$40K', priceEn: 'save $10K-$40K' },
    { href: '/all-on-4-medellin', titleEs: 'All-on-4 Medellín', titleEn: 'All-on-4 Medellín', priceEs: 'desde $12.000 USD', priceEn: 'from $12,000 USD' },
  ],
  // Materiales
  Materiales: [
    { href: '/coronas-zirconio-carillas', titleEs: 'Coronas Zirconio y Carillas', titleEn: 'Zirconia Crowns & Veneers', priceEs: 'desde $550 USD', priceEn: 'from $550 USD' },
    { href: '/servicios/diseno-de-sonrisa', titleEs: 'Diseño de Sonrisa', titleEn: 'Smile Design', priceEs: 'planes personalizados', priceEn: 'custom plans' },
    { href: '/servicios/implantes-dentales', titleEs: 'Implantes Dentales', titleEn: 'Dental Implants', priceEs: 'desde $1.200 USD', priceEn: 'from $1,200 USD' },
  ],
  // Costos
  Costos: [
    { href: '/dental-tourism-colombia', titleEs: 'Turismo Dental Colombia', titleEn: 'Dental Tourism Colombia', priceEs: 'ahorra hasta 65%', priceEn: 'save up to 65%' },
    { href: '/all-on-4-medellin', titleEs: 'All-on-4 Medellín', titleEn: 'All-on-4 Medellín', priceEs: 'desde $12.000 USD', priceEn: 'from $12,000 USD' },
    { href: '/dental-implants-for-us-patients', titleEs: 'Implantes para Pacientes USA', titleEn: 'Dental Implants for US Patients', priceEs: 'ahorra $10K-$40K', priceEn: 'save $10K-$40K' },
  ],
  // Cuidado
  Cuidado: [
    { href: '/servicios/implantes-dentales', titleEs: 'Implantes Dentales', titleEn: 'Dental Implants', priceEs: 'titanio y zirconio', priceEn: 'titanium & zirconia' },
    { href: '/servicios/consulta-diagnostico', titleEs: 'Protocolo Sonrisa 360°', titleEn: 'Smile 360° Protocol', priceEs: 'evaluación integral', priceEn: 'complete evaluation' },
    { href: '/all-on-4-medellin', titleEs: 'All-on-4 Medellín', titleEn: 'All-on-4 Medellín', priceEs: 'desde $12.000 USD', priceEn: 'from $12,000 USD' },
  ],
  // Guías
  Guías: [
    { href: '/servicios/implantes-dentales', titleEs: 'Implantes Dentales', titleEn: 'Dental Implants', priceEs: 'desde $1.200 USD', priceEn: 'from $1,200 USD' },
    { href: '/servicios/consulta-diagnostico', titleEs: 'Consulta de Diagnóstico', titleEn: 'Diagnostic Consultation', priceEs: 'plan personalizado', priceEn: 'personalized plan' },
    { href: '/dental-tourism-colombia', titleEs: 'Turismo Dental Colombia', titleEn: 'Dental Tourism Colombia', priceEs: 'ahorra 65% vs USA', priceEn: 'save 65% vs USA' },
  ],
  // Salud Oral
  'Salud Oral': [
    { href: '/servicios/rehabilitacion-oral-completa', titleEs: 'Rehabilitación Oral Completa', titleEn: 'Full Mouth Rehabilitation', priceEs: 'planes integrales', priceEn: 'comprehensive plans' },
    { href: '/servicios/consulta-diagnostico', titleEs: 'Consulta de Diagnóstico', titleEn: 'Diagnostic Consultation', priceEs: 'evaluación integral', priceEn: 'complete evaluation' },
    { href: '/servicios/periodoncia', titleEs: 'Periodoncia', titleEn: 'Periodontics', priceEs: 'salud de encías', priceEn: 'gum health' },
  ],
  // Psicología Dental
  'Psicología Dental': [
    { href: '/servicios/diseno-de-sonrisa', titleEs: 'Diseño de Sonrisa', titleEn: 'Smile Design', priceEs: 'transformación estética', priceEn: 'aesthetic transformation' },
    { href: '/servicios/rehabilitacion-oral-completa', titleEs: 'Rehabilitación Oral Completa', titleEn: 'Full Mouth Rehabilitation', priceEs: 'recuperación funcional', priceEn: 'functional recovery' },
    { href: '/dental-tourism-colombia', titleEs: 'Turismo Dental Colombia', titleEn: 'Dental Tourism Colombia', priceEs: 'plan completo en USD', priceEn: 'complete USD plan' },
  ],
};

// Same map but using English category names, needed because blogs have
// both `category` (Spanish) and `categoryEn` (English) and the resolver
// falls back to the EN version when the user is browsing /en/.
const CATEGORY_EN_TO_SERVICES: Record<string, ServiceLink[]> = {
  Implants: CATEGORY_TO_SERVICES.Implantes,
  Aesthetics: CATEGORY_TO_SERVICES.Estética,
  Rehabilitation: CATEGORY_TO_SERVICES.Rehabilitación,
  'Dental Tourism': CATEGORY_TO_SERVICES['Turismo Dental'],
  Materials: CATEGORY_TO_SERVICES.Materiales,
  Costs: CATEGORY_TO_SERVICES.Costos,
  Care: CATEGORY_TO_SERVICES.Cuidado,
  Guides: CATEGORY_TO_SERVICES.Guías,
  'Oral Health': CATEGORY_TO_SERVICES['Salud Oral'],
  'Dental Psychology': CATEGORY_TO_SERVICES['Psicología Dental'],
};

interface ServiceLink {
  href: string;
  titleEs: string;
  titleEn: string;
  priceEs: string;
  priceEn: string;
}

interface RelatedServicesProps {
  category: string;
  categoryEn: string;
  locale: string;
}

export default function RelatedServices({ category, categoryEn, locale }: RelatedServicesProps) {
  const isEs = locale === 'es';
  const localePath = (path: string) => (isEs ? path : `/en${path}`);

  // Resolve services using the current locale's category name first,
  // then fall back to the other locale's map if not found.
  const services =
    CATEGORY_TO_SERVICES[category] ||
    CATEGORY_EN_TO_SERVICES[categoryEn] ||
    // Default fallback: most universally relevant landings
    CATEGORY_TO_SERVICES.Implantes;

  return (
    <section className="py-16 bg-[#0D1321] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#C9A461]/10 border border-[#C9A461]/30 text-[#C9A461] text-xs px-3 py-1 rounded mb-3 uppercase tracking-wider">
            {isEs ? 'Tratamientos relacionados' : 'Related treatments'}
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#F5F5F0]"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {isEs ? '¿Listo para dar el siguiente paso?' : 'Ready to take the next step?'}
          </h2>
          <p className="text-[#9CA3AF] text-sm mt-2 max-w-xl mx-auto">
            {isEs
              ? 'Explora los tratamientos relacionados con este artículo, con precios oficiales y planes personalizados.'
              : 'Explore the treatments related to this article, with official pricing and personalized plans.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.href}
              href={localePath(service.href)}
              className="group bg-gradient-to-br from-[#C9A461]/10 to-[#C9A461]/5 border border-[#C9A461]/30 rounded-lg p-6 hover:border-[#C9A461] hover:from-[#C9A461]/15 hover:to-[#C9A461]/10 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[#C9A461] text-xs uppercase tracking-wider">
                  {isEs ? 'Tratamiento' : 'Treatment'}
                </span>
                <span className="text-[#C9A461]/70 text-xs italic">
                  {isEs ? service.priceEs : service.priceEn}
                </span>
              </div>
              <h3
                className="text-[#F5F5F0] text-lg font-bold mb-2 group-hover:text-[#E5B866] transition-colors"
                style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {isEs ? service.titleEs : service.titleEn}
              </h3>
              <div className="flex items-center gap-1 text-[#C9A461] text-sm mt-3 group-hover:gap-2 transition-all">
                <span>{isEs ? 'Ver tratamiento' : 'See treatment'}</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
