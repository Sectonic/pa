/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActionsBodySizeLimit: '4mb',
  },
}

module.exports = nextConfig
