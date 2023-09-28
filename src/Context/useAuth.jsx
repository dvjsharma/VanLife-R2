import userEvent from "@testing-library/user-event";
import React, { Children, createContext, useContext, useState } from "react";

export const AuthContext = createContext({ //context variable just like class, used to define an object
    userData: null,
    isloggedin: false   //both of these are optional, but saves you from runtime errors 
})

export const AuthProvider = ({children})=>{  //context provider which make all the children an instance of the above classes made
    const [userData, setuserData]=useState(null);
    const [isloggedin, setisloggedin]=useState(false);
    return(
        <AuthContext.Provider value={{userData, setuserData, isloggedin, setisloggedin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){ //a custom hook to make stuff easy to acces
    return useContext(AuthContext)
}