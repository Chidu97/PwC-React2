import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
    const count = useSelector((state) => state.counter.count);
  return (
    <div>
        <h3>Display:</h3>
        <div className='display'>
            <h1>{count}</h1>
        </div>
    </div>
  );
}

export default Display;