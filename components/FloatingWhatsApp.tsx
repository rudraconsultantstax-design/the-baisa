import { business } from "@/lib/business";

export function FloatingWhatsApp() {
  return (
    <a
      href={business.whatsappUrl}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-[#C65D3A] px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-2xl shadow-[#2C1810]/25 transition hover:bg-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#D4A853] focus:ring-offset-2 focus:ring-offset-[#F5F0E8]"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F5F0E8] text-[#2C1810]">WA</span>
      <span className="hidden sm:inline">Chat with us on WhatsApp</span>
    </a>
  );
}
