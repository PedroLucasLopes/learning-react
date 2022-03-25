import React from 'react'

const Produto = ({ data }) => {
    return (
        <>
            <h1>{data.nome}</h1>
            <p>R$ {data.preco}</p>
            <img style={{ border: '1px solid black' }} src={data.fotos[0].src} title={data.fotos[0].titulo} />
        </>
    )
}

export default Produto
