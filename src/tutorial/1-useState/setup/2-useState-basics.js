import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('random title');
  const handleClick = () => {
    title === 'random title'
      ? setTitle('another title')
      : setTitle('random title');
  };

  return (
    <>
      <h2>{title}</h2>
      <button type='button' onClick={handleClick} className='btn'>
        Change value
      </button>
    </>
  );
};

export default UseStateBasics;
