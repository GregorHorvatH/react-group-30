import React, { Component } from 'react';
import { TaskUrgency } from '../constants';

class TaskEditor extends Component {
  state = {
    value: '',
    urgency: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAdd({
      text: this.state.value,
      urgency: this.state.urgency || TaskUrgency.NORMAL,
    });

    this.setState({
      value: '',
    });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleUrgencyChange = (e) => {
    this.setState({
      urgency: e.target.value,
    });
  };

  render() {
    const { value, urgency } = this.state;

    return (
      <form className="task-editor" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          value={value}
          onChange={this.handleInputChange}
        />

        <label>
          <span>Normal</span>
          <input
            type="radio"
            value={TaskUrgency.NORMAL}
            onChange={this.handleUrgencyChange}
            checked={urgency === TaskUrgency.NORMAL}
          />
        </label>
        <label>
          <span>Medium</span>
          <input
            type="radio"
            value={TaskUrgency.MEDIUM}
            onChange={this.handleUrgencyChange}
            checked={urgency === TaskUrgency.MEDIUM}
          />
        </label>
        <label>
          <span>Urgent</span>
          <input
            type="radio"
            value={TaskUrgency.URGENT}
            onChange={this.handleUrgencyChange}
            checked={urgency === TaskUrgency.URGENT}
          />
        </label>

        <button type="submit">Add task</button>
      </form>
    );
  }
}

export default TaskEditor;
