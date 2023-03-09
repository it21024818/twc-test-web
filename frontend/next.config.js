/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  exportPathMap: async function () {
    return {
      '/index': { page: '/' },
      // other URL mappings...
    };
  },
}

module.exports = nextConfig
