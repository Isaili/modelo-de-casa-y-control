
import React from 'react';

const DivComponent = () => {
  const estiloDiv = {
    marginTop: '5%', 
    width: '30%',
    height: '700px',
    borderRadius: '3px',
    border: '2px solid black',
    marginLeft: '15%', 
  };

  return (
    <div style={estiloDiv}>
      {/* Contenido opcional dentro del div */}
    </div>
  );
};

export default DivComponent;

