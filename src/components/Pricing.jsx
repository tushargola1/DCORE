import React from 'react'
import '../styles/pricing.css'
import { pricing } from './images'
import Banner from './Banner'

const Pricing = () => {
  return (
    <>
     <div className="pricing">
        <h1 className='grid'>Pricing</h1>
     </div>
    <div className="price_desc-text grid"> <h2>Choose your pricing plan</h2>
        <h4>Find one that works for you</h4></div>
     <div className="pricing_cards grid">
        
        {
            pricing.map((data , index) =>(
               <div className="price_cards " key={index}>
        <ul>
            <li><h2>{data.name}</h2></li>
            <li><i className={data.classImage} id='dumbble'></i></li>
            <li><h3>{data.month}</h3></li>
            <li><i className={data.price_sign} ></i><h4 id='rupee'>{data.price}</h4></li>
            <li><p>{data.desc}</p></li>
        </ul>
        <button className='grid'>JOIN NOW</button>
        
        </div>
            ))
        }

        
     </div>

     <Banner/>
    </>
  )
}

export default Pricing
