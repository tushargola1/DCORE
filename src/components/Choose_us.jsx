import React from 'react'
import '../styles/chose_us.css'
import Classess_home from './Classess_home'

import { choose_cards } from './images';
import Banner from './Banner';
import AboutMe_home from './AboutMe_home';
const Choose_us = () => {
  return (
    <>
     <div className="conta grid" >
    <h2>WHY CHOSE US?</h2>
    <h3>PUSH YOUR LIMITS FORWARD</h3>
    <div className="cards container grid">

  
    {choose_cards.map((card, index) => (
  <div className="card" key={index}>
    <ul>
      <li id='img-fa'><i className={card.img}></i></li>
      <li id='heading'>{card.heading}</li>
      <li id='card-content'>{card.content}</li>
    </ul>
  </div>
))}

    </div>
    </div>
   
      <Classess_home/>
      <Banner/>
      <AboutMe_home/>
      
    </>
  )
}

export default Choose_us
