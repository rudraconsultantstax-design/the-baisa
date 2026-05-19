import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { business } from "@/lib/business";
import { products } from "@/lib/products";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: business.brand,
  description: business.footerAbout,
  url: `https://${business.website}`,
  telephone: business.phone,
  image: `https://${business.website}/logo.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sanganer",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "303902",
    addressCountry: "IN"
  },
  sameAs: [business.instagramUrl]
};

const trustBlocks = [
  ["Made in Sanganer", "Tailored and printed at our own unit in Sanganer, Jaipur — the home of authentic block prints."],
  ["Manufacturer-direct", "No middlemen. The same suit-set our boutiques resell, you order at source pricing."],
  ["Inclusive sizing XS–8XL", "Most styles available up to 4XL, with plus-size 5XL–8XL on the bestselling silhouettes."],
  ["48–72 hr dispatch", "Sanganer-to-doorstep in 4–7 working days. COD available across India."],
  ["Easy returns + COD", "7-day return on unworn items. Cash on Delivery available pan-India."],
  ["WhatsApp-first support", "Real human on WhatsApp for sizing, fabric questions, and order confirmation."]
];

const categories = [
  ["Under ₹999", "/all-products", "5% GST sweet spot"],
  ["Sanganeri Block Print", "/all-collections", "Geography-specific authenticity"],
  ["Rajputi Suit Sets", "/catalog", "Festive + everyday"],
  ["Plus Size XS-8XL", "/size-chart", "Inclusive fit"],
  ["Wholesale Lots", "/bulk-wholesale", "MOQ from 25 pcs"],
  ["New Drop Club", "/new-drop-club", "Weekly WhatsApp drops"]
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="fabric-pattern min-h-[76vh] px-4 text-white">
        <div className="mx-auto flex min-h-[76vh] max-w-7xl items-center py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#D4A853]">
              {business.madeIn} · Manufacturer-Direct
            </p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[1.02] tracking-[0.04em] sm:text-7xl">
              Authentic Jaipur ethnic wear, from our Sanganer unit to your doorstep.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F5F0E8]/85">
              The Baisa is a Sanganer-made, manufacturer-direct ethnic wear brand. Hand-finished Rajputi suit sets, block-print kurtis, and bandhej odhanis — in inclusive sizes XS to 8XL, with WhatsApp-first ordering.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={business.whatsappCatalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
              >
                Get Catalog on WhatsApp
              </a>
              <Link href="/catalog" className="bg-[#C65D3A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white">
                Shop the Catalog
              </Link>
              <Link href="/new-drop-club" className="border border-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white">
                Join New Drop Club
              </Link>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/70">
              COD available · 48–72 hr dispatch · 7-day return · Free shipping above ₹1499
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E8] px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C65D3A]">Shop by intent</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {categories.map(([label, href, sub]) => (
              <Link
                key={label}
                href={href}
                className="bg-white p-4 shadow-sm ring-1 ring-[#2C1810]/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="block text-sm font-black uppercase tracking-[0.08em] text-[#2C1810]">{label}</span>
                <span className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-[#7f6b5d]">{sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="jaipur-border px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C65D3A]">Shop The Baisa</p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-[0.04em]">Featured products</h2>
              <p className="mt-2 text-sm text-[#7f6b5d]">Most-ordered Rajputi suit sets and block-print picks from our Sanganer unit.</p>
            </div>
            <Link href="/catalog" className="text-sm font-black uppercase tracking-[0.14em] text-[#C65D3A]">
              View all →
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
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#D4A853]">Why The Baisa</p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-[0.05em] sm:text-4xl">
            Sanganer-made. Manufacturer-direct. Inclusive sizing.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trustBlocks.map(([title, body]) => (
              <div key={title} className="border border-white/15 p-6">
                <h3 className="text-lg font-black uppercase tracking-[0.08em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C65D3A]">Sanganer story</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.05em] sm:text-4xl">
              Real Sanganeri block prints — not a generic "Jaipur" tag.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5d493f]">
              Sanganer, 16 km south of Jaipur, is the geographic home of hand-block printing. Our tailoring and printing run from this town — the same craft cluster that supplies major Jaipur retailers, now available manufacturer-direct.
            </p>
            <p className="mt-4 text-base leading-8 text-[#5d493f]">
              That is why our prints carry the real Sanganeri character — fine motifs, soft cotton, hand-finished borders — at honest pricing. Most everyday styles stay under ₹999 so they sit in the 5% GST band.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="border border-[#2C1810] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#2C1810] hover:border-[#C65D3A] hover:text-[#C65D3A]">
                Read the brand story
              </Link>
              <a
                href={business.whatsappCatalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
              >
                Get WhatsApp catalog
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {products.slice(0, 4).map((p) => (
              <div key={p.id} className="relative aspect-[4/5] overflow-hidden bg-[#2C1810]/5 shadow-sm ring-1 ring-[#2C1810]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C65D3A] px-4 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/85">New Drop Club</p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-[0.05em] sm:text-4xl">
              Get weekly Sanganer drops on WhatsApp.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85">
              Free signup. Early access to limited block-print runs and member-only Under-₹999 prices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={business.whatsappNewDropUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#2C1810] hover:bg-[#F5F0E8]"
            >
              Join on WhatsApp
            </a>
            <Link href="/new-drop-club" className="border border-white px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="bg-white p-8 shadow-sm ring-1 ring-[#2C1810]/10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C65D3A]">For Boutiques & Resellers</p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.05em] sm:text-3xl">Wholesale, manufacturer-direct.</h2>
            <p className="mt-4 text-sm leading-7 text-[#5d493f]">
              MOQ from 25 pcs. Mix-and-match colors, size runs, and repeatable colorways. Export-ready on request.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={business.whatsappWholesaleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
              >
                Wholesale on WhatsApp
              </a>
              <Link href="/bulk-wholesale" className="border border-[#2C1810] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#2C1810]">
                See MOQ tiers
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 shadow-sm ring-1 ring-[#2C1810]/10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C65D3A]">Need sizing help?</p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.05em] sm:text-3xl">XS–8XL, no guesswork.</h2>
            <p className="mt-4 text-sm leading-7 text-[#5d493f]">
              Share your measurements on WhatsApp — we'll recommend the right size and confirm fabric details before you order.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={business.whatsappSizingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
              >
                Get sizing help
              </a>
              <Link href="/size-chart" className="border border-[#2C1810] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#2C1810]">
                See size chart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
