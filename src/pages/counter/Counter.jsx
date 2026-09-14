import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount((prev) => prev + Number(step));
  };
  const decrement = () => {
    setCount((prev) => Math.max(0, prev - Number(step)));
  };

  const reset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      />
      <span data-testid="count">{count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
