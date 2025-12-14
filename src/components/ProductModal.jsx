import { X } from "lucide-react";

export default function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null;

  return (
    <div className="modal-bg">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        <img src={product.image} className="modal-img" />
        <h2>{product.title}</h2>
        <p>{product.subtitle}</p>

        <div className="price-modal">${product.price}</div>

        <button className="big-add-btn" onClick={onAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
