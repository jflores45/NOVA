import { useEffect, useState } from "react";
import CartGrid from "../components/features/CartGrid";
import type { CartLine } from "../types/Cart";
// import { API_URL } from "../config";

function CartPage() {
  const [carts, setCarts] = useState<CartLine[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "unauthorized" | "error">("loading");

  useEffect(() => {
    // fetch(`${API_URL}/api/cart`, { credentials: "include" })
    fetch(`${import.meta.env.VITE_API_URL}/api/cart`)
      .then((res) => {
        if (res.status === 401) {
          setStatus("unauthorized");
          return null;
        }
        if (res.status === 404) {
          // no cart yet, so treat it as empty
          setCarts([]);
          setStatus("ready");
          return null;
        }
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data: CartLine[] | null) => {
        if (data) {
          setCarts(data);
          setStatus("ready");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  function increaseQuantity(id: number) {
    setCarts((prev) =>
      prev.map((cart) =>
        cart.id === id && cart.quantity < cart.variant.stock
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart,
      ),
    );
  }

  function decreaseQuantity(id: number) {
    setCarts((prev) =>
      prev.map((cart) =>
        cart.id === id ? { ...cart, quantity: Math.max(1, cart.quantity - 1) } : cart,
      ),
    );
  }

  if (status === "loading") return <p>Loading your cart...</p>;
  if (status === "unauthorized") return <p>Please log in to see your cart.</p>;
  if (status === "error") return <p>Something went wrong loading your cart.</p>;
  if (carts.length === 0) return <p>Your cart is empty.</p>;

  return (
    <CartGrid carts={carts} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} />
  );
}

export default CartPage;