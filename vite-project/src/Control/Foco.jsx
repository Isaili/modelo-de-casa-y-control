import React, { useState } from 'react';

const Foco = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    
  };

  const styles = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: isOn ? '#ff0000' : '#ccc', // Cambia a rojo cuando está encendido
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <button style={styles} onClick={handleClick}>
      Foco
    </button>
  );
};

export default Foco;
