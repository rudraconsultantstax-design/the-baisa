import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About — Sanganer-Made, Manufacturer-Direct",
  description: `${business.brand} is a Sanganer-made, manufacturer-direct ethnic wear brand crafting authentic Rajputi suits, block prints, and bandhej odhanis in sizes XS-8XL.`
};

const pillars = [
  ["Sanganer-made", "Tailored and printed at our own Sanganer unit — the geographic home of hand-block printing."],
  ["Manufacturer-direct", "No middlemen, no marked-up retail tag. You buy at source pricing, like our boutiques do."],
  ["Inclusive sizing", "XS to 8XL across bestselling silhouettes — plus-size demand is underserved, we deliver."],
  ["WhatsApp-first commerce", "Real human on WhatsApp for sizing, fabric, and order confirmation. COD pan-India."]
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#2C1810] px-4 py-16 text-[#F5F0E8]">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#D4A853]">About</p>
          <h1 className="mt-3 text-4xl font-black uppercase leading-tight tracking-[0.04em] sm:text-5xl">
            {business.brand} | {business.tagline}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#F5F0E8]/85">
            The Baisa is a Sanganer-made, manufacturer-direct ethnic wear brand from Jaipur, Rajasthan. We craft authentic Rajputi suit sets, block-print kurtis, and bandhej odhanis — in inclusive sizes XS to 8XL, with WhatsApp-first ordering and honest pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-black uppercase tracking-[0.06em]">What makes us different</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([title, body]) => (
            <div key={title} className="bg-white p-6 shadow-sm ring-1 ring-[#2C1810]/10">
              <h3 className="text-lg font-black uppercase tracking-[0.06em] text-[#2C1810]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5d493f]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F0E8] px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C65D3A]">Sanganer Story</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.05em]">Why Sanganer matters.</h2>
          <p className="mt-5 text-base leading-8 text-[#5d493f]">
            Sanganer, 16 km south of Jaipur, is the geographic home of hand-block printing in India. The town's water chemistry, the printers' generational skill, and the proximity to Jaipur's wholesale markets make it the real source of "Jaipur prints" — most generic Jaipur-tagged kurtis you see online are actually printed here.
          </p>
          <p className="mt-4 text-base leading-8 text-[#5d493f]">
            We tailor, print, and dispatch from our own unit in Sanganer. That is why our prints carry the real Sanganeri character — fine motifs, soft cotton, hand-finished borders — at manufacturer-direct pricing. Most everyday styles stay under ₹999 (the 5% GST band) so the final price stays honest.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/catalog" className="bg-[#C65D3A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white">
              Shop the catalog
            </Link>
            <a
              href={business.whatsappCatalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
            >
              Get catalog on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
