import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import Navbar from "./navbar";
import { requireAuth } from "../../requireAuth";

//? this is for next part of course where authentication is being set up
export default function Layout2(){
    
    //? way 1 of doing it
    // const navigate=useNavigate();
    // useEffect(() => {
    //     if (requireAuth() === false) {
    //         console.log("YES")
    //         navigate("/login");
    //     }
    // }, [navigate]);
    //? way 2 of doing it
    const isLoggedIn=requireAuth();
    if(isLoggedIn==="false"){
        return (<Navigate to="/login" state={{message: "You need to login first!"}} />)
    }
    //state is passed and accessed in login component, is check if its null or not and displayed accordingly


    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}