import type { Metadata } from "next";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    default: "The Baisa | Go Traditional — Sanganer Jaipur Ethnic Wear",
    template: "%s | The Baisa"
  },
  description:
    "Shop authentic Sanganer-made Jaipur ethnic wear by The Baisa — Rajputi poshak fabrics, bandhej odhanis, floral prints, and wholesale lots in sizes XS to 8XL.",
  metadataBase: new URL(`https://${business.website}`),
  alternates: { canonical: "/" },
  keywords: [
    "The Baisa",
    "Baisa Jaipur",
    "Sanganer ethnic wear",
    "Rajputi poshak",
    "Bandhej odhani",
    "Jaipur ethnic wear",
    "Rajasthani suits",
    "wholesale ethnic wear",
    "XS to 8XL ethnic wear"
  ],
  icons: { icon: "/logo.svg", apple: "/logo.svg" },
  openGraph: {
    title: "The Baisa | Go Traditional",
    description: "Authentic Sanganer-made Jaipur ethnic wear in sizes XS-8XL.",
    url: `https://${business.website}`,
    siteName: "The Baisa",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Baisa | Go Traditional",
    description: "Authentic Sanganer-made Jaipur ethnic wear in sizes XS-8XL."
  },
  robots: { index: true, follow: true }
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
