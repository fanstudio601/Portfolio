import type { NextConfig } from "next";

// Static export for GitHub Pages.
// When deploying to a project page (https://<user>.github.io/<repo>/), the
// site is served from a sub-path, so we need a matching basePath.
// Set GH_PAGES=true and (optionally) BASE_PATH=/portfolio in the build env.
const basePath = process.env.GH_PAGES === "true" ? process.env.BASE_PATH ?? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true, // emits /1/index.html so GH Pages routing works
  images: {
    unoptimized: true, // required for static export; we use raw <img> via @/components/Img anyway
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
