import type { Cart } from "../types/Cart";

export const initialCarts: Cart[] = [

  {
    id: "6",
    item: "1024524",
    name: "Cassie Cashmere Sweater",
    price: 150,
    quantity: 2,
   
    images: ["/images/Cassie_Sweater.png"],
    colors: ["butter yellow"],
    sizes: ["s", "m"]
  },

  {
    id: "7",
    item: "1024524",
    name: "Cassie Kitten Heels",
    price: 150,
    quantity: 2,

    images: ["/images/Cassie_Kitten_Heel.png"],
    colors: ["butter yellow"],
    sizes: ["6"]
  },

  {
    id: "11",
    item: "1024524",
    name: "Maddy Jeans",
    price: 100,
    quantity: 2,
    
    images: ["/images/Cassie_Wrap_Top.png"],
    colors: ["Charcoal Black"],
    sizes: ["2"]
  }

];