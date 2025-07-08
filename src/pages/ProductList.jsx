import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="container mx-auto p-4 grid md:grid-cols-3 gap-4">
      {products.length > 0 && (
        <Carousel products={products} />
      )}
    </div>
  );
}
