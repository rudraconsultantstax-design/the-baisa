import type { Metadata } from "next";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "The Baisa | Go Traditional",
  description:
    "Shop authentic Sanganer-made Jaipur ethnic wear, Rajputi poshak fabrics, odhanis, and wholesale collections from The Baisa.",
  metadataBase: new URL(`https://${business.website}`),
  openGraph: {
    title: "The Baisa | Go Traditional",
    description: "Authentic Sanganer-made Jaipur ethnic wear in sizes XS-8XL.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
