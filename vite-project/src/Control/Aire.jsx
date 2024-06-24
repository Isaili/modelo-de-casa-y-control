import React, { useState } from 'react';

const Aire = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleImage = () => {
    setIsOn(!isOn);
   
  };

  const styles = {
    width: '50px',
    height: '50px',
    backgroundColor: isOn ? '#87CEEB' : '#f48fb1', 
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
