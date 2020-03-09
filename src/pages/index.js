import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___data, order: DESC}) {
      edges {
        node {
          frontmatter {
            data(formatString: "YYYY MMMM,DD")
            title
          }
          html
        }
      }
    }
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {
      data.allMarkdownRemark.edges.map((item,i) => {
        return (
          <div key={i}>
            <h1>{item.node.frontmatter.title}</h1>
            <h1>{item.node.frontmatter.data}</h1>
            <div dangerouslySetInnerHTML={{__html: item.node.html}}></div>
            <hr style={{height: "3px"}}/>
          </div>
        )
      })
    }
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
