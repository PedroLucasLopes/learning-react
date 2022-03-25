import React from 'react'

const ListItem = ({ path, content }) => {
    return (
        <>
            <li className="header__list--item">
                <a href={path}>
                    {content}
                </a>
            </li>
        </>
    )
}

export default ListItem
