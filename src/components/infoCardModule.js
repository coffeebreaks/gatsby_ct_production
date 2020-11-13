import React from "react"

const InfoCardModule =(props)=>{
    return (
    <>
    <div className="flex-row" style={{  background: `url( ${props.data.background.localFile.childImageSharp.fluid.originalImg} )`, backgroundColor: "#272727"  }} >
                 <h1 style={{color: "white", margin: "3rem", maxWidth: "25ch", textAlign: "center"}}> {props.data.rubrik}</h1>
                 
                 <div className="textFlex">
                 { props.data.textkolumn?.map(text =>
                <div className="text-col">
                <div class="bright html" dangerouslySetInnerHTML={{__html: text.textkolumn}}/>
                     
                   
                   </div>
                   
                 )}
                 </div> 
                 </div>
    </>
    )
  }

  export default InfoCardModule