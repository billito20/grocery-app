import { ChevronDown } from "lucide-react";

export default function SortButton({ sortOrder, onChange }) {
  return (
    <button className="sort-btn" onClick={onChange}>
      Sort by Price: {sortOrder}
      <ChevronDown size={18} style={{ float: "right" }} />
    </button>
  );
}
