import React, { useState, useContext } from 'react';
import { uuid } from 'uuidv4';

import Context from './context';

const InputForm = () => {
  const { dispatch } = useContext(Context);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: uuid(),
        title: text,
        completed: false,
      },
    });

    setText('');
  };

  const handleTextInput = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="input-field" onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleTextInput} />
      <label>Todo name</label>
    </form>
  );
};

export default InputForm;
