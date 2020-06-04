import React, { useState, useEffect } from 'react';

const TaskFilterHook = ({ onFilterChange }) => {
  const [isDone, setIsDone] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [sort, setSort] = useState('normal');

  useEffect(
    () =>
      onFilterChange({
        isDone,
        filterText,
        sort,
      }),
    [isDone, filterText, sort, onFilterChange],
  );

  return (
    <div className="task-filter">
      <label>
        <span>Is done</span>
        <input
          type="checkbox"
          onChange={() => setIsDone(!isDone)}
          checked={isDone}
        />
      </label>

      <label>
        <span>Filter</span>
        <input
          type="text"
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
          name="filterText"
        />
      </label>

      <label>
        <span>Sort by</span>
        <select
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          name="sort"
        >
          <option value="normal">Normal</option>
          <option value="urgent">Urgent</option>
        </select>
      </label>
    </div>
  );
};

export default TaskFilterHook;
