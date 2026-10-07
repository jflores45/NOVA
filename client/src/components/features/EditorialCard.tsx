import CarouselBackground from "./CarouselBackground";
import type { EditorialCollection } from "../../types/Editorial";

function EditorialCard({ collection, } : { collection: EditorialCollection; }){
    // const images =
    //   type === "female"
    //     ? ["/images/editorial-w1.png", "/images/editorial-w2.png", "/images/editorial-w3.png", "/images/editorial-w4.png"]
    //     : ["/images/editorial-m1.png", "/images/editorial-m2.png", "/images/editorial-m3.png", "/images/editorial-m4.png"];
  
    // const heading = type === "female" ? "Women Fall 2026" : "Men Fall 2026";
    const images = collection.images.map(
      (image) => image.imageUrl
    );

    return (
      <CarouselBackground images={ images }>
        <div style={{ position: "absolute", bottom: "0", left: "0", padding: "60px", width: "35%", color: "white" }}>
          <h3 style={{ margin: "0 0 16px 0" }}>{collection.title}</h3>
          <p style={{ margin: "0 0 24px 0" }}>
            {collection.description}
            {/* This season's looks are filled with vibrant collections of classic elevated basics, accessories, and timeless outwear. */}
          </p>
          <button style={{background: "rgba(255, 255, 255, 0.06)",  backdropFilter: "blur(20px)",  WebkitBackdropFilter: "blur(10px)", color:"white", padding: "18px 32px", width: "36%", borderRadius: "5px", border: "1px solid white", fontSize: "medium"}}>Shop Now</button>
        </div>
      </CarouselBackground>
    );
  }
export default EditorialCard;