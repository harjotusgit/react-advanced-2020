import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  // const handleDecrease = () => {
  //   setValue(value - 1);
  // };

  // const handleReset = () => {
  //   setValue(0);
  // };

  // const handleIncrease = () => {
  //   setValue(value + 1);
  // };

  return (
    <>
      {/* <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={handleDecrease}>
          decrease
        </button>
        <button className='btn' onClick={handleReset}>
          reset
        </button>
        <button className='btn' onClick={handleIncrease}>
          increase
        </button>
      </section> */}
      <section style={{ margin: '4rem 0' }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button
          className='btn'
          onClick={() => {
            setTimeout(() => {
              // setValue(value + 1);
              setValue((prevState) => {
                return prevState + 1;
              });
            }, 2000);
          }}
        >
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
