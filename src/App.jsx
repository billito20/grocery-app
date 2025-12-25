import { useState, useCallback } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import SortButton from "./components/SortButton";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import BottomNav from "./components/BottomNav";
import CartPage from "./components/CartPage";

// Constants for better maintainability
const PAGES = {
  HOME: "home",
  CART: "cart"
};

const SORT_ORDER = {
  ASC: "ASC",
  DESC: "DESC"
};

function App() {
  // State management - grouped by concern
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.ASC);
  const [productModal, setProductModal] = useState(null);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGES.HOME);

  // Cart operations with useCallback for optimization
  const addToCart = useCallback((item) => {
    setCart((prevCart) => [...prevCart, item]);
  }, []);

  const removeFromCart = useCallback((index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  }, []);

  // Toggle sort order
  const toggleSortOrder = useCallback(() => {
    setSortOrder((prevOrder) => 
      prevOrder === SORT_ORDER.ASC ? SORT_ORDER.DESC : SORT_ORDER.ASC
    );
  }, []);

  // Modal handlers
  const handleCloseModal = useCallback(() => {
    setProductModal(null);
  }, []);

  const handleAddFromModal = useCallback(() => {
    if (productModal) {
      addToCart(productModal);
      setProductModal(null);
    }
  }, [productModal, addToCart]);

  return (
    <div className="container">
      {page === PAGES.HOME && (
        <>
          <SearchBar />

          <Categories
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <SortButton
            sortOrder={sortOrder}
            onChange={toggleSortOrder}
          />

          <ProductGrid
            selectedCategory={selectedCategory}
            sortOrder={sortOrder}
            onSelectProduct={setProductModal}
            onAddToCart={addToCart}
          />

          {productModal && (
            <ProductModal
              product={productModal}
              onClose={handleCloseModal}
              onAdd={handleAddFromModal}
            />
          )}
        </>
      )}

      {page === PAGES.CART && (
        <CartPage cart={cart} onRemove={removeFromCart} />
      )}

      <BottomNav page={page} onChange={setPage} cartCount={cart.length} />
    </div>
  );
}

export default App;