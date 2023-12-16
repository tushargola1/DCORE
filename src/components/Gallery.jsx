import React from "react";
import "../styles/gallery.css";
import img1 from "../assets/img/dheeraj/4.jpg";
import img11 from '../assets/img/gallery/4.jpg'
import Banner from '../components/Banner.jsx'
// import video from '../assets/about-video.mp4'

import { gallery } from "./images";
const Gallery = () => {
  return (
    <>
      <div className="gallery">
    
        <h1 className="grid">Our Gallery</h1>
      </div>

<div className="gallery_image ">
{/* <video src={video} autoPlay loop muted playsInline></video>
<video src={video} autoPlay loop muted playsInline></video>
<video src={video} autoPlay loop muted playsInline></video> */}
    {gallery.map((img , index) =>(
        <div className="gall" key={index}>
<img src={img.image} alt="" width={350} height={450}/>
        </div>
     )) }
</div>

<Banner/>
    </>
  );
};

export default Gallery;
