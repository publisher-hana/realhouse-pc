import { useEffect, useState } from "react";

export const FilterChk = ({ items = [] }) => {
  const [selectedItems, setSelectedItems] = useState([]);
   useEffect(() => {
    if (items.length > 0) {
      setSelectedItems([items[0]]); // 처음 항목을 selected로
    }
  }, [items]);

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="btn-wrap">
      {items.map((item, idx) => (
        <button
          key={idx}
          className={`btn sticky ${selectedItems.includes(item) ? "selected" : ""}`}
          onClick={() => toggleItem(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};