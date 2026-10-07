export type EditorialImage = {
    id: string;
    imageUrl: string;
    caption?: string;
    sortOrder: number;
};
  
  export type EditorialCollection = {
    id: string;
    title: string;
    description: string;
    season: string;
    category: string;
    coverImage: string;
    featured: boolean;
    images: EditorialImage[];
};