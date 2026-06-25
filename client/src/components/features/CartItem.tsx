type CartItemProps = {
    cart: Cart;
    onIncrease: () => void;
    onDecrease: () => void;
  };
function CartItem({cart, onDecrease, onIncrease} : CartItemProps){
    return (
        <div>
            <div>
                <img src="/images/Heart.png"></img>
            </div>
            <div>
                <h2>{cart.name}</h2>
                <p>color: {cart.colors}</p>
                <p>size: {cart.sizes[0]}</p>               
            </div>
                <div><button onClick={onDecrease}>-</button>
                <span>{cart.quantity}</span>
                <button onClick={onIncrease}>+</button>
            </div>

            <button>REMOVE</button>
            <hr/>
        </div>
    );

}

export default CartItem;