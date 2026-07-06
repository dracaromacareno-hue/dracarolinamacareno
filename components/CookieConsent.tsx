'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  acceptAll,
  rejectAll,
  setCustom,
  hasDecided,
  isGdprModeFromLanguage,
  readConsent,
} from '@/lib/consent';

/**
 * Cookie Consent Banner, GDPR (EU) + CCPA (California) compliant.
 *
 * Behavior:
 * - On first render, checks localStorage. If a decision already exists,
 *   the banner stays hidden.
 * - Detects GDPR mode via navigator.language. In GDPR mode the banner
 *   is opt-in (Reject is the default), in non-GDPR mode it's opt-out.
 * - GA4 and Meta Pixel subscribe to consent state via the event
 *   dispatched by lib/consent.ts, they will not load tracking scripts
 *   until consent.analytics / consent.marketing is true.
 *
 * Accessibility:
 * - dialog with aria-modal=false (informational, not blocking site usage)
 * - focusable buttons in a logical order
 * - ESC closes only the customize panel, not the banner itself (banner
 *   must stay visible until a decision is made under GDPR)
 */

interface Props {
  locale: string;
}

export default function CookieConsent({ locale }: Props) {
  const isEs = locale === 'es';
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [gdprMode, setGdprMode] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show only if user has not yet decided
    if (hasDecided()) {
      setOpen(false);
      return;
    }
    const lang = typeof navigator !== 'undefined' ? navigator.language : undefined;
    const isGdpr = isGdprModeFromLanguage(lang);
    setGdprMode(isGdpr);
    // Non-GDPR: pre-check both as opt-out default. GDPR: leave unchecked.
    setAnalyticsChecked(!isGdpr);
    setMarketingChecked(!isGdpr);
    setOpen(true);
  }, []);

  if (!mounted) return null;

  const handleAcceptAll = () => {
    acceptAll(gdprMode);
    setOpen(false);
  };

  const handleRejectAll = () => {
    rejectAll(gdprMode);
    setOpen(false);
  };

  const handleSaveCustom = () => {
    setCustom({ analytics: analyticsChecked, marketing: marketingChecked }, gdprMode);
    setOpen(false);
    setCustomizing(false);
  };

  const t = isEs
    ? {
        title: 'Cookies y privacidad',
        intro:
          'Esta página usa cookies para analizar el tráfico (Google Analytics) y mejorar nuestros anuncios (Meta Pixel). No vendemos tus datos a terceros.',
        privacyLink: 'Lee nuestra política de privacidad',
        accept: 'Aceptar todas',
        reject: 'Rechazar opcionales',
        customize: 'Personalizar',
        save: 'Guardar mis preferencias',
        necessaryLabel: 'Necesarias',
        necessaryDesc: 'Esenciales para que la web funcione. No se pueden desactivar.',
        analyticsLabel: 'Análisis (Google Analytics)',
        analyticsDesc: 'Nos permite saber cuántas personas visitan la web y desde dónde.',
        marketingLabel: 'Marketing (Meta Pixel)',
        marketingDesc: 'Permite optimizar nuestros anuncios en Facebook e Instagram.',
        back: 'Volver',
      }
    : {
        title: 'Cookies & privacy',
        intro:
          'This website uses cookies to analyze traffic (Google Analytics) and improve our ads (Meta Pixel). We do not sell your data to third parties.',
        privacyLink: 'Read our privacy policy',
        accept: 'Accept all',
        reject: 'Reject optional',
        customize: 'Customize',
        save: 'Save my preferences',
        necessaryLabel: 'Necessary',
        necessaryDesc: 'Essential for the site to work. Cannot be disabled.',
        analyticsLabel: 'Analytics (Google Analytics)',
        analyticsDesc: 'Lets us know how many visitors arrive and from where.',
        marketingLabel: 'Marketing (Meta Pixel)',
        marketingDesc: 'Lets us optimize our Facebook and Instagram ads.',
        back: 'Back',
      };

  const privacyHref = isEs ? '/privacy-policy' : '/en/privacy-policy';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          role="dialog"
          aria-label={t.title}
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6 sm:left-auto sm:max-w-md"
        >
          <div className="bg-[#0D1321] border border-[#C9A461]/40 rounded-2xl shadow-2xl shadow-black/60 p-5 sm:p-6">
            {!customizing ? (
              <>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl" aria-hidden>🍪</span>
                  <div>
                    <h3
                      className="text-[#F5F5F0] font-bold text-base sm:text-lg mb-1"
                      style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                    >
                      {t.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed">
                      {t.intro}{' '}
                      <Link
                        href={privacyHref}
                        className="text-[#C9A461] hover:text-[#E5B866] underline underline-offset-2"
                      >
                        {t.privacyLink}
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-semibold text-sm py-2.5 rounded-lg transition-colors"
                  >
                    {t.accept}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 border border-[#1F2937] hover:border-[#C9A461]/40 text-[#F5F5F0] font-medium text-sm py-2.5 rounded-lg transition-colors"
                  >
                    {t.reject}
                  </button>
                </div>
                <button
                  onClick={() => setCustomizing(true)}
                  className="w-full text-[#9CA3AF] hover:text-[#C9A461] text-xs sm:text-sm mt-3 underline underline-offset-2"
                >
                  {t.customize}
                </button>
              </>
            ) : (
              <>
                <h3
                  className="text-[#F5F5F0] font-bold text-base sm:text-lg mb-4"
                  style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                >
                  {t.customize}
                </h3>
                <div className="space-y-3 mb-5">
                  {/* Necessary, always on, disabled */}
                  <label className="flex items-start gap-3 cursor-not-allowed opacity-60">
                    <input type="checkbox" checked disabled className="mt-1 accent-[#C9A461]" />
                    <div>
                      <p className="text-[#F5F5F0] font-medium text-sm">{t.necessaryLabel}</p>
                      <p className="text-[#9CA3AF] text-xs leading-snug">{t.necessaryDesc}</p>
                    </div>
                  </label>
                  {/* Analytics */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsChecked}
                      onChange={(e) => setAnalyticsChecked(e.target.checked)}
                      className="mt-1 accent-[#C9A461]"
                    />
                    <div>
                      <p className="text-[#F5F5F0] font-medium text-sm">{t.analyticsLabel}</p>
                      <p className="text-[#9CA3AF] text-xs leading-snug">{t.analyticsDesc}</p>
                    </div>
                  </label>
                  {/* Marketing */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketingChecked}
                      onChange={(e) => setMarketingChecked(e.target.checked)}
                      className="mt-1 accent-[#C9A461]"
                    />
                    <div>
                      <p className="text-[#F5F5F0] font-medium text-sm">{t.marketingLabel}</p>
                      <p className="text-[#9CA3AF] text-xs leading-snug">{t.marketingDesc}</p>
                    </div>
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={handleSaveCustom}
                    className="flex-1 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-semibold text-sm py-2.5 rounded-lg transition-colors"
                  >
                    {t.save}
                  </button>
                  <button
                    onClick={() => setCustomizing(false)}
                    className="flex-1 border border-[#1F2937] hover:border-[#C9A461]/40 text-[#F5F5F0] font-medium text-sm py-2.5 rounded-lg transition-colors"
                  >
                    {t.back}
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Programmatic re-open of the banner, used by the footer link
 * "Cookie settings" / "Configuración de cookies" so users who already
 * decided can change their mind later.
 */
export function reopenCookieBanner() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem('dcm_consent_v1');
  window.location.reload();
}

export { readConsent };
