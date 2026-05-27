import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  output: "export",
  compress: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ["framer-motion", "lottie-react"],
  },
};

export default nextConfig;
