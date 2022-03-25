import React from 'react'

const Produto = ({ produto }) => {
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        if (produto !== null) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    setData(json)
                })
        }
    }, [produto])

    if (data === null) {
        return null
    }
    return (
        <>
            <h1>{data.nome}</h1>
            <p>{data.preco}</p>
        </>
    )
}

export default Produto
