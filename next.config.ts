import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  transpilePackages: ['@futuremove-consulting/ui', '@futuremove-consulting/config'],
};

export default nextConfig;