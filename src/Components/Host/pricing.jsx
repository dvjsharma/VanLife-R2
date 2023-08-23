import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing(){
    const outlet=useOutletContext();
    return(
        <h2 className="host-van-price">${outlet.Data.price}<span>/day</span></h2>
    )
}