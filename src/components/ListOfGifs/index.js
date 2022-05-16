import React, { useEffect, useState } from 'react';
import Gif from "../Gif/index";
import getGifs from '../../services/getGifs';
import Spinner from '../Spinner/index'
import './ListOfGifs.css'

export default function ListOfGifs({ gifs, keyword }) {

    //La key sirve para identificar el map y que en algunos casos no haga falta renderizar todo sino solo la key seleccionada
    return (
        <>
            <h1>Resultado de la busqueda: {keyword}</h1>
            <div className="gif-container">
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
        </>
    );
}