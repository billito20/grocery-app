import { Home, ShoppingCart, User } from "lucide-react";

export default function BottomNav({ page, onChange }) {
  return (
    <div className="bottom-nav">
      <Home size={26} onClick={() => onChange("home")} className={page==="home" ? "active-nav" : ""}/>
      <ShoppingCart size={26} onClick={() => onChange("cart")} className={page==="cart" ? "active-nav" : ""}/>
      <User size={26} onClick={() => onChange("profile")} />
    </div>
  );
}
