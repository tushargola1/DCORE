import React from 'react'
import '../styles/class.css'
import { classes } from './images'

const Classess_home = () => {
  return (
    <>
     <div className=" classes grid">
     <h2 >OUR CLASSES</h2>
     <h3>WHAT WE CAN OFFER</h3>

     <div className="class-card  grid">

  
{classes.map((card, index) => (
<div className="card-map" key={index}>
<ul>
  <li ><img src={card.image} alt="" /></li>
  <li >{card.head}</li>
  <li >{card.desc}</li>
</ul>
</div>
))}
   </div>
     </div>
    </>
  )
}

export default Classess_home
