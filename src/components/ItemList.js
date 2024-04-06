import { useState } from "react";

export default function ItemList({
  items,
  onDeleteItem,
  onToggleChecked,
  onClearItems,
}) {
  const [sortingOption, setSortingOption] = useState("creationTime");
  let itemsSorted;

  console.log(items.splice());
  if (sortingOption === "creationTime") itemsSorted = [...items];
  if (sortingOption === "isPacked")
    itemsSorted = [...items].sort((a, b) => a.isPacked - b.isPacked);
  if (sortingOption === "alphabetically")
    itemsSorted = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="list">
      <ul className="list">
        {itemsSorted.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleChecked={onToggleChecked}
          />
        ))}
      </ul>
      <div>
        <select
          value={sortingOption}
          onChange={(event) => setSortingOption(event.target.value)}
        >
          <option value="creationTime">Sort by creation time</option>
          <option value="isPacked">Sort by packed</option>
          <option value="alphabetically">Sort alphabetically</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleChecked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.isPacked}
        onClick={() => onToggleChecked(item.id)}
      ></input>
      <span
        style={
          item.isPacked
            ? {
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
              }
            : {}
        }
      >
        {item.amount} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
