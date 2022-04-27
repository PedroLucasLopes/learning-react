import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
            .then(response => response.json())
            .then((json) =>
                setData(json)
            )
    }, [])

    function cleanData() {
        return setData(null)
    }

    return <GlobalContext.Provider value={{ data, cleanData }}>{children}</GlobalContext.Provider>
}