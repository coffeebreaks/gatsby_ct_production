import React from "react"

import { Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../../components/layout"
import CardBlock from "../cardblock"
import Bubbla from "../bubbla"
import { normalizePath } from "../../utils/get-url-path"

// dynamic modules

import HeroModule from "../heroModule"



function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage, ACF_HERO, ACF_CONTENT_BLOCK, ACF_BUBBLOR, ACF_CONTENT_LOOP } = page




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
 
const translationTable = {
  page_AcfContentLoop_Modules_HeroMod : HeroModule,  
  page_AcfContentLoop_Modules_CardField : CardField  
}


const CreateModuleFromACF = (props) => {
  const ModuleToReturn = translationTable[props.fieldGroupName]

return (<>  
  <ModuleToReturn data={props.data}/>
  </>)
}

if (ACF_CONTENT_LOOP.modules !== null){  
       
  return (
  <Layout>
    <div className="page-container">
      <div className="page-content">
    {ACF_CONTENT_LOOP.modules.map(x =>       
    <>
    {x.fieldGroupName?<CreateModuleFromACF fieldGroupName={x.fieldGroupName} data={x} />:""}
     </>
      )}
    <div class="content-block">


   





        {title === "Startsida"?<Bubbla data={ACF_BUBBLOR}/>:"2"}

      </div>
      </div>
      </div>

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
