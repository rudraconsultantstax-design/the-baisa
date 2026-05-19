import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business } from "@/lib/business";
import { getProductBySlug, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: `${product.name} — ₹${product.price.toLocaleString("en-IN")}. ${business.madeIn}. Sizes ${product.sizeRange}. Fabric: ${product.fabric}.`,
    openGraph: {
      title: product.name,
      description: `${product.name} — ₹${product.price.toLocaleString("en-IN")}. Sanganer-made.`,
      images: [product.image]
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const orderUrl = business.whatsappOrderUrl(product.name, product.price);
  const enquireUrl = business.whatsappProductUrl(product.name, product.price);
  const sizingUrl = business.whatsappSizingUrl;

  const related = products.filter((p) => p.collection === product.collection && p.id !== product.id).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description ?? product.name,
    brand: { "@type": "Brand", name: business.brand },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `https://${business.website}/product/${product.slug}`
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm ring-1 ring-[#2C1810]/10">
          <Image src={product.image} alt={product.name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <span className="absolute left-3 top-3 bg-[#C65D3A] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
            {product.tag}
          </span>
          <span className="absolute right-3 top-3 bg-[#2C1810] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#F5F0E8]">
            Sanganer Made
          </span>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">{product.collection}</p>
          <h1 className="mt-3 text-3xl font-black uppercase leading-tight tracking-[0.03em] sm:text-4xl">{product.name}</h1>
          <div className="mt-5 flex items-end gap-3">
            <span className="text-3xl font-black text-[#2C1810]">₹{product.price.toLocaleString("en-IN")}</span>
            {product.compareAt ? (
              <span className="text-lg text-[#7f6b5d] line-through">₹{product.compareAt.toLocaleString("en-IN")}</span>
            ) : null}
            {product.price <= 999 ? (
              <span className="bg-[#D4A853]/20 px-2 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#7a5b1f]">
                Under ₹999 · 5% GST
              </span>
            ) : null}
          </div>
          {product.description ? <p className="mt-5 text-base leading-8 text-[#5d493f]">{product.description}</p> : null}

          <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-[#2C1810]/10 py-5 text-sm">
            <div>
              <dt className="text-[11px] font-black uppercase tracking-[0.14em] text-[#7f6b5d]">Sizes</dt>
              <dd className="mt-1 font-bold text-[#2C1810]">{product.sizeRange}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-black uppercase tracking-[0.14em] text-[#7f6b5d]">Fabric</dt>
              <dd className="mt-1 font-bold text-[#2C1810]">{product.fabric}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-black uppercase tracking-[0.14em] text-[#7f6b5d]">Color</dt>
              <dd className="mt-1 font-bold text-[#2C1810]">{product.color}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-black uppercase tracking-[0.14em] text-[#7f6b5d]">Made In</dt>
              <dd className="mt-1 font-bold text-[#2C1810]">Sanganer, Jaipur</dd>
            </div>
          </dl>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#1ebe5d]"
            >
              Order on WhatsApp
            </a>
            <a
              href={enquireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-[#2C1810] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#2C1810] transition hover:border-[#C65D3A] hover:text-[#C65D3A]"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={sizingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#2C1810] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#C65D3A] sm:col-span-2"
            >
              Need help with sizing?
            </a>
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-[#5d493f]">
            <li><strong className="font-black uppercase tracking-[0.12em] text-[#2C1810]">Dispatch:</strong> {business.dispatch}</li>
            <li><strong className="font-black uppercase tracking-[0.12em] text-[#2C1810]">COD:</strong> {business.cod}</li>
            <li><strong className="font-black uppercase tracking-[0.12em] text-[#2C1810]">Returns:</strong> {business.returns}</li>
            <li><strong className="font-black uppercase tracking-[0.12em] text-[#2C1810]">Wash care:</strong> Gentle hand-wash in cold water for first 2-3 washes; mild detergent.</li>
          </ul>

          <p className="mt-6 text-xs text-[#7f6b5d]">
            Need a custom size, color, or bulk order? <Link href="/bulk-wholesale" className="font-bold underline">See wholesale options</Link> or message us on WhatsApp.
          </p>
        </div>
      </section>

      {related.length ? (
        <section className="mx-auto max-w-7xl px-4 pb-16">
          <h2 className="text-2xl font-black uppercase tracking-[0.06em]">More from {product.collection}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
