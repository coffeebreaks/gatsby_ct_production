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




      ACF_HERO {
        knapp1
        knapp1Link
        knapp2
        knapp2Link
        rubrik
        text
        underrubrik
        image {
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
        
          sourceUrl
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
