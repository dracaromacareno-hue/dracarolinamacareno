import type { Metadata } from 'next';

const BASE_URL = 'https://dracarolinamacareno.com';

interface MetaOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  locale?: string;
  type?: 'website' | 'article' | 'book';
  publishedTime?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  keywords = [],
  path = '/',
  locale = 'es',
  type = 'website',
  publishedTime,
  image = '/og-image.webp',
}: MetaOptions): Metadata {
  const fullTitle = title.includes('Dra. Carolina')
    ? title
    : `${title} | Dra. Carolina Macareno`;

  const canonicalUrl = locale === 'es'
    ? `${BASE_URL}${path}`
    : `${BASE_URL}/en${path}`;

  const altUrl = locale === 'es'
    ? `${BASE_URL}/en${path}`
    : `${BASE_URL}${path}`;

  // Spanish and English canonical URLs regardless of the current locale, so
  // hreflang stays consistent in both directions.
  const esUrl = locale === 'es' ? canonicalUrl : altUrl;
  const enUrl = locale === 'en' ? canonicalUrl : altUrl;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'dra carolina macareno',
      'rehabilitacion oral medellin',
      'implantes dentales medellin',
      'diseño de sonrisa medellin',
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: esUrl,
        // es-419: Latin American Spanish umbrella. The audience is ~90% Hispanic
        // diaspora (US, Puerto Rico, Panama), this signals Google to serve the
        // Spanish version to Spanish speakers across Latin America, not just CO.
        'es-419': esUrl,
        en: enUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'Dra. Carolina Macareno',
      type: type === 'article' ? 'article' : 'website',
      locale: locale === 'es' ? 'es_CO' : 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && type === 'article' ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
