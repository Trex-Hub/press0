import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  reactCompiler: true,
  transpilePackages: ['@repo/utils'],
};

export default nextConfig;
