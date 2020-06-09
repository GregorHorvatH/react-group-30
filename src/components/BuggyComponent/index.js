import React, { useState } from 'react';

const BuggyComponent = () => {
  const [value, setValue] = useState(0);

  if (value > 3) {
    throw new Error('My Custom Error Message!');
  }

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in
        commodi labore, et, soluta nihil accusantium voluptates perspiciatis
        fugit quas harum veritatis facilis assumenda reprehenderit. Quos
        necessitatibus saepe magnam optio.
      </p>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
};

export default BuggyComponent;
