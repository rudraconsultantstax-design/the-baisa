import Link from "next/link";
import { collections, products } from "@/lib/products";
import { business } from "@/lib/business";

const intentCollections = [
  ["Under ₹999", "5% GST sweet-spot picks for everyday wear.", "/all-products"],
  ["Sanganeri Block Print", "Geography-specific authenticity — printed at our own Sanganer unit.", "/catalog"],
  ["Rajputi Suit Sets", "Hand-finished Rajputi cuts with bandhej and digital-print odhanis.", "/catalog"],
  ["Plus Size XS-8XL", "Inclusive fit across most bestsellers. Ask on WhatsApp for stock.", "/size-chart"],
  ["Wholesale Lots", "MOQ from 25 pcs · Manufacturer-direct pricing.", "/bulk-wholesale"],
  ["New Drop Club", "Weekly fresh drops on WhatsApp — free signup.", "/new-drop-club"]
];

export default function CollectionsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">All Collections</p>
      <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">Shop Sanganer prints by collection or intent</h1>

      <h2 className="mt-12 text-xl font-black uppercase tracking-[0.08em]">Shop by intent</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {intentCollections.map(([title, body, href]) => (
          <Link key={title} href={href} className="bg-white p-6 shadow-sm ring-1 ring-[#2C1810]/10 transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-lg font-black uppercase tracking-[0.06em] text-[#2C1810]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#5d493f]">{body}</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-black uppercase tracking-[0.08em]">By print collection</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection) => {
          const count = products.filter((product) => product.collection === collection).length;
          return (
            <Link key={collection} href="/catalog" className="bg-white p-7 shadow-sm ring-1 ring-[#2C1810]/10 transition hover:-translate-y-1 hover:shadow-xl">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#C65D3A]">{count} styles</span>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-[0.06em]">{collection}</h3>
              <p className="mt-4 text-sm leading-7 text-[#7f6b5d]">Curated poshak fabrics, odhanis, florals, and festive colors.</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href={business.whatsappCatalogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
        >
          Get full catalog on WhatsApp
        </a>
        <Link href="/catalog" className="border border-[#2C1810] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#2C1810]">
          Browse with filters
        </Link>
      </div>
    </section>
  );
}
