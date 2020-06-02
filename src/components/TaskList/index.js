import React from 'react';
import TaskItem from '../TaskItem';

const TaskList = ({ tasks, onClose }) => (
  <ul className="task-list">
    {tasks.map(({ id, text }) => (
      <TaskItem key={id} text={text} onClose={() => onClose(id)} />
    ))}
  </ul>
);

export default TaskList;
