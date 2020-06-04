import React, { Component } from 'react';

class TaskFilter extends Component {
  state = {
    isDone: false,
    filterText: '',
    sort: 'normal',
  };

  handleIsDoneChange = () => {
    this.setState(
      ({ isDone }) => ({
        isDone: !isDone,
      }),
      () => this.props.onFilterChange(this.state),
    );
  };

  handleFilterChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.props.onFilterChange(this.state),
    );
  };

  render() {
    const { isDone, filterText, sort } = this.state;

    return (
      <div className="task-filter">
        <label>
          <span>Is done</span>
          <input
            type="checkbox"
            onChange={this.handleIsDoneChange}
            checked={isDone}
          />
        </label>

        <label>
          <span>Filter</span>
          <input
            type="text"
            onChange={this.handleFilterChange}
            value={filterText}
            name="filterText"
          />
        </label>

        <label>
          <span>Sort by</span>
          <select onChange={this.handleFilterChange} value={sort} name="sort">
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
          </select>
        </label>
      </div>
    );
  }
}

export default TaskFilter;
