import React from 'react'
import { Link } from "react-router-dom";
import '../styles/banner.css'
const Banner = () => {
  return (
    <>
    <div className="banner grid">
       <h1>REGISTRATION NOW TO GET MORE DEALS</h1>
       <h3>WHERE HEALTH, BEAUTY AND FITNESS MEET.</h3>
       <Link to='/contact'><button>Contact us</button></Link>

    </div>
    </>
  )
}

export default Banner
