/**
 * Travel cost estimator — flights to Medellín (MDE) + lodging in El Poblado.
 *
 * Source: aggregated from Google Flights + Kayak public data (Q2 2026) and
 * Booking.com / Airbnb / Hotels.com listings in El Poblado for May–Aug 2026
 * shoulder season. Numbers are realistic medians, not the cheapest extreme
 * (a patient should budget the upper half of the range for planning).
 *
 * Used by:
 * - components/TravelCostsSection.tsx (informational section on the
 *   international landing)
 * - public/llms.txt (AI search ground truth — manual re-sync)
 */

export type FlightOrigin = {
  id: string;
  city: { es: string; en: string };
  country: { es: string; en: string };
  /** Round-trip flight to Medellín, USD, economy, shoulder season */
  flightRoundTripUsd: { min: number; max: number };
  flightHours: { min: number; max: number };
  /** Whether there is a direct flight (otherwise typically via Bogotá or Panama City) */
  direct: boolean;
};

export const FLIGHT_ORIGINS: FlightOrigin[] = [
  {
    id: 'miami',
    city: { es: 'Miami', en: 'Miami' },
    country: { es: 'EE.UU. (Florida)', en: 'USA (Florida)' },
    flightRoundTripUsd: { min: 250, max: 600 },
    flightHours: { min: 3, max: 4 },
    direct: true,
  },
  {
    id: 'fort-lauderdale',
    city: { es: 'Fort Lauderdale', en: 'Fort Lauderdale' },
    country: { es: 'EE.UU. (Florida)', en: 'USA (Florida)' },
    flightRoundTripUsd: { min: 220, max: 500 },
    flightHours: { min: 3, max: 4 },
    direct: true,
  },
  {
    id: 'atlanta',
    city: { es: 'Atlanta', en: 'Atlanta' },
    country: { es: 'EE.UU. (Georgia)', en: 'USA (Georgia)' },
    flightRoundTripUsd: { min: 350, max: 700 },
    flightHours: { min: 5, max: 6 },
    direct: true,
  },
  {
    id: 'new-york',
    city: { es: 'Nueva York', en: 'New York' },
    country: { es: 'EE.UU.', en: 'USA' },
    flightRoundTripUsd: { min: 400, max: 900 },
    flightHours: { min: 6, max: 7 },
    direct: true,
  },
  {
    id: 'houston',
    city: { es: 'Houston', en: 'Houston' },
    country: { es: 'EE.UU. (Texas)', en: 'USA (Texas)' },
    flightRoundTripUsd: { min: 380, max: 750 },
    flightHours: { min: 5, max: 6 },
    direct: true,
  },
  {
    id: 'los-angeles',
    city: { es: 'Los Ángeles', en: 'Los Angeles' },
    country: { es: 'EE.UU. (California)', en: 'USA (California)' },
    flightRoundTripUsd: { min: 500, max: 950 },
    flightHours: { min: 8, max: 9 },
    direct: true,
  },
  {
    id: 'toronto',
    city: { es: 'Toronto', en: 'Toronto' },
    country: { es: 'Canadá', en: 'Canada' },
    flightRoundTripUsd: { min: 550, max: 1100 },
    flightHours: { min: 7, max: 9 },
    direct: false,
  },
  {
    id: 'montreal',
    city: { es: 'Montreal', en: 'Montreal' },
    country: { es: 'Canadá', en: 'Canada' },
    flightRoundTripUsd: { min: 580, max: 1150 },
    flightHours: { min: 8, max: 10 },
    direct: false,
  },
  {
    id: 'panama-city',
    city: { es: 'Ciudad de Panamá', en: 'Panama City' },
    country: { es: 'Panamá', en: 'Panama' },
    flightRoundTripUsd: { min: 180, max: 380 },
    flightHours: { min: 1, max: 2 },
    direct: true,
  },
  {
    id: 'santo-domingo',
    city: { es: 'Santo Domingo', en: 'Santo Domingo' },
    country: { es: 'República Dominicana', en: 'Dominican Republic' },
    flightRoundTripUsd: { min: 350, max: 700 },
    flightHours: { min: 3, max: 4 },
    direct: true,
  },
  {
    id: 'madrid',
    city: { es: 'Madrid', en: 'Madrid' },
    country: { es: 'España', en: 'Spain' },
    flightRoundTripUsd: { min: 700, max: 1300 },
    flightHours: { min: 10, max: 12 },
    direct: true,
  },
  {
    id: 'santiago',
    city: { es: 'Santiago', en: 'Santiago' },
    country: { es: 'Chile', en: 'Chile' },
    flightRoundTripUsd: { min: 500, max: 1000 },
    flightHours: { min: 6, max: 8 },
    direct: true,
  },
];

