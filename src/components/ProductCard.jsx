import { ShoppingCart } from "lucide-react";

export default function ProductCard({ title, subtitle, image, price, onSelect, onAdd }) {
  return (
    <div className="card" onClick={onSelect}>
      <img src={image} className="img" alt={title} />

      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>

      <div className="price-row">
        <div className="price">${price}</div>

        <button
          className="add-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAdd();
          }}
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}
