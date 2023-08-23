import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos(){
    const outlet=useOutletContext();
    return(
        <img src={outlet.Data.imageUrl} className="host-van-detail-image" />
    )
}