// src/Puerta.js

import React, { useState } from 'react';

const Puerta = ({ width = '200px', height = '250px', onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const buttonStyles = {
    marginLeft: '22%',
    marginTop: '23%',
    width: width,
    height: height,
    backgroundImage: 'url(https://th.bing.com/th/id/OIP.ryZIWmT_DI8h5ZZHMkzq4gHaJn?rs=1&pid=ImgDetMain)',
    backgroundSize: 'contain',
    border: '0px solid black',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease',
    transform: isClicked ? 'scale(0.9)' : 'scale(1)',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    if (!isClicked) {
      e.currentTarget.style.transform = 'scale(1)';
    }
  };

  const handleClick = (e) => {
    setIsClicked((prev) => !prev); // Toggle isClicked state
    if (onClick) onClick(e);
  };

  return (
    <button
      style={buttonStyles}
      onClick={(e) => {
        handleClick(e);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Puedes agregar texto aquí si es necesario */}
    </button>
  );
};

export default Puerta;
