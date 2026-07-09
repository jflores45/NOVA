import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import type { Product } from "../../types/Product";

type ProductGridProps = {
  collection?: string;
  category?: string;
};

function ProductGrid({ collection, category }: ProductGridProps) {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {

    console.log("Fetching from:", `${import.meta.env.VITE_API_URL}/api/products`);
    let url = `${import.meta.env.VITE_API_URL}/api/products`;

    if (collection){
      url += `?collection=${collection}`;
    }
    else if (category) {
      url += `?category=${category}`;
    }
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [collection, category]);
  
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            padding: "100px 50px"
          }}
        >
        {products.map((p) => (
          <ProductCard  
            key={p.id}
            product={p}
          />
        ))}
    </div>
  );
}

export default ProductGrid;