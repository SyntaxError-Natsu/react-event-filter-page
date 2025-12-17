import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import EventCard from "../components/EventCard";
import EventsTable from "../components/EventsTable";
import SkeletonCard from "../components/SkeletonCard";
import data from "../data/events.json";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ type: "", locationType: "" });
  const [search, setSearch] = useState("");
  const [view, setView] = useState("cards"); 

  useEffect(() => {
    setTimeout(() => {
      setEvents(data);
      setLoading(false);
    }, 1200);
  }, []);

  const filteredEvents = events.filter(e =>
    (!filters.type || e.type === filters.type) &&
    (!filters.locationType || e.locationType === filters.locationType) &&
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="layout">
      <Filters filters={filters} setFilters={setFilters} />

      <main>
        <div className="events-header">
  <h1>Upcoming Events</h1>

  <input
    className="search"
    placeholder="Search events..."
    value={search}
    onChange={e => setSearch(e.target.value)}
  />

  <button
    className="view-toggle"
    onClick={() => setView(view === "cards" ? "table" : "cards")}
  >
    {view === "cards" ? "Table View" : "Card View"}
  </button>
</div>


        {loading ? (
          <div className="grid">
            {Array(6).fill().map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : view === "cards" ? (
          <div className="grid">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EventsTable events={filteredEvents} />
        )}
      </main>
    </div>
  );
}

export default EventsPage;
