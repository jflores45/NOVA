import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";

type ProductCardProps = {
  product: Product;
};

function ProductCardSmall({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }} >
      <div style={{ position: "relative", width: "300px", height: "350px" }}>
          <img
            src={product.images[0]}
            alt={product.name}
            width="300"
            height="350"
            style={{ objectFit: "cover" }}
          />

          <button
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              background: "none",
              border: "none",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            <img
              src="/images/Add.png"
              alt="Add"
              style={{ height: "30px" }}
            />
        </button>
      </div>

      <div style={{ lineHeight: "0.8" }}>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCardSmall;