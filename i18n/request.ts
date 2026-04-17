import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { readFileSync } from 'fs';
import { join } from 'path';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'es' | 'en')) {
    locale = routing.defaultLocale;
  }

  const messagesPath = join(process.cwd(), 'messages', `${locale}.json`);
  const messages = JSON.parse(readFileSync(messagesPath, 'utf-8'));

  return {
    locale,
    messages
  };
});
