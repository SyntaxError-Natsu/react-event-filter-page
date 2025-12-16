import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import EventCard from "../components/EventCard";
import SkeletonCard from "../components/SkeletonCard";
import data from "../data/events.json";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ type: "", locationType: "" });
  const [search, setSearch] = useState("");

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
            : filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
        </div>
      </main>
    </div>
  );
}

export default EventsPage;
