const API_URL = 'http://localhost:3000/api/';

export default function register({ username, password }) {
    return fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return true
    })
}