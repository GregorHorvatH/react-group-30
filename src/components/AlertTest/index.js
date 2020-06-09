import React, { Component } from 'react';

class AlertTest extends Component {
  state = {
    message: '',
  };

  handleButtonClick = () => {
    this.setState({
      message: 'Some message',
    });
  };

  closeAlert = () => {
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleButtonClick}>Show alert</button>

        {this.state.message && (
          <div className="message-box">
            <p>Alert!</p>
            <p>{this.state.message}</p>
            <button onClick={this.closeAlert}>Close</button>
          </div>
        )}
      </>
    );
  }
}

export default AlertTest;
