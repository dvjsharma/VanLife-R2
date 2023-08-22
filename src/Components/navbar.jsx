import React from "react";
import { Link, NavLink } from "react-router-dom";

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
            </nav>
        </header>
    )
}