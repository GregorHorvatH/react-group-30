import React, { useContext } from 'react';
import TodoItem from './TodoItem';

import Context from './context';

export default function TodoList() {
  const { todos } = useContext(Context);

  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
