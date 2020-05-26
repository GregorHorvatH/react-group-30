import React from 'react';
import PropTypes from 'prop-types';

import './Counter.scss';

const Counter = ({ title, isVisible, onButtonClick }) => {
  return isVisible ? (
    <div className="counter">
      <h2>{title}</h2>
      <button className="button">-</button>
      <p>0</p>
      <button className="button" onClick={onButtonClick}>
        +
      </button>
      <p>{isVisible.toString()}</p>
    </div>
  ) : (
    <div>
      <p>Component {title} is not visible</p>
      <p>{isVisible.toString()}</p>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  isVisible: PropTypes.bool, // boolean
  onButtonClick: PropTypes.func, // function
};

Counter.defaultProps = {
  isVisible: false,
};

export default Counter;
