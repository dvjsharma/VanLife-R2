import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Details(){
    const outlet=useOutletContext();
    return(
        <section className="host-van-detail-info">
            <h4>Name: <span>{outlet.Data.name}</span></h4>
            <h4>Category: <span>{outlet.Data.type}</span></h4>
            <h4>Description: <span>{outlet.Data.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}