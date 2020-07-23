import React, { useState } from 'react';
import { uuid } from 'uuidv4';

const InputForm = ({ todos, onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: uuid(),
      title: text,
      completed: false,
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
