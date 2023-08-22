import React, { useEffect, useState } from "react";
import VanCard from "./vanCard";

export default function Vans(){
    const [VansData, setVansData]=useState([]) 
    useEffect(()=>{
        const temp=fetch("/api/vans")
        .then(res => res.json())
        .then(val=> setVansData(val.vans))
    },[])
    const ToDisplay=VansData.map( data => <VanCard key={data.id} {...data}/>)
    if(ToDisplay.length===0){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {ToDisplay}
            </div>
        </div>
    )
}