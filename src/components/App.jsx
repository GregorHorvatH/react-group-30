import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from 'react';
import Text from './Text';

import Counter from './Counter';
import LoginForm from './LoginForm';

// const myUseState = (initialValue) => {
//   let value = initialValue;
//   const setValue = (newValue) => value = newValue;

//   return [value, setValue];
// };

const App = () => {
  const [value, setValue] = useState(0);
  const [isShowText, setIsShowText] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [text, setText] = useState(
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam' +
      'repellat expedita, dolorem temporibus vel earum iure architecto fugit' +
      'soluta sapiente rem ducimus culpa eius iusto ipsum, necessitatibus' +
      'laboriosam nulla aliquid.',
  );
  const [isLoading, setIsLoading] = useState(false);

  const increment = () => setValue(value + 1);
  const reset = useCallback(() => setValue(0), [setValue]);

  const toggleShowText = () => setIsShowText(!isShowText);

  const myInput = useRef();
  const myCounter = useRef();

  // useEffect(() => console.log('render')); // after every render
  useEffect(() => console.log('app did mount'), []); // did mount
  // useEffect(() => {
  //   // document.getElementById('login').focus();
  //   myInput.current.focus();
  // }, []); // did mount

  useEffect(() => console.log(myCounter), [myCounter]);

  // useEffect(() => console.log('isShowText:', isShowText), [value, isShowText]); // did update: value

  useLayoutEffect(() => {
    console.log(text);

    if (isLoading) {
      setText('Welcome!');
    } else {
      setText('Please wait!');
    }
  }, [isLoading]);

  return (
    <div className="app">
      <h1>React - Hooks</h1>
      <p>{text}</p>

      <LoginForm />

      <p>{value}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>

      <hr />
      {/* <label>
        <span>Login:</span>
        <input
          type="text"
          ref={myInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <br />
      <label>
        <span>Password:</span>
        <input type="password" />
      </label> */}

      <hr />
      <button onClick={toggleShowText}>Show text</button>
      <br />
      {isShowText && <Text reset={reset} />}

      <hr />
      <button
        onClick={() => {
          myCounter.current.increment();
        }}
      >
        Counter +
      </button>

      <hr />
      <Counter ref={myCounter} />

      {/* <img src={process.env.PUBLIC_URL + '/img/cat.jpg'} alt="" /> */}
    </div>
  );
};

export default App;
