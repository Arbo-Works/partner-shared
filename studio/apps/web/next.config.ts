import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "node:path";

const workspaceRoot = path.join(__dirname, "..", "..");

const nextConfig: NextConfig = {
  // Configure Next to build a standalone directory for deployment.
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/output
  output: "standalone",
  outputFileTracingRoot: workspaceRoot,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack: (config) => {
    // Add rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
};

if (process.env.VERCEL) {
  delete nextConfig.output;
  delete nextConfig.outputFileTracingRoot;
  const turbopack = nextConfig.turbopack;
  if (turbopack) turbopack.root = workspaceRoot;
}

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
