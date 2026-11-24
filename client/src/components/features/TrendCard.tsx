import { useState, useEffect } from "react";
import type { ColorTrend } from "../../types/Trend";
import Carousels from "../features/Carousels";

type TrendCardProps = {
  color: string;
  setColor: (color: string) => void;
};
const swatches = [
  { name: "tomato-red", hex: "#d00c23" },
  { name: "powder-pink", hex: "#f0cec0" },
  { name: "butter-yellow", hex: "#faf7d9" },
  { name: "mocha-mousse", hex: "#56433a" },
  { name: "lime-green", hex: "#aaad2b" },
];

const colorInfo: Record<string, string> = {
  "tomato-red":
    "Confident, a little theatrical. Tomato red is the coat you spot from across the street, and it's best worn without apology. Pair it with mocha, cream and washed denim, keep everything else quiet, and let one piece carry the red. It gets real depth in knit, leather and satin.",

  "powder-pink":
    "Soft, warm and a little nostalgic, powder pink feels like a quiet morning, delicate without being sweet. Layer it with butter yellow or cream for a tonal look, or ground it with mocha. It looks best in fluid fabrics like silk, fine knit and cotton poplin.",

  "butter-yellow":
    "Creamy, bright and easy, butter yellow brings light into a wardrobe without shouting about it. Wear it against denim, white or powder pink, or with mocha for contrast. Cashmere and soft cotton make the color look even richer.",

  "mocha-mousse":
    "Deep, warm and expensive-looking, mocha is the color of an understated wardrobe that never has to try. It works as the base for everything else in the palette, especially tomato red and butter yellow. Suede, wool and leather give it the most richness.",

  "lime-green":
    "Sharp, playful and unexpected, lime green is the one with an edge, the shade you wear when you want to be remembered. Use it as an accent against mocha or deep neutrals, such as a bag, a scarf or one piece in a sea of dark tones. A little goes a long way.",
};

const palette: Record<string, { name: string; hex: string }> = {
  "tomato-red": { name: "Tomato red", hex: "#d00c23" },
  "powder-pink": { name: "Powder pink", hex: "#f0cec0" },
  "butter-yellow": { name: "Butter yellow", hex: "#faf7d9" },
  "mocha-mousse": { name: "Mocha mousse", hex: "#56433a" },
  "lime-green": { name: "Lime green", hex: "#aaad2b" },
  cream: { name: "Cream", hex: "#f3ece0" },
  denim: { name: "Washed denim", hex: "#8fa3b8" },
  white: { name: "White", hex: "#ffffff" },
  charcoal: { name: "Charcoal", hex: "#2b2b2b" },
};

const pairings: Record<string, string[]> = {
  "tomato-red": ["mocha-mousse", "cream", "denim"],
  "powder-pink": ["butter-yellow", "cream", "mocha-mousse"],
  "butter-yellow": ["denim", "white", "powder-pink", "mocha-mousse"],
  "mocha-mousse": ["tomato-red", "butter-yellow", "cream"],
  "lime-green": ["mocha-mousse", "charcoal"],
};

//   const fabrics: Record<string, string[]> = {
//     "tomato-red":    ["Knit", "Leather", "Satin"],
//     "powder-pink":   ["Silk", "Fine knit", "Poplin"],
//     "butter-yellow": ["Cashmere", "Soft cotton"],
//     "mocha-mousse":  ["Suede", "Wool", "Leather"],
//     "lime-green":    ["Accessories", "Small accents"],
//   };

function TrendCard({ color, setColor }: TrendCardProps) {
  const [trends, setTrends] = useState<ColorTrend[]>([]);
  // const [selectedSlug, setSelectedSlug] = useState("tomato-red");
  const partners = pairings[color] ?? [];
  const selectedTrend = trends.find((trend) => trend.slug === color);

  useEffect(() => {
    async function loadTrends() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/trends`);

      if (!response.ok) {
        throw new Error("Failed to load trends");
      }

      const data: ColorTrend[] = await response.json();
      setTrends(data);
    }

    loadTrends().catch(console.error);
  }, []);

  if (!selectedTrend) return null;

  return (
    <div>
      <div style={{ padding: "0px 40px" }}>
        <div>
          <h1>2026</h1>
          <h1>FALL COLOR TRENDS: {selectedTrend.title.toUpperCase()}</h1>
        </div>

        <div style={{ width: "90%", margin: "0 auto", paddingTop: "30px" }}>
          <div
            className="swatches"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              paddingBottom: "30px",
            }}
          >
            {swatches.map((s) => (
              <button
                key={s.name}
                className={`swatch ${color === s.name ? "selected" : ""}`}
                onClick={() => setColor(s.name)}
                style={{ background: s.hex }}
                aria-label={s.name}
                aria-pressed={color === s.name}
              />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <Carousels key={selectedTrend.slug} slides={selectedTrend.slides} />

            <div style={{ margin: "0 auto", background: "none" }}>
              <h2 style={{ margin: "0 0 8px 0" }}>Chanel</h2>
              <h3>Runway: France, Fall 2026</h3>

              <p>{colorInfo[color]}</p>
              <h3>Model: Bella Hadid</h3>

              {partners.length > 0 && (
                <div>
                  <h3>Pairs with:</h3>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {partners.map((key) => (
                      <div
                        key={key}
                        title={palette[key].name}
                        style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          background: palette[key].hex,
                          border: "1px solid rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {partners.length > 0 && (
                <div>
                  <h3>Best in:</h3>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {partners.map((key) => (
                      <div
                        key={key}
                        title={palette[key].name}
                        style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          background: palette[key].hex,
                          border: "1px solid rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendCard;
