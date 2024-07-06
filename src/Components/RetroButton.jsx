// src/RetroButton.jsx
import React from 'react';

const RetroButton = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-green-500 
        hover:bg-green-700 
        text-white 
        font-bold 
        py-3 
        px-20 
        rounded 
        border-4 
        border-yellow-500 
        hover:border-yellow-700 
        shadow-lg 
        transform 
        hover:scale-110 
        transition 
        duration-300 
        ease-in-out
        pixelated
      "
      style={{
        fontFamily: "'Press Start 2P', cursive", // A popular retro font
      }}
    >
      {text}
    </button>
  );
};

export default RetroButton;
