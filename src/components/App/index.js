import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../../redux/counterActions';

import Counter from '../Counter';
import Todos from '../Todos';
import Status from '../Status';

import './styles.scss';

class App extends Component {
  state = {
    errorMessage: '',
  };

  hancdleAddCounter = () => {
    if (this.props.items.find((item) => item.id === 3)) {
      this.setState({
        errorMessage: 'UPS!',
      });

      return;
    }

    this.props.addCounter({
      id: 3,
      value: 10,
      step: 15,
    });
  };

  render() {
    return (
      <div className="app">
        <h1 className="title">Lesson 12 - Redux Toolkit</h1>

        <div className="content">
          <div className="widgets">
            <button onClick={this.hancdleAddCounter}>+</button>
            {this.state.errorMessage && <p>{this.state.errorMessage}</p>}

            {this.props.items.map(({ id }) => (
              <Counter key={id} id={id} />
            ))}
            <Todos />
          </div>
          <Status />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ counter: { items } }) => ({
  items,
});

export default connect(mapStateToProps, { addCounter })(App);
