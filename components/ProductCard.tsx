import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-white shadow-sm ring-1 ring-[#2C1810]/10 transition hover:-translate-y-1 hover:shadow-xl">
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
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C65D3A]">{product.collection}</p>
        <h3 className="mt-2 min-h-16 text-sm font-bold leading-5 text-[#2C1810]">{product.name}</h3>
        <div className="mt-3 flex items-end gap-2">
          <span className="text-lg font-black text-[#2C1810]">Rs. {product.price.toLocaleString("en-IN")}.00</span>
          {product.compareAt ? (
            <span className="text-sm text-[#7f6b5d] line-through">Rs. {product.compareAt.toLocaleString("en-IN")}.00</span>
          ) : null}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-[#2C1810]/10 pt-4 text-xs font-semibold text-[#7f6b5d]">
          <span>{product.sizeRange}</span>
          <span>{product.fabric}</span>
        </div>
        <button className="mt-4 w-full bg-[#2C1810] px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#C65D3A]">
          Add to cart
        </button>
      </div>
    </article>
  );
}
