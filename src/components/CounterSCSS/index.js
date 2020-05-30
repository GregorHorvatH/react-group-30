import React from 'react';
import styles from './Counter.module.scss';
import classNames from 'classnames';

const Counter = ({ title }) => {
  const value = 0;

  const disabledButton = classNames(styles.button, {
    [styles.disabled]: value > 0,
  });

  return (
    <div className="counter">
      <h2>{title}</h2>
      <div className={styles.buttons}>
        <button className={disabledButton}>-</button>
        <p className={styles.value}>{value}</p>
        <button className={styles.button}>+</button>
      </div>

      <p className={styles.value}>0</p>
    </div>
  );
};

export default Counter;
