import React from "react"
import { Link } from "gatsby"
import "../assets/style.css"

function PageHero(props){
    return (<>

<div className="full-width-image margin-top-0" style={{ backgroundImage: `url(${props.background}) `}}>
    
    
    <div className="flexbox">

        <h4 style={{color: "white"}}>
            {props.underrubrik}
        </h4>
        
        <h1 style={{color: "white"}}>
            {props.rubrik}
        </h1>
        
        <p style={{color: "white"}}>
            {props.text}
        </p>
       
        <div className="flexbox" style={{flexDirection: "row" }}>
            <a href={props.knapp1Link}>
                <button className="btn-primary" style={{marginRight: "2rem"}}>{props.knapp1}</button>
            </a>
           
            <a href={props.knapp2Link}>
                <button className="btn-clear">{props.knapp2}</button>
            </a>
        </div>
    
    </div>
    
   
    
</div>


    </>)
  }

  export default PageHero