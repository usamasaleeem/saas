import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Reduces memory by only importing used icons
    optimizePackageImports: ["lucide-react"],
    // Prevents large sourcemaps from consuming server memory
    serverSourceMaps: false,
  },
  // Keeps fewer pages in memory during development
  onDemandEntries: {
    maxInactiveAge: 15 * 1000, // 15 seconds (default is 60s)
    pagesBufferLength: 2,      // 2 pages (default is 2)
  },
};

export default nextConfig;
