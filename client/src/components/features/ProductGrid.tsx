import ProductCard from "./ProductCard";
import type { Product } from "../../types/Product";

type ProductGridProps = {
  products: Product[];
};

function ProductGrid({ products }: ProductGridProps) {
  return (
    
    <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", padding: "100px 50px"}}>
      {products.map((p) => (
        <ProductCard  product={p}/>
      ))}
    </div>
  );
}

export default ProductGrid;