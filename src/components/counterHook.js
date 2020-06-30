import { useState, useDebugValue } from 'react';

export default function CounterHook() {
  const [value, setValue] = useState(0);
  const reset = () => setValue(0);

  useDebugValue(`value: ${value}`);

  return [value, setValue, reset];
}
