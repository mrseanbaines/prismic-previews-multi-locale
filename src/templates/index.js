import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = props => {
  const data = props.data.prismic.allHomepages.edges[0].node

  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <figure>
          <img
            src={`${data.image.url}&w=100&dpr=2`}
            alt="SVG image alt text"
            style={{ width: 100, height: 100, margin: 0 }}
          />
          <figcaption>An SVG image ☝️</figcaption>
        </figure>
        <figure>
          <img
            src={`${data.image_2.url}&w=100&dpr=2`}
            alt="A PNG image alt text"
            style={{ width: 100, height: 100, margin: 0 }}
          />
          <figcaption>PNG image ☝️</figcaption>
        </figure>
      </div>
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
            image
            image_2
          }
        }
      }
    }
  }
`

export default IndexPage
