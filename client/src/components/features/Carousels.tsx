import { useState } from "react";
import type { TrendSlide } from "../../types/Trend";

type CarouselProps = {
  slides: TrendSlide[];
  interval?: number;
};

function Carousels({ slides, interval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slide = slides[currentIndex];

  const next = () => setCurrentIndex((i) => (i + 1) % slides.length);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={slide.imageUrl}
          alt={`${slide.designer} ${slide.season}`}
          width="500"
          height="700"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* progress bars */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          width: "500px",
          margin: "0 auto",
        }}
      >
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to ${s.designer} ${s.season}`}
            style={{
              flex: 1,
              padding: "12px 0",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                display: "block",
                height: "3px",
                background: "grey",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <span
                onAnimationEnd={next}
                style={{
                  display: "block",
                  height: "100%",
                  background: "black",
                  transformOrigin: "left",
                  transform: i < currentIndex ? "scaleX(1)" : "scaleX(0)",
                  animation:
                    i === currentIndex
                      ? `fill ${interval}ms linear forwards`
                      : "none",
                }}
              />
            </span>
          </button>
        ))}
      </div>

      {/* <div style={{ textAlign: "center", lineHeight: "0.8" }}>
        <p>{slide.designer}</p>
        <p>{slide.season}</p>
      </div> */}
    </div>
  );
}

export default Carousels;
