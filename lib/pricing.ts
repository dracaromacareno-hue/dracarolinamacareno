/**
 * Master pricing — single source of truth across the site.
 *
 * Reference values (Medellín + USA) come from /dental-tourism-colombia,
 * which is the public canonical page used in partnerships (CurePay,
 * Dental Partner) and consumer-facing comparison tables.
 *
 * Per-country averages for Canada, Panama, Dominican Republic, Spain
 * and Chile are derived from the May 2026 competitive analysis
 * (PROYECTOS-CAROLINA/web/seo/ANALISIS-COMPETITIVO-PRECIOS-2026-05-20.md).
 *
 * Used by:
 * - components/SavingsCalculator.tsx (interactive USA-vs-Medellín tool)
 * - public/llms.txt (AI search ground truth — needs manual re-sync when
 *   this file changes)
 * - Schemas (Offer / hasOfferCatalog) when applicable
 *
 * Pricing is in USD across the board because international patients
 * shop in USD regardless of their home currency.
 */

export type PricingRange = { min: number; max: number };

export type Country =
  | 'medellin'
  | 'usa'
  | 'canada'
  | 'panama'
  | 'rd'
  | 'puerto_rico'
  | 'spain'
  | 'chile';

export type ProcedureId =
  | 'single-implant'
  | 'all-on-4'
  | 'all-on-6'
  | 'zygomatic'
  | 'veneer-single'
  | 'smile-design'
  | 'crown'
  | 'full-mouth';

export type Procedure = {
  id: ProcedureId;
  label: { es: string; en: string };
  shortPitch: { es: string; en: string };
  prices: Partial<Record<Country, PricingRange>>;
};

export const PROCEDURES: Procedure[] = [
  {
    id: 'single-implant',
    label: {
      es: 'Implante unitario (titanio + corona)',
      en: 'Single dental implant (titanium + crown)',
    },
    shortPitch: {
      es: 'Implante Straumann / Neodent + corona definitiva incluida. Mismo titanio que se usa en USA y Europa.',
      en: 'Straumann / Neodent implant + final crown included. Same titanium used in the US and Europe.',
    },
    prices: {
      medellin: { min: 1200, max: 2000 },
      usa: { min: 3500, max: 6000 },
      canada: { min: 2200, max: 4400 },
      panama: { min: 1500, max: 2500 },
      rd: { min: 800, max: 1400 },
      puerto_rico: { min: 2800, max: 4500 },
      spain: { min: 1800, max: 2800 },
      chile: { min: 2000, max: 3500 },
    },
  },
  {
    id: 'all-on-4',
    label: {
      es: 'All-on-4 (arcada completa, 4 implantes + prótesis fija)',
      en: 'All-on-4 (full arch, 4 implants + fixed prosthetic)',
    },
    shortPitch: {
      es: 'Dientes fijos el mismo día de la cirugía. Cuatro implantes + prótesis atornillada por arcada.',
      en: 'Fixed teeth the same day as surgery. Four implants + screw-retained bridge per arch.',
    },
    prices: {
      medellin: { min: 12000, max: 20000 },
      usa: { min: 25000, max: 35000 },
      canada: { min: 18000, max: 30000 },
      panama: { min: 14000, max: 22000 },
      rd: { min: 8000, max: 15000 },
      puerto_rico: { min: 20000, max: 32000 },
      spain: { min: 14000, max: 22000 },
      chile: { min: 14000, max: 22000 },
    },
  },
  {
    id: 'all-on-6',
    label: {
      es: 'All-on-6 (arcada completa, 6 implantes + prótesis fija)',
      en: 'All-on-6 (full arch, 6 implants + fixed prosthetic)',
    },
    shortPitch: {
      es: 'Más estabilidad para casos de mayor fuerza masticatoria. Seis implantes por arcada + prótesis.',
      en: 'Greater stability for heavy bite force cases. Six implants per arch + bridge.',
    },
    prices: {
      medellin: { min: 14000, max: 22000 },
      usa: { min: 30000, max: 45000 },
      canada: { min: 22000, max: 35000 },
      panama: { min: 16000, max: 25000 },
      rd: { min: 10000, max: 18000 },
      puerto_rico: { min: 24000, max: 38000 },
      spain: { min: 16000, max: 25000 },
      chile: { min: 16000, max: 25000 },
    },
  },
  {
    id: 'zygomatic',
    label: {
      es: 'Implantes cigomáticos (pérdida ósea severa)',
      en: 'Zygomatic implants (severe bone loss)',
    },
    shortPitch: {
      es: 'Para pacientes a quienes les dijeron "no tienes hueso, no puedes tener implantes". Aquí sí se resuelve.',
      en: 'For patients told "you have no bone, you cannot have implants." Solved here.',
    },
    prices: {
      medellin: { min: 16000, max: 24000 },
      usa: { min: 40000, max: 70000 },
      canada: { min: 30000, max: 50000 },
      panama: { min: 18000, max: 28000 },
      // RD has very limited certified specialists — omit to avoid misleading
      // a Dominican Republic user that we compete on price for this one.
      puerto_rico: { min: 28000, max: 45000 },
      spain: { min: 20000, max: 35000 },
      chile: { min: 20000, max: 35000 },
    },
  },
  {
    id: 'veneer-single',
    label: {
      es: 'Carilla de porcelana (por diente)',
      en: 'Porcelain veneer (per tooth)',
    },
    shortPitch: {
      es: 'Carillas cerámicas hechas a mano por ceramista, no fresadas en masa. Resultado natural.',
      en: 'Hand-layered ceramic veneers by a master ceramist, not mass-milled. Natural result.',
    },
    prices: {
      medellin: { min: 550, max: 850 },
      usa: { min: 1500, max: 2500 },
      canada: { min: 1100, max: 1800 },
      panama: { min: 500, max: 900 },
      rd: { min: 300, max: 600 },
      puerto_rico: { min: 1200, max: 2000 },
      spain: { min: 800, max: 1400 },
      chile: { min: 700, max: 1200 },
    },
  },
  {
    id: 'smile-design',
    label: {
      es: 'Diseño de sonrisa completo (10 carillas)',
      en: 'Full smile design (10 veneers)',
    },
    shortPitch: {
      es: 'La transformación estética completa — diseño digital + 10 carillas + planificación 3D incluidos.',
      en: 'The complete cosmetic transformation — digital design + 10 veneers + 3D planning included.',
    },
    prices: {
      medellin: { min: 5500, max: 8500 },
      usa: { min: 15000, max: 25000 },
      canada: { min: 11000, max: 18000 },
      panama: { min: 5000, max: 9000 },
      rd: { min: 3000, max: 6000 },
      puerto_rico: { min: 12000, max: 20000 },
      spain: { min: 8000, max: 14000 },
      chile: { min: 7000, max: 12000 },
    },
  },
  {
    id: 'crown',
    label: {
      es: 'Corona de zirconio (por diente)',
      en: 'Zirconia crown (per tooth)',
    },
    shortPitch: {
      es: 'Zirconio fresado CAD/CAM. Misma materia prima que se usa en USA y Europa.',
      en: 'CAD/CAM milled zirconia. Same raw material used in the US and Europe.',
    },
    prices: {
      medellin: { min: 500, max: 800 },
      usa: { min: 1500, max: 2500 },
      canada: { min: 1400, max: 2000 },
      panama: { min: 700, max: 1200 },
      rd: { min: 500, max: 700 },
      puerto_rico: { min: 1300, max: 1900 },
      spain: { min: 700, max: 1200 },
      chile: { min: 700, max: 1100 },
    },
  },
  {
    id: 'full-mouth',
    label: {
      es: 'Rehabilitación oral completa',
      en: 'Full mouth rehabilitation',
    },
    shortPitch: {
      es: 'Reconstrucción total de la boca: implantes + prótesis + restauraciones. Planificación digital 3D.',
      en: 'Total mouth reconstruction: implants + prosthetics + restorations. 3D digital planning.',
    },
    prices: {
      medellin: { min: 12000, max: 25000 },
      usa: { min: 40000, max: 80000 },
      canada: { min: 30000, max: 55000 },
      panama: { min: 14000, max: 30000 },
      rd: { min: 10000, max: 20000 },
      puerto_rico: { min: 32000, max: 65000 },
      spain: { min: 18000, max: 35000 },
      chile: { min: 18000, max: 32000 },
    },
  },
];

