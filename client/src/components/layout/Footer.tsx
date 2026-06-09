

function Footer() {
    return (
      <footer
        style={{
          background: "black",
          color: "white",
          padding: "80px 80px 40px 80px",
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
  
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>© Nova 2026. All Rights Reserved.</p>
  
          <div>
            <img style={{transform: "translateY(-6px)"}} src="/images/Instagram.png" alt="User"/>
            <img style={{width: "70px", transform: "translateY(5px)"}} src="/images/facebook.png" alt="User"/>
            <img src="/images/X.png" alt="User"/>
            <img style={{transform: "translateY(-2px)"}} src="/images/Tiktok.png" alt="User"/>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;