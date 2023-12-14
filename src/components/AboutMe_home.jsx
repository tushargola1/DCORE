import React from 'react'
import img from '../assets/img/dheeraj/4.jpg'
import '../styles/aboutme_home.css'

const AboutMe_home = () => {
  return (
    <>
      <div className="dheeraj grid ">
        <h1>About me</h1>
        <div className="pic grid">
            <img src={img} alt="" />
            <p>I am <span className='name'><a href="">Vihan Talwar</a></span>, a certified coach from K11, and the proud Men's Physique Champion of 2017. As the <span className='name'>founder and owner of D Core Fitness</span>, my passion for health and wellness extends beyond personal achievements to a commitment to helping others embark on their transformative fitness journeys. With a wealth of knowledge gained through rigorous training and practical experience, I bring a unique blend of expertise to guide individuals towards their fitness goals. At D Core Fitness, we believe in fostering a community where <span className='name'>dedication, discipline, and determination</span> converge to sculpt not just bodies, but lifestyles. Join us on this exhilarating journey to unlock your full potential and achieve the best version of yourself. Welcome to a place where fitness is not just a goal; it's a way of life.</p>
        </div>
      </div>
    </>
  )
}

export default AboutMe_home
