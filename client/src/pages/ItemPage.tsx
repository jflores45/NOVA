import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Product } from "../types/Product";

function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState<Product | null>(null);
  const [itemImage, setItemImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadItem() {
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Unable to load item.");
        }

        const data: Product = await response.json();

        setItem(data);
      } catch {
        setError("Unable to load item.");
      }
    }

    loadItem();
  }, [id]);

  if (error) {
    return <p>Something went wrong: {error}</p>;
  }

  if (!item) {
    return <p>Loading product...</p>;
  }

  return (
    <div
      style={{
        color: "black",
        padding: "100px 40px 40px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {item.images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={item.name}
              height="100"
              width="100"
              onClick={() => setItemImage(image.url)}
              style={{
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <div>
          {(itemImage ?? item.images[0]?.url) && (
            <img
              src={itemImage ?? item.images[0]?.url}
              alt={item.name}
              style={{
                width: "min(45vw, 600px)",
                height: "600px",
                objectFit: "cover",
              }}
            />
          )}
        </div>

        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h1>{item.name}</h1>
          <p>${item.price}</p>
          <p>{item.description}</p>

          <button type="button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
