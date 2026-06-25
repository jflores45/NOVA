

function TrendCard() {
    return (
        <div>
            <div style={{padding:"60px"}}>
                <h1>SRING-SUMMER Trends</h1>
                <p>Spring fashion for 2026 embraces a mix of soft pastels, vibrant, warm-toned shades, and crisp neutrals to transition from winter, featuring popular choices like butter yellow, sage green, peachy pink, and sky blue.</p>
                <h2>Butter Yellow</h2>
                <div style={{display: "flex", flex: "space-between", justifyContent: "center", gap: "20px", paddingBottom: "20px"}}> 
                    <button style={{background: "#faf7d9", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button style={{background: "#ddeef4", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button style={{background: "#bbb4e4", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                    <button style={{background: "#86b46a", height: "100px", width: "100px", border: "none", borderRadius: "5px"}}></button>
                </div>
                <div>
                    <img src="images/BY.png" style={{ display: "flex", justifyConent: "center", width: "90%"}}/>
                    <div style={{textAlign: "center"}}>
                        <p>Copenhagen Summer 2026</p>
                        <p>Schiaparelli</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrendCard;