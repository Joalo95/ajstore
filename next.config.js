/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next.js 15 usa Turbopack por defecto en desarrollo
  // Esto mejora significativamente la velocidad de compilación
  
  // Si tienes problemas con Turbopack, puedes deshabilitarlo temporalmente:
  // experimental: {
  //   turbo: {
  //     enabled: false
  //   }
  // },

  // Configuración de imágenes si las necesitas optimizar
  images: {
    domains: ['loremflickr.com'], // Agrega los dominios de tus imágenes
  },
}

module.exports = nextConfig
