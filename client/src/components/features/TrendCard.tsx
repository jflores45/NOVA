
import { useState } from "react";
import { trends } from "../../data/Fall-trend-data";
import Carousels from "../features/Carousels"

type TrendKey = keyof typeof trends;

function TrendCard() {
    const [selectedTrend, setSelectedTrend] = useState<TrendKey>("Tomato Red");
    const trend = trends[selectedTrend];

    return (
        <div>
            <div style={{padding:"20px 40px"}}>
                <h1>FALL-TRENDS</h1>
                <p>Spring fashion for 2026 embraces a mix of soft pastels, vibrant, warm-toned shades, and crisp neutrals to transition from winter, featuring popular choices like butter yellow, sage green, peachy pink, and sky blue.</p>
                
                <div style={{display: "flex", justifyContent: "center"}}>
                <h2>{trend.title}</h2>
                </div>

                {/* <div style={{display: "flex", flex: "space-between", justifyContent: "center", gap: "20px", paddingBottom: "20px"}}> 
                    <button onClick={() => setSelectedTrend("butter-yellow")} style={{background: "#faf7d9", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("sky-blue")} style={{background: "#ddeef4", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("lavender")} style={{background: "#bbb4e4", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("sage-green")} style={{background: "#86b46a", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                </div> */}

                <div style={{display: "flex", flex: "space-between", justifyContent: "center", gap: "20px", paddingBottom: "20px"}}> 
                    <button onClick={() => setSelectedTrend("Tomato Red")} style={{background: "#d00c23", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("Powder Pink")} style={{background: "#f0cec0", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("Butter Yellow")} style={{background: "#faf7d9", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("Mocha Mousse")} style={{background: "#56433a", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button onClick={() => setSelectedTrend("Lime Green")} style={{background: "#aaad2b", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                </div>

                <Carousels key={selectedTrend} slides={trend.slides} />

            </div>
        </div>
    );
}

export default TrendCard;