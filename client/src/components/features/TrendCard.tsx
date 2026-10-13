
import { useState, useEffect } from "react";
import type { ColorTrend } from "../../types/Trend";
import Carousels from "../features/Carousels"

type TrendCardProps = {
    color: string;
    setColor: (color: string) => void;
};
 
function TrendCard({ color, setColor }: TrendCardProps) {
    const [trends, setTrends] = useState<ColorTrend[]>([]);
    // const [selectedSlug, setSelectedSlug] = useState("tomato-red");

    const selectedTrend = trends.find((trend) => trend.slug === color);

    useEffect(() => {
        async function loadTrends() {
          const response = await fetch("http://localhost:3001/api/trends");
      
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
            <div style={{padding:"20px 40px"}}>
                <h1>FALL-TRENDS</h1>
                <p>Spring fashion for 2026 embraces a mix of soft pastels, vibrant, warm-toned shades, and crisp neutrals to transition from winter, featuring popular choices like butter yellow, sage green, peachy pink, and sky blue.</p>
                
                <div style={{display: "flex", justifyContent: "center"}}>
                <h2>{selectedTrend.title}</h2>
                </div>

                {/* <div style={{display: "flex", flex: "space-between", justifyContent: "center", gap: "20px", paddingBottom: "20px"}}> 
                    <button onClick={() => setSelectedTrend("butter-yellow")} style={{background: "#faf7d9", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("sky-blue")} style={{background: "#ddeef4", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("lavender")} style={{background: "#bbb4e4", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("sage-green")} style={{background: "#86b46a", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                </div> */}

                <div style={{display: "flex", flex: "space-between", justifyContent: "center", gap: "20px", paddingBottom: "20px"}}> 
                    <button onClick={() => setColor("tomato-red")} style={{background: "#d00c23", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setColor("powder-pink")} style={{background: "#f0cec0", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setColor("butter-yellow")} style={{background: "#faf7d9", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setColor("mocha-mousse")} style={{background: "#56433a", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setColor("lime-green")} style={{background: "#aaad2b", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                </div>

                <Carousels key={selectedTrend.slug} slides={selectedTrend.slides} />

            </div>
        </div>
    );
}

export default TrendCard;