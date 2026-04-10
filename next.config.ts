import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // 性能优化
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
