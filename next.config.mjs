import { join } from 'path';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: []
  }
};

export default nextConfig;

