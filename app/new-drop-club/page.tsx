import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "New Drop Club — Weekly WhatsApp Drops",
  description: `Join The Baisa's WhatsApp New Drop Club for weekly Sanganer-made kurti and suit set drops, early access, and member-only prices. Free signup on WhatsApp.`
};

const perks = [
  ["Weekly fresh catalog", "New Sanganer-made suit sets, kurtis, and odhanis dropped every week, straight to your WhatsApp."],
  ["Member-only prices", "Early-bird pricing and under-₹999 picks before they hit the public catalog."],
  ["First dibs on limited runs", "Block-print colorways are limited — Club members order before sell-out."],
  ["Plus-size friendly", "All drops carry inclusive sizing notes (XS-8XL) and back-view photos on request."]
];

const steps = [
  ["Tap the WhatsApp button", "We'll open a chat with The Baisa Sanganer team."],
  ["Send your name + city", "Takes 10 seconds. No app downloads, no spam."],
  ["Get the next drop", "Catalog with prices, sizes, and dispatch timing lands on WhatsApp every week."]
];

export default function NewDropClubPage() {
  return (
    <>
      <section className="bg-[#2C1810] px-4 py-16 text-[#F5F0E8]">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#D4A853]">New Drop Club</p>
          <h1 className="mt-3 text-4xl font-black uppercase leading-tight tracking-[0.04em] sm:text-5xl">
            Weekly Sanganer drops, straight to your WhatsApp.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#F5F0E8]/85">
            Be first to see our newest block-print kurtis, Rajputi suit sets, and festive odhanis — with member-only pricing and early access to limited runs. Free to join, run by the team at our Sanganer unit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={business.whatsappNewDropUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#1ebe5d]"
            >
              Join on WhatsApp — Free
            </a>
            <a
              href={business.whatsappCatalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
            >
              See today's catalog
            </a>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/60">
            No spam · Opt-out anytime by replying STOP · Trusted by repeat buyers across India
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-black uppercase tracking-[0.06em]">What you get</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {perks.map(([title, body]) => (
            <div key={title} className="bg-white p-6 shadow-sm ring-1 ring-[#2C1810]/10">
              <h3 className="text-lg font-black uppercase tracking-[0.06em] text-[#2C1810]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5d493f]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F0E8] px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-black uppercase tracking-[0.06em]">Join in 3 steps</h2>
          <ol className="mt-6 grid gap-5 md:grid-cols-3">
            {steps.map(([title, body], i) => (
              <li key={title} className="bg-white p-6 shadow-sm ring-1 ring-[#2C1810]/10">
                <span className="text-3xl font-black text-[#C65D3A]">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-black uppercase tracking-[0.06em]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5d493f]">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a
              href={business.whatsappNewDropUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#25D366] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
            >
              Add me to the Club
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
