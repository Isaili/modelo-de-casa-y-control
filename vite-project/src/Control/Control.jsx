import React from 'react';
import Foco from './Foco';
import Aire from './Aire';
import Porton from './Porton';
import Puerta from './Puerta';

const Control = () => {
  // Estilo CSS para el contenedor div
  const containerStyle = {
    border: '0px solid black',
    padding: '10px',
    width: '250px',  // Ancho de 50px
    height: '55px',
    marginLeft: '20.2%', 
    marginTop: '-49.5%', // Alto de 60px
  };

  return (
    <div style={containerStyle}>
      <Foco />
      <Puerta />
      <Porton />
      <Aire />
    </div>
  );
};

export default Control;
