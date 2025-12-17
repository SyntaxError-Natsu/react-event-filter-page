import { useParams, useNavigate } from "react-router-dom";
import data from "../data/events.json";

function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = data.find(e => e.id === Number(id));
  if (!event) return <h2>Event not found</h2>;

  return (
    <div className="details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
  ← Back to Events
</button>


      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p><b>Date:</b> {event.date}</p>
      <p><b>Location:</b> {event.location}</p>
      <p><b>Seats:</b> {event.seats}</p>
    </div>
  );
}

export default EventDetailsPage;
