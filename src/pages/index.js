import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Find me on:</p>
    <ul>
      <li>
        <a href="https://twitter.com/jgarplind">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/jgarplind">Github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/joel-garplind/">LinkedIn</a>
      </li>
    </ul>
    <p>
      This is not a real astronaut, he is just a placeholder. Kudos to Gatsby
      for giving him to me.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
