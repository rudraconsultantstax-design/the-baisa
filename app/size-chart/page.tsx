import { business } from "@/lib/business";

const rows = [
  ["XS", "32", "26", "34"],
  ["S", "34", "28", "36"],
  ["M", "36", "30", "38"],
  ["L", "38", "32", "40"],
  ["XL", "40", "34", "42"],
  ["2XL", "42", "36", "44"],
  ["3XL", "44", "38", "46"],
  ["4XL", "46", "40", "48"],
  ["5XL", "48", "42", "50"],
  ["6XL", "50", "44", "52"],
  ["7XL", "52", "46", "54"],
  ["8XL", "54", "48", "56"]
];

export default function SizeChartPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">Size Chart</p>
      <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">Inclusive fit from XS to 8XL</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#7f6b5d]">
        Body measurements in inches. For a relaxed fit, go one size up. Not sure? Send your measurements on WhatsApp — we'll confirm size and fabric details before dispatch.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={business.whatsappSizingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#1ebe5d]"
        >
          Get sizing help on WhatsApp
        </a>
      </div>
      <div className="mt-8 overflow-x-auto bg-white shadow-sm ring-1 ring-[#2C1810]/10">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead className="bg-[#2C1810] text-[#F5F0E8]">
            <tr>{["Size", "Bust", "Waist", "Hip"].map((heading) => <th key={heading} className="px-5 py-4 text-sm uppercase tracking-[0.14em]">{heading}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-[#2C1810]/10">
                {row.map((cell) => <td key={cell} className="px-5 py-4 font-semibold">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-xs text-[#7f6b5d]">
        Plus-size 5XL–8XL is stocked on bestselling silhouettes. Ask on WhatsApp to confirm availability for a specific style.
      </p>
    </section>
  );
}
