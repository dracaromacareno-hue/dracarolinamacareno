'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { track } from '@/lib/analytics';

/**
 * Savings Calculator — USA vs Medellín
 *
 * Lives on /en/dental-implants-for-us-patients (and is reusable on /en/dental-tourism-colombia).
 * Goal: convert "browsing curiosity" into a quantified WhatsApp lead by showing
 * the actual dollar gap a US patient saves by treating in Medellín.
 *
 * Pricing ranges come from the audit doc (PASOS-MANUALES-POST-DEPLOY) +
 * patient-facing rates the practice already publishes. USA columns are
 * national averages (Aspen Dental, ClearChoice, NewMouth 2025 surveys —
 * confirmed publicly available).
 *
 * Tracking:
 * - Every procedure change fires cta_click(calculator_view_<procedure>)
 * - The WhatsApp button at the bottom fires track.whatsapp('calculator_lead_<procedure>')
 *   so we can see in GA4 which procedure converted leads from the calculator.
 */

type Procedure = {
  id: string;
  label: string;
  /** USA average price range, USD */
  usa: { min: number; max: number };
  /** Medellín price with Dra. Carolina, USD */
  mde: { min: number; max: number };
  shortPitch: string;
};

const PROCEDURES: Procedure[] = [
  {
    id: 'single-implant',
    label: 'Single dental implant',
    usa: { min: 4500, max: 6000 },
    mde: { min: 1800, max: 2400 },
    shortPitch: 'Same Straumann / Neodent implant. Same titanium body. Different price.',
  },
  {
    id: 'all-on-4',
    label: 'All-on-4 (full arch, 4 implants + bridge)',
    usa: { min: 25000, max: 50000 },
    mde: { min: 12000, max: 16000 },
    shortPitch: 'ClearChoice charges $25-50K per arch. Same protocol, same materials in Medellín — typically $13K.',
  },
  {
    id: 'all-on-6',
    label: 'All-on-6 (full arch, 6 implants + bridge)',
    usa: { min: 30000, max: 55000 },
    mde: { min: 14000, max: 18000 },
    shortPitch: 'Stronger long-term option for heavier bite force. Less than half the US price.',
  },
  {
    id: 'zygomatic',
    label: 'Zygomatic implants (severe bone loss)',
    usa: { min: 40000, max: 90000 },
    mde: { min: 16000, max: 20000 },
    shortPitch: 'For patients told "you have no bone, you cannot have implants" in the US. Solved here.',
  },
  {
    id: 'veneers-single',
    label: 'Porcelain veneer (per tooth)',
    usa: { min: 1500, max: 2500 },
    mde: { min: 450, max: 700 },
    shortPitch: 'Hand-layered ceramic veneers, master ceramist work — at a third of US lab prices.',
  },
  {
    id: 'smile-design',
    label: 'Full smile design (8-10 veneers)',
    usa: { min: 15000, max: 25000 },
    mde: { min: 4500, max: 7000 },
    shortPitch: 'The complete cosmetic transformation — same digital planning, half the cost.',
  },
  {
    id: 'crown',
    label: 'Zirconia crown (per tooth)',
    usa: { min: 1500, max: 2500 },
    mde: { min: 500, max: 800 },
    shortPitch: 'CAD/CAM milled zirconia from the same materials used in major US labs.',
  },
];

function fmt(n: number) {
  return `$${n.toLocaleString('en-US')}`;
}

const WA_NUMBER = '573163975232';

