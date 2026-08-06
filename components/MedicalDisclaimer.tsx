'use client';

import { useState } from 'react';
import Link from 'next/link';
import { reopenCookieBanner } from './CookieConsent';

/**
 * Medical Disclaimer + Cookie Settings link, lives inside the Footer
 * on every page. Required by Google Ads "Healthcare and medicines"
 * policy and Meta Ads "Health and Wellness" policy.
 */

interface Props {
  locale: string;
}

export default function MedicalDisclaimer({ locale }: Props) {
  const isEs = locale === 'es';
  const [confirming, setConfirming] = useState(false);

  const handleCookieReopen = () => {
    if (confirming) {
      reopenCookieBanner();
    } else {
      setConfirming(true);
      setTimeout(() => setConfirming(false), 3000);
    }
  };

  const t = isEs
    ? {
        disclaimer:
          'La información publicada en este sitio web tiene fines educativos e informativos y no constituye consejo médico, diagnóstico ni plan de tratamiento. Cada caso es único, el diagnóstico y plan se determinan después de una evaluación clínica completa con la Dra. Carolina Macareno. Los resultados individuales pueden variar.',
        privacy: 'Política de Privacidad',
        terms: 'Términos y Condiciones',
        cookies: 'Configuración de cookies',
        cookiesConfirm: 'Toca de nuevo para confirmar',
      }
    : {
        disclaimer:
          'Information published on this website is for educational and informational purposes only and does not constitute medical advice, diagnosis, or treatment plan. Each case is unique, diagnosis and plan are determined after a complete clinical evaluation with Dr. Carolina Macareno. Individual results may vary.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie settings',
        cookiesConfirm: 'Tap again to confirm',
      };

  const privacyHref = isEs ? '/privacy-policy' : '/en/privacy-policy';
  const termsHref = isEs ? '/terms' : '/en/terms';

  /*
    COLORES DE TEMA OSCURO A PROPÓSITO (5-ago-2026).

    Este bloque venía con los colores del tema claro (`#77726A` sobre borde
    `#E8E3DA`), pero vive dentro del pie de página, que tiene fondo `#1F2937`.
    Resultado medido: contraste 3,08 contra el mínimo de 4,5. Y como el pie está
    en TODAS las páginas, era el fallo de legibilidad más repetido del sitio: el
    aviso médico y los dos enlaces legales, que son justo lo que tiene que poder
    leerse.

    El pie es oscuro por diseño, así que lo que se corrige es este bloque, no el
    pie. `#9CA3AF` y `#C9A461` son los que ya usa el resto del pie.

    Si algún día este componente se reutiliza sobre fondo claro, estos colores
    hay que volverlos a mirar: hoy solo lo usa Footer.tsx.
  */
  return (
    <div className="border-t border-[#374151] pt-6 mt-8">
      <p className="text-[#9CA3AF] text-xs leading-relaxed mb-4 max-w-3xl mx-auto text-center">
        <strong className="text-[#D1D5DB]">{isEs ? 'Aviso médico:' : 'Medical disclaimer:'}</strong> {t.disclaimer}
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs">
        <Link href={privacyHref} className="text-[#9CA3AF] hover:text-[#C9A461] transition-colors">
          {t.privacy}
        </Link>
        <Link href={termsHref} className="text-[#9CA3AF] hover:text-[#C9A461] transition-colors">
          {t.terms}
        </Link>
        <button
          onClick={handleCookieReopen}
          className="text-[#9CA3AF] hover:text-[#C9A461] transition-colors cursor-pointer"
        >
          {confirming ? t.cookiesConfirm : t.cookies}
        </button>
      </div>
    </div>
  );
}
