'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { track } from '@/lib/analytics';
import { detectSource, appendSourceTag } from '@/lib/source-tracking';
import {
  PROCEDURES,
  COUNTRY_LABELS,
  COUNTRY_NOTES,
  PRICE_DISCLAIMER,
  calculateSavings,
  formatRange,
  type Country,
  type Procedure,
} from '@/lib/pricing';

/**
 * Savings Calculator, dynamic per-country comparison.
 *
 * v3 (May 2026, after Carolina's feedback on consistency with CurePay /
 * Dental Partner):
 * - All pricing now sourced from lib/pricing.ts (single source of truth,
 *   matching the /dental-tourism-colombia table used in partnerships)
 * - Added 8th procedure: full-mouth rehabilitation (was missing)
 * - Added country selector: visitors from Canada, Panama, RD, Puerto Rico,
 *   Spain and Chile now see comparisons relevant to their home market
 * - RD pricing is shown but no longer triggers a "savings" highlight,
 *   because Carolina's value vs RD is specialization, not price, the
 *   COUNTRY_NOTES copy in lib/pricing.ts surfaces that message
 *
 * Tracking:
 * - procedure change → cta_click('calculator_view_<procedure>_<country>_<locale>')
 * - country change → cta_click('calculator_country_<country>_<locale>')
 * - WhatsApp click → whatsapp_click('calculator_lead_<procedure>_<country>_<locale>')
 *   so GA4 can show which procedure × country × language combination
 *   best converts to leads, informs both ads geo-targeting and
 *   future landing-page localization.
 */

const WA_NUMBER = '573163975232';

