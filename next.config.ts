import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disables Image Optimization API for static exports
  },  
};

export default nextConfig;
