function BlogCard() {
  return (
    <div style={{padding: "0px 50px 100px 50px"}}>
        <h2>More on Trends</h2>
        <div style={{display: "flex", flex:"space-between", gap: "80px"}}>
            <div>
                <img src="/images/Boho.png" style={{height: "600px", width: "600px", objectFit: "cover"}}/>
                <div style={{display: "flex", flex:"space-between", gap: "40px", marginTop:"20px"}}>
                    <button style={{height: "50px", width: "150px", backgroundColor: "black", color: "white", padding: "10px", borderRadius:"10px"}}>Shop Now</button>
                    <button style={{height: "50px", width: "150px", backgroundColor: "black", color: "white", padding: "10px", borderRadius:"10px"}}>Learn More</button>
                </div>
            </div>
            <div>
                <img src="/images/blog_test.png" style={{height: "600px", width: "600px", objectFit: "cover"}}/>
                <div style={{display: "flex", flex:"space-between", gap: "40px", marginTop:"20px"}}>
                    <button style={{height: "50px", width: "150px", backgroundColor: "black", color: "white", padding: "10px", borderRadius:"10px"}}>Shop Now</button>
                    <button style={{height: "50px", width: "150px", backgroundColor: "black", color: "white", padding: "10px", borderRadius:"10px"}}>Learn More</button>
                </div>
            </div>
        </div>
       
    </div>
  );
}

export default BlogCard;