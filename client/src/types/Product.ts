export type ProductImage = {
  id: number;
  url: string;
  sortOrder: number;
  productId: number;
};

export type ProductVariant = {
  id: number;
  size: string;
  color: string;
  stock: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  collection?: string;
  category: string;
  featured: boolean;
  images: ProductImage[];
  variants: ProductVariant[];
};
