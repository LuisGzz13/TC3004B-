import React from "react";
import Item from "./Item";

export default function List({ items, ondelete }) {
  return (
    <div>
      {items.map((i) => (
        <Item key={i.id} item={i} ondelete={ondelete} />
      ))}
    </div>
  );
}
