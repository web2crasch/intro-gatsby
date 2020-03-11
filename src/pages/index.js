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
          fields {
            slug
          }
          frontmatter {
            data(formatString: "YYYY MMMM,DD")
            title
          }
          excerpt
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
            <Link to={item.node.fields.slug}><h1>{item.node.frontmatter.title}</h1></Link>
            <h3>{item.node.frontmatter.data}</h3>
            <p>{item.node.excerpt}</p>
            <hr style={{height: "3px"}}/>
          </div>
        )
      })
    }
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
