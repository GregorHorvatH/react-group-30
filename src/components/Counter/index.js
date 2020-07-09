import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../../redux/counterActions';

import './styles.scss';

const options = [5, 10, 15, 50];

const Counter = ({ id, value, step, onDecrement, onIncrement, setStep }) => {
  return (
    <div className="counter">
      <button>x</button>
      <h2 className="title">Counter</h2>
      <div className="controls">
        <button className="button" onClick={() => onDecrement({ id, step })}>
          -
        </button>
        <p className="value">{value}</p>
        <button className="button" onClick={() => onIncrement({ id, step })}>
          +
        </button>
      </div>

      <select
        className="step"
        value={step}
        onChange={(e) => setStep({ id, step: Number(e.target.value) })}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = ({ counter: { items } }, { id }) => ({
  ...items.find((item) => item.id === id),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onDecrement: counterActions.decrement,
      onIncrement: counterActions.increment,
      setStep: counterActions.setStep,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
