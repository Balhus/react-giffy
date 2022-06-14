import React, {useState} from 'react';
import {useLocation} from 'wouter';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, pushLocation] = useLocation();

    function handleSubmit(e){
        e.preventDefault()
        pushLocation('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button type='submit'>Login</button>
        </form>
    )
}