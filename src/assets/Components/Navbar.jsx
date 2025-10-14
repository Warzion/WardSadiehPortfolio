import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <a href="#Banner" className="logo">
          WS
        </a>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#Banner" onClick={toggleMenu}>Home</a></li>
        <li><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
