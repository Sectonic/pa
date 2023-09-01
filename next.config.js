/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '4mb',
  },
}

module.exports = nextConfig
