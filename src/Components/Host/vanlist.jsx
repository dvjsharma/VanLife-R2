import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VanList(){
    const [VanData, setVanData]=useState([]);
    useEffect(()=>{
        fetch('/api/host/vans')
        .then(res => res.json())
        .then(val => setVanData(val.vans))
    },[])
    const ToDisplay=VanData.map( van => (
        <Link
            to={`${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of well? idk`} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
            </div>
        </Link>
    ))
    return(
        <>  
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {VanData.length!==0 ? <div>{ToDisplay}</div>: <h3>Loading...</h3>}
            </div>
        </>
    )
}