const API_URL = 'http://localhost:3000/api/';

export default function getFavs({token }) {
    return fetch(`${API_URL}/getFavs`, {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json()
    }).then(res => {
        const { resp } = res;
        return resp;
    })
}