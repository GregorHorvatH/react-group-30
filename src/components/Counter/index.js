import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Counter.scss';

class Counter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     text: 'Hello from react',
  //     value: props.initialValue,
  //   };
  // }

  state = {
    text: 'Hello from react',
    value: this.props.initialValue,
  };

  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

  handleDecrement = () => {
    this.setState(({ value }) => ({
      value: value - 1,
    }));
  };

  handleIncrement = () => {
    this.setState(({ value }) => ({
      value: value + 1,
    }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.value !== this.state.value;
  }

  render() {
    const { value } = this.state;
    const { onClose, id } = this.props;

    console.log('Render:', id);

    return (
      <div className="counter">
        <button onClick={this.handleDecrement}>-</button>
        <h3>{value}</h3>
        <button onClick={this.handleIncrement}>+</button>
        <button className="close" onClick={onClose}>
          X
        </button>
      </div>
    );
  }
}

export default Counter;
