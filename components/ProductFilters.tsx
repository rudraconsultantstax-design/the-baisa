"use client";

import { useMemo, useState } from "react";
import { colors, collections, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductFilters() {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState("All");
  const [color, setColor] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      const matchesCollection = collection === "All" || product.collection === collection;
      const matchesColor = color === "All" || product.color === color;
      return matchesQuery && matchesCollection && matchesColor;
    });

    return [...result].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return a.id - b.id;
    });
  }, [query, collection, color, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="grid gap-4 border-y border-[#2C1810]/10 bg-white/55 py-5 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#2C1810]">
          Search products
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search floral, bandhani, red..."
            className="border border-[#2C1810]/20 bg-white px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none focus:border-[#C65D3A]"
          />
        </label>
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#2C1810]">
          Collection
          <select value={collection} onChange={(event) => setCollection(event.target.value)} className="border border-[#2C1810]/20 bg-white px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none focus:border-[#C65D3A]">
            <option>All</option>
            {collections.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#2C1810]">
          Color
          <select value={color} onChange={(event) => setColor(event.target.value)} className="border border-[#2C1810]/20 bg-white px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none focus:border-[#C65D3A]">
            <option>All</option>
            {colors.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#2C1810]">
          Sort
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-[#2C1810]/20 bg-white px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none focus:border-[#C65D3A]">
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-black uppercase tracking-[0.08em]">All Products</h2>
        <p className="text-sm font-bold text-[#7f6b5d]">{filtered.length} styles</p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="mt-12 border border-[#C65D3A]/40 bg-white p-8 text-center">
          <p className="text-lg font-bold">No products match those filters.</p>
          <button onClick={() => { setQuery(""); setCollection("All"); setColor("All"); setSort("featured"); }} className="mt-4 bg-[#C65D3A] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white">
            Clear filters
          </button>
        </div>
      ) : null}
    </section>
  );
}
