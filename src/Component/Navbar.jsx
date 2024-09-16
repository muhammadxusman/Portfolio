import React, { useState } from "react";
import MainLogo from '../../src/assets/mainlogo.png';

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        {/* Logo on the left */}
        <div className="custom-logo">
          <a href="/"><img className="SItelogo" src={MainLogo} alt="Main Logo" /></a>
        </div>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu on the right */}
        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ABOUTME">About </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Experience">Experience  </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#MyProject">Project </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
