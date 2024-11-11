import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Local Storage</Link></li>
        <li><Link to="/session">Session Storage</Link></li>
        <li><Link to="/cookie">Cookie</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;