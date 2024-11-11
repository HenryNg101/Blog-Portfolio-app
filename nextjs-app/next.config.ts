import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/projects/:id', // user-facing URL
        destination: '/api/projects/:id', // API route for redirect logic
      },
    ];
  },
};

export default nextConfig;
