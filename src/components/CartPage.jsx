import { Trash } from "lucide-react";
import "./CartPage.css";

export default function CartPage({ cart, onRemove }) {
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <p>Add some items to get started</p>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-list">
        {cart.map((item, index) => (
          <div className="cart-item" key={item.id ?? index}>
            <img src={item.image} alt={item.title} />

            <div className="cart-info">
              <span className="cart-name">{item.title}</span>
              <span className="cart-price">${item.price.toFixed(2)}</span>
            </div>

            <button
              className="remove-btn"
              onClick={() => onRemove(index)}
              aria-label="Remove item"
            >
              <Trash size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <span>Total</span>
        <strong>${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}
