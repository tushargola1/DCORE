import React from 'react'
import '../styles/footer.css'
import image from '../assets/img/logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
<div className="footer">
<div className="row">
<a href="https://www.instagram.com/d_core_fitness/"><i className="fa-brands fa-instagram ins"></i></a>
<a href="https://wa.me/9582124881"><i className="fa-brands fa-whatsapp whats"></i></a>
<a href="#"><i className="fa-brands fa-facebook face"></i></a>
<a href="tel:9667062839"><i className="fa-solid fa-phone phone"></i></a>
</div>
<img src={image} alt="" id='image'/>
<div className="row">
<ul>
<Link to='/'> <li><a href="#">Home</a></li></Link>
<Link to='/about'><li><a href="#">About us</a></li></Link>
<li><a href="#">Gallery</a></li>
<li><a href="#">Plans & Pricing</a></li>
<li><a href="#">Timing</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>

<div className="row">
 Copyright © 2023 - All rights reserved || Designed By: Tushar Prajapati
</div>
</div>
</footer>
    </>
  )
}

export default Footer
