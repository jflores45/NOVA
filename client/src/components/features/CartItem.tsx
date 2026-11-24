import type { CartLine } from "../../types/Cart";

type CartItemProps = {
  cart: CartLine;
  onIncrease: () => void;
  onDecrease: () => void;
};

function CartItem({ cart, onDecrease, onIncrease }: CartItemProps) {
  const { variant } = cart;

  return (
    <div>
      <div>
        <img src="/images/Heart.png" alt="Save" />
      </div>

      <div>
        <h2>{variant.product.name}</h2>
        <p>color: {variant.color}</p>
        <p>size: {variant.size.toUpperCase()}</p>
      </div>

      <div>
        <button onClick={onDecrease}>-</button>
        <span>{cart.quantity}</span>
        <button onClick={onIncrease} disabled={cart.quantity >= variant.stock}>
          +
        </button>
      </div>

      <button>REMOVE</button>
      <hr />
    </div>
  );
}

export default CartItem;
