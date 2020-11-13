import React from "react"  

 const HeroModule = (props) => {

    const Btn = (props) => (  
      <button className="btn-primary" style={{ background: `${props.data.transparent? "rgba(0,0,0,0)":props.data.style}` ,marginRight: "2rem"}}>{props.data.text}</button> 
    )

    return (
    <>
          
        <div className="full-width-image margin-top-0" style={{ backgroundImage: `url(${props.data.background.localFile.childImageSharp.fluid.originalImg}) `}}>
            <div className="flexbox">
              <div style={{color:"white"}}>
                  <div dangerouslySetInnerHTML={{__html: props.data.text}}/>
                </div>
                <div className="flexbox" style={{flexDirection: "row" }}>

                    { 
                      props.data.buttons?.map(x=>
                      <Btn data={x.knapp}/>
                    )
                    }

                </div>
            </div>   
        </div>
    
    </>
)}  

export default HeroModule