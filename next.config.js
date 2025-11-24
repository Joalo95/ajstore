/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configuración de imágenes
  images: {
    domains: ['loremflickr.com'],
  },

  // Configuración de Webpack para resolver path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
      '~': require('path').resolve(__dirname, 'src/modules'),
    };
    return config;
  },
}

module.exports = nextConfig