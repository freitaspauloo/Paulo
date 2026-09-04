import type { NextConfig } from "next";

const basePath = "/paulo";

const nextConfig: NextConfig = {
  basePath,
  // Verification builds target a separate dir so they can't overwrite the
  // running dev server's chunks (which surfaces as "Cannot find module ./x.js").
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
