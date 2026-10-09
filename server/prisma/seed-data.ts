import { Category } from "@prisma/client";

// EDITORIAL
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

// PRODUCTS
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
// TREND COLORS
export const ColorTrend = [
  {
    title: "Tomato Red",
    season: "Fall 2026",
    slug: "tomato-red",
    description: "A soft yellow tone appearing across tailoring, knitwear, and accessories.",
    colorHex: "#d00c23",
    featured: true,

    slides: [
      {
        imageUrl: "/images/Fall_Runway/TR-chanel-fall-2026-ready-to-wear.webp",
        designer: "Chanel",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/TR-louis-vuitton-fall-2026.webp",
        designer: "Louis Vuitton",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/TR_willy-chavarria-fall-2025.webp",
        designer: "Willy Chavarria",
        season: "Fall 2025",
      },
      {
        imageUrl: "/images/Fall_Runway/TR_Chanel Fall 2025.png",
        designer: "Bottega Veneta",
        season: "Fall 2025",
      },
      {
        imageUrl: "/images/Fall_Runway/TR_Lacoste Fall 2026.png",
        designer: "Paloma Wool",
        season: "Fall 2026",
      },
    ],
  },
  {
    title: "Powder Pink",
    season: "Fall 2026",
    slug: "powder-pink",
    description: "A soft yellow tone appearing across tailoring, knitwear, and accessories.",
    colorHex: "#f0cec0",
    featured: true,

    slides: [
      {
        imageUrl: "/images/Fall_Runway/PP-chanel-fall-2026-couture-credit-gorunway.webp",
        designer: "Chanel",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/PP-shushu-tong-fall-2026-ready-to-wear-shanghai-credit-brand.webp",
        designer: "Shushu Tong",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/PP-carven-fall25.webp",
        designer: "Carven",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/PP-amiri-fall-2026.webp",
        designer: "Amiri",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/PP-chanel-fall-2026-ready-to-wear.webp",
        designer: "Chanel",
        season: "Fall 2026",
      },
    ],
  },
  {
    title: "Butter Yellow",
    season: "Fall 2026",
    slug: "butter-yellow",
    description: "A soft yellow tone appearing across tailoring, knitwear, and accessories.",
    colorHex: "#faf7d9",
    featured: true,

    slides: [
      {
        imageUrl: "/images/Fall_Runway/BY-schiaparelli-fall-2026-ready-to-wear.webp",
        designer: "Schiaparelli",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/BY-sacai-fall-2026.webp",
        designer: "Sacai",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/BY_Chanel Fall 2026.png",
        designer: "Chanel",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/BY_gucci_f25.png",
        designer: "Gucci",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/BY_W_gucci_f25.png",
        designer: "Gucci",
        season: "Fall 2026",
      },
    ],
  },
  {
    title: "Mocha Mousse",
    season: "Fall 2026",
    slug: "mocha-mousse",
    description: "A soft yellow tone appearing across tailoring, knitwear, and accessories.",
    colorHex: "#56433a",
    featured: true,

    slides: [
      {
        imageUrl: "/images/Fall_Runway/MM_gucci_f25.png",
        designer: "Gucci",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/MM-giorgio-armani-fall-2026.webp",
        designer: "Giorgio Armani",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/MM-amiri-fall-2026-menswear-credit-gorunway.webp",
        designer: "Amiri",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/MM-dolce-and-gabbana-fall-2025.webp",
        designer: "Dolce and Gabbana",
        season: "Fall 2026",
      },
    ],
  },
  {
    title: "Lime Green",
    season: "Fall 2026",
    slug: "lime-green",
    description: "A soft yellow tone appearing across tailoring, knitwear, and accessories.",
    colorHex: "#aaad2b",
    featured: true,

    slides: [
      {
        imageUrl: "/images/Fall_Runway/LG-christian-dior-fall-2026-couture-credit-gorunway.webp",
        designer: "Christian Dior",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/LG-shushu-tong-fall-2026-ready-to-wear-shanghai-credit-brand.webp",
        designer: "shushu tong",
        season: "Fall 2026",
      },
      {
        imageUrl: "/images/Fall_Runway/LG-comme-des-garcons-homme-plus-fall-2025.webp",
        designer: "Labrum London",
        season: "Fall 2025",
      },
      {
        imageUrl: "/images/Fall_Runway/LG_gucci_f25_2.png",
        designer: "Christian Dior",
        season: "Fall 2025",
      },
      {
        imageUrl: "/images/Fall_Runway/LG_Chanel Fall 2025.png",
        designer: "Bottega Venteta",
        season: "Fall 2025",
      },
    ],
  },
];