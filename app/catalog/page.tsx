import type { Metadata } from "next";
import { ProductFilters } from "@/components/ProductFilters";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse The Baisa catalog — Rajputi suit sets, bandhej odhanis, floral prints, and festive collections from Sanganer, Jaipur."
};

export default function CatalogPage() {
  return (
    <>
      <section className="bg-[#2C1810] px-4 py-16 text-[#F5F0E8]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">Catalog</p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">Search, filter, and shop faster</h1>
        </div>
      </section>
      <ProductFilters />
    </>
  );
}
