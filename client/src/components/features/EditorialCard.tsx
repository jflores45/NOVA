

function EditorialCard({type}) {
 
    if (type ==="female"){
        return (
            <div style={{position: "relative", backgroundImage: "url('/images/editorial-w.png')", height: "92vh", padding: "0px"}}>
                <div style={{position: "absolute", bottom: "0", left: "0", padding: "60px", width: "40%", color: "white"}}>
                    <h3>Women Fall 2026</h3>
                    <p>This season’s looks are filled with vibrant collections of classic elevated basics, accessories, and timeless outwear.</p>
                    <button style={{background:"none", color:"white", padding: "20px", width: "180px", borderRadius: "5px", border: "2px solid white"}}>Shop Now</button>
                </div>
            </div>
        );
    } else {
        return (
            <div style={{position: "relative", backgroundImage: "url('/images/editorial-m.png')", height: "100vh"}}>
                <div style={{position: "absolute", bottom: "0", left: "0", padding: "60px", width: "40%", color: "white"}}>
                    <h3>Men Fall 2026</h3>
                    <p>This season’s looks are filled with vibrant collections of classic elevated basics, accessories, and timeless outwear.</p>
                    <button style={{background:"none", color:"white", padding: "20px", width: "180px", borderRadius: "5px", border: "2px solid white"}}>Shop Now</button>
                </div>
            </div>
        );
    }
}

export default EditorialCard;