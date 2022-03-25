import React from 'react'
import ListItem from './ListItem'

const HeaderList = () => {
    return (
        <>
            <ul className="header__list">
                <ListItem path="/" content="Home" />
                <ListItem path="produtos.js" content="Produtos" />
            </ul>
        </>
    )
}

export default HeaderList
