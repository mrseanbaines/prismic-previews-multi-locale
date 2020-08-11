import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { localeToCountryCode } from "../utils/localeToCountryCode"

const SecondPage = props => {
  const data = props.data.prismic.allPage_2s.edges[0].node

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>{data.title}</h1>
      <p>Welcome to page 2</p>
      <Link to={`/${localeToCountryCode(data._meta.lang)}`}>
        Go back to the homepage
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query($lang: String!) {
    prismic {
      allPage_2s(lang: $lang) {
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

export default SecondPage