function buildWaHref(procedureLabel: string, savings: number): string {
  const msg = encodeURIComponent(
    `Hi Dr. Carolina 🌐 I used the savings calculator for "${procedureLabel}". The calculator showed I could save ~$${savings.toLocaleString('en-US')} treating in Medellín. I would like to discuss my case and the next step.`,
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

export default function SavingsCalculator() {
  const [procedureId, setProcedureId] = useState<string>('all-on-4');

  const procedure = useMemo<Procedure>(
    () => PROCEDURES.find((p) => p.id === procedureId) ?? PROCEDURES[0],
    [procedureId],
  );

  const avgUSA = (procedure.usa.min + procedure.usa.max) / 2;
  const avgMDE = (procedure.mde.min + procedure.mde.max) / 2;
  const savings = Math.round(avgUSA - avgMDE);
  const savingsPct = Math.round((1 - avgMDE / avgUSA) * 100);

  const handleProcedureChange = (id: string) => {
    setProcedureId(id);
    track.cta(`calculator_view_${id}`);
  };

  const handleWaClick = () => {
    track.whatsapp(`calculator_lead_${procedureId}`);
  };

  return (
    <div className="bg-[#0D1321] border border-[#1F2937] rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40">
      {/* Header */}
      <div className="mb-6 text-center">
        <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase mb-2">
          Savings Calculator
        </p>
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#F5F5F0] mb-2"
          style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          How much would you save in Medellín?
        </h3>
        <p className="text-[#9CA3AF] text-sm sm:text-base max-w-md mx-auto">
          Pick the procedure you need. We compare against US averages from public industry surveys.
        </p>
      </div>

      {/* Procedure picker */}
      <div className="mb-6">
        <label htmlFor="procedure-select" className="block text-[#9CA3AF] text-xs font-medium tracking-wider uppercase mb-2">
          Choose your procedure
        </label>
        <select
          id="procedure-select"
          value={procedureId}
          onChange={(e) => handleProcedureChange(e.target.value)}
          className="w-full bg-[#070B14] border border-[#1F2937] focus:border-[#C9A461] rounded-lg px-4 py-3 text-[#F5F5F0] text-base outline-none transition-colors"
        >
          {PROCEDURES.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      {/* Comparison */}
      <motion.div
        key={procedureId}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-2 gap-3 mb-6"
      >
        {/* USA */}
        <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-4 text-center">
          <p className="text-red-300/80 text-xs font-medium tracking-wider uppercase mb-2">
            🇺🇸 USA average
          </p>
          <p className="text-[#F5F5F0] text-xl sm:text-2xl font-bold">
            {fmt(procedure.usa.min)}–{fmt(procedure.usa.max)}
          </p>
          <p className="text-[#9CA3AF] text-xs mt-1">national average</p>
        </div>
        {/* Medellín */}
        <div className="bg-[#C9A461]/10 border border-[#C9A461]/40 rounded-xl p-4 text-center">
          <p className="text-[#C9A461] text-xs font-medium tracking-wider uppercase mb-2">
            🇨🇴 Medellín
          </p>
          <p className="text-[#F5F5F0] text-xl sm:text-2xl font-bold">
            {fmt(procedure.mde.min)}–{fmt(procedure.mde.max)}
          </p>
          <p className="text-[#9CA3AF] text-xs mt-1">at Dra. Carolina's practice</p>
        </div>
      </motion.div>

      {/* Savings highlight */}
      <motion.div
        key={`savings-${procedureId}`}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="bg-gradient-to-r from-[#C9A461]/15 via-[#C9A461]/20 to-[#C9A461]/15 border border-[#C9A461]/40 rounded-xl p-5 mb-5 text-center"
      >
        <p className="text-[#9CA3AF] text-xs font-medium tracking-wider uppercase mb-1">
          Estimated savings
        </p>
        <p
          className="text-[#C9A461] text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          {fmt(savings)}
        </p>
        <p className="text-[#F5F5F0] text-sm mt-1">
          That&apos;s about <strong>{savingsPct}% less</strong> than the US average.
        </p>
      </motion.div>

      {/* Pitch */}
      <p className="text-[#D1D5DB] text-sm leading-relaxed text-center mb-6 px-2">
        {procedure.shortPitch}
      </p>

      {/* CTA */}
      <a
        href={buildWaHref(procedure.label, savings)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWaClick}
        className="group w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-6 py-4 rounded-lg text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
        </svg>
        Talk to Dr. Carolina on WhatsApp
      </a>

      {/* Footer note */}
      <p className="text-[#6B7280] text-xs text-center mt-4 leading-relaxed">
        Final price depends on your specific case. The calculator gives a realistic range. Dr. Carolina sends an exact written quote after a 30-min video consultation (free for international patients).
      </p>
    </div>
  );
}
