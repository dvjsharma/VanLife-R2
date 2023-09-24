import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "../Assets/images/person-circle.svg"

export default function Navbar(){
    return(
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
            <NavLink to="vans"
                className={({isActive})=>(isActive? 'nav-active': null)}
            >Vans</NavLink>
            <NavLink to="host"
                className={({isActive})=>(isActive? 'nav-active': null)}
            >Host</NavLink>
            <NavLink to="about"
                className={({isActive})=>(isActive? 'nav-active': null)}
            >About</NavLink>
            <Link to="login" className="login-link">
                <img 
                    src={imageUrl}
                    className="login-icon"
                />
            </Link>
            </nav>
        </header>
    )
}