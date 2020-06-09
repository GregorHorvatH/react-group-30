import React, { Component } from 'react';
import img from '../../assets/error.jpg';

class ErrorBoundary extends Component {
  state = {
    error: '',
  };

  componentDidCatch(error, info) {
    console.log('ERROR:', error);
    console.log('INFO:', info);

    this.setState({
      error,
    });
  }

  render() {
    return this.state.error ? (
      <img src={img} alt="error" />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
