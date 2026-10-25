import type { Product } from "./Product";

export type EditorialFeatureImage = {
    id: string;
    imageUrl: string;
    caption?: string;
    sortOrder: number;
};
  
export type EditorialFeature = {
    id: string;
    title: string;
    description: string;
    season: string;
    category: string;
    coverImage: string;
    featured: boolean;
    images: EditorialFeatureImage[];
};

export type EditorialLookProduct = {
  productId: number;
  sortOrder: number;
  product: Product;
};

export type EditorialLook = {
  id: string;
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  featured: boolean;
  products: EditorialLookProduct[];
};