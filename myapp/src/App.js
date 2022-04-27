import React from 'react';

function App() {
  const [cart, setCart] = React.useState(0);
  const [notification, setNotification] = React.useState(null)
  const timeOutRef = React.useRef();

  function handleClick() {
    setCart(cart + 1);
    setNotification('Item adicionado ao carrinho');
    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      setNotification(null)
    }, 2000);
  }

  return (
    <>
      <p>{notification}</p>
      <button onClick={handleClick}>Adicionar ao carrinho</button>
      <p>Total de itens adicionados: {cart}</p>
    </>
  );
}

export default App;
