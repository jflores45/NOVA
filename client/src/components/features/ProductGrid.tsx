import ProductCard from "./ProductCard";
import { useState, useEffect, useMemo } from "react";
import type { Product } from "../../types/Product";

type ProductFilters = {
  group: string | null;
  colors: string[];
  sizes: string[];
  priceRange: [number, number];
};

type ProductGridProps = {
  category?: string;
  filters: ProductFilters;
};

function ProductGrid({ category, filters }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const query = useMemo(() => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (filters?.group) params.set("group", filters.group);
    if (filters?.colors.length) params.set("colors", filters.colors.join(","));
    if (filters?.sizes.length) params.set("sizes", filters.sizes.join(","));
    if (filters) {
      params.set("minPrice", String(filters.priceRange[0]));
      params.set("maxPrice", String(filters.priceRange[1]));
    }
    return params.toString();
  }, [category, filters]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products?${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "130px 40px 100px 40px",
        width: "80%",
      }}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductGrid;
