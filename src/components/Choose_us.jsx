import React from 'react'
import '../styles/chose_us.css'

import { choose_cards } from './images';
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

     


{/* 
      <div className="content-text">
        <ul>
          <li><i class="fa-brands fa-nutritionix"></i></li>
          <li>Healthy nutrition plan</li>
          <li>
          Energize your workouts with a balanced nutrition plan, rich in lean proteins, whole grains, and nutrient-packed fruits and vegetables for optimal fitness and well-being.</li>
        </ul>
      </div>


      <div className="content">
        <ul>
          <li><i class="fa-solid fa-dumbbell"></i></li>
          <li>Proffesponal training plan</li>
          <li>
          Unlock your fitness potential with our personalized professional training plans, meticulously crafted to  boost performance, and achieve your health goals at DCORE FITNESS.</li>
        </ul>
      </div>

      
      <div className="content">
        <ul>
          <li><i class="fa-solid fa-heart-circle-bolt"></i></li>
          <li>Cardio sessions</li>
          <li>
          Elevate your fitness journey with heart-pumping cardio sessions at our state-of-the-art gym, where every beat brings you closer to a healthier, stronger you.
         </li>
        </ul>
      </div> */}
    </div>
    </div>
     
    </>
  )
}

export default Choose_us
