import React from 'react'
import Gif from '../Gif'
import './ListOfGifs.css'

 function ListOfGifs ({gifs}) {
  return <div className='ListOfGifs'>
    {
      // Con el restOfGifs, cada vez se crea un nuevo array, 
      //por lo que React detecta que las props han cambiado aunque no lo hayan hecho para ti, por lo que el React.memo de Gif no va a funcionar 
      //ya que siempre va a detectar que las props antiguas y nuevas cambian
      gifs.map(({id, title, url, ...restOfGifs}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
          extraInfo={restOfGifs}
        />
      )
    }
  </div>
}

export default React.memo(ListOfGifs)