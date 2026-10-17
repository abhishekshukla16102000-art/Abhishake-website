import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thinkers360.com",
        pathname: "/tl/assets/images/badges/top50/**",
      },
    ],
  },
};

export default nextConfig;
