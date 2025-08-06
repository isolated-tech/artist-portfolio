/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['i.imgur.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
    ],
  },
}

export default config