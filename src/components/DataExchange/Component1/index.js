import React from 'react';

const Component1 = ({ value, onButtonClick, onInputChange }) => (
  <div>
    <p>Burtton value: {value}</p>
    <button onClick={onButtonClick}>+</button>
    <input type="text" onChange={onInputChange} />
  </div>
);

export default Component1;
