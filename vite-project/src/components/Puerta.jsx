// src/Puerta.js

import React from 'react';

const Puerta = ({ width = '200px', height = '250px', onClick
    
 }) => {
  const buttonStyles = {
    marginLeft: '22%', 
    marginTop: '23%',
    width: '200px',
    height: '250px',
    backgroundImage: 'url(https://th.bing.com/th/id/OIP.ryZIWmT_DI8h5ZZHMkzq4gHaJn?rs=1&pid=ImgDetMain)',
    backgroundSize: 'contain', 
    border: '0px solid black', 
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    
  
    
    
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale()';
  };

  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Puedes agregar texto aquí si es necesario */}
    </button>
  );
};

export default Puerta;
