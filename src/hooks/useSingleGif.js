import { useGifs } from './useGifs';
import { useState, useEffect } from 'react'
import getSingleGif from 'services/getSingleGif';

export default function useSingleGif({ id }) {
    const { gifs } = useGifs();

    //Search for the gif
    const gifFromCache = gifs.find(singleGif =>
        singleGif.id === id
    )

    const [gif, setGif] = useState(gifFromCache)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        //If there is no gif stored, we call the service to get that Gif
        if (!gif) {
            setIsLoading(true)
            getSingleGif({id})
                .then(gif => {
                    setGif(gif)
                    setIsLoading(false)
                    setIsError(false)
                })
                .catch(err => {
                    setIsLoading(false)
                    setIsError(true)
                })

        }
    }, [gif, id])

    return { gif, isLoading, isError };

}