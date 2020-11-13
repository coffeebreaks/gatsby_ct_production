import React from "react"
import { graphql } from "gatsby"

import BlogPost from "../../components/template-parts/blog-post"

export default ({ data }) => <BlogPost data={data} />

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      ACF_CONTENT_BLOCK {
        innehall {
          text
          rubrik
          bild {
            localFile {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                }
                
              }
            }
          }
        }
      }  

      

      ACF_CONTENT_LOOP {
          modules {
            ... on WpPage_AcfContentLoop_Modules_HeroMod {
              fieldGroupName
              text
              background { 
                localFile { childImageSharp { fluid {originalImg} } }
                }
            }

            ... on WpPage_AcfContentLoop_Modules_HeroMod {
              buttons {
                knapp {
                  style
                  text
                  transparent
                }
              }
            }

            ... on WpPage_AcfContentLoop_Modules_CardField {
            card {
              ... on WpPage_AcfContentLoop_Modules_CardField_Card_Textkort {
                fieldGroupName
                text
                title
                background { 
                localFile { childImageSharp { fluid {originalImg} } }
                }
              }
            }
            fieldGroupName
          }


          ... on WpPage_AcfContentLoop_Modules_Infokort {
            fieldGroupName
            rubrik
             background { 
                localFile { childImageSharp { fluid {originalImg} } }
                }
            textkolumn {
              ... on WpPage_AcfContentLoop_Modules_Infokort_Textkolumn_Textkolumn {
                textkolumn
              }
            }
          }




          }
        }



    
      ACF_BUBBLOR {
        huvudrubrik
        kort {
          rubrik
          text
          bild {
            localFile {
              childImageSharp {
                fluid {
                  originalImg
                }
              }
            }
          }
        }
        text {
          rubrik
          text
        }
        bakgrundsbild {
          localFile {
            childImageSharp {
              fluid {
                originalImg
              }
            }
          }
        }
      }




      featuredImage {
        node {
          
          remoteFile {
            ...HeroImage
          }
        }
      }
    }

    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
