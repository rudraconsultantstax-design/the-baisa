import path from "node:path";
import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname)
  },
  images: {
    // next/image optimization needs a runtime; for a static export to shared hosting
    // we mark images as unoptimized so they ship directly from the remote CDN.
    unoptimized: isStaticExport,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.shopify.com" }
    ]
  },
  ...(isStaticExport ? { output: "export", trailingSlash: true } : {})
};

export default nextConfig;
