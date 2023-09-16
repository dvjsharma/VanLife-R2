import React, { useEffect, useState } from "react";
import VanCard from "./vanCard";
import { Link, useSearchParams } from "react-router-dom";
import {getVans} from "../api";
export default function Vans(){
    //%useSearchParams hook : ignore if visiting for the first time (1)

    const [SearchParam, setSearchParam]=useSearchParams();
    const typeFilter=SearchParam.get("type");

    //%general stuff changed from a to b

    const [VansData, setVansData]=useState([]) 
    const [loaderState, setLoaderstate]=useState(false);
    const [Error, setError]=useState(null);
    //? a
    // useEffect(()=>{
    //     const temp=fetch("/api/vans")
    //     .then(res => res.json())
    //     .then(val=> setVansData(val.vans))
    // },[])
    //?b 
    useEffect(()=>{
        const loader = async()=>{
            setLoaderstate(true)
            try{
                const data = await getVans();
                setVansData(data)
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoaderstate(false)
            }
        }
        loader()
    },[]);


    //filtering (2)
    const FilteredArray = typeFilter? (VansData.filter(van => van.type===typeFilter)): (VansData)

    const ToDisplay=FilteredArray.map( van => <VanCard key={van.id} {...van} typef={{search: `?${SearchParam.toString()}`}}/>)
    if(ToDisplay.length===0){
        return(
            <h2 className="host-vans-list">Loading...</h2>
        )
    }
    function handleFilterChange(key, value) {
        setSearchParam(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else  {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    const filterButton =<button
        onClick={() => handleFilterChange("type", null)}
        className="van-type clear-filters">Clear filter</button>

    if(loaderState===true){
        return <h1>Loading...</h1>
    }
    if(Error){
        return <h1>An error occured {Error.message}</h1>
    }
    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                {/* <Link to="?type=simple" className="van-type simple">Simple</Link>
                <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
                <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
                <Link to="." className="van-type clear-filters">Clear</Link> */}
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${typeFilter==="simple" ? "selected" : ""}`}
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${typeFilter==="luxury" ? "selected" : ""}`}
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${typeFilter==="rugged" ? "selected" : ""}`}
                >Rugged</button>
                {/* conditionally rendering clear button when filter is added */}
                {typeFilter ? (filterButton): ""} 

            </div>
            <div className="van-list">
                {ToDisplay}
            </div>
        </div>
    )
}