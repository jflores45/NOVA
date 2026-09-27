

function Footer() {
    return (
      <footer
        style={{
          background: "black",
          color: "white",
          padding: "100px 80px 20px 80px",
          textAlign: "left"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          <section>
            <h3>Explore Nova</h3>
            <p>Women Winter '25</p>
            <p>Men Winter '25</p>
            <p>Women Fall '25</p>
            <p>Men Fall '25</p>
          </section>
  
          <section>
            <h3>Client Services</h3>
            <p>Delivery & Returns</p>
            <p>Contact Us</p>
            <p>FAQ</p>
          </section>
  
          <section>
            <h3>Legal</h3>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Terms & Conditions</p>
            <p>Accessibility</p>
          </section>
  
          <section>
            <h3>Subscribe To Our Newsletter</h3>
  
            <p>
              Subscribe to receive the latest news,
              exclusive events, and fashion trends.
            </p>
  
            <input
              type="email"
              placeholder="* Email"
              style={{ width: "500px", height: "30px", borderBottom:"solid 2px white", background: "none" }}
            />
          </section>
        </div>
  
        <div style={{ marginTop: "120px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <p>© Nova 2026. All Rights Reserved</p>
  
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img style={{ height: "30px" }} src="/images/Instagram.png" alt="Instagram" />
            <img style={{ height: "50px" }} src="/images/facebook.png" alt="Facebook" />
            <img style={{ height: "40px" }} src="/images/X.png" alt="X" />
            <img style={{ height: "40px" }} src="/images/Tiktok.png" alt="TikTok" />
          </div>
        </div>
      </footer>
    );
  }

export default Footer;