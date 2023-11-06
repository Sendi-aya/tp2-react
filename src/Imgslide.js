import React, { useState } from 'react';
import './Imgstyle.css'
import image1 from './images/img1.jpg' 
import image2 from './images/img2.jpg'
import image3 from './images/img3.jpg'
import image4 from'./images/img4.jpg'
import image5 from'./images/img5.jpg'

export default function Slider(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
      image1,
      image2,
      image3,
      image4,
      image5,
      
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
  
    return (
      <div>
        <div className='div'> 
        <button onClick={prevSlide} >Previous</button>
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <button onClick={nextSlide}>Next</button>
        <br/>
        </div>
        <p>{`Slide ${currentSlide + 1}`} </p>
      </div>
    )
}