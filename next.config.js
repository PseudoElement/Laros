/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/, // *.svg?url
    })
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ['@svgr/webpack'],
    })
    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'developer.laros.ch',
      },
    ],
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
    localeDetection: false,
  },
}

module.exports = () => {
  const plugins = [withVideos]
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  })
  return config
}
