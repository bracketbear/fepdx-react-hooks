import React, { useState, useEffect } from 'react';

const UseEffectButton = () => {
  const [label, changeLabel] = useState('Click Me');

  useEffect(() => {
    setTimeout(() => {
      changeLabel("You're a slowpoke!");
    }, 5000);
  });

  return (
    <button className="button" >{label}</button>
  );
};

export default UseEffectButton;