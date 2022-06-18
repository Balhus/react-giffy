import React, { useState } from "react";
import { Link, useRoute } from "wouter";
import useUsers from "hooks/useUsers";
import "./Header.css"

export default function Header() {
    const { isLogged, logout } = useUsers()
    const [match] = useRoute('/login')
    const handleClick = e => {
        e.preventDefault()
        logout()
    }

    const renderLoginButton = () => {
        return !isLogged ?
            <Link to="/login">
                Login
            </Link>
            : <Link to="#" onClick={handleClick}>
                Log out
            </Link>
    }

    const content = match ?
        null :
        renderLoginButton()

    return (
        <header className="f-header">
            {content}
        </header>
    );
}