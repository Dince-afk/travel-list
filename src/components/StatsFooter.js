export default function StatsFooter({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>Start adding some items to your packing list 🚀</p>
      </footer>
    );
  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.isPacked).length;
  const percOfPackedItems = Math.round((numOfPackedItems / numOfItems) * 100);

  return (
    <footer className="stats">
      <p>
        💼 You have {numOfItems} items on your list, and you already packed{" "}
        {numOfPackedItems} ({percOfPackedItems}%)
      </p>
    </footer>
  );
}
