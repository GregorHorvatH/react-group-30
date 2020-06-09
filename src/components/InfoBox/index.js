import React, { Component } from 'react';

class InfoBox extends Component {
  static defaultProps = {
    value: 0,
  };

  componentDidUpdate() {
    console.log('InfoBox did update');
  }

  render() {
    console.log('InfoBox render');

    return (
      <div>
        <p>Value: {this.props.value}</p>
        <p>Text: {this.props.text}</p>
      </div>
    );
  }
}

export default InfoBox;
