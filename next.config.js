/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger también lo inyecta al compilar; permite desplegar por SSH el mismo formato.
  output: 'standalone',
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
