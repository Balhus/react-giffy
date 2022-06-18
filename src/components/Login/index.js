import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import useUsers from "hooks/useUsers";
import './Login.css'

export default function Login({onLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, pushLocation] = useLocation();
    const { isLogged, isLoginLoading, hasLoginError, login } = useUsers()

    useEffect(() => {
        if (isLogged) {
            pushLocation('/');
            onLogin && onLogin();
        }
    }, [isLogged, pushLocation, onLogin]);

    function handleSubmit(e) {
        e.preventDefault()
        login({ username, password })
    }



    return (
        <div className="form-container">
            {isLoginLoading && <strong>Loading...</strong>}
            {!isLoginLoading && (
                <form className="form" onSubmit={handleSubmit}>
                    <label for="username">
                        Username
                    </label>
                    <input placeholder='username' id="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                    <label for="password">
                        Password
                    </label>
                    <input type="password" placeholder='password' id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button type='submit' className="submit-btn">Login</button>
                </form>
            )}
            <br/>
            {hasLoginError && <strong>Credentials are invalid</strong>}

        </div>
    )
}