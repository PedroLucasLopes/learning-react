function App() {
  function handleHello() {
    alert('(☞ ͡° ͜ʖ ͡°)☞ Funcionando')
  }

  function handleScroll(event) {
    console.log(event)
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <>
      <div style={{ height: '200vh' }}>
        <button onClick={handleHello}>Clique aqui</button>
      </div>
    </>
  );
}

export default App;
