import React from "react"

import { Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../../components/layout"
import PageHero from "../pagehero"
import CardBlock from "../cardblock"
import Bubbla from "../bubbla"
import { normalizePath } from "../../utils/get-url-path"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage, ACF_HERO, ACF_CONTENT_BLOCK, ACF_BUBBLOR, ACF_CONTENT_LOOP } = page


  
const HeroModule = (props) => {
  return (
  <>





      
      
<div className="full-width-image margin-top-0" style={{ backgroundImage: `url(${props.data.background.localFile.childImageSharp.fluid.originalImg}) `}}>
    
    
    <div className="flexbox">

       <div style={{color:"white"}}>

         <div dangerouslySetInnerHTML={{__html: props.data.text}}/>
  

       </div>
       



        <div className="flexbox" style={{flexDirection: "row" }}>
           
        {
          props.data.buttons.map(x => 
            <>
      
            <a href={x.button.url.url}>
            <button className="btn-primary" style={{ background: `${x.button.transparent? "rgba(0,0,0,0)":x.button.style}` ,marginRight: "2rem"}}>{x.button.text}</button>
            </a>
           
        

            </>
            )
        }
           
           
        </div>
    
    </div>
    
   
    
</div>
 



 

 

  </>
  )
}  
 
const translationTable = {
  page_AcfContentLoop_Modules_HeroMod : HeroModule  
}


const CreateModuleFromACF = (props) => {
  const ModuleToReturn = translationTable[props.fieldGroupName]
  return (<><ModuleToReturn data={props.data}/></>)
}
  



if (ACF_CONTENT_LOOP.modules !== null){  
       
  return (
  <Layout>
    {ACF_CONTENT_LOOP.modules.map(x=> 
    {console.log(x)}
    )}
    <CreateModuleFromACF fieldGroupName={ACF_CONTENT_LOOP.modules[1].fieldGroupName} data={ACF_CONTENT_LOOP.modules[0]} />
  </Layout>
  )
}

  return (    
    <Layout>


 
}
    


    <div className="page-container">
    <div className="page-content">
    <div class="content-block">


       
        {title === "Startsida"?ACF_CONTENT_BLOCK.innehall.map(x => 
        <CardBlock  background={x?.bild?.localFile?.childImageSharp?.fluid?.originalImg}
                    rubrik={x.rubrik}
                    text={x.text}
                    link={"s"}
        />
        ):""}
     

        


        {title === "Startsida"?
        <Bubbla data={ACF_BUBBLOR}/>
        :"2"}

      </div>
      </div>
      </div>


    <div className="footer">
          
    </div>

    </Layout>
  )
  {/* <p dangerouslySetInnerHTML={{ __html: content }} /> */}
}

export default BlogPost
