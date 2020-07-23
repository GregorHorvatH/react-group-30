import React, { useReducer } from 'react';
import TodoList from './TodoList';
import InputForm from './InputForm';

import Context from './context';
import reducer from './reducer';

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <Context.Provider value={{ todos, dispatch }}>
      <div className="container">
        <h1>Todo app</h1>

        <InputForm />
        <TodoList />
      </div>
    </Context.Provider>
  );
};

export default App;
