import React, { useState , useEffect} from 'react'
import { images , quotes } from './images'
import '../styles/carousel.css'
import Choose_us from './Choose_us'


const Carousel = () => {
    const[currImage , setCurrImage] = useState(0)
    const [currQuote, setCurrQuote] = useState(0);

    const handleImageChange = (direction) => {
      setCurrImage((prevImage) => {
        const newImage =
          direction === "next"
            ? prevImage + 1 >= images.length
              ? 0
              : prevImage + 1
            : prevImage - 1 < 0
            ? images.length - 1
            : prevImage - 1;
  
        setCurrQuote((prevQuote) => {
          return newImage;
        });
  
        return newImage;
      });
    };
  
  
  
  
      
  
    // Effect to handle automatic image change
    useEffect(() => {
      const intervalId = setInterval(() => {
        handleImageChange("next");
      }, 2000); // Change image every 2 seconds
  
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [currImage, currQuote]);
  
  return (
    <>
     <div className="hero-section">
        <img src={images[currImage].image} className={currImage === 0 ? "active" : ""} />

        <div className="gradient"></div>
        <div className="content  container">
          <h1>{quotes[currQuote].quote}</h1>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/d_core_fitness/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://wa.me/9582124881" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="tel:9582124881" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>

        <div className="slider-navigation container">
          <div className="nav-btn" onClick={() => handleImageChange("prev")}></div>
          <div className="nav-btn" onClick={() => handleImageChange("next")}></div>
        </div>
      </div>


      <Choose_us/>
     
    </>
  )
}

export default Carousel