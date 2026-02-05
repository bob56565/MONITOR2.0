/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MONITOR2.0',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'recharts'],
  },
  // Disable server-side features for static export
  trailingSlash: true,
}

export default nextConfig
