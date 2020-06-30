import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super();
    this.myInput = React.createRef();
  }

  componentDidMount() {
    console.log('My Input:', this.myInput);
    this.myInput.current.focus();
  }

  render() {
    return (
      <div>
        <label>
          <span>Login:</span>
          <input type="text" ref={this.myInput} />
        </label>
        <br />
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>
      </div>
    );
  }
}

export default LoginForm;
