import React from 'react';
import Login from 'components/Login'
import Helmet from "react-helmet"


export default function LoginPage() {

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h2 style={{ textAlign: "center" }}>Enter Login</h2>
            <Login />
        </>
    )
}