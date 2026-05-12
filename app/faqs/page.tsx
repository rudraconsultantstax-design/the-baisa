import { business } from "@/lib/business";

const faqs = [
  ["What sizes are available?", "The catalog supports XS through 8XL, plus 4 meter and 5 meter fabric options where applicable."],
  ["Is shipping free?", "Free shipping applies above Rs.1499 as shown in the announcement bar."],
  ["Do you support wholesale?", "Yes. The bulk and wholesale page captures reseller, boutique, and event order enquiries."],
  ["How do I contact The Baisa?", `Use WhatsApp at ${business.whatsapp}, phone ${business.phone}, or Instagram ${business.instagram} for quick support.`],
  ["Where are you based?", `We are based in ${business.address}.`]
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
    </section>
  );
}
