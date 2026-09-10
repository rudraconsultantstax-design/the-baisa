const WHATSAPP_NUMBER = "919251022710";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const business = {
  brand: "The Baisa",
  tagline: "Go Traditional",
  location: "Sanganer, Jaipur, Rajasthan, India",
  website: "baisajaipur.in",
  address: "Sanganer, Jaipur, Rajasthan 303902",
  phone: "+91 9251022710",
  whatsapp: "+91 9251022710",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappUrl: waLink("Hi The Baisa, I would like to know more about your ethnic wear collection."),
  whatsappCatalogUrl: waLink("Hi The Baisa, please share your latest WhatsApp catalog with prices and sizes."),
  whatsappNewDropUrl: waLink("Hi The Baisa, please add me to the New Drop Club for weekly WhatsApp drops."),
  whatsappWholesaleUrl: waLink("Hi The Baisa, I'm interested in your wholesale catalog. Please share MOQ, pricing, and lot details."),
  whatsappSizingUrl: waLink("Hi The Baisa, I need help choosing the right size. Can you guide me?"),
  whatsappCodUrl: waLink("Hi The Baisa, I'd like to confirm a Cash on Delivery (COD) order."),
  instagram: "@the_baisa",
  instagramUrl: "https://instagram.com/the_baisa",
  timings: "Mon-Sat 10am to 7pm",
  announcement:
    "Made in Sanganer, Jaipur • Manufacturer-Direct • Sizes XS-8XL • COD Available • Free Shipping Above Rs.1499",
  footerAbout:
    "The Baisa is a Sanganer-made, manufacturer-direct ethnic wear brand from Jaipur. We craft authentic Rajputi suit sets, bandhej odhanis, and block-print everyday wear in inclusive sizes XS-8XL.",
  dispatch: "Dispatch in 48-72 hours from our Sanganer unit",
  cod: "COD available across India",
  returns: "7-day easy return on unworn items",
  madeIn: "Made in Sanganer, Jaipur",
  manufacturerDirect: "Manufacturer-direct pricing — no middlemen",
  inclusiveSizing: "Inclusive sizing XS-8XL on most styles",
  whatsappProductUrl(name: string, price: number) {
    return waLink(
      `Hi The Baisa, I'm interested in "${name}" (Rs. ${price.toLocaleString("en-IN")}). Please share available sizes, fabric details, and how to order.`
    );
  },
  whatsappOrderUrl(name: string, price: number) {
    return waLink(
      `Hi The Baisa, I'd like to order "${name}" (Rs. ${price.toLocaleString("en-IN")}). Please confirm size, payment options (COD/UPI), and dispatch timing.`
    );
  },
  whatsappEnquiryUrl(message: string) {
    return waLink(message);
  }
};
