import axios from "axios";

const API_BASE = "https://ecommercebackend-production-6c03.up.railway.app"; // Railway’deki URL

export async function fetchProducts(filters = {}) {
  try {
    const params = new URLSearchParams(filters).toString();
    const res = await axios.get(`${API_BASE}/products?${params}`);
    return res.data?.data || [];
  } catch (err) {
    console.error("[API fetchProducts error]", err);
    return [];
  }
}