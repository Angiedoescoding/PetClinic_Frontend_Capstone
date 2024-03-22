// Importing Link from the react-router-dom for routing (navigating) between pages

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/services">Services</Link>
            <Link to="/things-to-know">Things to Know</Link>
            <Link to="/good-deeds">Good Deeds</Link>
        </nav>
    </div>
  )
}

export default Navbar