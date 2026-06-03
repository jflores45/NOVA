import ProductCard from "./ProductCard";
import type { Product } from "../../types/Product";

type ProductGridProps = {
  products: Product[];
};

function ProductGrid({ products }: ProductGridProps) {
  return (
    
    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p}/>
      ))}
    </div>
  );
}

export default ProductGrid;