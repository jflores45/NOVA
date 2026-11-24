import type { CartLine } from "../../types/Cart";
import CartItem from "./CartItem";

type CartGridProps = {
  carts: CartLine[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

function CartGrid({ carts, onIncrease, onDecrease }: CartGridProps) {
  return (
    <>
      <h2>Shopping Cart (*)</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {carts.map((c) => (
          <CartItem
            key={c.id}
            cart={c}
            onIncrease={() => onIncrease(c.id)}
            onDecrease={() => onDecrease(c.id)}
          />
        ))}
      </div>
    </>
  );
}

export default CartGrid;
