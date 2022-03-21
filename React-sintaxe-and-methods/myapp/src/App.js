import React from 'react'

const App = () => {
    const luana = {
        cliente: 'Luana',
        idade: 27,
        compras: [
            {
                produto: 'Notebook',
                preco: 'R$2500,00'
            },
            {
                produto: 'Geladeira',
                preco: 'R$3000,00'
            },
            {
                produto: 'Smartphone',
                preco: 'R$1500,00'
            }
        ],
        ativa: true
    }

    const mario = {
        cliente: 'Mario',
        idade: 31,
        compras: [
            {
                produto: 'Notebook',
                preco: 'R$2500,00'
            },
            {
                produto: 'Geladeira',
                preco: 'R$3000,00'
            },
            {
                produto: 'Smartphone',
                preco: 'R$1500,00'
            },
            {
                produto: 'Guitarra',
                preco: 'R$3500,00'
            }
        ],
        ativa: false
    }

    function total() {
        const total = clientes().compras
            .map((el) => {
                return Number(el.preco
                    .replace('R$', '')
                    .replace(',', '.'))
            })
            .reduce((acc, act) => {
                return acc + act
            })

        return total
    }

    function clientes() {
        return mario;
    }

    return (
        <>
            <section className="value-container">
                <h3>Nome: {clientes().cliente}</h3>
                <h4>Idade: {clientes().idade}</h4>
                <h4>Situação: <span style={{ color: clientes().ativa ? 'green' : 'red' }}>
                    {clientes().ativa ? 'Ativa' : 'Não Ativa'}
                </span></h4>
                <table className="table-container">
                    <thead>
                        <tr>
                            <td>
                                Produto
                            </td>
                            <td>
                                Preço
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            {clientes().compras
                                .map((el) => {
                                    return (
                                        <tr key={el.preco + 1}>
                                            <td>{el.produto}</td>
                                        </tr>
                                    )
                                })}
                        </td>
                        <td>
                            {clientes().compras
                                .map((el) => {
                                    return (
                                        <tr key={el.preco + 2}>
                                            <td>{el.preco}</td>
                                        </tr>
                                    )
                                })}
                        </td>
                    </tbody>
                </table>

                <h3>
                    Total gasto: R$ {total()}
                </h3>
                {total() > 10000 && <p>Você tem gastado muito</p>}
            </section>
        </>
    )
}

export default App