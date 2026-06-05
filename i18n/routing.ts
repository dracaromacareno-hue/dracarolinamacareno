import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed',
  // Spanish-first: serve `/` as Spanish always and never auto-redirect to `/en`
  // based on the browser language. Visitors choose English manually via the
  // language switcher. (~90% of the audience is Spanish-speaking diaspora.)
  localeDetection: false
});
