import { useParams, useNavigate } from "react-router-dom";
import data from "../data/events.json";

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d";

function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = data.find(e => e.id === Number(id));

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <div className="details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img src={event.image || PLACEHOLDER} alt={event.title} />

      <h1>{event.title}</h1>
      <p>{event.description}</p>

      <p><b>Date:</b> {event.date}</p>
      <p><b>Time:</b> {event.time}</p>
      <p><b>Location:</b> {event.location}</p>
      <p><b>Seats left:</b> {event.seats}</p>
    </div>
  );
}

export default EventDetailsPage;
