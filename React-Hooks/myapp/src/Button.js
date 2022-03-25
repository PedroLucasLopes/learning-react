import React from 'react'

const Button = ({ setModal }) => {
    return (
        <>
            <button style={{ backgroundColor: '#3999cc', color: '#f9f9f9', fontSize: '2rem', border: '1px solid black', borderRadius: '3px', padding: '15px 20px', margin: '20px', cursor: 'pointer' }} onClick={() => {
                setModal(true)
            }}>Abrir</button>
        </>
    )
}

export default Button
