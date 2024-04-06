import { useState } from "react";
import { v4 } from "uuid";

export default function AddForm({ onAddItem }) {
  const [itemAmount, setItemAmount] = useState(1);
  const [itemName, setItemName] = useState("");

  function handleSubmitItem(event) {
    event.preventDefault();

    if (!itemName) return;

    const newItem = {
      id: v4(),
      amount: Number(itemAmount),
      name: itemName,
      isPacked: false,
    };
    console.log(newItem);
    onAddItem(newItem);

    setItemAmount(1);
    setItemName("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmitItem}>
      <h3>Enter your new item</h3>
      <select
        value={itemAmount}
        onChange={(event) => setItemAmount(event.target.value)}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="New item..."
        value={itemName}
        onChange={(event) => setItemName(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
