import React from 'react'

const Select = ({ items, value, setValue, ...props }) => {
    return (
        <select
            value={value}
            onChange={({ target }) => setValue(target.value)}
            {...props}
        >
            <option
                value=""
                disabled
            >
                Selecione
            </option>

            {items.map((item, i) => {
                return (
                    <option
                        key={i}
                        value={item}
                    >
                        {item}
                    </option>
                )
            })}
        </select>
    )
}

export default Select
