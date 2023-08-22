import React from "react";
import { Link } from "react-router-dom";

export default function VanCard({imageUrl, name, type, price, description, id}){
    return(
            <div key={id} className="van-tile">
               <Link to={`/vans/${id}`}>
                    <img src={imageUrl} />
                    <h3>{name}</h3>
                </Link> 
                <div className="van-info">
                    <p>${price}<span>/day</span></p>
                </div>
                <i className={`van-type ${type} selected`}>{type}</i>
            </div>
    )
}