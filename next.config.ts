/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/blog-renzo-guarise', // Replace with your repository name
  assetPrefix: '/blog-renzo-guarise/',
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
