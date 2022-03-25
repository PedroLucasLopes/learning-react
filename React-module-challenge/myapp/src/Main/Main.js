import React from 'react'

const Main = ({ name }) => {
    return (
        <>
            <h2 style={{ color: 'green' }}>{name}</h2>
            <p>
                Essa é nossa página {name}
            </p>
        </>
    )
}

export default Main
