import React from "react"
import { Link, useStaticQuery, graphql, StaticQuery } from "gatsby"
import { Menu, Button, Grid, Box } from "@chakra-ui/core"
import { normalizePath } from "../utils/get-url-path"

export default () => (
<div>



<StaticQuery 
query={graphql`
  query MenuQuery {

  menu: allWpPage (sort: {fields: menuOrder, order: ASC}) {
    edges{
      node {
      title
      uri
      }
    }
  }

  installningar: allWpPage(filter: {title: {eq: "Inställningar"}}) {
    edges {
      node {
        ACF_PAGE_LOGO {
          logo {
            localFile {
              childImageSharp {
                fluid {
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  }
}


`}
render={data => (
  <div id="nav-menu" className="navbar-brand">
  <img src={data.installningar.edges[0].node.ACF_PAGE_LOGO.logo.localFile.childImageSharp.fluid.originalImg}/>
  {data.menu.edges.map(x => x.node.title === "Inställningar"?"":
  <Link className="navbar-item" to={x.node.uri}>
    {x.node.title}
  </Link>
  )}
  </div>
)}
/>


</div>

)



  
