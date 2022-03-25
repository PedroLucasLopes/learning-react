import React from "react";

function App() {
  const [contar, setContar] = React.useState(0)

  function handleClick() {
    return setContar(contar + 1)
  }

  React.useEffect(() => {
    console.log('EXECUTOU')
  })

  React.useEffect(() => {
    document.title = `Contador ${contar}`
  }, [contar])

  return (
    <>
      <h1>Contagem: {contar}</h1>
      <button onClick={handleClick}>Atualiza</button>
    </>
  );
}

export default App;
