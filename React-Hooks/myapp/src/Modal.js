import React from 'react'

const Modal = ({ modal, setModal }) => {
    if (modal) {
        return (
            <>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>Esse é um modal</p>
                    <button style={{ backgroundColor: '#e65643', color: '#f9f9f9', fontSize: '.8rem', border: '1px solid black', borderRadius: '3px', padding: '8px 12px', margin: '20px', cursor: 'pointer' }} onClick={() => {
                        setModal(false)
                    }}>
                        X
                    </button>
                </div>
            </>
        )
    } else {
        return null
    }
}

export default Modal
