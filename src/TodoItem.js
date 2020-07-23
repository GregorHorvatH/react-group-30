import React from 'react';

export default function TodoItem({ title, completed, onToggle, onDelete }) {
  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={completed} onChange={onToggle} />
        <span>{title}</span>

        <i className="material-icons red-text" onClick={onDelete}>
          delete
        </i>
      </label>
    </li>
  );
}