function buildWaHref(
  procedureLabel: string,
  countryLabel: string,
  savings: number | null,
  locale: 'es' | 'en',
): string {
  const formattedSavings = savings
    ? `$${savings.toLocaleString(locale === 'es' ? 'es-CO' : 'en-US')}`
    : '';
  const baseMsg = locale === 'es'
    ? savings
      ? `Hola Dra. Carolina 🌐 Vengo de ${countryLabel} y usé la calculadora para "${procedureLabel}". Me mostró que podría ahorrar ~${formattedSavings} tratándome en Medellín. Me gustaría hablar de mi caso.`
      : `Hola Dra. Carolina 🌐 Vengo de ${countryLabel} y me interesa "${procedureLabel}". Me gustaría conocer más sobre el procedimiento y los siguientes pasos.`
    : savings
      ? `Hi Dr. Carolina 🌐 I'm from ${countryLabel} and I used the savings calculator for "${procedureLabel}". The calculator showed I could save ~${formattedSavings} treating in Medellín. I would like to discuss my case.`
      : `Hi Dr. Carolina 🌐 I'm from ${countryLabel} and I'm interested in "${procedureLabel}". I would like to learn more about the procedure and the next steps.`;
  // Append [fuente: X] for GHL CRM attribution (Google Ads, IG, etc.)
  const tagged = appendSourceTag(baseMsg, locale, detectSource());
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(tagged)}`;
}

interface Props {
  /** Page locale, drives all UI strings + procedure labels + WhatsApp prefill */
  locale: 'es' | 'en';
  /** Optional initial country (defaults to USA). Auto-detection happens in
   *  the parent server component, so this prop receives the resolved value. */
  initialCountry?: Country;
}

// Countries comparable from the calculator UI. Excludes Medellín (source).
const COMPARISON_COUNTRIES: Country[] = [
  'usa',
  'canada',
  'panama',
  'rd',
  'puerto_rico',
  'spain',
  'chile',
];

export default function SavingsCalculator({ locale, initialCountry = 'usa' }: Props) {
  const isEs = locale === 'es';
  const [procedureId, setProcedureId] = useState<string>('all-on-4');
  const [country, setCountry] = useState<Country>(initialCountry);

  const procedure = useMemo<Procedure>(
    () => PROCEDURES.find((p) => p.id === procedureId) ?? PROCEDURES[0],
    [procedureId],
  );

  const medellinRange = procedure.prices.medellin;
  const sourceRange = procedure.prices[country];
  const savingsCalc = calculateSavings(procedure, country);
  const isRD = country === 'rd';
  const note = COUNTRY_NOTES[country];

  const handleProcedureChange = (id: string) => {
    setProcedureId(id);
    track.cta(`calculator_view_${id}_${country}_${locale}`);
  };

  const handleCountryChange = (c: Country) => {
    setCountry(c);
    track.cta(`calculator_country_${c}_${locale}`);
  };

  const handleWaClick = () => {
    track.whatsapp(`calculator_lead_${procedureId}_${country}_${locale}`);
  };

  const procedureLabelForWa = isEs ? procedure.label.es : procedure.label.en;
  const countryLabelForWa = (isEs ? COUNTRY_LABELS[country].es : COUNTRY_LABELS[country].en)
    .replace(/^[^\s]+\s/, ''); // strip flag emoji prefix
  const sourceCountryLabel = isEs ? COUNTRY_LABELS[country].es : COUNTRY_LABELS[country].en;

  const t = isEs
    ? {
        kicker: 'CALCULADORA DE AHORRO',
        title: '¿Cuánto ahorrarías en Medellín?',
        subtitle: 'Escoge tu procedimiento y tu país para ver la comparación real.',
        chooseCountryLabel: 'Vengo de',
        chooseProcedureLabel: 'Procedimiento',
        sourceHeader: (c: string) => `${c}`,
        sourceSubtitle: 'precio promedio',
        mdeHeader: '🇨🇴 MEDELLÍN',
        mdeSubtitle: 'consultorio de la Dra. Carolina',
        savingsHeader: 'AHORRO ESTIMADO',
        savingsExplainer: (pct: number) => (
          <>Eso es aproximadamente <strong>{pct}% menos</strong>.</>
        ),
        priceOnRequest: 'A consultar',
        ctaButton: 'Habla con la Dra. Carolina por WhatsApp',
        // Faltaba la parte de la tasa de cambio. Los precios se fijan en pesos
        // y el dólar se movió un 24% entre mayo y agosto de 2026 (de ~4.000 a
        // ~3.050), así que un equivalente en USD sin ese aviso envejece solo.
        disclaimer: `${PRICE_DISCLAIMER.long.es} La Dra. Carolina envía ese presupuesto tras una videoconsulta de 30 minutos, gratis para pacientes internacionales.`,
      }
    : {
        kicker: 'SAVINGS CALCULATOR',
        title: 'How much would you save in Medellín?',
        subtitle: 'Pick your procedure and your home country to see the real comparison.',
        chooseCountryLabel: "I'm from",
        chooseProcedureLabel: 'Procedure',
        sourceHeader: (c: string) => `${c}`,
        sourceSubtitle: 'average price',
        mdeHeader: '🇨🇴 MEDELLÍN',
        mdeSubtitle: "at Dra. Carolina's practice",
        savingsHeader: 'ESTIMATED SAVINGS',
        savingsExplainer: (pct: number) => (
          <>That&apos;s about <strong>{pct}% less</strong>.</>
        ),
        priceOnRequest: 'On request',
        ctaButton: 'Talk to Dr. Carolina on WhatsApp',
        disclaimer: `${PRICE_DISCLAIMER.long.en} Dr. Carolina sends that quote after a 30 minute video consultation, free for international patients.`,
      };

  return (
    <div className="bg-white border border-[#E8E3DA] rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40">
      {/* Header */}
      <div className="mb-6 text-center">
        <p className="text-[#8A6B2E] text-xs font-medium tracking-widest uppercase mb-2">
          {t.kicker}
        </p>
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#211E18] mb-2"
          style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          {t.title}
        </h3>
        <p className="text-[#77726A] text-sm sm:text-base max-w-md mx-auto">{t.subtitle}</p>
      </div>

      {/* Country + Procedure pickers */}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <div>
          <label htmlFor="country-select" className="block text-[#77726A] text-xs font-medium tracking-wider uppercase mb-2">
            {t.chooseCountryLabel}
          </label>
          <select
            id="country-select"
            value={country}
            onChange={(e) => handleCountryChange(e.target.value as Country)}
            className="w-full bg-[#FCFBF9] border border-[#E8E3DA] focus:border-[#C9A461] rounded-lg px-4 py-3 text-[#211E18] text-base outline-none transition-colors"
          >
            {COMPARISON_COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {isEs ? COUNTRY_LABELS[c].es : COUNTRY_LABELS[c].en}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="procedure-select" className="block text-[#77726A] text-xs font-medium tracking-wider uppercase mb-2">
            {t.chooseProcedureLabel}
          </label>
          <select
            id="procedure-select"
            value={procedureId}
            onChange={(e) => handleProcedureChange(e.target.value)}
            className="w-full bg-[#FCFBF9] border border-[#E8E3DA] focus:border-[#C9A461] rounded-lg px-4 py-3 text-[#211E18] text-base outline-none transition-colors"
          >
            {PROCEDURES.map((p) => (
              <option key={p.id} value={p.id}>
                {isEs ? p.label.es : p.label.en}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison */}
      <motion.div
        key={`${procedureId}-${country}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-2 gap-3 mb-6"
      >
        {/* Source country */}
        <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-4 text-center">
          <p className="text-red-300/80 text-xs font-medium tracking-wider uppercase mb-2 line-clamp-1">
            {t.sourceHeader(sourceCountryLabel)}
          </p>
          <p className="text-[#211E18] text-lg sm:text-2xl font-bold">
            {sourceRange ? formatRange(sourceRange, locale) : t.priceOnRequest}
          </p>
          <p className="text-[#77726A] text-xs mt-1">{t.sourceSubtitle}</p>
        </div>
        {/* Medellín */}
        <div className="bg-[#C9A461]/10 border border-[#C9A461]/40 rounded-xl p-4 text-center">
          <p className="text-[#8A6B2E] text-xs font-medium tracking-wider uppercase mb-2">
            {t.mdeHeader}
          </p>
          <p className="text-[#211E18] text-lg sm:text-2xl font-bold">
            {formatRange(medellinRange, locale)}
          </p>
          <p className="text-[#77726A] text-xs mt-1">{t.mdeSubtitle}</p>
        </div>
      </motion.div>

      {/* Savings highlight, only shown when there's a meaningful saving */}
      {savingsCalc && savingsCalc.savings > 0 && !isRD && (
        <motion.div
          key={`savings-${procedureId}-${country}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="bg-gradient-to-r from-[#C9A461]/15 via-[#C9A461]/20 to-[#C9A461]/15 border border-[#C9A461]/40 rounded-xl p-5 mb-5 text-center"
        >
          <p className="text-[#77726A] text-xs font-medium tracking-wider uppercase mb-1">
            {t.savingsHeader}
          </p>
          <p
            className="text-[#8A6B2E] text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            ${savingsCalc.savings.toLocaleString(locale === 'es' ? 'es-CO' : 'en-US')}
          </p>
          <p className="text-[#211E18] text-sm mt-1">{t.savingsExplainer(savingsCalc.savingsPct)}</p>
        </motion.div>
      )}

      {/* Country-specific note (e.g. RD: price isn't the value driver) */}
      {note && (
        <div className="bg-[#1F2937]/40 border border-[#E8E3DA] rounded-xl p-4 mb-5 text-center">
          <p className="text-[#5A5449] text-sm leading-relaxed">
            {isEs ? note.es : note.en}
          </p>
        </div>
      )}

      {/* Pitch */}
      <p className="text-[#5A5449] text-sm leading-relaxed text-center mb-6 px-2">
        {isEs ? procedure.shortPitch.es : procedure.shortPitch.en}
      </p>

      {/* CTA */}
      <a
        href={buildWaHref(procedureLabelForWa, countryLabelForWa, savingsCalc?.savings ?? null, locale)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWaClick}
        className="group w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-6 py-4 rounded-lg text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
        </svg>
        {t.ctaButton}
      </a>

      {/* Footer note */}
      <p className="text-[#77726A] text-xs text-center mt-4 leading-relaxed">{t.disclaimer}</p>
    </div>
  );
}
