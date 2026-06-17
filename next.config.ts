import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  transpilePackages: ['@futuremove/ui', '@futuremove/config'],
};

export default nextConfig;