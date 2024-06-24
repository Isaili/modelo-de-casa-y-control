import React, { useState } from 'react';

const Aire = () => {
  const [isOriginalImage, setIsOriginalImage] = useState(true);

  // URLs de las imágenes
  const originalImageUrl = 'https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-white-air-conditioner-image_1297084.jpg';
  const alternateImageUrl = 'https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-green-air-conditioning-image_1456122.jpg';

  // Función para alternar la imagen
  const toggleImage = () => {
    setIsOriginalImage(!isOriginalImage);
  };

  // Estilos del botón
  const buttonStyles = {
    marginTop: '-45px', // Ajusta este valor para cambiar la posición vertical del botón
    marginLeft: '50%', // Posición horizontal del botón
    width: '50px',
    height: '50px',
    backgroundImage: `url(${isOriginalImage ? originalImageUrl : alternateImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'transform 0.2s',
  };

  // Estilos para evitar distorsión al cambiar la forma del botón
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <button
      style={buttonStyles}
      onClick={toggleImage}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Aire;
