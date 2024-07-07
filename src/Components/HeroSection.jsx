import React from 'react';
import GamingButton from './GamingButton';

const HeroSection = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="relative h-screen">
      <img src="./bg.jpg" className="w-full h-full object-cover opacity-35" alt="" />

      <div className="absolute inset-0 flex items-center justify-center text-white text-center flex-col">
        <img src="ccs.png" className='w-10 mb-5' alt="" />
        <h2 className='mb-10'>presents</h2>
        {/* <img src="./logos.png" className="w-4/5 max-w-lg md:w-2/5 lg:w-3/4" alt="" /> */}
        <h1 className='text-5xl'>SYRINX</h1>
      </div>
    </div>
  );
}

export default HeroSection;
