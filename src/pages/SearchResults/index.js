import React, { useCallback, useRef, useEffect } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage, page } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({distance: '350px', externalRef: loading ? null : externalRef, once: false })

  // function handleNextPage(){ setPage(prevPage => prevPage + 1) }


//useCallback gets a function and mantains it trough renders, so it doesn't get created each time
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 1000
  ), [setPage])

  useEffect(() => {
    console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage()
    console.log(page)
  }, [isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }

  </>
}