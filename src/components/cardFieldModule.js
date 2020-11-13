import React from "react"

const CardField = (props) => {
    console.log(props)
    return (<>
      <div class="content-block">
    {props.data.card?.map(x => 
      <>
     
      <div className="content-card" style={{background: `url(${x.background.localFile.childImageSharp.fluid.originalImg})`    }} >
        <div className="card-arrow">
        ⇀
        </div>
        <div class="text-wrapper">
          <h1 className="text-wrapper-headings" style={{fontSize: "50px"}}>{x.title}</h1>
          <p>{x.text}</p>
        </div>      
      </div>
  
  
  
      </>
      )}
      </div>
     
      </>)
  }

  export default CardField