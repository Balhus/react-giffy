import React, { useState } from "react";
import { Link } from "wouter";
import useUsers from "hooks/useUsers";
import "./Header.css"

export default function Header() {
    const {isLogged, logout} = useUsers()

    const handleClick = e => {
        e.preventDefault()
        logout()
    }

    return (
        <header className="f-header">
            {
                !isLogged ?
                    <Link to="/login">
                        Login
                    </Link>
                    : <Link to="#" onClick={handleClick}>
                        Log out
                    </Link>
            }
        </header>
    );
}