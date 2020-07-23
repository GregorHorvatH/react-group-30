import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onToggle={() => onToggle(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
}
