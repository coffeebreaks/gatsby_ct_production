import React from "react"

import { Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../../components/layout"
import CardBlock from "../cardblock"
import Bubbla from "../bubbla"
import { normalizePath } from "../../utils/get-url-path"

// dynamic modules

import HeroModule from "../heroModule"
import CardField from "../cardFieldModule"
import InfoCardModule from "../infoCardModule"
import FlipCards from "../flipCards"



function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage, ACF_HERO, ACF_CONTENT_BLOCK, ACF_BUBBLOR, ACF_CONTENT_LOOP } = page



 
const translationTable = {
  page_AcfContentLoop_Modules_HeroMod : HeroModule,  
  page_AcfContentLoop_Modules_CardField : CardField,  
  page_AcfContentLoop_Modules_Infokort : InfoCardModule  
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
        <FlipCards/>
      </div>
      </div>
      </div>

  </Layout>
  )
}

  return (    
<div>
  No data :/
</div>
  )
}

export default BlogPost
