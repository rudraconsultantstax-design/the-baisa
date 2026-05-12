import Link from "next/link";
import { business } from "@/lib/business";

const quickLinks = [
  ["Home", "/"],
  ["Catalog", "/catalog"],
  ["All Products", "/all-products"],
  ["About", "/about"],
  ["Size Chart", "/size-chart"],
  ["FAQs", "/faqs"],
  ["Contact", "/contact"]
];

export function Footer() {
  return (
    <footer className="bg-[#2C1810] text-[#F5F0E8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.35fr_0.85fr_1fr]">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-[0.16em]">{business.brand}</h2>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-[#D4A853]">{business.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#F5F0E8]/75">{business.footerAbout}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A853]">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm">
            {quickLinks.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A853]">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <span>Address: {business.address}</span>
            <a href={`tel:${business.phone.replaceAll(" ", "")}`}>Phone: {business.phone}</a>
            <a href={business.instagramUrl}>Instagram: {business.instagram}</a>
            <a href={business.whatsappUrl}>WhatsApp: {business.whatsapp}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs uppercase tracking-[0.16em] text-white/60">
        Copyright 2026 The Baisa. All Rights Reserved.
      </div>
    </footer>
  );
}
