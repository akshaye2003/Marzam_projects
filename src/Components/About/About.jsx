import React from 'react';
import './About.css';
import aboutImage from '../../assets/about.jpg'; // Import the about image

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={aboutImage} alt="" className='about-img'/>
            {/* <img src={playIcon} alt="" className='play-icon' /> */}
        </div>
        <div className='about-right'> 
        <h3>ABOUT COMPANY</h3>
        <h2>Transforming Spaces with Excellence: Marzam Projects - Experts in Interiors and Facades</h2>
        <p>Marzam Projects is a dynamic new company specializing in the design and construction of exceptional interiors and facades with a keen focus on aluminium windows, curtain walling , structural glazings, timber  doors , ceilings, and bespoke woodworks,we aim to transform both residential and commercial spaces into masterpieces of design and functionality. Headed by an industry veteran with 28 years of experience, Marzam Projects brings a wealth of expertise to every endeavor. </p>
        <p>Our founder has contributed to over 125 successful projects including few monumental in Oman ensuring that each one is executed with precision, creativity, and a commitment to excellence. At Marzam Projects, we pride ourselves on delivering personalized design solutions that cater to the unique needs and preferences of our clients. From custom-designed doors and windows to innovative ceiling designs and high-quality woodwork, every detail is meticulously crafted to perfection. Our mission is to create spaces that reflect your style and enhance your living or working environment</p>
        <p>We can assist in co-creating your ideal place that matches your ideas and particular lifestyle or company demands by offering designs, architectural details, material selections, room layouts, and product ideas.</p>
        </div>
    </div>
  );
}

export default About;
