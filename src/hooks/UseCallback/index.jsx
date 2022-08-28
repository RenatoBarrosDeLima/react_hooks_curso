import React, { useState, useCallback } from 'react';
import P from 'prop-types';

import '../../App.css';

// Aqui é usado o hook memo para memorizar o componente e caso necessário não precisar renderizar novamente
const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho, renderizou');
  return (
    <button type="button" onClick={() => incrementButton(10)}>
      Add + 1
    </button>
  );
});

const UseCallBack = () => {
  const [counter, setCounter] = useState(0);

  // Aqui foi usado o valor antigo do useState para evitar uma nova renderização
  // O useCallback é usado para memorizar a função e melhorar o desempenho evitando uma nova redenrização
  const incrementCounter = useCallback((num) => {
    setCounter((prevCounter) => prevCounter + num);
  }, []);

  console.log('Pai, renderizou');

  return (
    <div className="App">
      <p> Teste 1 </p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
};

Button.propTypes = {
  incrementButton: P.func,
};

export default UseCallBack;
