import React from 'react'

const header = ({ cor, texto, children }) => {
    return (
        <>
            <header>
                <h1 style={{ color: cor }}>{texto},{children}</h1>
            </header>
        </>
    )
}

export default header