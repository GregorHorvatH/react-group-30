import React from 'react';
import { connect } from 'react-redux';
import Input from '../../common/Input';

import { setAscFilter, setDescFilter } from '../../../redux/todosActions';

const FIlters = ({ value, count, onAsc, onDesc }) => {
  return (
    count > 1 && (
      <div className="filters">
        <label>
          <span>asc</span>
          <Input
            type="radio"
            value="asc"
            currentValue={value}
            onChange={onAsc}
          />
        </label>
        <label>
          <span>desc</span>
          <Input
            type="radio"
            value="desc"
            currentValue={value}
            onChange={onDesc}
          />
        </label>
      </div>
    )
  );
};

const mapStateToProps = ({ todos: { filter, items } }) => ({
  value: filter,
  count: items.length,
});

const mapDispatchToProps = {
  onAsc: setAscFilter,
  onDesc: setDescFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FIlters);
