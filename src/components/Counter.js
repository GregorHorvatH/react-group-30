import React, { useImperativeHandle } from 'react';
import counterHook from './counterHook';

const Counter = React.forwardRef((props, ref) => {
  const [value, setValue, reset] = counterHook();
  const increment = () => setValue(value + 1);

  useImperativeHandle(ref, () => ({
    increment: increment,
  }));

  return (
    <div className="counter">
      <p>{value}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
});

export default Counter;
