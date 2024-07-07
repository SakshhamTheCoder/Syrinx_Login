import React from 'react'

const Navbar = () => {
  const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex justify-between mx-5 md:mx-20 pt-10  text-purple-300 z-30'>
        <div className="logo">SYRINX</div>
        <button onClick={() => scrollToSection('#Register')} className='navcontent text-white text-sm'>REGISTRATION</button>
    </div>
  )
}

export default Navbar
