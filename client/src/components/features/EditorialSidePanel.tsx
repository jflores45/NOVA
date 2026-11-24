import type { Product } from "../../types/Product";

type ProductCardProps = {
  products: Product[];
  onClose: () => void;
};

function EditorialSidePanel({ products, onClose }: ProductCardProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "400px",
        maxWidth: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        padding: "30px",
        background: "#f6f3ef",
        color: "#05152a",
        zIndex: 1000,
        overflowY: "auto",
        boxShadow: "-5px 0 20px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h3 style={{ fontSize: "24px", margin: 0 }}>Shop the Look</h3>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close panel"
          style={{
            border: "none",
            background: "none",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>

      {products.map((item) => (
        <div key={item.id} style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "20px",
            }}
          >
            {/* {item.images.map((image) => ( */}
            <img
              key={item.id}
              src={item.images[0]?.url}
              alt={item.name}
              width="150"
              height="180"
              style={{ objectFit: "cover" }}
            />
            {/* ))} */}
          </div>
          <div>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditorialSidePanel;
