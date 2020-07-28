import React from 'react';
import Layout from './Layout';
import InputForm from './InputForm';
import Filters from './Filters';
import TodoList from './TodoList';

import './styles.scss';

const Todos = () => {
  return (
    <Layout>
      <InputForm />
      <Filters />
      <TodoList />
    </Layout>
  );
};

export default Todos;
