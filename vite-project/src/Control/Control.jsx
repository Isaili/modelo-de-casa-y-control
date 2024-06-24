import React from 'react';
import Foco from './Foco';
import Aire from './Aire';
import Porton from './Porton';
import Puerta from './Puerta';

const Control = () => {
  
  const containerStyle = {
    border: '2px solid red',
    padding: '10px',
    width: '250px',  // Ancho de 50px
    height: '55px',
    marginLeft: '20.2%', 
    marginTop: '-48.5%', // Alto de 60px
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
