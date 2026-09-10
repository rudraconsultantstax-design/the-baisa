import type { Metadata } from "next";
import { AdminGate } from "./AdminGate";

export const metadata: Metadata = {
  title: "Restricted",
  description: "Restricted area",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } }
};

export default function AdminPage() {
  return <AdminGate />;
}
