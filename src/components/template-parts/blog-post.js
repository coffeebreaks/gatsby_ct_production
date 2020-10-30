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
  const { title, content, featuredImage, ACF_HERO, ACF_CONTENT_BLOCK, ACF_BUBBLOR } = page


 
  



 
  
  return (
 

    <Layout>

    
    
    {title === "Startsida"?
    <PageHero background    ={ACF_HERO.image.localFile.childImageSharp.fluid.originalImg}
              knapp1        ={ACF_HERO.knapp1}
              knapp1Link    ={ACF_HERO.knapp1Link}
              knapp2        ={ACF_HERO.knapp2 }
              knapp2Link    ={ACF_HERO.knapp2Link }
              rubrik        ={ACF_HERO.rubrik}
              text          ={ACF_HERO.text}
              underrubrik   ={ACF_HERO.underrubrik }
    />
    :"" }


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
