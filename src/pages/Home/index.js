import React, { useCallback } from "react"
import { useLocation } from "wouter"
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import TreandingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'
import Helmet from "react-helmet"


export default function Home() {
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

  const handleSubmit = useCallback(({keyword}) => {
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  },[pushLocation])

  

  return (
    <>
    <Helmet>
      <title>Home | Giffy</title>
    </Helmet>
      <SearchForm onSubmit={handleSubmit}/>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TreandingSearches />
        </div>
      </div>
    </>
  )
}