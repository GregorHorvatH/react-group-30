import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';

const TaskList = ({ tasks, onClose, onStatusChange }) => (
  <ul className="task-list">
    {tasks.map(({ id, ...rest }) => (
      <TaskItem
        key={id}
        {...rest}
        onClose={() => onClose(id)}
        onStatusChange={() => onStatusChange(id)}
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

export default TaskList;
