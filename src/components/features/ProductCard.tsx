import type { Product } from "../../types/Product";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
        <img
            src={product.images[0]}
            alt={product.name}
            width="200"
        />

        <h3>{product.name}</h3>

        <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;