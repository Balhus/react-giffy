import React, { useState, useContext, useCallback } from 'react';
import UserContext from 'context/UserContext';
import LoginService from 'services/login';
import FavService from 'services/favs';

export default function useUser() {
    const { token, setToken, favs, setFavs } = useContext(UserContext);
    const [state, setState] = useState({ loading: false, error: false }); //Controll the loading and error of the login

    const login = useCallback((username, password) => {
        setState({ loading: true, error: false });
        LoginService({ username, password })
            .then(jwt => {
                window.sessionStorage.setItem('token', jwt);
                setState({ loading: false, error: false });
                setToken(jwt)
            })
            .catch(err => {
                window.sessionStorage.removeItem('token');
                console.log(err)
                setState({ loading: false, error: true });
            })
    }, [setToken])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('token');
        setToken(null);
    }, [setToken])

    const addFav = useCallback((id) => {
        FavService({id, token})
        .then(setFavs)
        .catch(err => console.log(err))
    }, [setFavs, token])
    
    return {
        isLogged: Boolean(token),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        favs,
        login,
        logout,
        addFav
    }
}