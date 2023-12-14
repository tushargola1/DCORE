import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';
import '../styles/navbar.css'; // Import your regular CSS file
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', closeNavbar);

    return () => {
      document.body.removeEventListener('click', closeNavbar);
    };
  }, []);

  return (
    <>
      <nav className="nav" onClick={(e) => e.stopPropagation()}>
        {/* Stop propagation to prevent closing when clicking inside the navbar */}
        <img src={logo} alt="" width={65} />
        <div className={`nav-links ${isOpen ? '' : 'active'}`} onClick={(e) => e.stopPropagation()}>
          <Link to= '/' className="navs-items">Home</Link>
          <Link to='/about' className="navs-items">About us</Link>
          <div className="navs-items">Gallery</div>
          <div className="navs-items">Plans & pricing</div>
          <div className="navs-items">Timing</div>
          <div className="navs-items">Contact</div>
        </div>

        <div className="fa-solid fa-bars" id="bar" onClick={toggle}></div>
      </nav>
    </>
  );
};

export default Navbar;
