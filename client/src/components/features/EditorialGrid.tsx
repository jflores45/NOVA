import { useState } from "react";
import type { EditorialLook } from "../../types/Editorial";
import EditorialSidePanel from "./EditorialSidePanel";

type EditorialGridProps = {
  collection: EditorialLook[];
};

function EditorialGrid({ collection }: EditorialGridProps) {
  const [selectedLook, setSelectedLook] = useState<EditorialLook | null>(null);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "40px 40px 40px 40px",
        }}
      >
        {collection.map((look) => (
          <div key={look.id} style={{ textAlign: "left", height: "400px" }}>
            <div style={{ position: "relative" }}>
              <img
                src={look.coverImage}
                alt={look.title}
                width="300"
                height="400"
                style={{ objectFit: "cover" }}
              />

              <button
                type="button"
                aria-label={`View products in ${look.title}`}
                onClick={() => setSelectedLook(look)}
                style={{
                  position: "absolute",
                  bottom: "360px",
                  right: "40px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src="/images/More.png" alt="" style={{ height: "30px" }} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedLook && (
        <EditorialSidePanel
          products={selectedLook.products.map((item) => item.product)}
          onClose={() => setSelectedLook(null)}
        />
      )}
    </>
  );
}

export default EditorialGrid;
