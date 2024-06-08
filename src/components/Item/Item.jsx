import { useState } from "react";
import "./Item.css";

function Item({ item }) {
  const [checked, setChecked] = useState(item.checked);

  function handleCheck() {
    setChecked(!checked);
  }

  return (
    <li>
      <div className="item">
        <p className="name">{item.name}</p>
        <p className="qty">{item.quantity}</p>
        <input
          type="checkbox"
          name="item"
          id={item.id}
          checked={checked}
          onChange={handleCheck}
        />
      </div>
    </li>
  );
}

export default Item;
