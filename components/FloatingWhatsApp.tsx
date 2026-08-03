'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@/lib/analytics';
import { detectSource, appendSourceTag } from '@/lib/source-tracking';

/**
 * Sticky WhatsApp button, bottom-right, always visible on mobile + desktop.
 *
 * Why this exists:
 * Carolina's GA4 (May 2026) showed only 1 whatsapp_click in 7 days from 29
 * users, a 3.5% rate vs ~15-25% benchmark for dental clinics. The CTAs in
 * Hero + Nav both routed to /contacto (a separate page), adding 2–3 clicks
 * of friction before users could open WhatsApp. This component eliminates
 * that friction by giving 1-click access on every page.
 *
 * Behavior:
 * - Hidden until user scrolls past 200px (avoids covering the Hero CTA on first paint)
 * - Tooltip "¿Necesitas ayuda?" pops in once per session after 4s on first page view
 * - Prefilled WhatsApp message includes the current page path for context
 * - Tracks `whatsapp_click` (GA4) + Meta Pixel `Contact` via track.whatsapp()
 */
const WA_NUMBER = '573163975232'; // Carolina personal
const SHOW_AFTER_SCROLL_PX = 200;
const TOOLTIP_DELAY_MS = 4000;
const TOOLTIP_SESSION_KEY = 'wa_tooltip_shown_v1';

function buildBaseMessage(locale: string, pathname: string): string {
  const isEs = locale === 'es' || !pathname.startsWith('/en');
  const cleanPath = pathname.replace(/^\/en/, '') || '/';
  const pageLabel =
    cleanPath === '/'
      ? isEs ? 'la página principal' : 'the home page'
      : cleanPath;
  return isEs
    ? `Hola Dra. Carolina 🌐 Llegué desde su sitio web (${pageLabel}) y me gustaría más información.`
    : `Hi Dr. Carolina 🌐 I came from your website (${pageLabel}) and I would like more information.`;
}

interface Props {
  locale: string;
}

export default function FloatingWhatsApp({ locale }: Props) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const isEs = locale === 'es';
  const baseMessage = buildBaseMessage(locale, pathname);

  // href is computed client-side after hydrate so the [fuente: X] source
  // tag (from URL params / referrer) is applied. Pre-mount fallback uses
  // the un-tagged message, still works, just lacks attribution data.
  const [href, setHref] = useState<string>(
    () => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(baseMessage)}`,
  );

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_SCROLL_PX);
    onScroll(); // initial check (page may load already scrolled, e.g. anchor)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Compute the tagged href once mounted (client only, detectSource
    // reads URL params + referrer + sessionStorage which require window).
    const detection = detectSource();
    const tagged = appendSourceTag(baseMessage, isEs ? 'es' : 'en', detection);
    setHref(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(tagged)}`);
  }, [baseMessage, isEs]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Show tooltip once per session, 4s after scroll triggers visibility
    if (!visible) return;
    const alreadyShown = sessionStorage.getItem(TOOLTIP_SESSION_KEY);
    if (alreadyShown) return;
    const t = setTimeout(() => {
      setShowTooltip(true);
      sessionStorage.setItem(TOOLTIP_SESSION_KEY, '1');
      // Auto-hide after 6 seconds
      setTimeout(() => setShowTooltip(false), 6000);
    }, TOOLTIP_DELAY_MS);
    return () => clearTimeout(t);
  }, [visible]);

  const ariaLabel = isEs ? 'Escribir por WhatsApp a la Dra. Carolina' : 'Message Dr. Carolina on WhatsApp';
  const tooltipText = isEs ? '¿Necesitas ayuda?' : 'Need help?';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-5 right-5 z-50 flex items-end gap-3 sm:bottom-6 sm:right-6"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="hidden sm:block bg-white border border-[#C9A461]/30 text-[#211E18] text-sm font-medium px-4 py-2.5 rounded-lg shadow-xl mb-1.5 whitespace-nowrap relative"
              >
                {tooltipText}
                <span className="absolute right-[-6px] bottom-3 w-3 h-3 bg-white border-r border-b border-[#C9A461]/30 transform rotate-[-45deg]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            onClick={() => track.whatsapp(`floating_${pathname.replace(/\W+/g, '_').slice(0, 40)}`)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-60" />
            {/* WhatsApp icon (SVG, no external dep) */}
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              className="relative w-8 h-8 sm:w-9 sm:h-9"
              aria-hidden="true"
            >
              <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
