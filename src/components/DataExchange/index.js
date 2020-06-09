import React, { useState } from 'react';
import InfoBox from '../InfoBox';
import Component1 from './Component1';

const DataExchange = () => {
  const [value, setValue] = useState(10);
  const [text, setText] = useState('');

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="data-exchange">
      <h3>Data Exchange</h3>

      <Component1
        value={value}
        onInputChange={onInputChange}
        onButtonClick={() => setValue(value + 1)}
      />
      <InfoBox value={value} text={text} />
    </div>
  );
};

export default DataExchange;
