import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const orderUrl = business.whatsappOrderUrl(product.name, product.price);
  return (
    <article className="group flex flex-col bg-white shadow-sm ring-1 ring-[#2C1810]/10 transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#2C1810]/5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 bg-[#C65D3A] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
            {product.tag}
          </span>
          <span className="absolute right-3 top-3 bg-[#2C1810] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#F5F0E8]">
            Sanganer Made
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C65D3A]">{product.collection}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-2 min-h-16 text-sm font-bold leading-5 text-[#2C1810] hover:text-[#C65D3A]">{product.name}</h3>
        </Link>
        <div className="mt-3 flex items-end gap-2">
          <span className="text-lg font-black text-[#2C1810]">₹{product.price.toLocaleString("en-IN")}</span>
          {product.compareAt ? (
            <span className="text-sm text-[#7f6b5d] line-through">₹{product.compareAt.toLocaleString("en-IN")}</span>
          ) : null}
          {product.price <= 999 ? (
            <span className="ml-auto bg-[#D4A853]/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#7a5b1f]">
              Under ₹999
            </span>
          ) : null}
        </div>
        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 border-t border-[#2C1810]/10 pt-3 text-[11px] font-semibold text-[#7f6b5d]">
          <div>
            <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-[#2C1810]/60">Sizes</dt>
            <dd className="mt-0.5">{product.sizeRange}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-[#2C1810]/60">Fabric</dt>
            <dd className="mt-0.5">{product.fabric}</dd>
          </div>
        </dl>
        <div className="mt-auto grid gap-2 pt-4">
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#1ebe5d]"
          >
            Order on WhatsApp
          </a>
          <Link
            href={`/product/${product.slug}`}
            className="block w-full border border-[#2C1810] px-4 py-2.5 text-center text-xs font-black uppercase tracking-[0.14em] text-[#2C1810] transition hover:bg-[#2C1810] hover:text-white"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
