export type Product = {
  id: number;
  slug: string;
  name: string;
  collection: string;
  price: number;
  compareAt?: number;
  color: string;
  sizeRange: string;
  fabric: string;
  tag: string;
  image: string;
  description?: string;
  wholesaleMOQ?: number;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "gul-e-bahar-white-floral-rajputi-suit-set",
    name: "'Gul-e-Bahar' - White Floral Print Rajputi Suit Set + Red Bandhej Odhani",
    collection: "Faganiya",
    price: 849,
    color: "White",
    sizeRange: "XS-3XL · 4m/5m kurta",
    fabric: "Soft wash-and-wear cotton blend",
    tag: "New",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/model_1_a04c9e0a-76d9-40d5-8466-bb3752592b00.jpg?v=1770058011",
    description: "Hand-finished Rajputi suit set in a delicate white floral with a contrast red bandhej odhani. Tailored at our Sanganer unit.",
    wholesaleMOQ: 25
  },
  {
    id: 2,
    slug: "gulabiya-magenta-floral-rajputi-suit-set",
    name: "'Gulabiya' - Magenta Floral Rajputi Suit Set + Shaded Maroon Bandhej Odhani",
    collection: "Faganiya",
    price: 849,
    color: "Magenta",
    sizeRange: "XS-3XL · 4m/5m kurta",
    fabric: "Premium soft cotton blend",
    tag: "New",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/model_1_d9f69414-8527-4636-85e1-080adaa888d4.jpg?v=1770057710",
    description: "Magenta floral Rajputi suit set paired with a shaded maroon bandhej odhani — festive yet wearable everyday.",
    wholesaleMOQ: 25
  },
  {
    id: 3,
    slug: "faganiya-gulal-white-floral-rajputi-suit-set",
    name: "'Faganiya Gulal' - White Floral Rajputi Suit Set + Crimson Bandhej Odhani",
    collection: "Faganiya",
    price: 849,
    color: "White",
    sizeRange: "XS-3XL · 4m/5m kurta",
    fabric: "Japan digital print cotton",
    tag: "New",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/model_1.jpg?v=1770056559",
    description: "Crisp white florals from our Faganiya line with a crimson bandhej odhani for festive contrast.",
    wholesaleMOQ: 25
  },
  {
    id: 4,
    slug: "gulaabo-rani-pink-rajputi-suit-set",
    name: "'Gulaabo' - Rani Pink Floral Print Rajputi Suit Set + Deep Maroon Odhani",
    collection: "French Print",
    price: 579,
    compareAt: 899,
    color: "Rani Pink",
    sizeRange: "XS-2XL · 4m/5m kurta",
    fabric: "French print cotton",
    tag: "Sale",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09092_model_1_10325939-8b08-4afd-86dd-00bb99a8654b.jpg?v=1769364924",
    description: "Under-₹599 everyday Rajputi set in rani pink with a deep maroon odhani — best-value pick of the week.",
    wholesaleMOQ: 50
  },
  {
    id: 5,
    slug: "jamuni-bagh-deep-purple-rajputi-suit-set",
    name: "'Jamuni Bagh' - Deep Purple & Peach Floral Print Rajputi Suit Set + Shibori Diamond Odhani",
    collection: "Bagh-e-Bahar",
    price: 939,
    color: "Purple",
    sizeRange: "XS-4XL · 4m/5m kurta",
    fabric: "Hi-Multy digital print cotton",
    tag: "Bestseller",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09129_model_1_e9270ed6-b65f-4ca4-a847-cc409a8c0ee5.jpg?v=1769364484",
    description: "Bestselling Bagh-e-Bahar set — deep purple and peach digital floral with a shibori diamond odhani.",
    wholesaleMOQ: 25
  },
  {
    id: 6,
    slug: "gulbahaar-peach-pink-rajputi-suit-set",
    name: "'Gulbahaar' - Peach-Pink Multi Floral Print Rajputi Suit Set + Deep Maroon Bandhej Odhani",
    collection: "Bagh-e-Bahar",
    price: 939,
    color: "Peach",
    sizeRange: "XS-4XL · 4m/5m kurta",
    fabric: "Hi-Multy digital print cotton",
    tag: "Limited",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09128_model_1_9657c157-38e8-4ed6-937e-16cfe11001b2.jpg?v=1769364359",
    description: "Limited-run peach-pink multi floral set with deep maroon bandhej odhani — soft, photogenic, festive-ready.",
    wholesaleMOQ: 25
  },
  {
    id: 7,
    slug: "gul-bagh-hot-pink-rajputi-suit-set",
    name: "'Gul-Bagh' - Hot Pink Floral Print Rajputi Suit Set + Deep Rani Shibori Odhani",
    collection: "Bagh-e-Bahar",
    price: 939,
    color: "Hot Pink",
    sizeRange: "XS-4XL · 4m/5m kurta",
    fabric: "Hi-Multy digital print cotton",
    tag: "Limited",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09124_model_1_b25de8bf-8410-48c7-93e9-78b76d582bc4.jpg?v=1769364185",
    description: "Hot pink florals with a deep rani shibori odhani — a high-impact festive everyday set.",
    wholesaleMOQ: 25
  },
  {
    id: 8,
    slug: "surya-kiran-crimson-embroidered-suit-set",
    name: "'Surya Kiran' - Crimson Red Sunburst Embroidered Rajputi Suit Set + Rani Pink Heavy Border Odhani",
    collection: "Fendy Work",
    price: 1099,
    color: "Crimson",
    sizeRange: "XS-3XL · 4m/5m kurta",
    fabric: "Fendy embroidered cotton",
    tag: "Premium",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09214_model_2.jpg?v=1769198359",
    description: "Premium fendy embroidered crimson set with a rani pink heavy-border odhani — wedding and event ready.",
    wholesaleMOQ: 12
  }
];

export const collections = Array.from(new Set(products.map((product) => product.collection)));
export const colors = Array.from(new Set(products.map((product) => product.color)));

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
