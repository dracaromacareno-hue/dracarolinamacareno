/**
 * Master pricing, single source of truth across the site.
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
 * - public/llms.txt (AI search ground truth, needs manual re-sync when
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
  | 'full-mouth'
  | 'overdenture-2-implants'
  | 'endo-post-crown'
  | 'sinus-lift';

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
      es: 'Implante unitario (titanio o zirconio + corona)',
      en: 'Single dental implant (titanium or zirconia + crown)',
    },
    shortPitch: {
      es: 'Implante Straumann / Neodent / DioImplant + corona definitiva incluida. Desde $1,500. El valor exacto depende del análisis clínico (estado del hueso), del sistema de implante y del material de la corona.',
      en: 'Straumann / Neodent / DioImplant implant + final crown included. From $1,500. The exact figure depends on the clinical assessment (bone condition), the implant system and the crown material.',
    },
    /*
     * 6-ago-2026: el piso sube de $1,200 a $1,500, confirmado por la dueña.
     *
     * El precio real del caso estándar es COP $6.000.000: COP $3.000.000 el
     * implante y COP $3.000.000 la corona de zirconio sobre implante (con
     * pilar). A TRM 3.100 son ~$1,935, que es lo que ya cubría el techo de
     * $2,000. El que no existía era el piso de $1,200: con el implante a
     * ~$968 y la corona a ~$968 no hay forma de llegar ahí.
     *
     * $1,500 es el piso real, el de los casos donde se aplica descuento. Se
     * mantiene como "desde" porque es cierto, pero acompañado siempre de las
     * tres variables que lo mueven: hueso, sistema de implante y material de
     * la corona.
     *
     * OJO, no confundir dos coronas distintas:
     *   - corona de zirconio SOBRE IMPLANTE (con pilar): COP $3.000.000
     *   - corona de zirconio sobre diente natural: es el procedimiento
     *     `crown`, $500 a $900
     *
     * Historia previa (20-jul-2026): antes de esto los valores eran $1,000
     * titanio y $1,200 zirconio, también mal, y el mínimo quedaba por debajo
     * del propio rango publicado.
     */
    prices: {
      medellin: { min: 1500, max: 2000 },
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
      es: 'Dientes fijos el mismo día. Cuatro implantes + prótesis atornillada por arcada. Acrílico desde $13,000, zirconio definitivo desde $15,000.',
      en: 'Fixed teeth the same day. Four implants + screw-retained bridge per arch. Acrylic from $13,000, definitive zirconia from $15,000.',
    },
    // CurePay / Dental Partner reference: acrylic All-on-4 $13K, zirconia
    // definitive bridge $15K, both captured in the published $12-$20K range.
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
      es: 'Implantes cigomáticos con prótesis fija ZR',
      en: 'Zygomatic implants with fixed ZR prosthetic',
    },
    shortPitch: {
      es: 'Para pacientes con pérdida ósea severa a quienes les dijeron "no puedes tener implantes". Incluye prótesis fija de zirconio.',
      en: 'For patients with severe bone loss told "you cannot have implants." Includes the fixed zirconia prosthetic.',
    },
    // CurePay / Dental Partner reference: 4 zygomatic implants + fixed
    // zirconia prosthetic = $25,000. Range extended to capture more
    // complex cases (e.g. bilateral, additional grafting).
    prices: {
      medellin: { min: 16000, max: 25000 },
      usa: { min: 40000, max: 70000 },
      canada: { min: 30000, max: 50000 },
      panama: { min: 18000, max: 28000 },
      // RD has very limited certified specialists, omit to avoid misleading
      // a Dominican Republic user that we compete on price for this one.
      puerto_rico: { min: 28000, max: 45000 },
      spain: { min: 20000, max: 35000 },
      chile: { min: 20000, max: 35000 },
    },
  },
  {
    id: 'veneer-single',
    label: {
      es: 'Carilla cerámica (por diente)',
      en: 'Ceramic veneer (per tooth)',
    },
    shortPitch: {
      es: 'Carillas cerámicas hechas a mano por ceramista experta, no fresadas en masa. Laboratorio premium.',
      en: 'Hand-layered ceramic veneers by a master ceramist, not mass-milled. Premium lab.',
    },
    // CurePay reference: $900/unit (premium ceramic, master ceramist).
    // Range starts at $550 for simpler cases / lower-complexity teeth.
    prices: {
      medellin: { min: 550, max: 900 },
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
      es: 'La transformación estética completa, diseño digital + 10 carillas + planificación 3D incluidos. El rango lo define el material: resina inyectada de laboratorio $15.000.000 COP, cerámica de disilicato $20.000.000. Existe además resina directa en boca desde $5.000.000, la opción más económica pero de menor resistencia y que cambia de color.',
      en: 'The complete cosmetic transformation, digital design + 10 veneers + 3D planning included. The range is set by the material: lab-made injected composite 15,000,000 COP, lithium disilicate ceramic 20,000,000. Direct chairside composite is also available from 5,000,000 COP, the most affordable option but less resistant and prone to color change.',
    },
    // 2-ago-2026: precios reales confirmados por la dueña, USD a TRM 3.100.
    // El piso baja de 5.500 a 4.800 porque la resina inyectada ($15.000.000)
    // equivale a ~$4.840 y quedaba por debajo del mínimo publicado. La resina
    // directa ($5.000.000, ~$1.610) NO entra en el rango: es una opción de
    // entrada que la dueña casi no ofrece por resistencia y cambio de color,
    // así que meterla en el mínimo distorsionaría la comparativa internacional.
    // Va nombrada en shortPitch para que exista sin arrastrar el rango.
    prices: {
      medellin: { min: 4800, max: 8500 },
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
      es: 'Zirconio fresado CAD/CAM en laboratorio premium.',
      en: 'CAD/CAM milled zirconia from a premium lab.',
    },
    // CurePay reference: $900/unit. Range starts at $500 for simpler cases.
    prices: {
      medellin: { min: 500, max: 900 },
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
  {
    id: 'overdenture-2-implants',
    label: {
      es: 'Sobredentadura sobre 2 implantes',
      en: 'Overdenture on 2 implants',
    },
    shortPitch: {
      es: 'Prótesis removible estabilizada por 2 implantes. Alternativa económica al All-on-4 para arcada inferior.',
      en: 'Removable prosthetic stabilized by 2 implants. Affordable alternative to All-on-4 for the lower arch.',
    },
    // CurePay reference: $4,500. Range allows for material upgrades.
    prices: {
      medellin: { min: 4000, max: 5500 },
      usa: { min: 8000, max: 14000 },
      canada: { min: 7000, max: 12000 },
      panama: { min: 5000, max: 8000 },
      rd: { min: 3500, max: 5500 },
      puerto_rico: { min: 7500, max: 12000 },
      spain: { min: 5000, max: 9000 },
      chile: { min: 5000, max: 8500 },
    },
  },
  {
    id: 'endo-post-crown',
    label: {
      es: 'Endodoncia + perno + corona (rescate de diente)',
      en: 'Endodontic treatment + post + crown (tooth rescue)',
    },
    shortPitch: {
      es: 'Recuperación completa de un diente con caries profunda o fractura. Endodoncia con microscopio + perno + corona definitiva.',
      en: 'Complete recovery of a deeply damaged or fractured tooth. Microscope endodontics + post + definitive crown.',
    },
    // CurePay reference: $1,500 for the full package.
    prices: {
      medellin: { min: 1200, max: 1800 },
      usa: { min: 3500, max: 5500 },
      canada: { min: 2500, max: 4000 },
      panama: { min: 1500, max: 2500 },
      rd: { min: 900, max: 1500 },
      puerto_rico: { min: 2800, max: 4500 },
      spain: { min: 1500, max: 2500 },
      chile: { min: 1400, max: 2200 },
    },
  },
  {
    id: 'sinus-lift',
    label: {
      es: 'Elevación de seno maxilar (injerto óseo)',
      en: 'Sinus lift (bone graft)',
    },
    shortPitch: {
      es: 'Cirugía pre-implantes para reconstruir hueso en el maxilar superior. Se cotiza por lado.',
      en: 'Pre-implant surgery to rebuild bone in the upper jaw. Quoted per side.',
    },
    // CurePay reference: $1,000 per side.
    prices: {
      medellin: { min: 900, max: 1500 },
      usa: { min: 2500, max: 5000 },
      canada: { min: 2000, max: 4000 },
      panama: { min: 1200, max: 2200 },
      rd: { min: 800, max: 1500 },
      puerto_rico: { min: 2200, max: 4000 },
      spain: { min: 1200, max: 2500 },
      chile: { min: 1200, max: 2200 },
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

/** Country pricing notes, shown to the visitor when their country has
 *  special competitive context (e.g. RD has lower prices, Carolina sells
 *  on specialization rather than price). */
export const COUNTRY_NOTES: Partial<Record<Country, { es: string; en: string }>> = {
  rd: {
    es: 'Nota: en República Dominicana hay clínicas con precios muy bajos. La diferencia de la Dra. Carolina es la trayectoria (17+ años, 3.500+ pacientes), la especialización en casos complejos (cigomáticos y subperiósticos) y la tecnología premium.',
    en: 'Note: dental tourism in the Dominican Republic offers very low prices. Dr. Carolina differentiates through experience (17+ years, 3,500+ patients), specialization in complex cases (zygomatic and subperiosteal implants), and premium technology.',
  },
};

/**
 * TRM con la que se convirtieron los precios en pesos a dólares.
 *
 * Estaba como comentario suelto en la línea del diseño de sonrisa, así que era
 * una dependencia invisible: los valores en USD de todo el archivo se
 * calcularon una vez con esta tasa y nada avisa cuando deja de ser cierta.
 *
 * Y se mueve mucho. Entre mayo y agosto de 2026 el dólar pasó de ~4.000 a
 * ~3.050 pesos, un 24%. Un precio en USD calculado a 4.000 hoy estaría un 30%
 * por debajo de lo que de verdad cobra el consultorio.
 *
 * REGLA: si cambias esta constante, hay que recalcular los USD de PROCEDURES y
 * volver a sincronizar `public/llms.txt` y los precios escritos a mano en
 * `lib/blog-posts.ts` y en las páginas. No hay nada automático.
 */
export const TRM_REFERENCIA = 3100;
export const TRM_ACTUALIZADA = '2026-08-02';

/**
 * Aviso que acompaña a CUALQUIER precio publicado, en la web y fuera de ella.
 *
 * Por qué existe: un precio suelto en una página de salud es una promesa. El
 * valor real depende del análisis clínico, de la opción de tratamiento y del
 * material, y el equivalente en dólares depende además de una tasa de cambio
 * que se mueve a diario. Sin el aviso, la paciente llega a la valoración con
 * una cifra en la cabeza y cualquier diferencia se siente como un cambio de
 * precio, aunque el precio nunca haya cambiado.
 *
 * Usar también al enviar precios a directorios (TourSalud, Dental Departures,
 * Doctoralia) y al Perfil de Empresa. La versión corta es para tarjetas y
 * tablas; la larga para el pie de una página de precios.
 */
export const PRICE_DISCLAIMER = {
  short: {
    es: 'El valor exacto depende del análisis clínico, de la opción de tratamiento y del material elegido. Los equivalentes en dólares varían con la TRM.',
    en: 'The exact figure depends on the clinical assessment, the treatment option and the material chosen. Dollar equivalents vary with the exchange rate.',
  },
  long: {
    es: `Estos son rangos de referencia, no un presupuesto. El valor exacto de tu tratamiento depende del análisis clínico (estado del hueso, encía y dientes remanentes), de la opción de tratamiento que elijas entre las que sean viables para tu caso, y del material seleccionado. Los precios se fijan en pesos colombianos; los equivalentes en dólares son aproximados y se calcularon a una TRM de ${3100} pesos, que varía a diario. Tu presupuesto se define después de la valoración y se entrega por escrito.`,
    en: `These are reference ranges, not a quote. The exact figure for your treatment depends on the clinical assessment (condition of bone, gums and remaining teeth), on which of the viable treatment options you choose, and on the material selected. Prices are set in Colombian pesos; dollar equivalents are approximate and were calculated at an exchange rate of ${3100} pesos, which changes daily. Your quote is defined after the evaluation and delivered in writing.`,
  },
} as const;

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
