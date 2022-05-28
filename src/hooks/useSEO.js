import { useEffect, useRef } from "react";

export default function useTitle({description, title}){
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))
    const prevTitle = useRef(document.title);
    
    useEffect(() => {
        const previousTitle = prevTitle.current;
        document.title = `${title} | Giffy`;

        //Se ejecuta cada vez que se ejecuta el efecto excepto la primera, tambien cuando se desmonta el componente
        return () => document.title = previousTitle
    },[title])

    useEffect(() =>{
        const metaDescription = document.querySelector('meta[name="description"]');
        const previousDescription = prevDescription.current;

        if(description){
            metaDescription.setAttribute('content', description)
        }

        return () => metaDescription.setAttribute('content', previousDescription)
    }, [description] )
}