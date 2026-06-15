import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const polyfillNoop = path.join(__dirname, "lib/modern-browser-noop.js");

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
    optimizeCss: true,
    optimizePackageImports: ["gsap"],
  },
  webpack: (config, { webpack, isServer, dev }) => {
    if (!isServer && !dev) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /[\\/]build[\\/]polyfills[\\/]polyfill-module(\.js)?$/,
          polyfillNoop,
        ),
      );
    }
    return config;
  },
};

export default nextConfig;
