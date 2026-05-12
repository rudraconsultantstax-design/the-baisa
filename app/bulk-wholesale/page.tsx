import { business } from "@/lib/business";

export default function WholesalePage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">Bulk / Wholesale</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">For boutiques, resellers, and festive groups</h1>
        <p className="mt-5 text-base leading-8 text-[#7f6b5d]">
          Request curated lots, size runs, and repeatable color stories with quick WhatsApp coordination from our {business.location} team.
        </p>
      </div>
      <form className="grid gap-4 bg-white p-8 shadow-sm ring-1 ring-[#2C1810]/10">
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
      </form>
    </section>
  );
}
