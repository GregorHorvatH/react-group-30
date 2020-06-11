import React, { useState } from 'react';

const NewsFilter = ({ onFilter }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onFilter(value); // this.props.onFilter(value);
    // setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default NewsFilter;
