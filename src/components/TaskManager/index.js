import React, { Component } from 'react';
import TaskEditor from '../TaskEditor';
import TaskList from '../TaskList';

import getId from '../../utils/getId';

class TaskManager extends Component {
  state = {
    tasks: [],
  };

  handleAddTask = (text) => {
    if (!text) {
      return;
    }

    this.setState(({ tasks }) => ({
      tasks: [
        ...tasks,
        {
          id: getId(),
          text,
        },
      ],
    }));
  };

  handleDeleteTask = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="task-manager">
        <h3>Task manager</h3>
        <TaskEditor onAdd={this.handleAddTask} />
        <TaskList tasks={tasks} onClose={this.handleDeleteTask} />
      </div>
    );
  }
}

export default TaskManager;
