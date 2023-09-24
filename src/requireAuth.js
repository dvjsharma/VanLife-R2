import React from "react";

export function requireAuth(){
    const isLoggedIn=localStorage.getItem("UserAuth")
    return isLoggedIn
} 