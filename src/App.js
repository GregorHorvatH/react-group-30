import React, { useState } from 'react';
import TodoList from './TodoList';
import InputForm from './InputForm';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First todo', completed: false },
    { id: 2, title: 'Second todo', completed: true },
  ]);

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleAddTodo = (todo) => setTodos([...todos, todo]);

  return (
    <div className="container">
      <h1>Todo app</h1>

      <InputForm onSubmit={handleAddTodo} />

      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
