import React, { Component } from 'react';
import TaskEditor from './TaskEditor';
import TaskList from './TaskList';
import TaskFilter from './TaskFilterHook';

import getId from '../../utils/getId';

class TaskManager extends Component {
  state = {
    tasks: [],
    filterIsDoneChecked: false,
    filterText: '',
  };

  saveData = () => {
    localStorage.setItem('taskManager', JSON.stringify(this.state));
  };

  loadData = () => {
    const tasks = JSON.parse(localStorage.getItem('taskManager'));

    if (tasks) {
      this.setState(tasks);
    }
  };

  handleAddTask = ({ text, urgency }) => {
    if (!text) {
      return;
    }

    this.setState(
      ({ tasks }) => ({
        tasks: [
          ...tasks,
          {
            id: getId(),
            isDone: false,
            text,
            urgency,
          },
        ],
      }),
      this.saveData,
    );
  };

  handleDeleteTask = (id) => {
    this.setState(
      ({ tasks }) => ({
        tasks: tasks.filter((task) => task.id !== id),
      }),
      this.saveData,
    );
  };

  handleStatusChange = (id) => {
    console.log('handleStatusChange:', id);

    this.setState(
      ({ tasks }) => ({
        tasks: tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              isDone: !task.isDone,
            };
          }

          return task;
        }),
      }),
      this.saveData,
    );
  };

  handleFilterChange = ({ isDone, filterText }) => {
    this.setState({
      filterIsDoneChecked: isDone,
      filterText,
    });
  };

  filterTasks = () => {
    const { tasks, filterIsDoneChecked, filterText } = this.state;

    const filteredByChecked = filterIsDoneChecked
      ? tasks.filter((task) => task.isDone === filterIsDoneChecked)
      : tasks;

    const fileteredByText = filterText
      ? filteredByChecked.filter((task) => task.text.includes(filterText))
      : filteredByChecked;

    return fileteredByText;
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="task-manager">
        <h3>Task manager</h3>
        <TaskEditor onAdd={this.handleAddTask} />
        <TaskFilter onFilterChange={this.handleFilterChange} />
        <TaskList
          tasks={this.filterTasks()}
          onClose={this.handleDeleteTask}
          onStatusChange={this.handleStatusChange}
        />
      </div>
    );
  }
}

export default TaskManager;
