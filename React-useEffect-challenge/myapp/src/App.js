import React from 'react';
import './index.css';
import Produto from './Produto.js'

function App() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const localProduct = window.localStorage.getItem('produto')
    if (localProduct !== null) {
      setProduto(localProduct)
    }
  }, []);

  React.useEffect(() => {
    if (produto !== null) {
      window.localStorage.setItem('produto', produto);
    }
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      <Produto produto={produto} />
    </>
  );
}

export default App;
