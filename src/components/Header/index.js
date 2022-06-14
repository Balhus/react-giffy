import React, { useState } from "react";
import { Link } from "wouter";
import "./Header.css"

export default function Header() {
    const [isLogged, setIsLogged] = useState(false)
    return (
        <header className="f-header">
            {
                !isLogged ?
                    <Link to="/login">
                        Login
                    </Link>
                    : <Link to="/login">
                        Log out
                    </Link>
            }
        </header>
    );
}