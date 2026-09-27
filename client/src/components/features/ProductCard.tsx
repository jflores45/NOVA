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
              border: "none"
              }}
            >
            <img  src="/images/Add.png" alt="Add" style={{ height: "30px" }}/>
          </button>
        </div>

        <div style={{padding: "0px", textAlign: "left", lineHeight:"0.8"}}>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>

      </div>
    </Link>
  );
}

export default ProductCard;