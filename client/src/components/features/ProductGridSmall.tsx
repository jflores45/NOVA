import { useState, useEffect } from "react";
import ProductCardSmall from "./ProductCardSmall";
import type { Product } from "../../types/Product";

type ProductGridSmallProps = {
    collection: string;
};

function ProductGridSmall({ collection }: ProductGridSmallProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        let url = `${import.meta.env.VITE_API_URL}/api/products`;

        if (collection) {
        url += `?collection=${collection}`;
        }
       
        fetch(url)
          .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch products");
            return res.json();
          })
          .then((data) => setProducts(data))
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      }, [collection]);
      
      if (loading) return <p>Loading products...</p>;
      if (error) return <p>Something went wrong: {error}</p>;

    return (
        <div style={{ padding: "20px 50px"}}>
            <h2>Buy the Look</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
                {products.map((p) => (
                <ProductCardSmall 
                    key={p.id}
                    product={p}
                />
                ))}
            </div>
        </div>
    );
}

export default ProductGridSmall;