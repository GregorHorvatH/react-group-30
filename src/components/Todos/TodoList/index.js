import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

import './styles.scss';

const TodoList = ({ items }) => {
  console.log('render todo list');

  return (
    <ul className="todo-list">
      {items.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  items: state.todos.items.filter((item) => !item.isDone),
});

export default connect(mapStateToProps)(TodoList);
