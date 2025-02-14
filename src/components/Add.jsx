import React, { useState } from "react";

const Add = ({ add }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return; // Prevent adding empty items
    add({ name, price });
    setName("");  // Clear input fields after submit
    setPrice("");
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Item Name"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        type="text"
        placeholder="Item Price"
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Add;
