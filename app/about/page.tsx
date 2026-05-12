import { business } from "@/lib/business";

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">About</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">
          {business.brand} | {business.tagline}
        </h1>
      </div>
      <div className="space-y-5 text-base leading-8 text-[#5d493f]">
        <p>
          {business.brand} is a premium ethnic wear brand from Sanganer, Jaipur, Rajasthan, India. We create authentic handcrafted clothing inspired by Rajasthani textile heritage.
        </p>
        <p>
          This storefront keeps discovery simple with a familiar catalog flow, clearer filtering, inclusive sizing information, and direct WhatsApp support for fast customer conversations.
        </p>
      </div>
    </section>
  );
}
