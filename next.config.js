/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ['image/avif', 'image/webp'], // Add 'image/webp' for WebP images
      domains: ['media.graphassets.com'],
    },
  }
  
  module.exports = nextConfig;
  