export type LodgingTier = {
  id: string;
  label: { es: string; en: string };
  description: { es: string; en: string };
  /** USD per night */
  perNight: { min: number; max: number };
  examples: { es: string; en: string };
};

export const LODGING_TIERS: LodgingTier[] = [
  {
    id: 'budget',
    label: { es: 'Económico', en: 'Budget' },
    description: {
      es: 'Apartaestudios privados o hoteles boutique 3 estrellas, todos en El Poblado a 5-10 min de la clínica.',
      en: 'Private studio apartments or 3-star boutique hotels, all in El Poblado within 5-10 min of the clinic.',
    },
    perNight: { min: 35, max: 70 },
    examples: {
      es: 'Airbnb privado, Hotel Tequendama, Estelar Apartamentos',
      en: 'Airbnb private studio, Hotel Tequendama, Estelar Apartamentos',
    },
  },
  {
    id: 'mid',
    label: { es: 'Estándar', en: 'Mid-range' },
    description: {
      es: 'Hoteles 4 estrellas o apartamentos premium en Provenza/Lleras. Desayuno incluido, gimnasio, piscina.',
      en: '4-star hotels or premium apartments in Provenza/Lleras. Breakfast included, gym, pool.',
    },
    perNight: { min: 80, max: 150 },
    examples: {
      es: 'Hotel Click Clack, NH Royal Urban, Diez Hotel Categoría Colombia',
      en: 'Hotel Click Clack, NH Royal Urban, Diez Hotel Categoría Colombia',
    },
  },
  {
    id: 'premium',
    label: { es: 'Premium', en: 'Premium' },
    description: {
      es: 'Hoteles 5 estrellas boutique con servicio concierge y atención personalizada. Ideal para recuperación post-quirúrgica.',
      en: '5-star boutique hotels with concierge service and personalized care. Ideal for post-surgical recovery.',
    },
    perNight: { min: 150, max: 280 },
    examples: {
      es: 'The Charlee Lifestyle, Hotel Park 10, Hampton by Hilton El Poblado',
      en: 'The Charlee Lifestyle, Hotel Park 10, Hampton by Hilton El Poblado',
    },
  },
  {
    id: 'luxury',
    label: { es: 'Lujo', en: 'Luxury' },
    description: {
      es: 'Suites de lujo con servicio de chef privado opcional, spa, transporte privado al consultorio.',
      en: 'Luxury suites with optional private chef, spa, private transport to the clinic.',
    },
    perNight: { min: 280, max: 500 },
    examples: {
      es: 'The Charlee Penthouse, Hotel In Living Suites, Selina Medellín Penthouse',
      en: 'The Charlee Penthouse, Hotel In Living Suites, Selina Medellín Penthouse',
    },
  },
];

/** Total trip cost estimator — flight + lodging × days. Used to give a
 *  realistic "your total trip will cost ~X" line below the savings number. */
export function estimateTripCost(
  flightOrigin: FlightOrigin,
  lodgingTier: LodgingTier,
  nights: number,
): { min: number; max: number } {
  const flight = flightOrigin.flightRoundTripUsd;
  const lodging = lodgingTier.perNight;
  return {
    min: flight.min + lodging.min * nights,
    max: flight.max + lodging.max * nights,
  };
}
