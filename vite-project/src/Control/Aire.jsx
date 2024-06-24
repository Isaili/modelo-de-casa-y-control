import React, { useState } from 'react';

const Aire = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleImage = () => {
    setIsOn(!isOn);
    // Aquí puedes agregar más lógica según sea necesario para cambiar el estado del mini split
  };

  const styles = {
    width: '50px',
    height: '50px',
    backgroundColor: isOn ? '#87CEEB' : '#f48fb1', // Cambia a azul cielo cuando está encendido
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button style={styles} onClick={toggleImage}>
      Aire
    </button>
  );
};

export default Aire;
