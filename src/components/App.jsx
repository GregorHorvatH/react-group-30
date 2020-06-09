import React, { Component } from 'react';
// import AlertTest from './AlertTest';
// import TaskManager from './TaskManager';
// import Timer from './Timer';
// import InfoBox from './InfoBox';
// import InfoBox from './InfoBoxHook';

import ErrorBoundary from './ErrorBoundary';
import DataExchange from './DataExchange';
// import BuggyComponent from './BuggyComponent';

class App extends Component {
  state = {
    showTimer: false,
    value: 0,
  };

  handleShowTimer = () => {
    this.setState(({ showTimer }) => ({
      showTimer: !showTimer,
    }));
  };

  handleIncrement = () => this.setState(({ value }) => ({ value: value + 1 }));

  render() {
    // const { showTimer, value } = this.state;

    console.log('App render');

    return (
      <ErrorBoundary>
        <h1>Lesson 05</h1>
        {/* <TaskManager /> */}
        {/* <AlertTest /> */}

        {/* <button onClick={this.handleIncrement}>+</button>
        <InfoBox value={value} showTimer={showTimer} />

        <button onClick={this.handleShowTimer}>
          {showTimer ? 'Hide' : 'Show'}
        </button>
        {showTimer && <Timer />} */}

        {/* <BuggyComponent /> */}
        <DataExchange />
      </ErrorBoundary>
    );
  }
}

export default App;
