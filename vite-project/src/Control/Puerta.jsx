import React, { useState } from 'react';

const Puerta = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDoor = () => {
    setIsOpen(!isOpen);
    // Aquí puedes agregar más lógica según sea necesario para abrir/cerrar la puerta
  };

  const styles = {
    width: '50px',
    height: '50px',
    backgroundColor: isOpen ? '#8BC34A' : '#c5e1a5', // Cambia a verde cuando la puerta está abierta
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <button style={styles} onClick={toggleDoor}>
      Puerta
    </button>
  );
};

export default Puerta;
