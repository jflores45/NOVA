// import ProductGrid from "../components/features/ProductGrid";
import CartGrid from "../components/features/CartGrid";
// import ProductGrid from "../components/features/ProductGrid";
// import { initialCarts } from "../data/cart";
import { useState } from "react";

function CartPage() {
  const [carts, setCarts] = useState([]);

  fetch(`${import.meta.env.VITE_API_URL}/api/cart?`)
    .then((res) => {
      if (res.status === 404) {
        // setStatus("notfound");
        return null;
      }
      if (!res.ok) throw new Error("Request failed");
      return res.json();
    })
    .then((data) => {
      if (data) {
        setCarts(data);
        // setStatus("ready");
      }
    })
  });
 
  function increaseQuantity(id: number) {
    setCarts(
      carts.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart,
      ),
    );
  }

  function decreaseQuantity(id: number) {
    setCarts(
      carts.map((cart) =>
        cart.id === id
          ? {
              ...cart,
              quantity: Math.max(1, cart.quantity - 1),
            }
          : cart,
      ),
    );
  }

  return (
    <>
      <CartGrid
        carts={carts}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
      />
      {/* <ProductGrid/> */}
      {/* <Total/> */}
    </>
  );
}

export default CartPage;
