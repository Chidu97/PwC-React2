import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [decrease, setDecrease] = useState(0);

  return (
    <div>
      <div className="display">
        <h1>{count}</h1>
      </div>
      <div className="counter-btn">
        <button
          id="counter"
          onClick={() => dispatch(increment())}
          style={{ padding: "5px", background: "transparent" }}
        >
          +
        </button>
        <button
          id="counter"
          onClick={() => dispatch(reset())}
          style={{ padding: "5px", background: "transparent" }}
        >
          Reset
        </button>
        <button
          id="counter"
          onClick={() => dispatch(decrement())}
          style={{ padding: "5px", background: "transparent" }}
        >
          -
        </button>
      </div>
      <hr style={{ margin: "20px 0px 20px" }} />
      <h3>Increase By Amount:</h3>
      <div className="input">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div className="change-btn">
        <button
          id="btn-change"
          onClick={() => dispatch(incrementByAmount(Number(amount)))}
        >
          Add Amount
        </button>
      </div>
      <hr style={{ margin: "20px 0px 20px" }} />
      <h3>Decrease By Amount:</h3>
      <div className="input">
        <input
          value={decrease}
          onChange={(e) => setDecrease(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div className="change-btn">
        <button
          id="btn-change"
          onClick={() => dispatch(decrementByAmount(Number(decrease)))}
        >
          Decrease Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
