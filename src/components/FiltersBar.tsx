export default function FiltersBar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
      <div className="flex items-center gap-3">
        <select className="border rounded px-3 py-2 text-sm">
          <option>All</option>
          <option>Shawls</option>
          <option>Stoles</option>
        </select>
        <button className="px-3 py-2 border rounded text-sm">Sort</button>
      </div>
      <input className="border rounded px-3 py-2 flex-1 text-sm" placeholder="Search products" />
    </div>
  );
}

