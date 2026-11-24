import { useState } from "react";
import ProductGrid from "../components/features/ProductGrid";
import FilterSidePanel from "../components/features/FilterSidePanel";

function WomenPage() {
  const [group, setGroup] = useState<string | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  return (
    <div style={{ display: "flex" }}>
      <FilterSidePanel
        group={group}
        setGroup={setGroup}
        colors={colors}
        setColors={setColors}
        sizes={sizes}
        setSizes={setSizes}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      <ProductGrid
        category="women"
        filters={{ group, colors, sizes, priceRange }}
      />
    </div>
  );
}

export default WomenPage;
