import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 50px;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const CounterStyled = ({ title }) => {
  const value = 0;

  return (
    <div className="counter">
      <h2>{title}</h2>
      <div>
        <Button>-</Button>
        <p>{value}</p>
        <Button>+</Button>
      </div>
    </div>
  );
};

export default CounterStyled;
