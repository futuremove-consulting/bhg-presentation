import type { NextConfig } from 'next';

const repoName = 'bhg-presentation';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  transpilePackages: ['@futuremove/ui', '@futuremove/config'],
};

export default nextConfig;