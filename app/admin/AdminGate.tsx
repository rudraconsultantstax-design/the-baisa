"use client";

import { useEffect, useState } from "react";
import { products } from "@/lib/products";

const ACCESS_KEY = "baisa-internal-2026";

export function AdminGate() {
  const [authorized, setAuthorized] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("key");
    const fromStorage = window.localStorage.getItem("baisa-admin-key");
    const key = fromUrl ?? fromStorage;
    if (key === ACCESS_KEY) {
      window.localStorage.setItem("baisa-admin-key", ACCESS_KEY);
      setAuthorized(true);
    }
    setChecked(true);
  }, []);

  if (!checked) {
    return null;
  }

  if (!authorized) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">404</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">Page not found</h1>
        <p className="mt-5 text-base leading-8 text-[#7f6b5d]">
          This page does not exist. Return to the homepage to continue shopping.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex bg-[#C65D3A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
        >
          Go to homepage
        </a>
      </section>
    );
  }

  const revenue = products.reduce((sum, product) => sum + product.price * 12, 0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C65D3A]">Admin Panel · Internal</p>
      <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.05em]">Store command center</h1>
      <p className="mt-2 text-sm text-[#7f6b5d]">Internal-only view. Not linked from public navigation.</p>
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
