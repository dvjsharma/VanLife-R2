import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Van(){
    const param= useParams()
    const [van, setvan]=useState(null)
    useEffect(()=>{
        fetch(`/api/vans/${param.id}`)
        .then(res => res.json())
        .then(val => setvan(val.vans))
    },[param.id])
    // console.log(van);
    // console.log(param.id)s

    //for round 2
    const stateFilter= useLocation();
    // console.log(stateFilter) //gives loads of handy functions 
    const filter=(stateFilter.state.search==="?" ? "" : stateFilter.state.search)
    // console.log(filter)

    return(
        
        <div className="van-detail-container">
            {van ? (
            <>
                <Link
                to={`..${filter}`}
                relative="path"
                className="back-button"
                >&larr; <span>Back to {filter==="" ? "all" : van.type} vans</span></Link>

                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            </>
            ) : <h2>Loading...</h2>}
        </div>
    )
}