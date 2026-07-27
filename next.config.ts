import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — deployed to GitHub Pages at madhavamshahi.github.io.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
