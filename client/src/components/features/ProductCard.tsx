import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={{ textAlign: "left", height: "400px" }}>
        <div style={{ position: "relative" }}>
          <img
            src={product.images[0]}
            alt={product.name}
            width="300"
            height="400"
            style={{
              objectFit: "cover",
            }}
          />

          <button
            style={{
              position: "absolute",
              bottom: "20px",
              right: "40px",
              background: "none",
              borderRadius: "20px",
              border: "2px solid white",
              color: "white",
              display: "flex",
            }}
          >
            +
          </button>
        </div>

        <h3>{product.name}</h3>

        <p>${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;