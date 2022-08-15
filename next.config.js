const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  async redirects() {
    return [
      {
        source: '/info',
        destination: '/info/in-canada/1',
        permanent: true,
      },
      {
        source: '/events',
        destination: '/events/1',
        permanent: true,
      },
      {
        source: '/our-help',
        destination: '/our-help/1',
        permanent: true,
      },
    ]
  },
  ...nextTranslate()
}