/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF primero (30% más pequeño que WebP), luego WebP como fallback
    formats: ['image/avif', 'image/webp'],

    // Tamaños de dispositivo — evita generar variantes innecesarias
    deviceSizes: [390, 768, 1024, 1280, 1440],
    imageSizes: [320, 640, 960],

    // Cache de 1 año en CDN — las imágenes no cambian
    minimumCacheTTL: 31536000,

  },

  // Headers de seguridad y caché para assets estáticos
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
