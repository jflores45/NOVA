import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [showNav, setShowNav ] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if(currentScroll > lastScrollY){
        setShowNav(false);
      } else {
        setShowNav(true);
      }
        setLastScrollY(currentScroll);
      };
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
    style={{
      position: "fixed",
      top: 0, 
      left: 0, 
      width: "90%",
      zIndex: 1000,
      transform: showNav
      ? "translateY(0)"
      : "translateY(-100%)",
      transition: "transform 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "black",
      height: "4rem",
      padding: "5px 80px",
      margin: "0"
    }}
  >
      <div style={{display: "flex", justifyContent: "space-between", gap: "30px"}}>
          <Link style={{ textDecoration: "none", color: "white"}} to="/women">Women</Link>
          <Link style={{ textDecoration: "none", color: "white"}} to="/men">Men</Link>
      </div>
     

      <Link to="/">
        <img
          src="/images/Nova.png"
          alt="Nova logo"
          style={{ height: "20px" }}
        />
      </Link>

      <div style={{display : "flex", justifyContent: "space-between", gap:"30px"}}>
       <Link to="/likes">
          <img
            src="/images/Heart.png"
            alt="Heart"
            style={{ height: "23px" }}
          />
        </Link>
        <Link to="/user">
          <img
            src="/images/User.png"
            alt="User"
            style={{ height: "26px" }}
          />
        </Link>

        <Link to="/cart">
          <img
            src="/images/cart.png"
            alt="Cart"
            style={{ height: "25px" }}
          />
        </Link>
      </div>
      
    </div>
  );
}

export default NavBar;