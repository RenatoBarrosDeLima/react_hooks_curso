import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const classReverse = reverse ? 'reverse' : '';

  const handleClick = () => {
    // setReverse(!reverse);
    // Outra forma do useState, usando o callBack do valor atual da função
    setReverse((prevCounter) => !prevCounter);
  };

  const handleIncremente = () => {
    // setCounter(counter + 1);
    // Outra forma do useState, usando o callBack do valor atual da função
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${classReverse}`} alt="logo" />

        <h1> Contador: {counter}</h1>

        <p>
          <button type="button" onClick={handleClick}>
            {reverse ? 'Normal' : 'Reverse'}{' '}
          </button>
        </p>

        <p>
          <button type="button" onClick={handleIncremente}>
            Increment
          </button>
        </p>
      </header>
    </div>
  );
};

export default App;
