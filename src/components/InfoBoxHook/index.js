import React, { useEffect } from 'react';

const InfoBox = ({ value = 0, showTimer = false }) => {
  useEffect(() => {
    console.log('Component Did Update');
  });

  useEffect(() => {
    console.log('Component Did Mount');
  }, []);

  useEffect(() => {
    console.log('Timer is chaged');
  }, [showTimer]);

  return (
    <div>
      <p>Counter: {value}</p>
      <p>Timer is {value ? 'on' : 'off'}</p>
    </div>
  );
};

export default InfoBox;
