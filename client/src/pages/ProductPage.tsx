import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types/Product";
// import { API_URL } from "../config";

const SIZE_ORDER = ["xs", "s", "m", "l", "xl"];

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "notfound" | "error">("loading");
  const [color, setColor] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setStatus("loading");
    setColor(null);
    setSize(null);
    setImageIndex(0);

    fetch(`${import.meta.env.VITE_API_URL}/api/products?${id}`)
      .then((res) => {
        if (res.status === 404) {
          setStatus("notfound");
          return null;
        }
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        if (data) {
          setProduct(data);
          setStatus("ready");
        }
      })
      .catch(() => setStatus("error"));
  }, [id]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Something went wrong. Please try again.</p>;
  if (status === "notfound" || !product) return <h2>Product not found</h2>;

  // sizes and colors come from the variants
  const colors = [...new Set(product.variants.map((v) => v.color))];
  const sizes = [...new Set(product.variants.map((v) => v.size))].sort(
    (a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b)
  );

  // the exact variant the shopper picked (this is what the cart needs)
  const selected = product.variants.find((v) => v.color === color && v.size === size);

  const sizeAvailable = (s: string) =>
    product.variants.some((v) => v.size === s && (!color || v.color === color) && v.stock > 0);

  return (
    <>
      <div className="Carosols">
        <img className="Main" src={product.images[imageIndex]?.url} alt={product.name} />
        {product.images.map((img, i) => (
          <img
            key={img.id}
            className="preview"
            src={img.url}
            alt=""
            onClick={() => setImageIndex(i)}
            style={{ cursor: "pointer", opacity: i === imageIndex ? 1 : 0.6 }}
          />
        ))}
      </div>

      <div>
        <h2>{product.name}</h2>
        <p>${Number(product.price).toFixed(2)}</p>

        <div>
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(color === c ? null : c)}
              aria-pressed={color === c}
              style={{ opacity: color === c ? 1 : 0.6 }}
            >
              {c}
            </button>
          ))}
        </div>

        <div>
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(size === s ? null : s)}
              disabled={!sizeAvailable(s)}
              aria-pressed={size === s}
              style={{ opacity: size === s ? 1 : 0.6 }}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <button
        disabled={!selected || selected.stock === 0}
        onClick={() => {
          // send selected.id (the variantId) to your cart endpoint
        }}
      >
        {!selected ? "SELECT COLOR & SIZE" : selected.stock === 0 ? "SOLD OUT" : "ADD TO BAG"}
      </button>

      <hr />

      <div>
        <p>{product.description}</p>
      </div>
    </>
  );
}

export default ProductPage;