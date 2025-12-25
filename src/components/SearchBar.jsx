import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for items..." />

      <button className="search-btn">
        <Search size={18} />
      </button>

      <button
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}
