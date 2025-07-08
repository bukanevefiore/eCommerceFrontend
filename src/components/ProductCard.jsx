import { useState } from "react";
import "./ProductCard.css";

const colorMap = {
  yellow: "#E6CA97",
  white: "#D9D9D9",
  rose: "#E1A4A9",
};

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState("yellow");

  return (
    <div className="product-card">
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="product-image"
      />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price} USD</p>

      <div className="color-options">
        {Object.entries(colorMap).map(([color, hex]) => (
          <button
            key={color}
            style={{
              backgroundColor: hex,
              border:
                selectedColor === color ? "2px solid #000" : "1px solid #ccc",
            }}
            className="color-button"
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      <p className="product-popularity">
        Popularity: {product.popularityOutValue}/5
      </p>
    </div>
  );
}
