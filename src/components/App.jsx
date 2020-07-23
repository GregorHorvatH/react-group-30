// core
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Content from './Content';
import { getCurrentUser } from '../redux/sessionOperations';

// styles
import './App.styles.scss';

const App = ({ getCurrentUser }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <div className="app">
      <Navbar />
      <Content />
    </div>
  );
};

const mapDispatchToProps = { getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
