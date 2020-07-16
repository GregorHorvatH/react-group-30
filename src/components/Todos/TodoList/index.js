import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

import { cleanTodoError } from '../../../redux/todosActions';

import './styles.scss';

const TodoList = ({ isLoading, items, errorMessage, cleanTodoError }) => {
  console.log('render todo list');

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <>
      {!!errorMessage && (
        <>
          <button onClick={cleanTodoError}>x</button>
          <h3>{errorMessage}</h3>
        </>
      )}

      <ul className="todo-list">
        {items.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  const { items, isLoading, errorMessage } = state.todos;

  return {
    isLoading,
    items,
    errorMessage,
  };
};

export default connect(mapStateToProps, { cleanTodoError })(TodoList);
