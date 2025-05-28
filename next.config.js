/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer, dev }) => {
    config.cache = false; // Disable webpack caching to prevent ENOENT errors
    return config;
  },
};

module.exports = nextConfig;