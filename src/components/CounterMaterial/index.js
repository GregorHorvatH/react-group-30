import React from 'react';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CounterMaterial = ({ title }) => {
  const value = 0;

  return (
    <Card className="counter">
      <CardContent>
        <h2>{title}</h2>
        <div>
          <Button variant="contained" color="primary">
            -
          </Button>
          <p>{value}</p>
          <Button variant="contained" color="primary">
            +
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CounterMaterial;
