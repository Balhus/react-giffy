const apiKey = 'A7zBYuQQRrJCSEB5DjRrYi1VpS4nqS9K'

export default function getGifs({keyword = 'morty'} = {}) {
    const apiURL =
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const {title, id} = image
                const {url} = image.images.downsized_medium
                return {title, id, url}
            })
            return gifs
        })
}