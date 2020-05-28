import React from 'react';
// import styles from './Counter.module.scss';
// import './Counter.scss';
// import classNames from 'classnames';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  buttons: {
    display: 'flex',
  },
  button: {
    width: 50,
  },
  value: {
    fontSize: 24,
  },
  disabled: {
    backgroundColor: 'gray',
  },
});
// console.log(styles);

const Counter = ({ title }) => {
  const value = 0;

  const styles = useStyles();
  // const disabledButton = classNames(styles.button, {
  //   [styles.disabled]: value > 0,
  // });

  return (
    <div className="counter">
      <h2>{title}</h2>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${!value && styles.disabled}`}>
          -
        </button>
        <p className={styles.value}>{value}</p>
        <button className={styles.button}>+</button>
      </div>

      <p className={styles.value}>0</p>
    </div>
  );
};

export default Counter;
