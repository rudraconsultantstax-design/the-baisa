import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "FAQs — Sizing, Dispatch, COD, Returns, Wholesale",
  description: "Frequently asked questions about The Baisa: Sanganer authenticity, sizing XS-8XL, COD, dispatch, returns, and wholesale MOQ."
};

const faqs: [string, string][] = [
  ["Are your prints really made in Sanganer?", "Yes. Our tailoring and printing run from our own unit in Sanganer, Jaipur — the geographic home of hand-block printing. We ship manufacturer-direct, so you pay source pricing, not a marked-up retail tag."],
  ["What sizes are available?", "Most styles run XS to 4XL, with plus-size 5XL–8XL on bestselling silhouettes. Send your bust/waist/hip on WhatsApp and we'll confirm the right size before dispatch."],
  ["Do you offer Cash on Delivery (COD)?", "Yes. COD is available pan-India on most pin codes. Confirm your order on WhatsApp and we'll verify COD eligibility for your address."],
  ["How long does dispatch take?", `${business.dispatch}. Most metros receive in 4–5 working days; tier-2/3 in 5–7. You receive a tracking link on WhatsApp once dispatched.`],
  ["What is your return policy?", `${business.returns}. Items must be unworn, with tags intact, and reported within 7 days of delivery. Refunds go to the original payment method or UPI.`],
  ["Is shipping free?", "Free shipping applies above ₹1499 (as in the top announcement bar). Under that, a flat shipping charge applies depending on city."],
  ["Why are most items under ₹999?", "We keep MRP ≤₹999 on everyday styles so they sit in the 5% GST band. That keeps the final price honest for customers and margin healthy for resellers."],
  ["Do you support wholesale?", "Yes — MOQ from 25 pcs for boutiques and 50+ pcs for retailers. See the Wholesale page for tiers and request the wholesale catalog on WhatsApp."],
  ["How do I contact The Baisa?", `Fastest path is WhatsApp at ${business.whatsapp}. You can also call ${business.phone} or reach us on Instagram ${business.instagram} (Mon-Sat 10am to 7pm).`],
  ["Where are you based?", `${business.address}. Visits welcome by appointment.`]
];

export default function FaqsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">FAQs</p>
      <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">Questions before you shop</h1>
      <div className="mt-10 grid gap-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="bg-white p-6 shadow-sm ring-1 ring-[#2C1810]/10">
            <summary className="cursor-pointer text-lg font-black">{question}</summary>
            <p className="mt-4 text-sm leading-7 text-[#7f6b5d]">{answer}</p>
          </details>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={business.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
        >
          Ask on WhatsApp
        </a>
      </div>
    </section>
  );
}
