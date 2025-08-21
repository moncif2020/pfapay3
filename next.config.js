/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar', 'fr', 'es', 'tr', 'zh', 'ja', 'ko', 'ber', 'ary'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  // تأكد من دعم app directory
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
