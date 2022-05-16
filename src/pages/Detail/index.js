import React, { useEffect, useState } from 'react';
import Gif from "../../components/Gif/index";
import getGifs from '../../services/getGifs';
import Spinner from '../../components/Spinner/index'

export default function GifDetail({ params }) {
    const { id } = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    //Use Effect se ejecuta cada vez que se renderiza, el segundo parametro es para las dependencias y han de ser un array
    //Si dejamos el array vacio, se ejecutara solo una vez
    console.log(id)
    useEffect(() => {
        setLoading(true)
        // getGifs({ keyword })
        //     .then(gifs => {
        //         setGifs(gifs)
        setLoading(false)
        //     })
    }, []) //Cada vez que cambie la keyword, renderiza de nuevo, porque lo hemos puesto como dependencia

    //Poner efecto loading
    if (loading) return <Spinner />

    return <div>
        Gif con id: {id}
    </div>
}