import React from 'react'
import {Link} from 'wouter'
import Fav from 'components/Fav'
import './Gif.css'

function Gif ({ title, id, url }) {
  return (
    <div className="Gif">
      <div className="gif-buttons">
        <Fav id={id}/>
      </div>
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>

  )
}

//Personalizamos el memo para que si las dos is son iguales, retorne true y no renderice de nuevo el componente.
//Esto se puede hacer en este componente porque sabemos que si la id no cambia, el titulo y la url siempre seran el mismo, 
//no habra dos componentes con id=1 en el que el titulo sea diferente, asi solucionamos el caso del array que se crea en 
//ListOfGifs en los props que le pasamos
export default React.memo(Gif, (prevProps, nextProps) => { return prevProps.id === nextProps.id})