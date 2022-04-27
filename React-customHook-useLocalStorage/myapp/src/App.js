import React from 'react';
import useLocalStorage from './useLocalStorage';

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <h2>Produto preferido: {produto}</h2>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </>
  );
}

export default App;
