import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./ProductCard.css";

const colorMap = {
  yellow: "#E6CA97",
  white: "#D9D9D9",
  rose: "#E1A4A9",
};


function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3 && rating % 1 < 1 ? 1 : 0;
  const empty = 5 - full - half;
  const stars = [];

  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f${i}`} color="#facc15" />);
  if (half) stars.push(<FaStarHalfAlt key="half" color="#facc15" />);
  for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`e${i}`} color="#facc15" />);

  return <div className="stars">{stars}</div>;
}

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
      <h3 className="color-name"> {selectedColor} Gold</h3>
      <p className="product-popularity">
         {renderStars(product.popularityOutValue)}{product.popularityOutValue}/5
      </p>
    </div>
  );
}
