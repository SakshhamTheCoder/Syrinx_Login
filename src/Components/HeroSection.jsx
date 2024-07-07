import React from 'react';
import GamingButton from './GamingButton';

const HeroSection = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="relative">
      <img src="./bg.jpg" className='cover'  alt="" />
          
      
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
        <img src="./logos.png" className='w-[500px]' alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
