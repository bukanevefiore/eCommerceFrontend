import "./styles/Filter.css";

export default function FilterPanel({ filters, onChange, onSubmit }) {
  return (
    <div className="filter-panel">
      <h3 className="filter-title">Filter Products</h3>
      <div className="filter-input-group">
        <div className="filter-item">
          <label>Min Price</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={onChange}
            placeholder="Eg: 500"
          />
        </div>
        <div className="filter-item">
          <label>Max Price</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={onChange}
            placeholder="Eg: 1000"
          />
        </div>
        <div className="filter-item">
          <label>Min Popularity</label>
          <input
            type="number"
            name="minPopularity"
            step="0.1"
            max="5"
            value={filters.minPopularity}
            onChange={onChange}
            placeholder="Eg: 3"
          />
        </div>
        <div className="filter-item">
          <label>Max Popülerlik</label>
          <input
            type="number"
            name="maxPopularity"
            step="0.1"
            max="5"
            value={filters.maxPopularity}
            onChange={onChange}
            placeholder="Eg: 5"
          />
        </div>
        <div className="filter-button">
          <button onClick={onSubmit}>Filtrele</button>
        </div>
      </div>
    </div>
  );
}