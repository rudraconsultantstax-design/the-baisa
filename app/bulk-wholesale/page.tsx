import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Wholesale & Bulk Enquiry — Sanganer Manufacturer-Direct",
  description: `Wholesale and boutique enquiry for The Baisa — Sanganer-made Rajputi suits, block prints, and bandhej odhanis. MOQ from 12 pcs. WhatsApp ${business.whatsapp}.`
};

const tiers = [
  ["Boutique Starter", "MOQ 25 pcs", "Mix and match across colors", "Best for first-time stockists"],
  ["Retailer Growth", "MOQ 50 pcs", "Size-run packs, festive lots", "Best margins on Under-₹999 lines"],
  ["Volume / Export", "MOQ 100+ pcs", "Repeat colorways, custom prints", "FOB pricing available on request"]
];

const reasons = [
  ["Manufacturer-direct", "We tailor and print at our own Sanganer unit. No middlemen, no marked-up wholesale."],
  ["Sanganer block-print authenticity", "Real Sanganeri prints — geographically specific, not generic 'Jaipur' tag."],
  ["Inclusive size runs", "Pack sizes from XS to 6XL+. Plus-size demand is underserved and we deliver."],
  ["Under ₹999 sweet spot", "Most styles fall in the 5% GST band — better margin for resellers."]
];

export default function WholesalePage() {
  return (
    <>
      <section className="bg-[#2C1810] px-4 py-16 text-[#F5F0E8]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#D4A853]">Wholesale · Bulk · Boutique</p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-tight tracking-[0.04em] sm:text-5xl">
              Sanganer manufacturer-direct, for boutiques and resellers.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#F5F0E8]/85">
              We tailor, print, and dispatch from our own Sanganer unit. Request curated lots, size runs, and repeatable colorways with quick WhatsApp coordination — no minimum-order red tape.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={business.whatsappWholesaleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#1ebe5d]"
              >
                Get Wholesale Catalog on WhatsApp
              </a>
              <a
                href={`tel:${business.phone.replaceAll(" ", "")}`}
                className="border border-white px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
          <div className="bg-white/5 p-6 ring-1 ring-white/20">
            <h2 className="text-lg font-black uppercase tracking-[0.08em] text-[#D4A853]">Why brands buy from us</h2>
            <ul className="mt-5 grid gap-4 text-sm leading-7 text-[#F5F0E8]/90">
              {reasons.map(([title, body]) => (
                <li key={title}>
                  <strong className="block text-white">{title}</strong>
                  <span className="text-[#F5F0E8]/75">{body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-black uppercase tracking-[0.06em]">MOQ & lot tiers</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {tiers.map(([title, moq, body, footer]) => (
            <div key={title} className="bg-white p-6 shadow-sm ring-1 ring-[#2C1810]/10">
              <h3 className="text-lg font-black uppercase tracking-[0.06em] text-[#2C1810]">{title}</h3>
              <p className="mt-1 text-sm font-bold text-[#C65D3A]">{moq}</p>
              <p className="mt-3 text-sm leading-7 text-[#5d493f]">{body}</p>
              <p className="mt-3 border-t border-[#2C1810]/10 pt-3 text-xs uppercase tracking-[0.14em] text-[#7f6b5d]">{footer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F0E8] px-4 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">Enquiry</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.05em]">Two ways to send us details</h2>
            <p className="mt-5 text-base leading-8 text-[#5d493f]">
              The fastest path is WhatsApp — share your business name, city, MOQ target, and preferred categories. We respond within working hours.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href={business.whatsappWholesaleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
              >
                Start on WhatsApp ({business.whatsapp})
              </a>
              <a
                href={`tel:${business.phone.replaceAll(" ", "")}`}
                className="inline-flex w-full justify-center border border-[#2C1810] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#2C1810]"
              >
                Call {business.phone}
              </a>
            </div>
            <p className="mt-6 text-xs leading-6 text-[#7f6b5d]">
              Export-ready (UAE/UK/USA) on request. IEC and tax documents available for verified buyers.
            </p>
          </div>
          <form className="grid gap-4 bg-white p-8 shadow-sm ring-1 ring-[#2C1810]/10">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#C65D3A]">Or send a structured enquiry</p>
            {["Business name", "Contact person", "WhatsApp number", "City", "Estimated quantity"].map((label) => (
              <label key={label} className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
                {label}
                <input className="border border-[#2C1810]/20 px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none focus:border-[#C65D3A]" />
              </label>
            ))}
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
              Requirement
              <textarea rows={5} className="border border-[#2C1810]/20 px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none focus:border-[#C65D3A]" />
            </label>
            <button className="bg-[#C65D3A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white">Submit enquiry</button>
            <p className="text-[11px] text-[#7f6b5d]">Form is presentational in this build — wire to Formspree/Netlify Forms before launch.</p>
          </form>
        </div>
      </section>
    </>
  );
}
