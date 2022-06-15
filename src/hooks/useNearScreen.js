import { useState, useEffect, useRef } from 'react'

export default function useNearScreen({ distance = '150px', externalRef, once = true } = {}) {
    const [isNearScreen, setIsNearScreen] = useState(false);
    const fromRef = useRef();

    useEffect(() => {
        let observer

        //We store the ref, if its external the external, otherwise we store the one in the hook
        const element = externalRef ? externalRef.current : fromRef.current;

        /**
         * Sets state to true when the element referenced is in the viewport
         * @param {*} entries Array of elements that we are observing
         */
        const onChange = (entries, observer) => {
            const el = entries[0];
            if (el.isIntersecting && !isNearScreen) { //isIntersecting is the property that tells when the element we are observing is in the viewport
                setIsNearScreen(true)
                once && observer.disconnect(); //When it's true, stop the observer
            } else {
                !once && setIsNearScreen(false)
            }
        }

        //Pollyfill for IE11. If the browser does not support intersectionObserver, we import dinamically the intersection-observer
        //This way we don't import it if the browser already has it
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance // When the distance is 100px from viewport, starts to load
            })

            element && observer.observe(element) //with .current we access the value of the element we have stored in de ref
        })

        return () => observer && observer.disconnect();
    })

    return { isNearScreen, fromRef }
}