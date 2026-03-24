/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lavista.com.eg',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
