/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  experimental: {
    appDir: true,
  },
});

module.exports = withPWA({
  experimental: {
    appDir: true,
  },
});
