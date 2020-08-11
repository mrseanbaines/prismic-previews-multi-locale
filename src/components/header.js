import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import { withPreview } from "@prismicio/gatsby-source-prismic-graphql"

import { useLocale } from "../context"
import { localeToCountryCode } from "../utils/localeToCountryCode"

const Header = ({ data }) => {
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to={`/${localeToCountryCode(data._meta.lang)}`}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {data.title}
          </Link>
        </h1>
      </div>
    </header>
  )
}

const Container = () => {
  const locale = useLocale()

  return (
    <StaticQuery
      query={`${query}`}
      render={withPreview(({ prismic }) => {
        const data = prismic.allHeaders.edges.find(
          edge => edge.node._meta.lang === locale
        ).node

        return <Header data={data} />
      }, query)}
    />
  )
}

const query = graphql`
  {
    prismic {
      allHeaders {
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

export default Container
