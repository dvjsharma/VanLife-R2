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

//? Here destructuring is used to get the isActive property from the props object, since the event is an object the object is straight away desteructured to get the isActive property. If the event has more than one prop, still it woild work as same name prop would get same value