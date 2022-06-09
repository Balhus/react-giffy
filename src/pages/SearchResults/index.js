import React, { useCallback, useRef, useEffect } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import throttle  from 'lodash/throttle'
import useSEO from 'hooks/useSEO'
import Helmet from 'react-helmet'
import SearchForm from 'components/SearchForm'

function SearchResults({ params }) {
  const { keyword, rating = 'g', lang = 'en' } = params
  const { loading, gifs, setPage} = useGifs({ keyword, rating, lang })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ distance: '500px', externalRef: loading ? null : externalRef, once: false })
  //SEO of the page 
  const title = gifs ? `${gifs.length} resultados de ${decodeURI(keyword)}`: loading ? 'Cargando...' : '';


  //useCallback gets a function and mantains it trough renders, so it doesn't get created each time
  //throttle and debounce make that despite how many times you call a function, it will only execute it once while the delay has not been exceeded
  const debounceHandleNextPage = useCallback(throttle(
    () => setPage(prevPage => prevPage + 1), 1000
  ), [setPage])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
      <Helmet>
      <title>{title} | Giffy</title>
      <meta name="description" content={title}></meta>
    </Helmet>
    <header>
    <SearchForm initialKeyword={keyword} initialRating={rating} initialLang={lang}/>

    </header>
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }

  </>
}

export default  React.memo(SearchResults)