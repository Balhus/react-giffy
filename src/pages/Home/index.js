import { Link, useLocation } from 'wouter';
import {useState} from 'react'

const POPULAR_GIFS = ['Matrix', 'España', 'Coches', 'Bananas']

export default function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`)
        
    }
    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return (
        <>
        <h3>Los gifs mas populares</h3>
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} placeholder="Search a gif..." type="text" value={keyword}></input>
        </form>
            <ul>
                {
                    POPULAR_GIFS.map(gif => (
                        <li key={gif}>
                            <Link to={`/search/${gif}`}>Buscar {gif}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );

}