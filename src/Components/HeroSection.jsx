import React from 'react';
import GamingButton from './GamingButton';
import Navbar from './Navbar';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="relative h-screen">
      <img src="./bg.jpg" className="w-full h-full object-cover opacity-35" alt="" />

      <div className="absolute inset-0 ">
        <Navbar />
        <div className='h-[70%] flex items-center justify-center text-white text-center flex-col'>
        <img src="ccs.png" className='w-20 mb-5' alt="" />
        <h2 className='mb-10'>presents</h2>
        <h1 className='content text-5xl mt-7'>SYRINX</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
