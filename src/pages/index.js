import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="">
      Hello, I'm Joel{" "}
      <span role="img" aria-label="waving hand">
        👋
      </span>
    </h1>
    <p>Welcome to my playground/to-be information hub!</p>
    <p>
      If you're interested in tech, why don't you head over to the{" "}
      <Link to="/blog">Blog</Link>?
    </p>
    <p>
      Or if you'd like to know more about me, head over to the{" "}
      <Link to="/about">About page</Link>
    </p>
  </Layout>
)

export default IndexPage
