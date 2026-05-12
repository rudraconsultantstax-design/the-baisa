import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { business } from "@/lib/business";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <section className="fabric-pattern min-h-[76vh] px-4 text-white">
        <div className="mx-auto flex min-h-[76vh] max-w-7xl items-center py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#D4A853]">{business.tagline}</p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[1.02] tracking-[0.04em] sm:text-7xl">
              Authentic Jaipur Ethnic Wear from Sanganer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F5F0E8]/85">
              {business.brand} brings traditional Rajputi silhouettes, handcrafted textile character, and inclusive sizing from XS to 8XL for everyday and festive dressing.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/catalog" className="bg-[#C65D3A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white">
                Explore Catalog
              </Link>
              <Link href="/bulk-wholesale" className="border border-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white">
                Bulk Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="jaipur-border px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C65D3A]">Shop The Baisa</p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-[0.04em]">Featured Products</h2>
            </div>
            <Link href="/all-products" className="text-sm font-black uppercase tracking-[0.14em] text-[#C65D3A]">
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#2C1810] px-4 py-16 text-[#F5F0E8]">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {["Sanganer-made craftsmanship", "XS-8XL inclusive sizing", "WhatsApp-first support"].map((item) => (
            <div key={item} className="border border-white/15 p-7">
              <h3 className="text-xl font-black uppercase tracking-[0.08em]">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Traditional silhouettes, reliable service, and a direct line to the Jaipur team for retail and wholesale orders.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
