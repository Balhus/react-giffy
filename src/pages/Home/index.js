import { Link } from 'wouter';

const POPULAR_GIFS = ['Matrix', 'España', 'Coches', 'Bananas']

export default function Home({ params }) {

    return (
        <>
        <h3>Los gifs mas populares</h3>
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