import React, { useEffect, useState } from 'react'
import getFavs from 'services/getFavs';
const Context = React.createContext({})

export function UserContextProvider({ children }) {
    //Se pone una funcion en el state, porque cuando se renderiza el componente, aunque no se actualice el estado, 
    //ejecuta lo que hay dentro del estado inicial, y con el sessionStorage, el thread lo bloquea, con una funcion solo lo ejecuta una vez
    const [token, setToken] = useState(() => window.sessionStorage.getItem('token'))
    const [favs, setFavs] = useState([])

    useEffect(() => {
        if (!token) {
            return setFavs([])
        }
        getFavs({ token })
            .then(setFavs)
    }, [token])

    return <Context.Provider value={{ favs, setFavs, token, setToken }}>
        {children}
    </Context.Provider>
}

export default Context