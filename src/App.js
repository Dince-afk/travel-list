import { useState } from "react";
import AddForm from "./components/AddForm";
import ItemList from "./components/ItemList";
import StatsFooter from "./components/StatsFooter";

export default function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  function handleClearItems() {
    const confirmation = window.confirm(
      "Do you really want to delete all items?"
    );
    if (!confirmation) return;
    setItems([]);
  }

  return (
    <div className="app">
      <h1>Let's Travel</h1>
      <AddForm onAddItem={handleAddItem} />
      <ItemList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleChecked={handleToggleChecked}
        onClearItems={handleClearItems}
      />
      <StatsFooter items={items} />
    </div>
  );
}
