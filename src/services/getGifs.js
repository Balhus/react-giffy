import {API_URL, API_KEY} from './settings'


const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 10, keyword = 'morty', page = 0, rating='g', lang='en'} = {}) {
  //Offset es desde que resultado empieza, si es 50, se saltara los 50 primeros resultados
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${lang}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}