import ListOfGifs from '../../components/ListOfGifs/index';
import { useEffect, useState } from 'react';
import getGifs from '../../services/getGifs';
import Spinner from '../../components/Spinner/index'


export default function SearchResults({ params }) {
    const { keyword } = params;

    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    //Use Effect se ejecuta cada vez que se renderiza, el segundo parametro es para las dependencias y han de ser un array
    //Si dejamos el array vacio, se ejecutara solo una vez

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword]) //Cada vez que cambie la keyword, renderiza de nuevo, porque lo hemos puesto como dependencia


    return (
        <>
            {loading
                ? <Spinner />
                : <ListOfGifs gifs={gifs} keyword={keyword} />
            }
        </>
    )
}