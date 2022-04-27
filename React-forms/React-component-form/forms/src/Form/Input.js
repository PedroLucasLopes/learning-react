import React from 'react'

const Input = ({ label, id, input, setValue, ...props }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={input}
                name={id}
                id={id}
                onChange={({ target }) => setValue(target.value)}
                {...props}
            />
        </>
    )
}

export default Input
