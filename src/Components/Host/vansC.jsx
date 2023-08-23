import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export default function VanC(){
    const params=useParams();
    const[Data, setData]=useState({})
    useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(val=>setData(val.vans))
    },[])
    return(
        <>
        <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
        <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={Data.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${Data.type}`}
                        >
                            {Data.type}
                        </i>
                        <h3>{Data.name}</h3>
                        <h4>${Data.price}/day</h4>
                    </div>
                </div>
                <nav>
        <div className="host-van-detail-nav">
            <NavLink
                to="."
                end
                className={({isActive})=> isActive? "nav-active" : null}
            >Details</NavLink>
            <NavLink
                to="pricing"
                className={({isActive})=> isActive? "nav-active" : null}
            >Pricing</NavLink>
            <NavLink
                to="photos"
                className={({isActive})=> isActive? "nav-active" : null}
            >Photos</NavLink>
        </div>
        </nav>
        <Outlet/>
        </div>
        </>
    )
}