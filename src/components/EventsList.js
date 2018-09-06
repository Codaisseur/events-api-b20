import React from 'react'
import { Link } from 'react-router-dom'

export default ({ events }) => (
  <ul>
    {events.map(event => (
      <li key={event.id}>
        <Link to={`/events/${event.id}`}>{event.name}</Link>
      </li>
    ))}
  </ul>
)
