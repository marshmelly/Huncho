import React, { useState } from 'react';
import './Navbar.css';
import image from './bb.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(true);
  };

  return (
    <nav className="navbar">
      <img src={image} alt=""  className='nav-image'/><br /><hr />
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      
      <div className='header'> <h4>HUNCHO'S CUTS</h4></div>
      <ul type='none' className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        <li className="nav-item"><a href="/haircut" className="nav-link">Add Haircut</a></li>
      
        {!isLoggedIn && (
          <>
            <li className="nav-item"><a href="/signin" className="nav-link">Sign In</a></li>
            
          </>
        )}
        {isLoggedIn && (
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link logout-button" style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit'}}>
              Logout
            </button>
          </li>
        )}
      </ul>
      
    </nav>
  );
};

export default Navbar;
