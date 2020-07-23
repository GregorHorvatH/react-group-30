import React, { useContext } from 'react';

import Context from './context';

export default function TodoItem({ id, title, completed }) {
  const { dispatch } = useContext(Context);

  const handleToggleTodo = () => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id,
    });
  };

  const handleDeleteTodo = () => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
  };

  return (
    <li className="todo">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleTodo}
        />
        <span>{title}</span>

        <i className="material-icons red-text" onClick={handleDeleteTodo}>
          delete
        </i>
      </label>
    </li>
  );
}
