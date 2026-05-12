import { products } from "@/lib/products";

export default function AdminPage() {
  const revenue = products.reduce((sum, product) => sum + product.price * 12, 0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">Admin Panel</p>
      <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">Store command center</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["Products", products.length.toString()],
          ["Estimated monthly revenue", `Rs. ${revenue.toLocaleString("en-IN")}`],
          ["Wholesale leads", "18"]
        ].map(([label, value]) => (
          <div key={label} className="bg-white p-6 shadow-sm ring-1 ring-[#2C1810]/10">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#C65D3A]">{label}</p>
            <p className="mt-3 text-3xl font-black">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 overflow-x-auto bg-white shadow-sm ring-1 ring-[#2C1810]/10">
        <table className="w-full min-w-[760px] text-left">
          <thead className="bg-[#2C1810] text-[#F5F0E8]">
            <tr>{["Product", "Collection", "Price", "Status"].map((heading) => <th key={heading} className="px-5 py-4 text-sm uppercase tracking-[0.14em]">{heading}</th>)}</tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-[#2C1810]/10">
                <td className="px-5 py-4 font-bold">{product.name}</td>
                <td className="px-5 py-4">{product.collection}</td>
                <td className="px-5 py-4">Rs. {product.price.toLocaleString("en-IN")}</td>
                <td className="px-5 py-4"><span className="bg-[#C65D3A]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#C65D3A]">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
