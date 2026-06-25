// import ProductGrid from "../components/features/ProductGrid";
import CartGrid from "../components/features/CartGrid";
import ProductGrid from "../components/features/ProductGrid";
import { initialCarts } from "../data/cart";
import { products } from "../data/products";
import { useState } from "react";

function CartPage() {
    const [carts, setCarts] = useState(initialCarts);

    function increaseQuantity(id: string) {
      setCarts(
        carts.map((cart) =>
          cart.id === id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        )
      );
    }

    function decreaseQuantity(id: string) {
      setCarts(
          carts.map((cart) =>
          cart.id === id
              ? {
                  ...cart,
                  quantity: Math.max(1, cart.quantity - 1),
              }
              : cart
          )
      );
    }
    
    return (
      <>
        <CartGrid 
            carts={carts}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
           />
        <ProductGrid products={products}/>
        {/* <Total/> */}
        
      </>
    );
  }
  
  export default CartPage;


  