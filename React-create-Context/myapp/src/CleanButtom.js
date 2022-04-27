import React from 'react'
import { GlobalContext } from './GlobalContext'

const CleanButtom = () => {
    const { cleanData } = React.useContext(GlobalContext)

    return (
        <div>
            <button onClick={() => cleanData()}>Limpar</button>
        </div>
    )
}

export default CleanButtom