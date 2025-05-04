import React, { useState } from 'react';
import './Navbar.css';
import image from './bb.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={image} alt="" /><br /><hr />
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      
      <div className='header'> <h4>HUNCHO'S CUTS</h4></div>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        <li className="nav-item"><a href="/haircut" className="nav-link">Add Haircut</a></li>
        <li className="nav-item"><a href="/signin" className="nav-link">Sign In</a></li>
        <li className="nav-item"><a href="/signup" className="nav-link">Sign Up</a></li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
