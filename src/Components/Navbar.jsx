import React from 'react'

const Navbar = () => {
  const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex justify-between mx-10 pt-10  text-purple-300 z-30'>
        <div className="logo">SYRINX</div>
        <button onClick={() => scrollToSection('#Register')}>REGISTRATION</button>
    </div>
  )
}

export default Navbar
