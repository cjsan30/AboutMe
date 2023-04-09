/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    unoptimized: true,
  },

  exportPathMap: async function (defaultPathMap) {
    return {
      '/' : { page: '/' },
    };
  },
};

module.exports = nextConfig
