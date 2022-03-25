import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = ({ label, id }) => {
    return (
        <>
            <form>
                <label htmlFor={id}>{label}</label>
                <Input id={'nome'} type='text' required />
                <label htmlFor={id}>{label}</label>
                <Input id={'password'} type='password' />
                <Button />
            </form>
        </>
    )
}

export default Form
