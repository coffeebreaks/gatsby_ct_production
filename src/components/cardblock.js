import React from "react"

function CardBlock(props){
    return (
      <>
      <div className="content-card" style={{background: `url(${props.background})`    }} >
      
        <div className="card-arrow">
        ⇀
        </div>

        <div class="text-wrapper">
          <h1 className="text-wrapper-headings" style={{fontSize: "50px"}}>{props.rubrik}</h1>
          <p>{props.text}</p>
        </div>
        
      </div>

      </>
      )}

export default CardBlock