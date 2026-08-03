import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed',
  // Spanish-first: serve `/` as Spanish always and never auto-redirect to `/en`
  // based on the browser language. Visitors choose English manually via the
  // language switcher. (~90% of the audience is Spanish-speaking diaspora.)
  localeDetection: false,

  /**
   * Sin cookie NEXT_LOCALE (agosto 2026). Es lo que hacía que NINGUNA página se
   * cacheara en el CDN.
   *
   * next-intl escribía `set-cookie: NEXT_LOCALE=es` en cada respuesta, y una
   * respuesta que trae Set-Cookie no la guarda ningún CDN: podría filtrar la
   * cookie de un visitante a otro. Por eso Vercel devolvía
   * `private, no-cache, no-store` y `x-vercel-cache: MISS` en toda página HTML,
   * pese a que el build ya las prerrenderiza. Cada rastreo de Googlebot
   * despertaba la función serverless, y Google baja la tasa de rastreo cuando el
   * servidor responde lento.
   *
   * Se puede quitar sin perder nada porque la cookie solo sirve para recordar el
   * idioma elegido y aquí `localeDetection` ya está en false: el idioma lo
   * decide la URL (/servicios vs /en/servicios), nunca la cookie. El conmutador
   * de idioma navega a la URL del otro idioma, no lee la cookie.
   *
   * Cómo se encontró: `/robots.txt` (que el matcher del middleware excluye) sí
   * cacheaba, y la única diferencia en las cabeceras era el Set-Cookie.
   */
  localeCookie: false
});
