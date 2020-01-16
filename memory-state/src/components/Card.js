import React from "react";
import path from "path"
import './Card.css'

//function Card ({image,handler}){
function Card (props){
    return(
        <div onClick={()=>props.handler(props.image)}>
            <img className="pic" src={ props.image } alt={props.image}/>
        </div>
    )

}

export default Card;