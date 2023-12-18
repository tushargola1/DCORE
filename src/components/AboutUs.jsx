import React from 'react';
import { aboutUs, aboutUs2  } from './images';
import Banner from '../components/Banner.jsx'
import '../styles/aboutus.css';


const AboutUs = () => {
  return (
    <>
      <div className="aboutUs grid">
        <p>About us</p>
      </div>
      <div className="vi grid">
        {/* Add autoPlay, loop, and muted attributes to the video element */}
      
        <p><span>D Core Fitness</span> is the best gym in paharganj - Delhi

<span> <a href="https://www.instagram.com/vihantalwar_official?igshid=YzVkODRmOTdmMw==" target='_blank'>Vihan Talwar</a></span> is the founder & the owner of D Core Fitness 

we have <span>5+ trainer</span> and all are  certified .

we have all required equipments & machines

and every other required thing is provided

like loker for stuff , <span>drinking water</span> , music for <span>motivation</span> etc. </p>
      </div>
    
    <div className="trainers grid">
      <h2>Meet the team</h2>

      <div className="tains" id='trains'>
        {
          aboutUs.map((data,index) =>(

         
                <div className="coaches" key={index}>
                <img src={data.image} alt="" />
                <div className="text-section">
                  <h4>{data.title} </h4>
                  <h3>{data.name}</h3>
                 
                  <div className="list-acheive">
                  
          <p>{data.desc}</p>
                   
                  </div>
        
                  <a href={data.insta_link} target='_blank'><i className='fa-brands fa-instagram'></i></a>
                  
                </div>
              </div>
        )) }
      </div>
      <div className="tains" id='second'>
        {
          aboutUs2.map((data,index) =>(

         
                <div className="coaches" key={index} >
                <img src={data.image} alt="" />
                <div className="text-section" id='sec'>
                  <h4>{data.title} </h4>
                  <h3>{data.name}</h3>
                 
                  <div className="list-acheive">
                  
          <p>{data.desc}</p>
                   
                  </div>
        
                  <a href={data.insta_link} target='_blank'><i className='fa-brands fa-instagram'></i></a>
                  
                </div>
              </div>
        )) }
      </div>

    
     
    </div>

    <Banner/>
    </>
  );
};

export default AboutUs;
