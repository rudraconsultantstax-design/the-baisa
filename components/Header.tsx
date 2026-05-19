import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

const navItems = [
  ["HOME", "/"],
  ["CATALOG", "/catalog"],
  ["COLLECTIONS", "/all-collections"],
  ["NEW DROP CLUB", "/new-drop-club"],
  ["WHOLESALE", "/bulk-wholesale"],
  ["SIZE CHART", "/size-chart"],
  ["FAQS", "/faqs"],
  ["CONTACT", "/contact"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2C1810]/10 bg-[#F5F0E8]/95 backdrop-blur">
      <div className="bg-[#2C1810] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#F5F0E8] sm:text-sm">
        {business.announcement}
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="The Baisa home">
          <span className="relative block h-14 w-14 overflow-hidden rounded-full border border-[#C65D3A]/30 bg-white">
            <Image src="/logo.svg" alt="The Baisa logo" fill sizes="56px" className="object-contain p-1" />
          </span>
          <span>
            <span className="block text-xl font-black uppercase tracking-[0.16em] text-[#2C1810]">{business.brand}</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#C65D3A]">{business.tagline}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-xs font-bold tracking-[0.14em] text-[#2C1810] lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#C65D3A]">
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={business.whatsappCatalogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden bg-[#25D366] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#1ebe5d] sm:inline-flex"
        >
          WhatsApp Catalog
        </a>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-[#2C1810]/10 px-4 py-3 text-xs font-bold tracking-[0.12em] text-[#2C1810] lg:hidden">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href} className="shrink-0">
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
