import { useNavigate } from "react-router-dom";

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d";

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={event.image || PLACEHOLDER} alt={event.title} />

      <span className="badge">{event.type}</span>

      <h4>{event.title}</h4>
      <p className="meta">📅 {event.date}</p>
      <p className="meta">📍 {event.location}</p>

      <div className="card-footer">
        <span>{event.seats} seats left</span>
        <button onClick={() => navigate(`/event/${event.id}`)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
