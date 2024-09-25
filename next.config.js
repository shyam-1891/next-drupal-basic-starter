/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_IMAGE_DOMAIN,
        port: "",
        pathname: "/sites/default/files/**",
      },
    ],
  },
}

module.exports = nextConfig
