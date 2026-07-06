'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { detectSource, appendSourceTag } from '@/lib/source-tracking';
import { track } from '@/lib/analytics';

/**
 * Reusable WhatsApp CTA component with automatic source tagging.
 *
 * Use this in place of raw `<a href="wa.me/...">` whenever the source
 * of the patient matters (i.e. everywhere). Renders a regular link until
 * the client-side mounts, then upgrades the href to include the source
 * tag so the message Carolina receives in WhatsApp/GHL is attributed.
 *
 * Pre-mount fallback: the unmodified base message, still works, just
 * without the `[fuente: X]` suffix.
 *
 * Tracking: optionally fire a track.whatsapp(label) on click.
 */

const WA_NUMBER = '573163975232';

interface Props {
  /** Base message text (without source tag, that gets appended automatically) */
  message: string;
  /** Page locale, controls "fuente" vs "source" prefix in the tag */
  locale: 'es' | 'en';
  /** Optional analytics label for the click event (e.g. 'hero_primary', 'calculator_lead_allon4') */
  trackingLabel?: string;
  /** Phone override (defaults to Carolina's WhatsApp) */
  phone?: string;
  /** Rendered content (button label, icon + label, etc.) */
  children: ReactNode;
  /** Pass-through className */
  className?: string;
  /** Pass-through aria-label for accessibility */
  ariaLabel?: string;
}

export default function WhatsAppLink({
  message,
  locale,
  trackingLabel,
  phone = WA_NUMBER,
  children,
  className,
  ariaLabel,
}: Props) {
  const [taggedHref, setTaggedHref] = useState<string>(() => buildBaseHref(phone, message));

  useEffect(() => {
    const detection = detectSource();
    const tagged = appendSourceTag(message, locale, detection);
    setTaggedHref(`https://wa.me/${phone}?text=${encodeURIComponent(tagged)}`);
  }, [phone, message, locale]);

  const handleClick = () => {
    if (trackingLabel) {
      track.whatsapp(trackingLabel);
    }
  };

  return (
    <a
      href={taggedHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function buildBaseHref(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
