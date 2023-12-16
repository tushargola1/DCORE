import React from 'react'
import video from '../assets/about-video.mp4'
import '../styles/aboutus.css'

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <video src={video} autoPlay loop muted playsInline></video>
      </div>
    </>
  )
}

export default AboutUs
