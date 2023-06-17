/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.shutterstock.com", "images.pexels.com"],
    remotePatterns: [],
  },

  remotePatterns: [
    {
      protocol: "https",
      hostname: "shutterstock.com",
    },
  ],
};

module.exports = nextConfig;
