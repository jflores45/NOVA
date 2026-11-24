export type CartLine = {
  id: number;
  quantity: number;
  variant: {
    id: number;
    size: string;
    color: string;
    stock: number;
    product: {
      id: number;
      name: string;
      price: string | number;
      images: { url: string }[];
    };
  };
};
