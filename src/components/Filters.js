function Filters({ filters, setFilters }) {
  const toggle = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? "" : value
    }));
  };

  return (
    <aside className="filters">
      <h3>Filters</h3>

      <p>Event Type</p>
      <div className="filter-row">
        {["Webinar", "Conference", "Workshop", "Meetup", "Seminar"].map(type => (
          <button
            key={type}
            className={filters.type === type ? "active" : ""}
            onClick={() => toggle("type", type)}
          >
            {type}
          </button>
        ))}
      </div>

      <p>Location</p>
      <div className="filter-row">
        {["Online", "In-person"].map(loc => (
          <button
            key={loc}
            className={filters.locationType === loc ? "active" : ""}
            onClick={() => toggle("locationType", loc)}
          >
            {loc}
          </button>
        ))}
      </div>

      <button className="clear-filters" onClick={() => setFilters({ type: "", locationType: "" })}>
  Clear Filters
</button>

    </aside>

    
  );
}

export default Filters;
