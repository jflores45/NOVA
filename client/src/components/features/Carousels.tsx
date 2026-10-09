import { useState } from "react";
import type { TrendSlide } from "../../types/Trend";
  
type CarouselProps = {
    slides: TrendSlide[];
};
  
function Carousels({ slides }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const slide = slides[currentIndex];
  
    return (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)} style={{backgroundColor: "black", border: "none", padding: "20px"}}> | </button>
            <img src={slide.imageUrl} width="450" height="650" style={{ objectFit: "cover" }} />
            <button onClick={() => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)} style={{backgroundColor:"black", border: "none", padding: "20px"}}> | </button>
          </div>
        
          <div style={{textAlign: "center", lineHeight:"0.8"}}>
              <p>{slide.designer}</p>
              <p>{slide.season}</p>
          </div>
        </div>
    );
  }

export default Carousels;