import React from 'react';

const TaskItem = ({ text, onClose }) => (
  <li>
    <span>{text}</span>
    <button>edit</button>
    <button onClick={onClose}>X</button>
  </li>
);

export default TaskItem;
