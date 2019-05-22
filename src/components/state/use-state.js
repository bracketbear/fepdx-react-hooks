import React, { useState } from 'react';

const UseStateButton = () => {
  const [count, changeCount] = useState(0);

  return (
    <button 
      className="button button__stateless" 
      onClick={() => changeCount(count+1)}>Count = {count}</button>
  );
};

export default UseStateButton;