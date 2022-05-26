import React, { useCallback, useRef, useEffect } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import throttle  from 'lodash/throttle'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage, page } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ distance: '500px', externalRef: loading ? null : externalRef, once: false })

  //useCallback gets a function and mantains it trough renders, so it doesn't get created each time
  //throttle and debounce make that despite how many times you call a function, it will only execute it once while the delay has not been exceeded
  const debounceHandleNextPage = useCallback(throttle(
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