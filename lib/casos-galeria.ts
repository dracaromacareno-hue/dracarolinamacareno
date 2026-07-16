/**
 * Casos clínicos reales (antes/después) documentados por la Dra. Carolina Macareno.
 *
 * Fuente: fotos clínicas reales cargadas en /public/images (mismas que ya se usan
 * en RecentCasesGrid del home). Cada par corresponde a un paciente real.
 *
 * REGLA E-E-A-T: descripciones basadas SOLO en el tipo de tratamiento visible y
 * en la categoría con la que la clínica archivó cada caso. No se inventan datos,
 * cifras ni claims. La dueña revisa cada texto antes de publicar.
 *
 * PRIVACIDAD: fotos con consentimiento del paciente. Antes de sumar casos nuevos,
 * confirmar consentimiento firmado para uso en web/marketing.
 */

export type CasoAntesDespues = {
  id: string;
  before: string;
  after: string;
  /** Etiqueta de tratamiento, ej. "Carillas cerámicas" */
  tag: { es: string; en: string };
  /** Descripción honesta de lo que se hizo (1 frase) */
  caption: { es: string; en: string };
  /** alt accesible/SEO para cada foto */
  alt: { es: string; en: string };
};

/** 6 casos de diseño de sonrisa (carillas cerámicas y resina). */
export const casosDisenoSonrisa: CasoAntesDespues[] = [
  {
    id: 'diseno-ceramica-6',
    before: '/images/antes-diseno-ceramica-6.webp',
    after: '/images/final-diseno-ceramica-6.webp',
    tag: { es: 'Carillas cerámicas', en: 'Ceramic veneers' },
    caption: {
      es: 'Dientes manchados y desalineados transformados con carillas cerámicas. Color uniforme, bordes parejos y una sonrisa natural.',
      en: 'Stained, misaligned teeth transformed with ceramic veneers. Even colour, aligned edges and a natural smile.',
    },
    alt: {
      es: 'Antes y después de diseño de sonrisa cerámico en Medellín, Dra. Carolina Macareno',
      en: 'Before and after ceramic smile design in Medellín, Dr. Carolina Macareno',
    },
  },
  {
    id: 'diseno-ceramica-2',
    before: '/images/antes-diseno-ceramica-2.webp',
    after: '/images/final-diseno-ceramica-2.webp',
    tag: { es: 'Carillas cerámicas', en: 'Ceramic veneers' },
    caption: {
      es: 'Dientes desgastados y desalineados. Rehabilitados con carillas cerámicas para recuperar forma, color y armonía.',
      en: 'Worn, misaligned teeth restored with ceramic veneers to recover shape, colour and harmony.',
    },
    alt: {
      es: 'Antes y después de diseño de sonrisa con carillas cerámicas en Medellín, Dra. Carolina Macareno',
      en: 'Before and after smile design with ceramic veneers in Medellín, Dr. Carolina Macareno',
    },
  },
  {
    id: 'diseno-ceramica-4',
    before: '/images/antes-diseno-ceramica-4.webp',
    after: '/images/final-diseno-ceramica-4.webp',
    tag: { es: 'Carillas cerámicas', en: 'Ceramic veneers' },
    caption: {
      es: 'Rediseño estético con carillas cerámicas. Sonrisa natural, proporcionada y del color deseado.',
      en: 'Aesthetic redesign with ceramic veneers. A natural, proportionate smile in the desired shade.',
    },
    alt: {
      es: 'Antes y después de carillas cerámicas, diseño de sonrisa en El Poblado Medellín',
      en: 'Before and after ceramic veneers, smile design in El Poblado Medellín',
    },
  },
  {
    id: 'diseno-ceramica-5',
    before: '/images/antes-diseno-ceramica-5.webp',
    after: '/images/final-diseno-ceramica-5.webp',
    tag: { es: 'Carillas cerámicas', en: 'Ceramic veneers' },
    caption: {
      es: 'Transformación completa de la sonrisa con carillas cerámicas y planificación digital previa.',
      en: 'Complete smile transformation with ceramic veneers and prior digital planning.',
    },
    alt: {
      es: 'Caso de diseño de sonrisa cerámico antes y después, Medellín',
      en: 'Ceramic smile design case before and after, Medellín',
    },
  },
  {
    id: 'diseno-resina-3',
    before: '/images/antes-diseno-resina-3.webp',
    after: '/images/final-diseno-resina-3.webp',
    tag: { es: 'Carillas en resina', en: 'Composite veneers' },
    caption: {
      es: 'Diseño de sonrisa con carillas en resina, técnica conservadora y en menos sesiones.',
      en: 'Smile design with composite veneers, a conservative technique in fewer sessions.',
    },
    alt: {
      es: 'Antes y después de carillas en resina, diseño de sonrisa Medellín',
      en: 'Before and after composite veneers, smile design Medellín',
    },
  },
  {
    id: 'diseno-1',
    before: '/images/antes-diseno-1.webp',
    after: '/images/final-diseno-1.webp',
    tag: { es: 'Rediseño de sonrisa', en: 'Smile redesign' },
    caption: {
      es: 'Rediseño completo de la sonrisa. Forma, color y proporción devueltos con un resultado natural.',
      en: 'Complete smile redesign. Shape, colour and proportion restored with a natural result.',
    },
    alt: {
      es: 'Antes y después de rediseño de sonrisa en Medellín, Dra. Carolina Macareno',
      en: 'Before and after smile redesign in Medellín, Dr. Carolina Macareno',
    },
  },
];

/** Caso de rehabilitación con implantes / prótesis fija. */
export const casosImplantes: CasoAntesDespues[] = [
  {
    id: 'implantes-4',
    before: '/images/antes-implantes-4.webp',
    after: '/images/final-implantes-4.webp',
    tag: { es: 'Rehabilitación oral', en: 'Oral rehabilitation' },
    caption: {
      es: 'Rehabilitación de la sonrisa devolviendo función y estética con un resultado blanco y parejo.',
      en: 'Smile rehabilitation restoring function and aesthetics with an even, white result.',
    },
    alt: {
      es: 'Antes y después de rehabilitación oral en Medellín, Dra. Carolina Macareno',
      en: 'Before and after oral rehabilitation in Medellín, Dr. Carolina Macareno',
    },
  },
];

/** Todos los casos (para la vitrina de /casos-clinicos). */
export const casosDestacados: CasoAntesDespues[] = [
  ...casosDisenoSonrisa,
  ...casosImplantes,
];
