import React, { useState } from 'react'

const SimpleCounter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
      setCounter((prevCounter) => prevCounter + 1);
    };

    const decrement = () => {
      setCounter((prevCounter) => prevCounter -1)
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <button onClick={increment}>+</button>
       <h1>{counter}</h1>
       <button onClick={decrement}>-</button>
    </div>
  )
}

export default SimpleCounter;
