import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { localeToCountryCode } from "../utils/localeToCountryCode"

const IndexPage = props => {
  const data = props.data.prismic.allHomepages.edges[0].node

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.title}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to={`/${localeToCountryCode(data._meta.lang)}/page-2`}>
        Go to page 2
      </Link>{" "}
      <br />
    </Layout>
  )
}

export const query = graphql`
  query($lang: String!) {
    prismic {
      allHomepages(lang: $lang) {
        edges {
          node {
            _meta {
              lang
            }
            title
          }
        }
      }
    }
  }
`

export default IndexPage
