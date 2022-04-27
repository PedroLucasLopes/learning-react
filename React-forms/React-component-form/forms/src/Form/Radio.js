import React from 'react'

const Radio = ({ options, value, setValue, ...props }) => {
    return (
        <>
            {options.map((option, i) => {
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="radio"
                            value={option}
                            checked={value === option}
                            onChange={({ target }) => setValue(target.value)}
                            {...props}
                        />
                        {option}
                    </label>
                )
            })}
        </>
    )
}

export default Radio
