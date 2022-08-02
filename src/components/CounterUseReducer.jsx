import React, { useReducer } from "react";

const CounterUseReducer = () => {
  const reducer = (state, action) => {

    switch (action) {
      case "increment": {
        return { count: state.count + 1 };
      }
      case "decrement": {
        return { count: state.count - 1 };
      }
      case 'reset':{
        return{count: state.count = 0}
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h3>Using useReducer</h3>
      <button className='counter-btn' onClick={() => dispatch('increment')} id='counter'>+</button>
      <p style={{textAlign: 'center'}}>{state.count}</p>
      <button className='counter-btn' onClick={() => dispatch('decrement')} id='counter'>-</button>
      <button className='counter-btn' onClick={() => dispatch('reset')} id='counter'>reset</button>
    </div>
  );
};

export default CounterUseReducer;
