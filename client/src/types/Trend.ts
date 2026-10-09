export type ColorTrend = {
    id: string;
    title: string;
    season: string;
    slug: string;
    description: string;
    colorHex: string;
    featured: boolean;
    slides: TrendSlide[];
};
  
export type TrendSlide = {
    id: string;
    imageUrl: string;
    designer: string;
    season: string;
    sortOrder: number;
    trendId: string;
};