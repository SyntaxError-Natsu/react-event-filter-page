import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import EventCard from "./components/EventCard";
import EventModal from "./components/EventModal";
import SkeletonCard from "./components/SkeletonCard";
import data from "./data/events.json";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({ type: "", locationType: "" });
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setEvents(data);
      setLoading(false);
    }, 1200);
  }, []);

  const filtered = events.filter(e =>
    (!filters.type || e.type === filters.type) &&
    (!filters.locationType || e.locationType === filters.locationType) &&
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="layout">
        <Filters filters={filters} setFilters={setFilters} />

        <main>
          <h1>Upcoming Events</h1>
          <input
            className="search"
            placeholder="Search events..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <div className="grid">
            {loading
              ? Array(6).fill().map((_, i) => <SkeletonCard key={i} />)
              : filtered.map(e => (
                  <EventCard key={e.id} event={e} onView={setSelected} />
                ))}
          </div>
        </main>
      </div>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export default App;

