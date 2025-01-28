
import React from 'react';
import logo from '../../../assets/Images/heroBackground.png';

import './Hero.css';
const Hero = () => {
    console.log("Hero Component Rendered");
    return (
        <div className='Hero'>
         <img src={logo} alt="logo" className="logo" />
         <div className="content">
         <h2 className="heading">Free 18+ AI Content Generation</h2>
         <button className='btn'>Generate Now</button>

         </div>
         

            
        </div>
    );
};
export default Hero;