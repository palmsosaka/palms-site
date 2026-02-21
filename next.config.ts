import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/palms-site",
  images: { unoptimized: true },
};

export default nextConfig;
