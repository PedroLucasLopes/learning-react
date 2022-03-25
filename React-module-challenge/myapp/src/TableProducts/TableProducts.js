import React from 'react'

const TableProducts = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb RAM', '512gb'], id: 1 },
        { nome: 'Smartphone', propriedades: ['8gb RAM', '128gb'], id: 2 }
    ]

    return (
        <>
            <table style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Produto</td>
                        <td>Configuração</td>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(({ nome, propriedades, id }) => {
                        return (
                            <>
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{nome}</td>
                                    <td>{propriedades.join(', ')}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableProducts
