import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import Carousel from "../components/Carousel";
import FilterForm from "../components/FilterPanel";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minPopularity: "",
    maxPopularity: "",
  });
  const [loading, setLoading] = useState(false);

  const loadProducts = async (params = {}) => {
    setLoading(true);
    const data = await fetchProducts(params);
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    loadProducts(filters);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <FilterForm
        filters={filters}
        onChange={handleChange}
        onSubmit={applyFilters}
      />

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : products.length > 0 ? (
        <Carousel products={products} />
      ) : (
        <p className="text-center text-gray-500">Product not found.</p>
      )}
    </div>
  );
}