import React, { PureComponent } from 'react';

class Timer extends PureComponent {
  state = {
    value: 0,
  };

  intervalId = null;

  componentDidMount() {
    console.log('Timer did mount');

    // this.intervalId = setInterval(
    //   () =>
    //     this.setState(({ value }) => ({
    //       value: value + 1,
    //     })),
    //   1000,
    // );
  }

  componentWillUnmount() {
    console.log('Timer will unmount');

    clearInterval(this.intervalId);
  }

  componentDidUpdate() {
    console.log('Timer did update');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.value !== this.state.value;
  // }

  render() {
    console.log('Timer render');

    return (
      <div className="timer">
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Timer;
