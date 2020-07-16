import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import InputForm from './InputForm';
import Filters from './Filters';
import ErrorMessage from './ErrorMessage';
import TodoListDone from './TodoList/TodoListDoneContainer';
import TodoListNotDone from './TodoList/TodoListNotDoneContainer';
import Loader from './Loader';

import { getTodos, fetchSettings } from '../../redux/todosAPI';

import './styles.scss';

const Todos = ({ fetchTodos, fetchSettings }) => {
  useEffect(() => {
    fetchTodos();
    fetchSettings();
  }, [fetchTodos, fetchSettings]);

  return (
    <Layout>
      <InputForm />
      <Filters />
      <ErrorMessage />
      <Loader />
      <TodoListNotDone name="not done" />
      <TodoListDone name="done" />
    </Layout>
  );
};

const mapDispatchToProps = {
  fetchTodos: getTodos,
  fetchSettings,
};

export default connect(null, mapDispatchToProps)(Todos);
