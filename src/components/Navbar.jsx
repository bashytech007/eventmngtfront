import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className="w-full bg-black text-white px-8 py-4">
      <nav className="flex items-center justify-between">
        <Link to="/home" className="text-red-600 text-2xl">
          Eventbrite
        </Link>
        <div>
          <Link to="/events/create">Create Event</Link>
          <Link to="/events"> Events</Link>
        </div>
        <div className="flex items-center justify-betweeen gap-4">
          <Link to="/signin">signin</Link>
          <Link to="/signup">signup</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar