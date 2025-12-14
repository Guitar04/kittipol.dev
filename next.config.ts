import type { NextConfig } from "next";
import { getCspString } from "./src/utils/configs/csp";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: getCspString(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
