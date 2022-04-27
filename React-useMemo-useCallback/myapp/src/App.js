import React from "react";

function App() {
  const [contar, setContar] = React.useState(0)

  window.localStorage.setItem('number', contar)

  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem('number')
    console.log('memo')
    console.log(localItem)
  }, [])

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
}

export default App;
