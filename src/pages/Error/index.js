import React from 'react'
import { useLocation } from "wouter"
import SearchForm from 'components/SearchForm'
import Helmet from 'react-helmet'


export default function Error() {

    const [location, pushLocation] = useLocation()

    function goHome() {
        pushLocation("/")
    }

    return (
        <>
            <Helmet>
                <title>Oops not found </title>
            </Helmet>
            <SearchForm />
            <h1>404 NOT FOUND</h1>
            <button onClick={goHome}>Go Back Home</button>
        </>
    )
}