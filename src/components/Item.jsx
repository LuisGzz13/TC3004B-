import React from "react";
import Button from "./Button";

export default function Item({ item, ondelete }) {
  return (
    <div>
      <ul>
        <li>{item.id}</li> 
        <li>{item.name}</li>
        <li>
          <Button click={() => ondelete(item.id)} name={"X"} />
        </li>
      </ul>
    </div>
  );
}
