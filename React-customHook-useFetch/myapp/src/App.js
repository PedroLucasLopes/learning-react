import React from 'react';
import useFetch from './useFetch';

function App() {

  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto/');

      console.log(response)
    }
    fetchData()
  }, [])

  if (error) return <p>{error}</p>
  if (loading) return <p>Carregando...</p>
  if (data)
    return (
      <>
        {data.map((el) => {
          return (
            <div style={{ border: '1px solid black' }} key={el.id}>
              <p>{el.nome}</p>
              <p>{el.preco}</p>
            </div>
          )
        })}
      </>
    );
  else return null;
}

export default App;
