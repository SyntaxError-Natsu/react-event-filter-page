function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p><b>Date:</b> {event.date}</p>
        <p><b>Time:</b> {event.time}</p>
        <p><b>Location:</b> {event.location}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EventModal;
