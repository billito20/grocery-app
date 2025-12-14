import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for items..." />

      <button className="search-btn">
        <Search size={18} />
      </button>
    </div>
  );
}
