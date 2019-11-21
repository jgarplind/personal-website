import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>
      <span role="img" aria-label="roadblock">
        🚧
      </span>
      <span>To be launched in 2019. Or later.</span>
      <span role="img" aria-label="roadblock">
        🚧
      </span>
    </h1>
  </Layout>
)

export default NotFoundPage
