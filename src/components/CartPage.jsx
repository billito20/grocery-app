import { Trash } from "lucide-react";

export default function CartPage({ cart, onRemove }) {
  if (cart.length === 0)
    return <div className="cart-empty">Your cart is empty</div>;

  return (
    <div className="cart-page">
      {cart.map((item, i) => (
        <div className="cart-item" key={i}>
          <img src={item.image} />
          <div className="info">
            <div className="name">{item.title}</div>
            <div className="price">${item.price}</div>
          </div>
          <button onClick={() => onRemove(i)}>
            <Trash />
          </button>
        </div>
      ))}
    </div>
  );
}
