import React, { useEffect, useState } from 'react';
import Gif from "../Gif/index";
import getGifs from '../../services/getGifs';
import Spinner from '../Spinner/index'

export default function ListOfGifs({ keyword }) {
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

    //Poner efecto loading
    if (loading) return <Spinner/>

    //La key sirve para identificar el map y que en algunos casos no haga falta renderizar todo sino solo la key seleccionada
    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={id}
                />
            )
        }
    </div>
}