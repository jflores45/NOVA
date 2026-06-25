import ProductCardSmall from "./ProductCardSmall";
import type { Product } from "../../types/Product";

type ProductCardProps = {
   products: Product[];
};

function ProductGridSmall({ products }: ProductCardProps) {
    return (
        <>
            <h2>Buy the Look</h2>
            <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                    padding: "100px 50px"
            }}>
            {products.map((p) => (
            <ProductCardSmall 
                key={p.id}
                product={p}
            />

            ))}
            </div>
        </>
    );
}

export default ProductGridSmall;