import React from 'react';
// import 'styles.scss';

const Input = ({ classes, type, value, currentValue, onChange }) => {
  switch (type) {
    case 'radio':
      return (
        <input
          type="radio"
          value={value}
          checked={currentValue === value}
          onChange={() => onChange()}
        />
      );

    default:
      return (
        <input type="text" checked={value === 'asc'} onChange={onChange} />
      );
  }
};

export default Input;
