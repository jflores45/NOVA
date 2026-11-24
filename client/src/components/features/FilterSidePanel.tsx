type FilterSidePanelProps = {
  group: string | null;
  setGroup: (v: string | null) => void;
  colors: string[];
  setColors: (v: string[]) => void;
  sizes: string[];
  setSizes: (v: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (v: [number, number]) => void;
};

function toggle(list: string[], value: string) {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

function FilterSidePanel({
  group,
  setGroup,
  colors,
  setColors,
  sizes,
  setSizes,
  priceRange,
  setPriceRange,
}: FilterSidePanelProps) {
  return (
    <div
      style={{
        width: "20%",
        minHeight: "100vh",
        background: "white",
        border: "black solid 1px",
        padding: "100px 40px",
      }}
    >
      <div>
        <h2>Filter</h2>
        <p>Categories</p>
        {["Tops", "Bottoms", "Accessories", "Shoes"].map((g) => (
          <button
            key={g}
            onClick={() => setGroup(group === g ? null : g)}
            style={{ border: "none", opacity: group === g ? 1 : 0.5 }}
          >
            {g}
          </button>
        ))}
      </div>

      <div>
        <p>Color</p>
        {["red", "pink", "yellow", "white"].map((c) => (
          <button
            key={c}
            onClick={() => setColors(toggle(colors, c))}
            style={{
              backgroundColor: c,
              border: "none",
              borderRadius: "100%",
              width: "25px",
              height: "25px",
              outline: colors.includes(c) ? "2px solid white" : "none",
              outlineOffset: "2px",
            }}
          />
        ))}
      </div>

      <div>
        <p>Size</p>
        {["XS", "S", "M", "L", "XL"].map((s) => (
          <button
            key={s}
            onClick={() => setSizes(toggle(sizes, s))}
            style={{
              border: "none",
              borderRadius: "100%",
              width: "25px",
              height: "25px",
              opacity: sizes.includes(s) ? 1 : 0.5,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <div>
        <p>Max price: ${priceRange[1]}</p>
        <input
          type="range"
          min={0}
          max={1000}
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>

      <div>
        <button>Clear All</button>
        <button>Search</button>
      </div>
    </div>
  );
}

export default FilterSidePanel;
