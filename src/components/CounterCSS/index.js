import React from 'react';
import './Counter.css';

const CounterCSS = ({ title }) => {
  const value = 0;

  return (
    <div className="counter">
      <h2>{title}</h2>
      <div className="buttons">
        <button className="button">-</button>
        <p className="value">{value}</p>
        <button className="button">+</button>
      </div>

      <p className="value">0</p>
    </div>
  );
};

export default CounterCSS;
