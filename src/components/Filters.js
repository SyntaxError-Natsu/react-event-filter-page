function Filters({ filters, setFilters }) {
  const toggleFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? "" : value
    }));
  };

  const clearFilters = () => {
    setFilters({ type: "", locationType: "" });
  };

  return (
    <aside className="filters">
      <h3 className="filters-title">Filters</h3>

      {/* Event Type */}
      <div className="filter-group">
        <p className="filter-label">Event Type</p>
        <div className="filter-options">
          {["Webinar", "Conference", "Workshop", "Meetup", "Seminar"].map(type => (
            <button
              key={type}
              className={`filter-pill ${
                filters.type === type ? "active" : ""
              }`}
              onClick={() => toggleFilter("type", type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Location Type */}
      <div className="filter-group">
        <p className="filter-label">Location</p>
        <div className="filter-options">
          {["Online", "In-person"].map(loc => (
            <button
              key={loc}
              className={`filter-pill ${
                filters.locationType === loc ? "active" : ""
              }`}
              onClick={() => toggleFilter("locationType", loc)}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      <button className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </aside>
  );
}

export default Filters;
