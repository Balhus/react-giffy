import React, { useEffect, useState } from 'react';
import Gif from "./Gif";
import getGifs from '../services/getGifs';

export default function GifDetail({param,key }){
    const {keyword} = param
    const {idOfGif} = key
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
     //Use Effect se ejecuta cada vez que se renderiza, el segundo parametro es para las dependencias y han de ser un array
  //Si dejamos el array vacio, se ejecutara solo una vez
    console.log(idOfGif)
    useEffect(() => {
        setLoading(true)
        getGifs({keyword})
            .then(gifs => { 
                setGifs(gifs)
                setLoading(false)
            })
    },[keyword]) //Cada vez que cambie la keyword, renderiza de nuevo, porque lo hemos puesto como dependencia

    //Poner efecto loading
    if(loading) return <i>Cargando</i>

    return <div>
    {
        gifs.map(({ id, title, url }) =>
        {
            if(id === idOfGif){
                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={idOfGif}
                />
            }   
        })
    }
    </div>  
}