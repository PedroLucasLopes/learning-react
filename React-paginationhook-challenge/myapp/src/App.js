import React from 'react'
import Produto from './Produto.js';

function App() {

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setData(json);

    setLoading(false);
  }

  return (
    <>
      <button style={{ color: '#f9f9f9', backgroundColor: '#34a1eb', border: 'none', borderRadius: '2px', padding: '1rem 3rem', marginRight: '2rem', cursor: 'pointer', fontSize: '1.1rem' }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ color: '#f9f9f9', backgroundColor: '#34a1eb', border: 'none', borderRadius: '2px', padding: '1rem 3rem', marginRight: '2rem', cursor: 'pointer', fontSize: '1.1rem' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ color: '#f9f9f9', backgroundColor: '#34a1eb', border: 'none', borderRadius: '2px', padding: '1rem 3rem', marginRight: '2rem', cursor: 'pointer', fontSize: '1.1rem' }} onClick={handleClick}>
        Tablet
      </button>
      {loading && <p>Loading...</p>}
      {!loading && data && <Produto data={data} />}
    </>
  );
}

export default App;
