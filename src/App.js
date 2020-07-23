import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First todo', completed: false },
    { id: 2, title: 'Second todo', completed: true },
  ]);

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: uuid(),
        title: text,
        completed: false,
      },
    ]);
    setText('');
  };

  const handleTextInput = (e) => {
    setText(e.target.value);
  };

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

  return (
    <div className="container">
      <h1>Todo app</h1>

      <form className="input-field" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleTextInput} />
        <label>Todo name</label>
      </form>

      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
