import React, { useEffect, useState } from "react";
import VanCard from "./vanCard";
import { useSearchParams } from "react-router-dom";
import {getVans} from "../api";
export default function Vans(){

    //%useSearchParams hook : used to get the query string ?type=rugged when the component reloades, by default its ""
    const [SearchParam, setSearchParam]=useSearchParams();
    const typeFilter=SearchParam.get("type"); //later set search param is defined which injects the word type so yk

    //%general stuff changed from a to b

    const [VansData, setVansData]=useState([]) //vansdata to be displayed
    const [loaderState, setLoaderstate]=useState(false); //loading... state
    const [Error, setError]=useState(null);// error while fetching state
    //? a
    // useEffect(()=>{
    //     const temp=fetch("/api/vans")
    //     .then(res => res.json())
    //     .then(val=> setVansData(val.vans))
    // },[])
    //?b 
    useEffect(()=>{ //async function cant be directly used because of useEffect
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


    //? Filtering based on the searchParam query string, if null no filter is applied
    const FilteredArray = typeFilter? (VansData.filter(van => van.type===typeFilter)): (VansData)

    const ToDisplay=FilteredArray.map( van => <VanCard key={van.id} {...van} typef={{search: `?${SearchParam.toString()}`}}/>) //complete {...van} is spread out, and typef object is passed to impliment back button functionality
    if(ToDisplay.length===0){ //could also be handled by loadingstate
        return(
            <h2 className="host-vans-list">Loading...</h2>
        )
    }
    //dont learn this code, copy pase it from pastebin paste @dvjsharma
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

    if(loaderState===true){ //oh well idk which one is being used now
        return <h1>Loading...</h1>
    }
    if(Error){
        return <h1>An error occured {Error.message}</h1>
    }
    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                {/* this approach is not used because its hard coding string, my handle filterchange function is appending the string and keeping previous state intact */}
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