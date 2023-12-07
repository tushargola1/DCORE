import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/navbar.css'; // Import your regular CSS file

const Navbar = () => {
const [isOpen , setIsOpen] = useState('')
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="nav">
        <img src={logo} alt="" width={65} />
        <div className={`nav-links ${isOpen ?"active" : ""}`}>
          <div className="navs-items">Home</div>
          <div className="navs-items">About us</div>
          <div className="navs-items">Gallery</div>
          <div className="navs-items">Plans & pricing</div>
          <div className="navs-items">Timing</div>
          <div className="navs-items">Contact</div>
        </div>

        {/* <div className="social-links">
          <a
            href="https://www.instagram.com/d_core_fitness/"
            target="_blank"
            rel="noopener noreferrer"
            
          ><i className="fa-brands fa-instagram"></i></a>
          <a
            href="https://wa.me/9582124881"
            target="_blank"
            rel="noopener noreferrer"
           
          ><i  className="fa-brands fa-whatsapp"></i></a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
  
          ><i   className="fa-brands fa-facebook"></i></a>
          <a
            href="tel:9667062839"
            target="_blank"
            rel="noopener noreferrer"
            
          ><i   className="fa-solid fa-phone"></i></a>
        </div> */}
<div className="fa-solid fa-bars" id='bar' onClick={toggle}></div>

      </nav>
    </>
  );
};

export default Navbar;
