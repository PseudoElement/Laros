/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['165.227.155.246', 'http://165.227.155.246'],
  },
}

module.exports = nextConfig