export const COUNTRY_LABELS: Record<Country, { es: string; en: string; flag: string }> = {
  medellin: { es: '🇨🇴 Medellín, Colombia', en: '🇨🇴 Medellín, Colombia', flag: '🇨🇴' },
  usa: { es: '🇺🇸 Estados Unidos', en: '🇺🇸 United States', flag: '🇺🇸' },
  canada: { es: '🇨🇦 Canadá', en: '🇨🇦 Canada', flag: '🇨🇦' },
  panama: { es: '🇵🇦 Panamá', en: '🇵🇦 Panama', flag: '🇵🇦' },
  rd: { es: '🇩🇴 República Dominicana', en: '🇩🇴 Dominican Republic', flag: '🇩🇴' },
  puerto_rico: { es: '🇵🇷 Puerto Rico', en: '🇵🇷 Puerto Rico', flag: '🇵🇷' },
  spain: { es: '🇪🇸 España', en: '🇪🇸 Spain', flag: '🇪🇸' },
  chile: { es: '🇨🇱 Chile', en: '🇨🇱 Chile', flag: '🇨🇱' },
};

/** Country pricing notes — shown to the visitor when their country has
 *  special competitive context (e.g. RD has lower prices, Carolina sells
 *  on specialization rather than price). */
export const COUNTRY_NOTES: Partial<Record<Country, { es: string; en: string }>> = {
  rd: {
    es: 'Nota: en República Dominicana hay clínicas con precios muy bajos. La diferencia de la Dra. Carolina es la trayectoria (17+ años, 3.500+ pacientes), la especialización en casos complejos (cigomáticos y subperiósticos) y la tecnología premium.',
    en: 'Note: dental tourism in the Dominican Republic offers very low prices. Dr. Carolina differentiates through experience (17+ years, 3,500+ patients), specialization in complex cases (zygomatic and subperiosteal implants), and premium technology.',
  },
};

export function formatUSD(n: number, locale: 'es' | 'en' = 'en'): string {
  return `$${n.toLocaleString(locale === 'es' ? 'es-CO' : 'en-US')}`;
}

export function formatRange(range: PricingRange | undefined, locale: 'es' | 'en' = 'en'): string {
  if (!range) return locale === 'es' ? 'A consultar' : 'On request';
  return `${formatUSD(range.min, locale)}–${formatUSD(range.max, locale)}`;
}

export function averagePrice(range: PricingRange | undefined): number | null {
  if (!range) return null;
  return Math.round((range.min + range.max) / 2);
}

export function calculateSavings(
  procedure: Procedure,
  fromCountry: Country,
): { savings: number; savingsPct: number } | null {
  if (fromCountry === 'medellin') return null;
  const sourceAvg = averagePrice(procedure.prices[fromCountry]);
  const mdeAvg = averagePrice(procedure.prices.medellin);
  if (!sourceAvg || !mdeAvg) return null;
  const savings = Math.round(sourceAvg - mdeAvg);
  const savingsPct = Math.round((1 - mdeAvg / sourceAvg) * 100);
  return { savings, savingsPct };
}
