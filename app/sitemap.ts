import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { products } from "@/lib/products";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/catalog",
  "/all-collections",
  "/all-products",
  "/new-drop-club",
  "/about",
  "/size-chart",
  "/faqs",
  "/bulk-wholesale",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${business.website}`;
  const lastModified = new Date();
  const fixed = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));
  const productRoutes = products.map((product) => ({
    url: `${base}/product/${product.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));
  return [...fixed, ...productRoutes];
}
