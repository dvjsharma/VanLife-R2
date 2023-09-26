import React from "react";

export function requireAuth(){
    const isLoggedIn=localStorage.getItem("UserAuth")
    if(isLoggedIn===null){
        return "false"
    }
    return isLoggedIn
} 