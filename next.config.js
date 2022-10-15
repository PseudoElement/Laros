/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['165.227.155.246', 'http://165.227.155.246'],
  },
}

module.exports = nextConfig
