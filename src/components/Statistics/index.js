import React from 'react';

const Statistics = ({ value }) => (
  <div className="statistics">
    <h3>{value}</h3>
  </div>
);

Statistics.defaultProps = {
  value: 0,
};

export default Statistics;
