import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: "6",
    name: "Cassie Cashmere Sweater",
    price: 150,
    category: "women",
    type: "sweaters",
    description: "100% cashmere sweater",
    images: ["/images/Cassie_Sweater.png"],
    colors: ["butter yellow"],
    sizes: ["s", "m", "l", "xl"]
  },

  {
    id: "7",
    name: "Cassie Kitten Heels",
    price: 150,
    category: "women",
    type: "heels",
    description: "Kitten Heels",
    images: ["/images/Cassie_Kitten_Heel.png"],
    colors: ["butter yellow"],
    sizes: ["s", "m", "l", "xl"]
  },

  {
    id: "8",
    name: "Cassie Cotton Wrap Top",
    price: 150,
    category: "women",
    type: "top",
    description: "Cotton Wrap Top",
    images: ["/images/Cassie_Wrap_Top.png"],
    colors: ["butter yellow"],
    sizes: ["s", "m", "l", "xl"]
  },

  {
    id: "9",
    name: "Cassie Daisy Socks",
    price: 15,
    category: "women",
    type: "socks",
    description: "100% cashmere sweater",
    images: ["/images/Cassie_Socks.png"],
    colors: ["butter yellow"],
    sizes: ["s", "m", "l", "xl"]
  }

];