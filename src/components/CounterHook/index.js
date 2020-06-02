import React, { useState } from 'react';
import './Counter.scss';

const CounterHook = ({ onClose, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleDecrement = () => setValue(value - 1);
  const handleIncrement = () => setValue(value + 1);

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <h3>{value}</h3>
      <button onClick={handleIncrement}>+</button>
      <button className="close" onClick={onClose}>
        X
      </button>
    </div>
  );
};

CounterHook.defaultProps = {
  initialValue: 0,
};

export default CounterHook;
