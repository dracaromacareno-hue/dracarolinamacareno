'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

/**
 * Botón «Agregar como fuente preferida en Google» (16-nov-2026).
 *
 * Quien marca el sitio como fuente preferida ve más su contenido en Noticias
 * destacadas, y desde el 27-may-2026 también en las Vistas creadas con IA y el
 * Modo IA, con la etiqueta «Preferida». Solo cambia los resultados de quien lo
 * marca: no sube el sitio para el público general. Guía oficial:
 * https://developers.google.com/search/docs/appearance/preferred-sources
 *
 * Por qué el modo manual y no el <div google-add-preferred-source-btn> estándar:
 * el estándar solo se dibuja en los divs que existen cuando carga el script, y
 * en este sitio se navega entre artículos sin recargar la página, así que el
 * botón del segundo artículo quedaba vacío. Con el modo manual el botón es
 * nuestro y al hacer clic se llama a `addPreferredSource()`, que es lo que
 * documenta Google para diseños propios.
 *
 * Si el script de Google todavía no cargó o lo bloquea un navegador, el clic
 * sigue el enlace directo a la herramienta de Google con el sitio ya buscado.
 *
 * No va en las landings de pauta ni en la página de gracias: ahí el único
 * botón tiene que ser el de WhatsApp.
 */

const DEEPLINK = 'https://www.google.com/preferences/source?q=dracarolinamacareno.com';

const RUTAS_SIN_BOTON = [
  /^\/(en\/)?landing(\/|$)/,
  /^\/(en\/)?gracias(\/|$)/,
  /^\/(en\/)?diseno-de-sonrisa\/?$/,
  /^\/(en\/)?implantes(\/|$)/,
];

interface PreferredSourceApi {
  init: (opts: { theme?: 'light' | 'dark'; lang?: string }) => void;
  addPreferredSource: () => void;
}

type Cola = Array<(api: PreferredSourceApi) => void>;

interface VentanaConGoogle {
  PREFERRED_SOURCE?: Cola;
  __dcmPreferredSource?: PreferredSourceApi;
  __dcmPreferredSourceEnCola?: boolean;
  gtag?: (...args: unknown[]) => void;
}

interface Props {
  locale: string;
  variant: 'footer' | 'article';
}

export default function PreferredSourceButton({ locale, variant }: Props) {
  const pathname = usePathname() || '';
  const isEs = locale !== 'en';

  useEffect(() => {
    const w = window as unknown as VentanaConGoogle;
    if (w.__dcmPreferredSourceEnCola) return;
    w.__dcmPreferredSourceEnCola = true;
    (w.PREFERRED_SOURCE = w.PREFERRED_SOURCE || []).push((api) => {
      api.init({ theme: 'light', lang: document.documentElement.lang || 'es' });
      w.__dcmPreferredSource = api;
    });
  }, []);

  if (RUTAS_SIN_BOTON.some((r) => r.test(pathname))) return null;

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const w = window as unknown as VentanaConGoogle;
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'preferred_source_click', { placement: variant, page_path: pathname });
    }
    const api = w.__dcmPreferredSource;
    if (api) {
      e.preventDefault();
      api.addPreferredSource();
    }
  };

  const label = isEs ? 'Agregar como fuente preferida en Google' : 'Add as a preferred source on Google';

  const icono = (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.5a.56.56 0 011.04 0l2.13 4.98 5.4.46a.56.56 0 01.32.98l-4.1 3.55 1.23 5.28a.56.56 0 01-.84.61L12 16.6l-4.66 2.76a.56.56 0 01-.84-.61l1.23-5.28-4.1-3.55a.56.56 0 01.32-.98l5.4-.46 2.13-4.98z" />
    </svg>
  );

  const script = (
    <Script
      id="google-preferred-sources"
      src="https://news.google.com/swg/js/v1/publisher.js"
      strategy="lazyOnload"
      preferred-sources-control="manual"
    />
  );

  if (variant === 'footer') {
    return (
      <>
        {script}
        <a
          href={DEEPLINK}
          target="_blank"
          rel="noopener"
          onClick={onClick}
          className="inline-flex items-center gap-2 border border-[#C9A461]/40 text-[#F5F5F0] hover:text-[#C9A461] hover:border-[#C9A461] text-xs px-4 py-2 rounded-full transition-colors"
        >
          {icono}
          {label}
        </a>
      </>
    );
  }

  return (
    <>
      {script}
      <div className="mt-8 border-t border-[#E8E3DA] pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <p className="text-[#77726A] text-sm">
          {isEs
            ? '¿Te sirvió? Agrégame como fuente preferida y verás más mis respuestas cuando busques en Google sobre tus dientes.'
            : 'Found this useful? Add me as a preferred source and you will see more of my answers when you search Google about your teeth.'}
        </p>
        <a
          href={DEEPLINK}
          target="_blank"
          rel="noopener"
          onClick={onClick}
          className="inline-flex items-center gap-2 border border-[#C9A461] text-[#8A6B2E] hover:bg-[#C9A461]/10 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
        >
          {icono}
          {label}
        </a>
      </div>
    </>
  );
}
