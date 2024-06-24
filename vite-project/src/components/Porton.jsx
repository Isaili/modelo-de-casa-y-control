import React, { useState } from 'react';

const Porton = () => {
  // Definimos el estado para la URL de la imagen de fondo
  const [imageUrl, setImageUrl] = useState('https://thumbs.dreamstime.com/b/muri-l-illustrazione-bianca-nera-grafica-di-schizzo-del-paesaggio-del-portone-del-recinto-92599595.jpg');
  const [isOriginalImage, setIsOriginalImage] = useState(true); // Estado para rastrear la imagen actual

  // Función para manejar el clic en el botón
  const handleClick = () => {
    if (isOriginalImage) {
      // Cambiamos a la nueva imagen
      setImageUrl('https://norautos.com/chiclayo/wp-content/uploads/2022/09/avanza22_verdemetalicoG64_14-1.jpg');
    } else {
      // Volvemos a la imagen original
      setImageUrl('https://thumbs.dreamstime.com/b/muri-l-illustrazione-bianca-nera-grafica-di-schizzo-del-paesaggio-del-portone-del-recinto-92599595.jpg');
    }
    // Cambiamos el estado para reflejar la imagen actual
    setIsOriginalImage(!isOriginalImage);
    console.log('Botón clickeado');
  };

  // Estilos para el botón, utilizando la URL de la imagen desde el estado
  const estiloBoton = {
    
    marginLeft: '45.3%',
    marginTop: '1%',
    width: '40%',
    height: '300px',
    border: '0px solid #000', // Borde del botón
    borderRadius: '5px', // Borde redondeado
    outline: 'none', // Eliminar el contorno al enfocar
    cursor: 'pointer', // Cambiar el cursor al pasar sobre el botón
    textAlign: 'center', // Alinear contenido al centro
    color: '#000', // Color del texto
    fontSize: '16px', // Tamaño del texto
    backgroundColor: '#fff',
    backgroundImage: `url("${imageUrl}")`, // URL de la imagen desde el estado
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    backgroundPosition: 'center', // Centra la imagen
  };

  return (
    <button style={estiloBoton} onClick={handleClick}>
      {/* Puedes agregar texto u otros elementos dentro del botón */}
    </button>
  );
};

export default Porton;
