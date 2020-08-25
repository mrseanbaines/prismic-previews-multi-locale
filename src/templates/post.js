import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { localeToCountryCode } from "../utils/localeToCountryCode"

const Post = props => {
  console.log("props", props)

  const prismicContent = props.data.prismic.allPosts.edges[0]

  if (!prismicContent) {
    return (
      <h1>
        No Prismic Content!{" "}
        <span role="img" aria-label="">
          😱
        </span>
      </h1>
    )
  }

  const data = prismicContent.node

  return (
    <Layout>
      <SEO title={data.title} />
      <h1>{data.title}</h1>
      <Link to={`/${localeToCountryCode(data._meta.lang)}`}>
        Go back to the homepage
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query($lang: String!, $uid: String!) {
    prismic {
      allPosts(lang: $lang, uid: $uid) {
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

export default Post
