import React from 'react';

const DivPorton = () => {
  const estiloDiv = {
    marginTop: '-26.3%', 
    width: '40%',
    height: '350px',
    borderRadius: '3px',
    border: '2px solid black',
    marginLeft: '45.2%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  

  const estiloBoton = {
    width: '200px',
    height: '50px',
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/014/222/832/non_2x/farm-wood-gate-icon-cartoon-style-vector.jpg")', // URL directa de la imagen del portón
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
  };

  const handleClick = () => {
    console.log('Botón clickeado');
  
  };

  return (
    <div style={estiloDiv}>
      <button style={estiloBoton} onClick={handleClick}>
        Botón con imagen de portón
      </button>
    </div>
  );
};

export default DivPorton;

