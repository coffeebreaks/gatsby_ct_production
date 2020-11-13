import React from "react"

function Bubbla(props){
    
    return (
     // style={{background: `url( ${ACF_BUBBLOR.bakgrundsbild.localFile.childImageSharp.fluid.originalImg} )`  }}
  <div className="bubbla" > 
    
   <div className="two-cols" >
     
               {/* <div className="flex-row" style={{  background: `url( ${props.data.bakgrundsbild.localFile.childImageSharp.fluid.originalImg} )`, backgroundColor: "#272727"  }} >
               <h1 style={{color: "white", margin: "3rem", maxWidth: "25ch", textAlign: "center"}}> {props.data.huvudrubrik}</h1>
               
               <div className="textFlex">
               { props.data.text.map(text =>
                 <div className="text-col">
                   <h1 className="text-wrapper-headings" style={{ lineHeight: "1", fontSize: "3rem", color: "rgb(114 223 255)"  }}>{text.rubrik}</h1>
                   <p style={{color: "white" }}>{text.text}</p>
                 
                 </div>
                 
               )}
               </div> 
               </div> */}
               
               <div className="flex-row" >
    {props.data.kort.map(kort => 
             <div className="content-card-small">
                 <img className="logos" src={kort.bild.localFile.childImageSharp.fluid.originalImg}/>
                 <h1 className="card-headings">{kort.rubrik}</h1>
                 <p className="card-p">{kort.text}</p>
      
                 
                <div className="small-card-arrow"><div className="more"><p>Läs mer</p></div> ⇀ </div>
             
             </div>
       )}
       </div>
           
 
   </div>
     </div>
     )
   }
 

export default Bubbla