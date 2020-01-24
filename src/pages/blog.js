import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostSummary from "../components/blogPostSummary"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {data.allMdx.edges.map(({ node }) => {
        return <BlogPostSummary key={node.id} node={node} />
      })}
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
