import React, { useState } from 'react';

const Porton = () => {
 
  const [imageUrl, setImageUrl] = useState('https://thumbs.dreamstime.com/b/muri-l-illustrazione-bianca-nera-grafica-di-schizzo-del-paesaggio-del-portone-del-recinto-92599595.jpg');
  const [isOriginalImage, setIsOriginalImage] = useState(true); // Estado para rastrear la imagen actual


  const handleClick = () => {
    if (isOriginalImage) {
     
      setImageUrl('https://norautos.com/chiclayo/wp-content/uploads/2022/09/avanza22_verdemetalicoG64_14-1.jpg');
    } else {
   
      setImageUrl('https://thumbs.dreamstime.com/b/muri-l-illustrazione-bianca-nera-grafica-di-schizzo-del-paesaggio-del-portone-del-recinto-92599595.jpg');
    }
  
    setIsOriginalImage(!isOriginalImage);
    console.log('Botón clickeado');
  };

  const estiloBoton = {
    
    marginLeft: '45.3%',
    marginTop: '1%',
    width: '40%',
    height: '300px',
    border: '0px solid #000',
    borderRadius: '5px',
    outline: 'none',
    cursor: 'pointer', 
    textAlign: 'center', 
    color: '#000',
    fontSize: '16px',
    backgroundColor: '#fff',
    backgroundImage: `url("${imageUrl}")`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
  };

  return (
    <button style={estiloBoton} onClick={handleClick}>
      {/* Puedes agregar texto u otros elementos dentro del botón */}
    </button>
  );
};

export default Porton;
