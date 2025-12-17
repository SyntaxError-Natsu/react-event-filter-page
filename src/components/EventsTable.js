function EventsTable({ events }) {
  return (
    <table className="events-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Location</th>
          <th>Seats</th>
        </tr>
      </thead>

      <tbody>
        {events.map(event => (
          <tr key={event.id}>
            <td>{event.title}</td>
            <td>{event.date}</td>
            <td>{event.location}</td>
            <td>{event.seats}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventsTable;
