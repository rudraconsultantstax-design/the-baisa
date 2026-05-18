import { business } from "@/lib/business";

export function FloatingWhatsApp() {
  return (
    <a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Baisa on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-[#25D366] px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-2xl shadow-[#2C1810]/25 transition hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#D4A853] focus:ring-offset-2 focus:ring-offset-[#F5F0E8]"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16.5 4.5c-6.628 0-12 5.372-12 12 0 2.13.555 4.13 1.527 5.864L4.5 28.5l6.27-1.49A11.952 11.952 0 0 0 16.5 28.5c6.628 0 12-5.372 12-12s-5.372-12-12-12zm0 21.6a9.6 9.6 0 0 1-4.886-1.34l-.351-.207-3.717.882.886-3.62-.228-.36a9.6 9.6 0 1 1 4.296 16.645z" />
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.337-.688.645-1.04 1.318-1.04 2.264v.114c.015.99.5 1.974 1.245 2.91 1.45 1.795 3.395 3.026 5.595 3.794.42.143.97.286 1.434.286.625 0 .974-.043 1.39-.486.27-.286.486-.572.515-.973v-.057c0-.286-.214-.43-.572-.572-.4-.158-.873-.358-1.32-.43z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
