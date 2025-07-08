import { useState } from "react";

export default function FilterPanel({ onFilter }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPopularity, setMinPopularity] = useState("");
  const [maxPopularity, setMaxPopularity] = useState("");

  const applyFilter = () => {
    onFilter({
      minPrice: minPrice || undefined,
      maxPrice: maxPrice || undefined,
      minPopularity: minPopularity || undefined,
      maxPopularity: maxPopularity || undefined
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border rounded shadow mb-4">
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border p-2 rounded w-full md:w-36"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border p-2 rounded w-full md:w-36"
      />
      <input
        type="number"
        placeholder="Min Popularity"
        value={minPopularity}
        onChange={(e) => setMinPopularity(e.target.value)}
        className="border p-2 rounded w-full md:w-36"
      />
      <input
        type="number"
        placeholder="Max Popularity"
        value={maxPopularity}
        onChange={(e) => setMaxPopularity(e.target.value)}
        className="border p-2 rounded w-full md:w-36"
      />
      <button
        onClick={applyFilter}
        className="bg-black text-white p-2 rounded w-full md:w-auto"
      >
        Apply
      </button>
    </div>
  );
}