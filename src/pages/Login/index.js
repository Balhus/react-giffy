import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import useUsers from "hooks/useUsers";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, pushLocation] = useLocation();
    const { isLogged, isLoginLoading, hasLoginError, login } = useUsers()

    useEffect(() => {
        if (isLogged) {
            pushLocation('/');
        }
    }, [isLogged, pushLocation]);

    function handleSubmit(e) {
        e.preventDefault()
        login({ username, password })
    }



    return (
        <>
            <h2>Login</h2>
            {isLoginLoading && <strong>Loading...</strong>}
            {!isLoginLoading && (
                <form onSubmit={handleSubmit}>
                    <input placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} />
                    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button type='submit'>Login</button>
                </form>
            )}
            {hasLoginError && <strong>Credentials are invalid</strong>}

        </>
    )
}