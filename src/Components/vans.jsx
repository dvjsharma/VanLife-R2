import React, { useEffect, useState } from "react";
import VanCard from "./vanCard";
import { Link, useSearchParams } from "react-router-dom";
export default function Vans(){
    //useSearchParams hook : ignore if visiting for the first time (1)
    const [SearchParam, setSearchParam]=useSearchParams();
    const typeFilter=SearchParam.get("type");
    console.log(typeFilter)


    //general stuff
    const [VansData, setVansData]=useState([]) 
    useEffect(()=>{
        const temp=fetch("/api/vans")
        .then(res => res.json())
        .then(val=> setVansData(val.vans))
    },[])

    //filtering (2)
    const FilteredArray = typeFilter? (VansData.filter(van => van.type===typeFilter)): (VansData)

    const ToDisplay=FilteredArray.map( data => <VanCard key={data.id} {...data}/>)
    if(ToDisplay.length===0){
        return(
            <h2 className="host-vans-list">Loading...</h2>
        )
    }
    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <Link to="?type=simple" className="van-type simple">Simple</Link>
                <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
                <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
                <Link to="." className="van-type clear-filters">Clear</Link>
            </div>
            <div className="van-list">
                {ToDisplay}
            </div>
        </div>
    )
}