import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact The Baisa in ${business.location}. WhatsApp ${business.whatsapp}, phone ${business.phone}, Instagram ${business.instagram}.`
};

const details = [
  ["Address", business.address],
  ["Phone", business.phone],
  ["WhatsApp", business.whatsapp],
  ["Instagram", business.instagram],
  ["Timings", business.timings]
];

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">Contact</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">Visit or message The Baisa</h1>
        <p className="mt-5 text-base leading-8 text-[#7f6b5d]">
          {business.brand} is based in {business.location}. Reach us for orders, sizing, wholesale inventory, or styling support.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C65D3A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#2C1810]"
          >
            Chat with us on WhatsApp
          </a>
          <a
            href={`tel:${business.phone.replaceAll(" ", "")}`}
            className="border border-[#2C1810] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#2C1810] transition hover:border-[#C65D3A] hover:text-[#C65D3A]"
          >
            Call {business.phone}
          </a>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2C1810] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#2C1810] transition hover:border-[#C65D3A] hover:text-[#C65D3A]"
          >
            Instagram {business.instagram}
          </a>
        </div>
      </div>
      <div className="bg-white p-8 shadow-sm ring-1 ring-[#2C1810]/10">
        <h2 className="text-2xl font-black uppercase tracking-[0.08em]">Business Details</h2>
        <div className="mt-6 grid gap-4">
          {details.map(([label, value]) => (
            <div key={label} className="border-b border-[#2C1810]/10 pb-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#C65D3A]">{label}</p>
              <p className="mt-1 text-base font-bold text-[#2C1810]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
