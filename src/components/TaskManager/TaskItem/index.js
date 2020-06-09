import React from 'react';
import styles from './TaskItem.module.scss';

const TaskItem = ({ isDone, text, urgency, onClose, onStatusChange }) => (
  <li
    className={`${styles.taskItem} ${isDone ? styles.done : ''}`}
    onClick={onStatusChange}
  >
    <span>{text}</span>
    <div className={`${styles.indicator} ${styles[urgency]}`}></div>
    <button>edit</button>
    <button onClick={onClose}>X</button>
  </li>
);

export default TaskItem;
