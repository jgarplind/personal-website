import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
export default ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <Link to="/blog">{"< Back to main path"}</Link>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      <small>
        Think something could use updating? Help out{" "}
        <a
          href={`https://github.com/jgarplind/personal-website/edit/master/posts${post.fields.slug}.mdx`}
        >
          directly at Github
        </a>
      </small>{" "}
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`
