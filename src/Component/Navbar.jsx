import React, { useState } from "react";
import MainLogo from '../../src/assets/mainlogo.png';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbardiv">


      <header className="custom-header">
        <div className=" container d-flex justify-content-between ">

          <div className="custom-logo">
            <a href="/"><img className="SItelogo" src={MainLogo} alt="Main Logo" /></a>
          </div>
          <div className="custom-hamburger mt-3" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <nav className={`custom-navbar custom-fullscreen ${menuActive ? "custom-active" : "custom-reverse_anim"}`}>
            <ul>
              <li style={{ "--animation-order": 1 }}>
                <a href="/">Home</a>
              </li>
              <li style={{ "--animation-order": 2 }}>
                <a href="/">About</a>
              </li>
              <li style={{ "--animation-order": 3 }}>
                <a href="/">Contact</a>
              </li>
              <li style={{ "--animation-order": 4 }}>
                <a href="/">Services</a>
              </li>
              <li style={{ "--animation-order": 5 }}>
                <a href="/">Blogs</a>
              </li>
            </ul>
            <div className="custom-close" onClick={toggleMenu}>
              <div></div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
