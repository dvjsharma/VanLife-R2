import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar(){
    const activeStyles={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <nav className="host-nav">
            <NavLink to=""
                end
                style={({isActive})=> isActive? activeStyles : null}
            >Dashboard</NavLink>
            <NavLink to="income"
                style={({isActive})=> isActive? activeStyles : null}
            >Income</NavLink>
            <NavLink to="reviews"
                style={({isActive})=> isActive? activeStyles : null}
            >Reviews</NavLink>
        </nav>
    )
        

}