import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>
      This is not a real astronaut, he is just a placeholder. Kudos to Gatsby
      for giving him to me.
    </p>
    <div class="max-w-xs mb-6">
      <Image />
    </div>
  </Layout>
)

export default IndexPage
