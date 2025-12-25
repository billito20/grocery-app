import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ selectedCategory, sortOrder, onSelectProduct, onAddToCart }) {
  const products = [
   // { title: "Strawberries", subtitle: "Fresh pack", category: "Fruits", price: 10, image: "https://i.imgur.com/Tv5VvZy.jpeg" },
   // { title: "Bananas", subtitle: "1kg", category: "Fruits", price: 6, image: "https://i.imgur.com/k1X5B3O.jpg" },
   // { title: "Tomatoes", subtitle: "Organic", category: "Vegetables", price: 7, image: "https://i.imgur.com/YS4bp1O.jpeg" },
    //{ title: "Coca Cola", subtitle: "1.5L Bottle", category: "Drinks", price: 12, image: "https://i.imgur.com/n2WQCbz.jpeg" },
  ];

  const filtered = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "ASC" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="grid">
      {sorted.map((p, i) => (
        <ProductCard
          key={i}
          {...p}
          onSelect={() => onSelectProduct(p)}
          onAdd={() => onAddToCart(p)}
        />
      ))}
    </div>
  );
}
