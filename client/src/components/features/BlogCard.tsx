function BlogCard() {
  return (
    <div>
        <h2>More on Trends</h2>
        <div style={{display: "flex", flex:"space-between", gap: "40px", padding: "20px 60px"}}>
            <div>
                <img src="/images/Boho.png" style={{height: "800px"}}/>
                <div>
                    <button>Shop Now</button>
                    <button>Learn More</button>
                </div>
            </div>
            <div>
                <img src="/images/Short.png" style={{height: "800px"}}/>
                <div>
                    <button>Shop Now</button>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
       
    </div>
  );
}

export default BlogCard;