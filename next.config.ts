import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://i5.walmartimages.com/**')],
  },
}

export default nextConfig;
