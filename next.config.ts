import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

const legacyRedirects = [
  { from: '/estetica-oral', to: '/servicios/estetica-dental' },
  { from: '/ortodoncias', to: '/servicios/ortodoncia' },
  { from: '/protesis-hibrida', to: '/servicios/protesis-fija' },
  { from: '/todo-lo-que-debes-saber-de-implantes', to: '/blog/implantes-dentales-medellin' },
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return legacyRedirects.flatMap(({ from, to }) => [
      { source: from, destination: to, permanent: true },
      { source: `/en${from}`, destination: `/en${to}`, permanent: true },
    ]);
  },
};

export default withNextIntl(nextConfig);
