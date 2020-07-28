import React, { Component } from 'react';
import { Provider } from 'react-redux';

// import Counter from '../Counter';
// import Todos from '../Todos';
// import Status from '../Status';
import MaterialComponent from '../MaterialComponent';

import store from '../../redux/store';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <h1 className="title">Lesson 17 - Questions & Answers</h1>

          <MaterialComponent />
          {/* <div className="content">
            <div className="widgets">
              <Counter />
              <Todos />
            </div>
            <Status />
          </div> */}
        </div>
      </Provider>
    );
  }
}

export default App;
