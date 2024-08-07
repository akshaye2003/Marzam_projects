import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import whiteArrow from '../../assets/white-arrow.png'; // Import the white-arrow image

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Marzam Projects</h1>
        <p> Transforming Spaces with Precision, Creativity, and Innovation.
        Delivering Excellence in Design, Craftsmanship, and Functionality.</p>
        <button onClick={() => navigate('/gallery')} className='btn'> 
          Explore More 
          <img src={whiteArrow} alt="Arrow Icon" className='dark-arrow' />
        </button>
      </div>
    </div>
  );
}

export default Hero;
