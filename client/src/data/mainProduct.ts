import type { Product } from "../types/Product";

export const mainProduct: Product[] = [
  {
    id: "1",
    name: "Cassie Cashmere Sweater",
    price: 150,
    category: "women",
    type: "sweaters",
    description: "100% cashmere sweater",
    images: ["/images/red_trackSuit.png"],
    colors: ["butter yellow"],
    sizes: ["s", "m", "l", "xl"],

    featured: true,
     trendTags: ["in-season", "quiet-luxury"]
  },

  {
    id: "2",
    name: "Cassie Kitten Heels",
    price: 150,
    category: "women",
    type: "heels",
    description: "Kitten Heels",
    images: ["/images/Maddy.png"],
    colors: ["butter yellow"],
    sizes: ["s", "m", "l", "xl"],

    featured: true,
     trendTags: ["in-season", "quiet-luxury"]
  },

  {
    id: "3",
    name: "Cassie Cotton Wrap Top",
    price: 150,
    category: "women",
    type: "top",
    description: "Cotton Wrap Top",
    images: ["/images/Grey_Suit.png"],
    colors: ["butter yellow"],
    sizes: ["s", "m", "l", "xl"],

    featured: true,
     trendTags: ["in-season", "quiet-luxury"]
  },

  {
    id: "4",
    name: "Cassie Daisy Socks",
    price: 15,
    category: "women",
    type: "socks",
    description: "100% cashmere sweater",
    images: ["/images/Green_Corset.png"],
    colors: ["butter yellow"],
    sizes: ["s", "m", "l", "xl"],

    featured: true,
    trendTags: ["in-season", "quiet-luxury"]
  },


];