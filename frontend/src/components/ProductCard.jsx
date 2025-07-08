import { useState } from "react";

const colorMap = {
  yellow: "#E6CA97",
  white: "#D9D9D9",
  rose: "#E1A4A9",
};

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState("yellow");

  return (
    <div className="p-4 rounded shadow border hover:shadow-xl transition flex flex-col gap-2">
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="w-full h-48 object-contain"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-800 font-bold">${product.price} USD</p>

      <div className="flex gap-2 my-1">
        {Object.entries(colorMap).map(([color, hex]) => (
          <button
            key={color}
            style={{
              backgroundColor: hex,
              width: 24,
              height: 24,
              borderRadius: "50%",
              border: selectedColor === color ? "2px solid black" : "1px solid #ccc",
            }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      <p className="text-sm text-gray-500">Popularity: {product.popularityOutValue}/5</p>
    </div>
  );
}
