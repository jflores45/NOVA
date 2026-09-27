import ProductCardSmall from "./ProductCardSmall";
import type { Product } from "../../types/Product";

type ProductCardProps = {
   products: Product[];
};

function ProductGridSmall({ products }: ProductCardProps) {
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