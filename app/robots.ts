import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${business.website}`;
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin"] }],
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}
