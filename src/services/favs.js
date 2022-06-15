const API_URL = 'http://localhost:3000/api/';

export default function favs({ id, token }) {
    return fetch(`${API_URL}/addFav`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, token })
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json()
    }).then(res => {
        const { resp } = res;
        return resp;
    })
}