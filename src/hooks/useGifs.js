import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0;

export function useGifs ({ keyword, rating, lang } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)

    getGifs({ keyword: keywordToUse, rating, lang })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, setGifs, rating, lang])

  //Paginación
  useEffect(() =>{
    if(page === INITIAL_PAGE)return

    setLoadingNextPage(true)
    getGifs({keyword: keywordToUse, page, rating, lang})
    .then(nextGifs => {
      //Con una funcion dentro de un state, lo que devuelve en prevGifs es el valor que hay dentro, y podemos usarlo despues
      setGifs(prevGifs => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  }, [page, rating, lang, keywordToUse, setGifs])

  return {loading, loadingNextPage, gifs, setPage, page}
}