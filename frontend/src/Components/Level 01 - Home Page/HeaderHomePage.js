import React from 'react';
import './HeaderHomePage.css';


function HeaderHomePage() {
  return (
    <div className="HeaderHomePage">
      <div className="Logo"></div>
      
      <nav className="Navbar">
        <ul className="NavbarMenu">
          <li className="NavbarItem"><a href="#home">Home</a></li>
          <li className="NavbarItem"><a href="#about">About Us</a></li>
          <li className="NavbarItem"><a href="#services">Services</a></li>
          <li className="NavbarItem"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderHomePage;
