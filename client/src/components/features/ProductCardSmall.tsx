import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";

type ProductCardProps = {
  product: Product;
};

function ProductCardSmall({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
      <div style={{textAlign: "left"}}>
          <img
              src={product.images[0]}
              alt={product.name}
              width="300"
              height="450"
              style={{
                objectFit: "contain",
              }}
          />
          <button> + </button>
          <h3>{product.name}</h3>

          <p>${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCardSmall;