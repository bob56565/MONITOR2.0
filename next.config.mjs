const basePath = (process.env.GITHUB_PAGES && '/MONITOR2.0') || process.env.NEXT_PUBLIC_BASE_PATH?.trim() || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Keep assets working on GitHub Pages while staying root-based in dev
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  trailingSlash: true,
}

export default nextConfig
