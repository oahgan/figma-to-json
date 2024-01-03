/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 使用相对路径
  assetPrefix: './',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
