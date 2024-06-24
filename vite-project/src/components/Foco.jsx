import React, { useState } from 'react';

const Foco = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn); 
  };


  const estilosFoco = {
    marginLeft: '58.2%', 
    marginTop: '-44.5%',
    position: 'relative',
    width: '20px',
    height: '30px',
    borderRadius: '50% 50% 15% 15%',
    border: '2px solid #000',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: isOn ? '#fff176' : '#fff', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '20px',
    transition: 'background-color 0.3s',
  };

  const estilosLuz = {
    width: '10px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: isOn ? '#fff176' : '#fff', 
    marginBottom: '10px',
    transition: 'background-color 0.3s',
  };

  const estilosCuerpo = {
    width: '10px',
    height: '10px',
    borderRadius: '20%',
    backgroundColor: '#555',
  };

  return (
    <button style={estilosFoco} onClick={handleClick}>
      <div style={estilosLuz}></div>
      <div style={estilosCuerpo}></div>
    </button>
  );
};

export default Foco;
