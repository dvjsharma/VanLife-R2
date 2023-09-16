import React from "react";
import { Link } from "react-router-dom";

export default function VanCard({imageUrl, name, type, price, description, id, typef}){
    // console.log(typef.search) this is NOT state, this is actually param value which i was forced to pass from parent component
    // console.log(typef) //this will be passed to link below its an object {search : SearchParams.toString()}
    return(
            <div key={id} className="van-tile">
               <Link to={`${id}`} state={typef}>  {/* Passed the state here */}
                    <img src={imageUrl} />
                    <h3>{name}</h3>
                <div className="van-info">
                    <p>${price}<span>/day</span></p>
                </div>
                <i className={`van-type ${type} selected`}>{type}</i>
                </Link> 
            </div>
    )
}
