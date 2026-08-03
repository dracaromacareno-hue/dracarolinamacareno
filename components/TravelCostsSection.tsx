'use client';

import { FLIGHT_ORIGINS, LODGING_TIERS } from '@/lib/travel-costs';

/**
 * TravelCostsSection, flights + lodging cost ranges for the international
 * landing.
 *
 * Why this exists:
 * Carolina's feedback (May 2026): "podríamos colocar rangos de costos de
 * vuelos y de hoteles en el poblado", a patient comparing $14K All-on-4
 * in Medellín against $30K in their home country still needs to know
 * what the full trip will actually cost (flight + 5-7 nights' lodging)
 * to feel confident the savings claim holds. Adding the ranges directly
 * removes the friction of having to leave the page to Kayak / Booking.com.
 *
 * Data lives in lib/travel-costs.ts so it can be reused in future tools
 * (e.g. trip cost estimator widget).
 */

interface Props {
  locale: 'es' | 'en';
}

export default function TravelCostsSection({ locale }: Props) {
  const isEs = locale === 'es';

  const t = isEs
    ? {
        kicker: 'COSTOS REALES DE VIAJE',
        title: 'Vuelos y hospedaje en El Poblado',
        subtitle:
          'Para que sumes el costo real de tu viaje y veas el ahorro neto. Precios USD, rangos típicos temporada media 2026.',
        flightsHeader: 'Vuelo ida y vuelta a Medellín (MDE)',
        cityCol: 'Ciudad',
        countryCol: 'País',
        roundtripCol: 'Ida y vuelta',
        hoursCol: 'Duración',
        directCol: 'Directo',
        directYes: 'Sí',
        directNo: 'Conexión',
        hoursUnit: 'h',

        lodgingHeader: 'Hospedaje en El Poblado',
        lodgingSubtitle:
          'Todos los hoteles y apartamentos están a 5-15 min caminando del consultorio (Carrera 25 #1A Sur-155).',
        perNightLabel: '/ noche',
        examplesLabel: 'Ejemplos',
        descriptionLabel: 'Qué incluye',

        footnote:
          'Estos precios son referenciales y pueden variar por fechas, anticipación de la reserva y temporada. Yo te ayudo a coordinar hospedaje con descuentos para mis pacientes internacionales, pregúntame por WhatsApp.',
      }
    : {
        kicker: 'REAL TRAVEL COSTS',
        title: 'Flights & lodging in El Poblado',
        subtitle:
          "So you can do the full math and see the net savings. USD prices, typical shoulder-season ranges for 2026.",
        flightsHeader: 'Round-trip flight to Medellín (MDE)',
        cityCol: 'City',
        countryCol: 'Country',
        roundtripCol: 'Round-trip',
        hoursCol: 'Duration',
        directCol: 'Direct',
        directYes: 'Yes',
        directNo: 'With connection',
        hoursUnit: 'h',

        lodgingHeader: 'Lodging in El Poblado',
        lodgingSubtitle:
          "Every hotel and apartment is within 5-15 min walking of the clinic (Carrera 25 #1A Sur-155).",
        perNightLabel: '/ night',
        examplesLabel: 'Examples',
        descriptionLabel: "What's included",

        footnote:
          "These prices are indicative and may vary by date, booking lead time and season. I help coordinate lodging with discounts for my international patients, just ask me on WhatsApp.",
      };

  return (
    <section className="px-4 sm:px-6 py-16 bg-white border-y border-[#E8E3DA]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#8A6B2E] text-xs font-medium tracking-widest uppercase mb-3">
            {t.kicker}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3 text-[#211E18]"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {t.title}
          </h2>
          <p className="text-[#77726A] max-w-2xl mx-auto text-sm sm:text-base">{t.subtitle}</p>
        </div>

        {/* Flights table */}
        <div className="mb-12">
          <h3 className="text-[#8A6B2E] text-base font-semibold tracking-wide uppercase mb-4">
            {t.flightsHeader}
          </h3>
          <div className="overflow-x-auto rounded-xl border border-[#E8E3DA] bg-[#FCFBF9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E3DA]">
                  <th className="text-left px-4 py-3 text-[#77726A] text-xs font-medium tracking-wider uppercase">
                    {t.cityCol}
                  </th>
                  <th className="text-left px-4 py-3 text-[#77726A] text-xs font-medium tracking-wider uppercase hidden sm:table-cell">
                    {t.countryCol}
                  </th>
                  <th className="text-right px-4 py-3 text-[#77726A] text-xs font-medium tracking-wider uppercase">
                    {t.roundtripCol}
                  </th>
                  <th className="text-right px-4 py-3 text-[#77726A] text-xs font-medium tracking-wider uppercase hidden md:table-cell">
                    {t.hoursCol}
                  </th>
                  <th className="text-center px-4 py-3 text-[#77726A] text-xs font-medium tracking-wider uppercase hidden md:table-cell">
                    {t.directCol}
                  </th>
                </tr>
              </thead>
              <tbody>
                {FLIGHT_ORIGINS.map((flight, i) => (
                  <tr
                    key={flight.id}
                    className={i % 2 === 0 ? 'bg-[#FCFBF9]' : 'bg-white/40'}
                  >
                    <td className="px-4 py-3 text-[#211E18] font-medium">
                      {isEs ? flight.city.es : flight.city.en}
                    </td>
                    <td className="px-4 py-3 text-[#77726A] text-xs hidden sm:table-cell">
                      {isEs ? flight.country.es : flight.country.en}
                    </td>
                    <td className="px-4 py-3 text-[#8A6B2E] font-semibold text-right tabular-nums">
                      ${flight.flightRoundTripUsd.min}–${flight.flightRoundTripUsd.max}
                    </td>
                    <td className="px-4 py-3 text-[#77726A] text-right tabular-nums hidden md:table-cell">
                      {flight.flightHours.min}–{flight.flightHours.max}{t.hoursUnit}
                    </td>
                    <td className="px-4 py-3 text-center hidden md:table-cell">
                      {flight.direct ? (
                        <span className="text-[#10B981] text-xs font-medium">{t.directYes}</span>
                      ) : (
                        <span className="text-[#77726A] text-xs">{t.directNo}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lodging tiers */}
        <div>
          <h3 className="text-[#8A6B2E] text-base font-semibold tracking-wide uppercase mb-2">
            {t.lodgingHeader}
          </h3>
          <p className="text-[#77726A] text-sm mb-5">{t.lodgingSubtitle}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LODGING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="bg-[#FCFBF9] border border-[#E8E3DA] rounded-xl p-5 flex flex-col"
              >
                <p className="text-[#8A6B2E] text-xs font-medium tracking-widest uppercase mb-2">
                  {isEs ? tier.label.es : tier.label.en}
                </p>
                <p className="text-[#211E18] text-xl sm:text-2xl font-bold mb-1 tabular-nums">
                  ${tier.perNight.min}–${tier.perNight.max}
                </p>
                <p className="text-[#77726A] text-xs mb-3">{t.perNightLabel}</p>
                <p className="text-[#5A5449] text-sm leading-relaxed mb-3 flex-1">
                  {isEs ? tier.description.es : tier.description.en}
                </p>
                <div className="pt-3 border-t border-[#E8E3DA]">
                  <p className="text-[#77726A] text-xs font-medium tracking-wider uppercase mb-1">
                    {t.examplesLabel}
                  </p>
                  <p className="text-[#5A5449] text-xs leading-snug">
                    {isEs ? tier.examples.es : tier.examples.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <p className="text-[#77726A] text-xs text-center mt-8 max-w-3xl mx-auto leading-relaxed">
          {t.footnote}
        </p>
      </div>
    </section>
  );
}
