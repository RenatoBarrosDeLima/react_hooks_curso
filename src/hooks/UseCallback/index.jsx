import { useState, useEffect } from 'react';

import '../../App.css';

const eventFn = () => {
  console.log('h1 clicado');
};

const UseCallBack = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // // componentDidUpdate - executa toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // // componentDidMount - executa uma única vez quando o componente é montado
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);

  // Com dependência - executa toda vez qeu a depêndencia mudar
  useEffect(() => {
    console.log('Contador mudou para ', counter);
  }, [counter]);

  // componentWillUnmount - limpar lixos feitos anteriormente antes que o componente seja desmontado
  // Uso do useEffect para limpar lixos feitos anteriormente, no caso o removeEventListener
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUnmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <div className="App">
      <p> Teste 1 </p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Add + 1
      </button>
      <button type="button" onClick={() => setCounter2(counter2 + 1)}>
        Add + 2
      </button>
    </div>
  );
};

export default UseCallBack;
