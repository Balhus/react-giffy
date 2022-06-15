const API_URL = 'http://localhost:3000/api/';

export default function login({ username, password }) {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json()
    }).then(res => {
        const { token } = res;
        return token;
    })
}