import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                News App
            </div>
            <nav className="nav">
                <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
            </nav>
        </header>
    )
}

export default Header