import React from "react";
import { Link } from "react-router-dom";

export default function VanCard({imageUrl, name, type, price, description, id, typef}){
    // console.log(typef.search) this is NOT state, this is actually param value which i was forced to pass from parent component
    // console.log(typef) //this will be passed to link below its an object {search : SearchParams.toString()}
    return(
            <div key={id} className="van-tile">
               <Link to={`${id}`} state={typef}>  {/* Link has a state value in which literally anything cxan be passed*/}
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


//? Here the question comes of passing stuff between various react components, consider giving this article a read its awesome
//? https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf 
//? Link (state prop)- useLocation hook pair can also be used
//? navigate (state prop)- useLocation hook pair can also be used
//? Outlet(context prop)- useOutletContext hook pair can also be used