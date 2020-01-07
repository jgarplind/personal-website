import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BlogPostSummary = ({ node }) => (
  <article key={node.id} className="rounded py-1">
    <header>
      <h3>
        <Link className="text-headline" to={node.fields.slug}>
          {node.frontmatter.title}
        </Link>
      </h3>
      <small>
        {node.frontmatter.date} / {node.timeToRead} minute read
      </small>
    </header>
    <section>
      <p>{node.excerpt}</p>
    </section>
    <Link to={node.fields.slug}>Read more</Link>
  </article>
)

BlogPostSummary.propTypes = {
  node: PropTypes.object,
}

BlogPostSummary.defaultProps = {
  node: {
    id: "",
    frontmatter: {
      title: "",
      date: "1970-01-01",
    },
    excerpt: "",
    timeToRead: "",
  },
}

export default BlogPostSummary
