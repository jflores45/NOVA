import { Category } from "@prisma/client";

export const editorialCollections = [
  {
    title: "Women Fall 2026",
    slug: "women-fall-2026",
    description:
      "This season's looks are filled with vibrant collections of classic elevated basics, accessories, and timeless outerwear.",
    season: "Fall 2026",
    category: Category.WOMEN,
    coverImage: "/images/editorial-w1.png",
    featured: true,

    images: [
      "/images/editorial-w1.png",
      "/images/editorial-w2.png",
      "/images/editorial-w3.png",
      "/images/editorial-w4.png",
    ],
  },

  {
    title: "Men Fall 2026",
    slug: "men-fall-2026",
    description:
      "Tailored silhouettes, textured fabrics, and modern essentials define this season's menswear edit.",
    season: "Fall 2026",
    category: Category.MEN,
    coverImage: "/images/editorial-m1.png",
    featured: true,

    images: [
      "/images/editorial-m1.png",
      "/images/editorial-m2.png",
      "/images/editorial-m3.png",
      "/images/editorial-m4.png",
    ],
  },
];

export const products = [
  {
    name: "Cassie Cashmere Sweater",
    price: 150,
    category: "women",
    type: "sweaters",
    description: "100% cashmere sweater",
    collection:"butter_yellow",

    featured: true,
    images: ["/images/Cassie_Sweater.png"],

  },

  {
    name: "Cassie Kitten Heels",
    price: 150,
    category: "women",
    type: "heels",
    description: "Kitten Heels",
    collection:"butter_yellow",

    featured: true,
    images: ["/images/Cassie_Kitten_Heel.png"],

  },

  {
    name: "Cassie Cotton Wrap Top",
    price: 150,
    category: "women",
    type: "top",
    description: "Cotton Wrap Top",
    collection:"butter_yellow",

    featured: true,
    images: ["/images/Cassie_Wrap_Top.png"],

  },

  {
    name: "Cassie Daisy Socks",
    price: 15,
    category: "women",
    type: "socks",
    description: "100% cashmere sweater",
    collection:"butter_yellow",

    featured: true,
    images: ["/images/Cassie_Socks.png"],
   
  },
  {
    name: "Lola TrackSuit",
    price: 90,
    category: "women",
    type: "one-piece",
    description: "Red Track Suit",
    collection: "women editorial",

    featured: true,
    images: ["/images/red_trackSuit.png"],
  
  },
  {
    name: "Maddy Jeans",
    price: 80,
    category: "women",
    type: "Jeans",
    description: "black denim 100% cotton",
    collection: "women editorial",

    featured: true,
    images: ["/images/Maddy.png"],
   
  },
  {
    name: "Stella Suit",
    price: 120,
    category: "women",
    type: "Suit",
    description: "Plat Suit",
    collection: "women editorial",

    featured: true,
    images: ["/images/Grey_Suit.png"],
 
  },

  {
    name: "Marg Corset",
    price: 100,
    category: "women",
    type: "Top",
    description: "Plat Suit",
    collection: "women editorial",
    
    featured: true,
    images: ["/images/Green_Corset.png"],

  },

  {
    name: "Ludvige Fur Coat",
    price: 500,
    category: "men",
    type: "Jacket",
    description: "Fur lines Jacket",
    collection: "men editorial",

    featured: true,
    images: ["/images/Ludvige.png"],
 
  },

  {
    name: "Zack Pin striped Suit",
    price: 250,
    category: "men",
    type: "Jacket",
    description: "Brown white striped and lined Jacket",
    collection: "men editorial",

    featured: true,
    images: ["/images/Zack.png"],
   
  },

  {
    name: "Mark Pink Suit",
    price: 250,
    category: "men",
    type: "Jacket",
    description: "lined Jacket",
    collection: "men editorial",

    featured: true,
    images: ["/images/Mark.png"],

  },

  {
    name: "Ando Green Suit",
    price: 250,
    category: "men",
    type: "Jacket",
    description: "lined Jacket",
    collection: "men editorial",

    featured: true,
    images: ["/images/Ando.png"],
  
  },

];