export type Product = {
    id: string;
    name: string;
    price: number;
    category: "men" | "women" | "unisex";
    type: "sweaters" | "top" | "pants" | "jeans" | "sneakers" | "socks" | "heels";
  
    description: string;
  
    images: string[];
  
    colors: string[];
  
    sizes: string[];
  };
