/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,

  experimental: {
    ppr: false, // 👈 ADD HERE
  },

  images: {
    unoptimized: true,
    loader: "default",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85, 90, 95],
  },
  turbopack: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Prevents bundling the fs module on the client side
      };
    }
    return config;
  },
};


export default nextConfig;