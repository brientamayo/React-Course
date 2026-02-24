import { useState, useReducer } from "react";
import { CounterReducer, initialState } from "./CounterReducer";

const Counter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <p>Count: {state.count}</p>
      <input
        className="border p-1 mr-1"
        type="number"
        min={0}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={handleIncrement}
        className="border p-1 mr-1 text-slate-700 bg-slate-100"
      >
        +1
      </button>
      <button
        onClick={handleDecrement}
        className="border p-1 mr-1 text-slate-700 bg-slate-100"
      >
        -1
      </button>
      <button
        onClick={handleIncrementByAmount}
        className="border p-1 mr-1 text-slate-700 bg-slate-100"
      >
        Increment
      </button>
      <button
        onClick={handleDecrementByAmount}
        className="border p-1 mr-1 text-slate-700 bg-slate-100"
      >
        Decrement
      </button>
      <button
        onClick={handleReset}
        className="border p-1 mr-1 text-slate-700 bg-slate-100"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
