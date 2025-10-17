import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        pathname: "/res/hashnode/image/**",
      },
    ],
  },
};

export default nextConfig;
