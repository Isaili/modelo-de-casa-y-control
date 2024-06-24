import React from 'react';

const DivCuarto = () => {
  const estiloDiv = {
    marginTop: '-52.4%', 
    width: '40%',
    height: '347px',
    borderRadius: '3px',
    border: '2px solid black',
    marginLeft: '45.2%', 
    backgroundImage: 'url("https://thumbs.dreamstime.com/b/ni%C3%B1os-habitaci%C3%B3n-gr%C3%A1fico-color-blanco-negro-de-la-pantalla-interior-ilustraci%C3%B3n-vector-sala-dibujo-231810118.jpg")',
    backgroundSize: 'cover', // Ajustar la imagen para cubrir todo el div
    backgroundRepeat: 'no-repeat', // Evitar que la imagen se repita
    backgroundPosition: 'center', // Centrar la imagen dentro del div
  };

  return (
    <div style={estiloDiv}>
      {/* Contenido opcional dentro del div */}
    </div>
  );
};

export default DivCuarto;

