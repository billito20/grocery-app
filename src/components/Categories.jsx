export default function Categories({ selected, onSelect }) {
  const items = ["All", "Fruits", "Vegetables", "Snacks", "Drinks"];

  return (
    <div className="categories">
      {items.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? "active" : ""}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
