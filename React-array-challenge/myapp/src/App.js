import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766']
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d3494b', '#f37c59']
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786']
  }
]

function App() {
  const data = produtos.filter(({ preco }) => {
    return Number(preco.replace('R$ ', '')) > 1500
  })
  return (
    <>
      {
        data.map(({ id, nome, preco, cores }) => {
          return (
            <section key={id}>
              <h1>{nome}</h1>
              <h3>Preço: {preco}</h3>

              {cores.map((cor) => {
                return <p style={{ backgroundColor: cor, color: 'white' }} key={cor}>
                  {cor}
                </p>
              })
              }
            </section>
          )
        })
      }
    </>
  )
}

export default App;
