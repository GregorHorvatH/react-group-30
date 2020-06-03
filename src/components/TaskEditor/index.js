import React from 'react';

const TaskEditor = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // так НЕ ДЕЛАТЬ НИКОГДА!!!
    onAdd(e.target.elements.text.value);
    e.target.elements.text.value = '';
  };

  return (
    <form className="task-editor" onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
};

export default TaskEditor;
