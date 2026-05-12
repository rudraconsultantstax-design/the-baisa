import Link from "next/link";
import { collections, products } from "@/lib/products";

export default function CollectionsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">All Collections</p>
      <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">Sanganer prints by collection</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection) => {
          const count = products.filter((product) => product.collection === collection).length;
          return (
            <Link key={collection} href="/catalog" className="bg-white p-7 shadow-sm ring-1 ring-[#2C1810]/10 transition hover:-translate-y-1 hover:shadow-xl">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#C65D3A]">{count} styles</span>
              <h2 className="mt-4 text-2xl font-black uppercase tracking-[0.06em]">{collection}</h2>
              <p className="mt-4 text-sm leading-7 text-[#7f6b5d]">Curated poshak fabrics, odhanis, florals, and festive colors.</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
