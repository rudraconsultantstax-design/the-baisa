export type Product = {
  id: number;
  name: string;
  collection: string;
  price: number;
  compareAt?: number;
  color: string;
  sizeRange: string;
  fabric: string;
  tag: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "'Gul-e-Bahar' - White Floral Print Rajputi Suit Set + Red Bandhej Odhani",
    collection: "Faganiya",
    price: 849,
    color: "White",
    sizeRange: "4m / 5m",
    fabric: "Soft wash-and-wear",
    tag: "New",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/model_1_a04c9e0a-76d9-40d5-8466-bb3752592b00.jpg?v=1770058011"
  },
  {
    id: 2,
    name: "'Gulabiya' - Magenta Floral Rajputi Suit Set + Shaded Maroon Bandhej Odhani",
    collection: "Faganiya",
    price: 849,
    color: "Magenta",
    sizeRange: "4m / 5m",
    fabric: "Premium soft fabric",
    tag: "New",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/model_1_d9f69414-8527-4636-85e1-080adaa888d4.jpg?v=1770057710"
  },
  {
    id: 3,
    name: "'Faganiya Gulal' - White Floral Rajputi Suit Set + Crimson Bandhej Odhani",
    collection: "Faganiya",
    price: 849,
    color: "White",
    sizeRange: "4m / 5m",
    fabric: "Japan digital print",
    tag: "New",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/model_1.jpg?v=1770056559"
  },
  {
    id: 4,
    name: "'Gulaabo' - Rani Pink Floral Print Rajputi Suit Set + Deep Maroon Odhani",
    collection: "French Print",
    price: 579,
    color: "Rani Pink",
    sizeRange: "4m / 5m",
    fabric: "French print",
    tag: "Sale",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09092_model_1_10325939-8b08-4afd-86dd-00bb99a8654b.jpg?v=1769364924"
  },
  {
    id: 5,
    name: "'Jamuni Bagh' - Deep Purple & Peach Floral Print Rajputi Suit Set + Shibori Diamond Odhani",
    collection: "Bagh-e-Bahar",
    price: 939,
    color: "Purple",
    sizeRange: "4m / 5m",
    fabric: "Hi-Multy digital print",
    tag: "Bestseller",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09129_model_1_e9270ed6-b65f-4ca4-a847-cc409a8c0ee5.jpg?v=1769364484"
  },
  {
    id: 6,
    name: "'Gulbahaar' - Peach-Pink Multi Floral Print Rajputi Suit Set + Deep Maroon Bandhej Odhani",
    collection: "Bagh-e-Bahar",
    price: 939,
    color: "Peach",
    sizeRange: "4m / 5m",
    fabric: "Hi-Multy digital print",
    tag: "Limited",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09128_model_1_9657c157-38e8-4ed6-937e-16cfe11001b2.jpg?v=1769364359"
  },
  {
    id: 7,
    name: "'Gul-Bagh' - Hot Pink Floral Print Rajputi Suit Set + Deep Rani Shibori Odhani",
    collection: "Bagh-e-Bahar",
    price: 939,
    color: "Hot Pink",
    sizeRange: "4m / 5m",
    fabric: "Hi-Multy digital print",
    tag: "Limited",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09124_model_1_b25de8bf-8410-48c7-93e9-78b76d582bc4.jpg?v=1769364185"
  },
  {
    id: 8,
    name: "'Surya Kiran' - Crimson Red Sunburst Embroidered Rajputi Suit Set + Rani Pink Heavy Border Odhani",
    collection: "Fendy Work",
    price: 1099,
    color: "Crimson",
    sizeRange: "4m / 5m",
    fabric: "Fendy work",
    tag: "Premium",
    image: "https://cdn.shopify.com/s/files/1/0755/7123/3020/files/IRC09214_model_2.jpg?v=1769198359"
  }
];

export const collections = Array.from(new Set(products.map((product) => product.collection)));
export const colors = Array.from(new Set(products.map((product) => product.color)));
