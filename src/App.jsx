import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import SortButton from "./components/SortButton";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import BottomNav from "./components/BottomNav";
import CartPage from "./components/CartPage";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("ASC");

  const [productModal, setProductModal] = useState(null);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (i) => {
    setCart(cart.filter((_, index) => index !== i));
  };

  return (
    <div className="container">

      {page === "home" && (
        <>
          <SearchBar />

          <Categories
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <SortButton
            sortOrder={sortOrder}
            onChange={() =>
              setSortOrder(sortOrder === "ASC" ? "DESC" : "ASC")
            }
          />

          <ProductGrid
            selectedCategory={selectedCategory}
            sortOrder={sortOrder}
            onSelectProduct={setProductModal}
            onAddToCart={addToCart}
          />

          <ProductModal
            product={productModal}
            onClose={() => setProductModal(null)}
            onAdd={() => {
              addToCart(productModal);
              setProductModal(null);
            }}
          />
        </>
      )}

      {page === "cart" && (
        <CartPage cart={cart} onRemove={removeFromCart} />
      )}

      <BottomNav page={page} onChange={setPage} />
    </div>
  );
}

export default App;
