import React from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {
    const { data } = React.useContext(GlobalContext)

    if (data === null) return null

    return (
        <>
            {data.map((el) => {
                return (
                    <div key={el.id}>
                        <h1>{el.nome}</h1>
                        <h2>R$ {el.preco}</h2>
                        <img src={el.fotos[0].src} />
                    </div>
                )
            })}
        </>
    )
}

export default Produto
