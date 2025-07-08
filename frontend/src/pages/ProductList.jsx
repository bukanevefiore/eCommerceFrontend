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
    <div >
      {products.length > 0 && (
        <Carousel products={products} />
      )}
    </div>
  );
}
