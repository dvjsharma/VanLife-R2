import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imageUrl from "../Assets/images/person-circle.svg"
import useAuth from "../Context/useAuth";

export default function Navbar(){
    const {isloggedin} =useAuth()
    const navigate=useNavigate()
    // const [pathVal, setpathVal]=useState("login")
    // useEffect(()=>{
    //     if(pathVal==="login" && isloggedin){
    //         setpathVal("profile")
    //     }
    //     else{
    //         setpathVal("login")
    //     }
    // },[])
    // console.log(isloggedin)
    // function decider(){ //? no need of useEffect cause isloggedin change will cause re-render and hence the function will be called again
    //     if(!isloggedin){
    //         return "/login"
    //     }
    //     else{
    //         return "/profile"
    //     }
    // }
    function handelClick(){  //here Navigate and useNavigate are used differently be careful
        if(!isloggedin){
            navigate("/login")
        }
        else{
            navigate("/profile")
        }
    }
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
            <img 
                    src={imageUrl}
                    className="login-icon"
                    style={
                        {
                            marginRight: "0.9rem",
                        }
                    }
                    onClick={handelClick}
            />
            </nav>
        </header>
    )
}

//? Here destructuring is used to get the isActive property from the props object, since the event is an object the object is straight away desteructured to get the isActive property. If the event has more than one prop, still it woild work as same name prop would get same value