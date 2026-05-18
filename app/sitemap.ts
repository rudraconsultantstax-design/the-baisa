import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export const dynamic = "force-static";

const routes = [
  "",
  "/catalog",
  "/all-collections",
  "/all-products",
  "/about",
  "/size-chart",
  "/faqs",
  "/bulk-wholesale",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${business.website}`;
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}
